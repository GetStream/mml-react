(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7OsV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("Fcif"),c=a("+I+c"),r=(a("mXGw"),a("/FXl")),o=a("TjRS"),l=(a("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var b={_frontmatter:l},i=o.a;function m(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)(i,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mml-react"},"MML React"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mml-react"}),Object(r.b)("img",{alt:"NPM",src:"https://img.shields.io/npm/v/mml-react.svg"})),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GetStream/mml-react/actions"}),Object(r.b)("img",{alt:"CI",src:"https://github.com/GetStream/mml-react/workflows/CI/badge.svg"})),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.github.io/mml-react/"}),Object(r.b)("img",{alt:"Component Reference",src:"https://img.shields.io/badge/docs-component%20reference-blue.svg"}))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"// YARN\nyarn add mml-react\n\n// NPM\nnpm install mml-react --save\n\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { MML } from 'mml-react';\n\n<MML source=\"<mml>Text</mml>\" />;\n")),Object(r.b)("h2",{id:"overwriting-components"},"Overwriting Components"),Object(r.b)("p",null,"Making basic changes to the components is quite easy. You can use this option to add support for more custom tags."),Object(r.b)("p",null,"Here's an example of how to overwrite the button tag's React component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const converters = {\n  button: (tag, children) => {\n    return <MyCustomButton {...tag.node.attributes} text={tag.getText()} key={tag.key} />;\n  },\n};\n\n<MML converters={converters} source={source} />;\n")),Object(r.b)("h2",{id:"components"},"Components"),Object(r.b)("p",null,"MML React components could be divided in four categories:"),Object(r.b)("h3",{id:"naked-components"},"Naked Components"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Very basic pieces of UI typically beyond a matter of styling")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/row"}),Object(r.b)("inlineCode",{parentName:"a"},"Row"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/col"}),Object(r.b)("inlineCode",{parentName:"a"},"Col")))),Object(r.b)("h3",{id:"container-components"},"Container Components"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Always host other components, can be themable")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(r.b)("inlineCode",{parentName:"a"},"Card"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card-header"}),Object(r.b)("inlineCode",{parentName:"a"},"CardHeader"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card-body"}),Object(r.b)("inlineCode",{parentName:"a"},"CardBody")))),Object(r.b)("h3",{id:"core-components"},"Core Components"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Basic components that can be composed and themed")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/text"}),Object(r.b)("inlineCode",{parentName:"a"},"Text")),": a block of text"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button")),": a simple button"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/image"}),Object(r.b)("inlineCode",{parentName:"a"},"Image")),": a simple responsive image"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/input"}),Object(r.b)("inlineCode",{parentName:"a"},"Input")),": an input field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/md"}),Object(r.b)("inlineCode",{parentName:"a"},"MD")),": renders markdown"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/icon"}),Object(r.b)("inlineCode",{parentName:"a"},"Icon")),": simply displays an icon from material design icons"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/loading"}),Object(r.b)("inlineCode",{parentName:"a"},"Loading")),": signals a ",Object(r.b)("em",{parentName:"li"},"loading")," temporary state with a circular spinner"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/error"}),Object(r.b)("inlineCode",{parentName:"a"},"Error")),": display an ",Object(r.b)("em",{parentName:"li"},"error")," message"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/success"}),Object(r.b)("inlineCode",{parentName:"a"},"Success")),": display a ",Object(r.b)("em",{parentName:"li"},"success")," message")),Object(r.b)("h3",{id:"structured-components"},"Structured Components"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"More complex components composed of other components, certainly themable")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/add-to-calendar"}),Object(r.b)("inlineCode",{parentName:"a"},"AddToCalendar")),": wrapped in a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(r.b)("inlineCode",{parentName:"a"},"Card"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/scheduler"}),Object(r.b)("inlineCode",{parentName:"a"},"Scheduler")),": wrapped in a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(r.b)("inlineCode",{parentName:"a"},"Card"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button-list"}),Object(r.b)("inlineCode",{parentName:"a"},"ButtonList")),": a list of ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/carousel"}),Object(r.b)("inlineCode",{parentName:"a"},"Carousel")),": a series of ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/carousel-item"}),Object(r.b)("inlineCode",{parentName:"a"},"CarouselItem"))," typically containing ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/image"}),Object(r.b)("inlineCode",{parentName:"a"},"Image")),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/text"}),Object(r.b)("inlineCode",{parentName:"a"},"Text"))," and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/number"}),Object(r.b)("inlineCode",{parentName:"a"},"Number")),": input spinner composed of two ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(r.b)("inlineCode",{parentName:"a"},"Button"))," and a counter")),Object(r.b)("h2",{id:"styles-customization"},"Styles customization"),Object(r.b)("p",null,"MML react ships with some good looking default styles but it can be completely customised to suit your visual identity."),Object(r.b)("h3",{id:"themes"},"Themes"),Object(r.b)("p",null,"MML ships with a default theme plus four variations. These differentiate from one another only in terms of colours providing different look and feels that suits common scenarios like Social messaging, Customer support, etc. Each theme is either available in the compiled and autoprefixed ",Object(r.b)("inlineCode",{parentName:"p"},"dist/styles/{name}.css")," file and in the ",Object(r.b)("inlineCode",{parentName:"p"},"src/styles/{name}.scss")," source file. You should always include only one of this files, either ",Object(r.b)("inlineCode",{parentName:"p"},"css")," or ",Object(r.b)("inlineCode",{parentName:"p"},"scss"),", as they all includes the basic styling your MML components need."),Object(r.b)("p",null,"If your projects include a ",Object(r.b)("inlineCode",{parentName:"p"},"sass")," compilation step you might tweak the theme variables and roll out your branded style. A theme is made of the following SCSS map:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"$mml-theme: (\n  primary-accent: #006cff,\n  app-canvas: #fff,\n  text-high-emphasis: #0e1621,\n  text-mid-emphasis: #8a898e,\n  text-low-emphasis: #b2b1b5,\n  text-self: #fff,\n  text-pressed: #fff,\n  card-bg: #f2f2f2,\n  card-alt-bg: #fff,\n  card-self-bg: #41affc,\n  stroke: #e5e5e6,\n  stroke-low-emphasis: #f2f2f2,\n  shadow: 0px 2px 5px rgba(0, 0, 0, 0.15),\n);\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you are running ",Object(r.b)("inlineCode",{parentName:"p"},"sass")," within your project you might customize most aspects of mml styling other than the them through scss variables. Refer ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GetStream/mml-react/blob/master/src/styles/common/_variables.scss"}),"to the source")," to see what is available.")),Object(r.b)("p",null,"By setting ",Object(r.b)("inlineCode",{parentName:"p"},"$mml-use-css-vars: true")," you can make each of these variables available as CSS variable that you can tweak dynamically client side, they are all prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"--mml"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --mml-primary-accent: #006cff;\n  --mml-app-canvas: #fff;\n}\n")),Object(r.b)("p",null,"The theme related data is also made available to javascript through ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/icss#export"}),Object(r.b)("inlineCode",{parentName:"a"},"icss :export"))," so that you can import them and reuse them to coherently style other parts of your chat outside of MML attachments (these are used in the MML docz app for instance)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { locals as mmlTheme } from 'mml-react/dist/styles/index.css';\n// or\nimport { locals as mmlTheme } from 'mml-react/src/styles/index.scss';\n\n// variables for js are transformed into camelCase, e.g.:\nprimaryAccent: '#006cff',\nappCanvas: '#fff',\n// ...etc.\n")),Object(r.b)("h3",{id:"differentiations-between-mine-and-others-messages"},"Differentiations between mine and other's messages"),Object(r.b)("p",null,"Some components need to slightly change according to their position in the chat. To achieve this MML scope its ",Object(r.b)("inlineCode",{parentName:"p"},"CSS")," alterations in a configurable selector through the ",Object(r.b)("inlineCode",{parentName:"p"},"SCSS")," variables ",Object(r.b)("inlineCode",{parentName:"p"},"$mml-selector-wrapper-align-right")," and ",Object(r.b)("inlineCode",{parentName:"p"},"$mml-selector-wrapper-align-left")," whose default values are respectively ",Object(r.b)("inlineCode",{parentName:"p"},".mml-align-right")," and ",Object(r.b)("inlineCode",{parentName:"p"},".mml-align-left")," class selectors. These selectors need to be placed on the container element that wraps your MML attachment. Internally to this library these SCSS tweaks are implemented through the ",Object(r.b)("inlineCode",{parentName:"p"},"SCSS mixins mml-align-right and mml-align-left"),", e.g.:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@include mml-component('text') {\n  @include mml-align-left() {\n    text-align: left;\n  }\n\n  @include mml-align-right() {\n    text-align: right;\n  }\n}\n")),Object(r.b)("h3",{id:"html-structure"},"HTML structure"),Object(r.b)("p",null,"MML attachments always have two wrapping elements with the following two classes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),".mml-container\n  .mml-wrap\n")),Object(r.b)("p",null,"The class ",Object(r.b)("inlineCode",{parentName:"p"},".mml-container")," is responsible for some very basic styling that other components inherit, like ",Object(r.b)("inlineCode",{parentName:"p"},"border-box")," and ",Object(r.b)("inlineCode",{parentName:"p"},"font-family"),".\nThe class ",Object(r.b)("inlineCode",{parentName:"p"},".mml-wrap")," instead takes care of contextual styling, like ",Object(r.b)("inlineCode",{parentName:"p"},"border-radius")," and ",Object(r.b)("inlineCode",{parentName:"p"},"margin"),"s, that are most likely dependent on the differentiation between ",Object(r.b)("em",{parentName:"p"},"me")," and ",Object(r.b)("em",{parentName:"p"},"other")," messages ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#differentiations-between-mine-and-others-messages"}),"seen above"),"."),Object(r.b)("p",null,"Inside ",Object(r.b)("inlineCode",{parentName:"p"},"mml-wrap")," you could have as immediate children either the components as they are or the components automatically wrapped in a ",Object(r.b)("inlineCode",{parentName:"p"},'<div class="mml-card">...</div>')," when ",Object(r.b)("inlineCode",{parentName:"p"},'<mml type="card">')," is used (see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/mml-react/mml#with-card-type"}),Object(r.b)("inlineCode",{parentName:"a"},"MML")," docs"),"). Note that the ",Object(r.b)("inlineCode",{parentName:"p"},"mml-card")," class (and its ",Object(r.b)("inlineCode",{parentName:"p"},"Card")," React component) is also used internally in various components like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/mml-react/components/scheduler"}),Object(r.b)("inlineCode",{parentName:"a"},"Scheduler"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/mml-react/components/add-to-calendar"}),Object(r.b)("inlineCode",{parentName:"a"},"AddToCalendar")),"."),Object(r.b)("h2",{id:"development--contributions"},"Development & Contributions"),Object(r.b)("h2",{id:"commands"},"commands"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn docs")," to run hot reload docs, best way to work on the components"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn build")," to build and type check"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn lint")," to run linting"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn format")," to prettify things"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yarn test")," to run tests"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"npm version patch|minor|major")," to make a release")),Object(r.b)("h2",{id:"understanding-the-parser"},"Understanding the Parser"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"SourceToXML parse MML string into XML node structure"),Object(r.b)("li",{parentName:"ol"},"XMLtoMMLTree converts the XML nodes to a tree of MML nodes (MMLTree)"),Object(r.b)("li",{parentName:"ol"},"MMLTree can be converted to React nodes using ToReact method")),Object(r.b)("h2",{id:"tree"},"Tree"),Object(r.b)("p",null,"The tree has:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name of the MML tag (passed to callback data as ",Object(r.b)("inlineCode",{parentName:"li"},"mml_name"),")"),Object(r.b)("li",{parentName:"ul"},"MMLTag Children")),Object(r.b)("h2",{id:"naming"},"Naming"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tree: The tree of MML tags"),Object(r.b)("li",{parentName:"ul"},"Converters: Mapping from MMLTag to React Component")),Object(r.b)("h2",{id:"how-to-create-a-new-tag"},"How to create a new tag"),Object(r.b)("p",null,"Let's say you want to create a new tag called ",Object(r.b)("inlineCode",{parentName:"p"},"color_picker"),".\nHere's how you would go about implementing it."),Object(r.b)("h3",{id:"step-1---react-node"},"Step 1 - React node"),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"src/components")," directory create a file called ",Object(r.b)("inlineCode",{parentName:"p"},"ColorPicker.tsx")," and do something along these lines:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export const ColorPicker: FC<ColorPickerProps> = ({ name, value = '' }) => {\n  const [state, setState] = useState(value);\n  return (\n    <input\n      className=\"mml-input\"\n      name={name}\n      value={state}\n      placeholder={placeholder}\n      onChange={(event) => setState(event.target.value)}\n    />\n  );\n};\n")),Object(r.b)("h3",{id:"step-2---converters"},"Step 2 - Converters"),Object(r.b)("p",null,"Add an entry to ",Object(r.b)("inlineCode",{parentName:"p"},"converters.tsx")," file"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"color_picker: (tag: MMLTag) => {\n  return <ColorPicker {...tag.attributes} key={tag.key} name={tag.attributes.name} value={tag.attributes.value} />;\n};\n")),Object(r.b)("h3",{id:"step-3---doc"},"Step 3 - Doc"),Object(r.b)("p",null,"Docs is the easiest way to test your component in isolation. Simply create a new file named ",Object(r.b)("inlineCode",{parentName:"p"},"ColorPicker.mdx")," similar to other mdx files in the component directory and document/test the component."),Object(r.b)("h2",{id:"contributing"},"Contributing"),Object(r.b)("p",null,"We welcome code changes that improve this library or fix a problem. Please make sure to follow all best practices and add tests if applicable before submitting a Pull Request on Github. We are pleased to merge your code into the official repository. Make sure to sign our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/forms/d/e/1FAIpQLScFKsKkAJI7mhCr7K9rEIOpqIDThrWxuvxnwUq2XkHyG154vQ/viewform"}),"Contributor License Agreement (CLA)")," first. See our license file for more details."))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-c9742bc9a406c7443769.js.map