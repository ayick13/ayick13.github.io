// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    this.textContent = ' Light Mode';
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    this.textContent = ' Dark Mode';
  }
});

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
});

// WhatsApp Form Submission
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.querySelector('#whatsappForm input[type="text"]').value;
  const email = document.querySelector('#whatsappForm input[type="email"]').value;
  const message = document.querySelector('#whatsappForm textarea').value;

  const url = `https://wa.me/6281330763633?text=Nama:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APesan:%20${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menampilkan tahun dinamis di footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
