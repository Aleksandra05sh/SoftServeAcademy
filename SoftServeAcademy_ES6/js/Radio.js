'use strict'
class Radio extends Device {
  constructor(name, radiostations) {
    super(name);
    this._radiostations = radiostations;
    this._curRadiostationIndex = 0;
    this._volume = 50;  
  }

  set curRadiostationIndex(index) {
    if (index < this._radiostations.length) {
      this._curRadiostationIndex = index;
    }
  }

  get curRadiostation() {
    return this._radiostations[this._curRadiostationIndex];
  }

  get radiostations() {
    return this._radiostations;
  }

  get volume() {
    return this._volume;
  }

  increaseVolume() {
    if (this._volume < 100) {
      this._volume++ ;
    }
  }
  
  decreaseVolume() {
    if (this._volume > 0) {
      this._volume-- ;
    }
  }

  changeRadiostation() {
    if (this._curRadiostationIndex < this._radiostations.length - 1) {
      this._curRadiostationIndex++ ;
    } else {
      this._curRadiostationIndex = 0; 
    }
  }
} 



