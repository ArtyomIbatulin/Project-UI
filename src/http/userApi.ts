import { $host } from ".";

export const signUp = async (login: string, password: string) => {
  const response = await $host.post("/api/v1/sign-up", {
    login,
    password,
    role: "user",
  });
  return response;
};

export const signIn = async (login: string, password: string) => {
  const response = await $host.post("/api/v1/sign-in", { login, password });
  return response;
};
