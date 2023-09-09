export const formatNumberAsInt = (amount) => {
  return parseFloat(Number(amount)).toLocaleString("en-IN");
};

export const formatNumberAsFloat = (amount) => {
  return parseFloat(Number(amount)).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const getMoneyFormat = (amount, currency = "INR") => {
  return `${
    amount?.toLocaleString("en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) ?? 0
  }`;
};
