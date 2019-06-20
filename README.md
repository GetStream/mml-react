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
  -- setup a map for all components
  -- init the component with tagname, node object, children
  -- specify allowed attributes and allowed children for each tag
  -- potentially use XML validation as an alternative

* consider naming for components
* design for the landing page

* fix overflow menu
* simple CSS to make everything look nice by default...

* available times/dates for date/time picker (it's not useful for scheduling if you can't restrict to available times)
  -- https://github.com/peterbraden/ical.js/blob/master/example_rrule.js

* button, select and input are used in HTML, we should use different names (since we can't support the full feature set)
