



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