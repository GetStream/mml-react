import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MML } from "mml-react";

export class ExampleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "massage"
    };
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
    const mml = this.props.examples[this.state.selected];
    if (!mml) {
      return <div>No MLL Selected</div>;
    }

    function onAction(data) {
      console.log("do a request to your server here", data);
      return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }
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
        </div>
        <div class="row">
          <div class="col syntax-mml">
            <SyntaxHighlighter language="xml" style={docco}>
              {mml}
            </SyntaxHighlighter>
          </div>
          <div class="col">
            <MML source={mml} onAction={onAction} />
          </div>
        </div>
      </div>
    );
  }
}
