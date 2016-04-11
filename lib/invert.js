'use strict';

module.exports = function(buff) {
  for (var i = 54; i < buff.readUInt32LE(10); i += 4) {
    let blueVal = buff.readUInt8(i);
    let greenVal = buff.readUInt8(i + 1);
    let redVal = buff.readUInt8(i + 2);
    let alphaVal = buff.readUInt8(i + 3);

    buff.writeUInt8(255 - blueVal, i);
    buff.writeUInt8(255 - greenVal, i + 1);
    buff.writeUInt8(255 - redVal, i + 2);
    buff.writeUInt8(255 - alphaVal, i + 3);
  }
  return buff;

};
