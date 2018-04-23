const expect = require('chai').expect;
const should = require('chai').should();
const pigLatinTranslator = require('../pig-latin-translator.js');

describe('pigLatinTranslator', function() {
  let translator = null;
  beforeEach(function() {
    translator = pigLatinTranslator('test');
  });
  describe('getText()', function() {
    // translator = pigLatinTranslator('test');
    it('should be a function', function() {
      expect(translator).to.respondTo('getText');
    });
    it(`should be able to get the string that will be translated into/out of pig latin`, function() {
      expect(translator.getText()).to.equal('test');
    });
  });
  describe('setText()', function() {
    // translator = pigLatinTranslator('test');
    it('should be a function', function() {
      expect(translator).to.respondTo('setText');
    });
    it(`should be able to set the string to be translated, 'test' => 'apple`, function() {
      expect(translator.getText()).to.equal('test');
      translator.setText('apple');
      expect(translator.getText()).to.equal('apple');
    });
  });
  describe('getPigLatin()', function() {
    // translator = pigLatinTranslator('test');
    it('should be a function', function() {
      expect(translator).to.respondTo('getPigLatin');
    });
    it(`should translate words into pig latin, 'test' => 'est-tay`, function() {
      expect(translator.getPigLatin()).to.equal('est-tay');
    });
    it(`should translate sentences into pig latin, 'test test' => 'est-tay esy-tay`, function() {
      translator.setText('test test');
      expect(translator.getPigLatin()).to.equal('est-tay est-tay');
    });
    it(`should translate sentences into pig latin, 'Good morning everyone' => 'ood-gay orning-may everyone-ay'`, function() {
      translator.setText('Good morning everyone');
      expect(translator.getPigLatin()).to.equal(
        'ood-gay orning-may everyone-ay'
      );
    });
  });
  describe('getEnglish()', function() {
    it('should be a function', function() {
      expect(translator).to.respondTo('getPigLatin');
    });
    it(`should translate into pig latin, 'test' => 'test'`, function() {
      expect(translator.getEnglish()).to.equal('test');
    });
    it(`should translate into pig latin, 'est-tay' => 'test`, function() {
      translator.setText('est-tay');
      expect(translator.getEnglish()).to.equal('test');
    });
  });
});
