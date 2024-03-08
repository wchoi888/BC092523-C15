import { useState } from "react";
export default function Forms() {
  const [errorMsg, setErrorMsg] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    // `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
    setEmail(event.target.value);
  };
  const emailValidation = () => {
    const pattern = /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
    if (!email) {
      setEmailErrorMsg("This field is required");
    } else if (!pattern.test(email)) {
      setEmailErrorMsg("please enter a valid email in the input field");
    } else {
      setErrorMsg("");
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const nameValidation = () => {
    if (!name) {
      setNameErrorMsg("This field is required");
    } else {
      setNameErrorMsg("");
    }
  };
  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };
  const msgValidation = () => {
    if (!message) {
      setErrorMsg("This field is required");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <div>
      <form className="container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          onBlur={nameValidation}
        />
        <span className="red">{nameErrorMsg}</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          onBlur={emailValidation}
        />
        <span className="red">{emailErrorMsg}</span>
        <textarea
          rows="5"
          name="message"
          placeholder="Message"
          onChange={handleMsgChange}
          onBlur={msgValidation}
        ></textarea>
        <span className="red">{errorMsg}</span>
        <button type="submit" name="submit button">
          submit
        </button>
      </form>
    </div>
  );
}
