import React from 'react';
import renderer from 'react-test-renderer';
import { SourceToXML, XMLtoMMLTree } from './parser';

test('mml name and simple text field', () => {
  const mml = '<mml name="john">hi</mml>';
  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.name).toEqual('john');
  expect(tree.children.length).toBe(1);
  expect(tree.toReact()).toMatchSnapshot();

  expect(renderer.create(<>{tree.toReact()}</>).toJSON()).toMatchSnapshot();
});

test('mml with button', () => {
  const mml = `<mml name="support">
                  <text>It looks like your credit card isn't activated yet, activate it now:</text>
                  <button name="action" value="Activate">Activate Card</button>
               </mml>`;

  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.name).toEqual('support');
  expect(tree.children.length).toBe(2);
  expect(tree.toReact()).toMatchSnapshot();

  expect(renderer.create(<>{tree.toReact()}</>).toJSON()).toMatchSnapshot();
});

test('simple carousel', () => {
  const mml = '<carousel><item>a</item><item>b</item></carousel>';

  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.children.length).toBe(1);
  //@ts-ignore
  expect(tree.children[0].children.length).toBe(2);
  expect(tree.toReact()).toMatchSnapshot();

  expect(renderer.create(<>{tree.toReact()}</>).toJSON()).toMatchSnapshot();
});

test('simple input', () => {
  const mml = '<input name="name" value="John" />';

  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.initialState()).toEqual({ name: 'John' });
  expect(tree.children.length).toBe(1);
  expect(tree.toReact()).toMatchSnapshot();

  expect(renderer.create(<>{tree.toReact()}</>).toJSON()).toMatchSnapshot();
});

test('input tags should have data', () => {
  const mml = '<input name="myinput" value="1" />';
  const nodes = SourceToXML(mml);
  const tree = XMLtoMMLTree(nodes);

  expect(tree.initialState()).toEqual({ myinput: '1' });
});

test('text tags should not have data', () => {
  const mml = '<text>hi</text>';
  const nodes = SourceToXML(mml);
  const tree = XMLtoMMLTree(nodes);

  expect(tree.initialState()).toEqual({});
});

test('invalid MML', () => {
  const mml = '<input name="test" value=1 />';
  expect(() => SourceToXML(mml)).toThrowError('Missing end tag for element mml (line 1, column 1)');
});
