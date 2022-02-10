'use strict'

function Radiostation(radioFrequency) {
  this._radioFrequency = radioFrequency;
};

Radiostation.prototype.getRadioFrequency = function() {
  return this._radioFrequency;
};
