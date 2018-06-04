import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import {
  InActive,
  Status1,
  Status2,
  Status3,
  Status4,
  Status5
} from "../Images";
// import C3Chart from "react-c3js";
import c3 from "c3";
import "c3/c3.css";
import shop from "../Images/shop.png";
import feet from "../Images/feet.png";
import Body from "../Components/Body";

const Content = styled.div`
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
  @media only screen and (max-width: ${Metrics.phoneView}) {
    height: 400px;
    flex-direction: column;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${Metrics.doublePadding};
  .c3-legend-item {
    fill: white;
  }

  .c3 .c3-axis-y path {
    stroke: #aaa;
  }

  .c3 .c3-axis-y line {
    stroke: #aaa;
  }

  .c3 .c3-axis-x path {
    stroke: #aaa;
  }
  .c3 .c3-axis-x line {
    stroke: #aaa;
  }

  .c3-axis-y text {
    fill: #7e7e7d;
    font-size: 12px;
  }
  .c3-axis-x text {
    font-size: 12px;
    fill: #7e7e7d;
  }
  @media only screen and (max-width: ${Metrics.phoneView}) {
    flex-direction: column;
  }
`;

const Graph = styled.div`
  width: 30%;
  text-align: center;
  h3 {
    color: ${Colors.inverseTextColor};
    margin-bottom: ${Metrics.doublePadding};
    font-size: 1.5rem;
  }
  h4 {
    color: #7e7e7d;
    font-size: 1.3rem;
  }
  .__header {
    height: 100px;
  }
  @media only screen and (max-width: ${Metrics.phoneView}) {
    width: 100%;
  }
`;

const Icons = styled.div`
  height: 100%;
  width: ${Metrics.loginFormWidth};
  border: 1px solid ${Colors.inverseTextColor};
  display: flex;
  .__half {
    width: 50%;
    img {
      width: 85%;
      height: 70%;
    }
    h2 {
      font-size: 6rem;
      margin: 15px 0;
    }
    p {
      color: ${Colors.inverseTextColor};
      margin-left: 20px;
    }
  }
  @media only screen and (max-width: ${Metrics.phoneView}) {
    height: auto;
  }
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
  img {
    height: 200%;
    width: 20px;
  }
`;

const chartData = {
  line: {
    data1: [30, 20, 50, 40, 60, 50],
    data2: [200, 130, 90, 240, 130, 220],
    data3: [300, 200, 160, 400, 250, 250]
  },
  bar: {
    data1: [30, 200, 100, 400, 150, 250],
    data2: [130, 100, 140, 200, 150, 50]
  }
};

class Dashboard extends Component {
  state = {
    displayName: this.props.displayName
  };

  refreshDate = d => {
    this.setState({ displayName: d.name });

    this.salesPercent.load({
      unload: true,
      columns: [["data1", 100], ["data3", 200]]
    });
  };

  renderChart = () => {
    this.salesPercent = c3.generate({
      bindto: "#salesPercent",
      data: {
        json: chartData.line,
        type: "donut",
        onclick: (d, i) => this.refreshDate(d)
      }
    });

    this.salesChart = c3.generate({
      bindto: "#salesChart",
      data: {
        json: chartData.line
      }
    });

    this.stockChart = c3.generate({
      bindto: "#stockChart",
      data: {
        json: chartData.line
      }
    });
  };

  componentDidMount = () => {
    this.renderChart();
  };

  render() {
    return (
      <div>
        <Header />
        <Body>
          <SideBar />
          <Content>
            <h1>
              Dashboard:
              <span> {this.state.displayName}</span>
            </h1>
            <h2>PROMOTION STATUS</h2>
            <Billboard>
              <Icons>
                <div className="__half">
                  <img src={shop} alt="Shopping" />
                  <p>Sales/Hour</p>
                </div>
                <div className="__half">
                  <h2>0</h2>
                </div>
              </Icons>
              <Icons>
                <div className="__half">
                  <img src={feet} alt="Foot traffic" />
                  <p>Foot traffic/Hour</p>
                </div>
                <div className="__half">
                  <h2>0</h2>
                </div>
              </Icons>
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
              <Graph>
                <div className="__header">
                  <h3>Store Sales %</h3>
                  <h4>Select the store that you're interested in</h4>
                </div>
                <div id="salesPercent" />
              </Graph>
              <Graph>
                <div className="__header">
                  <h3>Sales</h3>
                </div>
                <div id="salesChart" />
              </Graph>
              <Graph>
                <div className="__header">
                  <h3>Stock</h3>
                </div>
                <div id="stockChart" />
              </Graph>
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
