# MML for React

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

## Usage

```
import {MML} from 'mml-react';

// use the react component
<MML source={mml} />
```

# Development & Contributions

We are intentionally keeping the scope of MML limited.
It should solve 80% of your needs for interactive messages.
We can't support every scenario though, if you need something more complex you can always implement your own attachment type.

## Understanding the Parser

1. SourceToXML turns an MML string into a XML node structure
2. XMLtoMMLTree converts the XML nodes to a tree of MML nodes (MMLTree)
3. MML nodes can be converted to React nodes using their ToReact method
4. The MML react component handles these steps automatically

## Tree

The tree knows:

- The name of the MML tag (needed for form logic)
- If there are data tags
- The initial state for the data tags

## Naming:

- Tree: The tree of MML tags
- Tag: Intermediate class used for validating MML tags
- ConverterConfig: Mapping from MML tag to React Component (React Native coming later)

## TODO

- fix stream-chat-react build issues (done)
- functional components with hooks (done)
- use a context to share stuff to lower level components (done)
- toReact should be defined at the tree level and allow you to overwrite the mappings (1 day left)
- make mml in stream chat react a singleton type of pattern (done)
- refactor how state is handled for date picker element and number element
- move the converterConfig for react into it's own file
- move all tags into it's own file
- styleguidist for all react tags
- prop types for all react tags
- Fix CSS of stream-chat-react
- validation:
  -- XSD seems like the nicest way to validate the MML (but libs dont support it well)
  -- some elements are only allowed as children of other elements
  -- properties need to be validated
  -- some elements require certain children elements
- decide what we do about invalid MML (raise an error, show that the message can't be rendered)
- disable components that we don't need
- CSS for the components that we do need
- ICAL integration
- Review MML syntax after design feedback is done
- Document how to create a new tag
- clean Git history
- tests & coverage reporting
- Write Docs
