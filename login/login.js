const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
var check_user = /^[\d][\d]{9,10}/;

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(checkInputs() == true){
		alert("Đăng nhập thành công");
		location.assign("../index.html");
	} 
}); 

function checkInputs() {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === "") {
		setErrorFor(username, 'Không được để trống!'); 
		return false;
	} else if(usernameValue.length < 10 || StringMatch(usernameValue, check_user) == false) {
		setErrorFor(username, 'Số điện thoại không hợp lệ!'); 
		return false;
	} 
	else {
		setSuccessFor(username);
	}

	if(passwordValue === "") {
		setErrorFor(password, 'Mật khẩu không được để trống!');
		return false
	} else if (passwordValue.length < 6) {
		setErrorFor(password, 'Mật khẩu quá ngắn!');
		return false
	} 
	else {
		setSuccessFor(password);
	}
	return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;	
	formControl.className = 'form-control success'
}

function StringMatch(txt, reg) {
	return reg.test(txt);
}
