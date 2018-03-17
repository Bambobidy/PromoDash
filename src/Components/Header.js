'use-strict'
import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'
import logo from "../Images/PromoIcon.gif";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Colors from "../Themes/Colors.js";

const Link = styled.span`
  padding: 2px 15px;
  color: #ffffff80;
  transition: color 0.2s ease;
  &:hover {
    color: #707982;;
    cursor: pointer;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display:flex;
  img {
    width: 35px;
    height:40px;
  }
  div{
    font-family: 'Indie Flower',cursive;
    color: #9D595C;
    font-size: 1.90rem;
    margin: 4px;
    font-weight: bolder;}
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${Colors.backgroundBlack};
`;

const Wrapper = styled.div`
  z-index: 1;
  top: 0;
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Nav>
          <Logo>
            <img src={logo} alt="" />
            <div>Promoter Plus</div>
          </Logo>
          <Links>
            <Link><i class="fa fa-fw fa-info-circle"></i>about</Link>
            <Link><i class="fa fa-fw  fa-phone"></i>Contact us</Link>
            <Link><i class="fa fa-fw fa-sign-out"></i>Logout</Link>
          </Links>
        </Nav>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
