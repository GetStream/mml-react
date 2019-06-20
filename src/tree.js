/**
 * MMLTree - The tree object for MML tags
 */
export class MMLTree {
  constructor(node, children) {
    this.node = node;
    console.log("attributes", node.attributes, children);
    this.name = node.attributes.name;
    this.children = children;
  }

  toReact(rc) {
    // TODO: make this easy...
    const reactChildren = [];
    for (let c of this.children) {
      reactChildren.push(c.toReact(rc));
    }

    return (
      <div className="mml-container">
        <form onSubmit={rc.handleSubmit}>
          {reactChildren}
          <Loader loading={rc.state.loading} />
          <Success success={rc.state.success} />
          <Error error={rc.state.error} />
        </form>
      </div>
    );
  }

  initialState() {
    // get initial state for all children
    const state = { mml_name: this.name };
    function gatherState(nodes) {
      for (let n of nodes) {
        state = { ...state, ...n.initialState() };
        if (n.children) {
          gatherState(n.children);
        }
      }
    }
    return state;
  }
}
