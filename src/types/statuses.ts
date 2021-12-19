export enum SliceStatuses {
  Reset = 'reset',
  Pending = 'pending',
  Rejected = 'rejected',
  Fulfilled = 'fulfilled',
}

export interface SliceStatusItem {
  pending: boolean;
  success: boolean;
  error: string;
}

export interface StatusesCollection {
  [key: string]: SliceStatusItem;
}

export interface StatusTemplates {
  [SliceStatuses.Reset]: () => SliceStatusItem;
  [SliceStatuses.Pending]: () => SliceStatusItem;
  [SliceStatuses.Rejected]: (error?: string) => SliceStatusItem;
  [SliceStatuses.Fulfilled]: () => SliceStatusItem;
}
