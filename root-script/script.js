// Fungsi sanitasi input
function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;")
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

// Tahun saat ini di footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Back to Top Button
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Testimonial Slider
const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
  interval: 3000,
  pause: false
});

// Formulir WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const paket = document.getElementById('paket').value;
  const pesan = document.getElementById('pesan').value.trim();
  const konsultasi = document.querySelector('input[name="konsultasi"]:checked').value;

  // Sanitasi input
  const sanitizedNama = sanitizeInput(nama);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedPesan = sanitizeInput(pesan);

  // Buat pesan WhatsApp
  const whatsappMessage = `Halo, saya ${sanitizedNama}.\nEmail: ${sanitizedEmail}\nPaket yang dipilih: ${paket}\nKonsultasi Gratis: ${konsultasi}\nPesan: ${sanitizedPesan}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/6281330763633?text=${encodedMessage}`;

  // Buka WhatsApp
  window.open(whatsappUrl, '_blank');
});

// Fungsi untuk mengambil IP address menggunakan layanan ipify
async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const sanitizedIP = sanitizeInput(data.ip);
    document.getElementById('ip-address').textContent = sanitizedIP;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    document.getElementById('ip-address').innerHTML = 'Tidak dapat mengambil IP address <span style="font-size: 10px;">(kemungkinan Anda menggunakan Private Browser)</span>';
  }
}

// Fungsi untuk mengambil User Agent dari browser
function getUserAgent() {
  const userAgent = navigator.userAgent;
  const sanitizedUserAgent = sanitizeInput(userAgent);
  document.getElementById('user-agent').textContent = sanitizedUserAgent;
}

// Panggil fungsi saat halaman dimuat
window.onload = function() {
  getIPAddress();
  getUserAgent();
};
