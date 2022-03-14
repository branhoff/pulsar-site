"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6108],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={author:"Penghui Li",authorURL:"https://twitter.com/lipenghui6",title:"Apache Pulsar 2.4.0"},l=void 0,c={permalink:"/ko/blog/2019/07/05/Apache-Pulsar-2-4-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2019-07-05-Apache-Pulsar-2-4-0.md",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2019-07-05-Apache-Pulsar-2-4-0.md",title:"Apache Pulsar 2.4.0",description:"We are glad to publish Apache Pulsar 2.4.0. This is the result of a huge effort from the community, with over 460 commits and a long list of new features, general improvements and bug fixes.",date:"2019-07-05T00:00:00.000Z",formattedDate:"2019\ub144 7\uc6d4 5\uc77c",tags:[],readingTime:2.44,truncated:!0,authors:[{name:"Penghui Li",url:"https://twitter.com/lipenghui6"}],frontMatter:{author:"Penghui Li",authorURL:"https://twitter.com/lipenghui6",title:"Apache Pulsar 2.4.0"},prevItem:{title:"Apache Pulsar 2.4.2",permalink:"/ko/blog/2019/12/04/Apache-Pulsar-2-4-2"},nextItem:{title:"Apache Pulsar 2.3.0",permalink:"/ko/blog/2019/02/20/Apache-Pulsar-2-3-0"}},u={authorsImageUrls:[void 0]},p=[{value:"Delayed message delivery",id:"delayed-message-delivery",level:3},{value:"Go Functions",id:"go-functions",level:3},{value:"Key_Shared subscription",id:"key_shared-subscription",level:3},{value:"Schema versioning",id:"schema-versioning",level:3},{value:"Replicated subscription",id:"replicated-subscription",level:3},{value:"New IO connectors",id:"new-io-connectors",level:3},{value:"Security",id:"security",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are glad to publish Apache Pulsar 2.4.0. This is the result of a huge effort from the community, with over 460 commits and a long list of new features, general improvements and bug fixes."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("b",null,(0,i.kt)("a",{parentName:"p",href:"/release-notes/#2.4.0"},"release notes"))," for a detailed list of the changes, with links to the relevant pull requests, discussions and documentation."),(0,i.kt)("p",null,"Regarding new features introduced, I just want to highlight here a tiny subset of them:"),(0,i.kt)("h3",{id:"delayed-message-delivery"},"Delayed message delivery"),(0,i.kt)("p",null,"It's now possible to send a delayed message by Pulsar producer, and a delayed message will be available after a delay time."),(0,i.kt)("p",null,"The Java code for a client using delayed messages delivery looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nproducer.newMessage().value("delayed message").deliverAfter(10, TimeUnit.SECONDS).send()\n\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Messages are only delayed on shared subscriptions, other subscriptions will deliver immediately."),(0,i.kt)("li",{parentName:"ol"},"Delayed messages are sent individually even if you enable message batching on producer.")))),(0,i.kt)("h3",{id:"go-functions"},"Go Functions"),(0,i.kt)("p",null,"Before 2.4.0 release, Java and Python are supported to write Pulsar Functions. Now, you can use Go to write Pulsar Functions, the following is an example of a Pulsar Function written in Go."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'\nimport (\n    "fmt"\n    "context"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, in []byte) error {\n    fmt.Println(string(in) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n\n')),(0,i.kt)("h3",{id:"key_shared-subscription"},"Key_Shared subscription"),(0,i.kt)("p",null,"A new subscription mode ",(0,i.kt)("inlineCode",{parentName:"p"},"Key_shared")," is introduced in 2.4.0. In ",(0,i.kt)("inlineCode",{parentName:"p"},"Key_shared")," subscription mode, one partition could have several consumers to consume messages in parallelism and ensure messages with the same key are distributed to a consumer in order. Here is ",(0,i.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/concepts-messaging/#key_shared"},"architecture")," for Key_Shared."),(0,i.kt)("p",null,"The following is an example to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Key_shared")," subscription:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nclient.newConsumer()\n        .topic("topic")\n        .subscriptionType(SubscriptionType.Key_Shared)\n        .subscriptionName("sub-1")\n        .subscribe();\n\n')),(0,i.kt)("h3",{id:"schema-versioning"},"Schema versioning"),(0,i.kt)("p",null,"Before 2.4.0 release, Avro schema used one schema for both writer schema and reader schema. Multiple schemas version is supported now."),(0,i.kt)("p",null,"With multiple schemas, a producer can send messages with different schema versions and a consumer can read messages with different schemas."),(0,i.kt)("p",null,"In 2.4.0 release, ",(0,i.kt)("inlineCode",{parentName:"p"},"FORWARD_TRANSITIVE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKWARD_TRANSITIVE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FULL_TRANSITIVE")," compatibility strategies are added to check the compatibility with all existing schema version."),(0,i.kt)("h3",{id:"replicated-subscription"},"Replicated subscription"),(0,i.kt)("p",null,"In 2.4.0 release, a mechanism is added to keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions. Here is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-33%3A-Replicated-subscriptions"},"architecture")," for replicated subscription."),(0,i.kt)("p",null,"The following is an example to use replicated subscription:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,i.kt)("h3",{id:"new-io-connectors"},"New IO connectors"),(0,i.kt)("p",null,"A new batch of connectors is added, including Flume, Redis sink, Solr sink, RabbitMQ sink. The following lists builtin ",(0,i.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/io-connectors/"},"connectors")," that Pulsar supports."),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"In 2.4.0 release, Kerberos is supported in Apache Pulsar broker and client. To enable Kerberos authentication, refer to the ",(0,i.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/security-kerberos/"},"document"),"."),(0,i.kt)("p",null,"Also added role based Pulsar Function authentication and authorization."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"If you want to download Pulsar 2.4.0, click ",(0,i.kt)("a",{parentName:"p",href:"/download"},"here"),". You can send any questions or suggestions to our mailing lists, contribute to Pulsar on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"GitHub")," or join the Apache Pulsar community on ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Slack"),"."))}m.isMDXComponent=!0}}]);