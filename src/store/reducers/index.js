export const policies = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_POLICY":
      return [...state, payload.name];
    case "DELETE_POLICY":
      let oldArr = state;
      let newArr = oldArr.filter((pol) => pol === payload.name);
      return newArr;
    default:
      return state;
  }
};

export const amountOfMoney = (state = 0, { type, payload }) => {
  switch (type) {
    case "ADD_POLICY":
      return state + payload.price;
    case "DELETE_POLICY":
      return state - payload.price;
    case "PAYMENT":
      return state - payload;
    default:
      return state;
  }
};
