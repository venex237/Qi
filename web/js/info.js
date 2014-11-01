/*
     * author(s): Michael Koeppl
     * creation date: 17.06.2014
     * date of last edit: 23.07.2014 (15:29)
     * version: alpha_0.1 (23072014)
     
     
     
     Contains error- and success-specific functions used from many different files.
     METHODS:
        -printError(msg)
        -printSuccess(msg)
* */
 
function printError(msg){
    if(msg != ""){
        // shake effect
        jQuery('#panelcontainer').effect('shake');
    }
    // setting error message
    document.querySelector('#errorDiv').innerHTML = msg;
}

function printSuccess(msg){
    //jQuery('#logincontainer').effect('clip');
    document.querySelector('#errorDiv').innerHTML = msg;
}