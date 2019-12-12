import React, { useState } from "react";
import PropTypes from "prop-types";

import { Parse } from "../parser";
import { Loader as LoaderComponent } from "./Loader";
import { Error as ErrorComponent } from "./Error";
import { Success as SuccessComponent } from "./Success";

export function MML({
  source,
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
  ...props
}) {
  let tree;
  const [state, setState] = useState(() => {
    // computing the initial state is expensive, so we do it here
    let initialState;
    try {
      tree = Parse(source);
      // get initial state for all input elements in MML
      const treeState = tree.initialState();
      initialState = {
        ...treeState,
        error: "",
        loading: false,
        success: "",
        mml_error: ""
      };
    } catch (e) {
      console.warn(e);
      initialState = {
        mml_error:
          "This chat message has invalid formatting and can't be shown",
        loading: false,
        success: ""
      };
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const data = [];
    const pairs = Object.keys(this.state).map((key, index) => {
      return { name: key, value: this.state[key] };
    });
    data.push(...pairs);

    setState({ loading: true, error: "", success: "" });
    try {
      await props.onAction(data);
      setState({ loading: false, error: "", success: "submitted" });
    } catch (e) {
      setState({ loading: false, error: "something is broken" });
    }
  }

  function handleAction(attr, event) {
    if (typeof event == Date) {
      // this is the datepicker...
      const data = {};
      data[attr.name] = selectedDate;
      setState(data);
    } else if (attr.url && attr.url.length) {
      window.location.href = sanitizeUrl(attr.url);
    } else {
      const data = {};
      data[attr.name] = attr.value || event.target.value;
      setState(data);
    }
  }

  if (state.mml_error) {
    return <div className="mml-container">{state.mml_error}</div>;
  }

  const reactNodes = tree.toReact(tree);

  if (tree.hasData()) {
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

MML.propTypes = {
  source: PropTypes.string,
  action: PropTypes.func
};
