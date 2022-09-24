



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








