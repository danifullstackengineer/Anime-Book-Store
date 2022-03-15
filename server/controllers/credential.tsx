import bcrypt from "bcrypt";
import IQueryResult from "../types/QueryResult";
import User from "../models/User";
import { transporter } from "../index";
import { codeMail } from "../mail/constants";

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
      console.log(userQ._id);
    });
  } catch (err) {}
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
          message: "There was an  error sending your code!",
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
  res.send(result);
};

export { register, code };
