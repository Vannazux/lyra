'use strict';
module.exports = function(parsed, from) {
  var map = this._rule._map.data;
  map.source = from.parent()._source._id;
};
