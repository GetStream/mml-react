import React from "react";

export class Error extends React.PureComponent {
  static defaultProps = {
    error: ""
  };
  render() {
    if (this.props.error) {
      return <span className="mml-error">{this.props.error}</span>;
    }
    return null;
  }
}
