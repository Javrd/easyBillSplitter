import{a as be}from"./chunk-BNPVTZVY.js";import{b as ye}from"./chunk-H7G7SA3B.js";import{a as ve}from"./chunk-DBYLPBXF.js";import"./chunk-6BZCFKK7.js";import{A as se,D as V,G as le,H as me,J as ue,M as de,N as ce,P as pe,Q as _e,R as ge,S as fe,T as q,U as he,W as Ce,X as xe,f as G,j as H,k as X,l as Y,m as L,p as Z,t as ee,u as te,v as ne,w as ie,x as oe,y as ae,z as re}from"./chunk-MM6CRWK5.js";import{$a as g,Aa as P,Ma as v,Na as h,Pa as A,R as B,Ra as U,Sa as D,Ta as N,Tb as W,Ua as r,Va as s,Wa as M,_ as I,_a as x,ab as m,fb as k,gb as O,hb as E,ia as c,ib as R,ja as p,jb as _,kb as b,lb as $,mb as j,nb as z,ob as J,pb as K,qb as T,za as u}from"./chunk-DPZDZGEI.js";import"./chunk-HYK4U74Y.js";import"./chunk-JVFFMWOY.js";import"./chunk-GI7IJE5M.js";import"./chunk-CIS7OW2H.js";import"./chunk-G3CV3VGG.js";import"./chunk-ZSXYZYSQ.js";import"./chunk-5MPL5A3U.js";import"./chunk-NKT2XMZU.js";import"./chunk-4U6PRYVA.js";import"./chunk-GN6S5PAX.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{a as w,b as S,i as F}from"./chunk-OYAVQN5W.js";var Me=["denominator"];function Se(a,l){if(a&1){let i=x();r(0,"ion-label",3),_(1,"\u2014"),s(),r(2,"ion-input",4,0),g("input",function(t){c(i);let n=m();return p(n.onDenominatorChange(t))})("keydown",function(t){c(i);let n=m();return p(n.denominatorKeydown(t))}),s()}if(a&2){let i=m();u(2),h("value",i.value.denominator)}}var we=(()=>{let l=class l{constructor(){this.value={numerator:0,denominator:1},this.onChange=e=>{},this.onTouched=()=>{}}onNumeratorChange(e){let t=+e.target.value;this.value=S(w({},this.value),{numerator:t}),this.onChange(this.value)}onDenominatorChange(e){let t=+e.target.value;t!==0&&(this.value=S(w({},this.value),{denominator:t}),this.onChange(this.value))}writeValue(e){e&&(this.value=e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}numeratorKeydown(e){e.key==="/"&&this.denominator.setFocus(),e.key==="-"&&e.preventDefault()}denominatorKeydown(e){["0","-"].includes(e.key)&&e.preventDefault()}};l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=I({type:l,selectors:[["app-fraction-input"]],viewQuery:function(t,n){if(t&1&&k(Me,5),t&2){let o;O(o=E())&&(n.denominator=o.first)}},standalone:!0,features:[K([{provide:H,useExisting:B(()=>l),multi:!0}]),T],decls:3,vars:2,consts:[["denominator",""],[1,"amount-container"],["type","number","min","0","step","1","inputmode","numeric","clearOnEdit","",1,"numerator",3,"input","keydown","value"],[1,"separator"],["type","number","min","1","step","1","inputmode","numeric","clearOnEdit","",1,"denominator",3,"input","keydown","value"]],template:function(t,n){t&1&&(r(0,"div",1)(1,"ion-input",2),g("input",function(d){return n.onNumeratorChange(d)})("keydown",function(d){return n.numeratorKeydown(d)}),s(),v(2,Se,4,1),s()),t&2&&(u(),h("value",(n.value==null?null:n.value.numerator)||0),u(),A(n.value&&n.value.numerator!==0?2:-1))},dependencies:[V,fe,L],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:1.5em;flex:0;flex-basis:auto;margin:0;text-align:center}[_nghost-%COMP%]   .numerator[_ngcontent-%COMP%]{line-height:.8em}[_nghost-%COMP%]   .separator[_ngcontent-%COMP%]{line-height:.45em}[_nghost-%COMP%]   .numerator[_ngcontent-%COMP%], [_nghost-%COMP%]   .denominator[_ngcontent-%COMP%]{min-height:0}"]});let a=l;return a})();var ke=["multipleAssignmentModal"];function Oe(a,l){if(a&1){let i=x();r(0,"ion-chip",10),g("click",function(){let t=c(i).$implicit,n=m();return p(n.selectUser(t))}),_(1),s()}if(a&2){let i=l.$implicit,e=m();h("color",e.selectedUser===i?"primary":"default")("outline",!0),u(),$(" ",i.name," ")}}function Ee(a,l){a&1&&(r(0,"ion-label",4),_(1,"\xA1Todo asignado!"),s())}function Ie(a,l){if(a&1){let i=x();r(0,"app-ticket",11),g("lineClick",function(t){c(i);let n=m();return p(n.assignLine(t.line))})("longPress",function(t){c(i);let n=m();return p(n.advancedAssign(t,"fractional"))}),s()}if(a&2){let i=m();h("lines",i.selectedUser?i.selectedUser.lines:i.unassigned)}}function Te(a,l){if(a&1){let i=x();r(0,"app-fraction-input",23),J("ngModelChange",function(t){c(i);let n=m().$implicit;return z(n.amount,t)||(n.amount=t),p(t)}),g("change",function(){c(i);let t=m().$implicit,n=m(2);return p(n.updateUserFraction(t))}),s()}if(a&2){let i=m().$implicit;j("ngModel",i.amount)}}function Le(a,l){if(a&1){let i=x();r(0,"ion-item",20),g("click",function(){let t=c(i).$implicit,n=m(2);return p(n.modalAddUser(t))}),r(1,"ion-label",21),_(2),s(),v(3,Te,1,1,"app-fraction-input",22),s()}if(a&2){let i=l.$implicit;m();let e=R(6);h("button",e.value==="balanced"),u(),h("color",i.selected?"primary":"default"),u(),b(i.name),u(),A(e.value!=="balanced"?3:-1)}}function Ve(a,l){if(a&1&&(r(0,"ion-label",27),_(1),s(),r(2,"ion-label",28),_(3,"\u2014"),s(),r(4,"ion-label",29),_(5),s()),a&2){let i=m(3);u(),b(i.modal==null?null:i.modal.unassignedAmount.numerator),u(4),b(i.modal==null?null:i.modal.unassignedAmount.denominator)}}function Fe(a,l){if(a&1&&(r(0,"ion-label"),_(1),s()),a&2){let i=m(3);u(),b(i.modal==null?null:i.modal.unassignedAmount.numerator)}}function Ue(a,l){if(a&1&&(r(0,"ion-footer",17)(1,"ion-item")(2,"ion-title",24)(3,"ion-label",25),_(4," Por asignar: "),r(5,"div",26),v(6,Ve,6,2)(7,Fe,2,1,"ion-label"),s()()()()()),a&2){let i=m(2);u(6),A((i.modal==null?null:i.modal.unassignedAmount.denominator)>1&&(i.modal==null?null:i.modal.unassignedAmount.numerator)!==0?6:7)}}function De(a,l){if(a&1){let i=x();r(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),_(3),s()(),r(4,"ion-toolbar")(5,"ion-segment",12,1)(7,"ion-segment-button",13),g("click",function(){c(i);let t=m();return p(t.distributeEvenly())}),M(8,"ion-icon",14),s(),r(9,"ion-segment-button",15),_(10,"\xBD"),s()()()(),r(11,"ion-content",4),D(12,Le,4,4,"ion-item",16,U),s(),v(14,Ue,8,1,"ion-footer",17),r(15,"ion-fab",7)(16,"ion-fab-button",8),g("click",function(){c(i);let t=m();return p(t.modalCancel())}),M(17,"ion-icon",18),s(),r(18,"ion-fab-button",19),g("click",function(){c(i);let t=m();return p(t.modalSave())}),M(19,"ion-icon",9),s()()}if(a&2){let i=R(6),e=m();u(3),b(e.modal==null?null:e.modal.title),u(2),h("value",e.modal.mode),u(7),N(e.modal.users),u(2),A(i.value!=="balanced"&&(e.modal==null||e.modal.unassignedAmount==null?null:e.modal.unassignedAmount.numerator)!==0?14:-1),u(4),h("disabled",(e.modal==null?null:e.modal.unassignedAmount.numerator)<0)}}var it=(()=>{let l=class l{constructor(e,t,n,o,d){this.currentTicket=e,this.storageService=t,this.toastController=n,this.alertController=o,this.router=d,this.currentTicket.lines||this.router.navigate(["/"]),this.unassigned=JSON.parse(JSON.stringify(this.currentTicket.lines)),this.title="Asignar ticket",this.description="Pulsa una linea y rep\xE1rtela entre los participantes que quieras o pulsa en un participante       para asignarle sus lineas.",he({checkmarkOutline:Ce,closeOutline:xe})}ionViewWillEnter(){return F(this,null,function*(){this.users=yield this.storageService.getUsers()})}selectUser(e){e===this.selectedUser?(this.selectedUser=void 0,this.title="Asignar ticket",this.description="Pulsa una linea y rep\xE1rtela entre los participantes que quieras o pulsa en un         participante para asignarle sus lineas."):(this.selectedUser=e,this.title=`Asignar ticket - ${e.name}`,this.description="Pulsa una linea para asignar una unidad o haz una pulsaci\xF3n larga para realizar         asignaci\xF3n avanzada.",e.lines||this.populateUserLines(e))}assignLine(e){return F(this,null,function*(){let t=this.unassigned.find(n=>n.id===e.id);if(!t)(yield this.toastController.create({position:"top",message:"No quedan elementos por asignar para esta linea",duration:1500,color:"warning"})).present();else if(!this.selectedUser)this.advancedAssign(e);else{let n=e.amount.denominator;e.amount=this.sumFractions(e.amount,{numerator:1,denominator:n}),this.updateTotal(e),t.amount=this.sumFractions(t.amount,{numerator:-1,denominator:n}),this.updateTotal(t),t.amount.numerator===0&&this.assignmentComplete(t)}})}advancedAssign(e,t="balanced"){let n=this.users.map(f=>{let C;if(f.lines){let Q=f.lines.find(Ae=>Ae.id===e.id);C=Q?Q.amount:{numerator:0,denominator:1}}else C={numerator:0,denominator:1};return S(w({},f),{amount:C,selected:C.numerator!==0})}),o=this.unassigned.find(f=>f.id===e.id),d=o?o==null?void 0:o.amount:{numerator:0,denominator:1},y=this.sumFractions(...n.map(f=>f.amount),d);this.modal={index:e.id,title:e.description,mode:t,users:n,totalAmount:y,unassignedAmount:w({},y)},this.multipleAssignmentModal.present()}modalAddUser(e){this.option.value==="balanced"&&(e.selected=!e.selected,e.selected?this.distributeEvenly():(e.amount={numerator:0,denominator:1},this.distributeEvenly()))}distributeEvenly(){let e=this.modal.users.filter(o=>o.selected).length,t=e*this.modal.totalAmount.denominator||1,n=this.gcd(this.modal.totalAmount.numerator,t);this.modal.users.filter(o=>o.selected).forEach(o=>{o.amount.denominator=t/n,o.amount.numerator=this.modal.totalAmount.numerator/n}),e>0&&(this.modal.unassignedAmount={numerator:0,denominator:1})}updateUserFraction(e){e.selected=e.amount.numerator>0,this.modal.users?this.modal.unassignedAmount=this.sumFractions(this.modal.totalAmount,...this.modal.users.map(t=>({numerator:t.amount.numerator*-1,denominator:t.amount.denominator}))):this.modal.unassignedAmount={numerator:this.modal.totalAmount.numerator,denominator:this.modal.totalAmount.denominator}}onDidDismiss(){this.modal=void 0}modalCancel(){this.multipleAssignmentModal.dismiss()}modalSave(){let e=this.unassigned.find(t=>t.id===this.modal.index);e||(this.unassigned=this.restoreLine(this.unassigned,this.modal.index),e=this.unassigned.find(t=>t.id===this.modal.index)),this.modal.users.forEach(t=>{let n=this.users.find(o=>o.name===t.name);if(!n.lines&&t.amount.numerator!==0&&this.populateUserLines(n),n.lines){let o=n.lines.find(d=>d.id===this.modal.index);o||(n.lines=this.restoreLine(n.lines,this.modal.index),o=this.unassigned.find(d=>d.id===this.modal.index)),o.amount=w({},t.amount),this.updateTotal(o)}}),e.amount=this.modal.unassignedAmount,this.updateTotal(e),e.amount.numerator===0&&this.assignmentComplete(e),this.multipleAssignmentModal.dismiss()}showResults(){if(this.selectedUser)this.selectUser(this.selectedUser);else if(this.unassigned.length>0){let e=this.unassigned.reduce((t,n)=>t+n.total,0);this.alertController.create({header:"\xBFEstas seguro?",message:`Aun quedan un descuadre de ${e.toFixed(2)} \u20AC por asignar que no se reflejar\xE1 en ning\xFAn participante.`,buttons:[{text:"Cancelar",role:"cancel"},{text:"OK",role:"confirm",handler:()=>this.saveAndShowResults()}]}).then(t=>t.present())}else this.saveAndShowResults()}populateUserLines(e){e.lines=JSON.parse(JSON.stringify(this.unassigned)).filter(t=>t.amount.numerator>0),e.lines.forEach(t=>{t.amount.numerator=0,t.total=0})}saveAndShowResults(){let e=this.users.filter(t=>t.lines);e.forEach(t=>{t.lines=t.lines.filter(n=>n.amount.numerator>0),t.total=t.lines.reduce((n,{total:o})=>n+o,0)}),this.currentTicket.users=e,this.storageService.saveHistoryEntry(e),this.router.navigate(["/show-results"])}gcd(e,t){return t===0?e:this.gcd(t,e%t)}assignmentComplete(e){this.users.forEach(n=>{var d;let o=(d=n.lines)==null?void 0:d.findIndex(y=>y.id===e.id);o&&n.lines[o].amount.numerator===0&&n.lines.splice(o,1)});let t=this.unassigned.findIndex(n=>n.id===e.id);this.unassigned.splice(t,1)}sumFractions(...e){return e.map(n=>(typeof n=="number"&&(n={numerator:n,denominator:1}),n)).reduce((n,o)=>{let d=n.denominator*o.denominator,y=n.numerator*d/n.denominator+o.numerator*d/o.denominator,f=this.gcd(y,d),C={numerator:y/f,denominator:d/f};return C.denominator<0&&(C.numerator*=-1,C.denominator*=-1),C},{numerator:0,denominator:1})}updateTotal(e){e.total=e.price*e.amount.numerator/e.amount.denominator}restoreLine(e,t){let n=JSON.parse(JSON.stringify(this.currentTicket.lines.find(o=>o.id===t)));return[...e.slice(0,t),n,...e.slice(t)]}};l.\u0275fac=function(t){return new(t||l)(P(ve),P(be),P(_e),P(pe),P(G))},l.\u0275cmp=I({type:l,selectors:[["app-assign-lines"]],viewQuery:function(t,n){if(t&1&&(k(ke,5),k(q,5)),t&2){let o;O(o=E())&&(n.multipleAssignmentModal=o.first),O(o=E())&&(n.option=o.first)}},standalone:!0,features:[T],decls:21,vars:3,consts:[["multipleAssignmentModal",""],["mode",""],["slot","start"],[3,"color","outline"],[1,"ion-padding"],[3,"lines"],[3,"didDismiss"],["slot","fixed","horizontal","center","vertical","bottom"],[3,"click"],["name","checkmark-outline"],[3,"click","color","outline"],[3,"lineClick","longPress","lines"],[3,"value"],["value","balanced",3,"click"],["src","/assets/icon/balance_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"],["value","fractional",1,"fraction-icon"],["detail","false",3,"button"],[1,"modal-footer"],["name","close-outline"],[3,"click","disabled"],["detail","false",3,"click","button"],[3,"color"],["slot","end",3,"ngModel"],["slot","end",3,"ngModelChange","change","ngModel"],["color","warning"],[1,"title"],[1,"fraction"],[1,"numerator"],[1,"separator"],[1,"denominator"]],template:function(t,n){if(t&1){let o=x();r(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),M(3,"ion-menu-button"),s(),r(4,"ion-title"),_(5),s()(),r(6,"ion-toolbar")(7,"ion-note"),_(8),s()(),r(9,"ion-toolbar"),D(10,Oe,2,3,"ion-chip",3,U),s()(),r(12,"ion-content"),v(13,Ee,2,0,"ion-label",4)(14,Ie,1,1,"app-ticket",5),s(),r(15,"ion-modal",6,0),g("didDismiss",function(){return c(o),p(n.onDidDismiss())}),v(17,De,20,4,"ng-template"),s(),r(18,"ion-fab",7)(19,"ion-fab-button",8),g("click",function(){return c(o),p(n.showResults())}),M(20,"ion-icon",9),s()()}t&2&&(u(5),b(n.title),u(3),b(n.description),u(2),N(n.users),u(3),A(!n.selectedUser&&n.unassigned.length===0?13:14))},dependencies:[W,L,X,Y,we,ee,te,ne,ie,oe,ae,re,ge,se,V,le,Z,me,q,ue,de,ce,ye],styles:["ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:30px;--offset-bottom: calc(var(--app-bottom-space) * -1)}ion-list[_ngcontent-%COMP%]{padding-bottom:calc(var(--app-button-height) / 2)}.fraction-icon[_ngcontent-%COMP%]{font-size:1.5em;--color: var(--color)}.modal-footer[_ngcontent-%COMP%]{margin-bottom:var(--app-bottom-space);padding-bottom:30px}.modal-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0}.modal-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center}.modal-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:1.5em;flex:0;flex-basis:auto;margin:0 0 0 10px;text-align:center}.modal-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%]   .numerator[_ngcontent-%COMP%]{line-height:.8em}.modal-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .fraction[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{line-height:.45em}ion-fab[_ngcontent-%COMP%]{display:flex}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px}"]});let a=l;return a})();export{it as AssignLinesPage};
