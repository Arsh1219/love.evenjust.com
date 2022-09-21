var URL = require("url-parse");

export const getRequestorId = () => {
  const url = new URL(window.location.href);
  const userId = (url.pathname || "").replace("/", "");
  if (!userId) {
    return;
  }
  return userId;
};

export const getCookies = () => {
  const url = new URL(window.location.href,true);
  const userId = url.query.userId
  const userName = url.query.userName
  const secretKey = url.query.secretKey
  
  if (userId == null)
  {
    return {
      status:false
    }
  }
  return {
    status : true,
    userId:userId,
    userName:userName,
    secretKey:secretKey
  }

};

export const showToolTip = () => {
  [...document.querySelectorAll("[data-tooltip]")].forEach(a =>
    a.classList.add("hover")
  );
  setTimeout(() => {
    [...document.querySelectorAll("[data-tooltip]")].forEach(a =>
      a.classList.remove("hover")
    );
  }, 1000);
  return;
};
