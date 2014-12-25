var i = 0;

// this affects form_wrapper in index.html
// save the current width and height
// make the current panel fade away
// and replace it with the new one
// the new panel is set by the "rel" attribute in the <a href="/" rel="login" class="linkform" style="margin-top:20px;">
function formwrapper_launch(){
  //the form wrapper (includes all forms)
  var $form_wrapper	= $('#form_wrapper'),
  //the current form is the one with class active
      $currentForm	= $form_wrapper.children('form.active'),
  //the change form links
      $linkform		= $form_wrapper.find('.linkform');

  //get width and height of each form and store them for later
  $form_wrapper.children('form').each(function(i){
    var $theForm	= $(this);
    //solve the inline display none problem when using fadeIn fadeOut
    if(!$theForm.hasClass('active'))
      $theForm.hide();
    $theForm.data({
      width	: $theForm.width(),
      height	: $theForm.height()
    });
  });

  //set width and height of wrapper (same of current form)
  setWrapperWidth();

  /*
   clicking a link (change form event) in the form
   makes the current form hide.
   The wrapper animates its width and height to the
   width and height of the new current form.
   After the animation, the new form is shown
   */
  $linkform.bind('click',function(e){
    var $link	= $(this);
    var target	= $link.attr('rel');
    $currentForm.fadeOut(200,function(){
      //remove class active from current form
      $currentForm.removeClass('active');
      //new current form
      $currentForm= $form_wrapper.children('form.'+target);
      //animate the wrapper
      $form_wrapper.stop()
          .animate({
            width:$currentForm.data('width') + 'px',
            height:$currentForm.data('height') + 'px'
          },500,function(){
            //history.pushState(history.state, document.title, '/' + target);
            //document.title = 'Qi';

            //new form gets class active
            $currentForm.addClass('active');
            //show the new form
            $currentForm.fadeIn(200);
          });
    });
    e.preventDefault();
  });

  $('#headertitle').bind('click',function(e){

    var target;

    if(i == 0){
      target = 'about';
    }else if(i == 1){
      target = 'login';
    }
    $currentForm.fadeOut(200,function(){
        //remove class active from current form
        $currentForm.removeClass('active');
        //new current form
        $currentForm= $form_wrapper.children('form.' + target);
        //animate the wrapper
        $form_wrapper.stop()
            .animate({
              width:$currentForm.data('width') + 'px',
              height:$currentForm.data('height') + 'px'
            },500,function(){
              //history.pushState(history.state, document.title, '/' + target);
              //document.title = 'Qi';

              //new form gets class active
              $currentForm.addClass('active');
              //show the new form
              $currentForm.fadeIn(200);
            });
      });
      e.preventDefault();

      if(i == 0){
        i++;
      }else if(i == 1){
        i = 0;
      }
  });

  function setWrapperWidth(){
    $form_wrapper.css({
      width	: $currentForm.data('width') + 'px',
      height	: $currentForm.data('height') + 'px'
    });
  }

  /*
   for the demo we disabled the submit buttons
   if you submit the form, you need to check the
   which form was submited, and give the class active
   to the form you want to show
   */
  $form_wrapper.find('input[type="submit"]')
      .click(function(e){
        e.preventDefault();
      });
}