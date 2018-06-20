//Navbar Toggle

$('.navbar-toggle').click(function(){
  if( $(this).hasClass('collapsed') ){
    $(this).removeClass('collapsed');
  }else{
    $(this).addClass('collapsed');
  }
 })


// 상단으로 돌아가는 함수

 jQuery(document).ready(function($){

	var offset = 300,

		offset_opacity = 1200,

		scroll_top_duration = 700,

		$back_to_top = $('.cd-top, .top');


	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//부드럽게 스크롤 되는 함수
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});



$(document).on('click', 'a[href^="#"]', function(e) {

    var id = $(this).attr('href');


    var $id = $(id);
    if ($id.length === 0) {
        return;
    }


    e.preventDefault();


    var pos = $(id).offset().top;


    $('body, html').animate({scrollTop: pos});
});
