"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5351],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],u={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install"},i=void 0,s={unversionedId:"helm-install",id:"helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/ja/docs/next/helm-install",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/helm-install.md",tags:[],version:"current",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install"},sidebar:"docsSidebar",previous:{title:"Prepare",permalink:"/ja/docs/next/helm-prepare"},next:{title:"Deployment",permalink:"/ja/docs/next/helm-deploy"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Pulsar deployment",id:"pulsar-deployment",level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,a.kt)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,a.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,a.kt)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"helm"))," and ",(0,a.kt)("a",{parentName:"p",href:"helm-tools"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,a.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,a.kt)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/ja/docs/next/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,a.kt)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,a.kt)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,a.kt)("a",{parentName:"p",href:"helm-deploy"},"deployment of Pulsar"),"."),(0,a.kt)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,a.kt)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,a.kt)("a",{parentName:"p",href:"helm-upgrade"},"upgrade documentation"),"."))}d.isMDXComponent=!0}}]);