import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Colors from "../Themes/Colors.js";
import Header from "../Components/Header.js";

const Body = styled.div`
  height:100%;
  display:flex;
  flex-direction:row;
`;

const SideBar = styled.div`
  height:100%;
  background-color:${Colors.backgroundBlack};
  width: 55px;
  i{
    font-size: 20px;
    margin: 20%;
    margin-bottom: 20px;
    color: #ffffff80;
    transition: color 0.2s ease;
    &:hover {
      color: #707982;;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  height:100%;
  width: 100%;
  background-color:${Colors.backgroundBlack};
  h1{
    margin:25px;
    border: 1px solid #DC3545;
    text-align: center;
    color: white;
    margin-bottom: 5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    span{
      color: #9D595C;
    }
  }
`;

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body>
          <SideBar>
            <i class="fa fa-fw fa-dashboard"></i>
            <i class="fa fa-fw fa-image"></i>
          </SideBar>
          <Content>
            <h1>
              Dashboard: 
              <span> {this.props.displayName}</span>
            </h1>
            <h1>PROMOTION STATUS</h1>
          </Content>
        </Body>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayName: state.login.displayName,
    companyId: state.login.companyId
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
