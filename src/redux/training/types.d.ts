import {StatusesCollection} from '~types/statuses';
import {Dictionary} from '~types/dictionary';

export interface TrainingSliceState {
  statuses: StatusesCollection;
  trainingDictionary: Dictionary | null;
}

export interface FlashcardTrainingArgs {
  wordId: string;
}
