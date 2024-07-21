setInterval(() =>{
let time = new Date();
document.querySelector('#Time').innerHTML =time.toLocaleTimeString();

},1000)

function setalarm(){

 // let h =document.querySelector('#hours').value;
  //let m =document.querySelector('#miutes').value;
  let h= hours.value;
  let m = minutes.value;
 setalarmtime.innerHTML =  h+":"+ m+":00";

  }

let check = setInterval(() =>{

let alarmtime =   setalarmtime.innerHTML;
alarmtime =alarmtime.split(":");
let alarmhrs = alarmtime[0];
let alarmmin = alarmtime[1];

let pctime = new Date();
let pchrs= pctime.getHours();
let pcmin =pctime.getMinutes();

if(pchrs>12){
  pchrs=pchrs-12;

}

if(alarmhrs==pchrs && alarmmin==pcmin){
  alarmimage.src= "gif2.gif"
document.querySelector('#alarmsound').play();
document.querySelector('#alarmsound').loop="true";
}


},1000);
