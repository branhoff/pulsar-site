"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4231],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return d}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return o?a.createElement(h,c(c({ref:t},l),{},{components:o})):a.createElement(h,c({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<r;p++)c[p]=o[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},976:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),c=["components"],i={id:"concepts-topic-compaction",title:"Topic Compaction",sidebar_label:"Topic Compaction",original_id:"concepts-topic-compaction"},s=void 0,p={unversionedId:"concepts-topic-compaction",id:"version-2.9.1/concepts-topic-compaction",title:"Topic Compaction",description:'Pulsar was built with highly scalable persistent storage of message data as a primary objective. Pulsar topics enable you to persistently store as many unacknowledged messages as you need while preserving message ordering. By default, Pulsar stores all unacknowledged/unprocessed messages produced on a topic. Accumulating many unacknowledged messages on a topic is necessary for many Pulsar use cases but it can also be very time intensive for Pulsar consumers to "rewind" through the entire log of messages.',source:"@site/versioned_docs/version-2.9.1/concepts-topic-compaction.md",sourceDirName:".",slug:"/concepts-topic-compaction",permalink:"/docs/concepts-topic-compaction",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/concepts-topic-compaction.md",tags:[],version:"2.9.1",frontMatter:{id:"concepts-topic-compaction",title:"Topic Compaction",sidebar_label:"Topic Compaction",original_id:"concepts-topic-compaction"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Authentication and Authorization",permalink:"/docs/concepts-authentication"},next:{title:"Proxy support with SNI routing",permalink:"/docs/concepts-proxy-sni-routing"}},l={},m=[{value:"How topic compaction works",id:"how-topic-compaction-works",level:2}],u={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar was built with highly scalable ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data as a primary objective. Pulsar topics enable you to persistently store as many unacknowledged messages as you need while preserving message ordering. By default, Pulsar stores ",(0,r.kt)("em",{parentName:"p"},"all"),' unacknowledged/unprocessed messages produced on a topic. Accumulating many unacknowledged messages on a topic is necessary for many Pulsar use cases but it can also be very time intensive for Pulsar consumers to "rewind" through the entire log of messages.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a more practical guide to topic compaction, see the ",(0,r.kt)("a",{parentName:"p",href:"cookbooks-compaction"},"Topic compaction cookbook"),".")),(0,r.kt)("p",null,'For some use cases consumers don\'t need a complete "image" of the topic log. They may only need a few values to construct a more "shallow" image of the log, perhaps even just the most recent value. For these kinds of use cases Pulsar offers ',(0,r.kt)("strong",{parentName:"p"},"topic compaction"),". When you run compaction on a topic, Pulsar goes through a topic's backlog and removes messages that are ",(0,r.kt)("em",{parentName:"p"},"obscured")," by later messages, i.e. it goes through the topic on a per-key basis and leaves only the most recent message associated with that key."),(0,r.kt)("p",null,"Pulsar's topic compaction feature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Allows for faster "rewind" through topic logs'),(0,r.kt)("li",{parentName:"ul"},"Applies only to ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts-architecture-overview#persistent-storage"},"persistent topics")),(0,r.kt)("li",{parentName:"ul"},"Triggered automatically when the backlog reaches a certain size or can be triggered manually via the command line. See the ",(0,r.kt)("a",{parentName:"li",href:"cookbooks-compaction"},"Topic compaction cookbook")),(0,r.kt)("li",{parentName:"ul"},"Is conceptually and operationally distinct from ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts-messaging#message-retention-and-expiry"},"retention and expiry"),". Topic compaction ",(0,r.kt)("em",{parentName:"li"},"does"),", however, respect retention. If retention has removed a message from the message backlog of a topic, the message will also not be readable from the compacted topic ledger.")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"topic-compaction-example-the-stock-ticker"},"Topic compaction example: the stock ticker"),(0,r.kt)("p",{parentName:"blockquote"},"An example use case for a compacted Pulsar topic would be a stock ticker topic. On a stock ticker topic, each message bears a timestamped dollar value for stocks for purchase (with the message key holding the stock symbol, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"AAPL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOG"),"). With a stock ticker you may care only about the most recent value(s) of the stock and have no interest in historical data (i.e. you don't need to construct a complete image of the topic's sequence of messages per key). Compaction would be highly beneficial in this case because it would keep consumers from needing to rewind through obscured messages.")),(0,r.kt)("h2",{id:"how-topic-compaction-works"},"How topic compaction works"),(0,r.kt)("p",null,"When topic compaction is triggered ",(0,r.kt)("a",{parentName:"p",href:"cookbooks-compaction"},"via the CLI"),", Pulsar will iterate over the entire topic from beginning to end. For each key that it encounters the compaction routine will keep a record of the latest occurrence of that key."),(0,r.kt)("p",null,"After that, the broker will create a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts-architecture-overview#ledgers"},"BookKeeper ledger")," and make a second iteration through each message on the topic. For each message, if the key matches the latest occurrence of that key, then the key's data payload, message ID, and metadata will be written to the newly created ledger. If the key doesn't match the latest then the message will be skipped and left alone. If any given message has an empty payload, it will be skipped and considered deleted (akin to the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tombstone_(data_store)"},"tombstones")," in key-value databases). At the end of this second iteration through the topic, the newly created BookKeeper ledger is closed and two things are written to the topic's metadata: the ID of the BookKeeper ledger and the message ID of the last compacted message (this is known as the ",(0,r.kt)("strong",{parentName:"p"},"compaction horizon")," of the topic). Once this metadata is written compaction is complete."),(0,r.kt)("p",null,"After the initial compaction operation, the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference-terminology#broker"},"broker")," that owns the topic is notified whenever any future changes are made to the compaction horizon and compacted backlog. When such changes occur:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clients (consumers and readers) that have read compacted enabled will attempt to read messages from a topic and either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Read from the topic like normal (if the message ID is greater than or equal to the compaction horizon) or"),(0,r.kt)("li",{parentName:"ul"},"Read beginning at the compaction horizon (if the message ID is lower than the compaction horizon)")))))}d.isMDXComponent=!0}}]);