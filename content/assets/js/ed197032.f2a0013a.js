"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4477],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58905:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={author:"Matteo Merli",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)"},l=void 0,u={permalink:"/blog/2021/12/11/Log4j-CVE",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-12-11-Log4j-CVE.md",source:"@site/blog/2021-12-11-Log4j-CVE.md",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)",description:"Yesterday, a new serious vulnerability was reported regarding Log4j that can",date:"2021-12-11T00:00:00.000Z",formattedDate:"December 11, 2021",tags:[],readingTime:1.155,truncated:!0,authors:[{name:"Matteo Merli"}],frontMatter:{author:"Matteo Merli",title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)"},prevItem:{title:"What\u2019s New in Apache Pulsar 2.7.4",permalink:"/blog/2021/12/14/Apache-Pulsar-2-7-4"},nextItem:{title:"Apache Pulsar 2.8.1",permalink:"/blog/2021/09/23/Apache-Pulsar-2-8-1"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Yesterday, a new serious vulnerability was reported regarding Log4j that can\nallow remote execution for attackers."))}m.isMDXComponent=!0}}]);