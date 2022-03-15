const patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,30}$/i,
};

const checkRegex = (input: string, type: string): boolean => {
  switch (type) {
    case "email":
      return patterns.email.test(input);
    case "password":
      return patterns.password.test(input);
  }
  return true;
};

export { checkRegex };
