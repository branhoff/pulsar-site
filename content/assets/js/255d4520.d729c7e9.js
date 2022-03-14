"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8802],{3905:function(n,t,e){e.d(t,{Zo:function(){return p},kt:function(){return d}});var a=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var s=a.createContext({}),u=function(n){var t=a.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},p=function(n){var t=u(n.components);return a.createElement(s.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,l=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),m=u(e),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return e?a.createElement(g,o(o({ref:t},p),{},{components:e})):a.createElement(g,o({ref:t},p))}));function d(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var l=e.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=n,r.mdxType="string"==typeof n?n:i,o[1]=r;for(var u=2;u<l;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},55911:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=e(87462),i=e(63366),l=(e(67294),e(3905)),o=["components"],r={id:"functions-debug",title:"Debug Pulsar Functions",sidebar_label:"How-to: Debug",original_id:"functions-debug"},s=void 0,u={unversionedId:"functions-debug",id:"version-2.9.1/functions-debug",title:"Debug Pulsar Functions",description:"You can use the following methods to debug Pulsar Functions:",source:"@site/versioned_docs/version-2.9.1/functions-debug.md",sourceDirName:".",slug:"/functions-debug",permalink:"/docs/functions-debug",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/functions-debug.md",tags:[],version:"2.9.1",frontMatter:{id:"functions-debug",title:"Debug Pulsar Functions",sidebar_label:"How-to: Debug",original_id:"functions-debug"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"How-to: Package",permalink:"/docs/functions-package"},next:{title:"How-to: Deploy",permalink:"/docs/functions-deploy"}},p={},c=[{value:"Captured stderr",id:"captured-stderr",level:2},{value:"Use unit test",id:"use-unit-test",level:2},{value:"Debug with localrun mode",id:"debug-with-localrun-mode",level:2},{value:"Use log topic",id:"use-log-topic",level:2},{value:"Use Functions CLI",id:"use-functions-cli",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>list</code>",id:"list",level:3},{value:"<code>trigger</code>",id:"trigger",level:3}],m={toc:c};function d(n){var t=n.components,r=(0,i.Z)(n,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use the following methods to debug Pulsar Functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions-debug#captured-stderr"},"Captured stderr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions-debug#use-unit-test"},"Use unit test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions-debug#debug-with-localrun-mode"},"Debug with localrun mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions-debug#use-log-topic"},"Use log topic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/functions-debug#use-functions-cli"},"Use Functions CLI"))),(0,l.kt)("h2",{id:"captured-stderr"},"Captured stderr"),(0,l.kt)("p",null,"Function startup information and captured stderr output is written to ",(0,l.kt)("inlineCode",{parentName:"p"},"logs/functions/<tenant>/<namespace>/<function>/<function>-<instance>.log")),(0,l.kt)("p",null,"This is useful for debugging why a function fails to start."),(0,l.kt)("h2",{id:"use-unit-test"},"Use unit test"),(0,l.kt)("p",null,"A Pulsar Function is a function with inputs and outputs, you can test a Pulsar Function in a similar way as you test any function."),(0,l.kt)("p",null,"For example, if you have the following Pulsar Function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n   @Override\n   public String apply(String input) {\n       return String.format("%s!", input);\n   }\n}\n\n')),(0,l.kt)("p",null,"You can write a simple unit test to test Pulsar Function."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Pulsar uses testng for testing."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n@Test\npublic void testJavaNativeExclamationFunction() {\n   JavaNativeExclamationFunction exclamation = new JavaNativeExclamationFunction();\n   String output = exclamation.apply("foo");\n   Assert.assertEquals(output, "foo!");\n}\n\n')),(0,l.kt)("p",null,"The following Pulsar Function implements the ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.api.Function")," interface."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n   @Override\n   public String process(String input, Context context) {\n       return String.format("%s!", input);\n   }\n}\n\n')),(0,l.kt)("p",null,"In this situation, you can write a unit test for this function as well. Remember to mock the ",(0,l.kt)("inlineCode",{parentName:"p"},"Context")," parameter. The following is an example."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Pulsar uses testng for testing."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n@Test\npublic void testExclamationFunction() {\n   ExclamationFunction exclamation = new ExclamationFunction();\n   String output = exclamation.process("foo", mock(Context.class));\n   Assert.assertEquals(output, "foo!");\n}\n\n')),(0,l.kt)("h2",{id:"debug-with-localrun-mode"},"Debug with localrun mode"),(0,l.kt)("p",null,"When you run a Pulsar Function in localrun mode, it launches an instance of the Function on your local machine as a thread."),(0,l.kt)("p",null,"In this mode, a Pulsar Function consumes and produces actual data to a Pulsar cluster, and mirrors how the function actually runs in a Pulsar cluster."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently, debugging with localrun mode is only supported by Pulsar Functions written in Java. You need Pulsar version 2.4.0 or later to do the following. Even though localrun is available in versions earlier than Pulsar 2.4.0, you cannot debug with localrun mode programmatically or run Functions as threads."))),(0,l.kt)("p",null,"You can launch your function in the following manner."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setName(functionName);\nfunctionConfig.setInputs(Collections.singleton(sourceTopic));\nfunctionConfig.setClassName(ExclamationFunction.class.getName());\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setOutput(sinkTopic);\n\nLocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\nlocalRunner.start(true);\n\n")),(0,l.kt)("p",null,"So you can debug functions using an IDE easily. Set breakpoints and manually step through a function to debug with real data."),(0,l.kt)("p",null,"The following example illustrates how to programmatically launch a function in localrun mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class ExclamationFunction implements Function<String, String> {\n\n   @Override\n   public String process(String s, Context context) throws Exception {\n       return s + "!";\n   }\n\npublic static void main(String[] args) throws Exception {\n    FunctionConfig functionConfig = new FunctionConfig();\n    functionConfig.setName("exclamation");\n    functionConfig.setInputs(Collections.singleton("input"));\n    functionConfig.setClassName(ExclamationFunction.class.getName());\n    functionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\n    functionConfig.setOutput("output");\n\n    LocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\n    localRunner.start(false);\n}\n\n')),(0,l.kt)("p",null,"To use localrun mode programmatically, add the following dependency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n   <groupId>org.apache.pulsar</groupId>\n   <artifactId>pulsar-functions-local-runner</artifactId>\n   <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,l.kt)("p",null,"For complete code samples, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jerrypeng/pulsar-functions-demos/tree/master/debugging"},"here"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Debugging with localrun mode for Pulsar Functions written in other languages will be supported soon."))),(0,l.kt)("h2",{id:"use-log-topic"},"Use log topic"),(0,l.kt)("p",null,"In Pulsar Functions, you can generate log information defined in functions to a specified log topic. You can configure consumers to consume messages from a specified log topic to check the log information."),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"Pulsar Functions core programming model",src:e(68724).Z,width:"1712",height:"1049"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n\n')),(0,l.kt)("p",null,"As shown in the example above, you can get the logger via ",(0,l.kt)("inlineCode",{parentName:"p"},"context.getLogger()")," and assign the logger to the ",(0,l.kt)("inlineCode",{parentName:"p"},"LOG")," variable of ",(0,l.kt)("inlineCode",{parentName:"p"},"slf4j"),", so you can define your desired log information in a function using the ",(0,l.kt)("inlineCode",{parentName:"p"},"LOG")," variable. Meanwhile, you need to specify the topic to which the log information is produced."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n\n")),(0,l.kt)("p",null,"The message published to log topic contains several properties for better reasoning: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"loglevel")," -- the level of the log message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fqn")," -- fully qualified function name pushes this log message."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"instance")," -- the ID of the function instance pushes this log message.")),(0,l.kt)("h2",{id:"use-functions-cli"},"Use Functions CLI"),(0,l.kt)("p",null,"With ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-admin#functions"},"Pulsar Functions CLI"),", you can debug Pulsar Functions with the following subcommands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trigger"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For complete commands of ",(0,l.kt)("strong",{parentName:"p"},"Pulsar Functions CLI"),", see ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-admin#functions"},"here"),"\u3002"))),(0,l.kt)("h3",{id:"get"},(0,l.kt)("inlineCode",{parentName:"h3"},"get")),(0,l.kt)("p",null,"Get information about a Pulsar Function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions get options\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,l.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,l.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"--fqfn")," consists of ",(0,l.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--tenant"),", so you can specify either ",(0,l.kt)("inlineCode",{parentName:"p"},"--fqfn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--tenant"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("p",null,"You can specify ",(0,l.kt)("inlineCode",{parentName:"p"},"--fqfn")," to get information about a Pulsar Function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions get public/default/ExclamationFunctio6\n\n")),(0,l.kt)("p",null,"Optionally, you can specify ",(0,l.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--namespace")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--tenant")," to get information about a Pulsar Function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n\n")),(0,l.kt)("p",null,"As shown below, the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," command shows input, output, runtime, and other information about the ",(0,l.kt)("em",{parentName:"p"},"ExclamationFunctio6")," function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "ExclamationFunctio6",\n  "className": "org.example.test.ExclamationFunction",\n  "inputSpecs": {\n    "persistent://public/default/my-topic-1": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "persistent://public/default/test-1",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1\n}\n\n')),(0,l.kt)("h3",{id:"status"},(0,l.kt)("inlineCode",{parentName:"h3"},"status")),(0,l.kt)("p",null,"Check the current status of a Pulsar Function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions status options\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,l.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--instance-id")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance ID of a Pulsar Function ",(0,l.kt)("br",null),"If the ",(0,l.kt)("inlineCode",{parentName:"td"},"--instance-id")," is not specified, it gets the IDs of all instances.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,l.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n")),(0,l.kt)("p",null,"As shown below, the ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," command shows the number of instances, running instances, the instance running under the ",(0,l.kt)("em",{parentName:"p"},"ExclamationFunctio6")," function, received messages, successfully processed messages, system exceptions, the average latency and so on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 1,\n      "numSuccessfullyProcessed" : 1,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.8385,\n      "lastInvocationTime" : 1557734137987,\n      "workerId" : "c-standalone-fw-23ccc88ef29b-8080"\n    }\n  } ]\n}\n\n')),(0,l.kt)("h3",{id:"stats"},(0,l.kt)("inlineCode",{parentName:"h3"},"stats")),(0,l.kt)("p",null,"Get the current stats of a Pulsar Function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions stats options\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,l.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--instance-id")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance ID of a Pulsar Function. ",(0,l.kt)("br",null),"If the ",(0,l.kt)("inlineCode",{parentName:"td"},"--instance-id")," is not specified, it gets the IDs of all instances.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,l.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n")),(0,l.kt)("p",null,"The output is shown as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "receivedTotal" : 1,\n  "processedSuccessfullyTotal" : 1,\n  "systemExceptionsTotal" : 0,\n  "userExceptionsTotal" : 0,\n  "avgProcessLatency" : 0.8385,\n  "1min" : {\n    "receivedTotal" : 0,\n    "processedSuccessfullyTotal" : 0,\n    "systemExceptionsTotal" : 0,\n    "userExceptionsTotal" : 0,\n    "avgProcessLatency" : null\n  },\n  "lastInvocation" : 1557734137987,\n  "instances" : [ {\n    "instanceId" : 0,\n    "metrics" : {\n      "receivedTotal" : 1,\n      "processedSuccessfullyTotal" : 1,\n      "systemExceptionsTotal" : 0,\n      "userExceptionsTotal" : 0,\n      "avgProcessLatency" : 0.8385,\n      "1min" : {\n        "receivedTotal" : 0,\n        "processedSuccessfullyTotal" : 0,\n        "systemExceptionsTotal" : 0,\n        "userExceptionsTotal" : 0,\n        "avgProcessLatency" : null\n      },\n      "lastInvocation" : 1557734137987,\n      "userMetrics" : { }\n    }\n  } ]\n}\n\n')),(0,l.kt)("h3",{id:"list"},(0,l.kt)("inlineCode",{parentName:"h3"},"list")),(0,l.kt)("p",null,"List all Pulsar Functions running under a specific tenant and namespace."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions list options\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,l.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n\n")),(0,l.kt)("p",null,"As shown below, the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," command returns three functions running under the ",(0,l.kt)("em",{parentName:"p"},"public")," tenant and the ",(0,l.kt)("em",{parentName:"p"},"default")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\nExclamationFunctio1\nExclamationFunctio2\nExclamationFunctio3\n\n")),(0,l.kt)("h3",{id:"trigger"},(0,l.kt)("inlineCode",{parentName:"h3"},"trigger")),(0,l.kt)("p",null,"Trigger a specified Pulsar Function with a supplied value. This command simulates the execution process of a Pulsar Function and verifies it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pulsar-admin functions trigger options\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,l.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"The namespace of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,l.kt)("td",{parentName:"tr",align:null},"The tenant of a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--topic")),(0,l.kt)("td",{parentName:"tr",align:null},"The topic name that a Pulsar Function consumes from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--trigger-file")),(0,l.kt)("td",{parentName:"tr",align:null},"The path to a file that contains the data to trigger a Pulsar Function.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--trigger-value")),(0,l.kt)("td",{parentName:"tr",align:null},"The value to trigger a Pulsar Function.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ ./bin/pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n    --topic persistent://public/default/my-topic-1 \\\n    --trigger-value "hello pulsar functions"\n\n')),(0,l.kt)("p",null,"As shown below, the ",(0,l.kt)("inlineCode",{parentName:"p"},"trigger")," command returns the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\nThis is my function!\n\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You must specify the ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-2.0#topic-names"},"entire topic name")," when using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--topic")," option. Otherwise, the following error occurs."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\nFunction in trigger function has unidentified topic\nReason: Function in trigger function has unidentified topic\n\n")))))}d.isMDXComponent=!0},68724:function(n,t,e){t.Z=e.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"}}]);