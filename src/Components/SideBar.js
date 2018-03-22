import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";

const SideBarContainer = styled.div`
  height: 100%;
  background-color: ${Colors.background};
  width: ${Metrics.sideBarWidth};
  i {
    font-size: ${Metrics.linkSize};
    margin: ${Metrics.doublePadding};
    margin-bottom: ${Metrics.doublePadding};
    color: ${Colors.iconColor};
    transition: color 0.2s ease;
    &:hover {
      color: ${Colors.iconHover};
      cursor: pointer;
    }
  }
`;

class SideBar extends Component {
  render() {
    return (
      <SideBarContainer>
        <i className='fa fa-fw fa-dashboard' />
        <i className='fa fa-fw fa-image' />
      </SideBarContainer>
    );
  }
}

export default SideBar;