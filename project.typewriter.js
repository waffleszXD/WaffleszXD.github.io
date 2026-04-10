function Typewriter(options) {
  this.elem = options.elem;
  this.arr = options.arr;
  this.speed = options.speed;
  this.count = 0;
  this.init();
}

Typewriter.prototype.init = function() {
  var _this = this;
  this.interval = setInterval(appendLetter, this.speed);
}

Typewriter.prototype.appendLetter = function() {
  if (this.i < this.arr.length) {
    this.elem.innerHTML += this.arr[this.count];
  } else {
    clearInterval(this.interval);
  }
  this.count++;
}

project.typewriter = {
  init : function() {
    $('.js-typewriter').each(function(i,e) {
      e.theTypewriter = new Typewriter({
        elem: $(e),
        arr : $(e).innerHTML.split(""),
        speed: 80
      });
    });
  }
}