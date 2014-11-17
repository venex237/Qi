/**
 * Created by mko on 17/11/14.
 */
function loadPage(href /* link to html file */){
    window.location = href;
}

function animateDiv(selectedDiv /*this is the div to be used*/,
                    animType /*defines the animation you want*/,
                    reopen /*defines whether you want to reopen the div or not*/){
    $(selectedDiv).effect(animType);
    if(reopen === true){
        reopenDiv(selectedDiv);
    }
}

function reopenDiv(selectedDiv){
    $(selectedDiv).slideDown();
}

// animation for div here
function adjustDiv(divHeight /*defines the new height of the div*/){
    //jQuery('panelcontainer').animate({ right: "-=30px", }, 500 );
    $('#panelcontainer')
        .animate({
            height: divHeight,
            width: 450
        });
    document.querySelector('#errorDiv').innerHTML = "";
}

// here we define global variable
var ajaxdestination="";

// loads the content via AJAX
function loadXML(what /*content you want to put into the div*/,
                 where /*the element you want to put it into*/) {
    try {
        xmlhttp = window.XMLHttpRequest?new XMLHttpRequest():
            new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) { /* do nothing */ }

    //document.getElementById(where).innerHTML ="<center><img src='loading.gif'></center>";
    // we are defining the destination DIV id, must be stored in global variable (ajaxdestination)
    ajaxdestination = where;
    xmlhttp.onreadystatechange = triggered; // when request finished, call the function to put result to destination DIV
    xmlhttp.open("GET", what);
    xmlhttp.send(null);
    return false;
}

function queryLink(){
    return window.location.search.split('/')[1];
}

function triggered() { // put data returned by requested URL to selected DIV
    if (xmlhttp.readyState == 4) if (xmlhttp.status == 200)
        document.getElementById(ajaxdestination).innerHTML = xmlhttp.responseText;
}