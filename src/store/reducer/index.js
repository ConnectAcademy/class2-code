const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case "AUTH_USER":
      return (state = payload);
    case "SIGN_OUT_USER":
      return (state = null);
    default:
      return state;
  }
};

export default userReducer;
