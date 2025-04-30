# 🏓 Papan Skor Tenis Meja Web App

Web App ini merupakan papan skor interaktif untuk pertandingan tenis meja (ping pong) yang bisa dijalankan langsung di browser desktop. Aplikasi ini memungkinkan pemain untuk mencatat skor secara real-time, menyimpan riwayat pertandingan, menampilkan leaderboard berdasarkan kemenangan, dan memilih format pertandingan seperti *best of 3* atau *best of 5*.

---

## 🎯 Fitur Utama

- ✅ Input nama pemain
- ✅ Pilihan pemain pertama yang servis
- ✅ Format pertandingan: Best of 3 / Best of 5
- ✅ Penambahan skor secara real-time
- ✅ Indikator giliran servis
- ✅ Deteksi pemenang set & pertandingan
- ✅ Riwayat skor per set
- ✅ Simpan hasil pertandingan ke localStorage
- ✅ Papan peringkat (leaderboard)
- ✅ Daftar pertandingan terbaru
- ✅ Restart Match (tanpa input ulang nama)
- ✅ New Match (input ulang nama)
- ✅ Reset semua data

---

## 📷 Tampilan Antarmuka

> Tampilan aplikasi terdiri dari beberapa bagian:

1. **Pengaturan Awal Pertandingan**: Input nama, servis awal, dan format pertandingan.
2. **Papan Skor**: Penambahan poin, indikator servis, dan hasil pertandingan.
3. **Riwayat Set**: Menampilkan skor per set.
4. **Leaderboard**: Daftar pemain dengan jumlah kemenangan terbanyak.
5. **Pertandingan Terbaru**: Daftar pertandingan yang baru diselesaikan.

---

## 📁 Struktur File

📦papan-skor-tenis-meja/ ├── index.html # File HTML utama ├── style.css # Styling dengan CSS ├── script.js # Logika interaktif dengan JavaScript └── README.md # Dokumentasi proyek


---

## 🚀 Cara Menjalankan

1. **Download atau Clone Repository ini**:
   ```bash
   git clone https://github.com/username/papan-skor-tenis-meja.git

2. **Buka index.html di browser favorit Anda (Chrome, Firefox, Edge, dll):**
> Klik kanan → Open with → Browser
> Atau seret file index.html ke browser
> Gunakan aplikasi secara offline, tidak memerlukan koneksi internet maupun backend.

## 🛠 Teknologi yang Digunakan

Teknologi	Keterangan
HTML5	Struktur dan tampilan dasar
CSS3	Styling antarmuka pengguna
JavaScript	Logika interaktif dan skor
LocalStorage	Menyimpan data lokal (tanpa server)

## 💾 Penyimpanan Data
> Leaderboard dan Riwayat Pertandingan disimpan secara permanen di localStorage browser.
> Data akan tetap tersedia meskipun browser ditutup.
> Tombol Reset Semua akan menghapus seluruh data.

