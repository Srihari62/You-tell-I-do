import React, { useState } from "react";
import * as Components from "./Components";
import {Navigate} from 'react-router-dom'



function Login() {
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("master");
  const [logRole, setLogRole] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [signupErrorMsg, setSignupErrorMsg] = useState("");

  

  const onClickGhostSignin = () => {
    setSignupErrorMsg("");
    toggle(true);
  };
  const onClickGhostSignup = () => {
    setLoginErrorMsg("");
    toggle(false);
  };
  const handleSignin = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.username === loginUsername && user.password === loginPassword
    );
    if (user) {
      setLogRole(user.role);
      
    } else if (!user) {
      setLoginErrorMsg("Username and Password Didnt Match");
    }
    if (user.username === "" && user.password === "") {
      setLoginErrorMsg("Please give Username and Password");
    }
    setLoginUsername("");
    setLoginPassword("");
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const newUser = { username, password, role };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.role === role
    );
    if (user) {
      setSignupErrorMsg("Username Already Taken..");
    } else {
      users.push(newUser);
      setSignupErrorMsg("Account Created Successfully..");
    }

    localStorage.setItem("users", JSON.stringify(users));
    setUsername("");
    setPassword("");
    setRole("");
  };
  return (
    
    <div>
      {logRole === "master" ? (
        <Navigate to="/master" />
      ) : logRole === "student" ? (
        <Navigate to="/student" />
      ) : (
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form onSubmit={handleSignup}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />

              <Components.Select
                id="role"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="master">Master</option>
                <option value="student">Student</option>
              </Components.Select>
              <Components.Input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Components.ErrorMsg>{signupErrorMsg}</Components.ErrorMsg>
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form onSubmit={handleSignin}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                id="loginUsername"
                value={loginUsername}
                onChange={(event) => setLoginUsername(event.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                id="loginPassword"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
              />
              <Components.ErrorMsg>{loginErrorMsg}</Components.ErrorMsg>
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button>Sigin In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  Already have an account.. Signin here with Username and
                  Password..
                </Components.Paragraph>
                <Components.GhostButton onClick={onClickGhostSignin}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  If you are New.. Signup Here by giving your details..
                </Components.Paragraph>
                <Components.GhostButton onClick={onClickGhostSignup}>
                  Sigin Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>

      )}
    </div>
  );
}

export default Login;
