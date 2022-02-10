'use strict'

//Create driver
var driver = new Driver('Sasha', 5);
console.log(driver.getFullInfo());

//Create car and set it for driver
var car = new Car('Mazda');
driver.setCar(car);
console.log(driver.getFullInfo());

// Create radio with radiostations
var radio1 = new Radio('radio1', [new Radiostation(101), new Radiostation(103), new Radiostation(105), new Radiostation(107)]);

// Add radio in the car
car.addDevice(radio1);
console.log('Devices: ');
console.log(car.getDevices());

//Add ome more radio
car.addDevice(new Radio('radio2'));
console.log('Deivces in the car (add radio2): ');
console.log(car.getDevices());

//Try to add device which already exists
car.addDevice(new Radio('radio2'));
console.log(car.getDevices());

//Add one more radio
car.addDevice(new Radio ('radio4', [new Radiostation(105), new Radiostation(107), new Radiostation(100)]));
console.log('Deivces in the car (add radio4): ');
console.log(car.getDevices());

//Remove device 
car.removeDeviceByName('radio2');
console.log('Deivces in the car (remove radio2): ');
console.log(car.getDevices());

//Attempt to turn on the radio when the car is not start
driver.onDeviceByName ('radio4');
console.log('Device status after attempt to turn on device (car on stop): ' + (car.getDeviceByName('radio4').getState())); 

//Start car and check voltage supply in the car
driver.startCar();
console.log('Voltage supply status, the car is on Start:'); 
car.getDevices().forEach(function(el) {
  console.log ('Device name: ' + el.getName() + '; device status: ' + el.getState() + '; device voltage supply status: ' + el.getVoltageSupply())
}); 

//Switch to drive
driver.driveCar();
console.log('Switch to drive. Car status (isDrive): ' + car.getIsDrive());

//Turn on the radio1
driver.onDeviceByName('radio1');
console.log('Checking the status of the radio when it is turned on:' + car.getDeviceByName('radio1').getState());

//Increase the volume
driver.increaseVolumeRadio('radio1');
console.log('Increase the volume, checking the volume: ' + car.getDeviceByName('radio1').getVolume());

//Decreasethe volume, checking the volume: the volume
driver.decreaseVolumeRadio('radio1');
console.log('Decrease the the volume, checking the volume:: ' + car.getDeviceByName('radio1').getVolume());

//Change radiostation
driver.changeRadioStation('radio1');
console.log('Switched the radio station, radio frequency: ' + car.getDeviceByName('radio1').getCurrentRadiostation().getRadioFrequency());

//Set certain radio frequency
driver.setRadiostationByFM('radio1', 107);
console.log('Set certain radio frequency: '+ car.getDeviceByName('radio1').getCurrentRadiostation().getRadioFrequency());

//Switched to parking
driver.parkingCar();
console.dir('Switched to parking, check isDrive: ' + driver.getCar().getIsDrive());

//Turn off the car
driver.stopCar();
console.dir('Turn off the car, check isStart: ' + driver.getCar().getIsStart());

//Check devices: divice status and voltage supply status
console.log('Divice status and voltage supply status after turning of the car:');
car.getDevices().forEach(function (el) {
  console.log ('Device name: ' + el.getName() + '; device status: ' + el.getState() + '; device voltage supply status: ' + el.getVoltageSupply())
}); 

driver.asyncSetRadiostationByFM('radio1', 107, function(error) {
  if (error) {
    console.log(error.message);
    // throw error;
  } else {
    console.log('Output after the first asynchronous call');
    driver.asyncSetRadiostationByFM('radio1', 105, function(error) {
      if (error) {
        // throw error;
        console.log(error.message);
      } else {
        console.log('Output after the second asynchronous call');
        driver.asyncSetRadiostationByFM('radio1', 105, function(error) {
          if (error) {
            // throw error;
            console.log(error.message);
          } else {
            console.log('Output after the third asynchronous call');
          }
        });
      }
    });
  } 
});





