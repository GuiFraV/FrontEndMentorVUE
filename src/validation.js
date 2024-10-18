export const validateName = (name) => {
  return name.trim().length > 0;
};

export const validateCardNumber = (number) => {
  const regex = /^\d{16}$/;
  return regex.test(number.replace(/\s+/g, ""));
};

export const validateExpMonth = (month) => {
  const m = parseInt(month, 10);
  return m >= 1 && m <= 12;
};

export const validateExpYear = (year) => {
  const y = parseInt(year, 10);
  return y >= 0 && y <= 99;
};

export const validateCVC = (cvc) => {
  const regex = /^\d{3}$/;
  return regex.test(cvc);
};
