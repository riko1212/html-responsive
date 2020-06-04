$(function(){
	//GAMBURGER
	$('.header__toggle-button').click(function(){
		$('.header__menu').toggleClass('d-block');
	})

	$('.header__menu__item').click(function(){
		$('.header__menu').removeClass('d-block');
	})

	$('.title__icon').click(function(){
		$('.title__icon').toggleClass('title__icon_down');
	})

    //MODAL FORM
    $(document).ready(function() {
	$('.header__profile').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){
				$('.modal-form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 300);
		});
	});
	
	$('.overlay').click( function(){
		$('.modal-form')
			.animate({opacity: 0, top: '0%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
		});
	});

 	$('.footer__slider').slick({
 		dots: true,
 		prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
 		nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
 	});



 	$('.question__form').on('submit', function(event) {
    	if ( validateForm() ) { // если есть ошибки возвращает true
      		event.preventDefault();
    	}
  	});
  
  function validateForm() {
    $(".text-error").remove();
    
    // Name check    
    var elName = $(".question__form__name");
    if ( elName.val().length < 1 ) {
      var v_name = true;
      elName.after('<span class="text-error for-name">Empty Name</span>');
      $(".for-name").css({top: elName.position().top + elName.outerHeight() + 2});
    } 
    $(".question__form__name").toggleClass('error', v_name );
    
    // Email chack
    
    var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var elEmail    = $(".question__form__email");
    var v_email = elEmail.val()?false:true;
  
    if ( v_email ) {
      elEmail.after('<span class="text-error for-email">Empty Email</span>');
      $(".for-email").css({top: elEmail.position().top + elEmail.outerHeight() + 2});
    } else if ( !reg.test( elEmail.val() ) ) {
      v_email = true;
      elEmail.after('<span class="text-error for-email">Uncorrect Email</span>');
      $(".for-email").css({top: elEmail.position().top + elEmail.outerHeight() + 2});
    }
    $(".question__form__email").toggleClass('error', v_email );

    var elText = $(".question__form__text");
    if ( elText.val().length < 1 ) {
      var v_text = true;
      elText.after('<span class="text-error for-text">Empty question</span>');
      $(".for-text").css({top: elText.position().top + elText.outerHeight() + 2});
    } 
    $(".question__form__text").toggleClass('error', v_text );
    
    
    return ( v_name || v_email || v_text);
  }
 		
});




