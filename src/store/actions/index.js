export const authUser = (user) => {
  return {
    type: "AUTH_USER",
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: "SIGN_OUT_USER",
  };
};
