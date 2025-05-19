
const text = "I'm Fares\nGlad to see you!";
let index = 0;
const heading = document.querySelector('.header h1');
if (heading) {
  heading.innerHTML = "";

  function typeEffect() {
    if (index < text.length) {
      heading.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}

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
  if (nav) {
    nav.classList.toggle('sticky', window.scrollY > 10);
  }
});


const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}


const projectButtons = document.querySelectorAll('.btn[data-project]');
if (projectButtons.length > 0) {
  projectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectName = this.getAttribute('data-project');
      window.location.href = `detail.html#${projectName}-modal`;
    });
  });
}


if (window.location.pathname.includes('detail.html')) {

  const hash = window.location.hash.substring(1);
  if (hash) {
    const modal = document.getElementById(hash);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }


  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close')) {
      const modals = document.querySelectorAll('.modal-overlay');
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
      window.location.hash = '';
    }
  });
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });

    if (isValid) {
      alert('Message sent successfully!');
      contactForm.reset();
    }
  });
}