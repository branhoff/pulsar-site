"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[77076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={Id:"tutorials-produce-consume",title:"Produce and consume messages",sidebar_label:"Produce and consume messages"},o=void 0,l={unversionedId:"tutorials-produce-consume",id:"version-2.10.x/tutorials-produce-consume",title:"Produce and consume messages",description:"In this tutorial, we will:",source:"@site/versioned_docs/version-2.10.x/tutorials-produce-consume.md",sourceDirName:".",slug:"/tutorials-produce-consume",permalink:"/docs/2.10.x/tutorials-produce-consume",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/tutorials-produce-consume.md",tags:[],version:"2.10.x",frontMatter:{Id:"tutorials-produce-consume",title:"Produce and consume messages",sidebar_label:"Produce and consume messages"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Create a topic",permalink:"/docs/2.10.x/tutorials-topic"},next:{title:"Topic compaction",permalink:"/docs/2.10.x/cookbooks-compaction"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Produce and consume messages",id:"produce-and-consume-messages",level:2},{value:"Related Topics",id:"related-topics",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure the Pulsar client"),(0,n.kt)("li",{parentName:"ul"},"Create a subscription"),(0,n.kt)("li",{parentName:"ul"},"Create a producer"),(0,n.kt)("li",{parentName:"ul"},"Send test messages"),(0,n.kt)("li",{parentName:"ul"},"Verify the results")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.10.x/tutorials-tenant"},"Set up a tenant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.10.x/tutorials-namespace"},"Create a namespace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.10.x/tutorials-topic"},"Create a topic"))),(0,n.kt)("h2",{id:"produce-and-consume-messages"},"Produce and consume messages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"${PULSAR_HOME}/conf/client.conf")," file, replace ",(0,n.kt)("inlineCode",{parentName:"p"},"webServiceUrl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerServiceUrl")," with your service URL.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a subscription to consume messages from ",(0,n.kt)("inlineCode",{parentName:"p"},"apache/pulsar/test-topic"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s sub apache/pulsar/test-topic  -n 0\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In a new terminal, create a producer and send 10 messages to test-topic."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the results."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n\nOutput from the producer side shows the messages have been produced successfully:\n18:15:15.489 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 10 messages successfully produced.\n")))),(0,n.kt)("h4",{id:"related-topics"},"Related Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.10.x/admin-api-clusters"},"Manage clusters"))))}m.isMDXComponent=!0}}]);