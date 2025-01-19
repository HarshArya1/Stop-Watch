const butt=document.getElementById('operation');
let minutes = 0;
let seconds = 0;
let Milisec=0;
let hour=0;
let interval;
function show(hour,minutes,seconds,Milisec){
  const first=document.getElementById('hour');
  const Second=document.getElementById('mini');
  const Third=document.getElementById('sec');
  const Fourth=document.getElementById('mili');
  first.innerHTML=String(hour).padStart(2, '0');
  Second.innerHTML=String(minutes).padStart(2, '0');
  Third.innerHTML=String(seconds).padStart(2, '0');
  Fourth.innerHTML=String(Milisec).padStart(4, '0');

}
butt.addEventListener('click',(event)=>{
  // console.log(event.target.id)
  if(event.target.id==="Start"){
    clearInterval(interval);
    interval=setInterval(()=>{
    Milisec++;
    if(Milisec==1000){
      Milisec=0;
      seconds+=1;
      if(seconds==60){
        seconds=0;
        Milisec=0;
        minutes+=1;
      }
      else if(minutes==60){
        seconds=0;
        Milisec=0;
        minutes=0;
        hour+=1;
      }
    }
    show(hour,minutes,seconds,Milisec);
    },1);
  }
  else if(event.target.id==="but"){
    clearInterval(interval);
  }
  else{
    show(0,0,0,0);
    hour=0;
    seconds=0;
    minutes=0;
    Milisec=0;
    clearInterval(interval);
  }
})