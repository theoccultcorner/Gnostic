import{r as i,a,j as n,aF as h,aG as p,aH as g}from"./index-1a3dc146.js";const C=({slides:e,doubleClickHandler:o,height:m=350})=>{const[t,r]=i.useState(0),u=()=>{r(t===0?e.length-1:t-1)},l=()=>{r(t===e.length-1?0:t+1)};return i.useEffect(()=>(setTimeout(l,1e3),()=>clearTimeout(l)),[e]),e.length>0&&a("div",{className:"slider",style:{height:m},onDoubleClick:o,children:e.map(({imageUrl:s,thumbnail:d},c)=>n("div",{style:{display:c===t?"contents":"none",width:"100%"},className:c===t?"slide active":"slide",children:[a(h.LazyLoadImage,{className:"image post__image",src:s,placeholderSrc:d,effect:"blur",alt:" upload",delayTime:1e3}),e.length>1&&n("div",{className:"slider-action",children:[a(p,{className:"circle",onClick:u,title:"View Previous Image"}),a(g,{className:"chevron",onClick:l,title:"View Next Image"})]})]},s))})};export{C as default};
