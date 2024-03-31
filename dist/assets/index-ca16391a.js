import{X as J,Y as Q,Z as W,r as i,c as P,b as ee,u as ae,a,a0 as te,j as n,bb as se,x as re,s as A,e as ne,a5 as F,p as x,d as y,aK as le}from"./index-1a3dc146.js";import{d as ie}from"./Delete-4ed43f71.js";var C={},oe=Q;Object.defineProperty(C,"__esModule",{value:!0});var T=C.default=void 0,ce=oe(J()),ue=W,de=(0,ce.default)((0,ue.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");T=C.default=de;const ve=({userData:o,username:E,setIsEditing:c,setUserData:N})=>{var j,$;const[l,U]=i.useState({name:o.name,newUsername:E,bio:o.bio,country:o.country,avatar:o.avatar,uid:o.uid}),f=(j=P)==null?void 0:j.currentUser,[s,k]=i.useState(null),[B,u]=i.useState(!1),[D,w]=i.useState(!0),[q,R]=i.useState({}),{enqueueSnackbar:m}=ee(),p=i.useRef(""),{name:d,newUsername:h,bio:_,country:I,uid:L,avatar:v}=l,M=ae();function z(e,t=500){let r;return(...b)=>{clearTimeout(r),r=setTimeout(()=>{e.apply(this,b)},t)}}const O=()=>{const e=p.current;/^[a-z][a-z0-9_]{4,20}$/.test(e)?z(K)():w(!1)},K=async()=>{const e=p.current;(await y.collection("users").where("username","==",e).get()).empty?w(!0):w(!1)};function g(e){U(t=>({...t,[e.target.name]:e.target.value}))}const V=e=>{e.target.files[0]&&(k(e.target.files[0]),U(t=>({...t,avatar:URL.createObjectURL(e.target.files[0])})))};function X(){k(""),U(e=>({...e,avatar:""}))}async function S(e){try{const t=y.batch();await P.currentUser.updateProfile({displayName:d,photoURL:e});const r=y.collection("users").doc(L),b={photoURL:e,name:d,username:h,bio:_,country:I};le(b),t.update(r,b),(await y.collection("posts").where("uid","==",L).get()).forEach(G=>{const H=G.ref;t.update(H,{avatar:e,displayName:d,username:h})}),await t.commit()}catch(t){throw console.error("Error updating profile:",t),u(!1),t}}function Y(){if(l.name==="")R("**Name is Required!");else if(l.newUsername==="")R("**User name is Required!");else return R(""),!0}const Z=()=>{if(!Y())return;const e=f.photoURL;if(s&&typeof s=="object")A.ref(`images/${s==null?void 0:s.name}`).put(s).on("state_changed",()=>{},r=>{ne(),m(r.message,{variant:"error"})},()=>{A.ref("images").child(s==null?void 0:s.name).getDownloadURL().then(async r=>{e&&await F(e),await S(r)}).then(()=>{N(l),x(),m("Upload Successfull",{variant:"success"})}).finally(()=>{c(!1),u(!1)})});else if((s==null?void 0:s.length)===0){async function t(){e&&await F(e),await S(s).then(()=>{N(l),x(),m("Upload Successfull",{variant:"success"})}).finally(()=>{c(!1),u(!1)})}t()}else{async function t(){await S(e).then(()=>{N(l),M(`/user/${h}`),x(),m("Upload Successfull",{variant:"success"})}).finally(()=>{c(!1),u(!1)})}t()}};return a(te,{onClickAway:()=>c(!1),children:a("div",{className:"edit-profile-container",children:n("div",{className:"edit-profile-sub-container",children:[n("div",{className:"edit-profile-header",children:[a(T,{onClick:()=>c(!1),style:{display:"flex",marginTop:"6px",cursor:"pointer"}}),a("h2",{children:"Edit Profile"}),a("div",{children:a("button",{className:"edit-profile-save-btn",onClick:()=>{Z(),u(!0)},disabled:B,children:"Save"})})]}),n("div",{className:"edit-profile-image",children:[a("input",{type:"file",id:"file",className:"file",onChange:V,accept:"image/*"}),a("label",{htmlFor:"file",children:a(se,{className:"edit-profile-image-icon"})}),a("img",{src:(v==null?void 0:v.length)>0?v:re,alt:d,className:"edit-profile-img"}),(($=f==null?void 0:f.photoURL)==null?void 0:$.length)>0&&n("button",{className:"delete_dp_btn",onClick:X,children:[a(ie,{})," Remove DP"]})]}),n("div",{className:"edit-user-details",children:[a("div",{className:"user-field",children:n("label",{defaultValue:"Name",children:[a("p",{className:"edit-profile-label",children:"Name"}),a("input",{type:"text",value:d,name:"name",className:"edit-profile-input name-input",onChange:g}),q==="**Name is Required!"&&a("small",{className:"errorMsg",children:"*Name is required!"})]})}),a("div",{className:"user-field",children:n("label",{htmlFor:"",children:[a("p",{className:"edit-profile-label",children:"Username"}),a("input",{type:"text",value:h,name:"newUsername",className:`edit-profile-input username-input ${D?"":"error-border"}`,ref:p,onChange:e=>{p.current=e.target.value.trim(),g(e),O()}}),q==="**User name is Required!"&&a("small",{className:"errorMsg",children:"*User name is required!"})]})}),a("div",{className:"user-field",children:n("label",{htmlFor:"",children:[a("p",{className:"edit-profile-label",children:"Country"}),a("input",{type:"text",name:"country",value:I,className:"edit-profile-input country-input",onChange:g})]})})]}),n("label",{htmlFor:"",children:[a("p",{style:{paddingTop:"0"},className:"edit-profile-label",children:"Bio"}),a("textarea",{name:"bio",id:"",maxLength:170,value:_,className:"edit-profile-input edit-profile-bio",onChange:g})]})]})})})};export{ve as default};