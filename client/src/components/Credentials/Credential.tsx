import React, { useState, useRef } from "react";
import "../../styles/components/Credential/credential.css";
import VerificationInput from "react-verification-input";
import Regex from "./Regex";
import { checkRegex } from "../../logic/regex/credential";
import { register, sendCode, login } from "../../AJAX/credential";
import IQueryResult from "../../types/QueryResult";
import { useNavigate } from "react-router-dom";
import { setEmailAction } from "../../redux/slice";
import { useDispatch } from "react-redux";

function Credential() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [code, setCode] = useState<string>();
  const [serverCode, setServerCode] = useState<number>();

  const [emailValid, setEmailValid] = useState<boolean>();
  const [passwordValid, setPasswordValid] = useState<boolean>();
  const [showCode, setShowCode] = useState<boolean>();

  const [isValidCode, setIsValidCode] = useState<boolean>();

  const [clickedReg, setClickedReg] = useState<boolean>(false);

  const codeRef = useRef(null);
  const codeDivRef = useRef<HTMLDivElement>(null!);
  const registerRef = useRef<HTMLButtonElement>(null!);

  const [logginMessage, setLogginMessage] = useState<string>();
  const [timeoutLog, setTimeoutLog] = useState<boolean>(false);
  const [codeMessage, setCodeMessage] = useState<string>();
  const [timeoutShowCode, setTimeoutShowCode] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        setEmailValid(checkRegex(e.target.value, "email"));
        break;
      case "password":
        setPassword(e.target.value);
        setPasswordValid(checkRegex(e.target.value, "password"));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (emailValid && passwordValid && !timeoutLog) {
      login(email, password).then((res) => {
        if (res.success && res.data && res.data.token) {
          localStorage.setItem("token", res.data.token);
          setLogginMessage(res.message);
          dispatch(setEmailAction(email));
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setLogginMessage(res.message);
          setTimeoutLog(true);
          setTimeout(() => {
            setLogginMessage(undefined);
            setTimeoutLog(false);
          }, 3000);
        }
      });
    }
  };

  const handleCodeChange = (e: string): void => {
    setCode(e);
    if (parseInt(e) === serverCode) {
      doRegisterSuccess();
      setCodeMessage("Code was correct, you are registered!");
    }
  };

  const doRegisterSuccess = (): void => {
    register(email, password).then((res) => {
      if (res.success) {
        console.log("created user!");
        setIsValidCode(true);
        setShowCode(false);
        codeDivRef.current.style.display = "none";
      } else {
        alert(res.message);
      }
    });
  };

  const handleRegister = async (): Promise<void> => {
    setClickedReg(true);
    if (emailValid && passwordValid && !timeoutShowCode) {
      setShowCode(true);
      setTimeoutShowCode(true);
      setTimeout(() => {
        setTimeoutShowCode(false);
        setShowCode(false);
      }, 2500);
    } else {
      setClickedReg(false);
      return;
    }
    await sendCode(email).then((res: IQueryResult): void => {
      if (res.success) {
        setServerCode(res.data?.code);
      }
    });
  };

  return (
    <>
      <div className="credential">
        <div className="credential__header">Anime Book Store</div>
        <div className="credential__content">
          <div className="credential__content-form">
            <form onSubmit={handleSubmit}>
              <span className="credential__info">E-mail</span>
              <input
                type="text"
                value={email}
                onChange={handleChange}
                name="email"
              />
              <span className="credential__info">Password</span>
              <input
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="credential__content-reg">
            <div
              ref={codeDivRef}
              className={
                clickedReg && email && password && emailValid && passwordValid
                  ? "credential__content-show"
                  : "credential__content-hide"
              }
            >
              <VerificationInput
                onChange={handleCodeChange}
                ref={codeRef}
                removeDefaultStyles
                autoFocus={true}
                classNames={{
                  container: `credential__content-input-container`,
                  character: "credential__content-input-char",
                  characterInactive: "credential__content-input-inactive",
                  characterSelected: "credential__content-input-selected",
                }}
              />
            </div>
            <button
              ref={registerRef}
              onClick={isValidCode ? undefined : handleRegister}
            >
              {clickedReg && email && password && emailValid && passwordValid
                ? isValidCode
                  ? "Verified"
                  : "Verify"
                : "Register"}
            </button>
            <div className="credential__content-terms">
              By Signing-In you agree to our{" "}
              <div className="credential__content-terms-special">
                Terms &amp; Conditions.
              </div>
            </div>
          </div>
        </div>
        <div className="regex__container">
          <Regex
            className={
              email || clickedReg
                ? emailValid
                  ? "regex__hidden"
                  : "regex__shown"
                : ""
            }
            email={true}
          />
          <Regex
            className={
              password || clickedReg
                ? passwordValid
                  ? "regex__hidden"
                  : "regex__shown"
                : ""
            }
            password={true}
          />
          <Regex
            className={showCode ? "regex__shown regex__dissapear" : ""}
            code={true}
            emailValue={email}
          />
          <Regex
            className={logginMessage ? "regex__shown regex__dissapear" : ""}
            loggin={logginMessage}
          />
          <Regex
            className={codeMessage ? "regex__shown regex__dissapear" : ""}
            codeMessage={codeMessage}
          />
        </div>
      </div>
    </>
  );
}

export default Credential;
