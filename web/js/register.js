/*
     * author(s): Michael Koeppl
     * creation date: 17.06.2014
     * date of last edit: 23.07.2014 (15:28)
     * version: alpha_0.1 (23072014)
     
     
     
     Contains registration-specific functions.
     METHODS:
        -registerMe()
        -sendRegData()
* */
 
// function to register the user
// called by button #submitreg
function registerMe(){
    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        alert("Sorry, but your browser doesn't support Websockets!");
    }
    // initialise email input as emailBox
    var emailBox = document.querySelector('#emailinput');
    // initialise pw input as pwBox
    var pwBox = document.querySelector('#pwinput');
    var pwBoxRepeat = document.querySelector('#pwrepeatinput');
    var pnumberBox = document.querySelector('#pnumberinput');
    
    if(emailBox.value != "" && pwBox.value != "" && pwBoxRepeat.value != "" && pnumberBox.value != ""){
        if(emailBox.value.length > 4){
            if(pwBox.value.length > 4){
                if(pwBox.value === pwBoxRepeat.value){
                    //continue
                    console.log(emailBox.value);
                    console.log(pwBox.value); //debug
                    // Here we call the function to send the data to our node.js login script
                    printError("");
                    sendRegData(emailBox.value, pwBox.value, pnumberBox.value);
                }else{
                    printError('The two entered passwords do not match.');
                }
            }else{
                printError('Password too short.');
            }
        }else{
           printError('Email too short.');    
        }
    }else{
        printError('No information at all! Srsly?');   
    }
}

function sendRegData(email, pw, pnumber){
    // declare new variable socket with connection to server
    //var socket = new WebSocket('ws://localhost:8080/websocket');
    var socket = new WebSocket('ws://localhost:1337/register');
    
    // function is called as soon as the connection is established.
    // the client immediatly sends his login data
    socket.onopen = function() {
        //socket.send(JSON.parse('email=' + email + '&pw=' + pw));
        socket.send(('email=' + email + '&pw=' + pw + '&pnumber=' + pnumber).toString());
    };
    
    // Log errors
    socket.onerror = function (error) {
        console.log('WebSocket Error ' + error);
    };
    
    // gets the server's response message / waits for it
    // response is the server's message
    socket.onmessage= function(response) {
        // logging server's message
        switch(response.data){
            case 'ac37ffc02781f2776d3a83431d7be075':
                printError('Email already exists. Are you a user? Click the Login tab!');
                break;
            case '3365bf7134803eb633c489d7c3f54c9b':
                printSuccess('You are now registered!');
                break;
            default:
                break;
        }
    };
}