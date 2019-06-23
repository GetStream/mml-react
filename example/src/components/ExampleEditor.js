import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MML } from "mml-react";

export class ExampleEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
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
    const example = this.props.examples[this.state.selected];
    if (!example) {
      return <div>No Example Selected</div>;
    }

    function onAction(data) {
      return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <ul>
            {Object.keys(this.props.examples).map(key => (
              <li key={key} onClick={() => this.selectExample(key)}>
                {this.props.examples[key].name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div>
            <p>{example.description}</p>
          </div>
          <div className="col syntax-mml">
            <SyntaxHighlighter language="xml" style={atomDark}>
              {example.mml}
            </SyntaxHighlighter>
          </div>
          <div className="col">
            <MML source={example.mml} onAction={onAction} key={example.name} />
          </div>
        </div>
      </div>
    );
  }
}
