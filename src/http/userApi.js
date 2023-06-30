import { $host } from ".";

export const signUp = async (login, password) => {
  const response = await $host.post("/api/v1/sign-up", {
    login,
    password,
    role: "user",
  });
  return response;
};

export const signIn = async (login, password) => {
  const response = await $host.post("/api/v1/sign-in", { login, password });
  return response;
};
