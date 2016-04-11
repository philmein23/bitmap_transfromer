'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const imgTransformer = require(__dirname + '/../lib/bitmapTransformer');

let buff;
describe('invert', () => {
  before((done) => {
    fs.readFile(__dirname + '/../img/palette-bitmap.bmp', (err, data) => {
        if (err) throw err;
        buff = data;
        done();
    });
  });

  it('should be a function', () => {
    expect(typeof imgTransformer).to.eql('function');
  });
  it('should contain buffer data', () => {
    expect(Buffer.isBuffer(buff)).to.eql(true);
  });
});
