function addMouseWheel(obj,fn){

if (window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1) {
	obj.addEventListener("DOMMouseScroll",fnWheel,false);
} else {
	obj.onmousewheel=fnWheel;

}
function fnWheel(ev){
	var oEvent=ev||event;
	var bF=true;
	if (oEvent.wheelDelta) {
		bF=oEvent.wheelDelta>0?false:true;
		
	} else {
		bF=oEvent.detail>0?true:false;
		
	}
	typeof fn=="function"&&fn(bF);
	oEvent.preventDefault&&oEvent.preventDefault();
	return false;
}
}	