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
function sendWA(package) {
    const features = {
        'Basic': ['5 Halaman Website', 'SSL Gratis', 'Optimasi SEO Dasar'],
        'Standard': ['10 Halaman Website', 'Blog Integrasi', 'Optimasi SEO Premium', 'Basic E-commerce'],
        'Premium': ['Halaman Unlimited', 'E-commerce Lengkap', 'SEO Advanced', 'Prioritas Support']
    };
    
    const message = `Halo, saya tertarik dengan paket ${package}%0A%0AFitur yang termasuk:%0A${features[package].join('%0A')}`;
    
    window.open(`https://wa.me/6281330763633?text=${message}`, '_blank');
}
function sendWA(package) {
    const features = {
        'Starter': [
            '5 Halaman Website (Home, About, Services, Portfolio, Contact)',
            'Domain Gratis 1 Tahun (.com/.net/.org)',
            'Mobile Responsive Optimal',
            'SSL Gratis & Hosting Premium'
        ],
        'Professional': [
            '15 Halaman Website + Blog & News Section',
            'CMS Integrasi (WordPress/Shopify)',
            'E-commerce Basic (Hingga 50 produk)',
            'Maintenance Bulanan & Backup Rutin',
            'Optimasi SEO Premium'
        ],
        'Enterprise': [
            'Halaman Unlimited + Sistem Membership',
            'E-commerce Advanced + Payment Gateway',
            'Prioritas Support 24/7 (Response <1 jam)',
            'Custom UI/UX Design',
            'Analytics & Reporting Bulanan'
        ]
    };
    
    // Membuat pesan dengan newline (\n) dan bullet (•)
    const message = `Halo, saya tertarik berlangganan paket *${package}*\n\n📋 *Detail Paket:*\n${features[package]
        .map(fitur => `• ${fitur}`) // Tambahkan bullet di setiap fitur
        .join('\n')}\n\n🚀 Mohon info langkah selanjutnya!`;
    
    // Encode seluruh pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/6281330763633?text=${encodedMessage}`, '_blank');
}