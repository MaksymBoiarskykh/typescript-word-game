import { dictionaryApi } from "../api/dictionaryApi";

export const isWordValid = async (word: string, historyGame: string[]) => {
  const isOfficial = await dictionaryApi(word);
  const isAlreadyPushed: boolean = historyGame.includes(word);

  const isCorrect = isOfficial && !isAlreadyPushed;

  if (isCorrect) {
    return isOfficial;
  }
};
