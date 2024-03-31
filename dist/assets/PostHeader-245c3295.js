import{z as D,y as pe,H as me,I as fe,a8 as ve,C as $,J as T,a9 as U,r as g,K as ge,A as he,aa as be,ab as ye,a as n,N as z,Q as Ce,X as xe,Y as we,Z as ke,u as Q,j as u,x as Ie,ac as Me,ad as O,ae as Oe,b as Ee,af as $e,ag as Se,ah as Re,F as Te,ai as G,aj as V,ak as q,al as W,W as _,am as _e,an as Ne,d as X,g as Le,ao as De}from"./index-1a3dc146.js";import{L as J,M as je,T as Ae}from"./TextField-49f259e9.js";const Be=D("MuiListItemIcon",["root","alignItemsFlexStart"]),K=Be,Pe=D("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Y=Pe;function Fe(e){return pe("MuiMenuItem",e)}const He=D("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),E=He,Ue=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ze=(e,s)=>{const{ownerState:p}=e;return[s.root,p.dense&&s.dense,p.divider&&s.divider,!p.disableGutters&&s.gutters]},Ge=e=>{const{disabled:s,dense:p,divider:d,disableGutters:v,selected:m,classes:i}=e,l=Ce({root:["root",p&&"dense",s&&"disabled",!v&&"gutters",d&&"divider",m&&"selected"]},Fe,i);return $({},i,l)},Ve=me(fe,{shouldForwardProp:e=>ve(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ze})(({theme:e,ownerState:s})=>$({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${E.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${E.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:T(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${E.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:T(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${E.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${E.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${U.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${U.inset}`]:{marginLeft:52},[`& .${Y.root}`]:{marginTop:0,marginBottom:0},[`& .${Y.inset}`]:{paddingLeft:36},[`& .${K.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&$({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${K.root} svg`]:{fontSize:"1.25rem"}}))),qe=g.forwardRef(function(s,p){const d=ge({props:s,name:"MuiMenuItem"}),{autoFocus:v=!1,component:m="li",dense:i=!1,divider:h=!1,disableGutters:l=!1,focusVisibleClassName:t,role:a="menuitem",tabIndex:r,className:o}=d,c=he(d,Ue),y=g.useContext(J),C=g.useMemo(()=>({dense:i||y.dense||!1,disableGutters:l}),[y.dense,i,l]),f=g.useRef(null);be(()=>{v&&f.current&&f.current.focus()},[v]);const I=$({},d,{dense:C.dense,divider:h,disableGutters:l}),b=Ge(d),x=ye(f,p);let M;return d.disabled||(M=r!==void 0?r:-1),n(J.Provider,{value:C,children:n(Ve,$({ref:x,role:a,tabIndex:M,component:m,focusVisibleClassName:z(b.focusVisible,t),className:z(b.root,o)},c,{ownerState:I,classes:b}))})}),N=qe;var j={},We=we;Object.defineProperty(j,"__esModule",{value:!0});var Z=j.default=void 0,Xe=We(xe()),Je=ke,Ke=(0,Xe.default)((0,Je.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHorizOutlined");Z=j.default=Ke;const Ye=({mouseOnProfileImg:e,userData:s})=>{const[p,d]=g.useState(!1),{name:v,username:m,avatar:i,posts:h,bio:l,followers:t,following:a,country:r}=s,o=Q();function c(){d(!0)}function y(){setTimeout(()=>{d(!1)},1e3)}function C(f){return f.substr(0,90)+" ..."}return u("div",{style:{display:e||p?"flex":"none"},onMouseEnter:c,onMouseLeave:y,className:"profile-dialog-box-container",children:[u("div",{style:{display:"flex",gap:"2rem"},children:[n("img",{src:i||Ie,alt:v,className:"dialog-box-img",onClick:()=>o(`/user/${m}`)}),u("div",{className:"dialog-box-name-container",style:{marginTop:"10px"},children:[n("h4",{className:"dialog-box-display-name",onClick:()=>o(`/user/${m}`),children:v}),u("h5",{className:"dialog-box-username",children:["@",m]}),u("span",{className:"dialog-box-username",children:[n(Me,{className:"hover-location-icon",fontSize:"small"})," ",r]})]})]}),u("p",{className:"dialog-box-bio",children:["Bio:"," ",n("span",{style:{fontWeight:"400",fontSize:"13px",lineHeight:"0.0rem"},children:(l==null?void 0:l.length)>90?C(l):l})]}),u("p",{className:"dialog-box-bio",children:["Posts: ",h]}),t&&a&&u("div",{className:"dialog-box-follow-container",children:[u("p",{children:[n("span",{children:a})," Following"]}),u("p",{children:[n("span",{children:t})," Followers"]})]})]})};var ee={exports:{}};(function(e,s){(function(p,d){d()})(O,function(){function p(t,a){return typeof a>"u"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function d(t,a,r){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){l(o.response,a,r)},o.onerror=function(){console.error("could not download file")},o.send()}function v(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function m(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof O=="object"&&O.global===O?O:void 0,h=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(t,a,r){var o=i.URL||i.webkitURL,c=document.createElement("a");a=a||t.name||"download",c.download=a,c.rel="noopener",typeof t=="string"?(c.href=t,c.origin===location.origin?m(c):v(c.href)?d(t,a,r):m(c,c.target="_blank")):(c.href=o.createObjectURL(t),setTimeout(function(){o.revokeObjectURL(c.href)},4e4),setTimeout(function(){m(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,r){if(a=a||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(p(t,r),a);else if(v(t))d(t,a,r);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout(function(){m(o)})}}:function(t,a,r,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof t=="string")return d(t,a,r);var c=t.type==="application/octet-stream",y=/constructor/i.test(i.HTMLElement)||i.safari,C=/CriOS\/[\d]+/.test(navigator.userAgent);if((C||c&&y||h)&&typeof FileReader<"u"){var f=new FileReader;f.onloadend=function(){var x=f.result;x=C?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=x:location=x,o=null},f.readAsDataURL(t)}else{var I=i.URL||i.webkitURL,b=I.createObjectURL(t);o?o.location=b:location.href=b,o=null,setTimeout(function(){I.revokeObjectURL(b)},4e4)}});i.saveAs=l.saveAs=l,e.exports=l})})(ee);var Qe=ee.exports;const at=({postId:e,user:s,postData:p,postHasImages:d,timestamp:v})=>{const m=Oe(v),{fullScreen:i,isAnonymous:h}=s,{username:l,caption:t,imageUrl:a,displayName:r,avatar:o}=p,[c,y]=g.useState(!1),[C,f]=g.useState(!1),[I,b]=g.useState(!1),[x,M]=g.useState(t),[te,A]=g.useState(!1),[ae,oe]=g.useState({}),{enqueueSnackbar:B}=Ee(),L=!!C,ne=48,S=Q(),se=$e();g.useEffect(()=>{async function k(){try{const H=await X.collection("users").where("uid","==",p.uid).limit(1).get();if(H.empty)setUserExists(!1);else{const w=H.docs[0].data();oe({name:w.name,username:w.username,avatar:w.photoURL,uid:w.uid,posts:w.posts.length,bio:w.bio?w.bio:"Hey there! I am using Dummygram.",followers:"",following:"",country:w.country?w.country:"",storyTimestamp:w.storyTimestamp})}}catch(R){B(`Error Occurred: ${R}`,{variant:"error"})}}k()},[]);const ie=()=>{y(!0),f(null)},re=async()=>{b(!0)},P=()=>{M(t),b(!1)},le=()=>{const k=JSON.parse(a)[0].imageUrl;Qe.saveAs(k,"image")},ce=async()=>{const k=Le(X,"posts",e);try{await De(k,{caption:x})}catch(R){alert(R)}b(!1)},F=()=>{y(!1)};function de(){A(!0)}function ue(){setTimeout(()=>{A(!1)},1200)}return u("div",{className:"post__header",children:[n(Se,{className:"post__avatar  flex avatar",alt:r,src:o,onClick:()=>S("/"+(h?"signup":"user/"+l)),onMouseEnter:de,onMouseLeave:ue}),n(Ye,{mouseOnProfileImg:te,userData:ae}),u("div",{className:"header-data",children:[n("h3",{onClick:()=>{S("/"+(h?"signup":"posts/"+e))},className:"post__username",children:r}),n("p",{className:"post__time",children:m})]}),u("div",{className:"social__icon__last",children:[!se.pathname.includes("/user")&&n(Re,{"aria-label":"more",id:"long-button","aria-controls":L?"long-menu":void 0,"aria-expanded":L?"true":void 0,"aria-haspopup":"true",onClick:k=>h?S("/signup"):f(k.currentTarget),sx:{color:"var(--color)"},children:n(Z,{})}),u(je,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:C,open:L,onClose:()=>f(null),PaperProps:{style:{maxHeight:ne*4,width:"18ch"}},children:[s&&r===s.displayName&&n(N,{onClick:ie,children:" Delete "}),s&&r===s.displayName&&n(N,{onClick:re,children:" Edit "}),d&&n(N,{onClick:le,children:" Download "}),n(N,{onClick:()=>S(`/user/${l}`),children:"Visit Profile"})]}),n(Te,{children:u(G,{fullWidth:!0,open:I,onClose:P,children:[n(V,{children:"Change Caption"}),n(q,{children:n(Ae,{autoFocus:!0,margin:"dense",id:"name",label:"Enter Your Caption",type:"text",fullWidth:!0,variant:"standard",onChange:k=>M(k.target.value),value:x})}),u(W,{children:[n(_,{onClick:P,children:"Cancel"}),n(_,{onClick:ce,children:"Submit"})]})]})}),u(G,{fullScreen:i,open:c,onClose:F,"aria-labelledby":"responsive-dialog-title",children:[n(V,{id:"responsive-dialog-title",children:"Delete Post?"}),n(q,{children:n(_e,{children:"Are you sure you want to delete this post?"})}),u(W,{children:[n(_,{onClick:F,children:"Cancel"}),n(_,{onClick:()=>Ne(s==null?void 0:s.uid,e,a,B,y),children:"Delete"})]})]})]})]})};export{at as default};
