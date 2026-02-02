# Kost Putri Cemara 1 - Website

Website modern dan responsif untuk **Kost Putri Cemara 1**, hunian eksklusif khusus putri di Gresik, Jawa Timur dengan fasilitas lengkap, keamanan 24 jam, dan lokasi strategis.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Instalasi & Setup](#instalasi--setup)
- [Struktur Project](#struktur-project)
- [Penggunaan](#penggunaan)
- [SEO & Meta Tags](#seo--meta-tags)
- [Responsive Design](#responsive-design)
- [Kontak & Booking](#kontak--booking)

---

## ✨ Fitur Utama

### Sektor Konten
- 🏠 **Hero Section** - Presentasi menarik dengan statistik
- ℹ️ **Tentang Kami** - Informasi lengkap tentang kost
- ⭐ **Keunggulan** - 12 fitur unggulan dalam grid cards
- 🛏️ **Tipe Kamar** - 2 pilihan kamar (AC & Non-AC) dengan detail lengkap
- 🏢 **Fasilitas** - Tabel perbandingan fasilitas antar tipe kamar
- 🖼️ **Galeri** - Photo gallery dengan modal lightbox interaktif
- 🎬 **Video** - YouTube video embeds untuk tour virtual
- 💬 **Testimoni** - 6+ reviews dari penghuni dengan animasi floating
- 📍 **Lokasi** - Google Maps embed + tabel jarak ke landmark penting
- ❓ **FAQ** - Accordion dengan Q&A lengkap
- 🎉 **Promo** - Banner promo dinamis dengan bulan/tahun otomatis
- 📞 **Kontak** - WhatsApp & Email untuk booking

### Interaktif & UX
- 📱 **Responsive Design** - Mobile-first, optimal di desktop/tablet/mobile
- 🍔 **Mobile Menu** - Hamburger navigation dengan smooth toggle
- 📜 **Smooth Scroll** - Anchor links dengan offset navbar
- ✨ **Entrance Animations** - Cards fade-in saat scroll
- 💬 **Floating Reviews** - Testimoni dengan animasi up/down
- 🔗 **Floating WhatsApp Button** - Akses WhatsApp dari mana saja
- 🖼️ **Gallery Modal** - Click image untuk fullscreen preview
- 🎯 **Navbar Indicator** - Active nav link saat scroll

### Teknis
- 🔍 **SEO Optimized** - Meta tags, OG tags, JSON-LD structured data
- 🎨 **Dark Theme Modern** - BuildWithAngga style dengan gradient effects
- ⚡ **Performance** - Vanilla JS, minimal dependencies
- 🎭 **Glassmorphism** - Backdrop blur effects
- 📊 **JSON-LD Schema** - LodgingBusiness structured data

---

## 🛠 Teknologi

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS3 (Flexbox, Grid, Animations, Variables) |
| **Fonts** | Google Fonts (Plus Jakarta Sans) |
| **Icons** | Font Awesome 6.4.0 |
| **Dev Server** | live-server |
| **Package Manager** | npm |

---

## 🚀 Instalasi & Setup

### Prerequisites
- Node.js & npm terinstall
- Text editor (VS Code recommended)

### Langkah Instalasi

1. **Clone/Download project**
   ```bash
   cd /path/to/kost-cemara
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan dev server**
   ```bash
   npm run dev
   ```

4. **Buka di browser**
   - Server akan berjalan di `http://localhost:8000` (atau port alternatif jika 8000 sudah digunakan)
   - Navigasi otomatis atau buka manual

### Scripts

```bash
npm run dev     # Jalankan live-server dengan auto-reload
```

---

## 📁 Struktur Project

```
kost-cemara/
├── index.html              # Main HTML file (896 lines)
├── styles.css              # Main stylesheet (1900+ lines)
├── script.js               # JavaScript functionality (367 lines)
├── package.json            # Project metadata & scripts
├── README.md               # Dokumentasi ini
└── photo/                  # Folder assets
    ├── tampak depan.jpeg
    ├── parkiran.jpeg
    ├── kamar ac.jpg
    ├── kamar ac 2.jpg
    ├── kamar mandi ac.jpg
    ├── kamar non ac.jpeg
    ├── kamar non ac 2.jpeg
    ├── kamar mandi.jpg
    ├── dapur.jpeg
    ├── lorong kamar.jpeg
    ├── lorong kamar 2.jpeg
    └── logo_kost_cemara-removebg-preview.png
```

---

## 💻 Penggunaan

### Struktur HTML
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Meta tags SEO -->
    <!-- JSON-LD Schema -->
    <!-- Favicon -->
    <!-- CSS & Fonts -->
</head>
<body>
    <!-- Top Banner (Promo) -->
    <!-- Navigation Bar -->
    <!-- Hero Section -->
    <!-- About Section -->
    <!-- Features Section -->
    <!-- Room Types Section -->
    <!-- Facilities Section -->
    <!-- Gallery Section -->
    <!-- Video Section -->
    <!-- Testimonials Section -->
    <!-- Location Section -->
    <!-- FAQ Section -->
    <!-- Promo Section -->
    <!-- Contact Section -->
    <!-- Footer -->
    <!-- Floating WhatsApp Button -->
    
    <!-- Scripts -->
</body>
</html>
```

### Menambah Fitur Baru

#### Menambah Gallery Image
Edit section `<!-- Galeri -->` di `index.html`:
```html
<div class="gallery-item">
    <img src="photo/nama-file.jpg" alt="Deskripsi Foto">
    <p>Deskripsi Foto</p>
</div>
```

#### Menambah Testimonial
Edit section `<!-- Testimoni -->` di `index.html`:
```html
<div class="review-card">
    <div class="review-quote">"Ulasan pelanggan di sini"</div>
    <p class="review-name">Nama Pengguna</p>
</div>
```

#### Mengubah Harga Kamar
Edit bagian `<!-- Tipe Kamar -->` di `index.html`:
- AC: Rp 1.1M/bulan (4x5m, kamar mandi dalam)
- Non-AC: Rp 550K/bulan (3x4m, kamar mandi luar)

#### Mengubah WhatsApp Number
Edit di `script.js`:
```javascript
const whatsappNumber = '6281357300672'; // Ganti dengan nomor baru
```

---

## 🔍 SEO & Meta Tags

### Meta Tags Termasuk
- **Description** - Deskripsi website untuk search engines
- **Keywords** - SEO keywords: "kost putri gresik", "kost putri cemara", dll
- **Open Graph** - Preview di social media (Facebook, LinkedIn, dll)
- **Twitter Card** - Preview khusus di Twitter
- **Favicon** - Icon di URL bar browser

### JSON-LD Schema
Website menggunakan LodgingBusiness schema untuk:
- Nama kost & deskripsi
- Alamat lengkap di Gresik
- Nomor telepon & email
- Rating (5 bintang dari 50 reviews)
- Daftar amenities (WiFi, keamanan 24 jam, dll)

### Keywords Target
```
kost putri gresik
kost putri cemara
kost putri aman
kost putri strategis
hunian putri gresik
kost terjangkau gresik
kost putri aman gresik
```

---

## 📱 Responsive Design

### Breakpoints
| Device | Width | Adjustments |
|--------|-------|-------------|
| **Desktop** | ≥1024px | Full layout, 120px padding sections |
| **Tablet** | 768px-1023px | Single column grid, 80px padding |
| **Mobile** | <768px | Hamburger menu, 60px padding |
| **Small Mobile** | <480px | Further compressed layout |

### Fitur Responsive
- ✅ Hamburger menu untuk mobile
- ✅ Flexible grid layouts (1-3 columns)
- ✅ Font size adjustments per breakpoint
- ✅ Touch-friendly button sizes (min 44px)
- ✅ Optimized images untuk mobile
- ✅ Readable line-length di semua device

---

## 📞 Kontak & Booking

### WhatsApp
**Nomor:** +62 813-5730-0672
- Fast Response 24 Jam
- Format: Internasional untuk link (6281357300672)

### Email
**Email:** salsabilaalmaas@gmail.com
- Response dalam 1x24 jam

### Lokasi
📍 **Gresik, Jawa Timur, Indonesia**
- Koordinat: -7.1564701, 112.5923885
- Map: Embedded Google Maps di website

---

## 🎨 Design System

### Color Palette
```css
--primary-color: #0D0D2B        /* Dark Blue */
--secondary-color: #6C5CE7      /* Purple */
--accent-color: #00D9FF         /* Cyan */
--text-dark: #1A1A2E
--text-light: #6B7280
--bg-light: #F8FAFC
--bg-dark: #0D0D2B
```

### Typography
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Weights:** 400, 500, 600, 700, 800
- **Base Size:** 16px

### Effects
- Gradient backgrounds (Purple to Cyan)
- Backdrop blur (glassmorphism)
- Box shadows untuk depth
- Smooth transitions & animations
- Floating card animations (up/down)

---

## 📊 Analytics & Monitoring

Website dilengkapi dengan:
- Meta tags untuk Google Analytics
- Open Graph untuk social media tracking
- Structured data untuk rich snippets

---

## 🔧 Troubleshooting

### Port 8000 Sudah Digunakan
```bash
# Kill process di port 8000
lsof -i :8000 -t | xargs kill -9

# Jalankan dev server lagi
npm run dev
```

### Favicon Tidak Muncul
- Hard refresh browser: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)
- Clear browser cache
- Logo file harus ada: `photo/logo_kost_cemara-removebg-preview.png`

### Gallery Modal Tidak Bekerja
- Pastikan `photo/` folder ada dengan images
- Check browser console untuk errors
- Pastikan script.js loaded dengan benar

---

## 📈 Performance Tips

1. **Minify CSS/JS** untuk production
2. **Optimize Images** dengan format modern (WebP)
3. **Enable Gzip Compression** di server
4. **Cache Busting** untuk updates
5. **CDN** untuk Font Awesome & Google Fonts

---

## 📄 License

Private project untuk Kost Putri Cemara 1. Semua hak dilindungi.

---

## 👨‍💻 Developer

Website dibuat dengan HTML5, CSS3, dan Vanilla JavaScript.
Powered by: BuildWithAngga Design Style

---

## 📅 Last Updated

**2 Februari 2026**

---

## 📝 Catatan Penting

- **Promo & Footer** - Bulan/tahun update otomatis berdasarkan tanggal sistem
- **WhatsApp Integration** - Seluruh tombol booking link ke WhatsApp
- **Dark Theme** - Optimized untuk mata dengan mode gelap
- **Mobile First** - Development fokus pada mobile experience
- **SEO Ready** - Siap untuk indexing di search engines

---

**Selamat menggunakan website Kost Putri Cemara 1! 🎉**
