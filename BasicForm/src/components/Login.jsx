import { useState } from "react";
import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Login() {

const {
  value: emailValue,
  handleInputChange: handleEmailChange,
  handleInputBlur: handleEmailBlur,
  hasError: emailHasError
} = useInput('',(value) => isEmail(value) && isNotEmpty(value));

const {
  value: passwordValue,
  handleInputChange: handlePasswordChange,
  handleInputBlur: handlePasswordBlur,
  hasError: passwordHasError
} = useInput('', (value) => hasMinLength(value, 6));

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues, // If you don't include ...prevValues, you'll lose the existing key-value pairs in the state object.
      [identifier] : value
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]:true,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && 'Please enter valid email'}
        />

        <Input 
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* <button>'s type is default to submit and it automatically submit the form after you click the button */}
        <button className="button">Login</button> 
      </p>
    </form>
  );
}
