import { $host } from ".";

const registration = async (login, password) => {
  const response = await $host.post("/api/v1/sign-up", {
    login,
    password,
    role: "user",
  });
  return response;
};
