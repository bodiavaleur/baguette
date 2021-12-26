export const API_URL = 'http://172.20.10.3:6565/api/v1/';

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
