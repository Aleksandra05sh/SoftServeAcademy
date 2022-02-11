'use strict'

class Driver {
  constructor(name, driveExperience) {
    this._name = name;
    this._driveExperience = driveExperience;
    this._car = null;
  }

  get name() {
    return this._name;
  }

  get driveExperience() {
    return this._driveExperience;
  }

  set car(car) {
    if (car instanceof Object && '_brand' in car) {
      this._car = car;
    }
  }

  get car() {
    return this._car;
  }

  get fullInfo() {
    let carInfo;
    if (this._car) {
      carInfo = this._car.brand;
    } else {
      carInfo = 'not assined';
    }
    return `Driver name: ${this._name}. Drive experience: ${this._driveExperience}. Car: ${carInfo}.`;
  }

  startCar() {
    this._car.start();
  }

  stopCar() {
    this._car.stop();
  }

  driveCar() {
    this._car.drive();
  }

  parkingCar() {
    this._car.parking();
  }

  onDeviceByName(name) {
    const device = this._car.getDeviceByName(name);
    if (device) {
      device.on();
    } 
  }

  offDeviceByName(name) {
    const device = this._car.getDeviceByName(name);
    if (device) {
      device.off();
    }
  }

  increaseVolumeRadio(name) {
    const device = this._car.getDeviceByName(name);
    if (device) {
      device.increaseVolume();
    }
  }

  decreaseVolumeRadio(name) {
    const device = this._car.getDeviceByName(name);
    if (device instanceof Radio) {
      device.decreaseVolume();
    }
  }

  changeRadioStation(name) {
    const device = this._car.getDeviceByName(name);
    if (device instanceof Radio) {
      device.changeRadiostation();
    }
  }

  setRadiostationByFM(name, fm) {
    const device = this._car.getDeviceByName(name);
    if (device instanceof Radio) {
      const index = device.radiostations.findIndex((rs) => rs.radioFrequency === fm);
      device.curRadiostationIndex = index;
      if (index < 0) {
        throw new Error('Invalid Parameters: radiostation no exist');
      }
      device.curRadiostationIndex = index;
    } else {
      throw new Error('Invalid Parameters: radio no exist');
    }
  }
  
  asyncSetRadiostationByFM(name, fm, callback) {
    setTimeout(() => {
      const device = this._car.getDeviceByName(name);
      let error;
      if (device instanceof Radio) {
        const index = device.radiostations.findIndex((rs) => rs.radioFrequency === fm);
        device.curRadiostationIndex = index;
        if (index < 0) {
          error = new Error('Invalid Parameters: radiostation no exist');
        }
        device.curRadiostationIndex = index;
      } else {
        error = new Error('Invalid Parameters: radio no exist');
      }
      callback (error);
    }, 1000);
  }

}

