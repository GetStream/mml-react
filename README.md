# mml-react

/\*
TODO:

- figure out how we will route from UI/Message -> To Stream -> To (1. Stream in-house extensions like giphy, 2. Pluggable extensions on Stream's platform. 3. The customer's own action handler).
  -- perhaps we set an action:scope. for our customers this would be at the organization level. ie. <mml action_scope="organization:123"> or <mml action_scope="giphy">
- first pass at cleaning up code
- button, select and input are used in HTML, we should use different names (since we can't support the full feature set)
- CSS around the message that looks nice (With help of Jaap)
- check how well schema validation for xml works
- try mobile layouts to see what works
- create react library
- available times/dates for datetimepicker

\*/
