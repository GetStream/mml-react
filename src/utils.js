export function getNodeText(node) {
  let text = "";
  if (node.type === "text") {
    text = node.text;
  } else if (node.children && node.children.length) {
    text = node.children[0].text;
  }
  return text;
}
