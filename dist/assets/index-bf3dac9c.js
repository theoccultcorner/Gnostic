import{j as c,a as s,L as S,f as U,r as d,c as x,u as L,b as R,x as A,d as l}from"./index-1a3dc146.js";const C="/dummygram/assets/lock-be2fc807.png",E=({name:a})=>c("div",{className:"lock_profile_container",children:[s("img",{src:C,alt:"User Profile Locked",className:"profile_lock_img"}),c("h3",{children:["Add ",s(S,{to:`/user/${a}`,children:a})," as friend to unlock their friend list!"]})]}),P=()=>{var m,h;const{username:a}=U(),[u,g]=d.useState([]),[p,k]=d.useState("user"),[N,F]=d.useState(!0),o=(h=(m=x)==null?void 0:m.currentUser)==null?void 0:h.uid,f=L(),{enqueueSnackbar:b}=R(),v=async t=>{try{const n=await l.collection("users").doc(t).get();return n.exists?n.data():null}catch(r){return console.error("Error fetching doc: ",r),null}};async function y(){return(await l.collection("users").doc(o).get()).data().username===a}return d.useEffect(()=>{async function t(){let r;y?r=l.collection("users").where("username","==",a).limit(1):r=l.collection("users").where("username","==",a).where("Friends","array-contains",o).limit(1);const n=await r.get().catch(e=>{b(`Error getting friends: ${e}`,{variant:"error"})});if(n.empty)F(!1);else{const e=n.docs[0].data(),i=[];k(e.name);for(const w of(e==null?void 0:e.Friends)||(e==null?void 0:e.friends)||[]){const _=await v(w);_&&i.push({..._})}g(i)}}o&&t()},[o]),s("div",{className:"friends_page_main_container",children:N?c("div",{className:"friends_page_sub_container",children:[c("h1",{className:"friend_page_header",children:[p,"'s Friend List"]}),s("ul",{className:"friend_page_friend_list_container",children:u.length>0&&u.map(t=>{const{displayName:r,photoURL:n,bio:e,username:i}=t;return c("li",{className:"friend_page_friend_list_item",children:[s("img",{src:n||A,alt:"user pic",className:"friend_page_friend_avatar",onClick:()=>f(`/user/${i}`)}),c("div",{children:[s("h3",{className:"friend_page_friend_name",onClick:()=>f(`/user/${i}`),children:r||"user"}),s("span",{className:"friend_page_friend_bio",children:e||"..."})]})]},i)})})]}):s(E,{name:a})})},j=()=>s("div",{children:s(P,{})});export{j as default};
