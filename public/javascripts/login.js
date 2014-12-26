/**
 * Created by mko on 26/12/14.
 */

function login(){
	var emailpseudo = $("#emailpseudoinput_login").val();
	var pw = $("#pwinput_login").val();

	if(emailpseudo == "" || pw == ""){
		printError("please fill all fields");
	}else if(pw.length < 6){
		printError("password is invalid.");
	}else{
		// login post request is handled by /routes/people.js
        $.post('/people/login', {'emailpseudo': emailpseudo, 'pw': pw}, function(data){
            //alert('data sent');
            if(data.status == 'success'){
                alert('success');
            }else if(data.status == 'failure'){
                alert('NOU');
            }else{
                alert('NOU');
            }
        });
	}
}