/*
 * fills the div via an ajax request
 */
function ajax(dir, file){

    console.log(dir);
    console.log(file);

    $.ajax({
<<<<<<< HEAD
        type:'GET',
        url:('/ajax/' + dir + file + '.txt'),
        success: function(data){
            $('#panelcontainer').html(data);
        }
=======
      type:'GET',
      url:('/ajax/' + dir + file + '.txt'),
      success: function(data){
        $('#panelcontainer').html(data);
      }
>>>>>>> master
    });


    /*
     * changing URL according to the used panel
     *
     * documentation:
     * https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history#The_pushState()_method
     */
    history.pushState(history.state, document.title, '?p=' + file);
}

/*
 * animates the container div
 */
function adjustDiv(divHeight /*defines the new height of the div*/){
    $('#panelcontainer')
<<<<<<< HEAD
        .animate({
            height: divHeight,
            width: 450
        });
=======
      .animate({
        height: divHeight,
        width: 450
      });
>>>>>>> master
    $('#errorDiv').html = "";
}