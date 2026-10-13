# CAVIN EDWARD - Sales Jaecoo Landing Page

Landing page simple 1 halaman (mobile-first, responsif) untuk sales mobil Jaecoo. Pengunjung dapat mengisi form booking/pemesanan yang akan diteruskan ke WhatsApp.

## Struktur Folder

```
/
├── index.html
├── style.css
├── script.js
├── data.js
├── README.md
└── images/
    ├── j5-ev-standard.jpg   [GANTI]
    ├── j5-ev-premium.jpg    [GANTI]
    ├── j7-shs.jpg           [GANTI]
    ├── j7-awd.jpg           [GANTI]
    ├── j8-shs.jpg           [GANTI]
    ├── j8-awd.jpg           [GANTI]
    └── placeholder.jpg      (opsional, bisa dibuat jika perlu)
```

## Konfigurasi Utama (WAJIB - Edit hanya di data.js)

Semua data varian terpusat di **`data.js`**. Jadi Anda cukup mengedit **1 file saja** untuk mengganti harga, gambar, fitur.

### 1. Mengganti Harga

Buka `data.js`, cari tiap objek produk dan ubah nilai `harga`:

```js
{
  id: "j5-ev-standard",
  nama: "Jaecoo J5 EV Standard",
  harga: 0, // <-- GANTI DENGAN HARGA NYATA (angka, tanpa Rp, tanpa titik)
  ...
}
```

**Aturan:**
- Gunakan angka murni, contoh: `269900000` (tanpa koma/titik).
- Jika `harga: 0`, akan otomatis tampil sebagai **"Hubungi Sales"**.
- Format otomatis menjadi `Rp xxx.xxx.xxx`.

### 2. Mengganti Gambar

Ganti path gambar di field `gambar` sesuai file yang ada di folder `/images`:

```js
gambar: "images/j5-ev-standard.jpg", // Nama file harus sesuai ID
```

**Penamaan file disarankan (sesuai ID):**
- `j5-ev-standard.jpg`
- `j5-ev-premium.jpg`
- `j7-shs.jpg`
- `j7-awd.jpg`
- `j8-shs.jpg`
- `j8-awd.jpg`

**Sumber gambar rekomendasi:**
- Situs resmi Jaecoo Indonesia / Chery Indonesia
- Press kit / galeri resmi
- Gunakan gambar berorientasi landscape (16:9 atau 16:10) untuk hasil terbaik & tidak terpotong.

### 3. Mengganti Fitur/Spesifikasi Singkat

Edit array `fitur` per varian di `data.js`:

```js
fitur: [
  "Penggerak Listrik Pure EV",
  "Desain Modern & Sporty",
  "Interior Premium"
]
```

### 4. Nomor WhatsApp & Nama Sales

Sudah terkonfigurasi:
- **Nama Sales:** `Cavin Edward`
- **WhatsApp:** `085762610036` → link otomatis `wa.me/6285762610036`

Jika ingin mengganti nomor WA, bisa edit variabel `WA_NUMBER` di file `script.js` (baris awal). Namun untuk konsistensi, bisa juga sesuaikan link langsung di HTML jika diperlukan.

## Cara Menjalankan (Preview Lokal)

Cukup buka file `index.html` langsung di browser (double click). Bisa juga menggunakan live server (VS Code Live Server) untuk preview otomatis saat edit.

## Optimasi Gambar

- Kompres gambar agar ukuran < 500KB - 1MB per file (rekomendasi WebP/JPG)
- Gunakan lazy loading (sudah aktif di kartu/modal)
- Aspect ratio 16:9 untuk card, 16:10 untuk hero/modal

## Upload ke Hosting

Upload **SEMUA file** berikut ke root hosting (public_html):
- `index.html`
- `style.css`
- `script.js`
- `data.js`
- Seluruh file di folder `images/` (jangan lupa upload semua gambar)

Struktur setelah upload:
```
public_html/
├── index.html
├── style.css
├── script.js
├── data.js
└── images/
```

Landing page bisa langsung diakses via domain Anda.

## Petunjuk Singkat (TL;DR)

1. Edit **`data.js`** → isi **harga** (angka) atau biarkan `0` untuk "Hubungi Sales"
2. Taruh gambar 6 varian ke **`/images/`** dengan nama sesuai ID (atau ganti path di `data.js`)
3. Upload semua file ke hosting
4. Selesai

## Catatan Teknis

- Tanpa backend (100% frontend, HTML+CSS+JS murni)
- Mobile-first & fully responsive
- Semua render otomatis dari `data.js` (kartu, pricelist, dropdown form, pesan WA)
- Validasi form sederhana, kirim data terformat rapi ke WhatsApp
- Animasi smooth scroll, fade-in/slide-up, hover interaktif
- Font: Inter, Space Grotesk, Poppins (Google Fonts)
- Icons: Bootstrap Icons

---

**Dibuat untuk Cavin Edward - Sales Jaecoo**