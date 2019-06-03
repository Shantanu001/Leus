import React, { Component } from "react";

import Pagination from "../components/Pagination";

import { Row, Col } from "antd";

import VideoThumbnail from "react-video-thumbnail";

class Footer extends Component {
  super(props) {}

  downloadThumbnail(thumbnail) {
    console.log("here", thumbnail);
    window.open(thumbnail);
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Pagination
              callPagination={(x, y) => this.props.callPagination(x, y)}
              pageSize={this.props.pageSize}
              current_page={this.props.current_page}
              total_cards={this.props.total_cards}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
