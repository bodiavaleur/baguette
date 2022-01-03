import {Word} from './word';

export interface Dictionary {
  user: string;
  dictionary: Word[];
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
