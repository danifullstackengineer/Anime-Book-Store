import React from "react";
import "../../styles/components/BodyContent/regex.css";

function Regex({
  className,
  email,
  password,
  code,
  emailValue,
}: {
  className: string;
  email?: boolean | undefined;
  password?: boolean | undefined;
  code?: boolean | undefined;
    emailValue?: string;
}) {
  return (
    <div className={`regex ${className}`}>
      {email
        ? "Email must be a valid address, e.g. me@mydomain.com"
        : password
        ? "Password must alphanumeric (@, _ and - are also allowed) and be 8 - 30 characters"
        : code
        ? `A confirmation code has been sent to ${emailValue}.`
        : ""}
    </div>
  );
}

export default Regex;
