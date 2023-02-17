"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,c=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return a?r.createElement(c,l(l({ref:t},u),{},{components:a})):r.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader",original_id:"tiered-storage-azure"},l=void 0,i={unversionedId:"tiered-storage-azure",id:"version-2.10.x/tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.10.x/tiered-storage-azure.md",sourceDirName:".",slug:"/tiered-storage-azure",permalink:"/docs/2.10.x/tiered-storage-azure",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/tiered-storage-azure.md",tags:[],version:"2.10.x",frontMatter:{id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader",original_id:"tiered-storage-azure"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Filesystem offloader",permalink:"/docs/2.10.x/tiered-storage-filesystem"},next:{title:"Aliyun OSS offloader",permalink:"/docs/2.10.x/tiered-storage-aliyun"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Azure BlobStore offloader driver",id:"configure-azure-blobstore-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure Azure BlobStore offloader to run automatically",id:"configure-azure-blobstore-offloader-to-run-automatically",level:3},{value:"Example",id:"example-1",level:4},{value:"Configure Azure BlobStore offloader to run manually",id:"configure-azure-blobstore-offloader-to-run-manually",level:3},{value:"Example",id:"example-2",level:4}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Follow the steps below to install the Azure BlobStore offloader."),(0,n.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pulsar: 2.6.2 or later versions")),(0,n.kt)("h3",{id:"step"},"Step"),(0,n.kt)("p",null,"This example uses Pulsar 2.6.2."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download from the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz"},"Apache mirror"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download from the Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz\n\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.6.2/apache-pulsar-offloaders-2.6.2-bin.tar.gz\ntar xvfz apache-pulsar-offloaders-2.6.2-bin.tar.gz\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,n.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.6.2/offloaders apache-pulsar-2.6.2/offloaders\n\nls offloaders\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,n.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),",  ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure")," for long term storage. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.6.2.nar\ntiered-storage-jcloud-2.6.2.nar\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,n.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to Azure BlobStore, you need to configure some properties of the Azure BlobStore offload driver.")),(0,n.kt)("p",null,"Besides, you can also configure the Azure BlobStore offloader to run it automatically or trigger it manually."),(0,n.kt)("h3",{id:"configure-azure-blobstore-offloader-driver"},"Configure Azure BlobStore offloader driver"),(0,n.kt)("p",null,"You can configure the Azure BlobStore offloader driver in the configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,n.kt)("td",{parentName:"tr",align:null},"Offloader driver name"),(0,n.kt)("td",{parentName:"tr",align:null},"azureblob")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,n.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,n.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,n.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-topic-offload"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,n.kt)("td",{parentName:"tr",align:null},"Size of block read"),(0,n.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,n.kt)("td",{parentName:"tr",align:null},"Size of block write"),(0,n.kt)("td",{parentName:"tr",align:null},"64 MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,n.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.kt)("td",{parentName:"tr",align:null},"50000")))))),(0,n.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,n.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in Azure BlobStore must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,n.kt)("h5",{id:"example"},"Example"),(0,n.kt)("p",null,"This example names the bucket as ",(0,n.kt)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.kt)("h4",{id:"authentication-required"},"Authentication (required)"),(0,n.kt)("p",null,"To be able to access Azure BlobStore, you need to authenticate with Azure BlobStore."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set the environment variables ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCOUNT")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCESS_KEY")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,n.kt)("p",{parentName:"li"},'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nexport AZURE_STORAGE_ACCOUNT=ABC123456789\nexport AZURE_STORAGE_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")))),(0,n.kt)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,n.kt)("p",null,"You can configure the size of a request sent to or read from Azure BlobStore in the configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,n.kt)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from Azure BlobStore store."),(0,n.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,n.kt)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to Azure BlobStore store. It ',(0,n.kt)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,n.kt)("td",{parentName:"tr",align:null},"64 MB")))),(0,n.kt)("h3",{id:"configure-azure-blobstore-offloader-to-run-automatically"},"Configure Azure BlobStore offloader to run automatically"),(0,n.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,n.kt)("th",{parentName:"tr",align:null},"Action"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"> 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"= 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"< 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,n.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,n.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,n.kt)("p",null,"The offload configurations in ",(0,n.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,n.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("p",null,"This example sets the Azure BlobStore offloader threshold size to 10 MB using pulsar-admin."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,n.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". ")),(0,n.kt)("h3",{id:"configure-azure-blobstore-offloader-to-run-manually"},"Configure Azure BlobStore offloader to run manually"),(0,n.kt)("p",null,"For individual topics, you can trigger Azure BlobStore offloader manually using one of the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "),(0,n.kt)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Azure BlobStore until the threshold is no longer exceeded. Older segments are moved first."))),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This example triggers the Azure BlobStore offloader to run manually using pulsar-admin."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,n.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This example checks the Azure BlobStore offloader status using pulsar-admin."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,n.kt)("p",{parentName:"li"},"To wait for the Azure BlobStore offloader to complete the job, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,n.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException:\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,n.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". ")))))}m.isMDXComponent=!0}}]);