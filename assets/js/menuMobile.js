const botaomobile = document.getElementById('btn-mobile');
const navbar = document.getElementById('navbar');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();
  navbar.classList.toggle('active');
  const active = navbar.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  }else{
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }
}

botaomobile.addEventListener('click', toggleMenu);
botaomobile.addEventListener('touchstart', toggleMenu);

document.querySelectorAll('.list__item').forEach(n => n.addEventListener('click', () => {
navbar.classList.remove('active');
}));