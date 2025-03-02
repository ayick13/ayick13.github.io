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
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Testimonial Slider
const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
  interval: 3000,
  pause: false
});

// Formulir WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // ... (logika form handling sama seperti sebelumnya) ...
});

// Fungsi untuk mengambil IP address
async function getIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    document.getElementById('ip-address').textContent = sanitizeInput(data.ip);
  } catch (error) {
    document.getElementById('ip-address').innerHTML = 'Tidak dapat mengambil IP address <span style="font-size: 10px;">(kemungkinan Anda menggunakan Private Browser)</span>';
  }
}

// Fungsi untuk mengambil User Agent
function getUserAgent() {
  document.getElementById('user-agent').textContent = sanitizeInput(navigator.userAgent);
}

// Inisialisasi saat halaman dimuat
window.onload = function() {
  getIPAddress();
  getUserAgent();
};

function sendWA(packageName, features) {
    const phoneNumber = '6281330763633';
    const message = `Halo, saya tertarik dengan paket *${packageName}*.\nFitur yang termasuk:\n- ${features.join('\n- ')}\n\nBisa dibantu lebih lanjut?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}