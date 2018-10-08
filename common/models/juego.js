'use strict';

module.exports = function(Juego) {

/**
 * Devuelve el nombre de un juego
 * @param {Function(Error, string)} callback
 */
Juego.prototype.getNombre = function(callback) {
  // TODO
  callback(null, this.nombre);
};
};
