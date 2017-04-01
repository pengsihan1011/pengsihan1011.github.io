function demo4(id){
	var oDiv=document.getElementById(id);
	var oUl = oDiv.children[0];
	var aLi = oUl.children;
	var len = aLi.length; 
	
	//算ul宽度  840 + 20*(len - 1);
 	oUl.style.width = 840 + 20*(len - 1) + "px";
 	oUl.style.border="10px solid #fff";
	
	//li定位 840+20*(n-1)
	for(var i = 1; i < len; i++){
		aLi[i].style.left = 840 + 20*(i - 1) + "px"; 
	}
	
	//添加事件
	for(var i = 0; i < len; i++){
		
		(function(index){
			aLi[i].onmouseover = function(){
				// left --> oLi  20*n
				for(var i = 0; i < len; i++){
					if(i <= index){
						move(aLi[i],{left:i*20});
					} else {
						move(aLi[i],{left:840 + 20*(i - 1)});
					}
				}
			};
		})(i);
	}
}