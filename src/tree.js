import React from "react";

/**
 * MMLTree - The tree object for MML tags
 */
export class MMLTree {
  constructor(node, children) {
    this.node = node;
    this.name = node.attributes.name;
    this.children = children;
  }

  toReact(rc) {
    const reactChildren = [];
    for (let c of this.children) {
      reactChildren.push(c.toReact(rc));
    }

    return reactChildren;
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
