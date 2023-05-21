import React, { useState } from "react";

export default function InputBox(props) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="input-box">
      <span className="icon">
        <ion-icon name={props.icon}></ion-icon>
      </span>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="name"
        required
        id="name"
        name="name"
      />
      <label>{props.labal} </label>
    </div>
  );
}
