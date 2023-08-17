import { listOfWords } from "./listOfWords";

// binary search
export const findWordRobot = (symbol: string) => {
  let start = 0;
  let end = listOfWords.length - 1;

  const find: any = async (start: number, end: number) => {
    let middle = Math.floor((end + start) / 2);
    if (listOfWords[middle] === "") {
      middle += 1;
    }
    if (symbol === listOfWords[middle][0]) {
      const word = listOfWords[middle];
      listOfWords[middle] = "";
      return word;
    }
    if (symbol > listOfWords[middle][0]) {
      return find(middle + 1, end);
    } else {
      return find(start, middle - 1);
    }
  };

  return find(start, end);
};
