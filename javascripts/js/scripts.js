$(document).ready(function(){$(document).click(function(e){if(!$(e.target).is('a')){$('.collapse').collapse('hide');}});$('.tab-content-rwd').hide();$('#tab-market').show();$('#select-box').change(function(){dropdown=$('#select-box').val();$('#select-box').parents('.tab-container').find('.tab-content-rwd').hide();$('#'+"tab-"+dropdown).show();});$('#myCarousel').carousel({interval:0})
$('#myCarousel').on('slid.bs.carousel',function(){});if($('.data-tabs .nav-tabs[data-autoswitch]').length>0){var changeInterval=$('.data-tabs .nav-tabs').data('interval');var tabCarousel=setInterval(function(){var tabs=$('.data-tabs .nav-tabs > li'),active=tabs.filter('.active'),next=active.next('li'),toClick=next.length?next.find('a'):tabs.eq(0).find('a');toClick.trigger('click');},changeInterval);}
$('.data-tabs .nav-tabs > li').click(function(e){if($(e.target).is('li')){$(this).find('a').trigger('click');}});var lastId,topMenu=$("#mainNav"),topMenuHeight=topMenu.outerHeight()+1,menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var item=$($(this).attr("href"));if(item.length){return item;}});menuItems.click(function(e){var href=$(this).attr("href"),offsetTop=href==="#"?0:$(href).offset().top-topMenuHeight+1;$('html, body').stop().animate({scrollTop:offsetTop},850);e.preventDefault();});$(window).scroll(function(){var fromTop=$(this).scrollTop()+topMenuHeight;var cur=scrollItems.map(function(){if($(this).offset().top<fromTop)
return this;});cur=cur[cur.length-1];var id=cur&&cur.length?cur[0].id:"";if(lastId!==id){lastId=id;menuItems.parent().removeClass("active").end().filter("[href=\\#"+id+"]").parent().addClass("active");}});$(function(){var $window=$(window),$document=$(document),transitionSupported=typeof document.body.style.transitionProperty==="string",scrollTime=1;$(document).on("click",".footer a[href*=\\#]:not([href=\\#])",function(e){var target,avail,scroll,deltaScroll;if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){target=$(this.hash);target=target.length?target:$("[id="+this.hash.slice(1)+"]");if(target.length){avail=$document.height()-$window.height();if(avail>0){scroll=target.offset().top;if(scroll>avail){scroll=avail;}}else{scroll=0;}
deltaScroll=$window.scrollTop()-scroll;if(!deltaScroll){return;}
e.preventDefault();if(transitionSupported){$("html").css({"margin-top":deltaScroll+"px","transition":scrollTime+"s ease-in-out"}).data("transitioning",scroll);}else{$("html, body").stop(true,true).animate({scrollTop:scroll+"px"},scrollTime*3000);return;}}}});if(transitionSupported){$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd",function(e){var $this=$(this),scroll=$this.data("transitioning");if(e.target===e.currentTarget&&scroll){$this.removeAttr("style").removeData("transitioning");$("html, body").scrollTop(scroll);}});}});});