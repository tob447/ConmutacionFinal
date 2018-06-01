$(document).ready(function(){
  var xhttp = new XMLHttpRequest();
  var sendxhttp = new XMLHttpRequest();
  document.getElementById("lightsOn").onclick = function(){
    sendxhttp.open("POST", "https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata", true);
    sendxhttp.send('{"lights":"on"}');
    console.log("lights on!");
  };

  document.getElementById("lightsOff").onclick = function(){
    sendxhttp.open("POST", "https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata", true);
    sendxhttp.send('{"lights":"off"}');
    console.log("lights off!");
  };

  document.getElementById("systemOn").onclick = function(){
    sendxhttp.open("POST", "https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata", true);
    sendxhttp.send('{"system":"on"}');
    console.log("system on!");
  };

  document.getElementById("systemOff").onclick = function(){
    sendxhttp.open("POST", "https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata", true);
    sendxhttp.send('{"system":"off"}');
    console.log("system off!");
  };



  var timer=setInterval(function(){
    xhttp.open("GET", "https://50az5lc4ug.execute-api.us-east-1.amazonaws.com/testing/housedata", true);
    var data;

    xhttp.onreadystatechange=function(){
      if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
        data=JSON.parse(xhttp.responseText);
        console.log(data.Temperature);
        var t = document.getElementById("Temperature");
        var h = document.getElementById("Humidity");

        t.innerHTML=data.Temperature;
        h.innerHTML=data.Humidity;

        }



    };
    xhttp.send();


  },60*1000);
});
