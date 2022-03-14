"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6776],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),o=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(t),d=n,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(k,s(s({ref:a},p),{},{components:t})):r.createElement(k,s({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=m;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,a,t){t.d(a,{Z:function(){return n}});var r=t(67294);function n(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(87462),n=t(67294),l=t(72389),s=t(63725),u=t(86010),i="tabItem_LplD";function o(e){var a,t,l,o=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,s.lx)(f,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(a=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),N=g.tabGroupChoices,T=g.setTabGroupChoices,y=(0,n.useState)(b),A=y[0],x=y[1],P=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var w=N[d];null!=w&&w!==A&&f.some((function(e){return e.value===w}))&&x(w)}var C=function(e){var a=e.currentTarget,t=P.indexOf(a),r=f[t].value;r!==A&&(I(a),x(r),null!=d&&T(d,r))},E=function(e){var a,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var n=P.indexOf(e.currentTarget)-1;t=P[n]||P[P.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},k)},f.map((function(e){var a=e.value,t=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:A===a?0:-1,"aria-selected":A===a,key:a,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":A===a})}),null!=t?t:a)}))),o?(0,n.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==A})}))))}function p(e){var a=(0,l.Z)();return n.createElement(o,(0,r.Z)({key:String(a)},e))}},98639:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=t(87462),n=t(63366),l=(t(67294),t(3905)),s=t(9877),u=t(58215),i=["components"],o={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},p=void 0,c={unversionedId:"admin-api-clusters",id:"admin-api-clusters",title:"Managing Clusters",description:"Important",source:"@site/docs/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/next/admin-api-clusters",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/admin-api-clusters.md",tags:[],version:"current",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/next/admin-api-overview"},next:{title:"Tenants",permalink:"/docs/next/admin-api-tenants"}},m={},d=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"List",id:"list",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3}],k={toc:d};function v(e){var a=e.components,t=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.orghttps://pulsar.apache.org/api/admin/2.9.0-SNAPSHOT//"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#broker"},"brokers"),", one or more ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#bookie"},"bookies"),"), and a ",(0,l.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,l.kt)("p",null,"Clusters can be managed via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"clusters")," command of the ",(0,l.kt)("a",{parentName:"li",href:"%5Breference-pulsar-admin.md%5D(https://pulsar.apache.org/tools/pulsar-admin/)"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,l.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"li",href:"client-libraries-java"},"Java API"))),(0,l.kt)("h2",{id:"clusters-resources"},"Clusters resources"),(0,l.kt)("h3",{id:"provision"},"Provision"),(0,l.kt)("p",null,"New clusters can be provisioned using the admin interface."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note that this operation requires superuser privileges.")),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"You can provision a new cluster using the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-create"},(0,l.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/createCluster?version=2.9.1&apiVersion=v2"},"PUT /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n")))),(0,l.kt)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,l.kt)("p",null,"When provision a new cluster, you need to initialize that cluster's ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The name of the cluster"),(0,l.kt)("li",{parentName:"ul"},"The local metadata store connection string for the cluster"),(0,l.kt)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,l.kt)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,l.kt)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/reference-terminology#broker"},"brokers")," in the cluster")),(0,l.kt)("p",null,"You must initialize cluster metadata ",(0,l.kt)("em",{parentName:"p"},"before")," starting up any ",(0,l.kt)("a",{parentName:"p",href:"admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"No cluster metadata initialization through the REST API or the Java admin API")),(0,l.kt)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,l.kt)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,l.kt)("p",null,"Here's an example cluster metadata initialization command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,l.kt)("p",null,"You'll need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,l.kt)("a",{parentName:"p",href:"security-tls-authentication"},"TLS authentication")," in your instance."),(0,l.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,l.kt)("p",null,"You can fetch the ",(0,l.kt)("a",{parentName:"p",href:"reference-configuration"},"configuration")," for an existing cluster at any time."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-get"},(0,l.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n'))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getCluster?version=2.9.1&apiVersion=v2"},"GET /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getCluster(clusterName);\n\n")))),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,"You can update the configuration for an existing cluster at any time."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update"},(0,l.kt)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/updateCluster?version=2.9.1&apiVersion=v2"},"POST /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n")))),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Clusters can be deleted from a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-delete"},(0,l.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin clusters delete cluster-1\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/deleteCluster?version=2.9.1&apiVersion=v2"},"DELETE /admin/v2/clusters/:cluster"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().deleteCluster(clusterName);\n\n")))),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-list"},(0,l.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getClusters?version=2.9.1&apiVersion=v2"},"GET /admin/v2/clusters"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getClusters();\n\n")))),(0,l.kt)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,l.kt)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,l.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update-peer-clusters"},(0,l.kt)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n"))),(0,l.kt)(u.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/setPeerClusterNames?version=2.9.1&apiVersion=v2"},"POST /admin/v2/clusters/:cluster/peers"))),(0,l.kt)(u.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n")))))}v.isMDXComponent=!0}}]);