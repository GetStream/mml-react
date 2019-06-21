export class MMLTag {
  constructor(tagName, node, children) {
    this.tagName = tagName;
    this.node = node;
  }

  initialState() {
    return {};
  }

  // return a react node for this mml tag
  toReact() {}
}
