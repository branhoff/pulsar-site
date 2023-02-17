"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59446],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),o=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(t),d=l,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return t?n.createElement(k,r(r({ref:a},c),{},{components:t})):n.createElement(k,r({ref:a},c))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,r=new Array(p);r[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var o=2;o<p;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),l=t(86010);const p={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(p.tabItem,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),l=t(67294),p=t(86010),r=t(72389),i=t(67392),s=t(7094),o=t(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:a,block:t,defaultValue:r,values:u,groupId:m,className:d}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,i.l)(g,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,s.U)(),[y,N]=(0,l.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,o.o5)();if(null!=m){const e=f[m];null!=e&&e!==y&&g.some((a=>a.value===e))&&N(e)}const P=e=>{const a=e.currentTarget,t=T.indexOf(a),n=g[t].value;n!==y&&(A(a),N(n),null!=m&&b(m,String(n)))},w=e=>{let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,p.Z)("tabs-container",c.tabList)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":t},d)},g.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>T.push(e),onKeyDown:w,onClick:P},r,{className:(0,p.Z)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function m(e){const a=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(a)},e))}},8125:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),l=(t(67294),t(3905)),p=t(65488),r=t(85162);const i={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},s=void 0,o={unversionedId:"admin-api-packages",id:"version-2.9.x/admin-api-packages",title:"Manage packages",description:"Important",source:"@site/versioned_docs/version-2.9.x/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/2.9.x/admin-api-packages",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/admin-api-packages.md",tags:[],version:"2.9.x",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Functions",permalink:"/docs/2.9.x/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/docs/2.9.x/adaptors-kafka"}},c={},u=[{value:"Package name",id:"package-name",level:2},{value:"Package URL",id:"package-url",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Package resources",id:"package-resources",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all the specified type packages under a namespace",id:"list-all-the-specified-type-packages-under-a-namespace",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"Delete a specified package",id:"delete-a-specified-package",level:3}],m={toc:u},d="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Package management enables version management and simplifies the upgrade and rollback processes for Functions, Sinks, and Sources. When you use the same function, sink and source in different namespaces, you can upload them to a common package management system."),(0,l.kt)("h2",{id:"package-name"},"Package name"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," is identified by five parts: ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tenant"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"package name"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Part"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the package. The following types are supported: ",(0,l.kt)("inlineCode",{parentName:"td"},"function"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sink")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"source"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"The fully qualified name of the package: ",(0,l.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the package.")))),(0,l.kt)("p",null,"The following is a code sample."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nclass PackageName {\n   private final PackageType type;\n   private final String namespace;\n   private final String tenant;\n   private final String name;\n   private final String version;\n}\n\nenum PackageType {\n   FUNCTION("function"), SINK("sink"), SOURCE("source");\n}\n\n')),(0,l.kt)("h2",{id:"package-url"},"Package URL"),(0,l.kt)("p",null,"A package is located using a URL. The package URL is written in the following format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n<type>://<tenant>/<namespace>/<package name>@<version>\n\n")),(0,l.kt)("p",null,"The following are package URL examples:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sink://public/default/mysql-sink@1.0"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"function://my-tenant/my-ns/my-function@0.1"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"source://my-tenant/my-ns/mysql-cdc-source@2.3")),(0,l.kt)("p",null,"The package management system stores the data, versions and metadata of each package. The metadata is shown in the following table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"metadata"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contact"),(0,l.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, team email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"A key/value map that stores your own information.")))),(0,l.kt)("h2",{id:"permissions"},"Permissions"),(0,l.kt)("p",null,"The packages are organized by the tenant and namespace, so you can apply the tenant and namespace permissions to packages directly."),(0,l.kt)("h2",{id:"package-resources"},"Package resources"),(0,l.kt)("p",null,"You can use the package management with command line tools, REST API and Java client."),(0,l.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,l.kt)("p",null,"You can upload a package to the package management service in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload functions://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/upload"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Upload a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"download-a-package"},"Download a package"),(0,l.kt)("p",null,"You can download a package to the package management service in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download functions://public/default/example@v0.1 --path package-file\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/download"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Download a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Download a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,l.kt)("p",null,"You can get a list of all versions of a package in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/listPackageVersion"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all versions of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all versions of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"list-all-the-specified-type-packages-under-a-namespace"},"List all the specified type packages under a namespace"),(0,l.kt)("p",null,"You can get a list of all the packages with the given type in a namespace in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/listPackages"},"PUT /admin/v3/packages/:type/:tenant/:namespace"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all the packages with the given type in a namespace synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all the packages with the given type in a namespace asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))),(0,l.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,l.kt)("p",null,"You can get the metadata of a package in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/getMeta"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Get the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Get the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,l.kt)("p",null,"You can update the metadata of a package in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/updateMeta"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Update a package metadata information synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Update a package metadata information asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,l.kt)("h3",{id:"delete-a-specified-package"},"Delete a specified package"),(0,l.kt)("p",null,"You can delete a specified package with its package name in the following ways."),(0,l.kt)(p.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The following command example deletes a package of version 0.1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete functions://public/default/example@v0.1\n\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.9.4&apiversion=v3#operation/delete"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Delete a specified package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   void delete(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Delete a specified package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n   CompletableFuture<Void> deleteAsync(String packageName);\n\n")))))}k.isMDXComponent=!0}}]);