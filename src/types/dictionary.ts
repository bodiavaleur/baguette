import {Word} from './word';

export interface Dictionary {
  user: string;
  dictionary: Word[];
  createdAt: string;
  updatedAt: string;
}
