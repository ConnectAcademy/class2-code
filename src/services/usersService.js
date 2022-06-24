import api from "./api";

api.interceptors.response.use((res) => res.data);

export const getAllUsers = async () => {
  return api.get("/users");
};

export const getUser = async (id) => {
  return api.get(`/users/${id}`);
};
