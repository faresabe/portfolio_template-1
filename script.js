

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 10);
  });
  

  const text = "I'm Fares\nGlad to see you!";
let index = 0;
const heading = document.querySelector('.header h1');
heading.innerHTML = "";

function typeEffect() {
  if (index < text.length) {
    heading.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();


const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

