"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9751],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||o[m]||l;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(8427),i=n(4397),l=(n(2784),n(876)),a=["components"],d={id:"TreeItemActions",title:"Interface: TreeItemActions",sidebar_label:"TreeItemActions",sidebar_position:0,custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/TreeItemActions",id:"api/interfaces/TreeItemActions",title:"Interface: TreeItemActions",description:"Hierarchy",source:"@site/docs/api/interfaces/TreeItemActions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TreeItemActions",permalink:"/docs/api/interfaces/TreeItemActions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TreeItemActions",title:"Interface: TreeItemActions",sidebar_label:"TreeItemActions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"TreeItem",permalink:"/docs/api/interfaces/TreeItem"},next:{title:"TreeItemRenderContext",permalink:"/docs/api/interfaces/TreeItemRenderContext"}},s=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"addToSelectedItems",id:"addtoselecteditems",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"collapseItem",id:"collapseitem",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"expandItem",id:"expanditem",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"focusItem",id:"focusitem",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"primaryAction",id:"primaryaction",children:[{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"selectItem",id:"selectitem",children:[{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"selectUpTo",id:"selectupto",children:[{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"startDragging",id:"startdragging",children:[{value:"Returns",id:"returns-7",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"startRenamingItem",id:"startrenamingitem",children:[{value:"Returns",id:"returns-8",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"toggleExpandedState",id:"toggleexpandedstate",children:[{value:"Returns",id:"returns-9",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"unselectItem",id:"unselectitem",children:[{value:"Returns",id:"returns-10",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3}],level:2}],o={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"TreeItemActions"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeItemRenderContext"},(0,l.kt)("inlineCode",{parentName:"a"},"TreeItemRenderContext"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"addtoselecteditems"},"addToSelectedItems"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"addToSelectedItems"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L29"},"types.ts:29")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"collapseitem"},"collapseItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"collapseItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L25"},"types.ts:25")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"expanditem"},"expandItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"expandItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L24"},"types.ts:24")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"focusitem"},"focusItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"focusItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L32"},"types.ts:32")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"primaryaction"},"primaryAction"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"primaryAction"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L22"},"types.ts:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectitem"},"selectItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"selectItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L27"},"types.ts:27")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectupto"},"selectUpTo"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"selectUpTo"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L30"},"types.ts:30")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startdragging"},"startDragging"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"startDragging"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L31"},"types.ts:31")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startrenamingitem"},"startRenamingItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"startRenamingItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L23"},"types.ts:23")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"toggleexpandedstate"},"toggleExpandedState"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toggleExpandedState"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L26"},"types.ts:26")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unselectitem"},"unselectItem"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"unselectItem"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/e3dcc43/packages/core/src/types.ts#L28"},"types.ts:28")))}u.isMDXComponent=!0}}]);