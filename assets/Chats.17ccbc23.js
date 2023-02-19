import{r as c,b as t,g as E,u as p,a as b,e as S,R,j as a,c as C,F as I,L as M,i as L}from"./index.9f761eb4.js";import{A as k,u as y,h as A,b as O,i as v,j as T,s as w,I as _,k as z,l as B}from"./useFormRegister.68afebb7.js";import{_ as U}from"./_virtual___federation__.a9533234.js";const $=await U("auth","./Modal");let{ProfileModal:P}=$;const j=()=>{const e=c.exports.useRef(null);return c.exports.useEffect(()=>{P(e.current)},[]),t("div",{ref:e})};function D(){const e=sessionStorage.getItem("theme")==="dark"?"light":"dark";return sessionStorage.setItem("theme",e),{type:E,theme:e}}const F=({isShown:e,onClose:r})=>{const s=c.exports.useRef(null),l=c.exports.useRef(document.getElementById("modal-root")),i=p(),{theme:d}=b(n=>n.themeReducer),g=()=>i(D()),[u,h]=c.exports.useState(!1),m=S(),x=c.exports.useCallback(n=>{const N=n.target;!N||!s.current||s.current?.contains(N)||(r(),h(()=>!1),l.current.classList.add("z-[-1]","cursor-default"))},[]);c.exports.useLayoutEffect(()=>(l.current?.addEventListener("click",x),()=>l.current?.removeEventListener("click",x)),[]);const o="relative bg-[#242526] p-2 z-10 text-white transition-all w-[80vw] cursor-default max-w-[320px] full-vh "+(e?"translate-x-[0]":"translate-x-[-100vw]"),f=[{name:"chats",icon:"fa-solid fa-comment"},{name:"marketplace",icon:"fa-solid fa-store"},{name:"archive",icon:"fa-solid fa-box-archive"}];return R.createPortal(a("aside",{ref:s,className:o,children:[a("header",{className:"flex relative justify-between items-center px-4 py-3",children:[t(k,{imgUrl:C.getLoggedInUser().photo,imgSize:"sm",className:"cursor-pointer"}),a("h4",{className:"grow ml-8 cursor-pointer",onClick:()=>h(n=>!n),children:[C.getLoggedInUser().fullname," ",t("i",{className:`fa-solid fa-chevron-${u?"down":"up"}`})]}),t("span",{className:"fa-solid fa-gear cursor-pointer",onClick:()=>h(n=>!n)}),u&&t(j,{})]}),a("section",{className:"flex flex-col capitalize",children:[f.map(n=>a("div",{className:`flex items-center cursor-pointer hover:bg-gray-500 rounded p-3 text-white ${m.pathname.includes(n.name)?"bg-gray-600":""} ${n.name==="marketplace"?"relative left-[-2px]":""}`,children:[t("span",{className:n.icon+" bg-slate-500 px-2 py-1 rounded mr-11 text-xl"}),t("p",{children:n.name})]},n.name)),a("div",{onClick:()=>g(),className:"flex items-center cursor-pointer hover:bg-gray-500 rounded p-3 text-white",children:[t("span",{className:`fa-solid ${d==="dark"?"fa-moon":"fa-sun"} bg-slate-500 px-2 py-1 rounded mr-11 text-xl`}),t("p",{children:"Theme"})]})]})]}),l.current)},V=()=>{const e=c.exports.useRef(document.getElementById("modal-root")),r=c.exports.useCallback(()=>{l(()=>!0),e.current.classList.remove("z-[-1]","cursor-default"),e.current.classList.add("cursor-pointer","opacity-05")},[]),[s,l]=c.exports.useState(!1);return a(I,{children:[a("header",{className:"flex items-center py-4 px-2 justify-between max-w-[550px]",children:[t("span",{onClick:()=>r(),className:"fa-solid fa-bars bg-slate-300 dark:bg-slate-700  rounded-full p-2 cursor-pointer"}),t("h1",{className:"absolute left-16",children:"Chats"}),t("span",{className:"fa-solid fa-pen bg-slate-300 rounded-full p-2 cursor-pointer hover:cursor-not-allowed dark:bg-slate-700"})]}),t(F,{isShown:s,onClose:()=>l(()=>!1)})]})},H=e=>{const s=S().pathname.split("/").at(-1);return t(M,{to:`/chats/${e.chat.chatId}`,children:a("div",{className:`profile-preview rounded p-2 flex items-center cursor-pointer hover:bg-slate-200 hover:dark:bg-[rgba(45,136,255,0.1)] ${e.chat.chatId===s?"bg-slate-200 dark:bg-[rgba(45,136,255,0.1)]":""}`,children:[t(k,{imgSize:"lg",imgUrl:e.chat.user?.[0].photo||""}),a("div",{className:"flex flex-col pl-3",children:[t("h4",{children:e.chat.user?.[0].fullname}),e.chat.lastMsg&&a("span",{className:"text-[#65676B] dark:text-[#B0B3B8]",children:[y.timeAgo(e.chat.lastMsg.timestamp)+" ",a("span",{children:[e.chat.lastMsg.txt?"\xB7 ":"",e.chat.lastMsg.txt?.length>28?`${e.chat.lastMsg.txt.slice(0,29)}...`:e.chat.lastMsg.txt]})]})]})]})})},G=e=>t("div",{className:"grow overflow-y-auto",children:e.chats.map(r=>t(H,{chat:r},r._id))}),q=e=>{const r=L(),s=p(),l=i=>{e.clearContacts(),s(A(i)).then(d=>r(`/chats/${d}`))};return a("div",{className:"w-full py-6 z-5 rounded flex items-center cursor-pointer p-2 hover:bg-slate-200 bg-white dark:bg-[#3a3b3c]",onClick:()=>l(e.user),children:[t(k,{imgSize:"lg",imgUrl:e.user.photo||""}),a("h4",{className:"pl-2",children:[" ",e.user.fullname]})]})},J=()=>{const e=p(),r=b(o=>o.chatReducer.contacts),[s,l]=c.exports.useState(null),i=()=>e(v()),d=({txt:o})=>{o||i(),s&&s.abort();const f=new AbortController;l(f),e(T(o,f.signal))},g=y.debounce(d,400),{register:u,resetForm:h}=O({txt:""},g),m=c.exports.useRef(null);return a("form",{onSubmit:o=>{o.preventDefault()},onClick:()=>m.current?.focus(),className:"hover:cursor-text max-w-[550px] relative z-0",children:[a("div",{className:"input-group py-4 relative z-[-5] w-full text-gray-400",children:[t("span",{className:"fa-solid fa-magnifying-glass absolute text-sm  top-[2.2rem] left-4 dark:text-[#606770]"}),t("input",{ref:m,placeholder:"Search",className:"px-12 py-4 text-[#050505] bg-[rgba(134,142,153,0.1)]  dark:text-[#606770] rounded-full border-none outline-none w-full dark:bg-[#3a3b3c]",type:"text",...u("txt")})]}),u("txt").value&&t("span",{onClick:o=>{o.stopPropagation(),v(),h()},className:"fa-solid fa-times absolute cursor-pointer top-[2.35rem] right-8 text-gray-400"}),r&&t("div",{className:"contacts-modal flex flex-col absolute w-full max-h-[375px] overflow-y-auto",children:r.map(o=>t(q,{user:o,clearContacts:i},o._id))})]})},X=()=>{const e=p(),{chats:r}=b(s=>s.chatReducer);return c.exports.useEffect(()=>(w.on(_.SERVER_EMIT_CONVERSATION_UPDATE,s=>e(z(s))),e(B()),()=>{v(),w.off(_.SERVER_EMIT_CONVERSATION_UPDATE)}),[]),a("section",{className:"chat-list p-4 full-vh flex flex-col shadow-[0_0_4px_0_#00000033] dark:bg-[#242526] dark:text-white dark:shadow-[inset_-1px_0_0_0_#ffffff33]",children:[t(V,{}),t(J,{}),t(G,{chats:r||[]})]})};export{X as default};
