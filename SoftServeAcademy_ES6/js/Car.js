'use strict'

class Car {
  constructor(brand) {
  this._brand = brand;
  this._isStart = false;
  this._isDrive = false;
  this._devices = [];
  }

  get brand() {
    return this._brand;
  }

  get isStart() {
    return this._isStart;
  }

  get isDrive() {
    return this._isDrive;
  }

  get devices() {
    return this._devices;
  }

  start() {
    this._isStart = true;
    this._devices.forEach( (device) => {
      device.voltageSupply = true;
    });
  }

  stop() {
    if (!this._isDrive) {
      this._isStart = false;
      this._offAllDevices();
    }
  }

  drive() {
    if (this._isStart) {
      this._isDrive = true;
    }
  }
  
  parking() {
    if (this._isStart) {
      this._isDrive = false;
    }
  }

  getDeviceByName(name) {
    return this._devices.find((device) => device._name === name);
  }

  addDevice(device) {
    if (!this.getDeviceByName(device._name)) {
      this._devices.push(device);
    }
  }

  removeDeviceByName(name) {
    const index = this._devices.findIndex((device) => device._name === name);
    if (index >= 0) {
      this._devices.splice(index, 1);
    }
  } 

  _offAllDevices() {
    this._devices.forEach((device) => {
      device.voltageSupply = false;
      device.off();
    })
  } 
} 
  









