import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MML } from "mml-react";

export class ExampleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "massage"
    };
    //
  }

  selectExample(exampleName) {
    this.setState((state, props) => {
      return { selected: exampleName };
    });
  }

  handleLayoutChange = event => {
    this.setState({ layout: event.target.value });
  };

  render() {
    console.log("this.props.examples", this.props.examples);
    const mml = this.props.examples[this.state.selected];
    return (
      <div class="container-fluid">
        <div class="row">
          <ul>
            {Object.keys(this.props.examples).map(key => (
              <li key={key} onClick={() => this.selectExample(key)}>
                {key}
              </li>
            ))}
          </ul>
          Layout
          <select value={this.state.layout} onChange={this.handleLayoutChange}>
            <option selected value="narrow">
              Narrow
            </option>
            <option value="wide">Wide</option>
          </select>
        </div>
        <div class="row">
          <div class="col syntax-mml">
            <SyntaxHighlighter language="xml" style={docco}>
              {mml}
            </SyntaxHighlighter>
          </div>
          <div class="col">
            <MML
              source={mml}
              layout={this.state.layout}
              onAction={data =>
                console.log("do a request to your server here", data)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
