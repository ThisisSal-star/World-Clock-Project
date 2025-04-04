function updateTime(){
//Rome
let romeElement =document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Italy/Rome");

romeDateElement.innerHTML = romeTime.format("dddd MMMM Do, yyyy");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small.]");

//Tokyo
let tokyoElement =document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Japan/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("dddd MMMM Do, yyyy");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

//Toronto
let torontoElement =document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("Canada/Toronto");

torontoDateElement.innerHTML = torontoTime.format("dddd MMMM Do, yyyy");
torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss [<small>]A[</small>]");
};
updateTime()
setInterval(updateTime, 1000);