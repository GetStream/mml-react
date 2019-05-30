import React from "react";

export class Loader extends React.PureComponent {
  static defaultProps = {
    loading: false
  };
  render() {
    if (this.props.loading) {
      return <div>...</div>;
    }
    return null;
  }
}
