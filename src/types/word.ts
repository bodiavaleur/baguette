export interface Word {
  _id: string;
  word: string;
  translations: string[];
  image: string;
  example: string;
  knowledgeLevel: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
