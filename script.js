let Icon = document.querySelector('header i');
let nav = document.querySelector('nav');

Icon.onclick = function () {
  this.classList.toggle('fa-x');
  this.classList.toggle('fa-bars');
  nav.style.display = nav.style.display == 'none' ? 'block' : 'none';
};
