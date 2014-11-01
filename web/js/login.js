/*
     * author(s): Michael Koeppl
     * creation date: 17.06.2014
     * date of last edit: 23.07.2014 (15:42)
     * version: alpha_0.1 (23072014)
     
     
     
     Contains login-specific functions.
     METHODS:
        -logMeIn() -> checks for correct data and calls sendData()
        -sendData() -> sends the entered data to the node.js server 8080
* */

function logMeIn(){
    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        alert("Sorry, but your browser doesn't support Websockets!");
    }
    // initialise email input as emailBox
    var emailBox = document.querySelector('#emailinput');
    // initialise pw input as pwBox
    var pwBox = document.querySelector('#pwinput');
    
    if(emailBox.value != "" && pwBox.value != ""){
        // check length of email to be at least 4
        if(emailBox.value.length > 4){
            // if email is long enough: check if email contains @
            if(emailBox.value.indexOf('@') != -1){
                // if email contains @: check length of pw
                if(pwBox.value.length > 4){
                    console.log(emailBox.value);
                    console.log(pwBox.value); //debug
                    // Here we call the function to send the data to our node.js login script
                    printError("");
                    sendData(emailBox.value, pwBox.value);
                // password length less than or equal to 4
                }else{
                    printError("Password can't be valid.");
                    jQuery('#pwinput').effect('highlight');
                }
            // email doesn't contain @
            }else{
                printError("Email can't be valid.");
                //jQuery('#emailinput').effect('highlight');
            }
        // email length less than or equal to 4
        }else{
            if(pwBox.value.length < 4){
                printError("Email and password can't be valid.");
                jQuery('#emailinput').effect('highlight');
                //jQuery('#pwinput').effect('highlight');
            }else{
                printError("Email can't be valid.");
            }
        }
    }else{
        if(emailBox.value === "" && pwBox.value === ""){
            printError("No data given at all. Srsly?");
        }else if(emailBox.value === ""){
            printError("No email given.");
            //jQuery('#emailinput').effect('highlight');
        }else if(pwBox.value === ""){
            printError("No password given.");
            //jQuery('#pwinput').effect('highlight');
        }
    }
}

function sendData(email, pw){
    var url = "http://localhost:8080";
    var method = "POST";
    var postData = {'what':'login', 'email':email, 'pw':pw};

    /*
     * don't wait for server response
     */
    var async = true;

    var request = new XMLHttpRequest();

    request.onload = function () {
        // You can get all kinds of information about the HTTP response.
        var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
        var data = request.responseText; // Returned data, e.g., an HTML document.
    };

    request.open(method, url, async);

    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Or... request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    // Or... whatever

    // Actually sends the request to the server.
    request.send(postData);
}