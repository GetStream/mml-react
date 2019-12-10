# mml-react

## Install

```bash
git clone https://github.com/GetStream/mml-react.git
cd mml-react
yarn; yarn start
```

and in a new terminal do:

```bash
cd example
yarn; yarn start
```

## Understanding the Parser

1. ParseMMLSource turns an MML string into a XML node structure
2. XMLtoMMLTree converts the XML nodes to a tree of MML nodes (MMLTree)
3. MML nodes can be converted to React nodes using their ToReact method
4. The MML react component handles these steps automatically

## TODO

- functional based components would be nicer than classes, feels more like modern react
- validation:
  -- XSD seems like the nicest way to validate the MML (but libs dont support it well)
  -- some elements are only allowed as children of other elements
  -- properties need to be validated
  -- some elements require certain children elements
- Decide what we do about invalid MML (raise an error, show that the message can't be rendered)
- Disable components that we don't need
- CSS for the components that we do need
- ICAL integration
- Clean Git history
- Tests & coverage reporting
