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