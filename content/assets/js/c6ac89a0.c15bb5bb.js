"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93248],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(t),c=r,v=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return t?n.createElement(v,s(s({ref:a},u),{},{components:t})):n.createElement(v,s({ref:a},u))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),r=t(67294),l=t(86010),s=t(72389),i=t(67392),p=t(7094),o=t(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:a,block:t,defaultValue:s,values:m,groupId:d,className:c}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,i.l)(k,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=(0,p.U)(),[T,y]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,o.o5)();if(null!=d){const e=h[d];null!=e&&e!==T&&k.some((a=>a.value===e))&&y(e)}const I=e=>{const a=e.currentTarget,t=N.indexOf(a),n=k[t].value;n!==T&&(A(a),y(n),null!=d&&g(d,String(n)))},x=e=>{let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},c)},k.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>N.push(e),onKeyDown:x,onClick:I},s,{className:(0,l.Z)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":T===a})}),t??a)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function d(e){const a=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},64907:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(87462),r=(t(67294),t(3905)),l=t(65488),s=t(85162);const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},p=void 0,o={unversionedId:"admin-api-tenants",id:"version-2.9.x/admin-api-tenants",title:"Managing Tenants",description:"Important",source:"@site/versioned_docs/version-2.9.x/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/2.9.x/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/admin-api-tenants.md",tags:[],version:"2.9.x",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Clusters",permalink:"/docs/2.9.x/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/2.9.x/admin-api-brokers"}},u={},m=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}],d={toc:m},c="wrapper";function v(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin roles"),(0,r.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,r.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"You can list all of the tenants associated with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-list"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants list\nmy-tenant-1\nmy-tenant-2\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/getTenants"},"GET /admin/v2/tenants"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenants();\n\n")))),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"You can create a new tenant."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant\n\n")),(0,r.kt)("p",null,"When creating a tenant, you can assign admin roles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--admin-roles")," flag. You can specify multiple roles as a comma-separated list. Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/createTenant"},"POST /admin/v2/tenants/:tenant"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().createTenant(tenantName, tenantInfo);\n\n")))),(0,r.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,r.kt)("p",null,"You can fetch the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-configuration"},"configuration")," for an existing tenant at any time."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-get"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the tenant. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n'))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/getTenant"},"GET /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().getTenantInfo(tenantName);\n\n")))),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Tenants can be deleted from a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#instance"},"instance"),"."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants delete my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/deleteTenant"},"DELETE /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.Tenants().deleteTenant(tenantName);\n\n")))),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"You can update a tenant's configuration."),(0,r.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#tenants-update"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants update my-tenant\n\n"))),(0,r.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/updateTenant"},"DELETE /admin/v2/tenants/:cluster"))),(0,r.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.tenants().updateTenant(tenantName, tenantInfo);\n\n")))))}v.isMDXComponent=!0}}]);