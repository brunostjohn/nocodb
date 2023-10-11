"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,u=m["".concat(o,".").concat(c)]||m[c]||f[c]||l;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:n,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Date",description:"This article explains how to create & work with a Date field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create date field"]},i=void 0,d={unversionedId:"fields/field-types/date-time-based/date",id:"fields/field-types/date-time-based/date",title:"Date",description:"This article explains how to create & work with a Date field.",source:"@site/docs/070.fields/040.field-types/070.date-time-based/020.date.md",sourceDirName:"070.fields/040.field-types/070.date-time-based",slug:"/fields/field-types/date-time-based/date",permalink:"/fields/field-types/date-time-based/date",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/070.date-time-based/020.date.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Date & Time",permalink:"/tags/date-time"}],version:"current",sidebarPosition:20,frontMatter:{title:"Date",description:"This article explains how to create & work with a Date field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create date field"]},sidebar:"tutorialSidebar",previous:{title:"Date Time",permalink:"/fields/field-types/date-time-based/date-time"},next:{title:"Time",permalink:"/fields/field-types/date-time-based/time"}},o={},p=[{value:"Create a date field",id:"create-a-date-field",level:2},{value:"Supported date formats",id:"supported-date-formats",level:3},{value:"Related fields",id:"related-fields",level:2}],s={toc:p},m="wrapper";function f(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Date")," field type is used to store date values. NocoDB supports a wide range of date formats, as detailed in the table below."),(0,n.kt)("h2",{id:"create-a-date-field"},"Create a date field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,n.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,n.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,n.kt)("li",{parentName:"ol"},"Select the field type as ",(0,n.kt)("inlineCode",{parentName:"li"},"Date")," from the dropdown."),(0,n.kt)("li",{parentName:"ol"},"Configure ",(0,n.kt)("inlineCode",{parentName:"li"},"Date Format")),(0,n.kt)("li",{parentName:"ol"},"Configure default value (Optional)"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(24176).Z,width:"2876",height:"1336"})),(0,n.kt)("h3",{id:"supported-date-formats"},"Supported date formats"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-09-22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"YYYY/MM/DD"),(0,n.kt)("td",{parentName:"tr",align:null},"2023/09/22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DD-MM-YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"22-09-2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MM-DD-YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"09-22-2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DD/MM/YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"22/09/2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MM/DD/YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"09/22/2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DD MM YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"22 09 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MM DD YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"09 22 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"YYYY MM DD"),(0,n.kt)("td",{parentName:"tr",align:null},"2023 09 22")))),(0,n.kt)("h2",{id:"related-fields"},"Related fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/date-time"},"DateTime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/time"},"Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/duration"},"Duration"))))}f.isMDXComponent=!0},24176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/date-f31bd796ffe546c4ad5c3bd0def5df03.png"}}]);