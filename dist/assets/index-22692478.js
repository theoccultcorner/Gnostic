import{X as _,Y as f,Z as p,u as I,r as t,c as A,j as r,a as e,o as D,a0 as M,F as q,a1 as W,x as B,a2 as H,a3 as O,d as P}from"./index-1a3dc146.js";var o={},Q=f;Object.defineProperty(o,"__esModule",{value:!0});var g=o.default=void 0,U=Q(_()),V=p,F=(0,U.default)((0,V.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat");g=o.default=F;var d={},T=f;Object.defineProperty(d,"__esModule",{value:!0});var S=d.default=void 0,Z=T(_()),G=p,X=(0,Z.default)((0,G.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");S=d.default=X;const Y="/dummygram/assets/app-logo-848b1749.webp",J=7;function ae({onClick:C,user:N,setUser:u}){const n=I(),[w,b]=t.useState(!1),[c,x]=t.useState(""),[i,l]=t.useState(!1),[h,m]=t.useState([]),[y,E]=t.useState(700),[R,k]=t.useState(""),z=()=>{b(!w)};function L(){const{innerWidth:s}=window;return s}t.useEffect(()=>{function s(){E(L())}return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),t.useEffect(()=>{const s=setTimeout(()=>{k(c)},1e3);return()=>{clearTimeout(s)}},[c]),t.useEffect(()=>{(async()=>{const a=c;if(a.length>0){const j=(await P.collection("users").orderBy("name","asc").startAt(a.toUpperCase()).endAt(a.toLowerCase()).limit(J).get()).docs.map(v=>({id:v.id,user:v.data()}));m(j)}else m([])})()},[R]);const $=s=>{x(s.target.value)};return t.useEffect(()=>{const s=A.onAuthStateChanged(a=>{a?u(a):(u(null),n("/login"))});return()=>{s()}},[N]),!location.href.includes("login")&&!location.href.includes("signup")&&r("div",{className:"app__header",children:[y>600?e("span",{className:"nav_text_logo",children:e(D,{})}):e("span",{onClick:()=>n("/"),children:e("img",{src:Y,alt:"dummygram",className:"nav_img_logo"})}),r("div",{className:"navSpace",children:[r("div",{className:"search_bar_main_container",children:[e("div",{className:`hidden_search_bar_container ${i?"show_search_bar":"hide_search_bar"}`,children:e(M,{onClickAway:()=>l(!1),children:e("div",{className:"searchbar",onClick:z,children:i?r(q,{children:[e("input",{type:"text",className:"search_bar_input",value:c,placeholder:"Search users...",onChange:$}),e(W,{onClick:()=>l(!1),className:"icon search_icon"})]}):e(S,{className:"icon search_icon",onClick:()=>l(!0)})})})}),i&&h.length>0&&e("div",{className:"searched_user_container",children:e("ul",{className:"searched_user_sub_container",children:h.map(({id:s,user:a})=>r("li",{className:"searched_user_li",onClick:()=>n(`/user/${a.username}`),children:[e("img",{src:a!=null&&a.photoURL?a.photoURL:B,alt:a.name,className:"searched_user_avatar"}),r("span",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e("h5",{className:"searched_user_name",children:a.name}),r("p",{className:"searched_user_username",children:["@",a.username]})]})]},s))})})]}),r("div",{className:"container",children:[e("div",{className:"rowConvert",onClick:C,children:e(H,{style:{margin:"auto"},size:30})}),e("div",{className:"rowConvert",id:"chat-icon",onClick:()=>n("/chat"),children:e(g,{className:"chatIcon"})})]}),e(O,{themeClass:"themeButton"})]})]})}export{ae as default};
