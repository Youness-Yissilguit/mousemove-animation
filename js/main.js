const lines = document.querySelectorAll('.lines');
lines.forEach((line) => {
  const ranndomPositionX = Math.floor(Math.random() * 100);
  const ranndomPositionY = Math.floor(Math.random() * 100);
  line.style.top = ranndomPositionX + '%';
  line.style.left = ranndomPositionY + '%';
});

//parrralex effect
let scene1 = document.getElementById('scene1');
let parallax1 = new Parallax(scene1);
let scene2 = document.getElementById('scene2');
let parallax2 = new Parallax(scene2);
let scene3 = document.getElementById('scene3');
let parallax3 = new Parallax(scene3);
let scene4 = document.getElementById('scene4');
let parallax4 = new Parallax(scene4);

//move the circle
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', hover);
function hover(e) {
		let x = e.pageX;
		let y = e.pageY;
		cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
};

//mouse move
const links = document.querySelectorAll('.nav-links ul li a');
const bg = document.getElementById('animated-bg');
links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    const src = link.getAttribute('data-src');
    cursor.classList.add('link-hover');
    hoverBg(src);
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('link-hover');
    leaveBg();
  });
});

//hover function
function hoverBg(src){
  bg.classList.add('transform');
  bg.addEventListener('transitionend', function() {
    this.classList.remove('transform');
    bg.style.background = `url('images/${src}.jpg') no-repeat 50% 50%`;
    bg.style.backgroundSize = 'cover';
  });
};

//mouse leave function
function leaveBg(){
  bg.classList.add('transform');
  bg.addEventListener('transitionend', function() {
    this.classList.remove('transform');
    bg.style.background = `url('images/bg1.jpg') no-repeat 50% 50%`;
    bg.style.backgroundSize = 'cover';
  });
};
