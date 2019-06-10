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

- alignment
- simple CSS to make everything look nice by default...

- grid system (perhaps responsive) that supports column width & column offset and alignment. let's skip it for now...
  -- CSS bootstrap style or css grid style
  -- Android: https://www.mkyong.com/android/android-tablelayout-example/
  -- iOS: https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/CreateATableView.html

- available times/dates for date/time picker (it's not useful for scheduling if you can't restrict to available times)
  -- https://github.com/peterbraden/ical.js/blob/master/example_rrule.js

- figure out how to reduce rollup crazy large file size..
- button, select and input are used in HTML, we should use different names (since we can't support the full feature set)

- cleanup parser code
