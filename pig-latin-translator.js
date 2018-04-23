module.exports = {};

function pigLatinTranslator(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return {
    getPigLatin: translateSentenceInto,
    getEnglish: translateSentenceOut
  };

  function translateSentenceInto() {
    let sentenceSplit = string.split(' ');
    sentenceSplit.map(function(elem) {
      return translateWordInto(elem);
    });
    return sentenceSplit.join(' ');
  }

  function translateSentenceOut() {
    let sentenceSplit = string.split(' ');
    sentenceSplit.map(function(elem) {
      return translateWordOut(elem);
    });
    return sentenceSplit.join(' ');
  }

  function translateWordInto() {
    let firstLetter = string[0].toLowerCase();
    let translatedString = null;
    if (vowels.includes(firstLetter)) {
      translatedString = `${string}-ay`;
    } else {
      translatedString = `${string.slice(1)}-${firstLetter}ay`;
    }
    return translatedString;
  }
  function translateWordOut() {
    let firstLetter = string[0].toLowerCase();
    let translatedString = null;
    let stringSplit = string.split('-');
    if (vowels.includes(firstLetter)) {
      translatedString = stringSplit[0];
    } else {
      translatedString = `${stringSplit[1][0]}${stringSplit[0]}ay`;
    }
    return translatedString;
  }
}
