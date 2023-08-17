interface IPhonetic {
  audio: string;
  text: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface IDictionaryApi {
  word: string;
  phonetics?: IPhonetic[];
  meanings: IMeaning[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls?: string[];
}
