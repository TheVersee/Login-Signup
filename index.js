/*document.getElementsByTagName("body")[0].className="sign-up-clk";*/
document.getElementsByClassName("second")[0].style.zIndex=-1;
function call1(){
	document.getElementsByClassName("second")[0].style.zIndex=null;
	document.getElementsByTagName("body")[0].className="sign-in-clk";
}
function call2(){
	document.getElementsByClassName("second")[0].style.zIndex=null;
	document.getElementsByTagName("body")[0].className="sign-up-clk";
}
function modal(){
	/*document.getElementsByClassName("modal-bg")[0].style.visibility="visible";
	document.getElementsByClassName("modal-bg")[0].style.opacity=1;*/
	document.getElementsByClassName("modal-bg")[0].classList.add("bg-active");
	validity();
}
function closeModal(){
	document.getElementsByClassName("modal-bg")[0].classList.remove("bg-active");
	document.getElementById("msg").innerHTML="";
}
function validity(){
	var f=1;
	var fname=document.forms["myForm1"]["fname"].value;
	var num=document.forms["myForm1"]["num"].value;
	var mail=document.forms["myForm1"]["mail"].value;
	var pass=document.forms["myForm1"]["pass"].value;
	if(fname==""){
		document.getElementById("msg").innerHTML="Kindly enter name";
		f=0;
	}
	if(num==""){
		document.getElementById("msg").innerHTML+="<br>Kindly enter number";
		f=0;
	}
	if(mail==""){
		document.getElementById("msg").innerHTML+="<br>Kindly enter Email  <br>";
		f=0;
	}
	if(pass==""){
		document.getElementById("msg").innerHTML+="Kindly enter password";
		f=0;
	}
	var f2=1;
	if(f==1){
		if(num.length!=10){
			document.getElementById("msg").innerHTML="Number is not correct";
			f2=0;
		}
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!mail.match(mailformat)){
			document.getElementById("msg").innerHTML+="<br>Email is not correct";
			f2=0;
		}
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(!pass.match(passw)){
			document.getElementById("msg").innerHTML+="<br>Password isn't strong";
			f2=0;
		}
		
	}
	if(f2==0 || f==0){
		document.getElementById("msg").style.color="red";
		document.getElementById("msg").style.position="absolute";
		document.getElementById("msg").style.top="4px";
		document.getElementById("msg").style.left="4px";
	}
	if(f2==1 && f==1){
		document.getElementById("msg").innerHTML="Welcome "+fname;
		document.getElementById("msg").style.color="purple";
		document.getElementById("msg").style.position="absolute";
		document.getElementById("msg").style.left="38%";
		document.getElementById("msg").style.textAlign="center";
		document.getElementById("msg").style.fontSize="20px";
		document.getElementById("msg").style.marginTop="30px";
	}
	
}

function modal2(){
	document.getElementsByClassName("modal-bg")[0].classList.add("bg-active");
	validity2();
}

function validity2(){
	var mail=document.forms["myForm2"]["mail"].value;
	var pass=document.forms["myForm2"]["pass"].value;
	var f=1;
	if(mail==""){
		document.getElementById("msg").innerHTML+="<br>Kindly enter Email  <br>";
		f=0;
	}
	if(pass==""){
		document.getElementById("msg").innerHTML+="Kindly enter password";
		f=0;
	}
	var f2=1;
	if(f==1){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!mail.match(mailformat)){
			document.getElementById("msg").innerHTML+="<br>Email is not correct";
			f2=0;
		}
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(!pass.match(passw)){
			document.getElementById("msg").innerHTML+="<br>Password is not correct";
			f2=0;
		}
	}
	if(f2==0 || f==0){
		document.getElementById("msg").style.color="red";
		document.getElementById("msg").style.position="absolute";
		document.getElementById("msg").style.top="4px";
		document.getElementById("msg").style.left="4px";
	}
	if(f2==1 && f==1){
		document.getElementById("msg").innerHTML="Welcome ";
		document.getElementById("msg").style.color="purple";
		document.getElementById("msg").style.position="absolute";
		document.getElementById("msg").style.left="38%";
		document.getElementById("msg").style.textAlign="center";
		document.getElementById("msg").style.fontSize="20px";
		document.getElementById("msg").style.marginTop="30px";
	}
	
}









