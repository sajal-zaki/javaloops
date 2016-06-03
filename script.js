function check(){
	var user = document.getElementById('username').value;
	var pasword =  document.getElementById('pass').value;
	var regex = /\d/g;

	if (regex.test(user) == true && user.length()==2)
	{
		alert("you entered right username");
	
	if (pasword==12345678)
	{
		alert("correct password");
		document.getElementById('heading').innerHTML="perfect"
	}
	else{
		alert("wrong password");
	}
	else{
		alert("wrong way of doing");
	}
	return false;


}