# 🏓 Papan Skor Tenis Meja Web App

Aplikasi ini adalah papan skor interaktif untuk pertandingan tenis meja (**ping pong**) berbasis web yang dapat dijalankan langsung melalui browser desktop. Aplikasi ini memungkinkan pemain untuk:

- mencatat skor secara real-time
- menyimpan riwayat pertandingan
- menampilkan leaderboard berdasarkan kemenangan
- memilih format pertandingan (Best of 3 / Best of 5)

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

Tampilan aplikasi terdiri dari beberapa bagian:

1. **Pengaturan Awal Pertandingan**: Input nama, pilihan servis awal, dan format pertandingan.
2. **Papan Skor**: Penambahan poin, indikator giliran servis, dan informasi hasil pertandingan.
3. **Riwayat Set**: Menampilkan skor akhir setiap set.
4. **Leaderboard**: Menyimpan dan menampilkan daftar pemain dengan jumlah kemenangan terbanyak.
5. **Pertandingan Terbaru**: Menyimpan daftar pertandingan yang baru saja selesai.

### 🖼️ Screenshot

Berikut beberapa tampilan dari aplikasi ini:

#### 🎮 Tampilan Awal
![image](https://github.com/user-attachments/assets/adb236e7-e7bc-453a-a9d4-f9b7e76a3605)

#### 📊 Selama Pertandingan
![image](https://github.com/user-attachments/assets/b0e64ec3-a0cd-42bf-ae11-6c88df3deae7)

#### 🏆 Leaderboard dan Riwayat Pertandingan
![image](https://github.com/user-attachments/assets/349e427c-fdc1-41aa-9005-ef913edd8906)

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

