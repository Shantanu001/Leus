import React, { Component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import ContentComponent from "../container/Content";
import HeaderComponent from "../container/Header";
import FooterComponent from "../container/Footer";


import axios from "axios";
import { Layout } from "antd";
const { Header, Footer, Content, Sider } = Layout;


class appRouter extends Component { 
  constructor(props) {
    super(props);
    //console.log("context",this.context);
    this.state = {
      cards: [],
      txt_search: "",
      current_page: "",
      total_cards: ""
    };
  }


  Callback = val => {
    console.log(val);
    this.setState({ txt_search: val });
    var temp = this.state;
    temp["txt_search"] = val;
    temp["current_page"] = 1;
    this.setState(temp);
    this.updateCards();
    // console.log("here12345",useContext(textSearch));
  };

  Callback_Pagination = (page, pageSize) => {
    console.log("page", page);
    console.log("pageSize", pageSize);
    var temp = this.state;
    temp["current_page"] = page;
    //temp["pageSize"] = pageSize;
    this.setState(temp);
    this.updateCards();
  };

  updateCards() {
    axios
      .get(
        "https://pixabay.com/api/",
        {
          params: {
            key: "12234069-b8c998a7f8cb3cbdb4c3813a7",
            q: this.state.txt_search,
            per_page: 20,
            page: this.state.current_page
          }
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(res => {
        var temp = this.state;
        temp["cards"] = res.data.hits;
        temp["total_cards"] = res.data.total;
        this.setState(temp);
        console.log("here",res);
      });
  }

  render() {
    return (
      
      <Layout>
        <Header style={{ background: "#E8E8E8" }}>
          {" "}
          <HeaderComponent callFun={e => this.Callback(e)} />{" "}
        </Header>
        <Layout>
          <Content style={{ background: "#FFFFFF" }}>
            <BrowserRouter>
              <Switch>
                <Route
                  path="/"
                  render={() => (
                    <ContentComponent
                      val={this.state.txt_search}
                      cards={this.state.cards}
                    />
                  )}
                />
              </Switch>
            </BrowserRouter>
          </Content>
        </Layout>

        <Footer>
          <FooterComponent
            callPagination={(x, y) => this.Callback_Pagination(x, y)}
            current_page={this.state.current_page}
            total_cards={this.state.total_cards}
          />
        </Footer>
      </Layout>
                
      
    );
  }
}

export default appRouter;
