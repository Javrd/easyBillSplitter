import{a as Qe}from"./chunk-DBYLPBXF.js";import{G as Ue,H as We,I as Ge,K as Ve,M as $e,N as Ye,R as Ke,U as He,W as Je,f as De,t as Ne,v as _e,w as Fe,x as Be,z as ze}from"./chunk-MM6CRWK5.js";import{$a as je,Aa as xe,Ma as Oe,Na as Me,Pa as Ie,Ua as se,Va as re,Wa as ue,_ as Pe,_a as Te,ab as Ce,fb as ge,gb as we,hb as ve,ia as ce,ja as le,jb as de,lb as Re,qb as Ae,ra as ke,za as pe}from"./chunk-DPZDZGEI.js";import"./chunk-HYK4U74Y.js";import"./chunk-JVFFMWOY.js";import"./chunk-GI7IJE5M.js";import"./chunk-CIS7OW2H.js";import"./chunk-G3CV3VGG.js";import"./chunk-ZSXYZYSQ.js";import"./chunk-5MPL5A3U.js";import"./chunk-NKT2XMZU.js";import"./chunk-4U6PRYVA.js";import"./chunk-GN6S5PAX.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{a as q,b as ne,e as Le,f as it,g as ct,i as A}from"./chunk-OYAVQN5W.js";var Xe=it((Y,Ee)=>{"use strict";(function(H,N){typeof Y=="object"&&typeof Ee=="object"?Ee.exports=N():typeof define=="function"&&define.amd?define([],N):typeof Y=="object"?Y.billreader=N():H.billreader=N()})(self,()=>(()=>{var K={"./node_modules/canvas/browser.js":(n,t,e)=>{let o=e("./node_modules/canvas/lib/parse-font.js");t.parseFont=o,t.createCanvas=function(a,c){return Object.assign(document.createElement("canvas"),{width:a,height:c})},t.createImageData=function(a,c,h){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(a);case 2:return new ImageData(a,c);default:return new ImageData(a,c,h)}},t.loadImage=function(a,c){return new Promise(function(h,w){let u=Object.assign(document.createElement("img"),c);function M(){u.onload=null,u.onerror=null}u.onload=function(){M(),h(u)},u.onerror=function(){M(),w(new Error('Failed to load the image "'+a+'"'))},u.src=a})}},"./node_modules/canvas/lib/parse-font.js":n=>{"use strict";let t="bold|bolder|lighter|[1-9]00",e="italic|oblique",o="small-caps",a="ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",c="px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q",h=`'([^']+)'|"([^"]+)"|[\\w\\s-]+`,w=new RegExp(`(${t}) +`,"i"),u=new RegExp(`(${e}) +`,"i"),M=new RegExp(`(${o}) +`,"i"),E=new RegExp(`(${a}) +`,"i"),l=new RegExp(`([\\d\\.]+)(${c}) *((?:${h})( *, *(?:${h}))*)`),S={},b=16;n.exports=x=>{if(S[x])return S[x];let I=l.exec(x);if(!I)return;let p={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(I[1]),unit:I[2],family:I[3].replace(/["']/g,"").replace(/ *, */g,",")},L,g,k,T,P=x.substring(0,I.index);switch((L=w.exec(P))&&(p.weight=L[1]),(g=u.exec(P))&&(p.style=g[1]),(k=M.exec(P))&&(p.variant=k[1]),(T=E.exec(P))&&(p.stretch=T[1]),p.unit){case"pt":p.size/=.75;break;case"pc":p.size*=16;break;case"in":p.size*=96;break;case"cm":p.size*=37.79527559055118;break;case"mm":p.size*=3.7795275590551185;break;case"%":break;case"em":case"rem":p.size*=b/.75;break;case"q":p.size*=.9448818897637796;break}return S[x]=p}},"./node_modules/is-electron/index.js":n=>{function t(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}n.exports=t},"./node_modules/regenerator-runtime/runtime.js":n=>{var t=function(e){"use strict";var o=Object.prototype,a=o.hasOwnProperty,c=Object.defineProperty||function(r,s,i){r[s]=i.value},h,w=typeof Symbol=="function"?Symbol:{},u=w.iterator||"@@iterator",M=w.asyncIterator||"@@asyncIterator",E=w.toStringTag||"@@toStringTag";function l(r,s,i){return Object.defineProperty(r,s,{value:i,enumerable:!0,configurable:!0,writable:!0}),r[s]}try{l({},"")}catch{l=function(s,i,m){return s[i]=m}}function S(r,s,i,m){var f=s&&s.prototype instanceof k?s:k,O=Object.create(f.prototype),G=new ee(m||[]);return c(O,"_invoke",{value:R(r,i,G)}),O}e.wrap=S;function b(r,s,i){try{return{type:"normal",arg:r.call(s,i)}}catch(m){return{type:"throw",arg:m}}}var x="suspendedStart",I="suspendedYield",p="executing",L="completed",g={};function k(){}function T(){}function P(){}var z={};l(z,u,function(){return this});var F=Object.getPrototypeOf,C=F&&F(F(te([])));C&&C!==o&&a.call(C,u)&&(z=C);var U=P.prototype=k.prototype=Object.create(z);T.prototype=P,c(U,"constructor",{value:P,configurable:!0}),c(P,"constructor",{value:T,configurable:!0}),T.displayName=l(P,E,"GeneratorFunction");function v(r){["next","throw","return"].forEach(function(s){l(r,s,function(i){return this._invoke(s,i)})})}e.isGeneratorFunction=function(r){var s=typeof r=="function"&&r.constructor;return s?s===T||(s.displayName||s.name)==="GeneratorFunction":!1},e.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,P):(r.__proto__=P,l(r,E,"GeneratorFunction")),r.prototype=Object.create(U),r},e.awrap=function(r){return{__await:r}};function j(r,s){function i(O,G,V,X){var $=b(r[O],r,G);if($.type==="throw")X($.arg);else{var he=$.arg,ie=he.value;return ie&&typeof ie=="object"&&a.call(ie,"__await")?s.resolve(ie.__await).then(function(oe){i("next",oe,V,X)},function(oe){i("throw",oe,V,X)}):s.resolve(ie).then(function(oe){he.value=oe,V(he)},function(oe){return i("throw",oe,V,X)})}}var m;function f(O,G){function V(){return new s(function(X,$){i(O,G,X,$)})}return m=m?m.then(V,V):V()}c(this,"_invoke",{value:f})}v(j.prototype),l(j.prototype,M,function(){return this}),e.AsyncIterator=j,e.async=function(r,s,i,m,f){f===void 0&&(f=Promise);var O=new j(S(r,s,i,m),f);return e.isGeneratorFunction(s)?O:O.next().then(function(G){return G.done?G.value:O.next()})};function R(r,s,i){var m=x;return function(O,G){if(m===p)throw new Error("Generator is already running");if(m===L){if(O==="throw")throw G;return fe()}for(i.method=O,i.arg=G;;){var V=i.delegate;if(V){var X=J(V,i);if(X){if(X===g)continue;return X}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(m===x)throw m=L,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);m=p;var $=b(r,s,i);if($.type==="normal"){if(m=i.done?L:I,$.arg===g)continue;return{value:$.arg,done:i.done}}else $.type==="throw"&&(m=L,i.method="throw",i.arg=$.arg)}}}function J(r,s){var i=s.method,m=r.iterator[i];if(m===h)return s.delegate=null,i==="throw"&&r.iterator.return&&(s.method="return",s.arg=h,J(r,s),s.method==="throw")||i!=="return"&&(s.method="throw",s.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var f=b(m,r.iterator,s.arg);if(f.type==="throw")return s.method="throw",s.arg=f.arg,s.delegate=null,g;var O=f.arg;if(!O)return s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,g;if(O.done)s[r.resultName]=O.value,s.next=r.nextLoc,s.method!=="return"&&(s.method="next",s.arg=h);else return O;return s.delegate=null,g}v(U),l(U,E,"Generator"),l(U,u,function(){return this}),l(U,"toString",function(){return"[object Generator]"});function B(r){var s={tryLoc:r[0]};1 in r&&(s.catchLoc=r[1]),2 in r&&(s.finallyLoc=r[2],s.afterLoc=r[3]),this.tryEntries.push(s)}function D(r){var s=r.completion||{};s.type="normal",delete s.arg,r.completion=s}function ee(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(B,this),this.reset(!0)}e.keys=function(r){var s=Object(r),i=[];for(var m in s)i.push(m);return i.reverse(),function f(){for(;i.length;){var O=i.pop();if(O in s)return f.value=O,f.done=!1,f}return f.done=!0,f}};function te(r){if(r){var s=r[u];if(s)return s.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var i=-1,m=function f(){for(;++i<r.length;)if(a.call(r,i))return f.value=r[i],f.done=!1,f;return f.value=h,f.done=!0,f};return m.next=m}}return{next:fe}}e.values=te;function fe(){return{value:h,done:!0}}return ee.prototype={constructor:ee,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(D),!r)for(var s in this)s.charAt(0)==="t"&&a.call(this,s)&&!isNaN(+s.slice(1))&&(this[s]=h)},stop:function(){this.done=!0;var r=this.tryEntries[0],s=r.completion;if(s.type==="throw")throw s.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var s=this;function i(X,$){return O.type="throw",O.arg=r,s.next=X,$&&(s.method="next",s.arg=h),!!$}for(var m=this.tryEntries.length-1;m>=0;--m){var f=this.tryEntries[m],O=f.completion;if(f.tryLoc==="root")return i("end");if(f.tryLoc<=this.prev){var G=a.call(f,"catchLoc"),V=a.call(f,"finallyLoc");if(G&&V){if(this.prev<f.catchLoc)return i(f.catchLoc,!0);if(this.prev<f.finallyLoc)return i(f.finallyLoc)}else if(G){if(this.prev<f.catchLoc)return i(f.catchLoc,!0)}else if(V){if(this.prev<f.finallyLoc)return i(f.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,s){for(var i=this.tryEntries.length-1;i>=0;--i){var m=this.tryEntries[i];if(m.tryLoc<=this.prev&&a.call(m,"finallyLoc")&&this.prev<m.finallyLoc){var f=m;break}}f&&(r==="break"||r==="continue")&&f.tryLoc<=s&&s<=f.finallyLoc&&(f=null);var O=f?f.completion:{};return O.type=r,O.arg=s,f?(this.method="next",this.next=f.finallyLoc,g):this.complete(O)},complete:function(r,s){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&s&&(this.next=s),g},finish:function(r){for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s];if(i.finallyLoc===r)return this.complete(i.completion,i.afterLoc),D(i),g}},catch:function(r){for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s];if(i.tryLoc===r){var m=i.completion;if(m.type==="throw"){var f=m.arg;D(i)}return f}}throw new Error("illegal catch attempt")},delegateYield:function(r,s,i){return this.delegate={iterator:te(r),resultName:s,nextLoc:i},this.method==="next"&&(this.arg=h),g}},e}(n.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},"./node_modules/tesseract.js/src/Tesseract.js":(n,t,e)=>{let o=e("./node_modules/tesseract.js/src/createWorker.js"),a=(h,w,u)=>A(Y,null,function*(){let M=yield o(w,1,u);return M.recognize(h).finally(()=>A(Y,null,function*(){yield M.terminate()}))}),c=(h,w)=>A(Y,null,function*(){let u=yield o("osd",0,w);return u.detect(h).finally(()=>A(Y,null,function*(){yield u.terminate()}))});n.exports={recognize:a,detect:c}},"./node_modules/tesseract.js/src/constants/OEM.js":n=>{n.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},"./node_modules/tesseract.js/src/constants/PSM.js":n=>{n.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},"./node_modules/tesseract.js/src/constants/defaultOptions.js":n=>{n.exports={workerBlobURL:!0,logger:()=>{}}},"./node_modules/tesseract.js/src/constants/languages.js":n=>{n.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},"./node_modules/tesseract.js/src/createJob.js":(n,t,e)=>{let o=e("./node_modules/tesseract.js/src/utils/getId.js"),a=0;n.exports=({id:c,action:h,payload:w={}})=>{let u=c;return typeof u>"u"&&(u=o("Job",a),a+=1),{id:u,action:h,payload:w}}},"./node_modules/tesseract.js/src/createScheduler.js":function(n,t,e){let o=e("./node_modules/tesseract.js/src/createJob.js"),{log:a}=e("./node_modules/tesseract.js/src/utils/log.js"),c=e("./node_modules/tesseract.js/src/utils/getId.js"),h=0;n.exports=()=>{let w=c("Scheduler",h),u={},M={},E=[];h+=1;let l=()=>E.length,S=()=>Object.keys(u).length,b=()=>{if(E.length!==0){let g=Object.keys(u);for(let k=0;k<g.length;k+=1)if(typeof M[g[k]]>"u"){E[0](u[g[k]]);break}}},x=(g,k)=>new Promise((T,P)=>{let z=o({action:g,payload:k});E.push(F=>A(this,null,function*(){E.shift(),M[F.id]=z;try{T(yield F[g].apply(this,[...k,z.id]))}catch(C){P(C)}finally{delete M[F.id],b()}})),a(`[${w}]: Add ${z.id} to JobQueue`),a(`[${w}]: JobQueue length=${E.length}`),b()});return{addWorker:g=>(u[g.id]=g,a(`[${w}]: Add ${g.id}`),a(`[${w}]: Number of workers=${S()}`),b(),g.id),addJob:(g,...k)=>A(this,null,function*(){if(S()===0)throw Error(`[${w}]: You need to have at least one worker before adding jobs`);return x(g,k)}),terminate:()=>A(this,null,function*(){Object.keys(u).forEach(g=>A(this,null,function*(){yield u[g].terminate()})),E=[]}),getQueueLen:l,getNumWorkers:S}}},"./node_modules/tesseract.js/src/createWorker.js":(n,t,e)=>{let o=e("./node_modules/tesseract.js/src/utils/resolvePaths.js"),a=e("./node_modules/tesseract.js/src/utils/circularize.js"),c=e("./node_modules/tesseract.js/src/createJob.js"),{log:h}=e("./node_modules/tesseract.js/src/utils/log.js"),w=e("./node_modules/tesseract.js/src/utils/getId.js"),u=e("./node_modules/tesseract.js/src/constants/OEM.js"),{defaultOptions:M,spawnWorker:E,terminateWorker:l,onMessage:S,loadImage:b,send:x}=e("./node_modules/tesseract.js/src/worker/browser/index.js"),I=0;n.exports=(...T)=>A(Y,[...T],function*(p="eng",L=u.LSTM_ONLY,g={},k={}){let P=w("Worker",I),Se=o(q(q({},M),g)),{logger:z,errorHandler:F}=Se,C=Le(Se,["logger","errorHandler"]),U={},v={},j=typeof p=="string"?p.split("+"):p,R=L,J=k,B=[u.DEFAULT,u.LSTM_ONLY].includes(L)&&!C.legacyCore,D,ee,te=new Promise((y,_)=>{ee=y,D=_}),fe=y=>{D(y.message)},r=E(C);r.onerror=fe,I+=1;let s=(y,_)=>{U[y]=_},i=(y,_)=>{v[y]=_},m=({id:y,action:_,payload:W})=>new Promise((Z,Q)=>{h(`[${P}]: Start ${y}, action=${_}`);let ae=`${_}-${y}`;s(ae,Z),i(ae,Q),x(r,{workerId:P,jobId:y,action:_,payload:W})}),f=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),O=y=>m(c({id:y,action:"load",payload:{options:{lstmOnly:B,corePath:C.corePath,logging:C.logging}}})),G=(y,_,W)=>m(c({id:W,action:"FS",payload:{method:"writeFile",args:[y,_]}})),V=(y,_)=>m(c({id:_,action:"FS",payload:{method:"readFile",args:[y,{encoding:"utf8"}]}})),X=(y,_)=>m(c({id:_,action:"FS",payload:{method:"unlink",args:[y]}})),$=(y,_,W)=>m(c({id:W,action:"FS",payload:{method:y,args:_}})),he=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),ie=(y,_)=>m(c({id:_,action:"loadLanguage",payload:{langs:y,options:{langPath:C.langPath,dataPath:C.dataPath,cachePath:C.cachePath,cacheMethod:C.cacheMethod,gzip:C.gzip,lstmOnly:[u.DEFAULT,u.LSTM_ONLY].includes(R)&&!C.legacyLang}}})),oe=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),ye=(y,_,W,Z)=>m(c({id:Z,action:"initialize",payload:{langs:y,oem:_,config:W}})),qe=(y="eng",_,W,Z)=>{if(B&&[u.TESSERACT_ONLY,u.TESSERACT_LSTM_COMBINED].includes(_))throw Error("Legacy model requested but code missing.");let Q=_||R;R=Q;let ae=W||J;J=ae;let be=(typeof y=="string"?y.split("+"):y).filter(at=>!j.includes(at));return j.push(...be),be.length>0?ie(be,Z).then(()=>ye(y,Q,ae,Z)):ye(y,Q,ae,Z)},et=(y={},_)=>m(c({id:_,action:"setParameters",payload:{params:y}})),tt=(Q,...ae)=>A(Y,[Q,...ae],function*(y,_={},W={blocks:!0,text:!0,hocr:!0,tsv:!0},Z){return m(c({id:Z,action:"recognize",payload:{image:yield b(y),options:_,output:W}}))}),nt=(y="Tesseract OCR Result",_=!1,W)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),m(c({id:W,action:"getPDF",payload:{title:y,textonly:_}}))),st=(y,_)=>A(Y,null,function*(){if(B)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return m(c({id:_,action:"detect",payload:{image:yield b(y)}}))}),rt=()=>A(Y,null,function*(){return r!==null&&(l(r),r=null),Promise.resolve()});S(r,({workerId:y,jobId:_,status:W,action:Z,data:Q})=>{let ae=`${Z}-${_}`;if(W==="resolve"){h(`[${y}]: Complete ${_}`);let me=Q;Z==="recognize"?me=a(Q):Z==="getPDF"&&(me=Array.from(ne(q({},Q),{length:Object.keys(Q).length}))),U[ae]({jobId:_,data:me})}else if(W==="reject")if(v[ae](Q),Z==="load"&&D(Q),F)F(Q);else throw Error(Q);else W==="progress"&&z(ne(q({},Q),{userJobId:_}))});let ot={id:P,worker:r,setResolve:s,setReject:i,load:f,writeText:G,readText:V,removeFile:X,FS:$,loadLanguage:he,initialize:oe,reinitialize:qe,setParameters:et,recognize:tt,getPDF:nt,detect:st,terminate:rt};return O().then(()=>ie(p)).then(()=>ye(p,L,k)).then(()=>ee(ot)).catch(()=>{}),te})},"./node_modules/tesseract.js/src/index.js":(n,t,e)=>{e("./node_modules/regenerator-runtime/runtime.js");let o=e("./node_modules/tesseract.js/src/createScheduler.js"),a=e("./node_modules/tesseract.js/src/createWorker.js"),c=e("./node_modules/tesseract.js/src/Tesseract.js"),h=e("./node_modules/tesseract.js/src/constants/languages.js"),w=e("./node_modules/tesseract.js/src/constants/OEM.js"),u=e("./node_modules/tesseract.js/src/constants/PSM.js"),{setLogging:M}=e("./node_modules/tesseract.js/src/utils/log.js");n.exports=q({languages:h,OEM:w,PSM:u,createScheduler:o,createWorker:a,setLogging:M},c)},"./node_modules/tesseract.js/src/utils/circularize.js":n=>{n.exports=t=>{let e=[],o=[],a=[],c=[],h=[];return t.blocks&&t.blocks.forEach(w=>{w.paragraphs.forEach(u=>{u.lines.forEach(M=>{M.words.forEach(E=>{E.symbols.forEach(l=>{h.push(ne(q({},l),{page:t,block:w,paragraph:u,line:M,word:E}))}),c.push(ne(q({},E),{page:t,block:w,paragraph:u,line:M}))}),a.push(ne(q({},M),{page:t,block:w,paragraph:u}))}),o.push(ne(q({},u),{page:t,block:w}))}),e.push(ne(q({},w),{page:t}))}),ne(q({},t),{blocks:e,paragraphs:o,lines:a,words:c,symbols:h})}},"./node_modules/tesseract.js/src/utils/getEnvironment.js":(n,t,e)=>{let o=e("./node_modules/is-electron/index.js");n.exports=a=>{let c={};return typeof WorkerGlobalScope<"u"?c.type="webworker":o()?c.type="electron":typeof document=="object"?c.type="browser":typeof process=="object"&&(c.type="node"),typeof a>"u"?c:c[a]}},"./node_modules/tesseract.js/src/utils/getId.js":n=>{n.exports=(t,e)=>`${t}-${e}-${Math.random().toString(16).slice(3,8)}`},"./node_modules/tesseract.js/src/utils/log.js":function(n,t){let e=!1;t.logging=e,t.setLogging=o=>{e=o},t.log=(...o)=>e?console.log.apply(this,o):null},"./node_modules/tesseract.js/src/utils/resolvePaths.js":(n,t,e)=>{let a=e("./node_modules/tesseract.js/src/utils/getEnvironment.js")("type")==="browser"?c=>new URL(c,window.location.href).href:c=>c;n.exports=c=>{let h=q({},c);return["corePath","workerPath","langPath"].forEach(w=>{c[w]&&(h[w]=a(h[w]))}),h}},"./node_modules/tesseract.js/src/worker/browser/defaultOptions.js":(n,t,e)=>{let o=e("./node_modules/tesseract.js/package.json").version,a=e("./node_modules/tesseract.js/src/constants/defaultOptions.js");n.exports=ne(q({},a),{workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${o}/dist/worker.min.js`})},"./node_modules/tesseract.js/src/worker/browser/index.js":(n,t,e)=>{let o=e("./node_modules/tesseract.js/src/worker/browser/defaultOptions.js"),a=e("./node_modules/tesseract.js/src/worker/browser/spawnWorker.js"),c=e("./node_modules/tesseract.js/src/worker/browser/terminateWorker.js"),h=e("./node_modules/tesseract.js/src/worker/browser/onMessage.js"),w=e("./node_modules/tesseract.js/src/worker/browser/send.js"),u=e("./node_modules/tesseract.js/src/worker/browser/loadImage.js");n.exports={defaultOptions:o,spawnWorker:a,terminateWorker:c,onMessage:h,send:w,loadImage:u}},"./node_modules/tesseract.js/src/worker/browser/loadImage.js":n=>{let t=o=>new Promise((a,c)=>{let h=new FileReader;h.onload=()=>{a(h.result)},h.onerror=({target:{error:{code:w}}})=>{c(Error(`File could not be read! Code=${w}`))},h.readAsArrayBuffer(o)}),e=o=>A(Y,null,function*(){let a=o;if(typeof o>"u")return"undefined";if(typeof o=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(o)?a=atob(o.split(",")[1]).split("").map(c=>c.charCodeAt(0)):a=yield(yield fetch(o)).arrayBuffer();else if(typeof HTMLElement<"u"&&o instanceof HTMLElement)o.tagName==="IMG"&&(a=yield e(o.src)),o.tagName==="VIDEO"&&(a=yield e(o.poster)),o.tagName==="CANVAS"&&(yield new Promise(c=>{o.toBlob(h=>A(Y,null,function*(){a=yield t(h),c()}))}));else if(typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas){let c=yield o.convertToBlob();a=yield t(c)}else(o instanceof File||o instanceof Blob)&&(a=yield t(o));return new Uint8Array(a)});n.exports=e},"./node_modules/tesseract.js/src/worker/browser/onMessage.js":n=>{n.exports=(t,e)=>{t.onmessage=({data:o})=>{e(o)}}},"./node_modules/tesseract.js/src/worker/browser/send.js":n=>{n.exports=(t,e)=>A(Y,null,function*(){t.postMessage(e)})},"./node_modules/tesseract.js/src/worker/browser/spawnWorker.js":n=>{n.exports=({workerPath:t,workerBlobURL:e})=>{let o;if(Blob&&URL&&e){let a=new Blob([`importScripts("${t}");`],{type:"application/javascript"});o=new Worker(URL.createObjectURL(a))}else o=new Worker(t);return o}},"./node_modules/tesseract.js/src/worker/browser/terminateWorker.js":n=>{n.exports=t=>{t.terminate()}},"./src/parser.ts":(n,t,e)=>{"use strict";e.r(t),e.d(t,{getColumnsData:()=>h,getLines:()=>E,getVerticalLines:()=>M});var o=e("./node_modules/tesseract.js/src/index.js"),a=e.n(o);class c{constructor(){this.words=[],this.text=""}}function h(l){return A(this,null,function*(){let S=yield o.createWorker(),{data:{lines:b}}=yield S.recognize(l.src,{rotateAuto:!0}),x=[];for(let I of u({x0:0,x1:l.width},b)){let p=yield w(S,I,l),L=u(I,p.data.lines);if(L.length>1)for(let g of L){let k=yield w(S,g,l);x.push(k)}else x.push(p)}return S.terminate(),x})}function w(l,S,b){return A(this,null,function*(){let x={left:S.x0,top:0,width:S.x1-S.x0,height:b.height};yield l.setParameters({tessedit_char_whitelist:"0123456789., ",tessedit_pageseg_mode:o.PSM.SINGLE_BLOCK});let I=yield l.recognize(b.src,{rectangle:x});yield l.setParameters({tessedit_char_whitelist:"",tessedit_pageseg_mode:o.PSM.SINGLE_COLUMN});let p=yield l.recognize(b.src,{rectangle:x}),L=I;return I.data.confidence<p.data.confidence&&(L=p),L})}function u(l,S){let b=M(S);b.sort((p,L)=>p.x0-L.x0);let x=[];if(b.length===0)return x.push({x0:l.x0,x1:l.x1}),x;b[0].x0>0&&x.push({x0:l.x0,x1:b[0].x1});for(let p=0;p<b.length-1;p++){let L=b[p],g=b[p+1];x.push({x0:L.x1,x1:g.x0})}let I=b[b.length-1];return I.x1<l.x1&&x.push({x0:I.x1,x1:l.x1}),x}function M(l){let S=[];for(let b=0;b<l.length;b++){let x=l[b].words;for(let I=0;I<x.length-1;I++){let p=x[I].bbox,L=x[I+1].bbox,g={x0:p.x1,x1:L.x0},k=S.filter(T=>T.x0<g.x1&&T.x1>g.x0);if(b==0){let T=l[b+1].words;for(let P=0;P<T.length-1;P++){let z=T[P].bbox,F=T[P+1].bbox,C={x0:z.x1,x1:F.x0},U={x0:Math.max(g.x0,C.x0),x1:Math.min(g.x1,C.x1)};if(U.x0<U.x1){let v=Math.min(p.y0,L.y0),j=Math.max(z.y1,F.y1),R={x0:U.x0,x1:U.x1,y0:v,y1:j};S.push(R)}}}else k.length>0&&k.forEach(T=>{let P={x0:Math.max(g.x0,T.x0),x1:Math.min(g.x1,T.x1)},z=l[b-1].bbox.y0<T.y1;if(P.x0<P.x1&&z)T.y1=Math.max(p.y1,L.y1),T.x0=P.x0,T.x1=P.x1;else{let F=S.indexOf(T);S.splice(F,1)}})}}return S}function E(l){l=l.filter(v=>v.data.lines.length>0);let S=l.length,b=l.map(v=>v.data.lines.length),x=Math.max(...b),I=l.filter(v=>v.data.lines.length!==x);if(I){let v=l.filter(j=>j.data.lines.length===x);for(let j=0;j<x;j++){let R=Math.min(...v.map(D=>D.data.lines[j].bbox.y0)),J=Math.max(...v.map(D=>D.data.lines[j].bbox.y1)),B=I.map(D=>[...D.data.lines]);for(let D in B){let ee=B[D][j].bbox,te=ee.y0+(ee.y1-ee.y0)/2;R<te&&te<J||I[D].data.lines.splice(j,0,new c)}}}let p=null,L=null,g=null,k=null,T=0,P=(v,j)=>Math.abs(v-j)<1e-9,z=l.map(v=>v.data.lines.reduce((j,R)=>j+parseFloat(R.text.replace(",",".")||"0"),0)),F=l.map(v=>v.data.lines.reduce((j,R)=>j+R.words.length,0)/v.data.lines.length);k=F.indexOf(Math.max(...F));for(let v=0;v<S;v++)if(v!==k){for(let j=0;j<S;j++)if(!(j===k||v===j))for(let R=0;R<S;R++){if(R===k||R===v||R===j)continue;let J=0;for(let B=0;B<x;B++){let D=parseFloat(l[v].data.lines[B].text.replace(",",".")),ee=parseFloat(l[j].data.lines[B].text.replace(",",".")),te=parseFloat(l[R].data.lines[B].text.replace(",","."));P(D*ee,te)&&J++}J>T&&(T=J,g=R,p=v,L=j)}}g===null&&(g=z.indexOf(Math.max(...z.filter(v=>!isNaN(v)))));let C=v=>l[v].data.lines.filter(j=>Number.isInteger(parseFloat(j.text.replace(",",".")))).length;if(p!=null&&L!=null&&C(p)>C(L)){let v=L;L=p,p=v}let U=[];for(let v=0;v<x;v++){let j=parseFloat(l[g].data.lines[v].text.replace(",",".")),R=l[k].data.lines[v].text.trim(),J,B,D=!1;p!==null&&L!==null&&(J=parseFloat(l[p].data.lines[v].text.replace(",",".")),B=parseFloat(l[L].data.lines[v].text.replace(",",".")),P(J*B,j)&&(D=!0)),U.push({description:R,price:J,amount:B,total:j,match:D})}return U}},"./node_modules/tesseract.js/package.json":n=>{"use strict";n.exports=JSON.parse('{"name":"tesseract.js","version":"5.1.1","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0","acorn":"^8.8.2","babel-loader":"^9.1.2","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1","express":"^4.18.2","mocha":"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^5.0.0","rollup":"^3.20.7","wait-on":"^7.0.1","webpack":"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},"dependencies":{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.1.1","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"overrides":{"@rollup/pluginutils":"^5.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')}},H={};function N(n){var t=H[n];if(t!==void 0)return t.exports;var e=H[n]={exports:{}};return K[n].call(e.exports,e,e.exports,N),e.exports}N.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return N.d(t,{a:t}),t},N.d=(n,t)=>{for(var e in t)N.o(t,e)&&!N.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},N.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),N.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var d={};return(()=>{"use strict";N.r(d),N.d(d,{recognizeBill:()=>e});var n=N("./src/parser.ts"),t=N("./node_modules/canvas/browser.js");let e=o=>A(Y,null,function*(){let a=yield(0,t.loadImage)(o),c=yield(0,n.getColumnsData)(a);return(0,n.getLines)(c)})})(),d})())});var Ze=ct(Xe());var lt=["billCanvas"],ut=["result"];function dt(K,H){if(K&1&&(se(0,"ion-note"),de(1),re()),K&2){let N=Ce();pe(),Re(" ",N.loading," Selecciona el \xE1rea solo con las lineas que quieres escanear, sin ning\xFAn otro dato. ")}}function ht(K,H){K&1&&(se(0,"ion-note"),ue(1,"ion-spinner",8),de(2," Cargando imagen... "),re())}function ft(K,H){K&1&&(se(0,"ion-note"),ue(1,"ion-spinner",8),de(2," Transformando ticket... "),re())}function mt(K,H){K&1&&(se(0,"ion-note"),ue(1,"ion-spinner",8),de(2," Leyendo ticket... "),re())}var St=(()=>{let H=class H{constructor(d,n){this.router=d,this.currentTicket=n,this.corners=[],this.image=new Image,this.draggingIndex=null,this.pageLoading=!0,this.currentTicket.image||this.router.navigate(["/"]),He({checkmarkOutline:Je})}ionViewDidEnter(){this.image.onload=()=>this.onImageLoad(),this.image.src=this.currentTicket.image.webPath}onRead(){return A(this,null,function*(){this.loading="transforming",yield new Promise(()=>{setTimeout(()=>{this.onTransform()},20)})})}onTransform(){return A(this,null,function*(){let d=this.corners.map(({x:E,y:l})=>({x:E*(this.image.width/this.canvas.width),y:l*(this.image.height/this.canvas.height)})),n=d.map(({x:E,y:l})=>[E,l]).flat(),t=Math.max(...d.map(({x:E})=>E))-Math.min(...d.map(({x:E})=>E)),e=Math.max(...d.map(({y:E})=>E))-Math.min(...d.map(({y:E})=>E)),o=[[0,0],[t,0],[t,e],[0,e]].flat(),a=cv.matFromArray(4,1,cv.CV_32FC2,n),c=cv.matFromArray(4,1,cv.CV_32FC2,o),h=cv.getPerspectiveTransform(a,c),w=cv.matFromImageData(this.getImageData()),u=new cv.Mat;cv.warpPerspective(w,u,h,new cv.Size(t,e),cv.INTER_LINEAR,cv.BORDER_CONSTANT,new cv.Scalar(0,0,0,0));let M=this.getImageFromMatrix(u,t,e);this.loading="reading",this.image.src=M,(0,Ze.recognizeBill)(M).then(E=>{this.currentTicket.lines=E.map((l,S)=>{let b=l.amount||1,x=l.price||l.total;return{id:S,description:l.description,amount:{numerator:b,denominator:1},price:x,total:b*x,match:l.match}}),this.router.navigate(["/show-lines"])}),w.delete(),u.delete(),a.delete(),c.delete(),h.delete()})}onCanvasMouseDown(d){let n=this.canvas.getBoundingClientRect(),t=d.clientX-n.left,e=d.clientY-n.top;this.corners.forEach((o,a)=>{Math.sqrt((o.x-t)**2+(o.y-e)**2)<10&&(this.draggingIndex=a)})}onCanvasMouseMove(d){if(this.draggingIndex!==null){let n=this.canvas.getBoundingClientRect(),t=d.clientX-n.left,e=d.clientY-n.top;this.corners[this.draggingIndex].x=t,this.corners[this.draggingIndex].y=e,this.canvas.getContext("2d")&&this.draw()}}onMouseUp(){this.draggingIndex=null}onCanvasTouchStart(d){d.preventDefault();let n=this.canvas.getBoundingClientRect(),t=d.touches[0].clientX-n.left,e=d.touches[0].clientY-n.top;this.corners.forEach((o,a)=>{Math.sqrt((o.x-t)**2+(o.y-e)**2)<20&&(this.draggingIndex=a)})}onCanvasTouchMove(d){if(d.preventDefault(),this.draggingIndex!==null){let n=this.canvas.getBoundingClientRect(),t=d.touches[0].clientX-n.left,e=d.touches[0].clientY-n.top;this.corners[this.draggingIndex].x=t,this.corners[this.draggingIndex].y=e,this.canvas.getContext("2d")&&this.draw()}}setDefaultPoints(){this.corners=[{x:0,y:0},{x:this.canvas.width,y:0},{x:this.canvas.width,y:this.canvas.height},{x:0,y:this.canvas.height}]}draw(){let d=this.canvas.getContext("2d");if(d&&(d.clearRect(0,0,this.canvas.width,this.canvas.height),d.drawImage(this.image,0,0,this.canvas.width,this.canvas.height),!this.loading)){this.corners.forEach(t=>{d.fillStyle="rgba(0, 162, 255, 0.7)",d.fillRect(t.x-15/2,t.y-15/2,15,15)}),d.fillStyle="rgba(0, 0, 255, 0.3)",d.beginPath(),d.moveTo(this.corners[0].x,this.corners[0].y);for(let t=1;t<this.corners.length;t++)d.lineTo(this.corners[t].x,this.corners[t].y);d.closePath(),d.fill()}}getImageData(){let d=document.createElement("canvas"),n=d.getContext("2d");return d.width=this.image.width,d.height=this.image.height,n.drawImage(this.image,0,0),n.getImageData(0,0,this.image.width,this.image.height)}getImageFromMatrix(d,n,t){let e=document.createElement("canvas"),o=e.getContext("2d");e.width=n,e.height=t;let a=new ImageData(new Uint8ClampedArray(d.data),d.cols,d.rows);return o.putImageData(a,0,0),e.toDataURL("image/png")}getScale(d){let n=this.content.nativeElement.clientWidth,t=this.content.nativeElement.clientHeight,e=getComputedStyle(this.content.nativeElement),o=e.getPropertyValue("--padding-start"),a=e.getPropertyValue("--padding-end"),c=e.getPropertyValue("--padding-top"),h=e.getPropertyValue("--padding-bottom");n-=parseFloat(o)+parseFloat(a),t-=parseFloat(c)+parseFloat(h);let w=n/d.width,u=t/d.height;return Math.min(w,u)}onImageLoad(){this.pageLoading=!1;let d=this.getScale(this.image);this.canvas=this.billCanvas.nativeElement,this.canvas.width=this.image.width*d,this.canvas.height=this.image.height*d,this.setDefaultPoints(),this.draw()}};H.\u0275fac=function(n){return new(n||H)(xe(De),xe(Qe))},H.\u0275cmp=Pe({type:H,selectors:[["app-show-picture"]],viewQuery:function(n,t){if(n&1&&(ge(lt,7),ge(_e,5,ke),ge(ut,7)),n&2){let e;we(e=ve())&&(t.billCanvas=e.first),we(e=ve())&&(t.content=e.first),we(e=ve())&&(t.result=e.first)}},standalone:!0,features:[Ae],decls:19,vars:2,consts:[["content",""],["billCanvas",""],["slot","start"],[1,"ion-padding","list"],["id","billCanvas",3,"mousedown","mousemove","mouseup","touchstart","touchmove","touchend"],["slot","fixed","horizontal","center","vertical","bottom"],[3,"click","disabled"],["name","checkmark-outline"],["name","bubbles"]],template:function(n,t){if(n&1){let e=Te();se(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),ue(3,"ion-menu-button"),re(),se(4,"ion-title"),de(5,"Escanear ticket"),re()(),se(6,"ion-toolbar"),Oe(7,dt,2,1,"ion-note")(8,ht,3,0,"ion-note")(9,ft,3,0,"ion-note")(10,mt,3,0,"ion-note"),re()(),se(11,"ion-content",3,0)(13,"ion-row")(14,"canvas",4,1),je("mousedown",function(a){return ce(e),le(t.onCanvasMouseDown(a))})("mousemove",function(a){return ce(e),le(t.onCanvasMouseMove(a))})("mouseup",function(){return ce(e),le(t.onMouseUp())})("touchstart",function(a){return ce(e),le(t.onCanvasTouchStart(a))})("touchmove",function(a){return ce(e),le(t.onCanvasTouchMove(a))})("touchend",function(){return ce(e),le(t.onMouseUp())}),re()()(),se(16,"ion-fab",5)(17,"ion-fab-button",6),je("click",function(){return ce(e),le(t.onRead())}),ue(18,"ion-icon",7),re()()}n&2&&(pe(7),Ie(!t.pageLoading&&!t.loading?7:t.pageLoading?8:t.loading==="transforming"?9:10),pe(10),Me("disabled",t.pageLoading||!!t.loading))},dependencies:[Ne,_e,Fe,Be,ze,Ke,Ue,We,Ge,Ve,$e,Ye],styles:[".original[_ngcontent-%COMP%], .processed[_ngcontent-%COMP%]{flex-basis:50%}#output[_ngcontent-%COMP%], #photo[_ngcontent-%COMP%]{max-width:100%}div[slot=fixed][_ngcontent-%COMP%]{top:50%;right:20px}table[_ngcontent-%COMP%]{border-collapse:collapse;font-family:sans-serif;font-size:.8rem;letter-spacing:1px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px 10px}td[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     .cropper-point.point-se{height:5px;width:5px}"]});let K=H;return K})();export{St as ShowPicturePage};