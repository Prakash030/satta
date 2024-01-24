import React, { useState } from "react";
import Link from "next/link";

import "../styles.css";
interface ErrorMessages {
  name: string;
  message: string;
}

function Login() {

  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const uname = (formData.get("uname") as string)+'@gmail.com';
    const pass = formData.get("pass") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (pass !== confirmPassword) {
        setErrorMessages({ name: "pass", message: "Passwords do not match" });
        return;
      }

    try {
      const response = await fetch("/api/forgetPass", {
        method: "POST",
        body: new URLSearchParams({ email: uname, password: pass }), // Use URLSearchParams for form data
      });

      console.log("response", response);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to authenticate user");
      }

      const userData = await response.json();

      if (userData) {
        setIsSubmitted(true);
      } else {
        setErrorMessages({ name: "uname", message: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      setErrorMessages({ name: "uname", message: "Error authenticating user" });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>PhoneNumber </label>
          <input type="number" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>New Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="confirmPassword" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>

        <p className="mt-4 text-gray-600 text-center">
          Dont have an account?
          <Link href="/signIn"> Sign Up</Link>
        </p>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Recover your Account...</div>
        <div className="title">Enter Your Credentials!!!</div>
        {isSubmitted ? (
          <div>
            Password is successfully changed
            <Link href="/logIn" className="linkDecor">Go TO LOGIN</Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
