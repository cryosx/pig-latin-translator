const expect = chai.expect;
const should = chai.should();
const pigLatinTranslator = require('pig-latin-translator.js');

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
  });
  describe('getEnglish()', function() {
    it('should be a function', function() {
      expect(translator).to.respondTo('getPigLatin');
    });
  });
});
