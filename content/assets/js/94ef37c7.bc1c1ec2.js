"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37321],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return t?a.createElement(g,l(l({ref:r},p),{},{components:t})):a.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(67294),o=t(86010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>N});var a=t(87462),o=t(67294),n=t(86010),l=t(12466),i=t(16550),s=t(91980),u=t(67392),p=t(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:o}}=e;return{value:r,label:t,attributes:a,default:o}}))}function c(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,s._X)(n),(0,o.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function h(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[s,u]=g({queryString:t,groupId:a}),[d,h]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,p.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,n]),tabValues:n}}var k=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:r,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const r=e.currentTarget,t=p.indexOf(r),a=u[t].value;a!==i&&(d(r),s(a))},m=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;r=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;r=p[t]??p[p.length-1];break}}r?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r)},u.map((e=>{let{value:r,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,n.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===r})}),t??r)})))}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function v(e){const r=h(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",b.tabList)},o.createElement(f,(0,a.Z)({},e,r)),o.createElement(y,(0,a.Z)({},e,r)))}function N(e){const r=(0,k.Z)();return o.createElement(v,(0,a.Z)({key:String(r)},e))}},6457:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(87462),o=(t(67294),t(3905)),n=t(74866),l=t(85162);const i={id:"administration-upgrade",title:"Upgrade Guide",sidebar_label:"Upgrade"},s=void 0,u={unversionedId:"administration-upgrade",id:"version-2.11.x/administration-upgrade",title:"Upgrade Guide",description:"Upgrade guidelines",source:"@site/versioned_docs/version-2.11.x/administration-upgrade.md",sourceDirName:".",slug:"/administration-upgrade",permalink:"/docs/2.11.x/administration-upgrade",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/administration-upgrade.md",tags:[],version:"2.11.x",frontMatter:{id:"administration-upgrade",title:"Upgrade Guide",sidebar_label:"Upgrade"},sidebar:"docsSidebar",previous:{title:"Pulsar proxy",permalink:"/docs/2.11.x/administration-proxy"},next:{title:"Pulsar isolation",permalink:"/docs/2.11.x/administration-isolation"}},p={},d=[{value:"Upgrade guidelines",id:"upgrade-guidelines",level:2},{value:"Upgrade sequence",id:"upgrade-sequence",level:2},{value:"Upgrade ZooKeeper (optional)",id:"upgrade-zookeeper-optional",level:2},{value:"Canary test",id:"canary-test",level:3},{value:"Upgrade all ZooKeeper servers",id:"upgrade-all-zookeeper-servers",level:3},{value:"Upgrade bookies",id:"upgrade-bookies",level:2},{value:"Canary test",id:"canary-test-1",level:3},{value:"Upgrade all bookies",id:"upgrade-all-bookies",level:3},{value:"Upgrade brokers and proxies",id:"upgrade-brokers-and-proxies",level:2},{value:"Canary test",id:"canary-test-2",level:3},{value:"Upgrade all brokers or proxies",id:"upgrade-all-brokers-or-proxies",level:3}],c={toc:d},m="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upgrade-guidelines"},"Upgrade guidelines"),(0,o.kt)("p",null,"Apache Pulsar is comprised of multiple components, ZooKeeper, bookies, and brokers. These components are either stateful or stateless. You do not have to upgrade ZooKeeper nodes unless you have special requirements. While you upgrade, you need to pay attention to bookies (stateful), brokers, and proxies (stateless)."),(0,o.kt)("p",null,"Read the following guidelines before upgrading a Pulsar cluster."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Back up all your configuration files before upgrading."),(0,o.kt)("li",{parentName:"ul"},"Read the guide entirely, make a plan, and then execute the plan. When you make an upgrade plan, you need to take your specific requirements and environment into consideration."),(0,o.kt)("li",{parentName:"ul"},"Pay attention to the ",(0,o.kt)("a",{parentName:"li",href:"#upgrade-sequence"},"upgrade sequence of components"),". In general, you do not need to upgrade your ZooKeeper or configuration store cluster (the global ZooKeeper cluster). You need to upgrade bookies first, and then upgrade brokers, proxies, and your clients."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"autorecovery")," is enabled, you need to disable ",(0,o.kt)("inlineCode",{parentName:"li"},"autorecovery")," in the upgrade process, and re-enable it after completing the process."),(0,o.kt)("li",{parentName:"ul"},"Read the release notes carefully for each release. Release notes contain features and configuration changes that might impact your upgrade."),(0,o.kt)("li",{parentName:"ul"},"Upgrade a small subset of nodes of each type to canary test the new version before upgrading all nodes of that type in the cluster. When you have upgraded the canary nodes, run for a while to ensure that they work correctly."),(0,o.kt)("li",{parentName:"ul"},"Upgrade one data center to verify the new version before upgrading all data centers if your cluster runs in multi-cluster replicated mode.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, Apache Pulsar is compatible between versions.")),(0,o.kt)("h2",{id:"upgrade-sequence"},"Upgrade sequence"),(0,o.kt)("p",null,"To upgrade an Apache Pulsar cluster, follow the upgrade sequence."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade ZooKeeper (optional)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Canary test: test an upgraded version in one or a small set of ZooKeeper nodes."),(0,o.kt)("li",{parentName:"ul"},"Rolling upgrade: roll out the upgraded version to all ZooKeeper servers incrementally, one at a time. Monitor your dashboard during the whole rolling upgrade process."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade bookies."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Canary test: test an upgraded version in one or a small set of bookies.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rolling upgrade:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"a. Disable ",(0,o.kt)("inlineCode",{parentName:"li"},"autorecovery")," with the following command.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/bookkeeper shell autorecovery -disable\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"b. Roll out the upgraded version to all bookies in the cluster after you determine that a version is safe after canary."),(0,o.kt)("li",{parentName:"ul"},"c. After you upgrade all bookies, re-enable ",(0,o.kt)("inlineCode",{parentName:"li"},"autorecovery")," with the following command.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/bookkeeper shell autorecovery -enable\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade brokers."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Canary test: test an upgraded version in one or a small set of brokers."),(0,o.kt)("li",{parentName:"ul"},"Rolling upgrade: roll out the upgraded version to all brokers in the cluster after you determine that a version is safe after canary."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade proxies."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Canary test: test an upgraded version in one or a small set of proxies."),(0,o.kt)("li",{parentName:"ul"},"Rolling upgrade: roll out the upgraded version to all proxies in the cluster after you determine that a version is safe after canary.")))),(0,o.kt)("h2",{id:"upgrade-zookeeper-optional"},"Upgrade ZooKeeper (optional)"),(0,o.kt)("p",null,"While you upgrade ZooKeeper servers, you can do a canary test first, and then upgrade all ZooKeeper servers in the cluster."),(0,o.kt)("h3",{id:"canary-test"},"Canary test"),(0,o.kt)("p",null,"You can test an upgraded version in one of ZooKeeper servers before upgrading all ZooKeeper servers in your cluster."),(0,o.kt)("p",null,"To upgrade a ZooKeeper server to a new version, complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the ZooKeeper server."),(0,o.kt)("li",{parentName:"ol"},"Upgrade the binary and configuration files."),(0,o.kt)("li",{parentName:"ol"},"Start the ZooKeeper server with the new binary files."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar zookeeper-shell")," to connect to the newly upgraded ZooKeeper server and run a few commands to verify if it works as expected."),(0,o.kt)("li",{parentName:"ol"},"Run the ZooKeeper server for a few days, observe and make sure the ZooKeeper cluster runs well.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If issues occur during the canary test, you can shut down the problematic ZooKeeper node, revert the binary and configuration, and restart the ZooKeeper with the reverted binary.")),(0,o.kt)("h3",{id:"upgrade-all-zookeeper-servers"},"Upgrade all ZooKeeper servers"),(0,o.kt)("p",null,"After the canary test to upgrade one ZooKeeper in your cluster, you can upgrade all ZooKeeper servers in your cluster."),(0,o.kt)("p",null,"You can upgrade all ZooKeeper servers one by one by following the steps in the canary test."),(0,o.kt)("h2",{id:"upgrade-bookies"},"Upgrade bookies"),(0,o.kt)("p",null,"While you upgrade bookies, you can do a canary test first, and then upgrade all bookies in the cluster.\nFor more details, you can read Apache BookKeeper ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/next/admin/upgrade"},"Upgrade guide"),"."),(0,o.kt)("h3",{id:"canary-test-1"},"Canary test"),(0,o.kt)("p",null,"You can test an upgraded version in one or a small set of bookies before upgrading all bookies in your cluster."),(0,o.kt)("p",null,"To upgrade a bookie to a new version, complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the bookie.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade the binary and configuration files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the bookie in ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadOnly")," mode to verify if the bookie of this new version runs well for reading workload."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar bookie --readOnly\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the bookie runs successfully in ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadOnly")," mode, stop the bookie and restart it in ",(0,o.kt)("inlineCode",{parentName:"p"},"Write/Read")," mode."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar bookie\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Observe and make sure the cluster serves both write and read traffic."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If issues occur during the canary test, you can shut down the problematic bookie node. Other bookies in the cluster replace this problematic bookie node with auto-recovery.")),(0,o.kt)("h3",{id:"upgrade-all-bookies"},"Upgrade all bookies"),(0,o.kt)("p",null,"After the canary test to upgrade some bookies in your cluster, you can upgrade all bookies in your cluster."),(0,o.kt)("p",null,"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."),(0,o.kt)("p",null,"In a rolling upgrade scenario, upgrade one bookie at a time. In a downtime upgrade scenario, shut down the entire cluster, upgrade each bookie, and then start the cluster."),(0,o.kt)("p",null,"While you upgrade in both scenarios, the procedure is the same for each bookie."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the bookie."),(0,o.kt)("li",{parentName:"ol"},"Upgrade the software (either new binary or new configuration files)."),(0,o.kt)("li",{parentName:"ol"},"Start the bookie.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When you upgrade a large BookKeeper cluster in a rolling upgrade scenario, upgrading one bookie at a time is slow. If you configure a rack-aware or region-aware placement policy, you can upgrade bookies rack by rack or region by region, which speeds up the whole upgrade process.")),(0,o.kt)("h2",{id:"upgrade-brokers-and-proxies"},"Upgrade brokers and proxies"),(0,o.kt)("p",null,"The upgrade procedure for brokers and proxies is the same. Brokers and proxies are ",(0,o.kt)("inlineCode",{parentName:"p"},"stateless"),", so upgrading the two services is easy."),(0,o.kt)("h3",{id:"canary-test-2"},"Canary test"),(0,o.kt)("p",null,"You can test an upgraded version in one or a small set of nodes before upgrading all nodes in your cluster."),(0,o.kt)("p",null,"To upgrade a broker (or proxy) to a new version, complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop a broker (or proxy)."),(0,o.kt)("li",{parentName:"ol"},"Upgrade the binary and configuration file."),(0,o.kt)("li",{parentName:"ol"},"Start a broker (or proxy).")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If issues occur during the canary test, you can shut down the problematic broker (or proxy) node. Revert to the old version and restart the broker (or proxy).")),(0,o.kt)("h3",{id:"upgrade-all-brokers-or-proxies"},"Upgrade all brokers or proxies"),(0,o.kt)("p",null,"After the canary test to upgrade some brokers or proxies in your cluster, you can upgrade all brokers or proxies in your cluster."),(0,o.kt)("p",null,"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."),(0,o.kt)("p",null,"In a rolling upgrade scenario, you can upgrade one broker or one proxy at a time if the size of the cluster is small. If your cluster is large, you can upgrade brokers or proxies in batches. When you upgrade a batch of brokers or proxies, make sure the remaining brokers and proxies in the cluster have enough capacity to handle the traffic during the upgrade."),(0,o.kt)("p",null,"In a downtime upgrade scenario, shut down the entire cluster, upgrade each broker or proxy, and then start the cluster."),(0,o.kt)("p",null,"While you upgrade in both scenarios, the procedure is the same for each broker or proxy."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the broker (or proxy)."),(0,o.kt)("li",{parentName:"ol"},"Upgrade the software (either new binary or new configuration files)."),(0,o.kt)("li",{parentName:"ol"},"Start the broker (or proxy).")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To check the health of the broker, you can use the following command or API."),(0,o.kt)(n.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin brokers healthcheck\n"))),(0,o.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"admonition"},"Send a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to this endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.1&apiversion=v2#operation/healthCheck"},"GET /admin/v2/brokers/health/healthCheck"))))))}g.isMDXComponent=!0}}]);