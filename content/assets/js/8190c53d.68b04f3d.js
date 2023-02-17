"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={id:"develop-plugin",title:"Pulsar plugin development",sidebar_label:"Plugin",original_id:"develop-plugin"},l=void 0,o={unversionedId:"develop-plugin",id:"version-2.10.x/develop-plugin",title:"Pulsar plugin development",description:"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on.",source:"@site/versioned_docs/version-2.10.x/develop-plugin.md",sourceDirName:".",slug:"/develop-plugin",permalink:"/docs/2.10.x/develop-plugin",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/develop-plugin.md",tags:[],version:"2.10.x",frontMatter:{id:"develop-plugin",title:"Pulsar plugin development",sidebar_label:"Plugin",original_id:"develop-plugin"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Modular load manager",permalink:"/docs/2.10.x/develop-load-manager"},next:{title:"Reference",permalink:"/docs/2.10.x/reference-landing"}},p={},s=[{value:"Additional Servlets",id:"additional-servlets",level:2},{value:"What is an additional servlet?",id:"what-is-an-additional-servlet",level:3},{value:"How to use an additional servlet?",id:"how-to-use-an-additional-servlet",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project",level:4},{value:"Step 2: Implement the <code>AdditionalServlet</code> interface",id:"step-2-implement-the-additionalservlet-interface",level:4},{value:"Step 3: package your project into a NAR file",id:"step-3-package-your-project-into-a-nar-file",level:4},{value:"Step 4: configure and restart broker",id:"step-4-configure-and-restart-broker",level:4},{value:"Entry filter",id:"entry-filter",level:2},{value:"What is an entry filter?",id:"what-is-an-entry-filter",level:3},{value:"How to use an entry filter?",id:"how-to-use-an-entry-filter",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project-1",level:4},{value:"Step 2: Implement the <code>EntryFilter</code> interface",id:"step-2-implement-the-entryfilter-interface",level:4},{value:"Step 3: package implementation class of entry filter into a NAR file",id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file",level:4},{value:"Step 4: configure and restart broker",id:"step-4-configure-and-restart-broker-1",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on."),(0,r.kt)("h2",{id:"additional-servlets"},"Additional Servlets"),(0,r.kt)("p",null,"This chapter describes what additional servlets are and how to use them."),(0,r.kt)("h3",{id:"what-is-an-additional-servlet"},"What is an additional servlet?"),(0,r.kt)("p",null,"Pulsar offers a multitude of REST APIs to interact with it. To expose additional custom logic as a REST API, Pulsar offers the concept of additional servlets. These servlets run as plugins in either the broker or the pulsar proxy."),(0,r.kt)("h3",{id:"how-to-use-an-additional-servlet"},"How to use an additional servlet?"),(0,r.kt)("p",null,"Take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/tests/docker-images/java-test-plugins/src/main/java/org/apache/pulsar/tests/integration/plugins/RandomAdditionalServlet.java"},"this example implementation"),", or follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Maven project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalServlet")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalServletWithPulsarService")," interface. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalServletWithPulsarService"),", if you need access to Pulsar internals for performing administrative tasks or producing messages.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Package your project into a NAR file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file) and restart your broker."))),(0,r.kt)("h4",{id:"step-1-create-a-maven-project"},"Step 1: Create a Maven project"),(0,r.kt)("p",null,"For how to create a Maven project, see ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"},"here"),"."),(0,r.kt)("h4",{id:"step-2-implement-the-additionalservlet-interface"},"Step 2: Implement the ",(0,r.kt)("inlineCode",{parentName:"h4"},"AdditionalServlet")," interface"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a dependency for ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-broker")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file as displayed. Otherwise, you can not find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/web/plugin/servlet/AdditionalServlet.java"},(0,r.kt)("inlineCode",{parentName:"a"},"AdditionalServlet"))," interface."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>org.apache.pulsar</groupId>\n   <artifactId>pulsar-broker</artifactId>\n   <version>${pulsar.version}</version>\n   <scope>provided</scope>\n</dependency>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalServlet")," interface."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"loadConfig")," allows you to configure your servlet by loading configuration properties from the ",(0,r.kt)("inlineCode",{parentName:"p"},"PulsarConfiguration"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getBasePath")," defines the path your servlet will be loaded under.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getServletHolder")," returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServletHolder")," for this servlet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"close")," allows you to free up resources.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Describe a NAR file."),(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"additional_servlet.yml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services")," directory to describe a NAR file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"name: my-servlet\ndescription: Describes my-servlet\nadditionalServletClass: org.my.package.MyServlet\n")))),(0,r.kt)("h4",{id:"step-3-package-your-project-into-a-nar-file"},"Step 3: package your project into a NAR file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the compiled plugin of the NAR file to your ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<build>\n   <finalName>${project.artifactId}</finalName>\n   <plugins>\n      <plugin>\n         <groupId>org.apache.nifi</groupId>\n         <artifactId>nifi-nar-maven-plugin</artifactId>\n         <version>1.2.0</version>\n         <extensions>true</extensions>\n         <configuration>\n            <finalName>${project.artifactId}-${project.version}</finalName>\n         </configuration>\n         <executions>\n            <execution>\n               <id>default-nar</id>\n               <phase>package</phase>\n               <goals>\n                  <goal>nar</goal>\n               </goals>\n            </execution>\n         </executions>\n      </plugin>\n   </plugins>\n</build>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a NAR file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-script"},"mvn clean install\n")))),(0,r.kt)("h4",{id:"step-4-configure-and-restart-broker"},"Step 4: configure and restart broker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the following parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"# Name of pluggable additional servlets\n# Multiple servlets need to be separated by commas.\nadditionalServlets=my-servlet\n# The directory for all additional servlet implementations\nadditionalServletDirectory=tempDir\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your broker."),(0,r.kt)("p",{parentName:"li"},"You can see the following broker log if the plug-in is successfully loaded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Successfully loaded additional servlet for name `my-servlet`\n")))),(0,r.kt)("h2",{id:"entry-filter"},"Entry filter"),(0,r.kt)("p",null,"This chapter describes what the entry filter is and shows how to use the entry filter."),(0,r.kt)("h3",{id:"what-is-an-entry-filter"},"What is an entry filter?"),(0,r.kt)("p",null,"The entry filter is an extension point for implementing a custom message entry strategy. With an entry filter, you can decide ",(0,r.kt)("strong",{parentName:"p"},"whether to send messages to consumers")," (brokers can use the return values of entry filters to determine whether the messages need to be sent or discarded) or ",(0,r.kt)("strong",{parentName:"p"},"send messages to specific consumers.")," "),(0,r.kt)("p",null,"To implement features such as tagged messages or custom delayed messages, use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L174"},(0,r.kt)("inlineCode",{parentName:"a"},"subscriptionProperties")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L533"},(0,r.kt)("inlineCode",{parentName:"a"},"\u200b\u200bproperties")),", and entry filters."),(0,r.kt)("h3",{id:"how-to-use-an-entry-filter"},"How to use an entry filter?"),(0,r.kt)("p",null,"Follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Maven project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntryFilter")," interface.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Package the implementation class into a NAR file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file) and restart your broker."))),(0,r.kt)("h4",{id:"step-1-create-a-maven-project-1"},"Step 1: Create a Maven project"),(0,r.kt)("p",null,"For how to create a Maven project, see ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"},"here"),"."),(0,r.kt)("h4",{id:"step-2-implement-the-entryfilter-interface"},"Step 2: Implement the ",(0,r.kt)("inlineCode",{parentName:"h4"},"EntryFilter")," interface"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a dependency for Pulsar broker in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file to display. Otherwise, you can not find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java"},(0,r.kt)("inlineCode",{parentName:"a"},"EntryFilter")," interface"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n<groupId>org.apache.pulsar</groupId>\n<artifactId>pulsar-broker</artifactId>\n<version>${pulsar.version}</version>\n<scope>provided</scope>\n</dependency>\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/2adb6661d5b82c5705ee00ce3ebc9941c99635d5/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java#L34"},(0,r.kt)("inlineCode",{parentName:"a"},"FilterResult filterEntry(Entry entry, FilterContext context);")," method"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCEPT")," or NULL, this message is sent to consumers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"REJECT"),", this message is filtered out and it does not consume message permits. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are multiple entry filters, this message passes through all filters in the pipeline in a round-robin manner. If any entry filter returns ",(0,r.kt)("inlineCode",{parentName:"p"},"REJECT"),", this message is discarded."))),(0,r.kt)("p",{parentName:"li"},"You can get entry metadata, subscriptions, and other information through ",(0,r.kt)("inlineCode",{parentName:"p"},"FilterContext"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Describe a NAR file."),(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"entry_filter.yml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services")," directory to describe a NAR file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# Entry filter name, which should be configured in the broker.conf file later\nname: entryFilter\n# Entry filter description\ndescription: entry filter\n# Implementation class name of entry filter \nentryFilterClass: com.xxxx.xxxx.xxxx.DefaultEntryFilterImpl\n\n")))),(0,r.kt)("h4",{id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file"},"Step 3: package implementation class of entry filter into a NAR file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the compiled plugin of the NAR file to your ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n<build>\n        <finalName>${project.artifactId}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.nifi</groupId>\n                <artifactId>nifi-nar-maven-plugin</artifactId>\n                <version>1.2.0</version>\n                <extensions>true</extensions>\n                <configuration>\n                    <finalName>${project.artifactId}-${project.version}</finalName>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>default-nar</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>nar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a NAR file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-script"},"\nmvn clean install\n\n")))),(0,r.kt)("h4",{id:"step-4-configure-and-restart-broker-1"},"Step 4: configure and restart broker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the following parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# Class name of pluggable entry filters\n# Multiple classes need to be separated by commas.\nentryFilterNames=entryFilter1,entryFilter2,entryFilter3\n# The directory for all entry filter implementations\nentryFiltersDirectory=tempDir\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your broker. "),(0,r.kt)("p",{parentName:"li"},"You can see the following broker log if the plug-in is successfully loaded."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\nSuccessfully loaded entry filter for name `{name of your entry filter}`\n\n")))))}c.isMDXComponent=!0}}]);