"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=l,u=k["".concat(d,".").concat(m)]||k[m]||c[m]||a;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(87462),l=(n(67294),n(3905));const a={title:"Links",description:"This article explains how to create & work with a Links field.",tags:["Fields","Field types","Links based types","Links"],keywords:["Fields","Field types","Links based types","Links","Create links field"]},r=void 0,o={unversionedId:"fields/field-types/links-based/links",id:"fields/field-types/links-based/links",title:"Links",description:"This article explains how to create & work with a Links field.",source:"@site/docs/070.fields/040.field-types/040.links-based/010.links.md",sourceDirName:"070.fields/040.field-types/040.links-based",slug:"/fields/field-types/links-based/links",permalink:"/fields/field-types/links-based/links",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/040.links-based/010.links.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Links based types",permalink:"/tags/links-based-types"},{label:"Links",permalink:"/tags/links"}],version:"current",sidebarPosition:10,frontMatter:{title:"Links",description:"This article explains how to create & work with a Links field.",tags:["Fields","Field types","Links based types","Links"],keywords:["Fields","Field types","Links based types","Links","Create links field"]},sidebar:"tutorialSidebar",previous:{title:"Rating",permalink:"/fields/field-types/select-based/rating"},next:{title:"Lookup",permalink:"/fields/field-types/links-based/lookup"}},d={},s=[{value:"Create a link field",id:"create-a-link-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"List linked records",id:"list-linked-records",level:3},{value:"Link new records",id:"link-new-records",level:3},{value:"Unlink records",id:"unlink-records",level:3},{value:"Related fields",id:"related-fields",level:3}],p={toc:s},k="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Links")," field type is used to establish relationship between tables & create links to other records.\nNocoDB supports following types of relations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Has-Many")," - A record in one table can have multiple records in another table. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: A ",(0,l.kt)("inlineCode",{parentName:"li"},"Country")," can have multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"Cities"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Belongs-to")," - Multiple records in one table can have a single record in another table. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: A ",(0,l.kt)("inlineCode",{parentName:"li"},"City")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Belongs-to")," a ",(0,l.kt)("inlineCode",{parentName:"li"},"Country"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Many-to-Many")," - Multiple records in one table can have multiple records in another table. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: A ",(0,l.kt)("inlineCode",{parentName:"li"},"Student")," can have multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"Subjects")," & a ",(0,l.kt)("inlineCode",{parentName:"li"},"Subject")," can have multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"Students"),". ")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Links can be created only between tables in the same database."),(0,l.kt)("li",{parentName:"ul"},"Self-referencing links are supported. (Link to the same table)"),(0,l.kt)("li",{parentName:"ul"},"For every ",(0,l.kt)("inlineCode",{parentName:"li"},"Has-Many")," relation defined, NocoDB augments ",(0,l.kt)("inlineCode",{parentName:"li"},"Belongs-to")," relationship field in the adjacent table automatically"))),(0,l.kt)("h2",{id:"create-a-link-field"},"Create a link field"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,l.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,l.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,l.kt)("li",{parentName:"ol"},"Select the field type as ",(0,l.kt)("inlineCode",{parentName:"li"},"Links")," from the dropdown."),(0,l.kt)("li",{parentName:"ol"},"Select the relation type : Either ",(0,l.kt)("inlineCode",{parentName:"li"},"Has-Many")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Many-to-Many"),"."),(0,l.kt)("li",{parentName:"ol"},"Select the table to which the relation is to be established with."),(0,l.kt)("li",{parentName:"ol"},"Configure label to be used for display in the cell. Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"Link"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Links")," (Optional)."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(94296).Z,width:"2872",height:"1546"})),(0,l.kt)("h3",{id:"cell-display"},"Cell display"),(0,l.kt)("p",null,"The cell will display number of links for a record to the related table. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(54082).Z,width:"1269",height:"512"})),(0,l.kt)("p",null,"Clicking on the link-text will open a ",(0,l.kt)("inlineCode",{parentName:"p"},"Linked Records")," modal with the list of links & associated additional information."),(0,l.kt)("h3",{id:"list-linked-records"},"List linked records"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(56509).Z,width:"1321",height:"868"})),(0,l.kt)("p",null,"A brief note about the modal components:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"This modal is displaying linked records for ",(0,l.kt)("inlineCode",{parentName:"li"},"PENELOPE")),(0,l.kt)("li",{parentName:"ol"},"Icon represents ",(0,l.kt)("inlineCode",{parentName:"li"},"Many-to-Many")," relation"),(0,l.kt)("li",{parentName:"ol"},"Linked records belong to ",(0,l.kt)("inlineCode",{parentName:"li"},"Film")," table"),(0,l.kt)("li",{parentName:"ol"},"Search bar, to narrow down the list of linked records displayed"),(0,l.kt)("li",{parentName:"ol"},"List (cards) of linked records"),(0,l.kt)("li",{parentName:"ol"},"To view additional information (expanded record), hover on the card & click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"<>")," icon"),(0,l.kt)("li",{parentName:"ol"},"Indicates total records linked"),(0,l.kt)("li",{parentName:"ol"},"Pagination bar"),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"+ Link more Records")," button to add new links : ",(0,l.kt)("a",{parentName:"li",href:"#link-new-records"},"Read more"))),(0,l.kt)("h3",{id:"link-new-records"},"Link new records"),(0,l.kt)("p",null,"Modal to add new links can be opened by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clicking on ",(0,l.kt)("inlineCode",{parentName:"li"},"+ Link more Records")," button in the ",(0,l.kt)("inlineCode",{parentName:"li"},"Linked Records")," modal"),(0,l.kt)("li",{parentName:"ul"},"Clicking on the ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," icon in the cell (appears on clicking on the cell)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(14115).Z,width:"791",height:"655"})),(0,l.kt)("p",null,"A brief note about the modal components:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Links being created are for ",(0,l.kt)("inlineCode",{parentName:"li"},"PENELOPE")),(0,l.kt)("li",{parentName:"ol"},"Icon represents ",(0,l.kt)("inlineCode",{parentName:"li"},"Many-to-Many")," relation"),(0,l.kt)("li",{parentName:"ol"},"Linked records belong to ",(0,l.kt)("inlineCode",{parentName:"li"},"Film")," table"),(0,l.kt)("li",{parentName:"ol"},"Search bar, to narrow down the list of records displayed"),(0,l.kt)("li",{parentName:"ol"},"Linked record card is displayed in blue color"),(0,l.kt)("li",{parentName:"ol"},"Records available for link are displayed in white color; use expand icon on the cord to view additional information"),(0,l.kt)("li",{parentName:"ol"},"Indicates total records linked (including the ones being linked)"),(0,l.kt)("li",{parentName:"ol"},"Pagination bar")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Multiple records can be linked at once.")),(0,l.kt)("h3",{id:"unlink-records"},"Unlink records"),(0,l.kt)("p",null,"To unlink a record, open the ",(0,l.kt)("inlineCode",{parentName:"p"},"Linked Records")," modal & click on the card of the record to be unlinked."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Multiple records can be unlinked at once.")),(0,l.kt)("h3",{id:"related-fields"},"Related fields"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/links-based/lookup"},"Lookup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/fields/field-types/links-based/rollup"},"Rollup"))))}c.isMDXComponent=!0},14115:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-link-modal-fde55380d59bdd5d597bd38e3330dbbd.png"},56509:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linked-record-modal-3e57fdb38dfa9be609959b9843ec65b4.png"},54082:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/links-cell-display-11ef22c835684c116f159598247e9b5d.png"},94296:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/links-66d99647e69bf8d24e49ec0bd0b72714.png"}}]);