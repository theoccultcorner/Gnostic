import{X as _,Y as j,Z as R,b as q,r as s,a,U as w,F as A,j as n,L as T,ap as $,ai as z,aj as E,ak as I,am as U,al as B,W as g,aq as M,g as F,c as L,d as O,h as Y,ar as H}from"./index-1a3dc146.js";import{R as P}from"./index-26fa8919.js";var c={},W=j;Object.defineProperty(c,"__esModule",{value:!0});var v=c.default=void 0,X=W(_()),Z=R,G=(0,X.default)((0,Z.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");v=c.default=G;const Q=({postId:r,comments:i,user:d,fullScreen:D})=>{const{enqueueSnackbar:x}=q(),{isAnonymous:u}=d,[C,l]=s.useState(""),[S,o]=s.useState(!1),[b,m]=s.useState(null);s.useEffect(()=>{async function e(){var p,f;const t=F(O,"users",(f=(p=L)==null?void 0:p.currentUser)==null?void 0:f.uid),h=await Y(t);h.exists()?l(h.data().username):l("guest")}u?l("guest"):e().catch(t=>{console.error("Error fetching username:",t)})},[]);const k=(e,t)=>{H(e,t,x)},N=e=>{m(e),o(!0)},y=()=>{m(null),o(!1)};return a(w,{sx:{overflowY:"scroll","&::-webkit-scrollbar":{width:0}},borderRadius:"10px",maxHeight:"40vh",marginTop:"10px",children:i.length?a(A,{children:i.map(e=>{var t;return n("div",{children:[n("div",{className:"commentCard",children:[n("div",{children:[n(T,{className:"comment-doer",to:`/${u?"signup":`user/${e.content.username}`}`,children:[e.content.avatar?a("img",{src:e.content.avatar,alt:"profile picture",className:"post-profile-picture"}):a(v,{className:"icon"})," ",a("span",{className:"comment-doer-name",children:e.content.displayName})]}),a("p",{className:"comment",children:a(P,{postId:r,children:e.content.text})})]}),n("div",{children:[d&&((t=e==null?void 0:e.content)==null?void 0:t.username)==C&&a($,{fontSize:"small",className:"comment-delete-icon",onClick:()=>N(e.id)}),n(z,{fullScreen:D,open:S,onClose:()=>o(!1),"aria-labelledby":"responsive-dialog-title",children:[a(E,{id:"responsive-dialog-title",children:"Delete Comment?"}),a(I,{children:a(U,{children:"Are you sure you want to delete this Comment?"})}),n(B,{onClick:y,children:[a(g,{children:"Cancel"}),a(g,{onClick:()=>{k(r,b)},children:"Delete"})]})]})]})]}),a(M,{})]},e.id)})}):a("span",{style:{color:"var(--color)"},children:"No Comments"})})};export{Q as default};
