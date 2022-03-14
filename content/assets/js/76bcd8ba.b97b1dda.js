"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9539],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"txn-what",title:"What are transactions?",sidebar_label:"What are transactions?",original_id:"txn-what"},l=void 0,c={unversionedId:"txn-what",id:"version-2.9.1/txn-what",title:"What are transactions?",description:"Transactions strengthen the message delivery semantics of Apache Pulsar and processing guarantees of Pulsar Functions. The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics.",source:"@site/versioned_docs/version-2.9.1/txn-what.md",sourceDirName:".",slug:"/txn-what",permalink:"/docs/txn-what",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/txn-what.md",tags:[],version:"2.9.1",frontMatter:{id:"txn-what",title:"What are transactions?",sidebar_label:"What are transactions?",original_id:"txn-what"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Why transactions?",permalink:"/docs/txn-why"},next:{title:"How transactions work?",permalink:"/docs/txn-how"}},p={},u=[{value:"Transaction semantics",id:"transaction-semantics",level:2},{value:"Transactions and stream processing",id:"transactions-and-stream-processing",level:2},{value:"Use case",id:"use-case",level:2}],m={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Transactions strengthen the message delivery semantics of Apache Pulsar and ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/functions-overview/#processing-guarantees"},"processing guarantees of Pulsar Functions"),". The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics. "),(0,s.kt)("p",null,"Transactions allow:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A producer to send a batch of messages to multiple topics where all messages in the batch are eventually visible to any consumer, or none are ever visible to consumers. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"End-to-end exactly-once semantics (execute a ",(0,s.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," operation exactly once)."))),(0,s.kt)("h2",{id:"transaction-semantics"},"Transaction semantics"),(0,s.kt)("p",null,"Pulsar transactions have the following semantics: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"All operations within a transaction are committed as a single unit."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Either all messages are committed, or none of them are. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Each message is written or processed exactly once, without data loss or duplicates (even in the event of failures). ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If a transaction is aborted, all the writes and acknowledgments in this transaction rollback.")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A group of messages in a transaction can be received from, produced to, and acknowledged by multiple partitions."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Consumers are only allowed to read committed (acked) messages. In other words, the broker does not deliver transactional messages which are part of an open transaction or messages which are part of an aborted transaction.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Message writes across multiple partitions are atomic.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Message acks across multiple subscriptions are atomic. A message is acked successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."))))),(0,s.kt)("h2",{id:"transactions-and-stream-processing"},"Transactions and stream processing"),(0,s.kt)("p",null,"Stream processing on Pulsar is a ",(0,s.kt)("inlineCode",{parentName:"p"},"consume-process-produce")," operation on Pulsar topics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Consume"),": a source operator that runs a Pulsar consumer reads messages from one or multiple Pulsar topics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Process"),": a processing operator transforms the messages. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Produce"),": a sink operator that runs a Pulsar producer writes the resulting messages to one or multiple Pulsar topics.")),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:n(32234).Z,width:"1678",height:"556"})),(0,s.kt)("p",null,"Pulsar transactions support end-to-end exactly-once stream processing, which means messages are not lost from a source operator and messages are not duplicated to a sink operator."),(0,s.kt)("h2",{id:"use-case"},"Use case"),(0,s.kt)("p",null,"Prior to Pulsar 2.8.0, there was no easy way to build stream processing applications with Pulsar to achieve exactly-once processing guarantees. With the transaction introduced in Pulsar 2.8.0, the following services support exactly-once semantics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://flink.apache.org/2021/01/07/pulsar-flink-connector-270.html"},"Pulsar Flink connector")),(0,s.kt)("p",{parentName:"li"},"Prior to Pulsar 2.8.0, if you want to build stream applications using Pulsar and Flink, the Pulsar Flink connector only supported exactly-once source connector and at-least-once sink connector, which means the highest processing guarantee for end-to-end was at-least-once, there was possibility that the resulting messages from streaming applications produce duplicated messages to the resulting topics in Pulsar."),(0,s.kt)("p",{parentName:"li"},"With the transaction introduced in Pulsar 2.8.0, the Pulsar Flink sink connector can support exactly-once semantics by implementing the designated ",(0,s.kt)("inlineCode",{parentName:"p"},"TwoPhaseCommitSinkFunction")," and hooking up the Flink sink message lifecycle with Pulsar transaction API. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Support for Pulsar Functions and other connectors will be added in the future releases."))))}d.isMDXComponent=!0},32234:function(e,t,n){t.Z=n.p+"assets/images/txn-2-9ebd4a2461e88dd74ab6e4440228fc4b.png"}}]);