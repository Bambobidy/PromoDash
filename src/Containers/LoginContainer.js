import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import LoginActions from "../Redux/LoginRedux";

const Container = styled.div`
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  background-color: ${Colors.inverseTextColor};
  width: ${Metrics.loginFormWidth};
  height: ${Metrics.loginFormWidth};
  border-radius: ${Metrics.padding};
  p,
  input,
  button {
    margin: ${Metrics.padding};
  }
`;

const Input = styled.input`
  display: block;
  width: ${Metrics.inputWidth};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  width: ${Metrics.buttonWidth};
  color: ${Colors.inverseTextColor};
  background-color: ${Colors.buttonColor};
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.buttonHover};
    border-color: ${Colors.buttonHoverBorder};
  }
`;

class Login extends Component {
  login = () => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    if (userName === "Dairymaid" && password === "54stupi#") {
      this.props.history.push("/dashboard");
    } else if (userName === "demo" && password === "demo") {
      //to do write demo
    } else if (userName === "admin" && password === "admin") {
      this.props.history.push("/admin");
    } else {
      alert("wrong");
    }
  };

  render() {
    return (
      <Container>
        <LoginForm>
          <p>Login</p>
          <hr />
          <p>User name</p>
          <Input id="userName" type="text" placeholder="User name" />
          <p>login</p>
          <Input id="password" type="text" placeholder="Password" />
          <br />
          <Button onClick={this.login}>Login</Button>
        </LoginForm>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: (companyId, displayName) =>
      dispatch(LoginActions.loginSuccess(companyId, displayName))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
