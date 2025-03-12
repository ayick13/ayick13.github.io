let coins = 99;
        let currentModel = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initModels();
            initFAQ();
            initEventListeners();
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        });

        function initModels() {
            const models = [
                'DALL-3', 'Leonardo', 'BING', 'Stable Diffusion', 
                'Midjourney', 'Imagen 3', 'Recraft V3', 
                'PlayGround AI', 'FLUX 1.1[pro]', 'FLUX 1[dev]', 'Ideogram', 'MetaAI'
            ];
            
            const modelContainer = document.getElementById('modelSelection');
            models.forEach(model => {
                modelContainer.innerHTML += `
                    <div class="col-6 col-md-2">
                        <div class="model-card card text-center p-2" data-model="${model}">
                            <h6 class="mb-0">${model}</h6>
                        </div>
                    </div>
                `;
            });
        }

function initFAQ() {
    const faqs = [
        { 
            question: "Bagaimana cara menggunakan generator ini?", 
            answer: "Ketik deskripsi gambar yang Anda inginkan di kolom teks, pilih model dan pengaturan, lalu klik Generate." 
        },
        { 
            question: "Berapa lama proses generasi gambar?", 
            answer: "Biasanya memakan waktu 15-30 detik tergantung model dan server." 
        },
        { 
            question: "Apa itu coins dan cara mendapatkannya?", 
            answer: "Coins adalah mata uang virtual untuk generasi gambar. Anda bisa mendapatkannya dengan upgrade akun." 
        },
        { 
            question: "Apakah gambar yang dihasilkan bisa komersial?", 
            answer: "Ya, semua gambar yang dihasilkan bebas royalti dan bisa digunakan untuk keperluan komersial." 
        },
        { 
            question: "Bagaimana jika hasil gambar tidak sesuai?", 
            answer: "Anda bisa mencoba memperbaiki deskripsi atau menggunakan model yang berbeda untuk hasil lebih baik." 
        },
        // Tambahan 5 FAQ baru
        { 
            question: "Apakah ada persyaratan sistem khusus?",
            answer: "Generator kami bekerja di semua browser modern (Chrome, Firefox, Safari terbaru). Tidak diperlukan spesifikasi hardware khusus."
        },
        { 
            question: "Bisakah saya menggunakan gambar untuk profil bisnis?",
            answer: "Tentu! Hasil gambar bisa digunakan untuk logo, konten media sosial, iklan, dan keperluan bisnis lainnya."
        },
        { 
            question: "Bagaimana cara menyimpan hasil gambar?",
            answer: "Klik gambar yang dihasilkan > pilih ikon download > pilih format (PNG/JPG). File akan otomatis terunduh."
        },
        { 
            question: "Apakah prompt yang saya masukkan aman?",
            answer: "Semua prompt dienkripsi dan tidak akan kami bagikan ke pihak lain. Anda memegang hak kekayaan intelektual penuh."
        },
        { 
            question: "Bisakah menggunakan generator tanpa login?",
            answer: "Anda bisa mencoba 5 generasi gratis tanpa login. Untuk penggunaan lanjut, perlu membuat akun terlebih dahulu."
        },
        { 
            question: "Apa arti kode error 429?",
            answer: "Error 429 berarti terlalu banyak request. Tunggu 1-2 menit atau upgrade paket untuk limit yang lebih tinggi."
        }
    ];

    const faqContainer = document.getElementById('faqAccordion');
    faqs.forEach((faq, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="faq${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">${faq.answer}</div>
                </div>
            </div>
        `;
    });
}
        function initEventListeners() {
            // Model selection
            document.querySelectorAll('.model-card').forEach(card => {
                card.addEventListener('click', function() {
                    document.querySelectorAll('.model-card').forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                    currentModel = this.querySelector('h6').textContent;
                });
            });

            // Back to top
            window.addEventListener('scroll', function() {
                const backToTop = document.getElementById('backToTop');
                backToTop.style.display = this.scrollY > 200 ? 'block' : 'none';
            });

            document.getElementById('backToTop').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

function validateNumberInput(input) {
    const value = parseInt(input.value);
    if (value < 1) input.value = 1;
}

function getImageSize() {
    return document.getElementById('imageSize').value;
}

async function generateImage() {
	const selectedSize = document.getElementById('imageSize').value;
    const generateBtn = document.querySelector('#generateBtn');
    const progressCard = document.getElementById('progressCard');
    const coinsElement = document.getElementById('coinCount');
    const imageCount = parseInt(document.getElementById('imageCount').value) || 1;
    const promptText = document.querySelector('textarea').value;
    
    try {
        // Validasi
        if (!currentModel) {
            alert('Pilih model terlebih dahulu!');
            return;
        }
        
        if (imageCount < 1) {
            alert('Jumlah gambar minimal 1');
            return;
        }
        
        if (coins < imageCount) {
            alert(`Coin tidak cukup! Dibutuhkan ${imageCount} coin Lagi untuk bisa menghasilkan gambar`);
            return;
        }

        // Disable tombol generate
        generateBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Memproses...';
        generateBtn.disabled = true;
        progressCard.classList.remove('d-none');

        // Simulasi proses generate
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 10;
            document.getElementById('progressBar').style.width = `${progress}%`;
            if(progress >= 100) clearInterval(progressInterval);
        }, 500);

        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Kurangi coins
        coins -= imageCount;
        coinsElement.textContent = coins;

        // Generate images
        const imageResults = document.getElementById('imageResults');
		function displayGeneratedImages(images) {
    const imageResults = document.getElementById('imageResults');
    const resultCount = document.getElementById('resultCount');
    
    // Update counter
    const currentCount = parseInt(resultCount.textContent) || 0;
    resultCount.textContent = currentCount + images.length;

    let imagesHTML = '';
    
    images.forEach((image, index) => {
        const truncatedTitle = promptText.substring(0, 40) + (promptText.length > 40 ? '...' : '');
        
        imagesHTML += `
            <div class="col-md-3 mb-3">
                <div class="card position-relative">
                    <div class="title-input">
                        <input type="text" 
                               class="form-control form-control-sm" 
                               value="${truncatedTitle}"
                               onblur="updateTitle(this)">
                    </div>
                    <img src="${image.url}" 
                         class="card-img-top generated-image"
                         loading="lazy"
                         onclick="toggleTitleInput(this)">
                    <div class="image-title">${truncatedTitle}</div>
                    <div class="card-footer p-2">
                        <small class="text-muted">
                            ${currentModel} • 
                            ${document.getElementById('imageQuality').value} • 
                            ${document.getElementById('imageStyle').value}
                        </small>
                    </div>
                </div>
            </div>
        `;
    });
    
    imageResults.innerHTML = imagesHTML + imageResults.innerHTML;
}
        let imagesHTML = '';
        
        for(let i = 0; i < imageCount; i++) {
            const truncatedTitle = promptText.substring(0, 40) + (promptText.length > 40 ? '...' : '');
            
            imagesHTML += `
                <div class="col-md-3 mb-3">
                    <div class="card position-relative">
                        <div class="title-input">
                            <input type="text" 
                                   class="form-control form-control-sm" 
                                   value="${truncatedTitle}"
                                   onblur="updateTitle(this)">
                        </div>
                        <img src="https://picsum.photos/500/300?random=1${Math.random()}" 
                             class="card-img-top generated-image"
                             loading="lazy"
                             onclick="toggleTitleInput(this)">
                        <div class="image-title">${truncatedTitle}</div>
                        <div class="card-footer p-2">
                            <small class="text-muted">
                                ${currentModel} • 
                                ${document.getElementById('imageQuality').value} • 
                                ${document.getElementById('imageStyle').value}
                            </small>
                        </div>
                    </div>
                </div>
            `;
        }
        
        imageResults.innerHTML = imagesHTML + imageResults.innerHTML;

    } catch (error) {
        alert('Gagal generate gambar: ' + error.message);
    } finally {
        // Reset UI state
        generateBtn.innerHTML = 'Generate <i class="fas fa-magic ms-1"></i>';
        generateBtn.disabled = false;
        progressCard.classList.add('d-none');
        document.getElementById('progressBar').style.width = '0%';
    }
}

// Fungsi untuk judul gambar
function toggleTitleInput(imgElement) {
    const card = imgElement.closest('.card');
    const titleInput = card.querySelector('.title-input');
    titleInput.style.display = titleInput.style.display === 'none' ? 'block' : 'none';
}

function updateTitle(input) {
    const title = input.value;
    const titleElement = input.closest('.card').querySelector('.image-title');
    titleElement.textContent = title;
    input.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan modal 1 detik setelah halaman dimuat
    setTimeout(() => {
        const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        welcomeModal.show();
    }, 1000);
});


function selectPackage(packageName) {
const message = `Halo, saya tertarik untuk berlangganan paket *${packageName}*. Mohon info lebih lanjut mengenai:
- Cara pembayaran
- Detail fitur
- Onboarding process`;

const whatsappUrl = `https://wa.me/6281330763633?text=${encodeURIComponent(message)}`;
window.location.href = whatsappUrl;
}
