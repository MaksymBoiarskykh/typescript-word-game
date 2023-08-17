import { isWordValid } from "../validation/isWordValid";
import { findWordRobot } from "./findWordRobot";
import { IDictionaryApi } from "../api/IDictionaryApi";

export const createRobotStep = async (
  lastSymbol: string,
  historyGame: string[]
): Promise<IDictionaryApi | undefined> => {
  const lastWord: string = await findWordRobot(lastSymbol);
  const lastWordData: IDictionaryApi | undefined = await isWordValid(
    lastWord,
    historyGame
  );

  return lastWordData;
};
