import{a as t,c as a,d as n,g as h}from"./chunk-RU3OUDH6.js";import{i as o}from"./chunk-OYAVQN5W.js";var r=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}",l=(()=>{let s=class{constructor(e){h(this,e),this.onPhoto=n(this,"onPhoto",7),this.noDeviceError=n(this,"noDeviceError",7),this.handlePhoto=i=>o(this,null,function*(){this.onPhoto.emit(i)}),this.handleNoDeviceError=i=>o(this,null,function*(){this.noDeviceError.emit(i)}),this.facingMode="user",this.hidePicker=!1,this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}handleBackdropClick(e){e.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(e){e.stopPropagation()}handleBackdropKeyUp(e){e.key==="Escape"&&this.onPhoto.emit(null)}render(){return t("div",{class:"wrapper",onClick:e=>this.handleBackdropClick(e)},t("div",{class:"content"},t("pwa-camera",{onClick:e=>this.handleComponentClick(e),facingMode:this.facingMode,hidePicker:this.hidePicker,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}get el(){return a(this)}};return s.style=r,s})();export{l as pwa_camera_modal_instance};
