import Cookies from "universal-cookie";

export const logout = () => {
  const cookies = new Cookies();
  cookies.remove("secret", { path: "/" });
  cookies.remove("userId", { path: "/" });
  window.location.href = "/";
};

export const getUserName = () => new Cookies().get("userName");
export const setUserName = userName =>
  new Cookies().set("userName", userName || "", {
    path: "/",
    expires: new Date(new Date().getTime() + 30000000000)
  });

export const getUserId = () => new Cookies().get("userId");
export const saveUserId = userId =>
  new Cookies().set("userId", userId || "", {
    path: "/",
    expires: new Date(new Date().getTime() + 30000000000)
  });

export const getSecretKey = () => new Cookies().get("secretKey");
export const saveSecretKey = secretKey =>
  new Cookies().set("secretKey", secretKey || "", {
    path: "/",
    expires: new Date(new Date().getTime() + 30000000000)
  });
