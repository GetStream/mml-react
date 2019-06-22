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

## TODO

- cleanup parser code
  -- test how invalid XML is handled
  -- figure out if there is an easier way to reuse stuff between react & react native.
  -- complete the cleanup for all components

* design for the landing page
* Design for time picker, make sure we parse ICal correctly
* button, select and input are used in HTML, we should use different names (since we can't support the full feature set)
