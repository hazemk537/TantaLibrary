import React, { useState } from "react";
import InputBox from "./input-Form";
import Fotter from "./Fotter";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="wrapper register ">
      <div className="form-box ">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <InputBox
            className="input-box"
            icon="person-outline"
            name={name}
            labal="UserName"
            placeholder="Full Name"
          />
          <InputBox
            className="input-box"
            icon="mail-outline"
            name={email}
            labal="Email"
            placeholder="youremail@gmail.com"
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
          switchTo="login"
          text="Already have an account? login here"
        />
      </div>
    </div>
  );
};
