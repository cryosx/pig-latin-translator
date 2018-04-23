module.exports = pigLatinTranslator;

function pigLatinTranslator(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let targetString = text;
  return {
    setText: setText,
    getPigLatin: translateSentenceInto,
    getEnglish: translateSentenceOut
  };

  function setText(text) {
    if (typeof text === 'string') {
      targetString = text;
    }
  }

  function translateSentenceInto() {
    let sentenceSplit = text.split(' ');
    let result = sentenceSplit.map(function(elem) {
      return translateWordInto(elem);
    });
    return result.join(' ');
  }

  function translateSentenceOut() {
    let sentenceSplit = text.split(' ');
    let result = sentenceSplit.map(function(elem) {
      return translateWordOut(elem);
    });
    return result.join(' ');
  }

  function translateWordInto(string) {
    let firstLetter = string[0].toLowerCase();
    let translatedString = null;
    if (vowels.includes(firstLetter)) {
      translatedString = `${string}-ay`;
    } else {
      translatedString = `${string.slice(1)}-${firstLetter}ay`;
    }
    return translatedString;
  }
  function translateWordOut(string) {
    let firstLetter = string[0].toLowerCase();
    let translatedString = null;
    let stringSplit = string.split('-');
    if (vowels.includes(firstLetter)) {
      translatedString = stringSplit[0];
    } else {
      if (stringSplit[1]) {
        translatedString = `${stringSplit[1][0]}${stringSplit[0]}`;
      } else {
        translatedString = stringSplit[0];
      }
    }
    return translatedString;
  }
}
