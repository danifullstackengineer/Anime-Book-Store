import $ from "jquery";
import IQueryResult from "../types/QueryResult";

const register = async (
  email: string,
  password: string
): Promise<IQueryResult> => {
  var result = {
    success: false,
    message: "Failed to register, please try again!",
    data: { username: "", password: "" },
  };
  await $.ajax({
    url: "/register",
    type: "POST",
    data: {
      email: email,
      password: password,
    },
  }).done((res: any) => {
    console.log(res);
  });
  return result;
};

const sendCode = async (email: string): Promise<IQueryResult> => {
  var result = {
    success: false,
    message: "Failed to send code, please try again!",
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

export { register, sendCode };
