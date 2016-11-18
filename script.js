var img, y;
function parallex() {
  //find y position on page
  y = window.pageYOffset;
  img = document.getElementById('wall');
  img.style.top = y * 0.4 + 'px';
}
window.addEventListener('scroll', parallex);
