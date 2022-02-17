import {Word} from './word';

export interface Dictionary {
  _id: string;
  user: string;
  dictionary: Word[];
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
