import{_ as Nt,l as lt,k as O,t as $,C as It,q as bt,n as Lt,g as dt,D,E as C,G as pt,H as P,d as X,i as d,I as mt,J as Ot,c as m,o as ft,a as yt,F as Pt,r as M,h as j,K as G,L as qt}from"./index-DKk25Cfh.js";const Bt={name:"AppModal",props:{targetId:{type:String,required:!0},title:{type:String,default:"Modal title"},body:{type:String,default:"..."},saveButton:{type:String,default:"Save changes"},saveAction:{type:Function,default:()=>{}},description:{type:String,default:""},size:{type:String,default:""}}},Mt=["id"],wt={class:"modal-content"},Ft={class:"modal-header d-flex flex-column align-items-start pb-0 pt-2 px-4"},Rt={class:"modal-title",id:"exampleModalLongTitle"},Dt={class:"text-body-secondary"},Ut={class:"modal-body"},kt={class:"modal-footer"},xt=["id"];function zt(t,e,n,o,a,i){return dt(),lt("div",{class:"modal fade",id:n.targetId,tabindex:"-1",role:"dialog","aria-labelledby":"Modal","aria-hidden":"true"},[O("div",{class:Lt("modal-dialog modal-dialog-centered"+(n.size==="lg"?" modal-lg":"")),role:"document"},[O("div",wt,[O("div",Ft,[O("h2",Rt,$(n.title),1),O("p",Dt,$(n.description),1)]),O("div",Ut,[It(t.$slots,"default")]),O("div",kt,[O("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",id:"close-modal-"+n.targetId},"Close",8,xt),n.saveButton!==""?(dt(),lt("button",{key:0,type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...c)=>n.saveAction&&n.saveAction(...c))},$(n.saveButton),1)):bt("",!0)])])],2)],8,Mt)}const Be=Nt(Bt,[["render",zt]]),H={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},F={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},f={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ht={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},vt={dangerouslyHTMLString:!1,multiple:!0,position:H.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},jt={rtl:!1,newestOnTop:!1,toastClassName:""},gt={...vt,...jt};({...vt,type:f.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),et=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(et||{});const Gt={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Vt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Kt={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Jt={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},ct="Toastify--animate Toastify__none-enter";function Et(t,e=!1){var n;let o=Gt;if(!t||typeof t=="string")switch(t){case"flip":o=Jt;break;case"zoom":o=Kt;break;case"slide":o=Vt;break}else o=t;if(e)o.enter=ct;else if(o.enter===ct){const a=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter="Toastify--animate Toastify__".concat(a,"-enter")}return o}function Wt(t){return t.containerId||String(t.position)}const Y="will-unmount";function Xt(t=H.TOP_RIGHT){return!!document.querySelector(".".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t))}function Yt(t=H.TOP_RIGHT){return"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t)}function Zt(t,e,n=!1){const o=["".concat(s.CSS_NAMESPACE,"__toast-container"),"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(s.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return w(e)?e({position:t,rtl:n,defaultClassName:o}):"".concat(o," ").concat(e||"")}function Qt(t){var e;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=t,c=s.CSS_NAMESPACE,E=Yt(n),l=document.querySelector(".".concat(c)),S=document.querySelector(".".concat(E)),v=!!S&&!((e=S.className)!=null&&e.includes(Y)),A=l||document.createElement("div"),p=document.createElement("div");p.className=Zt(n,o,a),p.dataset.testid="".concat(s.CSS_NAMESPACE,"__toast-container--").concat(n),p.id=Wt(t);for(const _ in i)if(Object.prototype.hasOwnProperty.call(i,_)){const h=i[_];p.style[_]=h}return l||(A.className=s.CSS_NAMESPACE,document.body.appendChild(A)),v||A.appendChild(p),p}function nt(t){var e,n,o;const a=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",nt,!1);try{z[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete z[a],delete u[a]}catch{}}const z=D({});function $t(t,e){const n=document.getElementById(String(e));n&&(z[n.id]=t)}function ot(t,e=!0){const n=String(t);if(!z[n])return;const o=document.getElementById(n);o&&o.classList.add(Y),e?(ee(t),o&&o.addEventListener("animationend",nt,!1)):nt(n),T.items=T.items.filter(a=>a.containerId!==t)}function te(t){for(const e in z)ot(e,t);T.items=[]}function St(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...Et(o.transition)};const a=o.appendPosition?"".concat(o.exit,"--").concat(o.position):o.exit;n.className+=" ".concat(a),e&&e(n)}}function ee(t){for(const e in u)if(e===t)for(const n of u[e]||[])St(n)}function ne(t){const e=R().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function rt(t){return document.getElementById(t)}function oe(t){const e=rt(t.containerId);return e&&e.classList.contains(Y)}function ut(t){var e;const n=mt(t.content)?C(t.content.props):null;return n??C((e=t.data)!=null?e:{})}function ae(t){return t?T.items.filter(e=>e.containerId===t).length>0:T.items.length>0}function ie(){if(T.items.length>0){const t=T.items.shift();V(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const u=D({}),T=D({items:[]});function R(){const t=C(u);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function se(t){return R().find(e=>e.toastId===t)}function V(t,e={}){if(oe(e)){const n=rt(e.containerId);n&&n.addEventListener("animationend",at.bind(null,t,e),!1)}else at(t,e)}function at(t,e={}){const n=rt(e.containerId);n&&n.removeEventListener("animationend",at.bind(null,t,e),!1);const o=u[e.containerId]||[],a=o.length>0;if(!a&&!Xt(e.position)){const i=Qt(e),c=Ot(Ne,e);c.mount(i),$t(c,i.id)}a&&!e.updateId&&(e.position=o[0].position),pt(()=>{e.updateId?y.update(e):y.add(t,e)})}const y={add(t,e){const{containerId:n=""}=e;n&&(u[n]=u[n]||[],u[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,a;e.newestOnTop?(o=u[n])==null||o.unshift(e):(a=u[n])==null||a.push(e),e.onOpen&&e.onOpen(ut(e))},e.delay||0))},remove(t){if(t){const e=ne(t);if(e){const n=u[e];let o=n.find(a=>a.toastId===t);u[e]=n.filter(a=>a.toastId!==t),!u[e].length&&!ae(e)&&ot(e,!1),ie(),pt(()=>{o!=null&&o.onClose&&(o.onClose(ut(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){u[e]=u[e]||[];const n=u[e].find(i=>i.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,a={...t,disabledEnterTransition:!o,updateId:void 0};y.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{r(a.content,a)},t.delay||0)}},clear(t,e=!0){t?ot(t,e):te(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",y.dismissCallback,!1),setTimeout(()=>{y.remove(n)}))},dismiss(t){if(t){const e=R();for(const n of e)if(n.toastId===t){St(n,o=>{o.addEventListener("animationend",y.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=R();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",y.dismissCallback,!1),y.remove(t));break}}}},_t=D({}),W=D({});function Ct(){return Math.random().toString(36).substring(2,9)}function re(t){return typeof t=="number"&&!isNaN(t)}function it(t){return typeof t=="string"}function w(t){return typeof t=="function"}function Z(...t){return P(...t)}function K(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function le(t={}){_t["".concat(s.CSS_NAMESPACE,"-default-options")]=t}function de(){return _t["".concat(s.CSS_NAMESPACE,"-default-options")]||gt}function ce(){return document.documentElement.classList.contains("dark")?"dark":"light"}var J=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(J||{});const Tt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:H.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:F.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:f.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},ue={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:f.DEFAULT},theme:{type:String,required:!1,default:F.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},pe=X({name:"ProgressBar",props:ue,setup(t,{attrs:e}){const n=M(),o=m(()=>t.hide?"true":"false"),a=m(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=m(()=>["".concat(s.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(s.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(s.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(s.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),c=m(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),E=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),E())},S=m(()=>t.controlledProgress?null:l),v=m(()=>t.controlledProgress?l:null);return G(()=>{n.value&&(E(),n.value.onanimationend=S.value,n.value.ontransitionend=v.value)}),()=>d("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:c.value,style:a.value},null)}}),me=X({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:F.AUTO},type:{type:String,required:!1,default:F.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>d("button",{class:"".concat(s.CSS_NAMESPACE,"__close-button ").concat(s.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[d("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[d("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Q=({theme:t,type:e,path:n,...o})=>d("svg",P({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o),[d("path",{d:n},null)]);function fe(t){return d(Q,P(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function ye(t){return d(Q,P(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function ve(t){return d(Q,P(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function ge(t){return d(Q,P(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Ee(){return d("div",{class:"".concat(s.CSS_NAMESPACE,"__spinner")},null)}const st={info:ye,warning:fe,success:ve,error:ge,spinner:Ee},Se=t=>t in st;function _e({theme:t,type:e,isLoading:n,icon:o}){let a;const i={theme:t,type:e};return n?a=st.spinner():o===!1?a=void 0:K(o)?a=C(o):w(o)?a=o(i):mt(o)?a=qt(o,i):it(o)||re(o)?a=o:Se(e)&&(a=st[e](i)),a}const Ce=()=>{};function Te(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:a}=t,i=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,i)})})}function Ae(t){const e=M(!1),n=M(!1),o=M(!1),a=M(J.Enter),i=D({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION}),c=i.done||Ce,E=m(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),l=m(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),S=m(()=>t.pauseOnHover?{onMouseenter:I,onMouseleave:N}:{});function v(){const g=E.value.split(" ");p().addEventListener(et.ENTRANCE_ANIMATION_END,N,{once:!0});const b=B=>{const k=p();B.target===k&&(k.dispatchEvent(new Event(et.ENTRANCE_ANIMATION_END)),k.removeEventListener("animationend",b),k.removeEventListener("animationcancel",b),a.value===J.Enter&&B.type!=="animationcancel"&&k.classList.remove(...g))},L=()=>{const B=p();B.classList.add(...g),B.addEventListener("animationend",b),B.addEventListener("animationcancel",b)};t.pauseOnFocusLoss&&_(),L()}function A(){if(!p())return;const g=()=>{const L=p();L.removeEventListener("animationend",g),i.collapse?Te(L,c,i.collapseDuration):c()},b=()=>{const L=p();a.value=J.Exit,L&&(L.className+=" ".concat(l.value),L.addEventListener("animationend",g))};n.value||(o.value?g():setTimeout(b))}function p(){return t.toastRef.value}function _(){document.hasFocus()||I(),window.addEventListener("focus",N),window.addEventListener("blur",I)}function h(){window.removeEventListener("focus",N),window.removeEventListener("blur",I)}function N(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function I(){e.value=!1}function U(g){g&&(g.stopPropagation(),g.preventDefault()),n.value=!1}return G(A),G(()=>{const g=R();n.value=g.findIndex(b=>b.toastId===i.toastId)>-1}),G(()=>{t.isLoading!==void 0&&(t.loading.value?I():N())}),ft(v),yt(()=>{t.pauseOnFocusLoss&&h()}),{isIn:n,isRunning:e,hideToast:U,eventHandlers:S}}const he=X({name:"ToastItem",inheritAttrs:!1,props:Tt,setup(t){const e=M(),n=m(()=>!!t.isLoading),o=m(()=>t.progress!==void 0&&t.progress!==null),a=m(()=>_e(t)),i=m(()=>["".concat(s.CSS_NAMESPACE,"__toast"),"".concat(s.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:c,isIn:E,hideToast:l,eventHandlers:S}=Ae({toastRef:e,loading:n,done:()=>{y.remove(t.toastId)},...Et(t.transition,t.disabledEnterTransition),...t});return()=>d("div",P({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:v=>{t.closeOnClick&&l(),t.onClick&&t.onClick(v)}},S.value),[d("div",{role:t.role,"data-testid":"toast-body",class:"".concat(s.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[a.value!=null&&d("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(s.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(s.CSS_NAMESPACE,"--animate-icon ").concat(s.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[K(a.value)?j(C(a.value),{theme:t.theme,type:t.type}):w(a.value)?a.value({theme:t.theme,type:t.type}):a.value]),d("div",{"data-testid":"toast-content"},[K(t.content)?j(C(t.content),{toastProps:C(t),closeToast:l,data:t.data}):w(t.content)?t.content({toastProps:C(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?j("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&d(me,{theme:t.theme,closeToast:v=>{v.stopPropagation(),v.preventDefault(),l()}},null),K(t.closeButton)?j(C(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):w(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,d(pe,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:E.value,type:t.type,hide:t.hideProgressBar,isRunning:c.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let x=0;function At(){typeof window>"u"||(x&&window.cancelAnimationFrame(x),x=window.requestAnimationFrame(At),W.lastUrl!==window.location.href&&(W.lastUrl=window.location.href,y.clear()))}const Ne=X({name:"ToastifyContainer",inheritAttrs:!1,props:Tt,setup(t){const e=m(()=>t.containerId),n=m(()=>u[e.value]||[]),o=m(()=>n.value.filter(a=>a.position===t.position));return ft(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(At)}),yt(()=>{typeof window<"u"&&x&&(window.cancelAnimationFrame(x),W.lastUrl="")}),()=>d(Pt,null,[o.value.map(a=>{const{toastId:i=""}=a;return d(he,P({key:i},a),null)})])}});let tt=!1;function ht(){const t=[];return R().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Y)&&t.push(e)}),t}function Ie(t){const e=ht().length,n=t??0;return n>0&&e+T.items.length>=n}function be(t){Ie(t.limit)&&!t.updateId&&T.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function q(t,e,n={}){if(tt)return;n=Z(de(),{type:e},C(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Ct()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=ce()),be(n),W.lastUrl=window.location.href,n.multiple?T.items.length?n.updateId&&V(t,n):V(t,n):(tt=!0,r.clearAll(void 0,!1),setTimeout(()=>{V(t,n)},0),setTimeout(()=>{tt=!1},390)),n.toastId}const r=(t,e)=>q(t,f.DEFAULT,e);r.info=(t,e)=>q(t,f.DEFAULT,{...e,type:f.INFO});r.error=(t,e)=>q(t,f.DEFAULT,{...e,type:f.ERROR});r.warning=(t,e)=>q(t,f.DEFAULT,{...e,type:f.WARNING});r.warn=r.warning;r.success=(t,e)=>q(t,f.DEFAULT,{...e,type:f.SUCCESS});r.loading=(t,e)=>q(t,f.DEFAULT,Z(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));r.dark=(t,e)=>q(t,f.DEFAULT,Z(e,{theme:F.DARK}));r.remove=t=>{t?y.dismiss(t):y.clear()};r.clearAll=(t,e)=>{y.clear(t,e)};r.isActive=t=>{let e=!1;return e=ht().findIndex(n=>n.toastId===t)>-1,e};r.update=(t,e={})=>{setTimeout(()=>{const n=se(t);if(n){const o=C(n),{content:a}=o,i={...o,...e,toastId:e.toastId||t,updateId:Ct()},c=i.render||a;delete i.render,q(c,i.type,i)}},0)};r.done=t=>{r.update(t,{isLoading:!1,progress:1})};r.promise=Le;function Le(t,{pending:e,error:n,success:o},a){var i,c,E;let l;const S={...a||{},autoClose:!1};e&&(l=it(e)?r.loading(e,S):r.loading(e.render,{...S,...e}));const v={autoClose:(i=a==null?void 0:a.autoClose)!=null?i:!0,closeOnClick:(c=a==null?void 0:a.closeOnClick)!=null?c:!0,closeButton:(E=a==null?void 0:a.autoClose)!=null?E:null,isLoading:void 0,draggable:null,delay:100},A=(_,h,N)=>{if(h==null){r.remove(l);return}const I={type:_,...v,...a,data:N},U=it(h)?{render:h}:h;return l?r.update(l,{...I,...U,isLoading:!1}):r(U.render,{...I,...U,isLoading:!1}),N},p=w(t)?t():t;return p.then(_=>{A("success",o,_)}).catch(_=>{A("error",n,_)}),p}r.POSITION=H;r.THEME=F;r.TYPE=f;r.TRANSITIONS=Ht;const Oe={install(t,e={}){Pe(e)}};typeof window<"u"&&(window.Vue3Toastify=Oe);function Pe(t={}){const e=Z(gt,t);le(e)}export{Be as A,r as i};
