# MML for React

## TODO

- fix stream-chat-react build issues (done)
- functional components with hooks (done)
- use a context to share stuff to lower level components (done)
- toReact should be defined at the tree level and allow you to overwrite the mappings (done)
- make mml in stream chat react a singleton type of pattern (done)
- refactor how state is handled for date picker element and number element (done)
- move the converterConfig for react into it's own file (done)
- prop types for all react tags (done)
- cleanup all linting errors (done)
- styleguidist for all react tags (done)
- move all tags into shared files (done)
- Document how to create a new tag (done)
- consider renaming column tag...
- styleguidist publish flow
- implement hard failure on invalid MML
- Review MML syntax after design feedback is done
- clean Git history
- tests & coverage reporting
- Write Docs
- CSS for all components
- Scheduler Component

## Design:

- Add to Calendar element is missing
- Loading, Success and Error states

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

- `yarn lint` to run linting
- `yarn prettier` to prettify things
- `yarn test` to run tests

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

## How to create a new tag

As an example let's say you want to create a new tag called `color_picker`.
Here's how you would go about implementing it.

### Step 1 - Tag

Add something like this to src/tags/data.js

```
export class ColorPicker extends MMLDataTag {

  initialState() {
    const data = {}
    data[this.node.attributes.name] = this.node.attributes.value
    return data
  }
}
```

### Step 2 - Tag parser

Open `src/tags/index.js` and add this to tags variable:

tags = {
...
color_picker: ColorPicker,
...
}

### Step 3 - React node

In `src/components` create a file called ColorPicker.js and do something along these lines:

```
export function ColorPicker({ name, ...props }) {
  const mmlContext = useContext(MMLContext)

  const value = mmlContext[name]

  return (
    <input
      value={value}
      onChange={(event) => mmlContext.setValue(name, event.target.value)}
    />
  )
}
```

Styleguidist is the easiest way to test your react component in isolation.
The MMLContainer provides the right context so you can test it like:

```
<MMLContainer>
  <ColorPicker />
</MMLContainer>
```

### Step 4 - Converter

Open `src/components/converterConfig.js` and add something like this:

```
color_picker: tag => {
  return <ColorPicker {...tag.node.attributes} />
},
```

And that's it
