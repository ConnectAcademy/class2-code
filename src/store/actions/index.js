export const addPolicy = (name, price) => {
  return {
    type: "ADD_POLICY",
    payload: {
      name,
      price,
    },
  };
};

export const deletePolicy = (name, price) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
      price,
    },
  };
};

export const payment = (amount) => {
  return {
    type: "PAYMENT",
    payload: amount,
  };
};
