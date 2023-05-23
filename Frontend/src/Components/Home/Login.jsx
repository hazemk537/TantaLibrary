import React, { useState } from "react";
import InputBox from "./input-Form";
import Fotter from "./Fotter";
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const navigate=useNavigate();

  console.log(setEmail);
  const handleSubmit = (e) => {
    console.log(e);
  };

  console.log(props.Show);
  return (
    <div className={"wrapper"}>
      <div className="form-box ">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <InputBox
            className="input-box"
            icon="mail-outline"
            name={email}
            labal="Email"
          />
          <InputBox
            className="input-box"
            icon="lock-closed-outline"
            name={pass}
            labal="Password"
            placeholder="************"
          />
        </form>
        <Fotter
          onFormSwitch={props.onFormSwitch}
          switchTo="register"
          text="don't have an account? sign up here"
          email={email}
          password={pass}
        />
      </div>
    </div>
  );
};
