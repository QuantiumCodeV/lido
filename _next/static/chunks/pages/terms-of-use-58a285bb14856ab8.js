(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{8123:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-of-use",function(){return n(3642)}])},4847:function(e,t,n){"use strict";n.d(t,{LC:function(){return directiveCustomComponent},ni:function(){return getAnchor},Ks:function(){return setCustomComponent}});var r=n(1272),i=n(1623),o=n(9256);let getSkeletonAst=e=>({type:"root",children:e}),getAnchor=e=>(null!=e?e:"").toLowerCase().replace(/[^a-z\d\s]/giu,"").trim().replace(/\s+/giu,"-"),setCustomComponent=e=>t=>{var n,r;let{node:i,name:o,children:l}=t;return null!==(r=null===(n=e[o])||void 0===n?void 0:n.call(e,{...i.properties,children:l}))&&void 0!==r?r:null},directiveCustomComponent=()=>e=>{(0,i.Vn)(e,"containerDirective",e=>{let t;try{let n=getSkeletonAst(e.children);t=r.ZP.load((0,o.x)(n,{bullet:"-"}))}catch(e){t={}}let n=t instanceof Object?t:{data:t};e.attributes={...e.attributes,...n,name:e.name},e.data={hName:"custom-component",hProperties:e.attributes}})};var l=n(8209),s=n(2974);n(6484),l.Z,s.Z,l.Z,s.Z},3642:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return terms_of_use}});var r=n(5893),i=n(7165),o=n(7294),l=n(6156),s=n(9601),a=n.n(s),c=n(4847),u=n(8209);let groupByHeading=(e,t)=>{let n=[];for(let r of e){if("heading"===r.type&&r.depth===t)break;n.push(r)}let r=[];for(let o of e.slice(n.length)){var i;if("heading"===o.type&&o.depth===t){let e=o.children.map(e=>{let{value:t}=e;return t}).join(""),n=(0,c.ni)(e);r.push({type:"containerDirective",name:"heading-group-".concat(t),attributes:{title:e,anchor:n},children:[]})}null===(i=r.at(-1))||void 0===i||i.children.push(o)}return[n,r]},getHeaderContent=e=>{var t,n,r;let i=e.find(e=>"heading"===e.type&&1===e.depth),o={type:"containerDirective",name:"tou-title",children:null!==(t=null==i?void 0:i.children)&&void 0!==t?t:[]},l=e.find(e=>"paragraph"===e.type),s={type:"containerDirective",name:"tou-description",children:null!==(n=null==l?void 0:l.children)&&void 0!==n?n:[]},a=e.find(e=>"blockquote"===e.type),c={type:"containerDirective",name:"tou-warning",children:null!==(r=null==a?void 0:a.children)&&void 0!==r?r:[]};return[o,s,c]},wrapWithNumberedBlock=e=>{let[t,n]=groupByHeading(e.children,4);return{...e,children:[...t.slice(1),...n.map(e=>{var t,n;let r=null===(t=e.attributes)||void 0===t?void 0:t.title,[,i,o]=Array.from(null!==(n=null==r?void 0:r.match(/\d+\.(\d+) (.*)/))&&void 0!==n?n:[]);return{type:"containerDirective",name:"tou-numbered-block",attributes:{number:null==i?void 0:i.padStart(2,"0"),title:o},children:[{...e,children:e.children.slice(1)}]}})]}},wrapWithBlocklist=e=>{let[t,n]=groupByHeading(e.children,3);return{...e,children:[...t,{type:"containerDirective",name:"tou-with-blocklist",children:n.map(e=>{var t,n;let r=null!==(n=null===(t=e.attributes)||void 0===t?void 0:t.title)&&void 0!==n?n:"",i=r.substring(r.indexOf(" ")+1);return{type:"containerDirective",name:"tou-blocklist-segment",attributes:{title:i},children:[wrapWithNumberedBlock(e)]}})}]}},generateTitle=e=>{let[t,n,i]=e.split(" "),o=i.length<=8?i:(0,r.jsx)("span",{className:a().titleUrl,children:i});return(0,r.jsxs)("h1",{className:a().title,children:[t," ",n," ",o]})},wrapWithSidebar=e=>({type:"containerDirective",name:"tou-with-sidebar",children:e.map(e=>({type:"containerDirective",name:"tou-sidebar-segment",attributes:e.attributes,children:[wrapWithBlocklist(e)]}))}),getTimestampComponent=e=>({type:"containerDirective",name:"tou-timestamp",children:[{type:"paragraph",children:[{type:"text",value:"Page last updated: ".concat(e)}]}]}),injectCustomComponents=e=>{let{timestamp:t}=e;return e=>{let[,n]=groupByHeading(e.children,2);e.children=[{type:"containerDirective",name:"tou-header",children:[...getHeaderContent(e.children),getTimestampComponent(t)]},wrapWithSidebar(n)]}},d={a:e=>{let{href:t,children:n}=e;return(0,r.jsx)(i.Un,{href:t,children:n})},"custom-component":(0,c.Ks)({"tou-header":e=>{let{children:t}=e;return(0,r.jsx)(i.W2,{children:(0,r.jsx)("div",{className:a().header,children:t})})},"tou-title":e=>{let{data:t}=e;return(0,r.jsxs)("div",{className:a().titleWrapper,children:[generateTitle(t),(0,r.jsx)("div",{className:a().shadowRed})]})},"tou-description":e=>{let{children:t}=e;return(0,r.jsx)("span",{className:a().description,children:t})},"tou-warning":e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:a().warningWrapper,children:[(0,r.jsx)("div",{className:a().warning,children:t}),(0,r.jsx)("div",{className:a().shadowBlue})]})},"tou-timestamp":e=>{let{children:t}=e;return(0,r.jsx)("div",{className:a().timestamp,children:t})},"tou-with-sidebar":e=>{let{children:t}=e;return(0,r.jsx)(i.qv,{className:a().content,children:o.Children.map(t,e=>(0,o.isValidElement)(e)?(0,r.jsx)(i.fS,{className:a().sidebarSegment,...e.props}):e)})},"tou-with-blocklist":e=>{let{children:t}=e;return(0,r.jsx)(i.WD,{children:o.Children.map(t,e=>(0,o.isValidElement)(e)?(0,r.jsx)(i.qU,{...e.props}):e)})},"tou-numbered-block":e=>{let{children:t,title:n,number:i}=e;return(0,r.jsxs)("div",{className:a().numberedBlock,children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("span",{className:a().numberedBlockPrefix,children:i})," ",n]}),(0,r.jsx)("div",{children:t})]})},"heading-group-2":e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})},"heading-group-3":e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})},"heading-group-4":e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})},"heading-group-5":e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})}})},TermsOfUseContent=e=>{let{content:t,timestamp:n}=e;return(0,r.jsx)(l.D,{remarkPlugins:[u.Z,[injectCustomComponents,{timestamp:n}],c.LC],components:d,children:null!=t?t:""})};var m=n(1752),p=n.n(m),h=n(6484);let{publicRuntimeConfig:g}=p()();var _=!0,terms_of_use=e=>{let{timestamp:t,content:n}=e;return(0,r.jsxs)(i.Ar,{children:[(0,r.jsx)(i.h_,{title:"Lido DAO Terms of Use",metaDescription:"Terms of use govern anyone accessing, and using of Lido Protocol",description:"Terms of use govern accessing and using of Lido Protocol",urlImg:"/static/meta/terms-of-use.png",url:"".concat(g.LANDING_URL).concat(h.n.TERMS_OF_USE)}),(0,r.jsx)(TermsOfUseContent,{content:n,timestamp:t})]})}},9601:function(e){e.exports={header:"terms-of-use-content_header__MFyLo",title:"terms-of-use-content_title__hWOxE",titleUrl:"terms-of-use-content_titleUrl__7Xxta",titleWrapper:"terms-of-use-content_titleWrapper__b9ezR",shadowRed:"terms-of-use-content_shadowRed__gECU7",description:"terms-of-use-content_description__a8zRO",warning:"terms-of-use-content_warning__ipSbg",warningWrapper:"terms-of-use-content_warningWrapper__rjH6f",shadowBlue:"terms-of-use-content_shadowBlue__gxtei",timestamp:"terms-of-use-content_timestamp__qE1Nz",sidebarSegment:"terms-of-use-content_sidebarSegment__VRrKm",content:"terms-of-use-content_content__iw50t",numberedBlock:"terms-of-use-content_numberedBlock__oGb6y",numberedBlockPrefix:"terms-of-use-content_numberedBlockPrefix__y7iaR"}}},function(e){e.O(0,[156,849,774,888,179],function(){return e(e.s=8123)}),_N_E=e.O()}]);