import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Body from "../Components/Body";

import styled from "styled-components";
import { Metrics, Colors } from "../Themes";
import Input from "../Components/Input";

const Content = styled.div`
  width: 100%;
  background-color: ${Colors.background};
  padding-left: ${Metrics.doublePadding};
  padding-right: ${Metrics.doublePadding};
  display: flex;
  .__flex {
    display: flex;
    margin: -10px 0;
    i {
      margin-top: 8px;
    }
  }
  h1 {
    font-size: 4rem;
    color: ${Colors.logo};
    i {
      margin-left: 30px;
      font-size: 3rem;
    }
  }
  i {
    margin-top: 10px;
    color: white;
    margin-left: 10px;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
      color: #ffffff80;
    }
  }
  hr {
    margin: 20px 100px;
    background-color: ${Colors.logo};
    border: 0;
    width: 1px;
  }
  .__dropDown {
    display: none;
    position: absolute;
    left: 90px;
    background-color: #f6f6f6;
    min-width: 230px;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
    p {
      margin: 0 0;
      padding: 5px;
      &:hover {
        background-color: #982b2b78;
        cursor: pointer;
      }
    }
  }
  .__second {
    top: 280px;
    left: 620px;
  }
  .__show {
    display: block;
  }
`;

const Line = styled.div`
  width: ${props => props.width || "250px"};
  margin: 10px 10px;
  background-color: ${Colors.logo};
  height: 1px;
  border: 0;
`;

class Product extends Component {
  state = {
    productNames: [""],
    company: [["", "", ""]],
    productList: [
      ["Dairymaid", ["chips", "ice cream"]],
      ["Ekuzini", ["chips", "ice cream"]],
      ["Emperor", ["chips", "ice cream"]]
    ],
    companyList: [
      [
        "Dairymaid",
        ["D", [["test1", "test2", "test3"], ["test", "test", "test"]]]
      ],
      [
        "Ekuzini",
        ["D", [["test1", "test2", "test3"], ["test", "test", "test"]]]
      ],
      [
        "Emperor",
        ["D", [["test1", "test2", "test3"], ["test", "test", "test"]]]
      ]
    ],
    selectedCompany: ""
  };

  filterFunction = (inputID, dropDownID) => {
    let input, filter, p, dropDown, i;
    input = document.getElementById(inputID);
    filter = input.value.toUpperCase();
    dropDown = document.getElementById(dropDownID);
    p = dropDown.getElementsByTagName("p");
    for (i = 0; i < p.length; i++) {
      if (p[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        p[i].style.display = "";
      } else {
        p[i].style.display = "none";
      }
    }
  };

  show = toShow => {
    document.getElementById(toShow).classList.toggle("__show");
  };

  componentDidMount() {
    let productRangeInput = document.getElementById("productRangeInput");
    productRangeInput.addEventListener("focusin", () => {
      this.show("productRangeDropDown");
    });

    let CompanyInput = document.getElementById("companyInput");
    CompanyInput.addEventListener("focusin", () => {
      this.show("companyDropDown");
    });
  }

  productFunction = currElement => {
    document.getElementById("productRangeInput").value = currElement[0];
    this.setState({ productNames: currElement[1] });
    this.show("productRangeDropDown");
  };

  companyFunction = currElement => {
    document.getElementById("companyInput").value = currElement[0];
    document.getElementById("companyPassword").value = currElement[1][0];
    this.setState({ company: currElement[1][1] });
    this.show("companyDropDown");
  };

  removeRow = (currElement, array, productBool) => {
    let index = array.indexOf(currElement);
    let newArray = array;
    newArray.splice(index, 1);
    productBool
      ? this.setState({ productNames: newArray })
      : this.setState({ company: newArray });
  };

  render() {
    return (
      <div>
        <Header />
        <Body height="100vh">
          <SideBar />
          <Content>
            <div>
              <h1>
                Product<i className="fa fa-save" />
              </h1>
              <Input
                id="productRangeInput"
                type="text"
                placeholder="product range"
                onKeyUp={() =>
                  this.filterFunction(
                    "productRangeInput",
                    "productRangeDropDown"
                  )
                }
              />
              <div id="productRangeDropDown" className="__dropDown">
                {this.state.productList.map(currElement => (
                  <p onClick={() => this.productFunction(currElement)}>
                    {currElement[0]}
                  </p>
                ))}
              </div>
              <Line />
              {this.state.productNames.map((currElement, index) => (
                <div className="__flex">
                  <Input
                    value={currElement}
                    key={index}
                    type="text"
                    placeholder="name of product"
                  />
                  <i
                    className="fa fa-trash"
                    onClick={() =>
                      this.removeRow(currElement, this.state.productNames, true)
                    }
                  />
                </div>
              ))}
              <i
                className="fa fa-plus"
                onClick={() =>
                  this.setState({
                    productNames: [...this.state.productNames, ""]
                  })
                }
              />
            </div>

            <hr />

            <div>
              <h1>
                Company<i className="fa fa-save" />
              </h1>
              <div className="__flex">
                <Input
                  id="companyInput"
                  type="text"
                  placeholder="name of company"
                  onKeyUp={() =>
                    this.filterFunction("companyInput", "companyDropDown")
                  }
                />
                <div id="companyDropDown" className="__dropDown __second">
                  {this.state.companyList.map(currElement => (
                    <p onClick={() => this.companyFunction(currElement)}>
                      {currElement[0]}
                    </p>
                  ))}
                </div>

                <Input
                  id="companyPassword"
                  type="text"
                  placeholder="password"
                />
              </div>
              <Line width="550px" />
              {this.state.company.map((currElement, index) => (
                <div className="__flex">
                  <Input
                    value={currElement[0]}
                    key={index}
                    type="text"
                    placeholder="name of store"
                  />
                  <Input
                    value={currElement[1]}
                    key={index}
                    type="text"
                    placeholder="product range"
                  />
                  <Input
                    value={currElement[2]}
                    key={index}
                    type="text"
                    placeholder="password"
                  />
                  <i
                    className="fa fa-trash"
                    onClick={() =>
                      this.removeRow(currElement, this.state.company, false)
                    }
                  />
                </div>
              ))}

              <i
                className="fa fa-plus"
                onClick={() =>
                  this.setState({
                    company: [...this.state.company, ""]
                  })
                }
              />
            </div>
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
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
