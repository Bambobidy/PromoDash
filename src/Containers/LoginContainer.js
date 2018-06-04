import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import LoginActions from "../Redux/LoginRedux";
import Input from "../Components/Input";


const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.background};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Indie Flower", cursive;
    color: ${Colors.logo};
    font-size: 6rem;
  }
  h2 {
    font-size: 3rem;
    color: white;
  }
  button {
    width: 277px;
    padding: 0.375rem 0.75rem;
    margin-top: 10px;
    border-radius: 0.25rem;
    font-size: 1.2rem;
  }
  .shimmer {
    font-weight: 500;
    margin: 0 auto;
    padding: 10px 140px;
    display: inline;
  }
  .shimmer {
    color: rgba(255, 0, 58, 0.1);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, ${Colors.logo})
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, ${Colors.logo})
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, ${Colors.logo})
    );
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: #222;
  }
  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
  @media only screen and (max-width: ${Metrics.phoneView}) {
    h1 {
      font-size: 4rem;
    }
    .shimmer {
      margin: 0;
    }
  }
`;

class Login extends Component {
  login = () => {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    this.props.loginRequest(userName, password);
    if (userName === "Dairymaid" && password === "54stupi#") {
      this.props.loginSuccess(3);
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
        <h1 className="shimmer">Promoter Plus</h1>

        <h2>Login</h2>

        <Input id="userName" type="text" placeholder="Username" />

        <Input id="password" type="text" placeholder="Password" />

        <button onClick={this.login}>Let me in.</button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: (userName, password) =>
      dispatch(LoginActions.loginRequest(userName, password)),
    loginSuccess: (userName, password) => dispatch(LoginActions.loginSuccess(3))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
