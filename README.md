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

## TODO

- functional components with hooks
- enable you to overwrite the MML components
- make mml in chat react a singelton type of pattern
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
- clean Git history
- tests & coverage reporting
