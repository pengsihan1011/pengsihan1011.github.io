function demo2(id){
		var oDiv=document.getElementById(id);
		var oUl=oDiv.children[0];
		var aPic=oDiv.children[0].children;
		var aA=oDiv.children[1].children;

		var iNow=0;

		var timer=setInterval(next,2000);

		oDiv.onmouseover=function(){
			clearInterval(timer);
		};
		
		oDiv.onmouseout=function(){
			timer=setInterval(next,2000);
		};


		function next(){
			iNow++;
			if (iNow==aA.length) {
				iNow=0;
			}
			tab();
		}

		function tab(){
			for (var i = 0; i < aA.length; i++) {
				aA[i].className="";
			}
			aA[iNow].className="active";
			move(oUl,{top:-iNow*aPic[0].offsetHeight});
		}
		for (var i = 0; i < aA.length; i++) {
			(function(index){
				aA[i].onmouseover=function(){
					iNow=index;
					tab();
				};
			})(i);
			
		}
	
}