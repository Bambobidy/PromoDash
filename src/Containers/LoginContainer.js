import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Colors from "../Themes/Colors.js";
import LoginActions from "../Redux/LoginRedux"

const Container = styled.div`
  background-color: ${Colors.backgroundBlack};
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  justify-content:center;
  align-items: center;
`;

const LoginForm = styled.div`
  background-color: white;
  width:300px;
  height:300px;
  border-radius: 5px;
  p, Input, Button{
    margin:12px;
  }
`;

const Input = styled.input`
  display: block;
  width: 245px;
  padding: .375rem .75rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

const Button = styled.button`
  width:270px;
  color: #fff;
  background-color: #007bff;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  &:hover {
    cursor: pointer;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

class Login extends Component {
  login() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (userName === "Dairymaid" && password === "54stupi#") {

      this.props.history.push("/dashboard");
    } else if (userName === "demo" && password === "demo") {
      //to do write demo
    } else if (userName === "admin" && password === "admin") {
      this.props.history.push("/admin");
    } else {
      alert("wrong")
    }
  }

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
          <Button onClick={() => this.login()}>
            Login
          </Button>
        </LoginForm>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: (companyId, displayName) => dispatch(LoginActions.loginSuccess(companyId, displayName))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
