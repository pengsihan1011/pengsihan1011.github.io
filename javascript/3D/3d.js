window.onload = function(){
	var oUl = document.getElementById("ul1");
	var aLi = oUl.children;
	var len = aLi.length;
	var bLeft = bTop = bRight = bBottom = false;
	
	
	for(var i = 0; i < len; i++){
		aLi[i].style.transition = "1s all ease " + (len-i)*200 + "ms";
		var d = 360/len*i;
		aLi[i].style.transform = "rotateY("+d+"deg) translateZ(250px)"; 	
	}
	
	var y = 0;//y轴角度
	var x = 150;//x轴角度
	
	
	var speedX = 0;
	var speedY = 0;
	var lastX = 0;
	var lastY = 0;
	var count = 0;
	
	var timer = null;
	
	document.onmousedown = function(ev){ 
		clearInterval(timer);
		var oEvent=ev||event;
	 	var disX = oEvent.clientX - y;
		var disY = oEvent.clientY - x;
		document.onmousemove = function(ev){ 
		 	var oEvent=ev||event;
		 	y = oEvent.clientX - disX;
			x = oEvent.clientY - disY;
			
			if(x > 600){
				x = 600;
			} else if(x < -600){
				x = -600;
			}
		 	oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";
			
			speedX = x - lastX;
			speedY = y - lastY;
			lastX = x;
			lastY = y;
			 
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null; 
			clearInterval(timer);
			timer = setInterval(function(){
				
				x += speedX;
				y += speedY;
				
				speedX *= 0.95;
				speedY *= 0.95;
				
				if(Math.abs(speedX)<1){
					speedX = 0;
				}
				if(Math.abs(speedY)<1){
					speedY = 0;
				}
				
				if(speedX == 0 && speedY == 0){
					clearInterval(timer);
				}
				
				
				if(x > 600){
					x = 600;
				} else if(x < -600){
					x = -600;
				}
				
				oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";
				
			},30);
		};	 
		return false;
	};
	
	
 
};