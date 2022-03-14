"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7096],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1120:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader"},p=void 0,s={unversionedId:"tiered-storage-azure",id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar.",source:"@site/docs/tiered-storage-azure.md",sourceDirName:".",slug:"/tiered-storage-azure",permalink:"/docs/next/tiered-storage-azure",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/tiered-storage-azure.md",tags:[],version:"current",frontMatter:{id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader"},sidebar:"docsSidebar",previous:{title:"Filesystem offloader",permalink:"/docs/next/tiered-storage-filesystem"},next:{title:"Aliyun OSS offloader",permalink:"/docs/next/tiered-storage-aliyun"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Azure BlobStore offloader driver",id:"configure-azure-blobstore-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure Azure BlobStore offloader to run automatically",id:"configure-azure-blobstore-offloader-to-run-automatically",level:3},{value:"Example",id:"example-1",level:4},{value:"Configure Azure BlobStore offloader to run manually",id:"configure-azure-blobstore-offloader-to-run-manually",level:3},{value:"Example",id:"example-2",level:4}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Follow the steps below to install the Azure BlobStore offloader."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pulsar: 2.6.2 or later versions")),(0,o.kt)("h3",{id:"step"},"Step"),(0,o.kt)("p",null,"This example uses Pulsar 2.6.2."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download from the ",(0,o.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz"},"Apache mirror"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download from the Pulsar ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"downloads page"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz\n\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.6.2/apache-pulsar-offloaders-2.6.2-bin.tar.gz\ntar xvfz apache-pulsar-offloaders-2.6.2-bin.tar.gz\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,o.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.6.2/offloaders apache-pulsar-2.6.2/offloaders\n\nls offloaders\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,o.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),",  ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure")," for long term storage. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.6.2.nar\ntiered-storage-jcloud-2.6.2.nar\n\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,o.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,o.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,o.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before offloading data from BookKeeper to Azure BlobStore, you need to configure some properties of the Azure BlobStore offload driver."))),(0,o.kt)("p",null,"Besides, you can also configure the Azure BlobStore offloader to run it automatically or trigger it manually."),(0,o.kt)("h3",{id:"configure-azure-blobstore-offloader-driver"},"Configure Azure BlobStore offloader driver"),(0,o.kt)("p",null,"You can configure the Azure BlobStore offloader driver in the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,o.kt)("td",{parentName:"tr",align:null},"Offloader driver name"),(0,o.kt)("td",{parentName:"tr",align:null},"azureblob")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,o.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,o.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,o.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar-topic-offload"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,o.kt)("td",{parentName:"tr",align:null},"Size of block read"),(0,o.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,o.kt)("td",{parentName:"tr",align:null},"Size of block write"),(0,o.kt)("td",{parentName:"tr",align:null},"64 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,o.kt)("td",{parentName:"tr",align:null},"5000")))))),(0,o.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,o.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in Azure BlobStore must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)("p",null,"This example names the bucket as ",(0,o.kt)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,o.kt)("h4",{id:"authentication-required"},"Authentication (required)"),(0,o.kt)("p",null,"To be able to access Azure BlobStore, you need to authenticate with Azure BlobStore."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCOUNT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCESS_KEY")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,o.kt)("p",{parentName:"li"},'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nexport AZURE_STORAGE_ACCOUNT=ABC123456789\nexport AZURE_STORAGE_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")))),(0,o.kt)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,o.kt)("p",null,"You can configure the size of a request sent to or read from Azure BlobStore in the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,o.kt)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from Azure BlobStore store."),(0,o.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,o.kt)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to Azure BlobStore store. It ',(0,o.kt)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,o.kt)("td",{parentName:"tr",align:null},"64 MB")))),(0,o.kt)("h3",{id:"configure-azure-blobstore-offloader-to-run-automatically"},"Configure Azure BlobStore offloader to run automatically"),(0,o.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,o.kt)("th",{parentName:"tr",align:null},"Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"> 0"),(0,o.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"= 0"),(0,o.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"< 0"),(0,o.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,o.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,o.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,o.kt)("p",null,"The offload configurations in ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-set-offload-policies-em-"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("p",null,"This example sets the Azure BlobStore offloader threshold size to 10 MB using pulsar-admin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-set-offload-threshold-em-"},"here"),". "))),(0,o.kt)("h3",{id:"configure-azure-blobstore-offloader-to-run-manually"},"Configure Azure BlobStore offloader to run manually"),(0,o.kt)("p",null,"For individual topics, you can trigger Azure BlobStore offloader manually using one of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "),(0,o.kt)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Azure BlobStore until the threshold is no longer exceeded. Older segments are moved first."))),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This example triggers the Azure BlobStore offloader to run manually using pulsar-admin."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-offload-em-"},"here"),". ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This example checks the Azure BlobStore offloader status using pulsar-admin."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,o.kt)("p",{parentName:"li"},"To wait for the Azure BlobStore offloader to complete the job, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,o.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException:\n\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-offload-status-em-"},"here"),". "))))))}c.isMDXComponent=!0}}]);