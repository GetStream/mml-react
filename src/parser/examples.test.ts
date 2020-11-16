import renderer from 'react-test-renderer';
import { SourceToXML, XMLtoMMLTree } from './parser';
import { examples } from './examples';

describe('examples', () => {
  examples.forEach(({ name, mml }) => {
    it(`${name} example should work`, () => {
      const nodes = SourceToXML(mml);
      expect(nodes).toMatchSnapshot();

      const tree = XMLtoMMLTree(nodes);
      expect(tree).toMatchSnapshot();

      //@ts-expect-error
      expect(tree.toReact(tree)).toMatchSnapshot();
      //@ts-expect-error
      expect(renderer.create(tree.toReact(tree)).toJSON()).toMatchSnapshot();
    });
  });
});
