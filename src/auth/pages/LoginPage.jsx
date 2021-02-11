import React from "react";
import LoginContainer from "../containers/LoginContainer";

export default function LoginPage({ setAuth }) {
  return (
    <>
      <LoginContainer setAuth={setAuth} />
    </>
  );
}
