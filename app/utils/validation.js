import { REGEX } from '@/constants/regex';

export const validateEmail = (email) => {
  return String(email).toLowerCase().match(REGEX.EMAIL);
};

export const validatePassword = (password) => {
  return String(password).toLowerCase().match(REGEX.PASSWORD);
};
