
"use strict"



//Timer


var startDateTime = new Date(2006, 12, 7, 2, 1, 0, 0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;

    document.getElementById("time-elapsed").innerHTML = "Time of life: " + d + "day(s), "+ h +" hour(s), "+ m +" minute(s), "+ s +" second(s)";
}

setInterval(updateClock, 1000);



//clock

function clock(){
const hoursArrow = document.querySelector('.hours')
const minutesArrow = document.querySelector('.minutes')
const secondsArrow = document.querySelector('.seconds')
const deg = 6;

setInterval(() =>{
const day = new Date()
const hours = day.getHours() * 30
const minutes = day.getMinutes() * deg
const seconds = day.getSeconds() * deg

hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
minutesArrow.style.transform = `rotateZ(${minutes}deg)`
secondsArrow.style.transform = `rotateZ(${seconds}deg)`
}, 0)





} 

clock()


const form = document.querySelector('.form');
const formReadyToSend = document.querySelector('.form__button');

const hiddenFormBatton = document.querySelector('.backtomain__text');
const formButton = document.querySelector('.contactme__text');
const rightBox = document.querySelector('.rightbox__content');
const hiddenButton = document.querySelector('.hidden__button')
const hiddenBlock = 	document.querySelector('.hidden__block');
const infoButton = document.querySelector('.rightbox__content__right__bottom__info');
const aboutSite = document.querySelector('.rightbox__content__right');
const aboutSiteInfo = document.querySelector('.personalinfo__info');
hiddenBlock.style.display = 'none';
hiddenButton.style.display = 'none';



function about(){
	aboutSite.style.display = 'none';
	hiddenBlock.style.display = 'block';
	infoButton.style.display = 'none';
	hiddenButton.style.display = 'block';
	
}



function back__to__main(){
	hiddenBlock.style.display = 'none';
	aboutSite.style.display = 'block';
	infoButton.style.display = 'block';
	hiddenButton.style.display = 'none';
}


//Show Form Function


function showForm(){
	rightBox.style.display = 'none';
	formButton.style.display = 'none';
	hiddenFormBatton.style.display = 'block';
	form.style.display = 'flex';
}

//------------------

//Hide Form Function

function hideForm(){
	rightBox.style.display = 'flex';
	formButton.style.display = 'block';
	hiddenFormBatton.style.display = 'none';
	form.style.display = 'none';
}
//------------------


//form send

document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);

let formData = new FormData(form);
formData.append('image', formImage.files[0]);

		if(error === 0){
form.classList.add('_sending');

let response = await fetch('sendmail.php', {
	method: 'POST',
	body: formData
});
if(response.ok){
let result = await response.json();
alert(result.message);
formPreview.innerHTML = '';
form.reset();
form.classList.remove('_sending');
}else{
alert("Error");
form.classList.remove('_sending');
}

		}else{
			alert('Fill in the required line');
		}
	}

	function formValidate(form){
let error = 0;
let formReq = document.querySelectorAll('._req');
for (let index = 0; index < formReq.length; index++) {
	const input = formReq[index];
	formRemoveError(input);
if(input.classList.contains('_email')){
if(emailTest(input)){
	formAddError(input);
	error++;
}
}else if(input.getAttribute("type") === "checkbox" && input.checked === false){
	formAddError(input);
	error++;
}else{
	if(input.value === ''){
		formAddError(input);
		error++;
	}
}
}
return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

		function formRemoveError(input){
			input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		}


		function emailTest(input){
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}

const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
	uploadFile(formImage.files[0]);
});

function uploadFile(file){
	//Check file type
	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
		alert('Only image');
		formImage.value = '';
		return;
	}
	//Check file size
	if (file.size > 2 * 1024 * 1024) {
		alert('File must be less than 2 mb');
		return;
	}

var reader = new FileReader();
reader.onload = function (e){
	formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
};
reader.onerror = function (e){
	alert('Error');
};
reader.readAsDataURL(file);
}
});
 

//------------