export const API_URL = 'http://192.168.1.103:6565/api/v1/';

export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}auth/login/`,
  REGISTER: `${API_URL}auth/register/`,
};

export const WORD_ENDPOINTS = {
  ADD: `${API_URL}words/add/`,
  WORD: `${API_URL}words/`,
  EDIT: `${API_URL}words/edit/`,
  DELETE: `${API_URL}words/delete/`,
  UPLOAD_IMAGE: `${API_URL}words/image/`,
  GET_MY_WORDS: `${API_URL}words/my/`,
};

export const DICTIONARY_ENDPOINTS = {
  MY_DICTIONARIES: `${API_URL}dictionaries/my/`,
  CREATE: `${API_URL}dictionaries/create/`,
  EDIT: `${API_URL}dictionaries/edit/`,
  GET_BY_ID: `${API_URL}dictionaries/`,
  UPLOAD_IMAGE: `${API_URL}dictionaries/image/`,
  GET_STATS: `${API_URL}dictionaries/stats/`,
  GET_WORDS: `${API_URL}dictionaries/words/`,
};

export const TRAINING_ENDPOINTS = {
  FLASHCARD: `${API_URL}training/flashcard/`,
};
