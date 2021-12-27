export const API_URL = 'http://207.154.244.29:6565/api/v1/';

export const AUTH_ENDPOINTS = {
  LOGIN: `${API_URL}auth/login/`,
  REGISTER: `${API_URL}auth/register/`,
};

export const WORD_ENDPOINTS = {
  ADD_WORD: `${API_URL}word/add/`,
  WORD: `${API_URL}word/`,
};

export const DICTIONARY_ENDPOINTS = {
  USER_DICTIONARY: `${API_URL}dictionary/user/`,
};
