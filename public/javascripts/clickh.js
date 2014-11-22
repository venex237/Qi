/*
 * set click listeners for tabs
 */
function setClickListeners(){
    $('#logintab').click(function(){
        ajax('login/', 'login_div');
        adjustDiv(195);
        console.log('login tab clicked');
    });

    $('#registertab').click(function(){
        ajax('registration/', 'register_div_email');
        adjustDiv(200);
        console.log('register tab clicked');
    });

    $('#abouttab').click(function(){
        ajax('misc/', 'about_div');
        adjustDiv(235);
        console.log('about tab clicked');
    })
}