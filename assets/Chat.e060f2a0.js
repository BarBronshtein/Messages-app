import{u as b,a as v,r as l,j as m,b as e,L as D,c as I,F as C,s as T,d as F,e as U}from"./index.7b65e0b8.js";import{g as B,A as j,u as M,c as E,a as N,b as L,s as w,I as y,d as $,e as z,f as K}from"./useFormRegister.0ce8efce.js";const W=({className:r})=>{const t=b(),{curChat:n}=v(o=>o.chatReducer);l.exports.useEffect(()=>{t(B(n?.userId??""))},[n?._id]);const a=v(o=>o.chatReducer.curContact),s="/chats/";return m("header",{className:`chat-header shadow-[inset_0_0_4px] shadow-[#00000033] items-center flex justify-around p-2 text-lg sm:text-xl ${r} dark:shadow-[#ffffff33]`,children:[e(D,{to:s,children:e("span",{className:"fa-solid text-blue-600 fa-arrow-left cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"})}),m("div",{className:"flex grow ml-8 items-center",children:[e(j,{imgSize:"md",imgUrl:a?.photo||""}),e("span",{className:"ml-4",children:a?.fullname})]}),e("span",{className:"fa-solid fa-circle-info text-blue-600 cursor-pointer hover:bg-[#4444] p-2 hover:rounded-full hover:cursor-not-allowed"})]})},H=({txt:r,url:t,type:n,fromUser:a,id:s})=>{const o=I.getLoggedInUser(),c=new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"),h=r?.split(" "),d=n?{video:e("video",{className:"rounded-lg",controls:!0,src:t}),img:e("img",{loading:"lazy",className:"rounded-lg",src:t}),audio:m("audio",{controls:!0,children:[e("source",{src:t,type:"audio/mpeg"}),e("source",{src:t,type:"audio/aac"}),e("source",{src:t,type:"audio/ogg"}),e("source",{src:t,type:"audio/wav"}),"Your browser does not support the audio tag"]})}[n]:"";return e("div",{className:"msg grid py-2",style:{gridTemplateColumns:a!==o._id?"300px 1fr":"1fr 300px"},children:m("div",{className:`w-fit ${a!==o._id?"col-start-1 dark:text-white":"col-start-2 text-righ text-white justify-self-end"}`,children:[!!n&&e("div",{children:d}),r&&e("p",{className:`p-3 rounded-full ${a!==o._id?"bg-[#E4E6EB] dark:bg-[#3E4042]":"bg-[rgb(0,132,255)]"}`,children:h.map((i,f)=>i.match(c)?e("a",{target:"_blank",className:"underline",href:i,children:i+" "},i+f+s):e("span",{children:i+" "},i+f+s))})]})})},P=()=>{const r=l.exports.useRef(null),t=()=>{const s=r.current;s.scrollTop=s.scrollHeight},{curChat:n}=v(s=>s.chatReducer);l.exports.useEffect(()=>{t()},[n?._id,n?.messages.length]);const a=n?.messages;return e("div",{ref:r,className:"msg-list grow px-4 py-2 overflow-y-auto",children:a&&a.map(s=>e(H,{fromUser:s.fromUser,id:s.id,txt:s.txt,type:s.type,url:s.url},s.id))})};let g,R;const G=()=>{const r=l.exports.useRef([]),[t,n]=l.exports.useState("idle"),[a,s]=l.exports.useState(null),[o,c]=l.exports.useState("");return{startRecording:()=>{t==="idle"&&navigator.mediaDevices.getUserMedia({audio:!0}).then(d=>{R=d,g=new MediaRecorder(d),g.start(),g.onstart=()=>n("recording"),g.ondataavailable=({data:i})=>r.current.push(i)}).catch(d=>c(d))},stopRecording:()=>{t!=="idle"&&(g.stop(),g.onstop=()=>{const d=new Blob(r.current,{type:"audio/webm;"});r.current=[],d.id=M.makeId(),s(d),n("idle"),R.getAudioTracks().forEach(i=>i.stop())})},audioResult:a,errorMessage:o,status:t}};const O=()=>{const r=b(),{curChat:t,chats:n}=v(p=>p.chatReducer),a=n?.find(p=>p.chatId===t?._id),{startRecording:s,stopRecording:o,audioResult:c,status:h}=G();return l.exports.useEffect(()=>{if(!c)return;const p=E.getEmpyMessage();r(N({...p,file:c,type:"audio",timestamp:Date.now()},t._id,a))},[c?.id]),e(C,{children:e("span",{title:"Click and Hold",onTouchStart:()=>s(),onMouseDown:()=>s(),onTouchEnd:()=>o(),onMouseUp:()=>o(),className:`fa-solid fa-microphone ${h==="idle"?"":"blink"} cursor-pointer hover:bg-[#4444] hover:rounded-full h-fit p-2`})})},V=({file:r,clearFile:t})=>{const n="absolute bottom-14 left-[50%] translate-x-[-50%]",a="fa-solid cursor-pointer fa-times absolute bottom-32 right-[-15%]",s="max-w-[350px] object-contain h-[150px]",[o,c]=l.exports.useState(null),h=b();return l.exports.useEffect(()=>{if(!r)return;const p=new Worker("/src/services/base64.worker.ts");return p.postMessage(r),p.onmessage=d=>{const{data:{type:i,data:f}}=d;return i==="success"?c(f):(t(),h(T({type:"error",txt:f})))},()=>{p.terminate()}},[r]),r.type.startsWith("video/")&&o?m("div",{className:n,children:[e("video",{className:s,controls:!0,src:o}),e("span",{onClick:()=>t(),className:a})]}):r.type.startsWith("image/")&&o?m("div",{className:n,children:[e("img",{className:s,src:o,alt:""}),e("span",{onClick:()=>t(),className:a})]}):o===null?m("div",{className:n,children:[e(F,{}),";"]}):e("div",{className:"absolute bottom-14",children:"File is not supported"})},k=({file:r,setFile:t,className:n,capture:a})=>{const s=l.exports.useRef(null),o=c=>{const h=c.target.files?.[0];h&&t(h)};return m(C,{children:[e("label",{htmlFor:"fileInput",className:`fa-solid h-fit ${n} hover:bg-[#4444] hover:rounded-full p-2 cursor-pointer`}),e("input",{ref:s,id:"fileInput",className:"hidden",accept:"image/*,video/*",onChange:c=>o(c),type:"file",capture:a}),!!r&&e(V,{clearFile:()=>{t(null),s.current.value=""},file:r})]})},Z=({register:r})=>m("div",{className:"input-group relative grow",children:[e("textarea",{cols:20,rows:1,placeholder:"Message",className:"w-full text-black rounded-3xl border-none outline-none pl-4 pr-[2.25rem] py-1 max-h-[225px] text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden dark:bg-[#3A3B3C] dark:text-[#E4E6EB]",...r("msg"),onInput:t=>M.auto_height(t.target),onKeyDown:t=>{t.key==="Enter"&&!t.shiftKey&&t.preventDefault()}}),e("span",{className:"fa-solid h-fit fa-face-smile absolute right-4 top-[0.65rem] sm:top-[0.65rem] hover:cursor-not-allowed"})]}),Y=({addMessage:r})=>e("span",{className:"fa-solid fa-thumbs-up h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2",onClick:()=>{const t=E.getEmpyMessage("\u{1F44D}");r(t)}}),q=()=>{const r=b(),{curChat:t,chats:n}=v(u=>u.chatReducer),[a,s]=l.exports.useState(null),o=n?.find(u=>u.chatId===t?._id),c=u=>{if(!!u)return u.type.startsWith("image/")?"img":"video"},h=u=>{r(N({...u,file:null,timestamp:Date.now()},t._id,o))},p=window.navigator.userAgent.indexOf("Mobile")!==-1,d=u=>{u.preventDefault();const S=E.getEmpyMessage(x),_=c(a),A={...S,file:a,timestamp:Date.now(),type:_};r(N(A,t._id,o)),f()},{register:i,resetForm:f}=L({msg:""},()=>{}),{value:x}=i("msg");return m("form",{className:"w-full flex relative",onKeyDown:u=>{u.key==="Enter"&&!u.shiftKey&&d(u)},onSubmit:d,children:[!x&&!a&&e(O,{}),p&&!x&&e(k,{file:a,className:"fa-camera",setFile:s,capture:"environment"}),e(k,{file:a,className:"fa-image",setFile:s}),e(Z,{register:i}),x||a?e("button",{className:"fa-solid fa-paper-plane  h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"}):"",!x&&!a&&e(Y,{addMessage:h})]})},J=()=>e("footer",{className:"send-bar p-2 text-lg text-blue-600 sm:text-xl",children:e(q,{})}),ee=r=>{const[t,n]=l.exports.useState(null),s=U().pathname.split("/").at(-1),o=b();return l.exports.useEffect(()=>{if(!s)return;w.emit(y.SET_TOPIC,s),t&&t.abort();const c=new AbortController;return n(c),o($(s,c.signal)),()=>{o(z())}},[s]),l.exports.useEffect(()=>(w.on(y.SERVER_EMIT_ADD_MESSAGE,c=>o(K(c))),()=>w.off(y.SERVER_EMIT_ADD_MESSAGE)),[]),m("section",{className:"chat flex flex-col min-h-screen h-screen dark:bg-[#242526] dark:text-white",children:[e(W,{className:r.className}),e(P,{}),e(J,{})]})};export{ee as default};
