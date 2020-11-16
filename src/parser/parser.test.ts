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
  expect(tree.toReact(tree)).toMatchSnapshot();

  expect(renderer.create(tree.toReact(tree)).toJSON()).toMatchSnapshot();
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
  expect(tree.toReact(tree)).toMatchSnapshot();

  expect(renderer.create(tree.toReact(tree)).toJSON()).toMatchSnapshot();
});

test('simple carousel', () => {
  const mml = '<carousel><item>a</item><item>b</item></carousel>';

  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.children.length).toBe(1);
  expect(tree.children[0].children.length).toBe(2);
  expect(tree.toReact(tree)).toMatchSnapshot();

  expect(renderer.create(tree.toReact(tree)).toJSON()).toMatchSnapshot();
});

test('simple input', () => {
  const mml = '<input name="name" value="John" />';

  const nodes = SourceToXML(mml);
  expect(nodes).toMatchSnapshot();

  const tree = XMLtoMMLTree(nodes);
  expect(tree).toMatchSnapshot();
  expect(tree.initialState()).toEqual({ name: 'John' });
  expect(tree.children.length).toBe(1);
  expect(tree.toReact(tree)).toMatchSnapshot();

  expect(renderer.create(tree.toReact(tree)).toJSON()).toMatchSnapshot();
});

// test('invalid input tag', () => {
//   // note how name is missing
//   const mml = '<input value="John" />';
//   const nodes = SourceToXML(mml);
//   const tree = XMLtoMMLTree(nodes);
//   const errors = tree.validateTree();
//   expect(errors.length).toBe(1);
//   expect(errors[0]).toEqual('Attribute name is required for tag input');
// });

test('input tags should have data', () => {
  const mml = '<input name="myinput" value="1" />';
  const nodes = SourceToXML(mml);
  const tree = XMLtoMMLTree(nodes);

  expect(tree.hasData()).toBe(true);
  expect(tree.initialState()).toEqual({ myinput: '1' });
});

test('text tags should not have data', () => {
  const mml = '<text>hi</text>';
  const nodes = SourceToXML(mml);
  const tree = XMLtoMMLTree(nodes);

  expect(tree.hasData()).toBe(false);
});

test('invalid MML', () => {
  const mml = '<input name="test" value=1 />';
  expect(() => SourceToXML(mml)).toThrowError('Missing end tag for element mml (line 1, column 1)');
});

// test('invalid MML 2', () => {
//   const mml =
//     '<image src="https://turn5.scene7.com/is/image/Turn5/J20850?wid=810&hei=608&op_usm=0.8,1,10,0&amp;test=test" />';
//   const rTree = renderer.create(<MML source={mml} />).toJSON();
//   expect(rTree).toMatchSnapshot();
// });

// test('only supported attributes are allowed', () => {
//   const mml = '<mml name="john">hi</mml>';
//   const nodes = SourceToXML(mml);
//   const tree = XMLtoMMLTree(nodes);
//   expect(tree.name).toEqual('john');
//   expect(tree.children.length).toBe(1);
//   const rTree = renderer.create(<MML source={mml} />).toJSON();
//   expect(rTree).toMatchSnapshot();
// });
