const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

/* --- Hover sound --- */
const hoverSound = new Audio('Sounds/minimalist-button-hover-sound-effect-399749.mp3');
hoverSound.preload = 'auto';
hoverSound.volume = 0.28;

const navButtons = document.querySelectorAll('.off-screen-menu .ding a');

navButtons.forEach(btn => {
  btn.addEventListener('pointerenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(()=>{});
  });
  btn.addEventListener('focus', () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(()=>{});
  });
});