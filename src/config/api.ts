export const API_URL = 'http://207.154.244.29:6565/api/v1/';
// export const API_URL = 'http://192.168.1.101:6565/api/v1/';

export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}auth/login/`,
  REGISTER: `${API_URL}auth/register/`,
};

export const WORD_ENDPOINTS = {
  ADD: `${API_URL}word/add/`,
  WORD: `${API_URL}word/`,
  EDIT: `${API_URL}word/edit/`,
  DELETE: `${API_URL}word/delete/`,
  UPLOAD_IMAGE: `${API_URL}word/image/`,
};

export const DICTIONARY_ENDPOINTS = {
  MY_DICTIONARIES: `${API_URL}dictionary/user/`,
  CREATE: `${API_URL}dictionary/create/`,
  EDIT: `${API_URL}dictionary/edit/`,
  GET_BY_ID: `${API_URL}dictionary/`,
  UPLOAD_IMAGE: `${API_URL}dictionary/image/`,
};

export const TRAINING_ENDPOINTS = {
  FLASHCARD: `${API_URL}training/flashcard/`,
};
