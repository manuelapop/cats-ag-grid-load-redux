import React, { Component } from "react";

export default class EditCellRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  componentWillMount() {
    this.setState({
      value:
        this.props.data == null || this.props.data === ""
          ? ""
          : this.props.data.url
    });
  }

  // noinspection JSUnusedGlobalSymbols
  refresh(params) {
    if (params.value !== this.state.value) {
      this.setState({
        value: params.value
      });
    }
    return true;
  }

  render() {
    return (
      <div>
        <img alt="" src={this.state.value} max-width="600" max-height="600" />
      </div>
    );
  }
}
