import React from "react";
import renderer from "react-test-renderer";
import { ParseMMLSource, XMLtoMMLTree } from "../parser";
import { MML } from "./MML";

test("mml name and simple text field", () => {
  const mml = '<mml name="john">hi</mml>';
  const nodes = ParseMMLSource(mml);
  const tree = XMLtoMMLTree(nodes);
  console.log(tree.children);
  expect(tree.name).toEqual("john");
  expect(tree.children.length).toBe(1);
  const rTree = renderer.create(<MML source={mml} />).toJSON();
  expect(rTree).toMatchSnapshot();
});
