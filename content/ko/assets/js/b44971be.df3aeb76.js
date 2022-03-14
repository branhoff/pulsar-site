"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5942],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29452:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"How to monitor transactions?"},s=void 0,u={unversionedId:"txn-monitor",id:"txn-monitor",title:"How to monitor transactions?",description:"You can monitor the status of the transactions in Prometheus and Grafana using the transaction metrics.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/txn-monitor.md",sourceDirName:".",slug:"/txn-monitor",permalink:"/ko/docs/next/txn-monitor",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/txn-monitor.md",tags:[],version:"current",frontMatter:{id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"How to monitor transactions?"},sidebar:"docsSidebar",previous:{title:"How to use transactions?",permalink:"/ko/docs/next/txn-use"},next:{title:"Overview",permalink:"/ko/docs/next/helm-overview"}},p={},l=[],f={toc:l};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can monitor the status of the transactions in Prometheus and Grafana using the ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/reference-metrics/#pulsar-transaction"},"transaction metrics"),"."),(0,a.kt)("p",null,"For how to configure Prometheus and Grafana, see ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/deploy-monitoring"},"here"),"."))}m.isMDXComponent=!0}}]);