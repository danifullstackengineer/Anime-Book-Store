import bcrypt from "bcrypt";
import IQueryResult from "../types/QueryResult";
import User from "../models/User";
import { transporter } from "../index";
import { codeMail } from "../mail/constants";
import jwt from "jsonwebtoken";
import ISliderItem from "../types/Item";

const register = async (req: any, res: any) => {
  try {
    const body = req.body;

    const isUser = await User.findOne({ email: body.email });
    if (isUser) {
      return res.send({ success: false, message: "E-mail is already in use!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(body.password, salt);
    const newUser = new User({
      email: body.email,
      password: hashed,
    });
    await newUser.save().then((userQ: any) => {
      if (userQ) {
        return res.send({
          success: true,
          message: "Registered successfully!",
          data: { id: userQ._id },
        });
      } else {
        return res.send({
          success: false,
          message: "There was a problem during registering!",
        });
      }
    });
  } catch (err) {
    return res.send({
      success: false,
      message: "There was a problem during registering!",
    });
  }
};

const code = async (req: any, res: any) => {
  var result = { success: false, message: "", data: {} };
  try {
    const email = req.body.email;
    const random = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    console.log("random is: ", random);

    await transporter
      .sendMail({
        from: `Sender Name <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verification Code",
        html: codeMail(),
      })
      .then((res: any) => {
        if (res) {
          result = {
            success: true,
            message: "Succesfully sent E-mail",
            data: { code: random },
          };
        }
      })
      .catch((err: any) => {
        result = {
          success: false,
          message: "There was an error sending your code!",
          data: {},
        };
      });
  } catch (err) {
    result = {
      success: false,
      message: "There was an error sending your code!",
      data: {},
    };
  }
  return res.send(result);
};

const login = async (req: any, res: any) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.send({
        success: false,
        message: "No user with this e-mail exists!",
      });
    }
    await bcrypt.compare(password, user.password).then((resBcrypt) => {
      if (resBcrypt) {
        const id = user.id;
        const email = user.email;
        if (process.env.TOKEN_SECRET) {
          const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: 1500,
          });
          res.send({
            success: true,
            message: "Logged in!",
            data: { token: token },
          });
        } else {
          res.send({
            success: false,
            message: "No JWT secret key was provided!",
          });
        }
      } else {
        res.send({ success: false, message: "Invalid password!" });
      }
    });
  } catch (err) {
    return res.send({
      success: false,
      message: "There was an error while logging in!",
    });
  }
};

const verifyJWT = async (req: any, res: any, next: () => void) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.send({ success: false, message: "No token was provided!" });
  }
  if (!process.env.TOKEN_SECRET) {
    return res.send({
      success: false,
      message: "No JWT secret key was provided!",
    });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.send({ success: false, message: err });
    }
    req.userId = decoded.id;
    next();
  });
};
const isAuth = async (_: any, res: any) => {
  return res.send({ success: true, message: "User is authenticated!" });
};

export { register, code, login, verifyJWT, isAuth };
