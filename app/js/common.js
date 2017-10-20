
  function range() {

    var range = document.querySelector(".input-range").value;
    var img = document.querySelector(".pic");
    var video = document.querySelector(".video");
    var info = document.querySelector(".info");
    var borders = document.querySelector(".borders");
    var clip = document.querySelector(".clip");
    var cardFlash = document.querySelector(".card-flash");
    var drops = document.querySelectorAll(".drop");
    var flash = document.querySelector(".flash");


// scroll image sprite
    img.style.top = -221 * range + 'px';


// youtube handler
    if (range == 0) {
      video.style.opacity = 1;
      borders.style.opacity = 1;
    } else {
      video.style.opacity = 0;
      borders.style.opacity = 0;
    }

// change info
    if (range < 10) {
      info.innerText = 'Rethink what a phone can do';
    } else if (range < 25 && range > 10) {
      info.innerText = 'Water and dust resistand: Real world ready';
    } else if (range < 45 && range >25) {
      info.innerText = 'Capture picture perfect moments in all conditions';
    } else if (range < 60 && range >45) {
      info.innerText = 'Expandable memory: Fit more of what you love';
    }

// add flash
    if(range > 28 && range < 33) {
      flash.style.display = 'block';
    } else {
      flash.style.display = 'none';
    }

// add drop animation
    if(range > 10 && range < 25) {
      drops.forEach(function(item){
        if (!item.classList.contains('drop-animate')){
          item.classList.add('drop-animate');
        } else {
          item.classList.remove('drop-animate');
        }
      });
    }

// add clip and card-flash animation
    if (range == 59) {
      clip.style.opacity = 1;

      cardFlash.style.display = 'block';
    } else {
      clip.style.opacity = 0;

      cardFlash.style.display = 'none';
    }

  }

