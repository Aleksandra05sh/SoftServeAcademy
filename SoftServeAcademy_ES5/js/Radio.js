'use strict'
function Radio(name, radiostations) {
  Device.call(this, name);
  this._radiostations = radiostations;
  this._curRadiostationIndex = 0;
  this._volume = 50;                        
};

Radio.prototype = Object.create(Device.prototype);
Radio.prototype.constructor = Radio;

Radio.prototype.setCurrentRadiostation = function(index) {
  if (index < this._radiostations.length) {
    this._curRadiostationIndex = index;
  }
};

Radio.prototype.getCurrentRadiostation = function() {
  return this._radiostations[this._curRadiostationIndex];
};

Radio.prototype.getRadiostations = function() {
  return this._radiostations;
};

Radio.prototype.getVolume = function() {
  return this._volume;
};

Radio.prototype.increaseVolume = function() {
  if (this._volume < 100) {
    this._volume++ ;
  }
};

Radio.prototype.decreaseVolume = function() {
  if (this._volume > 0) {
    this._volume-- ;
  }
};

Radio.prototype.changeRadiostation = function(){
  if (this._curRadiostationIndex < this._radiostations.length - 1) {
    this._curRadiostationIndex++ ;
  } else {
    this._curRadiostationIndex = 0; 
  }
};