// Importing useState hook from React
import { useState } from "react";
// Functional component for the contact form
export default function Forms() {
  // State variables for error messages and form inputs
  const [errorMsg, setErrorMsg] = useState("");
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // Event handler for email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  // Function for email input validation
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
  // Event handler for name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // Function for name input validation
  const nameValidation = () => {
    if (!name) {
      setNameErrorMsg("This field is required");
    } else {
      setNameErrorMsg("");
    }
  };
  // Event handler for message input change
  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };
  // Function for message input validation
  const msgValidation = () => {
    if (!message) {
      setErrorMsg("This field is required");
    } else {
      setErrorMsg("");
    }
  };
  // Form JSX
  return (
    <div>
      <form className="container">
        {/* Input field for name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          onBlur={nameValidation}
        />
        {/* Error message for name field */}
        <span className="red">{nameErrorMsg}</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          onBlur={emailValidation}
        />
        {/* Error message for email field */}
        <span className="red">{emailErrorMsg}</span>
        <textarea
          rows="5"
          name="message"
          placeholder="Message"
          onChange={handleMsgChange}
          onBlur={msgValidation}
        ></textarea>
        {/* Error message for message field */}
        <span className="red">{errorMsg}</span>
        <button type="submit" name="submit button">
          submit
        </button>
      </form>
    </div>
  );
}
