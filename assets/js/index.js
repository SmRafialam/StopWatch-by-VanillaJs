var h = 0;
var m = 0;
var s = 0;
var stopTime = true;

function startTimer(){
  if(stopTime == true){
    stopTime = false;
    startTimerOn();
  }
}
function startTimerOn(){
  if(stopTime == false){
    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);

    s = s + 1;
    if(s == 60){
      m = m + 1;
      s = 0;
    }
    if(m == 60){
      h = h + 1;
      m = 0;
      s = 0;
    }
    if(h == 24){
      m = 0;
      s = 0;
      h = 0;
    }
    if(s < 10){
      s = "0" + s;
    }
    if(m < 10){
      m = "0" + m;
    }
    if(h < 10){
      h = "0" + h;
    }
  document.getElementById("stopwatch").innerHTML = "<h1>" + h + ':' + m + ':' + s + "</h1>";
  setTimeout("startTimerOn()",500);
}
}



function stopTimer(){
  if(stopTime == false){
    stopTime = true;
  }
}

function resetTimer(){
  document.getElementById("stopwatch").innerHTML="<h1>" + "00:00:00" + "</h1>";
  stopTime = true;
  m = 0;
  s = 0;
  h = 0;
}