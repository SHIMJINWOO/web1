/* Title Scrolling */
var msg  = document.title;
var speed = 450;
var endChar = " ";
var pos = 0;

function moveTitle()
{
     var ml = msg.length;
        
    title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
  document.title = title;
    
  pos++;
  if (pos > ml) pos=0;
  window.setTimeout("moveTitle()",speed);
}

moveTitle();

/* Live Clock */
const clock=document.querySelector('.tm-nav-li2:nth-child(5)')

function getTime(){ 
const time = new Date();
const hour = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
//clock.innerHTML = hour +":" + minutes + ":"+seconds;
clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
setInterval(getTime, 1000);
}

init();