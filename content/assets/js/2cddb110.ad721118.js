"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[50247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?l.createElement(h,a(a({ref:t},u),{},{components:r})):l.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=r(87462),n=(r(67294),r(3905));const o={id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools",original_id:"helm-tools"},a=void 0,i={unversionedId:"helm-tools",id:"version-2.9.x/helm-tools",title:"Required tools for deploying Pulsar Helm Chart",description:"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally.",source:"@site/versioned_docs/version-2.9.x/helm-tools.md",sourceDirName:".",slug:"/helm-tools",permalink:"/docs/2.9.x/helm-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/helm-tools.md",tags:[],version:"2.9.x",frontMatter:{id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools",original_id:"helm-tools"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Upgrade",permalink:"/docs/2.9.x/helm-upgrade"},next:{title:"Tutorials",permalink:"/docs/2.9.x/install-deploy-upgrade-landing"}},s={},p=[{value:"kubectl",id:"kubectl",level:2},{value:"Helm",id:"helm",level:2},{value:"Get Helm",id:"get-helm",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"Templates",id:"templates",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally."),(0,n.kt)("h2",{id:"kubectl"},"kubectl"),(0,n.kt)("p",null,"kubectl is the tool that talks to the Kubernetes API. kubectl 1.14 or higher is required and it needs to be compatible with your cluster (",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")."),(0,n.kt)("p",null,"To Install kubectl locally, follow the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"Kubernetes documentation"),"."),(0,n.kt)("p",null,"The server version of kubectl cannot be obtained until we connect to a cluster."),(0,n.kt)("h2",{id:"helm"},"Helm"),(0,n.kt)("p",null,"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is tested and supported with Helm v3."),(0,n.kt)("h3",{id:"get-helm"},"Get Helm"),(0,n.kt)("p",null,"You can get Helm from the project's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"releases page"),", or follow other options under the official documentation of ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"installing Helm"),"."),(0,n.kt)("h3",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"Once kubectl and Helm are configured, you can configure your ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.9.x/helm-prepare"},"Kubernetes cluster"),"."),(0,n.kt)("h2",{id:"additional-information"},"Additional information"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"Templating in Helm is done through Golang's ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," and ",(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/Masterminds/sprig"},"sprig"),"."),(0,n.kt)("p",null,"For more information about how all the inner workings behave, check these documents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/functions_and_pipelines/"},"Functions and Pipelines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/"},"Subcharts and Globals"))),(0,n.kt)("h3",{id:"tips-and-tricks"},"Tips and tricks"),(0,n.kt)("p",null,"For additional information on developing with Helm, check ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/howto/charts_tips_and_tricks/"},"tips and tricks section")," in the Helm repository."))}d.isMDXComponent=!0}}]);