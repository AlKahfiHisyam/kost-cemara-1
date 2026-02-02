// ============================================
// MOBILE NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// FAQ ACCORDION
// ============================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and items
document.querySelectorAll('.feature-card, .room-card, .testimonial-card, .facility-group, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// FORM SUBMISSION
// ============================================

const reservationButtons = document.querySelectorAll('.btn-secondary, .btn-cta');

reservationButtons.forEach(button => {
    if (button.href.includes('wa.me')) {
        button.addEventListener('click', function(e) {
            // Allow the WhatsApp link to open naturally
        });
    }
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// ACTIVE NAV INDICATOR
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// IMAGE LAZY LOADING
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================

// Add WhatsApp button to all room cards
function setupWhatsAppButtons() {
    const whatsappNumber = '6281357300672';
    const roomButtons = document.querySelectorAll('.btn-secondary');
    
    roomButtons.forEach(button => {
        if (button.textContent.includes('Pesan')) {
            const roomType = button.closest('.room-card').querySelector('h3').textContent;
            button.href = `https://wa.me/${whatsappNumber}?text=Halo,%20saya%20tertarik%20untuk%20booking%20kamar%20${roomType}%20di%20Kost%20Putri%20Cemara%201`;
            button.target = '_blank';
        }
    });
}

setupWhatsAppButtons();

// ============================================
// DYNAMIC PROMO NOTE
// ============================================

function updatePromoNote() {
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const now = new Date();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    const promoEl = document.getElementById('promo-note');
    if (promoEl) {
        promoEl.textContent = `📅 Berlaku s/d akhir ${monthName} ${year} (Kuota Terbatas)`;
    }
    const headingEl = document.getElementById('promo-heading');
    if (headingEl) {
        headingEl.textContent = `🎉 PROMO SPESIAL ${monthName.toUpperCase()} ${year}! 🎉`;
    }
}

// Initialize promo note on page load
updatePromoNote();

// ============================================
// DYNAMIC FOOTER YEAR
// ============================================

function updateFooterYear() {
    const yearEl = document.getElementById('tahun');
    if (!yearEl) return;
    const now = new Date();
    yearEl.textContent = now.getFullYear();
}

// Set footer year immediately
updateFooterYear();


// ============================================
// SCROLL TO TOP (Disabled)
// ============================================

// Scroll-to-top feature removed per user request.
// If you want to re-enable it later, restore the
// `createScrollToTopButton` function and its invocation.

// ============================================
// MODAL GALLERY
// ============================================

function setupGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const src = img.src;
            const alt = img.alt;
            
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            const imgWrapper = document.createElement('div');
            imgWrapper.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = src;
            modalImg.alt = alt;
            modalImg.style.cssText = `
                max-width: 100%;
                max-height: 100vh;
                border-radius: 8px;
            `;
            
            const closeBtn = document.createElement('span');
            closeBtn.innerHTML = '✕';
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 40px;
                cursor: pointer;
                transition: color 0.3s ease;
            `;
            
            closeBtn.addEventListener('mouseover', () => {
                closeBtn.style.color = '#e8a506';
            });
            
            closeBtn.addEventListener('mouseout', () => {
                closeBtn.style.color = 'white';
            });
            
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
            
            imgWrapper.appendChild(modalImg);
            imgWrapper.appendChild(closeBtn);
            modal.appendChild(imgWrapper);
            document.body.appendChild(modal);
        });
    });
}

setupGalleryModal();

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency to Indonesian Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Add to body for external use if needed
window.formatRupiah = formatRupiah;

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Trigger animation after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
} else {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}
