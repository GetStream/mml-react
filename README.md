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
- styleguidist publish flow (done)
- convert date string into date object for add to calendar (done)
- Refine examples for docs and example project (done)
- Write Docs in stream CMS (done)
- Add alt and title support to image tags (done)
- Review the button tag (done)
- Fix MML & MML Container state management (done)
- ship a 0.1 release on NPM (done)
- ship stream-chat-react support for MML (mml2 branch, ready)
- figure out proptype weirdness (getting some validation errors on valid input)
- document how to overwrite 1 specific component for MML (done)
- Button/URL verify it works (done)

* scheduler component
* implement hard failure on invalid MML

- clean Git history
- tests & coverage reporting
- CSS for all components
- consider renaming column tag, consider if we need a table tag..?

### Design

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

```jsx
import { MML } from 'mml-react';

// use the react component
<MML source={mml} />;
```

## Overwriting Components

Making basic changes to the components is quite easy.
Here's an example of how to overwrite the button tag's React component:

```js
import { converters } from 'mml-react'
const config = {...converters}
config['button'] = (tag, children) => {
  return <MyCustomButton text={tag.getText()} {...tag.node.attributes} key={tag.key} />
}
<MML converters={config} source={source} />
```

This approach is generally only recommended for small changes.
In most cases where you need more features than MML offers we recommend writing a custom attachment type.

## Development & Contributions

We are intentionally keeping the scope of MML limited.
It should solve 80% of your needs for interactive messages.
We can't support every scenario though, if you need something more complex you can always implement your own attachment type.

- `yarn lint` to run linting
- `yarn prettier` to prettify things
- `yarn test` to run tests

[StyleGuidist docs](https://getstream.github.io/mml-react/) are available

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

## Naming

- Tree: The tree of MML tags
- Tag: Intermediate class used for validating MML tags
- Converters: Mapping from MML tag to React Component (React Native coming later)

## How to create a new tag

As an example let's say you want to create a new tag called `color_picker`.
Here's how you would go about implementing it.

### Step 1 - Tag

Add something like this to src/tags/data.js

```jsx
export class ColorPicker extends MMLDataTag {
  initialState() {
    const data = {};
    data[this.node.attributes.name] = this.node.attributes.value;
    return data;
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

```jsx
export function ColorPicker({ name, ...props }) {
  const mmlContext = useContext(MMLContext);

  const value = mmlContext[name];

  return <input value={value} onChange={(event) => mmlContext.setValue(name, event.target.value)} />;
}
```

Styleguidist is the easiest way to test your react component in isolation.
The MMLContainer provides the right context so you can test it like:

```jsx
<MMLContainer>
  <ColorPicker />
</MMLContainer>
```

### Step 4 - Converter

Open `src/converters.js` and add something like this:

```jsx
color_picker: tag => {
  return <ColorPicker {...tag.node.attributes} />
},
```

And that's it

## Components

MML React components could be divided in four categories:

### Naked Components

> Very basic pieces of UI typically beyond a matter of styling

- [`Row`](/components/row)
- [`Col`](/components/col)

### Container Components

> Always host other components, can be themable

- [`Card`](/components/card)
- [`CardHeader`](/components/card-header)
- [`CardBody`](/components/card-body)

### Core Components

> Basic components that can be composed and themed

- [`Text`](/components/text): a block of text
- [`Button`](/components/button):
- [`Image`](/components/image): a simple responsive image
- [`Input`](/components/input): an input field
- [`MD`](/components/md): renders markdown
- [`Icon`](/components/icon): simply displays an ico from material design icons
- [Loader](/components/loader): signals a _loading_ temporary state with a circular spinner
- [`Error`](/components/error): display an _error_ message
- [`Success`](/components/success): display a _success_ message

### Structured Components

> More complex components composed of other components, certainly themable

- [`AddToCalendar`](/components/add-to-calendar): wrapped in a [`Card`](/components/card)
- [`Scheduler`](/components/scheduler): wrapped in a [`Card`](/components/card)
- [`ButtonList`](/components/button-list): a list of [`Button`](/components/button)
- [`Carousel`](/components/carousel): a series of [`CarouselItem`](/components/carousel-item) typically containing [`Image`](/components/image), [`Text`](/components/text) and [`Button`](/components/button)
- [`Number`](/components/number): input spinner composed of two [`Button`](/components/button) and a counter

## Styles customization

MML react ships with a basic `index.css` which contains a default basic styles for all [MML Components](#components)

### SCSS variables

If your projects include a `sass` compilation step you might customize the overall look and feel of the component through `scss` variables, here are all the available ones with their default values:

```scss
$mml-card-bg: $mml-bg;
$mml-card--dark-bg: $mml--dark-bg;
$mml-card-header-font-size: 13px;
$mml-card-header-padding-y: 13px;
$mml-card-header-padding-x: 13px;
$mml-card-header-opacity: 0.3;
$mml-card-header-bg: mml-color(grey-800-full);
$mml-card-header-color: mml-color(black);
$mml-card-header--dark-opacity: 0.7;
$mml-card-header--dark-bg: mml-color(grey-200);
$mml-card-header--dark-color: mml-color(white);
$mml-card-body-font-size: 14px;
$mml-card-body-color: mml-color(black);
$mml-card-body--dark-color: mml-color(white);
```