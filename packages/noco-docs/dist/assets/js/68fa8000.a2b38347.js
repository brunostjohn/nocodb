"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7549],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>u});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),a=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):p(p({},t),e)),i},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=a(i),y=n,u=d["".concat(l,".").concat(y)]||d[y]||f[y]||o;return i?r.createElement(u,p(p({ref:t},s),{},{components:i})):r.createElement(u,p({ref:t},s))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,p=new Array(o);p[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,p[1]=c;for(var a=2;a<o;a++)p[a]=i[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,i)}y.displayName="MDXCreateElement"},83407:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=i(87462),n=(i(67294),i(3905));const o={title:"Specific DB type",description:"This article explains how to create & work with a Specific DB Type field.",tags:["Fields","Field types","Custom types","Specific DB type"],keywords:["Fields","Field types","Custom types","Specific DB type","Create specific db type field"]},p=void 0,c={unversionedId:"fields/field-types/custom-types/specific-db-type",id:"fields/field-types/custom-types/specific-db-type",title:"Specific DB type",description:"This article explains how to create & work with a Specific DB Type field.",source:"@site/docs/070.fields/040.field-types/050.custom-types/070.specific-db-type.md",sourceDirName:"070.fields/040.field-types/050.custom-types",slug:"/fields/field-types/custom-types/specific-db-type",permalink:"/fields/field-types/custom-types/specific-db-type",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/050.custom-types/070.specific-db-type.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Specific DB type",permalink:"/tags/specific-db-type"}],version:"current",sidebarPosition:70,frontMatter:{title:"Specific DB type",description:"This article explains how to create & work with a Specific DB Type field.",tags:["Fields","Field types","Custom types","Specific DB type"],keywords:["Fields","Field types","Custom types","Specific DB type","Create specific db type field"]},sidebar:"tutorialSidebar",previous:{title:"Geometry",permalink:"/fields/field-types/custom-types/geometry"},next:{title:"JSON",permalink:"/fields/field-types/custom-types/json"}},l={},a=[{value:"Create a Specific DB Type field",id:"create-a-specific-db-type-field",level:2}],s={toc:a},d="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-a-specific-db-type-field"},"Create a Specific DB Type field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Specific DB Type")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Configure default value for the field (Optional)"),(0,n.kt)("li",{parentName:"ol"},"Provide DB specific data type configurations"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(23407).Z,width:"2874",height:"1522"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Specific DB type is available only for external Data source connections")))}f.isMDXComponent=!0},23407:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/specific-db-type-8f55b4cd889fbfd2d9a88abc8a4c2b97.png"}}]);