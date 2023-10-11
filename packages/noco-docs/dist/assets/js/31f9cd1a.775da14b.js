"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const l={title:"Percent",description:"This article explains how to create & work with a Percent field.",tags:["Fields","Field types","Numerical types","Percent"],keywords:["Fields","Field types","Numerical types","Percent","Create percent field"]},a=void 0,c={unversionedId:"fields/field-types/numerical/percent",id:"fields/field-types/numerical/percent",title:"Percent",description:"This article explains how to create & work with a Percent field.",source:"@site/docs/070.fields/040.field-types/020.numerical/030.percent.md",sourceDirName:"070.fields/040.field-types/020.numerical",slug:"/fields/field-types/numerical/percent",permalink:"/fields/field-types/numerical/percent",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/020.numerical/030.percent.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Numerical types",permalink:"/tags/numerical-types"},{label:"Percent",permalink:"/tags/percent"}],version:"current",sidebarPosition:30,frontMatter:{title:"Percent",description:"This article explains how to create & work with a Percent field.",tags:["Fields","Field types","Numerical types","Percent"],keywords:["Fields","Field types","Numerical types","Percent","Create percent field"]},sidebar:"tutorialSidebar",previous:{title:"Decimal",permalink:"/fields/field-types/numerical/decimal"},next:{title:"Currency",permalink:"/fields/field-types/numerical/currency"}},o={},p=[{value:"Create a percent field",id:"create-a-percent-field",level:2},{value:"Similar numerical fields",id:"similar-numerical-fields",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Percent")," field type is used to store percentage values. Use cases include storing ",(0,i.kt)("inlineCode",{parentName:"p"},"discount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tax"),", etc."),(0,i.kt)("h2",{id:"create-a-percent-field"},"Create a percent field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,i.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,i.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Select the field type as ",(0,i.kt)("inlineCode",{parentName:"li"},"Percent")," from the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(48074).Z,width:"2878",height:"1436"})),(0,i.kt)("h2",{id:"similar-numerical-fields"},"Similar numerical fields"),(0,i.kt)("p",null,"Following are the other numerical fields available in NocoDB, with some custom add-on features."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/number"},"Number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/decimal"},"Decimal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/currency"},"Currency"))))}u.isMDXComponent=!0},48074:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/percent-23592b0cefe5dd1b57f2659a5d8859b0.png"}}]);