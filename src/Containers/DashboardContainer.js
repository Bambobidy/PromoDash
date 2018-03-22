import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Active, InActive, Status1, Status2, Status3, Status4, Status5 } from "../Images"
import C3Chart from "c3-react";

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.background};
  padding-left: ${Metrics.doublePadding};
  padding-right: ${Metrics.doublePadding};
  h1 {
    border: 1px solid ${Colors.border};
    text-align: center;
    color: ${Colors.inverseTextColor};
    margin-bottom: 5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    span {
      color: ${Colors.logo};
    }
  }
  h2 {
    text-align: center;
    color: ${Colors.inverseTextColor};
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }
`;

const Billboard = styled.div`
  width: 100%;
  height: ${Metrics.billboardHeight};
  border-radius: ${Metrics.smallPadding};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${Metrics.doublePadding};
  padding-bottom: ${Metrics.doublePadding};
  background-image: url(${Status1});
  background-size: 100%;
  margin-bottom: 2%;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: row;
`;

const Icons = styled.div`
  height: 100%;
  width: ${Metrics.loginFormWidth};
  border: 1px solid ${Colors.inverseTextColor};
`;

const StatusRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Status = styled.div`
  height: 10px;
  width: ${Metrics.statusWidth};
  background-image: url(${props => props.image});
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 200%;
    width: 20px;
  }
`;

class Dashboard extends Component {
  render() {
    let data = [
      {
        key: "dataSource1",
        values: [
          {label: "A", value: 3},
          {label: "B", value: 4}
        ]
      },
      {
        key: "dataSource2",
        values: [
          {label: "X", value: 7},
          {label: "Y", value: 8}
        ]
      }
    ];

    let type = "bar";

    let options = {
      padding: {
        top: 20,
        bottom: 20,
        left: 40,
        right: 10
      },
      size: {
        width: 800,
        height: 600
      },
      subchart: true,
      zoom: true,
      grid: {
        x: false,
        y: true
      },
      labels: true,
      axisLabel: {
        x: "product",
        y: "quantity"
      },
      onClick: function(d) {
        let categories = this.categories(); //c3 function, get categorical labels
        console.log(d);
        console.log("you clicked {" + d.name + ": " + categories[d.x] + ": " + d.value + "}");
      }
    };

    return (
      <div>
        <Header />
        <Body>
          <SideBar />
          <Content>
            <h1>
              Dashboard:
              <span> {this.props.displayName}</span>
            </h1>
            <h2>PROMOTION STATUS</h2>
            <Billboard>
              <Icons />
              <Icons />
            </Billboard>
            <StatusRow>
              <Status image={Status1}>
                <img src={InActive} alt="status1" />
              </Status>
              <Status image={Status2}>
                <img src={InActive} alt="status2" />
              </Status>
              <Status image={Status3}>
                <img src={InActive} alt="status3" />
              </Status>
              <Status image={Status4}>
                <img src={InActive} alt="status4" />
              </Status>
              <Status image={Status5}>
                <img src={InActive} alt="status5" />
              </Status>
            </StatusRow>
            <GraphContainer>
              <C3Chart data={data} type="bar" options={options} />
            </GraphContainer>
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
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
