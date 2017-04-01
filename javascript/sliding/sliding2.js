 window.onload = function(){
			var oDiv = document.getElementById("cr-bgimg");
			
			var R = 100;
			var C = 1 ;
			
			//创建span
			for(var r = 0; r < R; r++){
				for(var c = 0; c < C; c++){
					var oSpan = document.createElement("span");
					oDiv.appendChild(oSpan);
					oSpan.style.width = Math.ceil(oDiv.offsetWidth/C) + "px";
					oSpan.style.height = Math.ceil(oDiv.offsetHeight/R) + "px";
					
					oSpan.style.left = oSpan.offsetWidth*c + "px";
					oSpan.style.top  = oSpan.offsetHeight*r + "px";
					
					oSpan.style.backgroundPosition = -oSpan.offsetLeft+"px -" + oSpan.offsetTop + "px";
					
				}
			}
			
			
			/*
				span 老图
				div  新图 
			*/
			var oBtn = document.getElementById("btn1");
			var aSpan = oDiv.children;
			
			var iNow = 0;
			var bReady = true;//准备好了
			oBtn.onclick = function(){
				this.className="current-pic";
				if(!bReady) return;
				bReady = false;
				
				//span 老图
				for(var i = 0; i < aSpan.length; i++){
					aSpan[i].style.opacity = "1";
					aSpan[i].style.backgroundImage = "url(images/"+iNow+".jpg)";
				}
				
				iNow++;
				if(iNow == 4){
					iNow = 0;
				}
				//div  新图 
				oDiv.style.backgroundImage = "url(images/"+iNow+".jpg)";
				
				var i = 0;
				var timer = setInterval(function(){
					
					(function(index){
						move(aSpan[i],{opacity:0},{
							complete:function(){
								if(index == aSpan.length - 1){
									oBtn.className="";
									bReady = true;
								}	
							}	
						});	
					})(i);
					i++;
					
					if(i == aSpan.length){
						clearInterval(timer);
					}
				},10);
				
					
			};
			
		 
		};