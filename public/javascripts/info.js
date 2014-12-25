/*
     * author(s): Michael Koeppl
     * creation date: 17.06.2014
     * date of last edit: 23.07.2014 (15:29)
     
     
     
     Contains error- and success-specific functions used from many different files.
     METHODS:
        -printError(msg)
        -printSuccess(msg)
* */
 
function printError(msg){
  if(msg != ""){
    // shake effect
    $('#panelcontainer').effect('shake');
  }
  // setting error message
  //document.querySelector('#errorDiv').innerHTML = msg;
  alert(msg);
}

function printSuccess(msg){
  //$('#panelcontainer').effect('size');
  document.querySelector('#errorDiv').innerHTML = msg;
}