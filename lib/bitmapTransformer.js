'use strict';
const fs = require('fs');
const transform = require(__dirname + '/invert');

module.exports = function(file) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log('done');
    let buff = data;


    let bitMap = {};
    bitMap.readHeader = buff.toString('ascii', 0, 2);
    bitMap.size = buff.readUInt32LE(2);
    bitMap.pixelArray = buff.readUInt32LE(10);
    bitMap.paletteColors = buff.readUInt32LE(46);

    console.log(bitMap);
    transform(buff);

    fs.writeFile(__dirname + '/../img/new_bitmap.bmp', buff, () => {
      if (err) throw err;
      console.log('Write to File Completed');
    });
  });
};
