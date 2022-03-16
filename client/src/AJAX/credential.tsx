import $ from "jquery";
import IQueryResult from "../types/QueryResult";

const register = async (
  email: string,
  password: string
): Promise<IQueryResult> => {
  var result = {
    success: false,
    message: "Failed to register, please try again!",
  };
  await $.ajax({
    url: "/register",
    type: "POST",
    data: {
      email: email,
      password: password,
    },
  }).done((res: IQueryResult) => {
    result = res;
  });
  return result;
};

const sendCode = async (email: string): Promise<IQueryResult> => {
  var result = {
    success: false,
    message: "There was an error sending your code!",
  };
  await $.ajax({
    url: "/sendCode",
    type: "POST",
    data: { email: email },
  }).done((res: any) => {
    result = res;
  });
  return result;
};

const login = async (
  email: string,
  password: string
): Promise<IQueryResult> => {
  var result = {
    success: false,
    message: "Failed to login. Please try again!",
  };
  await $.ajax({
    url: "/login",
    type: "POST",
    data: { email: email, password: password },
  }).done((res: IQueryResult) => {
    result = res;
  });
  return result;
};

const authJWT = async (): Promise<IQueryResult> => {
  var result = { success: false, message: "Failed to authenticate Token" };
  await $.ajax({
    url: "/isUserAuth",
    type: "GET",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  }).done((res: IQueryResult) => {
    result = res;
  });
  return result;
};

export { register, sendCode, login, authJWT };
