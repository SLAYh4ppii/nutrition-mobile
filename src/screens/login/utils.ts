const isValidEmail = (email: string): boolean => {
  const emailRegex = /.+@.+\..+/;
  return email.match(emailRegex) !== null;
};

const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

export { isValidEmail, isValidPassword };
