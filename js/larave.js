$(function() {
	var h2 = $('#nav h2');
	var navbox = $('#nav .navbox');
	var nav = $('#nav');
	var str=1;
    
    /*用一个按钮控制要用if else判断，不能写两个if*/
	h2.click(function(){
		if(str==1){
			nav.css({'height':'415px'});
			navbox.show();
			str=2;
		}else if(str==2){
			nav.css({'height':'58px'});
			navbox.hide();
			str=1;
		}
	})
})
