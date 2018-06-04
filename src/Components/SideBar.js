import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarContainer = styled.div`
  display: flex;
  .__hide {
    display: none;
  }
  .react-datepicker {
    display: ${props => props.show};
  }
`;

const SideBarContainer = styled.div`
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
  @media only screen and (max-width: ${Metrics.tabletView}) {
    display: none;
  }
`;

class SideBar extends Component {
  state = {
    showCalendar: false
  };

  render() {
    return (
      <SideBarContainer>
        <i
          className="fa fa-fw fa-dashboard"
          onClick={() => this.props.history.push("dashboard")}
        />
        <CalendarContainer show={this.state.showCalendar ? "block" : "none"}>
          <i
            className="fa fa-fw fa-calendar"
            onClick={() =>
              this.setState({ showCalendar: !this.state.showCalendar })
            }
          />
          <DatePicker
            inline
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </CalendarContainer>
        <i className="fa fa-fw fa-image" />
      </SideBarContainer>
    );
  }
}

export default withRouter(SideBar);
