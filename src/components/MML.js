import React from "react";
import { ParseMMLSource, XMLtoMMLTree } from "../parser";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { Success } from "./Success";

export class MML extends React.PureComponent {
  static defaultProps = {
    loaderComponent: Loader,
    errorComponent: Error,
    successComponent: Success
  };

  constructor(props) {
    super(props);

    // parse the tree
    try {
      this.tree = this.convertMMLToTree(props.source);
    } catch (e) {
      console.warn(e);
      this.state = {
        mml_error:
          "This chat message has invalid formatting and can't be shown",
        loading: false,
        success: ""
      };
      return;
    }

    // get initial state for all input elements in MML
    const treeState = this.tree.initialState();
    this.state = {
      ...treeState,
      error: "",
      loading: false,
      success: "",
      mml_error: ""
    };
  }

  render() {
    if (this.state.mml_error) {
      return <div className="mml-container">{this.state.mml_error}</div>;
    }

    const reactNodes = this.tree.toReact(this);

    if (this.tree.hasData()) {
      return (
        <div className="mml-container">
          <form onSubmit={this.handleSubmit}>
            {reactNodes}
            <Loader loading={this.state.loading} />
            <Success success={this.state.success} />
            <Error error={this.state.error} />
          </form>
        </div>
      );
    } else {
      return <div className="mml-container">{reactNodes}</div>;
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const data = [];
    const pairs = Object.keys(this.state).map((key, index) => {
      return { name: key, value: this.state[key] };
    });
    data.push(...pairs);

    this.setState({ loading: true, error: "", success: "" });
    try {
      await this.props.onAction(data);
      this.setState({ loading: false, error: "", success: "submitted" });
    } catch (e) {
      this.setState({ loading: false, error: "something is broken" });
    }
  };

  handleAction = (attr, event) => {
    if (typeof event == Date) {
      // this is the datepicker...
      const data = {};
      data[attr.name] = selectedDate;
      this.setState(data);
    } else if (attr.url && attr.url.length) {
      window.location.href = sanitizeUrl(attr.url);
    } else {
      const data = {};
      data[attr.name] = attr.value || event.target.value;
      this.setState(data);
    }
  };

  convertMMLToTree(source) {
    // convert the string to XML nodes
    // this library is relatively lightweight and doesn't do a ton of validation
    const XMLNodes = ParseMMLSource(source);

    // convert the xml to a tree of mml
    const tree = XMLtoMMLTree(XMLNodes);
    return tree;
  }
}
