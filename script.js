

function awesomeClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var dayNight = (hours < 12) ? "AM" : "PM"; /* Ternary operator, less than 12 hours = AM*/
    
 if (hours >= 13) {          /* Sets 24 hour clock to 12 */
   hours = hours % 12;
 } 
 
if (hours < 10){
   hours = "0" + hours;
  }

  if (minutes  < 10){
      minutes = "0" + minutes;
  }

  if (seconds < 10 ){
      seconds = "0" + seconds;
  }


  document.getElementById("awesomeClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + dayNight;

  setInterval(awesomeClock, 1000); /* Sets interval to 1000 milliseconds which is 1 second,
   so the page is always refreshing. */
}
