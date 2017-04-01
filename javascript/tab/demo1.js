function demo1(id){
		var oDiv=document.getElementById(id);
		var aPic=oDiv.children[0].children;
		var aA=oDiv.children[1].children;
		

		for (var i = 0; i < aA.length; i++) {
			(function(index){
				aA[i].onmouseover=function(){
					for (var i = 0; i < aA.length; i++) {
						aA[i].className="";
						move(aPic[i],{opacity:0});
					}
					this.className="active";
					move(aPic[index],{opacity:1});
				};
			})(i);
			
		}
	
}