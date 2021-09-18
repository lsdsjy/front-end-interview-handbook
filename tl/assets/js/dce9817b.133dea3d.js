"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[468],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a={title:"Build User Interfaces"},l=void 0,s={unversionedId:"build-user-interfaces",id:"build-user-interfaces",isDocsHomePage:!1,title:"Build User Interfaces",description:"Many Front End engineers spend a lot of time building UI, and building a UI component is a good way to assess someone's familiarity in the three biggest aspects of front end - HTML, JS, CSS.",source:"@site/../contents/build-user-interfaces.md",sourceDirName:".",slug:"/build-user-interfaces",permalink:"/tl/build-user-interfaces",editUrl:"https://github.com/yangshun/front-end-interview-handbook/edit/master/contents/../contents/build-user-interfaces.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1631983182,formattedLastUpdatedAt:"9/18/2021",frontMatter:{title:"Build User Interfaces"},sidebar:"root",previous:{title:"Utility Function",permalink:"/tl/utility-function"},next:{title:"Algorithms",permalink:"/tl/algorithms"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Considerations",id:"considerations",children:[{value:"Front End Best Practices",id:"front-end-best-practices",children:[]},{value:"Performance and Scalability",id:"performance-and-scalability",children:[]},{value:"Network Requests",id:"network-requests",children:[]},{value:"User Experience",id:"user-experience",children:[]},{value:"Security",id:"security",children:[]},{value:"Future",id:"future",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Many Front End engineers spend a lot of time building UI, and building a UI component is a good way to assess someone's familiarity in the three biggest aspects of front end - HTML, JS, CSS."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tabs"),(0,i.kt)("li",{parentName:"ul"},"Media Gallery"),(0,i.kt)("li",{parentName:"ul"},"Accordion"),(0,i.kt)("li",{parentName:"ul"},"Other possible components - ",(0,i.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.0/components/"},"Bootstrap"))),(0,i.kt)("p",null,"Companies that ask UI components questions usually ask candidates to code in one of these three styles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codepen.io"},"Codepen")," (or some other online editor with preview) - You get to visualize the output and iterate on the solution"),(0,i.kt)("li",{parentName:"ul"},"BYOE (Bring your Own Environment) - Candidates bring their own development environment/laptop and free to choose whether they want to do local development using their own editors or use online environments like codepen.io or codesandbox.io. This is the most ideal scenario that benefits candidates, but is usually only done during on-sites"),(0,i.kt)("li",{parentName:"ul"},"Whiteboard - Candidates have to write all the required HTML, JS, CSS on the whiteboard. There's no preview, no autocomplete, no online documentation to help you; you're totally on your own. So far Facebook and Google are the only companies that are known to do whiteboard-style for front end interviews")),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"After you complete (or even before you start on) the question, think about these potential issues (where relevant). You may or may not have to handle them, so you can always clarify with the interviewer before starting on it so that you don't write too much/little code."),(0,i.kt)("h3",{id:"front-end-best-practices"},"Front End Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid writing global variables. Wrap your code within an IIFE and leave the global scope clean."),(0,i.kt)("li",{parentName:"ul"},"What if I need to have multiple instances of this components on the page? Did I use any global variables that will make it hard for me to do so? Will having my components on the same page affect each other? They should be independent!"),(0,i.kt)("li",{parentName:"ul"},"Do I have a convenient API to instantiate independent components with configurable options? Old school jQuery UI components are a good examples of this.")),(0,i.kt)("h3",{id:"performance-and-scalability"},"Performance and Scalability"),(0,i.kt)("p",null,"Can my component scale (network request duration, performance, UI, UX, etc)?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What if the network takes too long to return something? How do I test slow network speed? Hint: Chrome Devtools Network tab."),(0,i.kt)("li",{parentName:"ul"},"What if a string is too long? Hint: CSS ",(0,i.kt)("inlineCode",{parentName:"li"},"word-break")," property."),(0,i.kt)("li",{parentName:"ul"},"What if a picture is too large?"),(0,i.kt)("li",{parentName:"ul"},"Can the component contain any amount of child items? Example: Support flexible amount of thumbnails in a photo gallery component."),(0,i.kt)("li",{parentName:"ul"},"Will the layout be messed up if I have too few or too many of these items? What if there are no items, what empty state do I show?"),(0,i.kt)("li",{parentName:"ul"},"How will performance be affected if I have too many elements on the page? How do I solve it? Hint: ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/outsystems-engineering/virtualizing-the-virtual-dom-pushing-react-further-d76a16e5f209"},"Virtual list")),(0,i.kt)("li",{parentName:"ul"},"Did I hard code any values that will make it hard to extend to changing requirements in future? Did I design for extensibility?")),(0,i.kt)("h3",{id:"network-requests"},"Network Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does the component deal with race conditions in network/async requests? E.g. a new network request is fired before the response for the previous request is returned."),(0,i.kt)("li",{parentName:"ul"},"What if the request timeout or errored? How can I recover from it gracefully?"),(0,i.kt)("li",{parentName:"ul"},"How can I improve the performance of the component? Can I make use of caching, lazy loading, prefetching/preloading?"),(0,i.kt)("li",{parentName:"ul"},"What if I need to load a lot of data/images? Can I lazily load them? Can I fetch the data in batches to reduce spamming the API endpoint?")),(0,i.kt)("h3",{id:"user-experience"},"User Experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is my component mobile-friendly? Can my component fit on different screen widths? How do I make it mobile-friendly?"),(0,i.kt)("li",{parentName:"ul"},"Is my component easily i18n-able? How can I change the design to cater for i18n? Does my component support RTL languages?"),(0,i.kt)("li",{parentName:"ul"},"Are there any potential UX/accessibility (a11y) issues with my components?"),(0,i.kt)("li",{parentName:"ul"},"What are some common accessibility techniques and gotchas?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67"},"https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67")))),(0,i.kt)("li",{parentName:"ul"},"What tools can I use to check for accessibility?"),(0,i.kt)("li",{parentName:"ul"},"There's probably isn't much time for you to be an expert in a11y but knowledge of a11y is one of the differentiating factors between junior vs senior engineers.")),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XSS vulnerability. Interviewers are especially looking out for this whenever there is user input involved. You almost never need to use ",(0,i.kt)("inlineCode",{parentName:"li"},".innerHTML")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"$.html()")," function. If you do, make sure you escape the contents first."),(0,i.kt)("li",{parentName:"ul"},"User input that is being displayed in the URL has to be encoded first as well, or else there's also a potential for mischief.")),(0,i.kt)("h3",{id:"future"},"Future"),(0,i.kt)("p",null,"Lastly, mention how you would do things differently if you had more time and were writing production code that you need to maintain. Perhaps use Sass instead of CSS, use React instead of jQuery for better maintainability, make the component mobile-friendly and test on different screen widths, add keyboard shortcuts, etc."))}d.isMDXComponent=!0},7462:function(e,t,n){function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return o}})},3366:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return o}})}}]);