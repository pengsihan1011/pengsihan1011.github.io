window.onload=function(){
		var aLi=document.getElementsByTagName("li");
		
		for (var i = 0; i < data.length; i++) {
			var oDiv=document.createElement("div");
			var oUl=getObj("#nav");

			oDiv.className="photo photo-front";


			oUl.innerHTML+="<li></li>"
			
			oDiv.innerHTML="<div class='photo-wrap'><div class='side side-front'>\
						<p class='image'>\
							<img src='img/book"+(i%10+1)+".jpg'>\
						</p>\
						<p class='caption'>"+data[i].title+"</p>\
						</div>\
						<div class='side side-back'>\
							<p class='desc'>"+
							"书名："+data[i].title+"<br/>"+
							"作者："+data[i].author+"<br/>"+
							"出版社："+data[i].soruce+"<br/>"+
							"出版日期："+data[i].time+"<br/>"+
							"简介："+data[i].desc+
							"</p>\
						</div></div>";


			getObj("#wrap").appendChild(oDiv);
		}




		function sidePhoto(n){

			var arrPhoto=[];

			var lMin=0;
			var lMax=getObj("#wrap").clientWidth/2-getObj(".photo")[0].offsetWidth;
			var yMin=0;
			var yMax=getObj("#wrap").clientHeight;
			var rMin=getObj("#wrap").clientWidth/2+getObj(".photo")[0].offsetWidth;
			var rMax=getObj("#wrap").clientWidth;


			for (var i = 0; i < data.length; i++) {
				getObj(".photo")[i].className=getObj(".photo")[i].className.replace(/\s*photo-center\s*/," ");
				getObj(".photo")[i].className=getObj(".photo")[i].className.replace(/\s*photo-front\s*/g," ");
				getObj(".photo")[i].className=getObj(".photo")[i].className.replace(/\s*photo-back\s*/g," ");

				getObj(".photo")[i].className+=" photo-front"
				getObj(".photo")[i].style.left="";
				getObj(".photo")[i].style.top="";
				getObj(".photo")[i].style["-webkit-transform"]="rotate(0deg) scale(1)";
				getObj(".photo")[i].style["-moz-transform"]="rotate(0deg) scale(1)";
				getObj(".photo")[i].style["-ms-transform"]="rotate(0deg) scale(1)";
				getObj(".photo")[i].style["transform"]="rotate(0deg) scale(1)";
			}


			getObj(".photo")[n].className+=" photo-center";
			aLi[n].className="act_front";
			
			for (var i = 0; i < data.length; i++) {
				getObj(".photo")[i].index=i;
				arrPhoto.push(getObj(".photo")[i]);


			}



			arrPhoto.splice(findCenter(),1);




			var arrLeft=arrPhoto.splice(0,Math.floor((arrPhoto.length)/2));
			for (var i = 0; i < arrLeft.length; i++) {
				arrLeft[i].style.left=parseInt(rnd(lMin,lMax))+"px";
				arrLeft[i].style.top=parseInt(rnd(yMin,yMax))+"px";
				arrLeft[i].style["-webkit-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
				arrLeft[i].style["-moz-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
				arrLeft[i].style["-ms-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
				arrLeft[i].style["transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
			}
			for (var i = 0; i < arrPhoto.length; i++) {
				arrPhoto[i].style.left=parseInt(rnd(rMin,rMax))+"px";
				arrPhoto[i].style.top=parseInt(rnd(yMin,yMax))+"px";
				arrPhoto[i].style["-webkit-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
				arrPhoto[i].style["-moz-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";	
				arrPhoto[i].style["-ms-transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";
				arrPhoto[i].style["transform"]="rotate("+parseInt(rnd(-150,150))+"deg) scale(.7)";	
			}
		}


		
		sidePhoto(rnd(0,19));



		
		for (var i = 0; i < data.length; i++) {
			aLi[i].index=i;
			getObj(".photo")[i].onclick=function(){
				for (var i = 0; i < data.length; i++) {
					aLi[i].className="";
				}

				turn(this);

			};

			aLi[i].onclick=function(){
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].className="";
				}
				turn(getObj(".photo")[this.index]);

			};
		}

		function findCenter(){
			for (var i = 0; i < data.length; i++) {
				var sClass=getObj(".photo")[i].className;
				if(/photo-center/.test(sClass))return i;
			}
		}
		
		function rnd(n,m){
			return parseInt(Math.random()*(m-n)+n);
		}

		function getObj(str){
			var char=str.substring(0,1);
			str=str.substring(1);
			return char=="#"?document.getElementById(str):document.getElementsByClassName(str);
		}
		function turn(obj){
			var sClass=obj.className;
			var oLi=aLi[obj.index];
			if (!/photo-center/.test(sClass)) {
				return sidePhoto(obj.index);
			}

				if (/photo-front/.test(sClass)) {
					obj.className=sClass.replace(/photo-front/,"photo-back");
					oLi.className="act_back";
					
				} else {
					obj.className=sClass.replace(/photo-back/,"photo-front");
					oLi.className="act_front";
				}
		}
	};