module.exports = pigLatinTranslator;

function pigLatinTranslator(text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let targetString = text;
  return {
    getText: getText,
    setText: setText,
    getPigLatin: translateSentenceInto,
    getEnglish: translateSentenceOut
  };

  function getText() {
    return targetString;
  }

  function setText(text) {
    if (typeof text === 'string') {
      targetString = text;
    } else {
      throw new Error('Not a string');
    }
  }

  function translateSentenceInto() {
    let sentenceSplit = targetString.split(' ');
    let result = sentenceSplit.map(function(elem) {
      return translateWordInto(elem);
    });
    return result.join(' ');
  }

  function translateSentenceOut() {
    let sentenceSplit = targetString.split(' ');
    let result = sentenceSplit.map(function(elem) {
      return translateWordOut(elem);
    });
    return result.join(' ');
  }

  function getSplitIndex(string) {
    let index = null;
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        index = i;
        break;
      }
    }
    return index;
  }

  function translateWordInto(string) {
    let firstLetter = string[0].toLowerCase();
    let splitIndex = getSplitIndex(string);
    let firstHalf = string.toLowerCase().slice(0, splitIndex);
    let secondHalf = string.slice(splitIndex);

    let translatedString = null;
    if (vowels.includes(firstLetter)) {
      translatedString = `${string}-ay`;
    } else {
      translatedString = `${secondHalf}-${firstHalf}ay`;
    }
    return translatedString;
  }
  function translateWordOut(string) {
    if (!string.includes('-')) {
      return string;
    }
    let targetString = string.slice(0, string.length - 2);
    let firstLetter = string[0].toLowerCase();
    let translatedString = null;
    let stringSplit = targetString.split('-');
    if (stringSplit[1]) {
      console.log(stringSplit[1]);
      translatedString = `${stringSplit[1]}${stringSplit[0]}`;
    } else {
      translatedString = stringSplit[0];
    }
    return translatedString;
  }
}
