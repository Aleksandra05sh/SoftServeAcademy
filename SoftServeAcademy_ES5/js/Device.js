'use strict'
function Device(name) {
  this._name = name;
  this._state = false;
  this._voltageSupply = false;
};

Device.prototype.setVoltageSupply= function(voltage) {
  this._voltageSupply = voltage;
};

Device.prototype.getVoltageSupply = function() {
  return this._voltageSupply;
};

Device.prototype.getName = function() {
  return this._name;
};

Device.prototype.getState = function() {
  return this._state;
};


Device.prototype.on = function() {
  if (this._voltageSupply) {
    this._state = true;
  }
};

Device.prototype.off = function() {
  this._state = false;
};

Device.prototype.checkDeviceInstance = function(deviceConstructor) {
  return this instanceof deviceConstructor;
};

