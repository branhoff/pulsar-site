"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6666],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50715:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={author:"Guangning E",authorURL:"https://twitter.com/tuteng3",title:"Apache Pulsar 2.5.1"},l=void 0,p={permalink:"/zh-CN/blog/2020/04/23/Apache-Pulsar-2-5-1",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2020-04-23-Apache-Pulsar-2-5-1.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2020-04-23-Apache-Pulsar-2-5-1.md",title:"Apache Pulsar 2.5.1",description:"We are proud to publish Apache Pulsar 2.5.1. This is the result of a huge effort from the community, with over 130 commits and a long list of new features, general improvements and bug fixes.",date:"2020-04-23T00:00:00.000Z",formattedDate:"2020\u5e744\u670823\u65e5",tags:[],readingTime:6.55,truncated:!0,authors:[{name:"Guangning E",url:"https://twitter.com/tuteng3"}],frontMatter:{author:"Guangning E",authorURL:"https://twitter.com/tuteng3",title:"Apache Pulsar 2.5.1"},prevItem:{title:"Apache Pulsar 2.5.2",permalink:"/zh-CN/blog/2020/05/19/Apache-Pulsar-2-5-2"},nextItem:{title:"Announcing: The Apache Pulsar 2020 User Survey Report",permalink:"/zh-CN/blog/2020/03/17/announcing-the-apache-pulsar-2020-user-survey-report"}},u={authorsImageUrls:[void 0]},c=[{value:"Refresh authentication credentials",id:"refresh-authentication-credentials",level:2},{value:"Upgrade Avro to 1.9.1",id:"upgrade-avro-to-191",level:2},{value:"Support unloading all partitions of a partitioned topic",id:"support-unloading-all-partitions-of-a-partitioned-topic",level:2},{value:"Supports evenly distributing topics count when splitting bundle",id:"supports-evenly-distributing-topics-count-when-splitting-bundle",level:2},{value:"Support KeyValue schema for Pulsar SQL",id:"support-keyvalue-schema-for-pulsar-sql",level:2},{value:"Update Netty version to <code>4.1.45.Final</code>",id:"update-netty-version-to-4145final",level:2},{value:"Improve Key_Shared subscription message dispatching performance",id:"improve-key_shared-subscription-message-dispatching-performance",level:2},{value:"Add Joda time logical type conversion",id:"add-joda-time-logical-type-conversion",level:2},{value:"Support deleting inactive topic when subscriptions caught up",id:"support-deleting-inactive-topic-when-subscriptions-caught-up",level:2},{value:"Introduce maxMessagePublishBufferSizeInMB configuration to avoid broker OOM",id:"introduce-maxmessagepublishbuffersizeinmb-configuration-to-avoid-broker-oom",level:2},{value:"Support BouncyCastle FIPS provider",id:"support-bouncycastle-fips-provider",level:2},{value:"Allow tenant Admin to manage subscription permission",id:"allow-tenant-admin-to-manage-subscription-permission",level:2},{value:"Allow to enable/disable delayed delivery for messages on namespace",id:"allow-to-enabledisable-delayed-delivery-for-messages-on-namespace",level:2},{value:"Support offloader at namespace level",id:"support-offloader-at-namespace-level",level:2},{value:"Disallow sub auto creation by Admin when disabling topic auto creation",id:"disallow-sub-auto-creation-by-admin-when-disabling-topic-auto-creation",level:2},{value:"Support Python 3.8 for Pulsar client",id:"support-python-38-for-pulsar-client",level:2},{value:"Provide another <code>libpulsarwithdeps.a</code> in Debian/RPM cpp client library",id:"provide-another-libpulsarwithdepsa-in-debianrpm-cpp-client-library",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are proud to publish Apache Pulsar 2.5.1. This is the result of a huge effort from the community, with over 130 commits and a long list of new features, general improvements and bug fixes."),(0,i.kt)("p",null,"For detailed changes related to 2.5.1 release, refer to the ",(0,i.kt)("b",null,(0,i.kt)("a",{parentName:"p",href:"/release-notes/#2.5.1"},"release notes"))," and the ",(0,i.kt)("b",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pulls?q=is:pr%20label:release/2.5.1%20is:closed"},"PR list for Pulsar 2.5.1")),"."),(0,i.kt)("p",null,"The following justs highlights a tiny subset of new features."),(0,i.kt)("h2",{id:"refresh-authentication-credentials"},"Refresh authentication credentials"),(0,i.kt)("p",null,"In Pulsar 2.5.1, two more methods are introduced in the single ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationState")," interface credentials holder. This helps enhance the Pulsar authentication framework to support credentials that expire over time and need to be refreshed by forcing clients to re-authenticate."),(0,i.kt)("p",null,"Existing authentication plugins are unaffected. If a new plugin wants to support expiration, it just overrides the ",(0,i.kt)("inlineCode",{parentName:"p"},"isExpired()")," method. The Pulsar broker ensures to periodically check the expiration status for the AuthenticationState of every ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerCnx")," object. You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," setting to control the frequency of the expiration check."),(0,i.kt)("h2",{id:"upgrade-avro-to-191"},"Upgrade Avro to 1.9.1"),(0,i.kt)("p",null,"The library used to handle logical datetime values has been changed from Joda-Time to JSR-310. For keeping forward compatibility, Pulsar java client uses Joda-Time conversion for logical datetime. To use JSR-310 conversion, you can enable it in the schema definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nAvroSchema.of(SchemaDefinition.builder()\n.withJSR310ConversionEnabled(true)\n.build()\n\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, Avro 1.9.1 enables the JSR310 datetimes, which might introduce some regression problems if users use source codes generated by Avro compiler 1.8.x and the source codes contain datetimes fields. It is recommended to use Avro 1.9.x compiler to recompile."))),(0,i.kt)("p",null,"And, Avro may remove the Joda time support in the future. This may also be deleted in Pulsar in the future."),(0,i.kt)("h2",{id:"support-unloading-all-partitions-of-a-partitioned-topic"},"Support unloading all partitions of a partitioned topic"),(0,i.kt)("p",null,"Before Pulsar 2.5.1, Pulsar supports unloading a non-partitioned topic or a partition of a partitioned topic. If there is a partitioned topic with too many partitions, users need to get all partitions and unload them one by one. In Pulsar 2.5.1, we support unloading all partitions of a partitioned topic."),(0,i.kt)("h2",{id:"supports-evenly-distributing-topics-count-when-splitting-bundle"},"Supports evenly distributing topics count when splitting bundle"),(0,i.kt)("p",null,"In Pulsar 2.5.1, we introduce an option(",(0,i.kt)("inlineCode",{parentName:"p"},"-balance-topic-count"),") for bundle split. When setting this option to true, the given bundle is split into two parts and each part has the same amount of topics. In addition, we bring in a new Load Manager implementation named ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.loadbalance.impl.BalanceTopicCountModularLoadManager"),". The new Load Manager implementation splits the bundle with balance topics count. You can enable this feature in the broker.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ndefaultNamespaceBundleSplitAlgorithm=topic_count_equally_divide\n\n")),(0,i.kt)("p",null,"If you use the Pulsar Admin to split a bundle, you can use following command to split bundle based on topics count:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin namespaces split-bundle -b 0x00000000_0xffffffff --split-algorithm-name topic_count_equally_divide public/default\n\n")),(0,i.kt)("h2",{id:"support-keyvalue-schema-for-pulsar-sql"},"Support KeyValue schema for Pulsar SQL"),(0,i.kt)("p",null,"Before Pulsar 2.5.1, Pulsar SQL cannot read the keyValue schema data. In Pulsar 2.5.1, we add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"key.")," for the key field name, add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"value.")," for the value field name. Therefore, Pulsar SQL can read the keyValue schema data."),(0,i.kt)("h2",{id:"update-netty-version-to-4145final"},"Update Netty version to ",(0,i.kt)("inlineCode",{parentName:"h2"},"4.1.45.Final")),(0,i.kt)("p",null,"Netty 4.1.43 has a bug, which prevents it from using Linux native Epoll transport. This makes Pulsar brokers fail over to NioEventLoopGroup even when running on Linux. The bug is fixed in Netty  ",(0,i.kt)("inlineCode",{parentName:"p"},"4.1.45.Final")," ."),(0,i.kt)("h2",{id:"improve-key_shared-subscription-message-dispatching-performance"},"Improve Key_Shared subscription message dispatching performance"),(0,i.kt)("p",null,"In Pulsar 2.5.1, to improve Key_Shared subscription message dispatching performance, we make the following operations for saving CPU usage which can improve non-batched message dispatch performance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reduce making hash for the message key."),(0,i.kt)("li",{parentName:"ul"},"Reduce the number of finding consumers for message keys..")),(0,i.kt)("h2",{id:"add-joda-time-logical-type-conversion"},"Add Joda time logical type conversion"),(0,i.kt)("p",null,"In Pulsar 2.5.1, Avro is upgraded to 1.9.x and the default time conversion is changed to JSR-310. For forwarding compatibility, we add the Joda time conversion in Pulsar 2.5.1 and enable it by default"),(0,i.kt)("h2",{id:"support-deleting-inactive-topic-when-subscriptions-caught-up"},"Support deleting inactive topic when subscriptions caught up"),(0,i.kt)("p",null,"Before Pulsar 2.5.1, Pulsar supported deleting inactive topics that have no active producers or subscriptions. In Pulsar 2.5.1, we expose inactive topic delete mode in ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")," to delete inactive topics that have no active producers or consumers but all subscriptions of the topic are caught up. You can enable this feature in the broker.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nbrokerDeleteInactiveTopicsMode=delete_when_subscriptions_caught_up\n\n")),(0,i.kt)("h2",{id:"introduce-maxmessagepublishbuffersizeinmb-configuration-to-avoid-broker-oom"},"Introduce maxMessagePublishBufferSizeInMB configuration to avoid broker OOM"),(0,i.kt)("p",null,"Before Pulsar 2.5.1, if a broker has a smaller direct memory (e.g. 2G) and runs pulsar-perf to write messages, the broker becomes unstable. Because the broker reads messages from the channel automatically and the ByteBuf cannot be released until the entry is written to Bookie successfully or the timeout expires. In Pulsar 2.5.1, we introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxMessagePublishBufferSizeInMB")," configuration to avoid broker OOM (Out of Memory). If the processing message size exceeds this value, the broker stops reading data from the connection. When the available size is greater than half of the maxMessagePublishBufferSizeInMB,  the broker starts automatically reading data from the connection. You can set up the publish buffer size in broker.conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n# Max memory size for broker handling messages sending from producers.\n# If the processing message size exceed this value, broker will stop read data\n# from the connection. The processing messages means messages are sends to broker\n# but broker have not send response to client, usually waiting to write to bookies.\n# It's shared across all the topics running in the same broker.\n# Use -1 to disable the memory limitation. Default is 1/2 of direct memory.\nmaxMessagePublishBufferSizeInMB=\n\n")),(0,i.kt)("h2",{id:"support-bouncycastle-fips-provider"},"Support BouncyCastle FIPS provider"),(0,i.kt)("p",null,"In Pulsar 2.5.1, Pulsar supports BC-FIPS (BouncyCastle FIPS) provider. Before Pulsar 2.5.1, Pulsar only supported BouncyCastle (BC) provider, and BC JARs are tied strongly into both the broker and the client code. Users fail to change from the BC provider to the BC-FIPS provider. This feature splits the BC dependency out into a separate module. Therefore, users can freely switch between the BC provider and the BC-FIPS provider."),(0,i.kt)("h2",{id:"allow-tenant-admin-to-manage-subscription-permission"},"Allow tenant Admin to manage subscription permission"),(0,i.kt)("p",null,"In previous releases, we have added support to grant subscriber-permission to manage subscription based APIs. However, grant-subscription-permission API requires super-user access and it creates too much dependency on system-admin when many tenants want to grant subscription permission. In Pulsar 2.5.1, through the Restful API or the Pulsar Admin, we allow each tenant Admin to manage subscription permission in order to reduce administrative efforts for super users."),(0,i.kt)("h2",{id:"allow-to-enabledisable-delayed-delivery-for-messages-on-namespace"},"Allow to enable/disable delayed delivery for messages on namespace"),(0,i.kt)("p",null,"In Pulsar 2.5.1, we add the ",(0,i.kt)("inlineCode",{parentName:"p"},"set-delayed-delivery")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"set-delayed-delivery-time"),"  policies for the namespace. Therefore, Pulsar 2.5.1 allows to enable or disable delayed delayed delivery for messages on namespace."),(0,i.kt)("h2",{id:"support-offloader-at-namespace-level"},"Support offloader at namespace level"),(0,i.kt)("p",null,"In previous releases, the offload operation only had the cluster-level configuration. Users cannot set the offload configuration at the namespace level. In Pulsar 2.5.1, we support using the Pulsar Admin to set the offloader at the namespace level."),(0,i.kt)("h2",{id:"disallow-sub-auto-creation-by-admin-when-disabling-topic-auto-creation"},"Disallow sub auto creation by Admin when disabling topic auto creation"),(0,i.kt)("p",null,"In previous releases, when Auto topic creation is disabled in KoP, non-partitioned topics are created with Flink Pulsar Source. To fix this bug, in Pulsar 2.5.1, we change the admin code to disable sub auto creation by the Admin when Auto topic creation is disabled."),(0,i.kt)("h2",{id:"support-python-38-for-pulsar-client"},"Support Python 3.8 for Pulsar client"),(0,i.kt)("p",null,"In pulsar 2.5.1, we add ",(0,i.kt)("inlineCode",{parentName:"p"},"3.8 cp38-cp38")," to support Python 3.8 for the Pulsar client. Therefore, users can install the Pulsar client on Python 3.8 ."),(0,i.kt)("h2",{id:"provide-another-libpulsarwithdepsa-in-debianrpm-cpp-client-library"},"Provide another ",(0,i.kt)("inlineCode",{parentName:"h2"},"libpulsarwithdeps.a")," in Debian/RPM cpp client library"),(0,i.kt)("p",null,"Pulsar 2.5.1 mainly provides 2 additional pulsar c++ client libraries in Debian/RPM:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pulsarSharedNossl (libpulsarnossl.so): it is similar to pulsarShared(libpulsar.so), and has no SSL statically linked."),(0,i.kt)("li",{parentName:"ul"},"pulsarStaticWithDeps(libpulsarwithdeps.a): it is similar to pulsarStatic(libpulsar.a), and is archived in the dependencies libraries of ",(0,i.kt)("inlineCode",{parentName:"li"},"libboost_regex"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"libboost_system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"libcurl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"libprotobuf"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"libzstd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"libz")," statically.")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"To download Apache Pulsar 2.5.1, click ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/download/"},"here"),". If you have any questions or suggestions, contact us with mailing lists or slack."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,i.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,i.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,i.kt)("li",{parentName:"ul"},"Self-registration at ",(0,i.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/")," Looking forward to your contributions to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar"},"Pulsar"),".")))}h.isMDXComponent=!0}}]);