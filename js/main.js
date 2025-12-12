
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, span')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const video3 = document.getElementById('myVideo3');
const button3 = document.getElementById('myButton3');

button3.addEventListener('click', function() {
  if (video3.paused) {
    video3.play();
    button3.textContent = '';
  } else {
    video3.pause();
    button3.textContent = '';
  }
});

const video2 = document.getElementById('myVideo2');
const button2 = document.getElementById('myButton2');

button2.addEventListener('click', function() {
  if (video2.paused) {
    video2.play();
    button2.textContent = '';
  } else {
    video2.pause();
    button2.textContent = '';
  }
});

const video1 = document.getElementById('myVideo1');
const button1 = document.getElementById('myButton1');

button1.addEventListener('click', function() {
  if (video1.paused) {
    video1.play();
    button1.textContent = '';
  } else {
    video1.pause();
    button1.textContent = '';
  }
});

const video = document.getElementById('myVideo');
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    button.textContent = '';
  } else {
    video.pause();
    button.textContent = '       ';
  }
});

const swiper = new Swiper(".myswiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();
