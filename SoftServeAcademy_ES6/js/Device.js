'use strict'
class Device {
  constructor (name) {
    this._name = name;
    this._state = false;
    this._voltageSupply = false;
  }

  set voltageSupply(voltage) {
    this._voltageSupply = voltage;
  }

  get voltageSupply() {
    return this._voltageSupply;
  }

  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  on() {
    if (this._voltageSupply) {
      this._state = true;
    }
  }
  
  off() {
    this._state = false;
  }
}
