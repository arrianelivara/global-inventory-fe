import { Get, Post } from "services";
import { ApiPath } from "paths";

export const getUsers = async () => {
  const res = await Get(ApiPath.USERS);
  return res.data;
};

export const getToken = async () => {
  const body = {
    username: "", 
    password: ""
  }
  const res = await Post("token/", body);
  return res.data;
};