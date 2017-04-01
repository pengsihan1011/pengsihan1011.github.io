window.onload = function(){
	var oDiv = document.getElementById("div1");
	var aUl  = oDiv.children;
	var len  = aUl.length;
	var arr = [];
	var i=0;
	var count =0; 
	var total=30;



	for(var i = 0; i < len; i++){
		arr.push(aUl[i]);
	}
	
	function createLi(){
		count++;
			
			for (var i = 0; i < 5; i++) {
				var oLi = document.createElement("li");
				oLi.innerHTML="<a href='javascript:;'><img src='img/"+(i%14+1)+".jpg'/><h3>title</h3></a>";
			
			
			 	arr.sort(function(oUl1,oUl2){
				 	return oUl1.offsetHeight - oUl2.offsetHeight;
			 	});
				//插入
				arr[0].appendChild(oLi);
				oLi.className="active";

				i++;
			}
		
			

					
	}
	function load(){
		var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
		var clientH = document.documentElement.clientHeight;	
		var bodyH = document.body.scrollHeight;
		if(scrollTop + clientH >= bodyH){
			createLi();
		}  
	}
	
	var timer=setInterval(function(){
		load();
		setTimeout(function(){
			clearInterval(timer);
		},300);
	},30);

	window.onscroll = function(){
		load();

	};
	
 
};