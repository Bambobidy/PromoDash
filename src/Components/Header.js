import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import logo from "../Images/PromoIcon.gif";
import { Metrics, Colors } from "../Themes";

const Link = styled.span`
  padding: 0 ${Metrics.doublePadding};
  color: ${Colors.iconColor};
  transition: color 0.2s ease;
  font-size: ${Metrics.linkSize};
  &:hover {
    color: ${Colors.iconHover};
    cursor: pointer;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${Metrics.tabletView}) {
    display: none;
  }
`;

const Hamburger = styled.button`
  background-color: ${Colors.background};
  margin-bottom: 20px;
  border: none;
  align-self: flex-end;
  outline: none;
  @media only screen and (min-width: ${Metrics.tabletView}) {
    display: none;
  }
  .__icon {
    .__burger {
      hr {
        width: 30px;
        border: solid 1px ${Colors.inverseTextColor};
        transition: all 0.1s ease;
      }
    }

    &.__toggle {
      .__burger {
        hr:first-of-type {
          transform: rotate(45deg);
          transform-origin: center center;
        }
        hr:nth-of-type(even) {
          display: none;
        }
        hr:last-of-type {
          transform: rotate(-45deg) translateY(-5px) translateX(6px);
          transform-origin: center center;
        }
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  img {
    width: ${Metrics.images.logoWidth};
    height: ${Metrics.images.logoWidth};
  }
  div {
    font-family: "Indie Flower", cursive;
    color: ${Colors.logo};
    font-size: 2rem;
    margin: ${Metrics.smallPadding};
    font-weight: bolder;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: ${Metrics.padding} ${Metrics.doublePadding};
  background-color: ${Colors.background};
`;

const Wrapper = styled.div`
  z-index: 1;
  top: 0;
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;

class Header extends Component {
  state = {
    menu: false
  };
  render() {
    return (
      <Wrapper>
        <Nav>
          <Logo>
            <img src={logo} alt="Promoter Plus Logo" />
            <div>Promoter Plus</div>
          </Logo>
          <Links>
            <Link>
              <i className="fa fa-fw fa-info-circle" />about
            </Link>
            <Link>
              <i className="fa fa-fw  fa-phone" />Contact us
            </Link>
            <Link>
              <i className="fa fa-fw fa-sign-out" />Logout
            </Link>
          </Links>
          <Hamburger onClick={() => this.setState({ menu: !this.state.menu })}>
            <div className={this.state.menu ? "__icon __toggle" : "__icon"}>
              <div className="__burger">
                <hr />
                <hr />
                <hr />
              </div>
            </div>
          </Hamburger>
        </Nav>
      </Wrapper>
    );
  }
}

export default Header;
