import{f as je,h as We}from"./chunk-RU3OUDH6.js";import{b as Le}from"./chunk-6BZCFKK7.js";import{A as Pe,C as Te,F as Me,J as ke,L as Ae,M as De,N as Oe,O as Re,R as _e,T as Ne,U as Fe,Z as xe,_ as Ue,a as ue,b as he,c as me,e as ge,f as fe,g as ve,h as ye,i as Ee,m as we,n as be,o as Ie,v as Ce,z as Se}from"./chunk-MM6CRWK5.js";import{$a as D,Aa as L,Ba as re,Bb as ce,C as m,Cb as pe,Da as oe,E as q,Ea as ie,Ha as se,K as X,N as E,Na as I,Nb as de,P as J,Q,S as w,Ua as u,V as T,Va as p,Vb as B,Wa as g,X as F,Y as x,_ as M,ca as k,da as ee,f as K,ib as ae,j as Z,jb as j,k as P,l as Y,ma as te,o as h,pa as A,qb as O,s as $,t as R,v as _,va as U,w as N,wa as ne,x as f,xb as le,y,za as b,zb as W}from"./chunk-DPZDZGEI.js";import"./chunk-HYK4U74Y.js";import"./chunk-JVFFMWOY.js";import"./chunk-GI7IJE5M.js";import"./chunk-CIS7OW2H.js";import"./chunk-G3CV3VGG.js";import"./chunk-ZSXYZYSQ.js";import"./chunk-5MPL5A3U.js";import"./chunk-NKT2XMZU.js";import"./chunk-4U6PRYVA.js";import"./chunk-GN6S5PAX.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{a as G}from"./chunk-OYAVQN5W.js";var Be=(()=>{let e=class e{constructor(t,n){this.router=t,this.storageService=n,this.paletteToggle=!1,this.language="es-ES",this.currency="EUR",this.language=Intl.DateTimeFormat().resolvedOptions().locale,Fe({moon:xe,sunny:Ue})}ngOnInit(){let t=window.matchMedia("(prefers-color-scheme: dark)");this.initializeDarkPalette(t.matches),t.addEventListener("change",n=>this.initializeDarkPalette(n.matches))}goToEditUsers(){this.router.navigateByUrl("/edit-users"),this.menu.close()}goToSelectUsers(){}goToNewTicket(){}goToHome(){}initializeDarkPalette(t){this.paletteToggle=t,this.toggleDarkPalette(t)}toggleChange(){this.paletteToggle=!this.paletteToggle,this.toggleDarkPalette(this.paletteToggle)}toggleDarkPalette(t){document.documentElement.classList.toggle("ion-palette-dark",t)}};e.\u0275fac=function(n){return new(n||e)(L(fe),L(Storage))},e.\u0275cmp=M({type:e,selectors:[["app-menu"]],inputs:{menu:"menu"},standalone:!0,features:[O],decls:15,vars:1,consts:[[1,"ion-padding"],[3,"value"],["value","sunny",3,"click"],["name","sunny","aria-label","Cambiar a modo claro"],["value","moon",3,"click"],["name","moon","aria-label","Cambiar a modo oscuro"],["button","",3,"click"]],template:function(n,i){n&1&&(u(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),j(3,"Menu"),p()()(),u(4,"ion-content",0)(5,"ion-item-group")(6,"ion-item")(7,"ion-segment",1)(8,"ion-segment-button",2),D("click",function(){return i.toggleChange()}),g(9,"ion-icon",3),p(),u(10,"ion-segment-button",4),D("click",function(){return i.toggleChange()}),g(11,"ion-icon",5),p()()(),u(12,"ion-item",6),D("click",function(){return i.goToEditUsers()}),j(13,"Editar Usuarios"),p()(),g(14,"ion-item-group"),p()),n&2&&(b(7),I("value",i.paletteToggle?"sunny":"moon"))},dependencies:[ke,Ne,_e,Ce,we,De,Oe,Se,Te,Pe],styles:["[_nghost-%COMP%]{flex-grow:1}ion-button[_ngcontent-%COMP%]{--color: var(--color)}"]});let o=e;return o})();var Ve=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[O],decls:6,vars:2,consts:[["menu",""],["contentId","main"],["contentId","main",3,"swipeGesture"],[3,"menu"],["id","main",1,"ion-page"]],template:function(n,i){if(n&1&&(u(0,"ion-split-pane",1)(1,"ion-menu",2,0),g(3,"app-menu",3),p(),u(4,"div",4),g(5,"ion-router-outlet"),p()()),n&2){let s=ae(2);b(),I("swipeGesture",!1),b(2),I("menu",s)}},dependencies:[Ie,Ae,Be,Me]});let o=e;return o})();var ze=[{path:"",loadComponent:()=>import("./chunk-32UUOW6T.js").then(o=>o.HomePage)},{path:"edit-users",loadComponent:()=>import("./chunk-RNQQTMJP.js").then(o=>o.EditUsersPage)},{path:"show-picture",loadComponent:()=>import("./chunk-5DINJ3PB.js").then(o=>o.ShowPicturePage)},{path:"show-lines",loadComponent:()=>import("./chunk-43MSXHDI.js").then(o=>o.ShowLinesPage)},{path:"assign-lines",loadComponent:()=>import("./chunk-LFQXINJY.js").then(o=>o.AssignLinesPage)},{path:"show-results",loadComponent:()=>import("./chunk-ACT3M5BP.js").then(o=>o.ShowResultsPage)}];var He={production:!0};var qe="@",Xe=(()=>{let e=class e{constructor(t,n,i,s,a){this.doc=t,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=x(oe,{optional:!0}),this.loadingSchedulerFn=x(Je,{optional:!0})}ngOnDestroy(){var t;(t=this._engine)==null||t.flush()}loadImpl(){let t=()=>{var i;return(i=this.moduleImpl)!=null?i:import("./chunk-HIHWBATE.js").then(s=>s)},n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(i=>{throw new Q(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,n){var a,c;let i=this.delegate.createRenderer(t,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new z(i);return(a=n==null?void 0:n.data)!=null&&a.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),(c=this._rendererFactoryPromise)==null||c.then(l=>{var H;let d=l.createRenderer(t,n);s.use(d),(H=this.scheduler)==null||H.notify(10)}).catch(l=>{s.use(i)}),s}begin(){var t,n;(n=(t=this.delegate).begin)==null||n.call(t)}end(){var t,n;(n=(t=this.delegate).end)==null||n.call(t)}whenRenderingDone(){var t,n,i;return(i=(n=(t=this.delegate).whenRenderingDone)==null?void 0:n.call(t))!=null?i:Promise.resolve()}};e.\u0275fac=function(n){re()},e.\u0275prov=w({token:e,factory:e.\u0275fac});let o=e;return o})(),z=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,n){this.delegate.insertBefore(e,r,t,n)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,n){this.delegate.setAttribute(e,r,t,n)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,n){this.delegate.setStyle(e,r,t,n)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(qe)}},Je=new T("");function Ge(o="animations"){return se("NgAsyncAnimations"),k([{provide:ie,useFactory:(e,r,t)=>new Xe(e,r,t,o),deps:[de,he,A]},{provide:ne,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var S="Service workers are disabled or not supported by this browser";function Qe(o){return R(()=>Y(new Error(o)))}var v=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=Qe(S);else{let t=_(e,"controllerchange").pipe(h(()=>e.controller)),n=R(()=>P(e.controller)),i=$(n,t);this.worker=i.pipe(y(d=>!!d)),this.registration=this.worker.pipe(E(()=>e.getRegistration()));let l=_(e,"message").pipe(h(d=>d.data)).pipe(y(d=>d&&d.type)).pipe(X());l.connect(),this.events=l}}postMessage(e,r){return this.worker.pipe(m(1),J(t=>{t.postMessage(G({action:e},r))})).toPromise().then(()=>{})}postMessageWithOperation(e,r,t){let n=this.waitForOperationCompleted(t),i=this.postMessage(e,r);return Promise.all([i,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let r;return typeof e=="string"?r=t=>t.type===e:r=t=>e.includes(t.type),this.events.pipe(y(r))}nextEventOfType(e){return this.eventsOfType(e).pipe(m(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(y(r=>r.nonce===e),m(1),h(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},et=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new K,!t.isEnabled){this.messages=f,this.notificationClicks=f,this.subscription=f;return}this.messages=this.sw.eventsOfType("PUSH").pipe(h(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(h(i=>i.data)),this.pushManager=this.sw.registration.pipe(h(i=>i.pushManager));let n=this.pushManager.pipe(E(i=>i.getSubscription()));this.subscription=N(n,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(S));let n={userVisibleOnly:!0},i=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(i.length));for(let a=0;a<i.length;a++)s[a]=i.charCodeAt(a);return n.applicationServerKey=s,this.pushManager.pipe(E(a=>a.subscribe(n)),m(1)).toPromise().then(a=>(this.subscriptionChanges.next(a),a))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let t=n=>{if(n===null)throw new Error("Not subscribed to push notifications.");return n.unsubscribe().then(i=>{if(!i)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(m(1),E(t)).toPromise()}decodeBase64(t){return atob(t)}};e.\u0275fac=function(n){return new(n||e)(F(v))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let o=e;return o})(),tt=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=f,this.unrecoverable=f;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(S));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}};e.\u0275fac=function(n){return new(n||e)(F(v))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let o=e;return o})();var Ke=new T("");function nt(o,e,r,t){return()=>{if(!(B(t)&&"serviceWorker"in navigator&&r.enabled!==!1))return;let n=o.get(A),i=o.get(W);n.runOutsideAngular(()=>{let a=navigator.serviceWorker,c=()=>{var l;return(l=a.controller)==null?void 0:l.postMessage({action:"INITIALIZE"})};a.addEventListener("controllerchange",c),i.onDestroy(()=>{a.removeEventListener("controllerchange",c)})});let s;if(typeof r.registrationStrategy=="function")s=r.registrationStrategy();else{let[a,...c]=(r.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":s=P(null);break;case"registerWithDelay":s=Ze(+c[0]||0);break;case"registerWhenStable":let l=Z(o.get(W).whenStable());s=c[0]?N(l,Ze(+c[0])):l;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${r.registrationStrategy}`)}}n.runOutsideAngular(()=>s.pipe(m(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:r.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function Ze(o){return P(null).pipe(q(o))}function rt(o,e){return new v(B(e)&&o.enabled!==!1?navigator.serviceWorker:void 0)}var C=class{};function Ye(o,e={}){return k([et,tt,{provide:Ke,useValue:o},{provide:C,useValue:e},{provide:v,useFactory:rt,deps:[C,U]},{provide:le,useFactory:nt,deps:[te,Ke,C,U],multi:!0}])}var ot=()=>We(),$e=(o,e)=>typeof window>"u"?Promise.resolve():ot().then(()=>je([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],e));$e(window);He.production&&void 0;me(Ve,{providers:[ce({eventCoalescing:!0}),{provide:ge,useClass:be},Re({swipeBackEnabled:!1}),ee(Le.forRoot()),ue(),Ge(),ye(ze,Ee(ve)),Ye("ngsw-worker.js",{enabled:!pe(),registrationStrategy:"registerWhenStable:30000"})]}).catch(o=>console.error(o));document.addEventListener("ionBackdropDidPresent",()=>{let o=document.querySelector("ion-backdrop");o&&(o.setAttribute("inert",""),o.removeAttribute("aria-hidden"))});
