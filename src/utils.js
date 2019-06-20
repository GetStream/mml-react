export function getNodeText(node) {
  let text = "";
  if (node.children) {
    text = node.children[0].text;
  }
  return text;
}
