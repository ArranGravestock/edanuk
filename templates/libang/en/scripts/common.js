
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;
var ddmenuitemv  = 0;

function jsddm_open(){
	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('display', 'block');
	ddmenuitemv = $(this).find('a').eq(0).addClass('over');
}

function jsddm_close(){
	if(ddmenuitem) ddmenuitem.css('display', 'none');
	if(ddmenuitemv) ddmenuitemv.removeClass('over');
}

function jsddm_cluk(){
	if(ddmenuitem) ddmenuitem.css('display', 'block');
}

function jsddm_timer(){
	closetimer = window.setTimeout(jsddm_close, timeout);
}

function jsddm_canceltimer(){
	if(closetimer){
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

$(document).ready(function(){
	$('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);
});

$(document).ready(function() {
$(".link_btn").click(function() {
	var linkParentItem = $(this).parent();
	var contentItem = linkParentItem.siblings().eq(0);
	if (contentItem.css('display') == 'none') {
		$(".box_container").css('display', 'none');
		$(".link_btn").css('background', 'url(/templates/libang/cn/style/images/nav-li.png) no-repeat 30px center');
		contentItem.slideDown("slow");
		contentItem.css('display', 'block');
		$(this).css('background', 'url(/templates/libang/cn/style/images/nav-li-02.png) no-repeat 30px center');
	}else {
		contentItem.slideUp("slow");
		$(this).css('background', 'url(/templates/libang/cn/style/images/nav-li.png) no-repeat 30px center');
	}
});
});
