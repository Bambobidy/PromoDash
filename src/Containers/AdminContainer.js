import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Body from "../Components/Body";

import styled from "styled-components";
import { Metrics, Colors } from "../Themes";

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.background};
  padding-left: ${Metrics.doublePadding};
  padding-right: ${Metrics.doublePadding};
  h1{

  }
`;

class Admin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body height="100vh">
          <SideBar />
          <Content>
        
          </Content>
        </Body>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Admin)
);
