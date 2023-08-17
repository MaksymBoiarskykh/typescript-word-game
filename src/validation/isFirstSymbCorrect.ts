const isFirstSymbCorrect = (word: string, historyGame: string[]) => {
  let lastWord: string = historyGame[historyGame.length - 1] || word;

  let lastSymb = lastWord.match(/[a-zA-Z]$/);
  let fistSymb = word.match(/^\w/);

  if (lastWord === word) {
    return lastSymb?.[0];
  }

  const isValid = lastSymb?.[0] === fistSymb?.[0];
  if (isValid) {
    lastSymb = word.match(/[a-zA-Z]$/);
    return lastSymb?.[0];
  }
};

export { isFirstSymbCorrect };
