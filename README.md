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

- fix grid system css
- think about a card container element that reduces text size..
- more generic form handling with setState etc. for datepicker
- check how well schema validation for xml works
- make parsing code more robust
- figure out rollup crazy large file size..
- figure out how we will route from UI/Message -> To Stream -> To (1. Stream in-house extensions like giphy, 2. Pluggable extensions on Stream's platform. 3. The customer's own action handler).
  -- perhaps we set an action:scope. for our customers this would be at the organization level. ie. <mml action_scope="organization:123"> or <mml action_scope="giphy">
- button, select and input are used in HTML, we should use different names (since we can't support the full feature set)
- CSS around the message that looks nice (With help of Jaap)
- try mobile layouts to see what works
- available times/dates for datetimepicker
