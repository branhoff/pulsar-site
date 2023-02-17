"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82795],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"deploy-dcos",title:"Deploy Pulsar on DC/OS",sidebar_label:"DC/OS",original_id:"deploy-dcos"},s=void 0,l={unversionedId:"deploy-dcos",id:"version-2.10.x/deploy-dcos",title:"Deploy Pulsar on DC/OS",description:"To enable all built-in Pulsar IO connectors in your Pulsar deployment, we recommend you use apachepulsar/pulsar-all image instead of apachepulsar/pulsar image; the former has already bundled all built-in connectors.",source:"@site/versioned_docs/version-2.10.x/deploy-dcos.md",sourceDirName:".",slug:"/deploy-dcos",permalink:"/docs/2.10.x/deploy-dcos",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/deploy-dcos.md",tags:[],version:"2.10.x",frontMatter:{id:"deploy-dcos",title:"Deploy Pulsar on DC/OS",sidebar_label:"DC/OS",original_id:"deploy-dcos"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Bare metal multi-cluster",permalink:"/docs/2.10.x/deploy-bare-metal-multi-cluster"},next:{title:"Docker",permalink:"/docs/2.10.x/deploy-docker"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy Pulsar using the DC/OS command interface",id:"deploy-pulsar-using-the-dcos-command-interface",level:2},{value:"The BookKeeper group",id:"the-bookkeeper-group",level:2},{value:"The Pulsar broker group",id:"the-pulsar-broker-group",level:2},{value:"Monitor group",id:"monitor-group",level:2},{value:"Prometheus",id:"prometheus",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Run a simple Pulsar consumer and producer on DC/OS",id:"run-a-simple-pulsar-consumer-and-producer-on-dcos",level:2},{value:"Download and prepare the Pulsar Java tutorial",id:"download-and-prepare-the-pulsar-java-tutorial",level:3},{value:"Run the consumer and producer",id:"run-the-consumer-and-producer",level:3},{value:"View Grafana metric output",id:"view-grafana-metric-output",level:3},{value:"Uninstall Pulsar",id:"uninstall-pulsar",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To enable all built-in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/io-overview"},"Pulsar IO")," connectors in your Pulsar deployment, we recommend you use ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar")," image; the former has already bundled ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/io-overview#working-with-connectors"},"all built-in connectors"),".")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dcos.io/"},"DC/OS")," (the ",(0,r.kt)("strong",null,"D"),"ata",(0,r.kt)("strong",null,"C"),"enter ",(0,r.kt)("strong",null,"O"),"perating ",(0,r.kt)("strong",null,"S"),"ystem) is a distributed operating system for deploying and managing applications and systems on ",(0,r.kt)("a",{parentName:"p",href:"http://mesos.apache.org/"},"Apache Mesos"),". DC/OS is an open-source tool created and maintained by ",(0,r.kt)("a",{parentName:"p",href:"https://mesosphere.com/"},"Mesosphere"),"."),(0,r.kt)("p",null,"Apache Pulsar is available as a ",(0,r.kt)("a",{parentName:"p",href:"https://mesosphere.github.io/marathon/docs/application-groups.html"},"Marathon Application Group"),", which runs multiple applications as manageable sets."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You need to prepare your environment before running Pulsar on DC/OS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DC/OS version ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/"},"1.9")," or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/installing/"},"DC/OS cluster")," with at least three agent nodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/cli/install/"},"DC/OS CLI tool")," installed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/deployment/dcos/PulsarGroups.json"},(0,r.kt)("inlineCode",{parentName:"a"},"PulsarGroups.json"))," configuration file from the Pulsar GitHub repo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ curl -O https://raw.githubusercontent.com/apache/pulsar/master/deployment/dcos/PulsarGroups.json\n\n")))),(0,r.kt)("p",null,"Each node in the DC/OS-managed Mesos cluster must have at least:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4 CPU"),(0,r.kt)("li",{parentName:"ul"},"4 GB of memory"),(0,r.kt)("li",{parentName:"ul"},"60 GB of total persistent disk")),(0,r.kt)("p",null,"Alternatively, you can change the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"PulsarGroups.json")," accordingly to match your resources of the DC/OS cluster."),(0,r.kt)("h2",{id:"deploy-pulsar-using-the-dcos-command-interface"},"Deploy Pulsar using the DC/OS command interface"),(0,r.kt)("p",null,"You can deploy Pulsar on DC/OS using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ dcos marathon group add PulsarGroups.json\n\n")),(0,r.kt)("p",null,"This command deploys Docker container instances in three groups, which together comprise a Pulsar cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 bookies (1 ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.10.x/reference-terminology#bookie"},"bookie")," on each agent node and 1 ",(0,r.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/docs/latest/admin/autorecovery/"},"bookie recovery")," instance)"),(0,r.kt)("li",{parentName:"ul"},"3 Pulsar ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.10.x/reference-terminology#broker"},"brokers")," (1 broker on each node and 1 admin instance)"),(0,r.kt)("li",{parentName:"ul"},"1 ",(0,r.kt)("a",{parentName:"li",href:"http://prometheus.io/"},"Prometheus")," instance and 1 ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," instance")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you run DC/OS, a ZooKeeper cluster will be running at ",(0,r.kt)("inlineCode",{parentName:"p"},"master.mesos:2181"),", thus you do not have to install or start up ZooKeeper separately.")),(0,r.kt)("p",null,"After executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dcos")," command above, click the ",(0,r.kt)("strong",{parentName:"p"},"Services")," tab in the DC/OS ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/latest/gui/"},"GUI interface"),", which you can access at ",(0,r.kt)("a",{parentName:"p",href:"http://m1.dcos"},"http://m1.dcos")," in this example. You should see several applications during the deployment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS command executed",src:a(96112).Z,width:"1954",height:"954"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS command executed2",src:a(29733).Z,width:"3930",height:"1678"})),(0,r.kt)("h2",{id:"the-bookkeeper-group"},"The BookKeeper group"),(0,r.kt)("p",null,"To monitor the status of the BookKeeper cluster deployment, click the ",(0,r.kt)("strong",{parentName:"p"},"bookkeeper")," group in the parent ",(0,r.kt)("strong",{parentName:"p"},"pulsar")," group."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS bookkeeper status",src:a(2549).Z,width:"1788",height:"694"})),(0,r.kt)("p",null,"At this point, the status of the 3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#bookie"},"bookies")," is green, which means that the bookies have been deployed successfully and are running."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS bookkeeper running",src:a(64161).Z,width:"3896",height:"1754"})),(0,r.kt)("p",null,"You can also click each bookie instance to get more detailed information, such as the bookie running log."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS bookie log",src:a(176).Z,width:"1992",height:"1420"})),(0,r.kt)("p",null,"To display information about the BookKeeper in ZooKeeper, you can visit ",(0,r.kt)("a",{parentName:"p",href:"http://m1.dcos/exhibitor"},"http://m1.dcos/exhibitor"),". In this example, 3 bookies are under the ",(0,r.kt)("inlineCode",{parentName:"p"},"available")," directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS bookkeeper in zk",src:a(73253).Z,width:"1972",height:"1420"})),(0,r.kt)("h2",{id:"the-pulsar-broker-group"},"The Pulsar broker group"),(0,r.kt)("p",null,"Similar to the BookKeeper group above, click ",(0,r.kt)("strong",{parentName:"p"},"brokers")," to check the status of the Pulsar brokers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS broker status",src:a(37897).Z,width:"1978",height:"852"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS broker running",src:a(9053).Z,width:"1980",height:"846"})),(0,r.kt)("p",null,"You can also click each broker instance to get more detailed information, such as the broker running log."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS broker log",src:a(1248).Z,width:"1992",height:"1420"})),(0,r.kt)("p",null,"Broker cluster information in ZooKeeper is also available through the web UI. In this example, you can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadbalance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"managed-ledgers")," directories have been created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS broker in zk",src:a(16529).Z,width:"1972",height:"1420"})),(0,r.kt)("h2",{id:"monitor-group"},"Monitor group"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"monitory")," group consists of Prometheus and Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS monitor status",src:a(85563).Z,width:"1986",height:"754"})),(0,r.kt)("h3",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"Click the instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"prom")," to get the endpoint of Prometheus, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.65.121:9090")," in this example."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS prom endpoint",src:a(13588).Z,width:"1980",height:"1116"})),(0,r.kt)("p",null,"If you click that endpoint, you can see the Prometheus dashboard. All the bookies and brokers are listed on ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.65.121:9090/targets"},"http://192.168.65.121:9090/targets"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS prom targets",src:a(20079).Z,width:"1988",height:"936"})),(0,r.kt)("h3",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana")," to get the endpoint for Grafana, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.65.121:3000")," in this example."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS grafana endpoint",src:a(37889).Z,width:"1992",height:"1420"})),(0,r.kt)("p",null,"If you click that endpoint, you can access the Grafana dashboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS grafana targets",src:a(99437).Z,width:"1978",height:"702"})),(0,r.kt)("h2",{id:"run-a-simple-pulsar-consumer-and-producer-on-dcos"},"Run a simple Pulsar consumer and producer on DC/OS"),(0,r.kt)("p",null,"Now that you have a fully deployed Pulsar cluster, you can run a simple consumer and producer to show Pulsar on DC/OS in action."),(0,r.kt)("h3",{id:"download-and-prepare-the-pulsar-java-tutorial"},"Download and prepare the Pulsar Java tutorial"),(0,r.kt)("p",null,"You can clone a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial"},"Pulsar Java tutorial")," repo. This repo contains a simple Pulsar consumer and producer (you can find more information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," file in this repo)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ git clone https://github.com/streamlio/pulsar-java-tutorial\n\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://a1.dcos:6650")," in both ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ConsumerTutorial.java"},(0,r.kt)("inlineCode",{parentName:"a"},"ConsumerTutorial.java"))," file and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ProducerTutorial.java"},(0,r.kt)("inlineCode",{parentName:"a"},"ProducerTutorial.java"))," file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar://a1.dcos:6650")," endpoint is for the broker service. You can fetch the endpoint details for each broker instance from the DC/OS GUI. ",(0,r.kt)("inlineCode",{parentName:"p"},"a1.dcos")," is a DC/OS client agent that runs a broker, and you can replace it with the client agent IP address."),(0,r.kt)("p",null,"Now, you can change the message number from 10 to 10000000 in the main method in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ProducerTutorial.java"},(0,r.kt)("inlineCode",{parentName:"a"},"ProducerTutorial.java"))," file to produce more messages."),(0,r.kt)("p",null,"Then, you can compile the project code using the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ mvn clean package\n\n")),(0,r.kt)("h3",{id:"run-the-consumer-and-producer"},"Run the consumer and producer"),(0,r.kt)("p",null,"Execute this command to run the consumer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ mvn exec:java -Dexec.mainClass="tutorial.ConsumerTutorial"\n\n')),(0,r.kt)("p",null,"Execute this command to run the producer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ mvn exec:java -Dexec.mainClass="tutorial.ProducerTutorial"\n\n')),(0,r.kt)("p",null,"You see that the producer is producing messages and the consumer is consuming messages through the DC/OS GUI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS pulsar producer",src:a(91246).Z,width:"2420",height:"1664"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS pulsar consumer",src:a(63838).Z,width:"2420",height:"1664"})),(0,r.kt)("h3",{id:"view-grafana-metric-output"},"View Grafana metric output"),(0,r.kt)("p",null,"While the producer and consumer are running, you can access the running metrics from Grafana."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DC/OS pulsar dashboard",src:a(21268).Z,width:"2750",height:"1918"})),(0,r.kt)("h2",{id:"uninstall-pulsar"},"Uninstall Pulsar"),(0,r.kt)("p",null,"You can shut down and uninstall the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," application from DC/OS at any time in one of the following two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the three dots at the right end of Pulsar group and choose ",(0,r.kt)("strong",{parentName:"p"},"Delete")," on the DC/OS GUI."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DC/OS pulsar uninstall",src:a(37394).Z,width:"1980",height:"664"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the command below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ dcos marathon group remove /pulsar\n\n")))))}d.isMDXComponent=!0},176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_bookie_log-fde6f86884b7a184cb2938edafa6beb4.png"},73253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_bookkeeper_in_zookeeper-e7bb6e49a0a4531a6bf3ab040584a142.png"},64161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_bookkeeper_run-86a502879a6eb23519df95ad03cb7bcb.png"},2549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_bookkeeper_status-35b0e00bb98a7197dbab1a4f28e3f124.png"},16529:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_broker_in_zookeeper-ebd85887a3c6dc76c6789744030aecd2.png"},1248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_broker_log-a3fd1035671e5d1a0d819ad892cf0cac.png"},9053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_broker_run-b00fb75fae76809180774d8eab91fd67.png"},37897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_broker_status-61b00a547048b71805aca8d4627f3d22.png"},96112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_command_execute-d9c06d76122ca2781ccc59c7ff4c9e3d.png"},29733:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_command_execute2-fb42454bf26a1f30303104ef27c56d75.png"},63838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_consumer-007f4c668b3d19c351a4d95e755cb5c1.png"},99437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_grafana_dashboard-b7e18a783dd2aba213547239d450b2b2.png"},37889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_grafana_endpoint-0049ac82d448333d93ee80bf99824e30.png"},21268:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_metrics-48ca960a972166bc4b51d7069f458278.png"},85563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_monitor_status-5892df5ca391d3b94645e13661a44dbc.png"},91246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_producer-d6f040c537d0eb2cdb57fbf2b6df5c47.png"},13588:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_prom_endpoint-d9737c157b37712d993bc5cc301c0793.png"},20079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_prom_targets-067aeaed7d23b8bc14fc0a9ca007a6c5.png"},37394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dcos_uninstall-5cf5889ea129f2f210acb61a3090c530.png"}}]);