window.onload=function(){
		var oScroll=document.getElementById("st-scroll");
		var oOl=oScroll.getElementsByTagName("ol")[0];
		var aStp=oOl.children;
		var aH2=oScroll.getElementsByTagName("h2");
		var aP=oScroll.getElementsByTagName("p");
		var oSnav=document.getElementById("st-nav");
		var aSli=oSnav.getElementsByTagName("li");
		var iNow=0;
		heightResize();
		tab(0);
		window.onresize=function(){
			heightResize();
			move(oOl,{
					top:-iNow*aStp[0].offsetHeight
				},{
					duration:0
				});
		};
		addMouseWheel(oOl,function(bF){
			if (bF) {
				iNow++;
				if (iNow>=oOl.children.length-1) {
					iNow=oOl.children.length-1;
				}
				move(oOl,{
					top:-iNow*aStp[0].offsetHeight
				},{
					duration:0
				});

			} else {
				iNow--;
				if (iNow<=0) {
					iNow=0;
				}
				move(oOl,{
					top:-iNow*aStp[0].offsetHeight
				},{
					duration:0
				});
			}

			tab(iNow);
		});

		for (var i = 0; i < aSli.length; i++) {
			(function(index){
				aSli[i].onclick=function(){
					iNow=index;
					tab(index);
					move(oOl,{
						top:-index*aStp[0].offsetHeight
					});
					
				};
			})(i);
			
		}

		function tab(index){
			for (var i = 0; i < aSli.length; i++) {
					aSli[i].className="";
					aStp[i].className=aStp[i].className.replace(/\s*st-panel\s*/g,"");
				}
				aSli[index].className="active";
				aStp[index].className+=" st-panel";
		}
		function heightResize(){
			for (var i = 0; i < aStp.length; i++) {	
				aStp[i].style.height=document.documentElement.clientHeight+"px";
			}
		}

		var oContact=document.getElementById("contact");
		var aDiv=oContact.children;
		var aSpan=oContact.getElementsByTagName("span");
		var bClick=false;
		aDiv[0].onclick=function(){

			if (bClick) {
				this.style.transform="rotate(0deg)";
				aDiv[1].style.transform="translateX(0)";
				aDiv[2].style.transform="translateX(0)";
				for (var i = 0; i < aSpan.length; i++) {
					aSpan[i].style.opacity=0;
					aSpan[i].style.transform="translateY(50px)";
				}
			} else {
				this.style.transform="rotate(45deg)";
				aDiv[1].style.transform="translateX(-100px)";
				aDiv[2].style.transform="translateX(100px)";
				for (var i = 0; i < aSpan.length; i++) {
					aSpan[i].style.marginLeft=-aSpan[i].offsetWidth/2+"px";
					aSpan[i].style.opacity=1;
					aSpan[i].style.transform="translateY(0px)";
				}
			}
			bClick=!bClick;
		}; 
		
	};