var clock = document.getElementById('clock');

setInterval(function changeTime(){
  var date = new Date();
  clock.innerText = date.toLocaleTimeString();
},1000)



