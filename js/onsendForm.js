const sendAnimation = document.querySelector('.circle');
const sendMessage = document.querySelector('.send__mes');

function onload(){
	setTimeout(message, 1500);
}

function message(){
	sendAnimation.style.opacity='0';
	sendAnimation.style.display='none';
	sendAnimation.style.visibility='hidden';
	sendMessage.style.opacity='1';
	sendMessage.style.visibility='visible';
	sendMessage.style.display='flex';
}

function backFromMessage(){
window.location.href='index.html';
}