
$(document).ready(() => {
  let body = $('body');
  
  let colors = [
    "rgb(19,78,197)",
    "rgb(190,202,217)",
    "rgb(20,90,210)"
  ];
  
  function changeColor(elem, color) {
    elem.css({"background-color" : color });
  }
  
  function randomColor() {
    return colors[parseInt(Math.random() * colors.length - 1)];
  }
  
  var colorCycle = (function() {
    var prevColor = "";
    return function () {
      console.log("called");
      var color = randomColor();
      if (color === prevColor) {
        while (color === prevColor) {
          color = randomColor();
        }
      }
      prevColor = color;
      changeColor(body, color);
    }
  })();
  
  /* function typewriter(elem, str) {
  
    var i = 0;
    var arr = str.split("");
   
    function appendLetter() {
      if (i < arr.length) {
      	var h = elem.innerHTML;
    		elem.innerHTML = h + arr[i]; 
      } else {
        clearInterval(interval);
      }
    	i++;
 	  }
		var interval = setInterval(appendLetter, 60);
  } */
  
  function letterize(elem) {

   	var i = 0;
    var str = $(elem).text();
    $(elem).html("");
    var arr = str.split("");
    var arr2 = [];

    arr.map((c) => {
      var html = "";
      html += "<div class='letter opacity'>";
      html += c;
      html += "</div>";
      arr2.push(html);
    });
    
    function appendLetter() {
      if (i < arr2.length) {
    		$(elem).append(arr2[i]).addClass('opacity'); 
      } else {
        clearInterval(interval);
      }
    	i++;
 	  }
    var interval = setInterval(appendLetter, 60);
  }
  
  //var colorInterval = setInterval(colorCycle, 8000);
  //typewriter(elem, str);
  letterize("#console");
});






















