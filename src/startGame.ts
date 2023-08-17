import { takeNewWord } from "./takeNewWord";

const startGame = (inputTag: string, btnTag: string, fieldTag: string) => {
  const wordInput: HTMLInputElement | null = document.querySelector(inputTag);
  const btn: HTMLButtonElement | null = document.querySelector(btnTag);
  const field: HTMLDivElement | null = document.querySelector(fieldTag);
  if (!wordInput || !btn || !field) {
    console.error("uncorrect html tag");
    return;
  }

  const historyGame: string[] = [];

  btn.addEventListener("click", () => {
    const word: string = wordInput.value.toLowerCase().trim();
    takeNewWord(word, field, historyGame);
    wordInput.value = "";
  });
};

export { startGame };
