(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7OsV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("Fcif"),c=a("+I+c"),o=(a("mXGw"),a("/FXl")),r=a("TjRS"),l=(a("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var b={_frontmatter:l},i=r.a;function m(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.b)(i,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"mml-react"},"MML React"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mml-react"}),Object(o.b)("img",{alt:"NPM",src:"https://img.shields.io/npm/v/mml-react.svg"})),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GetStream/mml-react/actions"}),Object(o.b)("img",{alt:"CI",src:"https://github.com/GetStream/mml-react/workflows/CI/badge.svg"})),"\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.github.io/mml-react/"}),Object(o.b)("img",{alt:"Component Reference",src:"https://img.shields.io/badge/docs-component%20reference-blue.svg"}))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"// YARN\nyarn add mml-react\n\n//NPM\nnpm install mml-react --save\n\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { MML } from 'mml-react';\n\n<MML source=\"<mml>Text</mml>\" />;\n")),Object(o.b)("h2",{id:"overwriting-components"},"Overwriting Components"),Object(o.b)("p",null,"Making basic changes to the components is quite easy. You can use this option to add support for more custom tags."),Object(o.b)("p",null,"Here's an example of how to overwrite the button tag's React component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const converters = {\n  button: (tag, children) => {\n    return <MyCustomButton {...tag.node.attributes} text={tag.getText()} key={tag.key} />;\n  },\n};\n\n<MML converters={converters} source={source} />;\n")),Object(o.b)("h2",{id:"components"},"Components"),Object(o.b)("p",null,"MML React components could be divided in four categories:"),Object(o.b)("h3",{id:"naked-components"},"Naked Components"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Very basic pieces of UI typically beyond a matter of styling")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/row"}),Object(o.b)("inlineCode",{parentName:"a"},"Row"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/col"}),Object(o.b)("inlineCode",{parentName:"a"},"Col")))),Object(o.b)("h3",{id:"container-components"},"Container Components"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Always host other components, can be themable")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(o.b)("inlineCode",{parentName:"a"},"Card"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card-header"}),Object(o.b)("inlineCode",{parentName:"a"},"CardHeader"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card-body"}),Object(o.b)("inlineCode",{parentName:"a"},"CardBody")))),Object(o.b)("h3",{id:"core-components"},"Core Components"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Basic components that can be composed and themed")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/text"}),Object(o.b)("inlineCode",{parentName:"a"},"Text")),": a block of text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button")),":"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/image"}),Object(o.b)("inlineCode",{parentName:"a"},"Image")),": a simple responsive image"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/input"}),Object(o.b)("inlineCode",{parentName:"a"},"Input")),": an input field"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/md"}),Object(o.b)("inlineCode",{parentName:"a"},"MD")),": renders markdown"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/icon"}),Object(o.b)("inlineCode",{parentName:"a"},"Icon")),": simply displays an ico from material design icons"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/loader"}),Object(o.b)("inlineCode",{parentName:"a"},"Loader")),": signals a ",Object(o.b)("em",{parentName:"li"},"loading")," temporary state with a circular spinner"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/error"}),Object(o.b)("inlineCode",{parentName:"a"},"Error")),": display an ",Object(o.b)("em",{parentName:"li"},"error")," message"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/success"}),Object(o.b)("inlineCode",{parentName:"a"},"Success")),": display a ",Object(o.b)("em",{parentName:"li"},"success")," message")),Object(o.b)("h3",{id:"structured-components"},"Structured Components"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"More complex components composed of other components, certainly themable")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/add-to-calendar"}),Object(o.b)("inlineCode",{parentName:"a"},"AddToCalendar")),": wrapped in a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(o.b)("inlineCode",{parentName:"a"},"Card"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/scheduler"}),Object(o.b)("inlineCode",{parentName:"a"},"Scheduler")),": wrapped in a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/card"}),Object(o.b)("inlineCode",{parentName:"a"},"Card"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button-list"}),Object(o.b)("inlineCode",{parentName:"a"},"ButtonList")),": a list of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/carousel"}),Object(o.b)("inlineCode",{parentName:"a"},"Carousel")),": a series of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/carousel-item"}),Object(o.b)("inlineCode",{parentName:"a"},"CarouselItem"))," typically containing ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/image"}),Object(o.b)("inlineCode",{parentName:"a"},"Image")),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/text"}),Object(o.b)("inlineCode",{parentName:"a"},"Text"))," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/number"}),Object(o.b)("inlineCode",{parentName:"a"},"Number")),": input spinner composed of two ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/mml-react/components/button"}),Object(o.b)("inlineCode",{parentName:"a"},"Button"))," and a counter")),Object(o.b)("h2",{id:"styles-customization"},"Styles customization"),Object(o.b)("p",null,"MML react ships with some good looking default styles but it can be completely customised to suit your visual identity."),Object(o.b)("h3",{id:"themes"},"Themes"),Object(o.b)("p",null,"MML ships with a default theme plus four variations. These differentiate from one another only in terms of colours providing different look and feels that suits common scenarios like Social messaging, Customer support, etc. Each theme is either available in the compiled and autoprefixed ",Object(o.b)("inlineCode",{parentName:"p"},"dist/styles/{name}.css")," file and in the ",Object(o.b)("inlineCode",{parentName:"p"},"src/styles/{name}.scss")," source file. You should always include only one of this files, either ",Object(o.b)("inlineCode",{parentName:"p"},"css")," or ",Object(o.b)("inlineCode",{parentName:"p"},"scss"),", as they all includes the basic styling your MML components need."),Object(o.b)("p",null,"If your projects include a ",Object(o.b)("inlineCode",{parentName:"p"},"sass")," compilation step you might tweak the theme variables and roll out your branded style. A theme is made of the following SCSS map:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"$mml-theme: (\n  primary-accent: #006cff,\n  app-canvas: #fff,\n  text-high-emphasis: #0e1621,\n  text-mid-emphasis: #8a898e,\n  text-low-emphasis: #b2b1b5,\n  text-self: #fff,\n  text-pressed: #fff,\n  card-bg: #f2f2f2,\n  card-alt-bg: #fff,\n  card-self-bg: #41affc,\n  stroke: #e5e5e6,\n  stroke-low-emphasis: #f2f2f2,\n  shadow: 0px 2px 5px rgba(0, 0, 0, 0.15),\n);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are running ",Object(o.b)("inlineCode",{parentName:"p"},"sass")," within your project you might customize most aspects of mml styling other than the them through scss variables. Refer ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"src/styles/common/_variables.scss"}),"to the source")," to see what is available.")),Object(o.b)("p",null,"Each of these variables is also avaialable as CSS variable that you can tweak dynamically, prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"--mml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),":root {\n  --mml-primary-accent: #006cff;\n  --mml-app-canvas: #fff;\n}\n")),Object(o.b)("p",null,"This theme related data is also made avaiable to javascript through ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/css-modules/icss#export"}),Object(o.b)("inlineCode",{parentName:"a"},"icss :export"))," so that you can import them and reuse them to coherently style other parts of your chat outside of MML attachments (these are used in the MML docz app for instance)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { locals as mmlTheme } from 'mml-react/dist/styles/index.css';\n// or\nimport { locals as mmlTheme } from 'mml-react/src/styles/index.scss';\n\n// variables for js are transformed into camelCase, e.g.:\nprimaryAccent: '#006cff',\nappCanvas: '#fff',\n// ...etc.\n")),Object(o.b)("h3",{id:"differentiations-between-mine-and-others-messages"},"Differentiations between mine and other's messages"),Object(o.b)("p",null,"Some components need to slightly change according to their position in the chat. To achieve this MML scope its ",Object(o.b)("inlineCode",{parentName:"p"},"CSS")," alterations in a configurable selector through the ",Object(o.b)("inlineCode",{parentName:"p"},"SCSS")," variable ",Object(o.b)("inlineCode",{parentName:"p"},"$mml-selector-wrapper-message-self")," whose default value is ",Object(o.b)("inlineCode",{parentName:"p"},".me")," class selector. This selector needs to be placed on the container element that wraps your MML attachment. MML styling by default aligns ",Object(o.b)("inlineCode",{parentName:"p"},".me")," messages on the right hand side.\nInternally to this library these SCSS tweaks are implemented through the ",Object(o.b)("inlineCode",{parentName:"p"},"SCSS mixin mml-me"),", e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss"}),"@include mml-component('btn') {\n  text-align: left;\n\n  @include mml-me() {\n    text-align: right;\n  }\n}\n")),Object(o.b)("h2",{id:"development--contributions"},"Development & Contributions"),Object(o.b)("h2",{id:"commands"},"commands"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn docs")," to run hot reload docs, best way to work on the components"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn build")," to build and type check"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn lint")," to run linting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn format")," to prettify things"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"yarn test")," to run tests")),Object(o.b)("h2",{id:"understanding-the-parser"},"Understanding the Parser"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SourceToXML parse MML string into XML node structure"),Object(o.b)("li",{parentName:"ol"},"XMLtoMMLTree converts the XML nodes to a tree of MML nodes (MMLTree)"),Object(o.b)("li",{parentName:"ol"},"MMLTree can be converted to React nodes using ToReact method")),Object(o.b)("h2",{id:"tree"},"Tree"),Object(o.b)("p",null,"The tree has:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The name of the MML tag (passed to callback data as ",Object(o.b)("inlineCode",{parentName:"li"},"mml_name"),")"),Object(o.b)("li",{parentName:"ul"},"MMLTag Children")),Object(o.b)("h2",{id:"naming"},"Naming"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tree: The tree of MML tags"),Object(o.b)("li",{parentName:"ul"},"Converters: Mapping from MMLTag to React Component")),Object(o.b)("h2",{id:"how-to-create-a-new-tag"},"How to create a new tag"),Object(o.b)("p",null,"Let's say you want to create a new tag called ",Object(o.b)("inlineCode",{parentName:"p"},"color_picker"),".\nHere's how you would go about implementing it."),Object(o.b)("h3",{id:"step-1---react-node"},"Step 1 - React node"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"src/components")," directory create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"ColorPicker.tsx")," and do something along these lines:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export const ColorPicker: FC<ColorPickerProps> = ({ name, value = '' }) => {\n  const [state, setState] = useState(value);\n  return (\n    <input\n      className=\"mml-input\"\n      name={name}\n      value={state}\n      placeholder={placeholder}\n      onChange={(event) => setState(event.target.value)}\n    />\n  );\n};\n")),Object(o.b)("h3",{id:"step-2---converters"},"Step 2 - Converters"),Object(o.b)("p",null,"Add an entry to ",Object(o.b)("inlineCode",{parentName:"p"},"converters.tsx")," file"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"color_picker: (tag: MMLTag) => {\n  return <ColorPicker {...tag.attributes} key={tag.key} name={tag.attributes.name} value={tag.attributes.value} />;\n};\n")),Object(o.b)("h3",{id:"step-3---doc"},"Step 3 - Doc"),Object(o.b)("p",null,"Docs is the easiest way to test your component in isolation. Simply create a new file named ",Object(o.b)("inlineCode",{parentName:"p"},"ColorPicker.mdx")," similar to other mdx files in the component directory and document/test the component."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"We welcome code changes that improve this library or fix a problem. Please make sure to follow all best practices and add tests if applicable before submitting a Pull Request on Github. We are pleased to merge your code into the official repository. Make sure to sign our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/forms/d/e/1FAIpQLScFKsKkAJI7mhCr7K9rEIOpqIDThrWxuvxnwUq2XkHyG154vQ/viewform"}),"Contributor License Agreement (CLA)")," first. See our license file for more details."))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-faacc51750095d6ef72d.js.map