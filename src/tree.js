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

  hasData() {
    let data = false;

    function checkForData(nodes) {
      for (let n of nodes) {
        if (n.constructor.data) {
          data = true;
        }
        if (n.children) {
          checkForData(n.children);
        }
      }
    }
    checkForData([this]);
    return data;
  }

  validateTree() {
    const errors = [];

    function runValidation(nodes) {
      for (let n of nodes) {
        const nodeErrors = n.validate();
        errors.push(...nodeErrors);
        if (n.children) {
          runValidation(n.children);
        }
      }
    }
    runValidation([this]);
    return errors;
  }

  validate() {
    const errors = [];
    if (!this.children || this.children.length === 0) {
      errors.append("mml tag is empty");
    }
    return errors;
  }

  initialState() {
    // get initial state for all children
    let state = {};

    if (this.name) {
      state.mml_name = this.name;
    }

    function gatherState(nodes) {
      for (let n of nodes) {
        state = { ...state, ...n.initialState() };
        if (n.children) {
          gatherState(n.children);
        }
      }
    }
    gatherState(this.children);
    return state;
  }
}
