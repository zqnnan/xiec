window.onload=function(){
	
	
	var oStab=document.getElementsByClassName("s-tab")[0];
	var oLi=oStab.getElementsByClassName("zuo");
	var oXxkr=document.getElementsByClassName("xxk-right")[0];
	var oDiv= oXxkr.getElementsByClassName("s-content");
	
 function fn(a,b){	
	for(let i=0;i<a.length;i++){
    	a[i].onclick=function(){
    		for(var j=0;j<a.length;j++) {
    			 b[j].style.display="none";
    		   }
    		     b[i].style.display="block";
    		  }
        }
}	
fn(oLi, oDiv)
function fz(num){
	var oLi1=oDiv[num].getElementsByTagName("li");
	var oDiv1= oDiv[num].getElementsByClassName("r-content");	
	for(let i=0;i<oLi1.length;i++){
    	oLi1[i].onclick=function(){
    		for (var j=0;j<oLi1.length;j++) {
    			 oDiv1[j].style.display="none";
    		}
    		   oDiv1[i].style.display="block";
    	}
   }	
}	
   for(var i=0;i<oDiv.length;i++){
     fz(i);
}

//热门----调用 外部
var oJiao1=document.getElementsByClassName("jiao1");
var oLi1=document.getElementsByClassName("tmd-nav-li");
var oDiv1= document.getElementsByClassName("tmd-con-div");
fnn(oLi1, oDiv1,oJiao1);
//里面
var oLi2=document.getElementsByClassName("tmd-con-li");
var oDiv2= document.getElementsByClassName("remen");
fn(oLi2, oDiv2);

//鼠标移入移出
var yuan=document.getElementsByClassName("yuan1");
var kuai= document.getElementsByClassName("kuai");
var oQuan= document.getElementsByClassName("remen1-left-li1");
 yr(oQuan,yuan,kuai)
	

function yr(q,a,b){	
		for(let i=0;i<a.length;i++){
			
	    	q[i].onmouseover=function(){	
	    		    a[i].style.display="none";
		    		b[i].style.display="block";
	    	}	    	
	        q[i].onmouseout=function(){	
	    		    a[i].style.display="block";
		    		b[i].style.display="none";
	    	}
			
	     }
	}	

//酒店
//三个参数
	function fnn(a,b,c){
	for(let i=0;i<a.length;i++){
    	a[i].onclick=function(){
    		for(var j=0;j<a.length;j++) {
    			 b[j].style.display="none";
    			 
	  			 c[j].style.display="none";
    		   }
    		     b[i].style.display="block";
		      	 c[i].style.display="block";
    	     }
        }
}	

var oJiao=document.getElementsByClassName("jiao");
var oLij=document.getElementsByClassName("jiudian-nav-li");
var oDivj= document.getElementsByClassName("jiudian-con-div");	
fnn(oLij, oDivj,oJiao);	
	
var oJiu=document.getElementsByClassName("jiudian-con-div1-right-li");
var oDian= document.getElementsByClassName("jiudain-box");
fn(oJiu, oDian);

var oJiaoa=document.getElementsByClassName("jiaoa");
var oGjli=document.getElementsByClassName("guoji-nav-li");
var oGjd= document.getElementsByClassName("guoji-con-div");	
fnn(oGjli,oGjd,oJiaoa);	


var oGjj=document.getElementsByClassName("guoji-con-div1-right-li");
var oGuojibox= document.getElementsByClassName("guoji-bigbigbox");
fn(oGjj, oGuojibox);


//租车
var oJiaoq=document.getElementsByClassName("jiaoq");
var oZcli=document.getElementsByClassName("zc-nav-li");
var oZcbox= document.getElementsByClassName("zc-con-box");	
fnn(oZcli,oZcbox,oJiaoq);		

var oZcli=document.getElementsByClassName("zc-con-box-right-li");
var oZccon= document.getElementsByClassName("zc-con-box-right-con");
fn(oZcli, oZccon);

//玩乐

var oJiaoqq=document.getElementsByClassName("jiaoqq");
var oWlli=document.getElementsByClassName("wl-nav-li");
var oWll= document.getElementsByClassName("wl-con-box");	
fnn(oWlli,oWll,oJiaoqq);		

var oWlxli=document.getElementsByClassName("wl-con-box-right-li");
var oWlxbox= document.getElementsByClassName("wl-con-box-right-con");
fn( oWlxli, oWlxbox);

//全球购
var oQqgxli=document.getElementsByClassName("qqg-con-box-right-li");
var oQqgxbox= document.getElementsByClassName("qqg-con-box-right-con");
fn( oQqgxli, oQqgxbox);

//目的地

var oJiaoer=document.getElementsByClassName("jiaoer");
var oMddli=document.getElementsByClassName("mdd-nav-li");
var oMdbox= document.getElementsByClassName("mdd-con-box");	
fnn(oMddli,oMdbox,oJiaoer);		

var oMddlii=document.getElementsByClassName("mdd-con-box-right-li");
var oMddb= document.getElementsByClassName("mdd-con-box-right-con");
fn( oMddlii, oMddb);
//定位红包
var oHbao1=document.getElementById("hongbaoo");
//console.log(oHbao1)
var oGright=document.getElementsByClassName("g-right")[0];
//console.log(oGright)
var oGright1=document.getElementsByClassName("g-right1")[0];
var oGright2=document.getElementsByClassName("g-right2")[0];

var oGg=document.getElementsByClassName("gg")[0];

   oHbao1.onclick=function(){
   	
    oHbao1.style.width="0px";
    oGright.style.opacity="1";
   	oGright.style.width="100%";
   	oGright1.style.opacity="1";
   	oGright1.style.width="800px";
   	oGright2.style.opacity="1";
   	oGright2.style.width="200px";
   
  }
	oGg.onclick=function(){
// 	oGright.style.opacity="0";
// 	oGright.style.width="0";
    oHbao1.style.width="130px";
    oGg.style.display="none"
   
  }














}
