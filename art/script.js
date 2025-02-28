// Tahun saat ini di footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Back to Top Button
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Formulir WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  const whatsappMessage = `Halo, saya ${nama}.\nEmail: ${email}\nPesan: ${pesan}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/6281330763633?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
});