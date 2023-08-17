import { isWordValid } from "./validation/isWordValid";
import { isFirstSymbCorrect } from "./validation/isFirstSymbCorrect";
import { createRobotStep } from "./robot/createRobotStep";
import { IDictionaryApi } from "./api/IDictionaryApi";

const takeNewWord = async (
  word: string,
  field: HTMLDivElement,
  historyGame: string[]
) => {
  console.log(word + " - my word");

  const isWordCorrect: IDictionaryApi | undefined = await isWordValid(
    word,
    historyGame
  );
  console.log(isWordCorrect);
  const lastSymbol: string | undefined = isFirstSymbCorrect(word, historyGame);

  if (!lastSymbol || !isWordCorrect) {
    return (field.innerHTML = `word isn't valid, last word: ${
      historyGame[historyGame.length - 1] || "unknown"
    }`);
  }

  historyGame.push(word);

  // robot step

  const robotStep = await createRobotStep(lastSymbol, historyGame);

  if (!robotStep) {
    return (field.innerHTML = "you win");
  }

  field.innerHTML = `
  <div>Robot word: ${robotStep.word}</div>
  <div>
    Meanings: ${robotStep.meanings[0].definitions[0].definition}
  </div>
  `;

  historyGame.push(robotStep.word);
  console.log(historyGame);
  return historyGame;
};

export { takeNewWord };
