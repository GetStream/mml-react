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

- available times/dates for date/time picker (it's not useful if you can't restrict to available times)

- decide on how wide/narrow mobile/desktop layouts work
- more generic form handling with setState etc. for datepicker

- grid system (perhaps responsive) that supports column width & column offset
  -- CSS bootstrap style or css grid style
  -- Android: https://www.mkyong.com/android/android-tablelayout-example/
  -- iOS: https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/CreateATableView.html
- copy more markdown parsing from utils/render text

- figure out how to reduce rollup crazy large file size..
- button, select and input are used in HTML, we should use different names (since we can't support the full feature set)

## Landing page TODO

- designs Josh for rich messaging
- Thierry, content for landing page
- Josh landing page design
