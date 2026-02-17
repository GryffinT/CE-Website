const navBar = document.getElementById('navbar');
const navButtons = navBar.querySelectorAll('button');
const underline = document.getElementById('nav-underline');

let height = 10;

function scrollTransparency() {
  const scrolled = window.scrollY > height;

  navBar.style.backgroundColor = scrolled
    ? 'rgba(255,255,255,1)'
    : 'rgba(255,255,255,0)';

  navBar.style.boxShadow = scrolled
    ? '0 8px 24px rgba(0, 0, 0, 0.12)'
    : '0 8px 24px rgba(0, 0, 0, 0)';


  navButtons.forEach(btn => {
    btn.style.color = scrolled ? 'rgb(0,0,0)' : 'rgb(255,255,255)';
  });
}

function moveUnderline(btn) {
  const rect = btn.getBoundingClientRect();
  const navRect = navBar.getBoundingClientRect();

  underline.style.left = (rect.left - navRect.left) + 'px';
  underline.style.width = rect.width + 'px';
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    moveUnderline(btn);
  });
});

moveUnderline(document.querySelector('#navbar button.active'));

window.addEventListener('scroll', scrollTransparency);

