/*
 * set click listeners for tabs
 */
function setClickListeners(){
  $('#logintab').click(function(){
    adjustDiv(100, '#spacekeeper');
    adjustDiv(210);
    ajax('login/', 'login_div');
    console.log('login tab clicked');
  });

  $('#registertab').click(function(){
    adjustDiv(10, '#spacekeeper');
    adjustDiv(400);
    ajax('registration/', 'registration_div');
    console.log('register tab clicked');
  });

  $('#abouttab').click(function(){
    ajax('misc/', 'about_div');
    adjustDiv(100, '#spacekeeper');
    adjustDiv(235);
    console.log('about tab clicked');
  })
}