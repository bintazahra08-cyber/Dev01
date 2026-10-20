# Shakira 🖤 — Catatan Keuangan Pribadi

Aplikasi catatan keuangan pribadi yang **mewah, rahasia, dan hanya untuk satu orang**.
Seluruh tampilan menggunakan **Bahasa Indonesia tanpa terkecuali**.

## 🖤 Pribadi & Rahasia — Hanya Untukmu

- Dilindungi **kata sandi 6 angka** yang dibuat sendiri saat pertama kali membuka.
- Tidak ada pendaftaran akun untuk orang lain — hanya ada **satu pemilik tunggal**.
- Seluruh data tersimpan **hanya di peramban perangkat ini** (penyimpanan setempat).
  Tidak ada peladen, tidak ada pengiriman data ke mana pun, tidak bisa diintip orang lain.
- Halaman dilengkapi penanda agar **tidak terindeks mesin pencari**.
- Ada tombol **Kunci** untuk mengunci aplikasi kapan saja.
- Lupa kata sandi? Demi kerahasiaan penuh, satu-satunya jalan adalah menghapus
  seluruh data di perangkat dan memulai lagi — jadi simpan kata sandimu baik-baik.

## 👑 Fitur Lengkap

| Halaman | Isi |
|---|---|
| **Beranda** | Kartu total kekayaan bergaya kartu hitam premium, pemasukan & pengeluaran bulan ini, rasio menabung, grafik arus kas 6 bulan, diagram pengeluaran per kategori, transaksi terakhir, ringkasan anggaran & tujuan, serta **wawasan cerdas otomatis** |
| **Transaksi** | Tambah / ubah / hapus pemasukan, pengeluaran, dan pindah dana antar dompet; pencarian kata kunci; saringan jenis, kategori, dompet, dan bulan; unduh tabel |
| **Dompet Saya** | Banyak dompet & rekening (tunai, bank, dompet digital, kartu kredit, investasi) dengan saldo awal, warna & lambang khas, saldo terhitung otomatis |
| **Anggaran** | Batas pengeluaran per kategori setiap bulan, batang kemajuan, status Aman / Hampir Habis / Melewati Batas, lihat bulan mana pun |
| **Tujuan Tabungan** | Impian dengan target dana & tanggal, perkiraan setoran per bulan, tambah dana langsung dari dompet (otomatis tercatat sebagai transaksi) |
| **Utang & Piutang** | Catatan utang saya & piutang saya, cicilan / pembayaran sebagian, sisa, peringatan jatuh tempo, status lunas |
| **Kalender** | Kalender keuangan sebulan penuh dengan penanda pemasukan & pengeluaran per hari, klik tanggal untuk melihat rinciannya |
| **Laporan** | Grafik arus kas 12 bulan, rincian pengeluaran per kategori, rata-rata harian, rasio menabung, tabel ringkasan setahun, wawasan otomatis, cetak laporan, unduh tabel & cadangan |
| **Pengaturan** | Nama pemilik, ubah kata sandi, kategori buatan sendiri, unduh & pulihkan cadangan data, muat data contoh, hapus data / atur ulang total |

## 🏷️ Kategori Lengkap (47 Kategori Bawaan)

**Pemasukan (15):** Gaji Utama · Bonus & Tunjangan · Bisnis & Usaha · Pekerjaan Lepas ·
Keuntungan Investasi · Dividen & Bagi Hasil · Bunga Simpanan · Hadiah Diterima ·
Penjualan Barang · Pengembalian Dana · Sewa & Properti · Royalti & Karya Kreator ·
Kiriman Keluarga · Penerimaan Piutang · Pemasukan Lainnya

**Pengeluaran (32):** Makanan & Minuman · Bahan Makanan & Dapur · Kopi & Jajan ·
Belanja & Gaya Hidup · Kecantikan & Perawatan · Pakaian & Mode · Transportasi ·
Bahan Bakar & Parkir · Perawatan Kendaraan · Rumah & Tempat Tinggal ·
Tagihan Rumah & Air Listrik · Internet & Pulsa · Langganan & Aplikasi ·
Kesehatan & Obat · Olahraga & Kebugaran · Pendidikan & Kursus · Hiburan & Rekreasi ·
Perjalanan & Liburan · Teknologi & Gawai · Keluarga & Buah Hati · Hadiah untuk Orang Lain ·
Sedekah & Amal · Perayaan & Acara · Buku & Hobi · Hewan Peliharaan · Asuransi ·
Pajak & Biaya Resmi · Biaya Administrasi Bank · Investasi · Tabungan & Tujuan ·
Pembayaran Utang · Pengeluaran Lainnya

Kamu juga bisa **menambah kategori buatanmu sendiri** di halaman Pengaturan.

## ✨ Data Contoh

Saat pertama kali membuat ruang pribadi, kamu bisa memilih mulai dengan
**data contoh mewah** (transaksi 6 bulan terakhir, 5 dompet, anggaran, tujuan,
dan catatan utang piutang) untuk melihat semua fitur bekerja — atau mulai dari
nol. Data contoh bisa diganti / dihapus kapan saja dari Pengaturan.

## ▶️ Cara Menjalankan

Cukup sajikan berkas statisnya, misalnya:

```bash
python3 -m http.server 5173 --bind 0.0.0.0
```

lalu buka `http://localhost:5173` di peramban. Tidak perlu memasang apa pun.

## 📁 Susunan Berkas

```
index.html          → kerangka halaman (Bahasa Indonesia)
aset/gaya.css       → gaya mewah hitam & emas
aset/aplikasi.js    → seluruh logika aplikasi (tanpa pustaka luar)
```

---

*Shakira 🖤 — dibuat dengan sepenuh hati, hanya untuk satu orang istimewa.*
