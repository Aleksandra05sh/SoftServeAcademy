'use strict'
function Car(brand) {
  this._brand = brand;
  this._isStart = false;
  this._isDrive = false;
  this._devices = [];
};

Car.prototype.getBrand = function() {
  return this._brand;
};

Car.prototype.getIsStart = function() {
  return this._isStart;
};

Car.prototype.getIsDrive = function() {
  return this._isDrive;
};


Car.prototype.getDevices = function() {
  return this._devices;
};

Car.prototype.start = function() {
  this._isStart = true;
  this._devices.forEach(function (device) {
    device.setVoltageSupply(true);
  });
};

Car.prototype.stop = function() {
  if (!this._isDrive) {
    this._isStart = false;
    this._offAllDevices();
  }
};

Car.prototype.drive = function() {
  if (this._isStart) {
    this._isDrive = true;
  }
};

Car.prototype.parking = function() {
  if (this._isStart) {
    this._isDrive = false;
  }
};


Car.prototype.addDevice = function(device) {
  if (!(this.getDeviceByName(device._name))) {
    this._devices.push(device);
  }
};

Car.prototype.getDeviceByName = function(name) {
  for (var i = 0; i < this._devices.length; i++) {
    if (this._devices[i].getName() === name) {
      return this._devices[i];
    } 
  }
};

Car.prototype.removeDeviceByName = function(name) {
  var index = this._devices.indexOf(this.getDeviceByName(name));
  if (index >= 0) {
    this._devices.splice(index, 1);
  }
};

Car.prototype._offAllDevices = function() {
  this._devices.forEach(function(device) {
    device.setVoltageSupply(false);
    device.off();
  });
};





