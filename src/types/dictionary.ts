export interface Dictionary {
  _id: string;
  user: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface DictionaryStats {
  newCount: number;
  studyingCount: number;
  learnedCount: number;
}
