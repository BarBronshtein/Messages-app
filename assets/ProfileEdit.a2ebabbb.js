import{r as t,_ as o,j as a,F as s,b as e}from"./index.87dd1767.js";import{_ as i}from"./_virtual___federation__.ada52a2f.js";const n=await i("auth","./Personal-Info-Edit");let{PersonalInfoEdit:d}=n;const l=t.exports.lazy(()=>o(()=>import("./AppHeader.d4f3a873.js"),["assets/AppHeader.d4f3a873.js","assets/_virtual___federation__.ada52a2f.js","assets/index.87dd1767.js","assets/index.eef87990.css"])),c=()=>{const r=t.exports.useRef(null);return t.exports.useEffect(()=>{d?.(r.current)},[]),a(s,{children:[e(t.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:e(l,{})}),e("div",{className:"profile-edit",ref:r})]})};export{c as default};