/*
     * author(s): Michael Koeppl
     * creation date: 17.06.2014
     * date of last edit: 23.07.2014 (15:29)
     * version: alpha_0.1 (23072014)
     
     
     
     Contains ajax-specific functions used from many different files.
     METHODS:
        -adjustDiv(divHeight) -> resizing and/or moving the div
        -loadXML(what, where) -> loads the new elements for the div via ajax
        -triggered()          -> puts data returned by requested URL to selected div
        
* */


// animation for div here
function adjustDiv(divHeight /*defines the new height of the div*/){
    //jQuery('panelcontainer').animate({ right: "-=30px", }, 500 );
    jQuery("#panelcontainer")
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
    ajaxdestination=where;
    xmlhttp.onreadystatechange = triggered; // when request finished, call the function to put result to destination DIV
    xmlhttp.open("GET", what);
    xmlhttp.send(null);
    return false;
}

function triggered() { // put data returned by requested URL to selected DIV
    if (xmlhttp.readyState == 4) if (xmlhttp.status == 200) 
        document.getElementById(ajaxdestination).innerHTML =xmlhttp.responseText;
}

function triggered() { // put data returned by requested URL to selected DIV
    if (xmlhttp.readyState == 4) if (xmlhttp.status == 200) 
        document.getElementById(ajaxdestination).innerHTML =xmlhttp.responseText;
}