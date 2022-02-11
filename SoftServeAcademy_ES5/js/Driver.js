'use strict'

function Driver(name, driveExperience) {
  this._name = name;
  this._driveExperience = driveExperience;
  this._car = null;
}

Driver.prototype.getName = function() {
  return this._name;
}

Driver.prototype.getDriveExperience = function() {
  return this._driveExperience;
}

Driver.prototype.setCar = function(car) {
  if (car instanceof Object && '_brand' in car) {
    this._car = car;
  }
}

Driver.prototype.getCar = function() {
  return this._car;
}

Driver.prototype.getFullInfo = function() {
  var carInfo;
  if (this._car) {
    carInfo = this._car.getBrand();
  } else {
    carInfo = 'not assined';
  }
  return 'Driver name: ' + this._name + '.\nDrive experience: ' + this._driveExperience  + ' year(s).\nCar: ' + carInfo+ '.';
}

Driver.prototype.startCar = function() {
  this._car.start();
}

Driver.prototype.stopCar = function() {
  this._car.stop();
}

Driver.prototype.driveCar = function() {
  this._car.drive();
}

Driver.prototype.parkingCar = function() {
  this._car.parking();
}

Driver.prototype.onDeviceByName = function(name){
  var device = this._car.getDeviceByName(name);
  if (device) {
    device.on();
  } 
}

Driver.prototype.offDeviceByName = function(name){
  var device = this._car.getDeviceByName(name);
  if (device) {
    device.off();
  }
}

Driver.prototype.increaseVolumeRadio = function(name) {
  var device = this._car.getDeviceByName(name);
  if (device) {
    device.increaseVolume();
  }
}

Driver.prototype.decreaseVolumeRadio = function(name) {
  var device = this._car.getDeviceByName(name);
  if (device instanceof Radio) {
    device.decreaseVolume();
  }
}

Driver.prototype.changeRadioStation = function(name) {
  var device = this._car.getDeviceByName(name);
  if (device instanceof Radio) {
    device.changeRadiostation();
  }
}

Driver.prototype.setRadiostationByFM = function(name, fm) {
  var device = this._car.getDeviceByName(name);
  if (device instanceof Radio) {
    var arrRadiostations = device.getRadiostations();
    var indexRadiostation;
    for (var i = 0; i < arrRadiostations.length; i++) {
      if (arrRadiostations[i].getRadioFrequency() === fm) {
        indexRadiostation = i;
        break;
      }
    }
    device.setCurrentRadiostation(indexRadiostation);
  }
};

Driver.prototype.asyncSetRadiostationByFM = function(name, fm, callback) {
  setTimeout(function() {
    var device = this._car.getDeviceByName(name);
    var error;
    var indexRadiostation;
    if (device instanceof Radio) {
      var arrRadiostations = device.getRadiostations();
      for (var i = 0; i < arrRadiostations.length; i++) {
        if (arrRadiostations[i].getRadioFrequency() === fm) {
          indexRadiostation = i;
          break;
        } 
      }
      if (indexRadiostation === undefined) {
        error = new Error('Invalid Parameters: radiostation no exist');
      }
      device.setCurrentRadiostation(indexRadiostation); 
    } else {
      error = new Error('Invalid Parameters: radio no exist');
    }
    callback (error);
  }.bind(this), 1000);
}



