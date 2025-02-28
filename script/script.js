// Update tahun saat ini di footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = currentYear;

// Back to Top Button
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Formulir WhatsApp dengan sanitasi
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  // Validasi input
  if (!nama || !email || !pesan) {
    alert('Harap isi semua field.');
    return;
  }

  // Sanitasi input
  const sanitizeInput = (input) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const sanitizedNama = sanitizeInput(nama);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedPesan = sanitizeInput(pesan);

  const whatsappMessage = `Halo, saya ${sanitizedNama}.\nEmail: ${sanitizedEmail}\nPesan: ${sanitizedPesan}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/6281330763633?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
});
