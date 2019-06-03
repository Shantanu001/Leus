import React, { Component } from "react";

import { Pagination as PaginationComp } from "antd";

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dafault_page: ""
    };
  }

  componentDidMount = () => {
    var temp = this.state;
    temp["default_page"] = 1;
    this.setState(temp);
  };

  handlePagination = (page, pageSize) => {
    console.log(page, pageSize);
    this.props.callPagination(page, pageSize);
  };

  render() {
    return (
      <div>
        <PaginationComp
          defaultCurrent={1}
          total={this.props.total_cards}
          current={this.props.current_page}
          pageSize={20}
          onChange={(page, pageSize) => this.handlePagination(page, pageSize)}
          hideOnSinglePage={true}ßßßß
        />
      </div>
    );
  }
}

export default Pagination;
