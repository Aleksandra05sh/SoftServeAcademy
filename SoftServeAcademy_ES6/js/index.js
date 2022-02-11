'use strict'

//Create driver
const driver = new Driver('Sasha', 5);
console.log(driver.fullInfo);

//Create car and set it for driver
const car = new Car('Mazda');
driver.car = car;
console.log(driver.fullInfo);

// Create radio with radiostations
var radio1 = new Radio('radio1', [new Radiostation(101), new Radiostation(103), new Radiostation(105), new Radiostation(107)]);

// Add radio in the car
car.addDevice(radio1);
console.log('Devices: ');
console.log(car.devices);

//Add ome more radio
car.addDevice(new Radio('radio2'));
console.log('Deivces in the car (add radio2): ');
console.log(car.devices);

//Try to add device which already exists
car.addDevice(new Radio('radio2'));
console.log(car.devices);

//Add one more radio
car.addDevice(new Radio ('radio4', [new Radiostation(105), new Radiostation(107), new Radiostation(100)]));
console.log('Deivces in the car (add radio4): ');
console.log(car.devices);

//Remove device 
car.removeDeviceByName('radio2');
console.log('Deivces in the car (remove radio2): ');
console.log(car.devices);

//Attempt to turn on the radio when the car is not start
driver.onDeviceByName ('radio4');
console.log(`Device status after attempt to turn on device (car on stop): ${car.getDeviceByName('radio4').state}`); 

//Start car and check voltage supply in the car
driver.startCar();
console.log('Voltage supply status, the car is on Start:'); 
car.devices.forEach(function(el) {
  console.log (`Device name: ${el.name}; device status: ${el.state}; device voltage supply status: ${el.voltageSupply}`);
}); 

//Switch to drive
driver.driveCar();
console.log(`Switch to drive. Car status (isDrive): ${car.isDrive}`);

//Turn on the radio1
driver.onDeviceByName('radio1');
console.log(`Checking the status of the radio when it is turned on: ${car.getDeviceByName('radio1').state}`);

//Increase the volume
driver.increaseVolumeRadio('radio1');
console.log(`Increase the volume, checking the volume: ${car.getDeviceByName('radio1').volume}`);

//Decreasethe volume, checking the volume: the volume
driver.decreaseVolumeRadio('radio1');
console.log(`Decrease the volume, checking the volume: ${car.getDeviceByName('radio1').volume}`);

//Change radiostation
driver.changeRadioStation('radio1');
console.log(`Switched the radio station, radio frequency: ${car.getDeviceByName('radio1').curRadiostation.radioFrequency}`);

//Set certain radio frequency
driver.setRadiostationByFM('radio1', 107);
console.log(`Set certain radio frequency: ${car.getDeviceByName('radio1').curRadiostation.radioFrequency}`);

//Switched to parking
driver.parkingCar();
console.dir(`Switched to parking, check isDrive: ${driver.car.isDrive}`);

//Turn off the car
driver.stopCar();
console.dir(`Turn off the car, check isStart: ${driver.car.isStart}`);

//Check devices: divice status and voltage supply status
console.log('Divice status and voltage supply status after turning of the car:');
car.devices.forEach((el) => {
  console.log (`Device name: ${el.name}; device status: ${el.state}; device voltage supply status: ${el.voltageSupply}`);
});

driver.asyncSetRadiostationByFM('radio1', 107, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log('Output after the first asynchronous call');
    driver.asyncSetRadiostationByFM('radio1', 105, (error) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log('Output after the second asynchronous call');
        driver.asyncSetRadiostationByFM('radio1', 105, (error) => {
          if (error) {
            console.log(error.message);
          } else {
            console.log('Output after the third asynchronous call');
          }
        });
      }
    });
  } 
});





