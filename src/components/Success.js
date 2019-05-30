import React from "react";

export class Success extends React.PureComponent {
  render() {
    if (this.props.success) {
      return <div className="mml-success">{this.props.success}</div>;
    }
    return null;
  }
}
