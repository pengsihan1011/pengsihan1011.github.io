function demo3(id){
	var oDiv=document.getElementById(id);
	var oPrev = oDiv.children[0];
	var oNext = oDiv.children[1];
	var aBtn  = oDiv.children[3].children;
	var oUl   = oDiv.children[2];
	var aLi   = oUl.children;
	
	//克隆一份
	oUl.appendChild(aLi[0].cloneNode(true));
	
	//设置ul宽度
	oUl.style.width = aLi[0].offsetWidth*aLi.length + "px";
	
	var iNow = 0;
	var bReady = true;
	for(var i = 0; i < aBtn.length; i++){
		(function(index){
			aBtn[i].onmouseover = function(){
				iNow = index;
				tab();
			};
		})(i);
	}
	
	oPrev.onclick = function(){
		if(!bReady) return;
		bReady = false;
		iNow--;
		if(iNow == -1){
			oUl.style.left = -aLi[0].offsetWidth*5 + "px";
			iNow = 6;
		}	
		tab();
	};
	oNext.onclick = function(){
		if(!bReady) return;
		bReady = false;
		iNow++;
		
		tab();
	};
	function tab(){
		for(var i = 0; i < aBtn.length; i++){
			aBtn[i].className = "";	
		}
		
		if(iNow == 7){
			aBtn[0].className = "active";
		} else {
			aBtn[iNow].className = "active";
		}
		
		move(oUl,{left:-aLi[0].offsetWidth*iNow},{
			complete:function(){
				bReady = true;
				
				//判断运动完成
				if(iNow == 7){
					oUl.style.left = "0";
					iNow = 0;
				}	
			}	
		});	
	}



}