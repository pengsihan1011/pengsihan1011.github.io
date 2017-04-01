function d2a(n){
	return n*Math.PI/180;	
}
window.onload = function(){
	var oDiv = document.getElementById("div1");
	var oH   = oDiv.querySelector(".hour");
	var oM   = oDiv.querySelector(".min");
	var oS   = oDiv.querySelector(".sec");
	
	clock();
	setInterval(clock,30);
	function clock(){
		var oDate = new Date();
		var iH = oDate.getHours();
		var iM = oDate.getMinutes();
		var iS = oDate.getSeconds();
		var iMs = oDate.getMilliseconds();
		
		oH.style.transform = "rotate("+(iH*30 + iM/60*30)+"deg)";
		oM.style.transform = "rotate("+(iM*6+ iS/60*6)+"deg)";
		oS.style.transform = "rotate("+(iS*6+ iMs/1000*6)+"deg)";
	}
	
	for(var i = 0; i < 60; i++){
		var oSpan = document.createElement("span");
		oDiv.appendChild(oSpan);
		                                                                                                                                  
		if(i%5 == 0){
			oSpan.classList.add("on");
			oSpan.innerHTML = "<em>"+(i==0?12:i/5)+"<\/em>";
			oSpan.children[0].style.transform = "rotate("+-i*6+"deg)";
		}
		oSpan.style.transform = "rotate("+i*6+"deg)";
	}



	var oC = document.getElementById("c1");
	var gd = oC.getContext("2d");
	
	var cx = 200;
	var cy = 200;
	var r  = 130;
	var d = 0;
	
	var h = 40;
	gd.font = h + "px kaiti";
	setInterval(function(){
		gd.clearRect(0,0,oC.width,oC.height);
		var oDate = new Date();
		var iH = oDate.getHours();
		var iM = oDate.getMinutes();
		var iS = oDate.getSeconds()
		var iMs = oDate.getMilliseconds();
		
		drawArc(cx,cy,r,0,iH%12*30 + iM/60*30,"red");
		drawArc(cx,cy,r+15,0,iM*6+iS/60*6,"green");
		drawArc(cx,cy,r+30,0,iS*6+iMs/1000*6,"pink");


		iH=addZero(iH);
		iM=addZero(iM);
		iS=addZero(iS);
		var str = [
			iH,iM,iS
	    ].join(":");
		var w = gd.measureText(str).width;
		gd.fillText(str,cx-w/2,cy+h/2);
	},30);
	
	function drawArc(cx,cy,r,start,end,color){
		start -= 90;
		end -= 90;
		gd.lineWidth = "15";
		gd.beginPath();
		gd.strokeStyle = color;
		gd.arc(cx,cy,r,d2a(start),d2a(end),false);	
		gd.stroke();
		
	}

	function addZero(n){
		if (n<10) {
			return "0"+n;
		} else {
			return ""+n;
		}
	}
	
};