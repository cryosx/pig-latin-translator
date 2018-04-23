const expect = require('chai').expect;
const should = require('chai').should();
const pigLatinTranslator = require('../pig-latin-translator.js');

describe('pigLatinTranslator', function() {
  let translator = null;
  beforeEach(function() {
    translator = pigLatinTranslator('test');
  });
  describe('getPigLatin()', function() {
    // translator = pigLatinTranslator('test');
    it('should be a function', function() {
      expect(translator).to.respondTo('getPigLatin');
    });
    it('should translate into pig latin', function() {
      expect(translator.getPigLatin()).to.equal('est-tay');
    });
  });
  describe('getEnglish()', function() {
    it('should be a function', function() {
      expect(translator).to.respondTo('getPigLatin');
    });
  });
});
