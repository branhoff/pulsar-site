"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=o,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},s=void 0,l={unversionedId:"adaptors-storm",id:"version-2.9.x/adaptors-storm",title:"Pulsar adaptor for Apache Storm",description:"Pulsar Storm is an adaptor for integrating with Apache Storm topologies. It provides core Storm implementations for sending and receiving data.",source:"@site/versioned_docs/version-2.9.x/adaptors-storm.md",sourceDirName:".",slug:"/adaptors-storm",permalink:"/docs/2.9.x/adaptors-storm",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/adaptors-storm.md",tags:[],version:"2.9.x",frontMatter:{id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Apache Spark",permalink:"/docs/2.9.x/adaptors-spark"},next:{title:"Tutorials",permalink:"/docs/2.9.x/how-to-landing"}},p={},i=[{value:"Using the Pulsar Storm Adaptor",id:"using-the-pulsar-storm-adaptor",level:2},{value:"Pulsar Spout",id:"pulsar-spout",level:2},{value:"Pulsar Bolt",id:"pulsar-bolt",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar Storm is an adaptor for integrating with ",(0,o.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm")," topologies. It provides core Storm implementations for sending and receiving data."),(0,o.kt)("p",null,"An application can inject data into a Storm topology via a generic Pulsar spout, as well as consume data from a Storm topology via a generic Pulsar bolt."),(0,o.kt)("h2",{id:"using-the-pulsar-storm-adaptor"},"Using the Pulsar Storm Adaptor"),(0,o.kt)("p",null,"Include dependency for Pulsar Storm Adaptor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-storm</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,o.kt)("h2",{id:"pulsar-spout"},"Pulsar Spout"),(0,o.kt)("p",null,"The Pulsar Spout allows for the data published on a topic to be consumed by a Storm topology. It emits a Storm tuple based on the message received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageToValuesMapper")," provided by the client."),(0,o.kt)("p",null,"The tuples that fail to be processed by the downstream bolts will be re-injected by the spout with an exponential backoff, within a configurable timeout (the default is 60 seconds) or a configurable number of retries, whichever comes first, after which it is acknowledged by the consumer. Here's an example construction of a spout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nMessageToValuesMapper messageToValuesMapper = new MessageToValuesMapper() {\n\n    @Override\n    public Values toValues(Message msg) {\n        return new Values(new String(msg.getData()));\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n        declarer.declare(new Fields("string"));\n    }\n};\n\n// Configure a Pulsar Spout\nPulsarSpoutConfiguration spoutConf = new PulsarSpoutConfiguration();\nspoutConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nspoutConf.setTopic("persistent://my-property/usw/my-ns/my-topic1");\nspoutConf.setSubscriptionName("my-subscriber-name1");\nspoutConf.setMessageToValuesMapper(messageToValuesMapper);\n\n// Create a Pulsar Spout\nPulsarSpout spout = new PulsarSpout(spoutConf);\n\n')),(0,o.kt)("p",null,"For a complete example, click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-adapters/blob/master/pulsar-storm/src/test/java/org/apache/pulsar/storm/PulsarSpoutTest.java"},"here"),"."),(0,o.kt)("h2",{id:"pulsar-bolt"},"Pulsar Bolt"),(0,o.kt)("p",null,"The Pulsar bolt allows data in a Storm topology to be published on a topic. It publishes messages based on the Storm tuple received and the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper")," provided by the client."),(0,o.kt)("p",null,"A partitioned topic can also be used to publish messages on different topics. In the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TupleToMessageMapper"),', a "key" will need to be provided in the message which will send the messages with the same key to the same topic. Here\'s an example bolt:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nTupleToMessageMapper tupleToMessageMapper = new TupleToMessageMapper() {\n\n    @Override\n    public TypedMessageBuilder<byte[]> toMessage(TypedMessageBuilder<byte[]> msgBuilder, Tuple tuple) {\n        String receivedMessage = tuple.getString(0);\n        // message processing\n        String processedMsg = receivedMessage + "-processed";\n        return msgBuilder.value(processedMsg.getBytes());\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n    }\n};\n\n// Configure a Pulsar Bolt\nPulsarBoltConfiguration boltConf = new PulsarBoltConfiguration();\nboltConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nboltConf.setTopic("persistent://my-property/usw/my-ns/my-topic2");\nboltConf.setTupleToMessageMapper(tupleToMessageMapper);\n\n// Create a Pulsar Bolt\nPulsarBolt bolt = new PulsarBolt(boltConf);\n\n')))}d.isMDXComponent=!0}}]);