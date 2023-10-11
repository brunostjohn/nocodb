"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5650],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>b});var i=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function a(e,t){if(null==e)return{};var l,i,o=function(e,t){if(null==e)return{};var l,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)l=r[i],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)l=r[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var l=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(l),u=o,b=p["".concat(c,".").concat(u)]||p[u]||f[u]||r;return l?i.createElement(b,n(n({ref:t},d),{},{components:l})):i.createElement(b,n({ref:t},d))}));function b(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=l.length,n=new Array(r);n[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,n[1]=a;for(var s=2;s<r;s++)n[s]=l[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,l)}u.displayName="MDXCreateElement"},60920:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=l(87462),o=(l(67294),l(3905));const r={title:"Checkbox",description:"This article explains how to create & work with a Checkbox field.",tags:["Fields","Field types","Custom types","Checkbox"],keywords:["Fields","Field types","Custom types","Checkbox","Create checkbox field"]},n=void 0,a={unversionedId:"fields/field-types/select-based/checkbox",id:"fields/field-types/select-based/checkbox",title:"Checkbox",description:"This article explains how to create & work with a Checkbox field.",source:"@site/docs/070.fields/040.field-types/030.select-based/020.checkbox.md",sourceDirName:"070.fields/040.field-types/030.select-based",slug:"/fields/field-types/select-based/checkbox",permalink:"/fields/field-types/select-based/checkbox",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/030.select-based/020.checkbox.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Custom types",permalink:"/tags/custom-types"},{label:"Checkbox",permalink:"/tags/checkbox"}],version:"current",sidebarPosition:20,frontMatter:{title:"Checkbox",description:"This article explains how to create & work with a Checkbox field.",tags:["Fields","Field types","Custom types","Checkbox"],keywords:["Fields","Field types","Custom types","Checkbox","Create checkbox field"]},sidebar:"tutorialSidebar",previous:{title:"Single Select",permalink:"/fields/field-types/select-based/single-select"},next:{title:"Multi Select",permalink:"/fields/field-types/select-based/multi-select"}},c={},s=[{value:"Create a checkbox field",id:"create-a-checkbox-field",level:2},{value:"Cell display",id:"cell-display",level:3},{value:"Supported icons",id:"supported-icons",level:3},{value:"Related fields",id:"related-fields",level:2}],d={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The checkbox field type is used to store boolean values. It can be used to store a simple yes/no value, or true/false, or any other boolean value."),(0,o.kt)("h2",{id:"create-a-checkbox-field"},"Create a checkbox field"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,o.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,o.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,o.kt)("li",{parentName:"ol"},"Select the field type as ",(0,o.kt)("inlineCode",{parentName:"li"},"Checkbox")," from the dropdown."),(0,o.kt)("li",{parentName:"ol"},"Select icon for the field; defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"check")," icon (Optional)."),(0,o.kt)("li",{parentName:"ol"},"Select color for the field; defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"grey")," (Optional)."),(0,o.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:l(25409).Z,width:"2874",height:"1396"})),(0,o.kt)("h3",{id:"cell-display"},"Cell display"),(0,o.kt)("p",null,"Cell displays the icon in the color selected for the field. A true value will be represented by a checked icon or a filled icon",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image",src:l(54081).Z,width:"1268",height:"513"})),(0,o.kt)("h3",{id:"supported-icons"},"Supported icons"),(0,o.kt)("p",null,"NocoDB supports the following icons for the checkbox field type.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image",src:l(43321).Z,width:"401",height:"479"})),(0,o.kt)("h2",{id:"related-fields"},"Related fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fields/field-types/select-based/rating"},"Rating"))))}f.isMDXComponent=!0},54081:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/attachment-cell-display-d0e036b051275db64f5a516ad8c604b5.png"},43321:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/checkbox-icon-50a0b9c5edbae35ca181d433419c943c.png"},25409:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/checkbox-d62bbc732b50b8328ce528b7a9496cee.png"}}]);