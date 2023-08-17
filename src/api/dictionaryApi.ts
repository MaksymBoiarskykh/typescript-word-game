import { IDictionaryApi } from "./IDictionaryApi";
const link = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const dictionaryApi = async (
  word: string,
  url: string = link
): Promise<IDictionaryApi | undefined> => {
  try {
    let response = await fetch(`${url}${word}`);
    if (response.ok) {
      const data = await response.json();
      return data[0];
    }
  } catch {
    console.error("fail fetch request");
    throw new Error("fail fetch request");
  }
};

export { dictionaryApi };
