var img, y;
function parallex() {
  y = window.pageYOffset;
  img = document.getElementById('firstPanel');
  img.style.top = y * 0.5 + 'px';
}
window.addEventListener('scroll', parallex);
