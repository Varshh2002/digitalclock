window.addEventListener('load',calc);

function calc(){
  let date=new Date();
  let dayno=date.getDay();
  let hour=date.getHours();
  let minute=date.getMinutes();
  let ampm=hour>=12?'PM':'AM';
  let dayNames=["SUN","MON","TUES","WED","THURS","FRI","SAT"];
  hour=hour%12;
  hour=hour?hour:'12';
  hour=hour<10?'0'+hour:hour;
  minute=minute<10?'0'+minute:minute;

  document.getElementById("day").innerHTML=dayNames[dayno];
  document.getElementById("hour").innerHTML=hour;
  document.getElementById("minute").innerHTML=minute;
  document.getElementById("ampm").innerHTML=ampm;

  setTimeout(calc,200);
}