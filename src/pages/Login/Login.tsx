import React from "react";
import stayFitLogo from "../../assets/stayFitLogo.png";
import "../Login/Login.scss";
function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stayFitLogo} className="App-logo" alt="logo" />
        <p>Welcome To Stay Fit App</p>
      </header>
    </div>
  );
}

export default Login;
