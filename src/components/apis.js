import {
  saveUserId,
  saveSecretKey,
  getUserName,
  getSecretKey
} from "./cookies";

const AXIOS = require("axios");
const axios = AXIOS.create({
  baseURL: "https://9m8pqnm3we.execute-api.ap-south-1.amazonaws.com/api/"
});

export const createUser = async () => {
  const name = getUserName();

  const result = await axios.post(`/create`, {
    name: name
  });

  if (result) {
    const data = result.data;
    saveUserId(data["userId"]);
    saveSecretKey(data["key"]);
  }
};

export const getCrushes = async () => {
  const key = getSecretKey();
  if (key) {
    const result = await axios.get(`/getCrushes/${key}`);
    return result ? result.data : undefined;
  }
};

export const postFriendCrush = async (userId, friendName, crushName) => {
  const result = await axios.post(`/postFriendCrush/${userId}`, {
    friendName: friendName,
    crushName: crushName
  });

  if (result) {
    const data = result.data;
    return data["name"];
  }
};
