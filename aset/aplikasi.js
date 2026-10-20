/* ==========================================================
   Shakira 🖤 — Catatan Keuangan Pribadi
   Seluruh data hanya tersimpan di peramban perangkat ini.
   Tidak ada peladen, tidak ada akun orang lain. Hanya kamu.
   ========================================================== */

/* ---------------- Kategori bawaan (lengkap) ---------------- */
const KATEGORI_BAWAAN = [
  /* Pemasukan */
  {id:'gaji',        nama:'Gaji Utama',                 ikon:'💼', warna:'#3ecf8e', jenis:'pemasukan'},
  {id:'bonus',       nama:'Bonus & Tunjangan',          ikon:'🎁', warna:'#7ee2b0', jenis:'pemasukan'},
  {id:'usaha',       nama:'Bisnis & Usaha',             ikon:'🏪', warna:'#2fb574', jenis:'pemasukan'},
  {id:'lepas',       nama:'Pekerjaan Lepas',            ikon:'💻', warna:'#5ad19b', jenis:'pemasukan'},
  {id:'investasi-masuk', nama:'Keuntungan Investasi',   ikon:'📈', warna:'#34c759', jenis:'pemasukan'},
  {id:'dividen',     nama:'Dividen & Bagi Hasil',       ikon:'🏦', warna:'#66d9a5', jenis:'pemasukan'},
  {id:'bunga',       nama:'Bunga Simpanan',             ikon:'🌸', warna:'#8fe3bb', jenis:'pemasukan'},
  {id:'hadiah-masuk',nama:'Hadiah Diterima',            ikon:'🎀', warna:'#ffb3c8', jenis:'pemasukan'},
  {id:'jual-barang', nama:'Penjualan Barang',           ikon:'🏷️', warna:'#a8d97c', jenis:'pemasukan'},
  {id:'kembali-dana',nama:'Pengembalian Dana',          ikon:'↩️', warna:'#9ad1ff', jenis:'pemasukan'},
  {id:'sewa',        nama:'Sewa & Properti',            ikon:'🏠', warna:'#4fc08d', jenis:'pemasukan'},
  {id:'royalti',     nama:'Royalti & Karya Kreator',    ikon:'🎨', warna:'#c9a8ff', jenis:'pemasukan'},
  {id:'keluarga-masuk', nama:'Kiriman Keluarga',        ikon:'💌', warna:'#ffd166', jenis:'pemasukan'},
  {id:'piutang-masuk', nama:'Penerimaan Piutang',       ikon:'🤝', warna:'#6bb8ff', jenis:'pemasukan'},
  {id:'lain-masuk',  nama:'Pemasukan Lainnya',          ikon:'✨', warna:'#d4af37', jenis:'pemasukan'},
  /* Pengeluaran */
  {id:'makanan',     nama:'Makanan & Minuman',          ikon:'🍽️', warna:'#ffb35c', jenis:'pengeluaran'},
  {id:'bahan-makanan', nama:'Bahan Makanan & Dapur',    ikon:'🛒', warna:'#ffcf7d', jenis:'pengeluaran'},
  {id:'kopi',        nama:'Kopi & Jajan',               ikon:'☕', warna:'#c98f5f', jenis:'pengeluaran'},
  {id:'belanja',     nama:'Belanja & Gaya Hidup',       ikon:'🛍️', warna:'#ff8fab', jenis:'pengeluaran'},
  {id:'kecantikan',  nama:'Kecantikan & Perawatan',     ikon:'💄', warna:'#ff6b9d', jenis:'pengeluaran'},
  {id:'pakaian',     nama:'Pakaian & Mode',             ikon:'👗', warna:'#e599f7', jenis:'pengeluaran'},
  {id:'transportasi',nama:'Transportasi',               ikon:'🚗', warna:'#6bb8ff', jenis:'pengeluaran'},
  {id:'bensin',      nama:'Bahan Bakar & Parkir',       ikon:'⛽', warna:'#4dabf7', jenis:'pengeluaran'},
  {id:'kendaraan',   nama:'Perawatan Kendaraan',        ikon:'🔧', warna:'#74c0fc', jenis:'pengeluaran'},
  {id:'rumah',       nama:'Rumah & Tempat Tinggal',     ikon:'🏠', warna:'#ffa94d', jenis:'pengeluaran'},
  {id:'tagihan',     nama:'Tagihan Rumah & Air Listrik',ikon:'💡', warna:'#ffd43b', jenis:'pengeluaran'},
  {id:'internet',    nama:'Internet & Pulsa',           ikon:'📶', warna:'#63e6be', jenis:'pengeluaran'},
  {id:'langganan',   nama:'Langganan & Aplikasi',       ikon:'🎵', warna:'#b197fc', jenis:'pengeluaran'},
  {id:'kesehatan',   nama:'Kesehatan & Obat',           ikon:'🏥', warna:'#ff8787', jenis:'pengeluaran'},
  {id:'olahraga',    nama:'Olahraga & Kebugaran',       ikon:'🏋️', warna:'#69db7c', jenis:'pengeluaran'},
  {id:'pendidikan',  nama:'Pendidikan & Kursus',        ikon:'🎓', warna:'#748ffc', jenis:'pengeluaran'},
  {id:'hiburan',     nama:'Hiburan & Rekreasi',         ikon:'🎬', warna:'#f783ac', jenis:'pengeluaran'},
  {id:'perjalanan',  nama:'Perjalanan & Liburan',       ikon:'✈️', warna:'#4dd0e1', jenis:'pengeluaran'},
  {id:'teknologi',   nama:'Teknologi & Gawai',          ikon:'📱', warna:'#90a4ae', jenis:'pengeluaran'},
  {id:'keluarga',    nama:'Keluarga & Buah Hati',       ikon:'💞', warna:'#ffa8a8', jenis:'pengeluaran'},
  {id:'hadiah-keluar', nama:'Hadiah untuk Orang Lain',  ikon:'🎁', warna:'#f8bbd0', jenis:'pengeluaran'},
  {id:'sedekah',     nama:'Sedekah & Amal',             ikon:'🤲', warna:'#a9e34b', jenis:'pengeluaran'},
  {id:'perayaan',    nama:'Perayaan & Acara',           ikon:'🎉', warna:'#fcc419', jenis:'pengeluaran'},
  {id:'hobi',        nama:'Buku & Hobi',                ikon:'📚', warna:'#a1887f', jenis:'pengeluaran'},
  {id:'hewan',       nama:'Hewan Peliharaan',           ikon:'🐾', warna:'#d7ccc8', jenis:'pengeluaran'},
  {id:'asuransi',    nama:'Asuransi',                   ikon:'🛡️', warna:'#82b1ff', jenis:'pengeluaran'},
  {id:'pajak',       nama:'Pajak & Biaya Resmi',        ikon:'🏛️', warna:'#b0bec5', jenis:'pengeluaran'},
  {id:'admin-bank',  nama:'Biaya Administrasi Bank',    ikon:'🧾', warna:'#90caf9', jenis:'pengeluaran'},
  {id:'investasi-keluar', nama:'Investasi',             ikon:'📊', warna:'#66bb6a', jenis:'pengeluaran'},
  {id:'tabungan-tujuan', nama:'Tabungan & Tujuan',      ikon:'🐷', warna:'#f48fb1', jenis:'pengeluaran'},
  {id:'bayar-utang', nama:'Pembayaran Utang',           ikon:'💳', warna:'#ef9a9a', jenis:'pengeluaran'},
  {id:'lain-keluar', nama:'Pengeluaran Lainnya',        ikon:'🖤', warna:'#9e9e9e', jenis:'pengeluaran'},
];
const WARNA_PILIHAN = ['#d4af37','#ff6b9d','#3ecf8e','#6bb8ff','#b197fc','#ffb35c','#ff6b81','#4dd0e1','#a9e34b','#f783ac'];
const IKON_DOMPE = ['👛','🏦','📱','💳','📈','🐷','👜','💎','🏠','✨'];
const JENIS_DOMPE = ['Tunai','Bank','Dompet Digital','Kartu Kredit','Investasi','Tabungan','Lainnya'];

/* ---------------- Alat bantu ---------------- */
const $ = s => document.querySelector(s);
const idBaru = () => 'id' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const aman = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const angkaSaja = t => Number(String(t||'').replace(/[^\d]/g,'')) || 0;
function formatRupiah(n){
  const negatif = n < 0;
  const teks = 'Rp ' + Math.abs(Math.round(n)).toLocaleString('id-ID');
  return negatif ? '−' + teks : teks;
}
function formatRingkas(n){
  const a = Math.abs(n);
  if(a >= 1e9) return (n/1e9).toLocaleString('id-ID',{maximumFractionDigits:1}) + ' M';
  if(a >= 1e6) return (n/1e6).toLocaleString('id-ID',{maximumFractionDigits:1}) + ' jt';
  if(a >= 1e3) return Math.round(n/1e3) + ' rb';
  return String(Math.round(n));
}
const dua = n => String(n).padStart(2,'0');
function keISO(d){ return d.getFullYear()+'-'+dua(d.getMonth()+1)+'-'+dua(d.getDate()); }
function hariIniISO(){ return keISO(new Date()); }
function kunciBulanDariISO(iso){ return (iso||'').slice(0,7); }
function kunciBulanIni(){ return hariIniISO().slice(0,7); }
function labelBulan(kunci){
  if(!kunci) return '—';
  const [th,bl] = kunci.split('-').map(Number);
  return new Date(th, bl-1, 1).toLocaleDateString('id-ID',{month:'long', year:'numeric'});
}
function labelBulanSingkat(kunci){
  const [th,bl] = kunci.split('-').map(Number);
  return new Date(th, bl-1, 1).toLocaleDateString('id-ID',{month:'short'});
}
function geserKunciBulan(kunci, geser){
  const [th,bl] = kunci.split('-').map(Number);
  const d = new Date(th, bl-1+geser, 1);
  return d.getFullYear()+'-'+dua(d.getMonth()+1);
}
function daftarBulanTerakhir(jumlah){
  const hasil = []; let k = kunciBulanIni();
  for(let i=0;i<jumlah;i++){ hasil.unshift(k); k = geserKunciBulan(k,-1); }
  return hasil;
}
function formatTanggal(iso){
  if(!iso) return '—';
  const [th,bl,tg] = iso.split('-').map(Number);
  return new Date(th, bl-1, tg).toLocaleDateString('id-ID',{weekday:'long', day:'numeric', month:'long', year:'numeric'});
}
function formatTanggalSingkat(iso){
  if(!iso) return '—';
  const [th,bl,tg] = iso.split('-').map(Number);
  return new Date(th, bl-1, tg).toLocaleDateString('id-ID',{day:'numeric', month:'short', year:'numeric'});
}
function selisihHari(iso){
  const [th,bl,tg] = (iso||hariIniISO()).split('-').map(Number);
  const target = new Date(th,bl-1,tg); const kini = new Date(); kini.setHours(0,0,0,0);
  return Math.round((target-kini)/86400000);
}
function persen(bagian, total){ if(!total) return 0; return Math.min(100, Math.round(bagian/total*100)); }
function beriTitikRibuan(input){
  input.addEventListener('input', () => {
    const n = angkaSaja(input.value);
    input.value = n ? n.toLocaleString('id-ID') : '';
  });
}

/* ---------------- Penyimpanan data ---------------- */
const KUNCI_DATA = 'shakira_data_v1';
const KUNCI_SANDI = 'shakira_sandi_v1';
let data = null;

function dataKosong(namaPemilik){
  return {
    pengaturan:{ namaPemilik: namaPemilik || 'Shakira' },
    kategoriKustom:[],
    dompet:[
      {id:idBaru(), nama:'Uang Tunai di Tas', jenis:'Tunai', ikon:'👜', warna:'#d4af37', saldoAwal:0},
      {id:idBaru(), nama:'Rekening Bank Utama', jenis:'Bank', ikon:'🏦', warna:'#6bb8ff', saldoAwal:0},
      {id:idBaru(), nama:'Dompet Digital', jenis:'Dompet Digital', ikon:'📱', warna:'#b197fc', saldoAwal:0},
    ],
    transaksi:[], anggaran:[], tujuan:[], utang:[],
  };
}
function tanggalBulanLalu(kurangBulan, hari){
  const kini = new Date();
  const d = new Date(kini.getFullYear(), kini.getMonth()-kurangBulan, 1);
  const hariTerakhir = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
  let tg = Math.min(hari, hariTerakhir);
  if(kurangBulan === 0) tg = Math.min(tg, kini.getDate());
  return keISO(new Date(d.getFullYear(), d.getMonth(), tg));
}
function dataContoh(namaPemilik){
  const d = dataKosong(namaPemilik);
  d.dompet = [
    {id:'dmp-tunai', nama:'Uang Tunai di Tas', jenis:'Tunai', ikon:'👜', warna:'#d4af37', saldoAwal:1500000},
    {id:'dmp-bank', nama:'Rekening Bank Utama', jenis:'Bank', ikon:'🏦', warna:'#6bb8ff', saldoAwal:38000000},
    {id:'dmp-ewallet', nama:'Dompet Digital', jenis:'Dompet Digital', ikon:'📱', warna:'#b197fc', saldoAwal:2750000},
    {id:'dmp-investasi', nama:'Rekening Investasi', jenis:'Investasi', ikon:'📈', warna:'#3ecf8e', saldoAwal:21500000},
    {id:'dmp-kredit', nama:'Kartu Kredit Emas', jenis:'Kartu Kredit', ikon:'💳', warna:'#ff8fab', saldoAwal:0},
  ];
  const T = (kb,hari,jenis,kategoriId,dompetId,jumlah,catatan) => ({
    id:idBaru()+Math.random().toString(36).slice(2,5), jenis, kategoriId, dompetId, dompetTujuanId:'', jumlah, catatan, tanggal:tanggalBulanLalu(kb,hari)
  });
  const polaKeluar = [
    [2,'kopi','dmp-ewallet',68000,'Kopi susu & roti panggang bersama sahabat'],
    [3,'bahan-makanan','dmp-bank',845000,'Belanja bahan makanan mingguan'],
    [4,'transportasi','dmp-ewallet',124000,'Taksi daring ke kantor & pulang'],
    [5,'tagihan','dmp-bank',612000,'Listrik, air, & iuran lingkungan'],
    [6,'kecantikan','dmp-kredit',785000,'Perawatan wajah & serum kesayangan'],
    [7,'makanan','dmp-ewallet',215000,'Makan siang cantik di kafe favorit'],
    [8,'internet','dmp-ewallet',189000,'Paket internet & pulsa sebulan'],
    [9,'belanja','dmp-kredit',1299000,'Gaun hitam elegan untuk acara istimewa'],
    [11,'olahraga','dmp-bank',450000,'Keanggotaan pusat kebugaran'],
    [12,'makanan','dmp-tunai',156000,'Makan malam bersama keluarga'],
    [13,'bensin','dmp-bank',400000,'Bahan bakar & parkir'],
    [14,'sedekah','dmp-ewallet',250000,'Sedekah Jumat berkah'],
    [15,'langganan','dmp-ewallet',149000,'Langganan musik & film'],
    [16,'hiburan','dmp-ewallet',320000,'Nonton bioskop & camilan'],
    [18,'kesehatan','dmp-bank',385000,'Vitamin & pemeriksaan kesehatan'],
    [20,'tabungan-tujuan','dmp-bank',2000000,'Menabung untuk liburan impian'],
    [22,'pakaian','dmp-kredit',659000,'Sepatu hak & aksesori emas'],
    [24,'hadiah-keluar','dmp-bank',500000,'Hadiah ulang tahun untuk Ibu tercinta'],
    [26,'investasi-keluar','dmp-bank',1500000,'Pembelian reksa dana bulanan'],
    [27,'kopi','dmp-tunai',85000,'Jajan sore & kue keju'],
  ];
  for(let kb=5; kb>=0; kb--){
    const pengali = 0.88 + (5-kb)*0.07;
    d.transaksi.push(T(kb,1,'pemasukan','gaji','dmp-bank',18500000,'Gaji bulanan tercinta'));
    d.transaksi.push(T(kb,10,'pemasukan','usaha','dmp-bank',Math.round(3200000*pengali),'Hasil penjualan toko daring'));
    if(kb%2===0) d.transaksi.push(T(kb,17,'pemasukan','lepas','dmp-bank',1750000,'Proyek pekerjaan lepas selesai'));
    if(kb===2) d.transaksi.push(T(kb,15,'pemasukan','bonus','dmp-bank',5000000,'Bonus kinerja istimewa'));
    if(kb===1) d.transaksi.push(T(kb,19,'pemasukan','investasi-masuk','dmp-investasi',940000,'Keuntungan investasi bulan ini'));
    if(kb===0) d.transaksi.push(T(kb,8,'pemasukan','hadiah-masuk','dmp-ewallet',500000,'Hadiah kejutan dari sahabat tersayang'));
    polaKeluar.forEach(([hari,kat,dmp,jml,cat]) => {
      if(kb===0 && hari > new Date().getDate()) return;
      d.transaksi.push(T(kb,hari,'pengeluaran',kat,dmp,Math.round(jml*pengali/1000)*1000,cat));
    });
    if(kb===3) d.transaksi.push(T(kb,21,'pengeluaran','perjalanan','dmp-bank',4850000,'Liburan singkat yang menyegarkan ke Bali'));
  }
  d.transaksi.sort((a,b)=> b.tanggal.localeCompare(a.tanggal));
  d.anggaran = [
    {id:idBaru(), kategoriId:'makanan', batas:3000000},
    {id:idBaru(), kategoriId:'belanja', batas:2500000},
    {id:idBaru(), kategoriId:'kecantikan', batas:1500000},
    {id:idBaru(), kategoriId:'kopi', batas:600000},
    {id:idBaru(), kategoriId:'transportasi', batas:1200000},
    {id:idBaru(), kategoriId:'hiburan', batas:1000000},
    {id:idBaru(), kategoriId:'bahan-makanan', batas:2000000},
  ];
  const th = new Date().getFullYear();
  d.tujuan = [
    {id:idBaru(), nama:'Liburan Mewah ke Paris', ikon:'✈️', warna:'#4dd0e1', target:75000000, terkumpul:42300000, batasTanggal:(th+1)+'-04-18', catatan:'Musim semi di Paris, impian sejak lama.'},
    {id:idBaru(), nama:'Tas Impian Edisi Terbatas', ikon:'👜', warna:'#ff6b9d', target:35000000, terkumpul:18750000, batasTanggal:th+'-12-25', catatan:'Hadiah akhir tahun untuk diri sendiri.'},
    {id:idBaru(), nama:'Dana Darurat Ratu', ikon:'👑', warna:'#d4af37', target:100000000, terkumpul:68400000, batasTanggal:(th+1)+'-06-30', catatan:'Tenang & aman untuk 12 bulan ke depan.'},
    {id:idBaru(), nama:'Mobil Impian', ikon:'🚗', warna:'#b197fc', target:350000000, terkumpul:92500000, batasTanggal:(th+2)+'-01-15', catatan:'Sedikit demi sedikit, pasti terwujud.'},
  ];
  d.utang = [
    {id:idBaru(), jenis:'piutang', nama:'Sinta Anggraini', jumlah:2000000, terbayar:750000, tanggal:tanggalBulanLalu(1,6), jatuhTempo:tanggalBulanLalu(0,28), catatan:'Pinjaman untuk keperluan mendesak sahabat.'},
    {id:idBaru(), jenis:'utang', nama:'Cicilan Telepon Genggam Baru', jumlah:14999000, terbayar:9999000, tanggal:tanggalBulanLalu(4,12), jatuhTempo:tanggalBulanLalu(0,25), catatan:'Sisa beberapa kali cicilan lagi, semangat!'},
    {id:idBaru(), jenis:'piutang', nama:'Rekan Usaha — Toko Daring', jumlah:5000000, terbayar:5000000, tanggal:tanggalBulanLalu(3,3), jatuhTempo:tanggalBulanLalu(2,20), catatan:'Sudah lunas, terima kasih banyak.'},
  ];
  return d;
}
function muatData(){
  try{
    const mentah = localStorage.getItem(KUNCI_DATA);
    if(mentah){ data = JSON.parse(mentah); return; }
  }catch(e){ /* abaikan, mulai lagi */ }
  data = null;
}
function simpanData(){ localStorage.setItem(KUNCI_DATA, JSON.stringify(data)); }

/* ---------------- Perhitungan ---------------- */
function semuaKategori(){ return [...KATEGORI_BAWAAN, ...(data?.kategoriKustom||[])]; }
function cariKategori(id){ return semuaKategori().find(k=>k.id===id) || {nama:'Tanpa Kategori', ikon:'✨', warna:'#9e9e9e'}; }
function cariDompet(id){ return (data?.dompet||[]).find(d=>d.id===id) || {nama:'Dompet Terhapus', ikon:'👛', warna:'#555'}; }
function saldoDompet(idDompet){
  const dmp = (data.dompet||[]).find(d=>d.id===idDompet);
  let saldo = dmp ? (dmp.saldoAwal||0) : 0;
  (data.transaksi||[]).forEach(t=>{
    if(t.jenis==='pemasukan' && t.dompetId===idDompet) saldo += t.jumlah;
    if(t.jenis==='pengeluaran' && t.dompetId===idDompet) saldo -= t.jumlah;
    if(t.jenis==='pemindahan'){
      if(t.dompetId===idDompet) saldo -= t.jumlah;
      if(t.dompetTujuanId===idDompet) saldo += t.jumlah;
    }
  });
  return saldo;
}
function totalKekayaan(){ return (data.dompet||[]).reduce((s,d)=>s+saldoDompet(d.id),0); }
function ringkasanBulan(kunci){
  let masuk=0, keluar=0;
  (data.transaksi||[]).forEach(t=>{
    if(kunciBulanDariISO(t.tanggal)!==kunci) return;
    if(t.jenis==='pemasukan') masuk+=t.jumlah;
    if(t.jenis==='pengeluaran') keluar+=t.jumlah;
  });
  return {masuk, keluar, selisih: masuk-keluar};
}
function pengeluaranPerKategori(kunci){
  const peta = {};
  (data.transaksi||[]).forEach(t=>{
    if(t.jenis==='pengeluaran' && kunciBulanDariISO(t.tanggal)===kunci) peta[t.kategoriId]=(peta[t.kategoriId]||0)+t.jumlah;
  });
  return Object.entries(peta).map(([id,nilai])=>({...cariKategori(id), idKategori:id, nilai})).sort((a,b)=>b.nilai-a.nilai);
}
function terpakaiAnggaran(kategoriId, kunci){
  return (data.transaksi||[]).filter(t=>t.jenis==='pengeluaran' && t.kategoriId===kategoriId && kunciBulanDariISO(t.tanggal)===kunci).reduce((s,t)=>s+t.jumlah,0);
}

/* ---------------- Kata sandi & layar kunci ---------------- */
async function acakSandi(teks){
  try{
    const penyangga = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('shakira-mewah:'+teks));
    return [...new Uint8Array(penyangga)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }catch(e){
    let h=0; const s='shakira-mewah:'+teks;
    for(let i=0;i<s.length;i++) h=((h<<5)-h+s.charCodeAt(i))|0;
    return 'cadangan'+h;
  }
}
function sesiTerbuka(){ return sessionStorage.getItem('shakira_terbuka')==='ya'; }
function bukaSesi(){ sessionStorage.setItem('shakira_terbuka','ya'); }
function kunciAplikasi(){
  sessionStorage.removeItem('shakira_terbuka');
  $('#aplikasi').classList.add('tersembunyi');
  $('#layarKunci').classList.remove('tersembunyi');
  tampilLayarKunci();
}
function tampilLayarKunci(){
  const adaSandi = !!localStorage.getItem(KUNCI_SANDI);
  if(!adaSandi) tampilPembuatanSandi(); else tampilMasukanSandi();
}
function tampilPembuatanSandi(){
  $('#isiKunci').innerHTML = `
    <p class="keterangan-kartu" style="margin-bottom:18px">Selamat datang di ruang keuangan pribadimu.<br>Buat kata sandi 6 angka — hanya kamu yang tahu. 🖤</p>
    <form id="formBuatSandi" style="text-align:left">
      <div class="isian"><label>Nama Pemilik</label>
        <input type="text" id="namaPemilikBaru" value="Shakira" maxlength="30" required placeholder="Namamu yang cantik"></div>
      <div class="duo">
        <div class="isian"><label>Kata Sandi 6 Angka</label>
          <input type="password" id="sandiBaru" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required placeholder="••••••" autocomplete="new-password">
          <div class="petunjuk">Contoh: tanggal istimewa yang mudah kamu ingat.</div></div>
        <div class="isian"><label>Ulangi Kata Sandi</label>
          <input type="password" id="sandiUlang" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required placeholder="••••••" autocomplete="new-password"></div>
      </div>
      <div class="isian"><label>Mulai Dengan</label>
        <select id="pilihanAwal">
          <option value="contoh">✨ Data contoh mewah (bisa dihapus kapan saja)</option>
          <option value="kosong">🌱 Mulai dari nol, bersih &amp; segar</option>
        </select></div>
      <div class="pesan-salah" id="pesanBuatSandi"></div>
      <button type="submit" class="tombol tombol-emas tombol-penuh">👑 Buat Ruang Pribadi Saya</button>
    </form>`;
  $('#formBuatSandi').addEventListener('submit', async e=>{
    e.preventDefault();
    const nama = $('#namaPemilikBaru').value.trim() || 'Shakira';
    const s1 = $('#sandiBaru').value, s2 = $('#sandiUlang').value;
    if(!/^\d{6}$/.test(s1)){ $('#pesanBuatSandi').textContent = 'Kata sandi wajib tepat 6 angka ya.'; return; }
    if(s1!==s2){ $('#pesanBuatSandi').textContent = 'Kedua kata sandi belum sama, coba periksa lagi.'; return; }
    localStorage.setItem(KUNCI_SANDI, await acakSandi(s1));
    if(!data){ data = $('#pilihanAwal').value==='contoh' ? dataContoh(nama) : dataKosong(nama); simpanData(); }
    else { data.pengaturan.namaPemilik = nama; simpanData(); }
    bukaSesi(); masukAplikasi();
    beriTahu('Selamat datang di Shakira 🖤 Ruang pribadimu sudah siap!');
  });
}
let sandiDiketik = '';
function tampilMasukanSandi(){
  sandiDiketik = '';
  $('#isiKunci').innerHTML = `
    <p class="keterangan-kartu">Ruang ini terkunci rapat.<br>Masukkan kata sandi 6 angkamu untuk masuk.</p>
    <div class="titik-sandi" id="titikSandi">${'<span></span>'.repeat(6)}</div>
    <div class="papan-angka" id="papanAngka">
      ${[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-angka="${n}">${n}</button>`).join('')}
      <button type="button" data-aksi="bersihkan" style="font-size:13px">Ulang</button>
      <button type="button" data-angka="0">0</button>
      <button type="button" data-aksi="hapus" style="font-size:16px">⌫</button>
    </div>
    <div class="pesan-salah" id="pesanSandi"></div>
    <button class="tautan-halus" id="tombolLupaSandi">Lupa kata sandi?</button>`;
  const segarkanTitik = () => {
    [...document.querySelectorAll('#titikSandi span')].forEach((el,i)=> el.classList.toggle('terisi', i < sandiDiketik.length));
  };
  $('#papanAngka').addEventListener('click', async e=>{
    const btn = e.target.closest('button'); if(!btn) return;
    if(btn.dataset.aksi==='hapus') sandiDiketik = sandiDiketik.slice(0,-1);
    else if(btn.dataset.aksi==='bersihkan') sandiDiketik = '';
    else if(sandiDiketik.length < 6) sandiDiketik += btn.dataset.angka;
    segarkanTitik();
    if(sandiDiketik.length === 6){
      const cocok = (await acakSandi(sandiDiketik)) === localStorage.getItem(KUNCI_SANDI);
      if(cocok){ bukaSesi(); masukAplikasi(); beriTahu('Selamat datang kembali, Ratu 👑'); }
      else{
        const kartu = document.querySelector('.kartu-kunci');
        kartu.classList.remove('goyang'); void kartu.offsetWidth; kartu.classList.add('goyang');
        $('#pesanSandi').textContent = 'Kata sandi salah. Ruang ini hanya untuk pemiliknya.';
        sandiDiketik=''; setTimeout(segarkanTitik, 250);
      }
    }
  });
  $('#tombolLupaSandi').addEventListener('click', ()=>{
    $('#isiKunci').innerHTML = `
      <p class="keterangan-kartu" style="line-height:1.8">Demi kerahasiaan penuh, kata sandi tidak disimpan di mana pun dan tidak bisa dipulihkan.<br><br>
      Satu-satunya jalan adalah <b class="teks-merah">menghapus seluruh data</b> di perangkat ini lalu memulai lagi dari awal.</p>
      <div class="baris" style="justify-content:center;margin-top:20px">
        <button class="tombol tombol-garis" onclick="tampilMasukanSandi()">← Kembali</button>
        <button class="tombol tombol-bahaya" id="tombolAturUlangTotal">Hapus Semua &amp; Mulai Lagi</button>
      </div>`;
    $('#tombolAturUlangTotal').addEventListener('click', ()=>{
      localStorage.removeItem(KUNCI_DATA); localStorage.removeItem(KUNCI_SANDI);
      sessionStorage.removeItem('shakira_terbuka'); data=null; tampilPembuatanSandi();
    });
  });
}
function masukAplikasi(){
  if(!data){ muatData(); }
  if(!data){ data = dataKosong('Shakira'); simpanData(); }
  $('#layarKunci').classList.add('tersembunyi');
  $('#aplikasi').classList.remove('tersembunyi');
  segarkanProfil(); pindahHalaman('beranda');
}
function segarkanProfil(){
  const nama = data?.pengaturan?.namaPemilik || 'Shakira';
  $('#namaProfilSamping').textContent = nama;
  const jam = new Date().getHours();
  const salam = jam<11 ? 'Selamat pagi' : jam<15 ? 'Selamat siang' : jam<19 ? 'Selamat sore' : 'Selamat malam';
  $('#sapaanKecil').textContent = `${salam}, ${nama} 👑`;
}

/* ---------------- Navigasi ---------------- */
let halamanAktif = 'beranda';
const Judul_HALAMAN = {beranda:'Beranda', transaksi:'Transaksi', dompet:'Dompet Saya', anggaran:'Anggaran Bulanan',
  tujuan:'Tujuan Tabungan', utang:'Utang & Piutang', kalender:'Kalender Keuangan', laporan:'Laporan Keuangan', pengaturan:'Pengaturan'};
function pindahHalaman(halaman){
  halamanAktif = halaman;
  $('#judulHalaman').textContent = Judul_HALAMAN[halaman] || 'Beranda';
  document.querySelectorAll('[data-halaman]').forEach(el=> el.classList.toggle('aktif', el.dataset.halaman===halaman));
  const konten = $('#konten'); konten.style.animation='none'; void konten.offsetWidth; konten.style.animation='';
  ({beranda:tampilBeranda, transaksi:tampilTransaksi, dompet:tampilDompet, anggaran:tampilAnggaran,
    tujuan:tampilTujuan, utang:tampilUtang, kalender:tampilKalender, laporan:tampilLaporan, pengaturan:tampilPengaturan}[halaman] || tampilBeranda)();
  window.scrollTo({top:0, behavior:'smooth'});
}
function tampilUlang(){ pindahHalaman(halamanAktif); }

/* ---------------- Pemberitahuan & jendela timbul ---------------- */
let pewaktuTahu = null;
function beriTahu(pesan){
  const el = $('#pemberitahuan'); el.textContent = pesan; el.classList.remove('tersembunyi');
  clearTimeout(pewaktuTahu); pewaktuTahu = setTimeout(()=> el.classList.add('tersembunyi'), 3200);
}
function bukaModal(Judul, isiHTML){
  $('#judulModal').textContent = Judul; $('#isiModal').innerHTML = isiHTML;
  $('#lapisanModal').classList.remove('tersembunyi');
}
function tutupModal(){ $('#lapisanModal').classList.add('tersembunyi'); $('#isiModal').innerHTML=''; }
function konfirmasiHapus(judulKonfirmasi, pesan, aksi){
  bukaModal(judulKonfirmasi, `
    <div style="text-align:center;padding:6px 0 4px">
      <div style="font-size:42px">🗑️</div>
      <p class="keterangan-kartu" style="margin:12px 0 20px">${pesan}</p>
      <div class="baris" style="justify-content:center">
        <button class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
        <button class="tombol tombol-bahaya" id="tombolYaHapus">Ya, Hapus</button>
      </div>
    </div>`);
  $('#tombolYaHapus').addEventListener('click', ()=>{ tutupModal(); aksi(); });
}

/* ---------------- Potongan tampilan bersama ---------------- */
function barisTransaksi(t, denganAksi=true){
  const kat = cariKategori(t.kategoriId); const dmp = cariDompet(t.dompetId);
  let nama, ikon, warna, jumlahHTML, rinci;
  if(t.jenis==='pemindahan'){
    const tujuan = cariDompet(t.dompetTujuanId);
    nama = t.catatan || 'Pindah dana antar dompet';
    ikon = '🔄'; warna = '#6bb8ff';
    jumlahHTML = `<div class="jumlah" style="color:var(--biru)">${formatRupiah(t.jumlah)}</div>`;
    rinci = `${dmp.ikon} ${aman(dmp.nama)} → ${tujuan.ikon} ${aman(tujuan.nama)} · ${formatTanggalSingkat(t.tanggal)}`;
  }else{
    nama = t.catatan || kat.nama; ikon = kat.ikon; warna = kat.warna;
    const masuk = t.jenis==='pemasukan';
    jumlahHTML = `<div class="jumlah ${masuk?'teks-hijau':'teks-merah'}">${masuk?'+':'−'} ${formatRupiah(t.jumlah)}</div>`;
    rinci = `${aman(kat.nama)} · ${dmp.ikon} ${aman(dmp.nama)} · ${formatTanggalSingkat(t.tanggal)}`;
  }
  return `<div class="item-transaksi">
    <div class="ikon-kategori" style="background:${warna}22">${ikon}</div>
    <div class="tengah"><div class="nama">${aman(nama)}</div><div class="rinci">${rinci}</div></div>
    <div>${jumlahHTML}
      ${denganAksi?`<div class="baris" style="gap:6px;margin-top:5px;justify-content:flex-end">
        <button class="tombol-ikon" onclick="bukaFormTransaksi('${t.id}')" title="Ubah">✏️ Ubah</button>
        <button class="tombol-ikon" onclick="hapusTransaksi('${t.id}')" title="Hapus">🗑️</button></div>`:''}
    </div></div>`;
}
function kotakKosong(ikon,judul,teks,tombolHTML=''){
  return `<div class="kosong"><div class="ikon-besar">${ikon}</div><h3>${judul}</h3><p class="keterangan-kartu">${teks}</p>${tombolHTML?`<div style="margin-top:16px">${tombolHTML}</div>`:''}</div>`;
}
function wawasanBulanIni(){
  const kini = kunciBulanIni(), lalu = geserKunciBulan(kini,-1);
  const r = ringkasanBulan(kini), rl = ringkasanBulan(lalu);
  const daftar = [];
  if(r.masuk>0){
    const rasio = Math.round((r.masuk-r.keluar)/r.masuk*100);
    if(rasio>=20) daftar.push(`👑 <b>Luar biasa!</b> Bulan ini kamu menyisihkan <b class="teks-emas">${rasio}%</b> dari pemasukan. Pertahankan ya, Ratu!`);
    else if(rasio>=0) daftar.push(`🌱 Kamu menyisihkan <b class="teks-emas">${rasio}%</b> dari pemasukan bulan ini. Sedikit lagi menuju 20% yang sehat.`);
    else daftar.push(`💡 Pengeluaran bulan ini melebihi pemasukan sebesar <b class="teks-merah">${formatRupiah(-r.selisih)}</b>. Yuk, pelan-pelan kita rapikan bersama.`);
  }
  if(rl.keluar>0 && r.keluar>0){
    const beda = Math.round((r.keluar-rl.keluar)/rl.keluar*100);
    daftar.push(beda>0
      ? `📈 Pengeluaranmu naik <b>${beda}%</b> dibanding bulan lalu (${formatRupiah(rl.keluar)} → ${formatRupiah(r.keluar)}).`
      : `📉 Pengeluaranmu turun <b>${Math.abs(beda)}%</b> dibanding bulan lalu. Kerja bagus! ✨`);
  }
  const teratas = pengeluaranPerKategori(kini)[0];
  if(teratas) daftar.push(`${teratas.ikon} Pengeluaran terbesarmu bulan ini: <b>${aman(teratas.nama)}</b> sebesar <b class="teks-emas">${formatRupiah(teratas.nilai)}</b>.`);
  const lewat = (data.anggaran||[]).filter(a=> terpakaiAnggaran(a.kategoriId,kini) > a.batas);
  if(lewat.length) daftar.push(`⚠️ Ada <b>${lewat.length} anggaran</b> yang melewati batas bulan ini. Intip halaman Anggaran yuk.`);
  const tujuanDekat = (data.tujuan||[]).filter(g=> g.terkumpul < g.target).sort((a,b)=> (b.terkumpul/b.target)-(a.terkumpul/a.target))[0];
  if(tujuanDekat) daftar.push(`${tujuanDekat.ikon} Tujuan <b>${aman(tujuanDekat.nama)}</b> sudah mencapai <b class="teks-emas">${persen(tujuanDekat.terkumpul,tujuanDekat.target)}%</b> — tinggal ${formatRupiah(tujuanDekat.target-tujuanDekat.terkumpul)} lagi!`);
  if(!daftar.length) daftar.push('✨ Catat transaksi pertamamu, dan wawasan cerdas akan muncul di sini untuk menemanimu.');
  return daftar;
}

/* ---------------- BERANDA ---------------- */
function tampilBeranda(){
  const kunci = kunciBulanIni(); const r = ringkasanBulan(kunci);
  const nama = data.pengaturan.namaPemilik || 'Shakira';
  const terakhir = [...(data.transaksi||[])].sort((a,b)=> b.tanggal.localeCompare(a.tanggal) || b.id.localeCompare(a.id)).slice(0,7);
  const perKat = pengeluaranPerKategori(kunci);
  const anggaranTampil = (data.anggaran||[]).slice(0,4);
  const tujuanTampil = [...(data.tujuan||[])].sort((a,b)=> persen(b.terkumpul,b.target)-persen(a.terkumpul,a.target)).slice(0,3);
  const rasio = r.masuk>0 ? Math.max(0, Math.round((r.masuk-r.keluar)/r.masuk*100)) : 0;

  $('#konten').innerHTML = `
  <div class="kisi kisi-utama">
    <div class="kartu-kekayaan">
      <div class="baris-antara"><div>
        <div class="teks-kecil" style="letter-spacing:2.5px;color:var(--emas);font-weight:800">TOTAL KEKAYAAN SAYA</div>
        <div class="total-kekayaan">${formatRupiah(totalKekayaan())}</div>
      </div><div class="chip"></div></div>
      <div class="nomor-kartu">••••&nbsp;&nbsp;••••&nbsp;&nbsp;••••&nbsp;&nbsp;🖤🖤🖤🖤</div>
      <div class="baris-antara">
        <div><div class="teks-kecil teks-abu">PEMILIK TUNGGAL</div><div class="teks-tebal" style="letter-spacing:2px">${aman(nama.toUpperCase())}</div></div>
        <div style="text-align:right"><div class="teks-kecil teks-abu">BULAN INI</div><div class="teks-tebal ${r.selisih>=0?'teks-hijau':'teks-merah'}">${r.selisih>=0?'+':'−'} ${formatRupiah(Math.abs(r.selisih))}</div></div>
        <div style="font-family:'Playfair Display',serif;font-size:21px" class="teks-emas">Shakira 🖤</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:18px">
      <div class="kartu statistik"><div class="baris-antara"><div class="ikon-stat">💚</div><span class="lencana lencana-hijau">PEMASUKAN</span></div>
        <div class="nilai teks-hijau">${formatRupiah(r.masuk)}</div><div class="label">Pemasukan ${labelBulan(kunci)}</div></div>
      <div class="kartu statistik"><div class="baris-antara"><div class="ikon-stat">💸</div><span class="lencana lencana-merah">PENGELUARAN</span></div>
        <div class="nilai teks-merah">${formatRupiah(r.keluar)}</div><div class="label">Pengeluaran ${labelBulan(kunci)}</div></div>
      <div class="kartu statistik kartu-emas-tipis"><div class="baris-antara"><div class="ikon-stat">🐷</div><span class="lencana lencana-emas">RASIO MENABUNG</span></div>
        <div class="nilai teks-emas">${rasio}%</div><div class="batang"><div class="hijau" style="width:${rasio}%"></div></div>
        <div class="label">Dari pemasukan bulan ini berhasil kamu sisihkan</div></div>
    </div>
  </div>

  <div class="kisi kisi-utama jarak-atas">
    <div class="kartu"><div class="kepala-kartu"><div><h2>📈 Arus Kas Enam Bulan Terakhir</h2><div class="keterangan-kartu">Perbandingan pemasukan &amp; pengeluaranmu</div></div>
      <button class="tombol tombol-garis tombol-kecil" onclick="pindahHalaman('laporan')">Laporan Lengkap →</button></div>
      <div class="bungkus-grafik"><canvas id="grafikBeranda"></canvas></div>
      <div class="baris" style="margin-top:10px"><span class="item-legenda"><span class="warna" style="background:#3ecf8e"></span>Pemasukan</span><span class="item-legenda"><span class="warna" style="background:#ff6b81"></span>Pengeluaran</span></div>
    </div>
    <div class="kartu"><div class="kepala-kartu"><div><h2>🍩 Pengeluaran Bulan Ini</h2><div class="keterangan-kartu">Berdasarkan kategori</div></div></div>
      ${perKat.length ? `<div class="bungkus-donat"><canvas id="donatBeranda"></canvas><div class="pusat-donat"><div class="teks-kecil teks-abu">TOTAL</div><div class="besar">${formatRingkas(r.keluar)}</div><div class="teks-kecil teks-abu">rupiah</div></div></div>
      <div class="legenda" style="margin-top:16px">${perKat.slice(0,5).map(k=>`<div class="item-legenda"><span class="warna" style="background:${k.warna}"></span>${k.ikon} ${aman(k.nama)}<span class="akhir">${formatRupiah(k.nilai)}</span></div>`).join('')}</div>`
      : kotakKosong('🍩','Belum Ada Pengeluaran','Pengeluaran bulan ini akan tampil indah di sini.')}
    </div>
  </div>

  <div class="kisi kisi-utama jarak-atas">
    <div class="kartu"><div class="kepala-kartu"><div><h2>💎 Transaksi Terakhir</h2><div class="keterangan-kartu">Jejak keuangan terbarumu</div></div>
      <button class="tombol tombol-garis tombol-kecil" onclick="pindahHalaman('transaksi')">Lihat Semua →</button></div>
      ${terakhir.length ? terakhir.map(t=>barisTransaksi(t,false)).join('') : kotakKosong('💎','Masih Sepi &amp; Bersih','Yuk catat transaksi pertamamu sekarang.','<button class="tombol tombol-emas" onclick="bukaFormTransaksi()">＋ Tambah Transaksi</button>')}
    </div>
    <div style="display:flex;flex-direction:column;gap:18px">
      <div class="kartu kartu-emas-tipis"><div class="kepala-kartu"><div><h2>✨ Wawasan Untukmu</h2></div></div>
        ${wawasanBulanIni().map(w=>`<p class="keterangan-kartu" style="margin-bottom:11px;line-height:1.75">${w}</p>`).join('')}</div>
      <div class="kartu"><div class="kepala-kartu"><div><h2>🎯 Anggaran Bulan Ini</h2></div><button class="tombol tombol-garis tombol-kecil" onclick="pindahHalaman('anggaran')">Atur →</button></div>
        ${anggaranTampil.length ? anggaranTampil.map(a=>{
          const kat=cariKategori(a.kategoriId), pakai=terpakaiAnggaran(a.kategoriId,kunci), p=persen(pakai,a.batas);
          return `<div style="margin-bottom:14px"><div class="baris-antara teks-kecil"><span class="teks-tebal">${kat.ikon} ${aman(kat.nama)}</span><span class="teks-abu">${formatRupiah(pakai)} / ${formatRupiah(a.batas)}</span></div>
          <div class="batang" style="margin-top:6px"><div class="${p>=100?'bahaya':p>=80?'waspada':''}" style="width:${p}%"></div></div></div>`;}).join('')
        : '<p class="keterangan-kartu">Belum ada anggaran. Buat batas cantikmu di halaman Anggaran.</p>'}
      </div>
      <div class="kartu"><div class="kepala-kartu"><div><h2>👑 Tujuan Terdekat</h2></div><button class="tombol tombol-garis tombol-kecil" onclick="pindahHalaman('tujuan')">Lihat →</button></div>
        ${tujuanTampil.length ? tujuanTampil.map(g=>{
          const p=persen(g.terkumpul,g.target);
          return `<div style="margin-bottom:14px"><div class="baris-antara teks-kecil"><span class="teks-tebal">${g.ikon} ${aman(g.nama)}</span><span class="teks-emas teks-tebal">${p}%</span></div>
          <div class="batang" style="margin-top:6px"><div style="width:${p}%"></div></div>
          <div class="teks-kecil teks-abu" style="margin-top:4px">${formatRupiah(g.terkumpul)} dari ${formatRupiah(g.target)}</div></div>`;}).join('')
        : '<p class="keterangan-kartu">Belum ada tujuan tabungan. Impian apa yang ingin kamu wujudkan?</p>'}
      </div>
    </div>
  </div>`;

  requestAnimationFrame(()=>{
    const bulan6 = daftarBulanTerakhir(6);
    gambarGrafikBatang('grafikBeranda', bulan6.map(labelBulanSingkat), bulan6.map(k=>ringkasanBulan(k).masuk), bulan6.map(k=>ringkasanBulan(k).keluar));
    if(perKat.length) gambarDonat('donatBeranda', perKat.slice(0,6));
  });
}

/* ---------------- TRANSAKSI ---------------- */
let saring = {cari:'', jenis:'semua', kategoriId:'semua', dompetId:'semua', bulan:''};
function transaksiTersaring(){
  return [...(data.transaksi||[])]
    .filter(t=>{
      if(saring.jenis!=='semua' && t.jenis!==saring.jenis) return false;
      if(saring.kategoriId!=='semua' && t.kategoriId!==saring.kategoriId) return false;
      if(saring.dompetId!=='semua' && t.dompetId!==saring.dompetId && t.dompetTujuanId!==saring.dompetId) return false;
      if(saring.bulan && kunciBulanDariISO(t.tanggal)!==saring.bulan) return false;
      if(saring.cari){
        const gabung = ((t.catatan||'')+' '+cariKategori(t.kategoriId).nama+' '+cariDompet(t.dompetId).nama).toLowerCase();
        if(!gabung.includes(saring.cari.toLowerCase())) return false;
      }
      return true;
    })
    .sort((a,b)=> b.tanggal.localeCompare(a.tanggal) || b.id.localeCompare(a.id));
}
function tampilTransaksi(){
  const hasil = transaksiTersaring();
  const masuk = hasil.filter(t=>t.jenis==='pemasukan').reduce((s,t)=>s+t.jumlah,0);
  const keluar = hasil.filter(t=>t.jenis==='pengeluaran').reduce((s,t)=>s+t.jumlah,0);
  let tanggalSebelumnya = '';
  const daftarHTML = hasil.slice(0,150).map(t=>{
    let kepalaTanggal = '';
    if(t.tanggal !== tanggalSebelumnya){
      tanggalSebelumnya = t.tanggal;
      kepalaTanggal = `<div class="teks-kecil teks-tebal teks-emas" style="margin:16px 6px 4px;letter-spacing:.4px">${formatTanggal(t.tanggal).toUpperCase()}</div>`;
    }
    return kepalaTanggal + barisTransaksi(t,true);
  }).join('');

  $('#konten').innerHTML = `
  <div class="kartu">
    <div class="kepala-kartu"><div><h2>🔍 Saring &amp; Cari</h2><div class="keterangan-kartu">Temukan transaksi apa pun dalam sekejap</div></div>
      <div class="baris"><button class="tombol tombol-garis tombol-kecil" onclick="unduhTabelTransaksi()">⬇️ Unduh Tabel</button>
      <button class="tombol tombol-emas tombol-kecil" onclick="bukaFormTransaksi()">＋ Tambah Transaksi</button></div></div>
    <div class="kisi kisi-4">
      <div class="isian" style="margin:0"><label>Kata Kunci</label><input type="text" id="saringCari" value="${aman(saring.cari)}" placeholder="mis. kopi, gaji, gaun…"></div>
      <div class="isian" style="margin:0"><label>Jenis</label><select id="saringJenis">
        <option value="semua" ${saring.jenis==='semua'?'selected':''}>Semua Jenis</option>
        <option value="pemasukan" ${saring.jenis==='pemasukan'?'selected':''}>💚 Pemasukan</option>
        <option value="pengeluaran" ${saring.jenis==='pengeluaran'?'selected':''}>💸 Pengeluaran</option>
        <option value="pemindahan" ${saring.jenis==='pemindahan'?'selected':''}>🔄 Pindah Dana</option></select></div>
      <div class="isian" style="margin:0"><label>Kategori</label><select id="saringKategori">
        <option value="semua">Semua Kategori</option>
        ${semuaKategori().map(k=>`<option value="${k.id}" ${saring.kategoriId===k.id?'selected':''}>${k.ikon} ${aman(k.nama)}</option>`).join('')}</select></div>
      <div class="isian" style="margin:0"><label>Bulan</label><input type="month" id="saringBulan" value="${aman(saring.bulan)}"></div>
    </div>
    <div class="baris" style="margin-top:12px">
      <div class="isian" style="margin:0;min-width:220px"><label>Dompet</label><select id="saringDompet">
        <option value="semua">Semua Dompet</option>
        ${(data.dompet||[]).map(d=>`<option value="${d.id}" ${saring.dompetId===d.id?'selected':''}>${d.ikon} ${aman(d.nama)}</option>`).join('')}</select></div>
      <button class="tombol tombol-garis tombol-kecil" style="align-self:flex-end" onclick="bersihkanSaringan()">🧹 Bersihkan Saringan</button>
    </div>
  </div>
  <div class="kisi kisi-3 jarak-atas">
    <div class="kartu statistik"><div class="label">JUMLAH TRANSAKSI DITEMUKAN</div><div class="nilai">${hasil.length}</div></div>
    <div class="kartu statistik"><div class="label">TOTAL PEMASUKAN (HASIL SARING)</div><div class="nilai teks-hijau">${formatRupiah(masuk)}</div></div>
    <div class="kartu statistik"><div class="label">TOTAL PENGELUARAN (HASIL SARING)</div><div class="nilai teks-merah">${formatRupiah(keluar)}</div></div>
  </div>
  <div class="kartu jarak-atas">
    ${hasil.length ? daftarHTML + (hasil.length>150?'<p class="keterangan-kartu" style="text-align:center;margin-top:14px">Menampilkan 150 transaksi terbaru. Persempit saringan untuk melihat sisanya.</p>':'')
      : kotakKosong('🔍','Tidak Ditemukan','Tidak ada transaksi yang cocok. Coba longgarkan saringannya ya.')}
  </div>`;

  const terapkan = () => {
    saring.cari = $('#saringCari').value; saring.jenis = $('#saringJenis').value;
    saring.kategoriId = $('#saringKategori').value; saring.dompetId = $('#saringDompet').value; saring.bulan = $('#saringBulan').value;
    tampilTransaksi();
    const el = $('#saringCari'); if(document.activeElement!==el && saring.cari){ el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
  };
  let tunda;
  $('#saringCari').addEventListener('input', ()=>{ clearTimeout(tunda); tunda=setTimeout(terapkan, 400); });
  ['saringJenis','saringKategori','saringDompet','saringBulan'].forEach(id=> $('#'+id).addEventListener('change', terapkan));
}
function bersihkanSaringan(){ saring = {cari:'',jenis:'semua',kategoriId:'semua',dompetId:'semua',bulan:''}; $('#cariGlobal').value=''; tampilTransaksi(); }
function hapusTransaksi(id){
  const t = (data.transaksi||[]).find(x=>x.id===id); if(!t) return;
  konfirmasiHapus('Hapus Transaksi?', 'Transaksi ini akan dihapus selamanya dari catatanmu. Saldo dompet akan menyesuaikan otomatis.', ()=>{
    if(t.tujuanId){ const g=(data.tujuan||[]).find(x=>x.id===t.tujuanId); if(g) g.terkumpul=Math.max(0,g.terkumpul-t.jumlah); }
    if(t.utangId){ const u=(data.utang||[]).find(x=>x.id===t.utangId); if(u) u.terbayar=Math.max(0,u.terbayar-t.jumlah); }
    data.transaksi = data.transaksi.filter(x=>x.id!==id); simpanData(); tampilUlang(); beriTahu('Transaksi berhasil dihapus 🗑️');
  });
}

/* Formulir tambah / ubah transaksi */
let jenisFormTransaksi = 'pengeluaran', kategoriFormTerpilih = '';
function bukaFormTransaksi(idUbah='', jenisAwal='pengeluaran', dompetAwal=''){
  const t = idUbah ? (data.transaksi||[]).find(x=>x.id===idUbah) : null;
  jenisFormTransaksi = t ? t.jenis : jenisAwal;
  kategoriFormTerpilih = t ? t.kategoriId : (semuaKategori().find(k=>k.jenis===jenisFormTransaksi)?.id || '');
  bukaModal(t ? '✏️ Ubah Transaksi' : '💎 Tambah Transaksi Baru', `
    <form id="formTransaksi">
      <div class="pil-jenis" id="pilJenis">
        <button type="button" data-jenis="pemasukan">💚 Pemasukan</button>
        <button type="button" data-jenis="pengeluaran">💸 Pengeluaran</button>
        <button type="button" data-jenis="pemindahan">🔄 Pindah Dana</button>
      </div>
      <div class="isian"><label>Jumlah (Rupiah)</label>
        <input type="text" id="ftJumlah" inputmode="numeric" placeholder="mis. 150.000" value="${t? t.jumlah.toLocaleString('id-ID') : ''}" required>
        <div class="petunjuk">Ketik angka saja, titik ribuan muncul otomatis.</div></div>
      <div id="bagianKategori">
        <div class="isian"><label>Kategori</label><div class="pilihan-kategori" id="pilihanKategori"></div></div>
      </div>
      <div class="duo">
        <div class="isian"><label id="labelDompet">Dompet</label><select id="ftDompet" required>
          ${(data.dompet||[]).map(d=>`<option value="${d.id}" ${(t?t.dompetId:(dompetAwal||data.dompet[0]?.id))===d.id?'selected':''}>${d.ikon} ${aman(d.nama)} — ${formatRupiah(saldoDompet(d.id))}</option>`).join('')}</select></div>
        <div class="isian" id="bagianDompetTujuan"><label>Dompet Tujuan</label><select id="ftDompetTujuan">
          ${(data.dompet||[]).map(d=>`<option value="${d.id}" ${t&&t.dompetTujuanId===d.id?'selected':''}>${d.ikon} ${aman(d.nama)}</option>`).join('')}</select></div>
      </div>
      <div class="duo">
        <div class="isian"><label>Tanggal</label><input type="date" id="ftTanggal" value="${t? t.tanggal : hariIniISO()}" required></div>
        <div class="isian"><label>Catatan</label><input type="text" id="ftCatatan" maxlength="80" value="${t? aman(t.catatan) : ''}" placeholder="Tulis cerita singkatnya…"></div>
      </div>
      <div class="pesan-salah" id="pesanFormTransaksi"></div>
      <div class="baris" style="justify-content:flex-end;margin-top:6px">
        <button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
        <button type="submit" class="tombol tombol-emas">💾 Simpan Transaksi</button>
      </div>
    </form>`);
  beriTitikRibuan($('#ftJumlah'));

  const segarkanJenis = () => {
    document.querySelectorAll('#pilJenis button').forEach(b=>{
      b.className = b.dataset.jenis===jenisFormTransaksi
        ? (jenisFormTransaksi==='pemasukan'?'aktif-masuk':jenisFormTransaksi==='pengeluaran'?'aktif-keluar':'aktif-pindah') : '';
    });
    const pindah = jenisFormTransaksi==='pemindahan';
    $('#bagianKategori').classList.toggle('tersembunyi', pindah);
    $('#bagianDompetTujuan').classList.toggle('tersembunyi', !pindah);
    $('#labelDompet').textContent = pindah ? 'Dompet Asal' : 'Dompet';
    const daftar = semuaKategori().filter(k=> k.jenis===jenisFormTransaksi);
    if(!daftar.find(k=>k.id===kategoriFormTerpilih)) kategoriFormTerpilih = daftar[0]?.id || '';
    $('#pilihanKategori').innerHTML = daftar.map(k=>`<button type="button" data-kat="${k.id}" class="${k.id===kategoriFormTerpilih?'terpilih':''}">${k.ikon} ${aman(k.nama)}</button>`).join('');
  };
  $('#pilJenis').addEventListener('click', e=>{
    const b = e.target.closest('button[data-jenis]'); if(!b) return;
    jenisFormTransaksi = b.dataset.jenis; segarkanJenis();
  });
  $('#pilihanKategori').addEventListener('click', e=>{
    const b = e.target.closest('button[data-kat]'); if(!b) return;
    kategoriFormTerpilih = b.dataset.kat; segarkanJenis();
  });
  segarkanJenis();
  setTimeout(()=> $('#ftJumlah').focus(), 80);

  $('#formTransaksi').addEventListener('submit', e=>{
    e.preventDefault();
    const jumlah = angkaSaja($('#ftJumlah').value);
    const dompetId = $('#ftDompet').value;
    const dompetTujuanId = jenisFormTransaksi==='pemindahan' ? $('#ftDompetTujuan').value : '';
    if(jumlah<=0){ $('#pesanFormTransaksi').textContent='Jumlah wajib lebih besar dari nol ya.'; return; }
    if(jenisFormTransaksi==='pemindahan' && dompetId===dompetTujuanId){ $('#pesanFormTransaksi').textContent='Dompet asal dan tujuan tidak boleh sama.'; return; }
    const isi = {jenis:jenisFormTransaksi, kategoriId: jenisFormTransaksi==='pemindahan' ? '' : kategoriFormTerpilih,
      dompetId, dompetTujuanId, jumlah, tanggal:$('#ftTanggal').value || hariIniISO(), catatan:$('#ftCatatan').value.trim()};
    if(t) Object.assign(t, isi);
    else data.transaksi.push({id:idBaru(), ...isi});
    simpanData(); tutupModal(); tampilUlang();
    beriTahu(t ? 'Transaksi berhasil diubah ✨' : 'Transaksi berhasil dicatat ✨');
  });
}

/* ---------------- DompeT ---------------- */
function tampilDompet(){
  $('#konten').innerHTML = `
  <div class="baris-antara" style="margin-bottom:18px">
    <div><h2 class="huruf-mewah" style="font-size:23px">👛 Semua Dompet &amp; Rekeningku</h2>
    <p class="keterangan-kartu">Total kekayaan: <b class="teks-emas">${formatRupiah(totalKekayaan())}</b> dari ${(data.dompet||[]).length} dompet</p></div>
    <button class="tombol tombol-emas" onclick="bukaFormDompet()">＋ Tambah Dompet</button>
  </div>
  <div class="kisi kisi-3">
    ${(data.dompet||[]).map(d=>{
      const saldo = saldoDompet(d.id);
      const jml = (data.transaksi||[]).filter(t=> t.dompetId===d.id || t.dompetTujuanId===d.id).length;
      return `<div class="kartu" style="border-top:4px solid ${d.warna}">
        <div class="baris-antara"><div class="ikon-kategori" style="background:${d.warna}22;font-size:24px;width:54px;height:54px;border-radius:16px">${d.ikon}</div>
        <span class="lencana lencana-emas">${aman(d.jenis).toUpperCase()}</span></div>
        <h3 class="huruf-mewah" style="font-size:20px;margin-top:14px;color:var(--putih)">${aman(d.nama)}</h3>
        <div class="teks-tebal" style="font-size:24px;margin:6px 0 2px;${saldo<0?'color:var(--merah)':''}">${formatRupiah(saldo)}</div>
        <div class="keterangan-kartu">Saldo awal ${formatRupiah(d.saldoAwal||0)} · ${jml} transaksi tercatat</div>
        <div class="baris" style="margin-top:16px">
          <button class="tombol tombol-emas tombol-kecil" onclick="bukaFormTransaksi('','pengeluaran','${d.id}')">＋ Transaksi</button>
          <button class="tombol tombol-garis tombol-kecil" onclick="bukaFormDompet('${d.id}')">✏️ Ubah</button>
          <button class="tombol tombol-bahaya tombol-kecil" onclick="hapusDompet('${d.id}')">🗑️ Hapus</button>
        </div></div>`;
    }).join('')}
  </div>
  ${!(data.dompet||[]).length ? `<div class="kartu jarak-atas">${kotakKosong('👛','Belum Ada Dompet','Buat dompet pertamamu untuk mulai mencatat.','<button class="tombol tombol-emas" onclick="bukaFormDompet()">＋ Tambah Dompet</button>')}</div>` : ''}`;
}
function bukaFormDompet(idUbah=''){
  const d = idUbah ? data.dompet.find(x=>x.id===idUbah) : null;
  bukaModal(d ? '✏️ Ubah Dompet' : '👛 Tambah Dompet Baru', `
    <form id="formDompet">
      <div class="isian"><label>Nama Dompet</label><input type="text" id="fdNama" maxlength="40" required value="${d?aman(d.nama):''}" placeholder="mis. Rekening Bank Utama"></div>
      <div class="duo">
        <div class="isian"><label>Jenis</label><select id="fdJenis">${JENIS_DOMPE.map(j=>`<option ${d&&d.jenis===j?'selected':''}>${j}</option>`).join('')}</select></div>
        <div class="isian"><label>Lambang</label><select id="fdIkon">${IKON_DOMPE.map(i=>`<option value="${i}" ${d&&d.ikon===i?'selected':''}>${i}</option>`).join('')}</select></div>
      </div>
      <div class="duo">
        <div class="isian"><label>Saldo Awal (Rupiah)</label><input type="text" id="fdSaldo" inputmode="numeric" value="${d?(d.saldoAwal||0).toLocaleString('id-ID'):''}" placeholder="0">
          <div class="petunjuk">Isi saldo saat ini jika dompet sudah berisi uang.</div></div>
        <div class="isian"><label>Warna Khas</label><select id="fdWarna">${WARNA_PILIHAN.map(w=>`<option value="${w}" ${d&&d.warna===w?'selected':''} style="color:${w}">● ${w==='#d4af37'?'Emas':w}</option>`).join('')}</select></div>
      </div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">💾 Simpan Dompet</button></div>
    </form>`);
  beriTitikRibuan($('#fdSaldo'));
  $('#formDompet').addEventListener('submit', e=>{
    e.preventDefault();
    const isi = {nama:$('#fdNama').value.trim(), jenis:$('#fdJenis').value, ikon:$('#fdIkon').value, warna:$('#fdWarna').value, saldoAwal:angkaSaja($('#fdSaldo').value)};
    if(d) Object.assign(d, isi); else data.dompet.push({id:idBaru(), ...isi});
    simpanData(); tutupModal(); tampilUlang(); beriTahu('Dompet berhasil disimpan 👛');
  });
}
function hapusDompet(id){
  const dipakai = (data.transaksi||[]).some(t=> t.dompetId===id || t.dompetTujuanId===id);
  konfirmasiHapus('Hapus Dompet?', dipakai
    ? 'Dompet ini punya riwayat transaksi. Jika dihapus, <b>seluruh transaksinya ikut terhapus</b>. Yakin?'
    : 'Dompet ini akan dihapus selamanya. Yakin?', ()=>{
    data.dompet = data.dompet.filter(d=>d.id!==id);
    data.transaksi = (data.transaksi||[]).filter(t=> t.dompetId!==id && t.dompetTujuanId!==id);
    simpanData(); tampilUlang(); beriTahu('Dompet berhasil dihapus 🗑️');
  });
}

/* ---------------- ANGGARAN ---------------- */
let bulanAnggaran = kunciBulanIni();
function tampilAnggaran(){
  const kunci = bulanAnggaran;
  $('#konten').innerHTML = `
  <div class="baris-antara" style="margin-bottom:18px">
    <div><h2 class="huruf-mewah" style="font-size:23px">🎯 Anggaran Bulan ${labelBulan(kunci)}</h2>
    <p class="keterangan-kartu">Batas cantik untuk tiap kategori — berlaku setiap bulan</p></div>
    <div class="baris"><input type="month" id="pilihBulanAnggaran" value="${kunci}" style="background:var(--hitam-3);border:1px solid rgba(255,253,246,.14);color:var(--putih);border-radius:12px;padding:10px 12px;color-scheme:dark">
    <button class="tombol tombol-emas" onclick="bukaFormAnggaran()">＋ Tambah Anggaran</button></div>
  </div>
  <div class="kisi kisi-2">
    ${(data.anggaran||[]).map(a=>{
      const kat = cariKategori(a.kategoriId), pakai = terpakaiAnggaran(a.kategoriId,kunci), sisa = a.batas-pakai, p = persen(pakai,a.batas);
      const status = p>=100 ? '<span class="lencana lencana-merah">MELEWATI BATAS</span>' : p>=80 ? '<span class="lencana lencana-jingga">HAMPIR HABIS</span>' : '<span class="lencana lencana-hijau">AMAN</span>';
      return `<div class="kartu">
        <div class="baris-antara"><div class="baris"><div class="ikon-kategori" style="background:${kat.warna}22">${kat.ikon}</div>
          <div><div class="teks-tebal" style="color:var(--putih)">${aman(kat.nama)}</div><div class="teks-kecil teks-abu">Batas ${formatRupiah(a.batas)} / bulan</div></div></div>${status}</div>
        <div class="baris-antara" style="margin:16px 0 7px"><span class="teks-kecil teks-abu">Terpakai <b style="color:var(--putih)">${formatRupiah(pakai)}</b></span>
          <span class="teks-tebal ${sisa<0?'teks-merah':'teks-emas'}">${sisa>=0? 'Sisa '+formatRupiah(sisa) : 'Lebih '+formatRupiah(-sisa)}</span></div>
        <div class="batang"><div class="${p>=100?'bahaya':p>=80?'waspada':''}" style="width:${p}%"></div></div>
        <div class="teks-kecil teks-abu" style="margin-top:6px">${p}% dari batas anggaran</div>
        <div class="baris" style="margin-top:14px"><button class="tombol tombol-garis tombol-kecil" onclick="bukaFormAnggaran('${a.id}')">✏️ Ubah</button>
        <button class="tombol tombol-bahaya tombol-kecil" onclick="hapusAnggaran('${a.id}')">🗑️ Hapus</button></div></div>`;
    }).join('')}
  </div>
  ${!(data.anggaran||[]).length ? `<div class="kartu jarak-atas">${kotakKosong('🎯','Belum Ada Anggaran','Tentukan batas pengeluaran per kategori agar keuanganmu selalu anggun terkendali.','<button class="tombol tombol-emas" onclick="bukaFormAnggaran()">＋ Buat Anggaran Pertama</button>')}</div>` : ''}`;
  $('#pilihBulanAnggaran').addEventListener('change', e=>{ bulanAnggaran = e.target.value || kunciBulanIni(); tampilAnggaran(); });
}
function bukaFormAnggaran(idUbah=''){
  const a = idUbah ? data.anggaran.find(x=>x.id===idUbah) : null;
  const sudahAda = (data.anggaran||[]).map(x=>x.kategoriId);
  bukaModal(a ? '✏️ Ubah Anggaran' : '🎯 Tambah Anggaran Baru', `
    <form id="formAnggaran">
      <div class="isian"><label>Kategori Pengeluaran</label><select id="faKategori" required>
        ${semuaKategori().filter(k=> k.jenis==='pengeluaran' && (!sudahAda.includes(k.id) || (a && a.kategoriId===k.id)))
          .map(k=>`<option value="${k.id}" ${a&&a.kategoriId===k.id?'selected':''}>${k.ikon} ${aman(k.nama)}</option>`).join('')}</select></div>
      <div class="isian"><label>Batas per Bulan (Rupiah)</label><input type="text" id="faBatas" inputmode="numeric" required value="${a?a.batas.toLocaleString('id-ID'):''}" placeholder="mis. 2.000.000"></div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">💾 Simpan Anggaran</button></div>
    </form>`);
  beriTitikRibuan($('#faBatas'));
  $('#formAnggaran').addEventListener('submit', e=>{
    e.preventDefault();
    const isi = {kategoriId:$('#faKategori').value, batas:angkaSaja($('#faBatas').value)};
    if(isi.batas<=0){ beriTahu('Batas anggaran wajib lebih besar dari nol ya.'); return; }
    if(a) Object.assign(a, isi); else data.anggaran.push({id:idBaru(), ...isi});
    simpanData(); tutupModal(); tampilUlang(); beriTahu('Anggaran berhasil disimpan 🎯');
  });
}
function hapusAnggaran(id){ konfirmasiHapus('Hapus Anggaran?', 'Batas anggaran ini akan dihapus. Riwayat transaksinya tetap aman.', ()=>{ data.anggaran=data.anggaran.filter(a=>a.id!==id); simpanData(); tampilUlang(); beriTahu('Anggaran dihapus 🗑️'); }); }

/* ---------------- TUJUAN TABUNGAN ---------------- */
function tampilTujuan(){
  $('#konten').innerHTML = `
  <div class="baris-antara" style="margin-bottom:18px">
    <div><h2 class="huruf-mewah" style="font-size:23px">👑 Impian yang Sedang Diwujudkan</h2>
    <p class="keterangan-kartu">Setiap rupiah yang disisihkan membawamu selangkah lebih dekat</p></div>
    <button class="tombol tombol-emas" onclick="bukaFormTujuan()">＋ Tambah Tujuan</button>
  </div>
  <div class="kisi kisi-2">
    ${(data.tujuan||[]).map(g=>{
      const p = persen(g.terkumpul, g.target), sisa = Math.max(0, g.target-g.terkumpul), hari = g.batasTanggal ? selisihHari(g.batasTanggal) : null;
      const bulanSisa = hari!==null && hari>0 ? Math.max(1, Math.ceil(hari/30)) : null;
      const tercapai = g.terkumpul >= g.target;
      return `<div class="kartu" style="border-top:4px solid ${g.warna}">
        <div class="baris-antara"><div class="baris"><div class="ikon-kategori" style="background:${g.warna}22;font-size:26px;width:56px;height:56px;border-radius:16px">${g.ikon}</div>
          <div><h3 class="huruf-mewah" style="font-size:20px;color:var(--putih)">${aman(g.nama)}</h3>
          <div class="teks-kecil teks-abu">${g.batasTanggal? '🎯 Target: '+formatTanggalSingkat(g.batasTanggal) : 'Tanpa batas waktu'}${hari!==null && !tercapai ? (hari>=0? ` · ${hari} hari lagi` : ' · <span class="teks-merah teks-tebal">lewat batas waktu</span>') : ''}</div></div></div>
          ${tercapai?'<span class="lencana lencana-emas">👑 TERCAPAI!</span>':`<span class="lencana lencana-emas">${p}%</span>`}</div>
        <div class="baris-antara" style="margin:16px 0 7px"><span class="teks-kecil teks-abu">Terkumpul <b class="teks-hijau" style="font-size:15px">${formatRupiah(g.terkumpul)}</b></span><span class="teks-kecil teks-abu">dari ${formatRupiah(g.target)}</span></div>
        <div class="batang"><div style="width:${p}%"></div></div>
        ${!tercapai ? `<div class="keterangan-kartu" style="margin-top:9px">Kurang <b class="teks-emas">${formatRupiah(sisa)}</b> lagi${bulanSisa? ` — cukup sisihkan sekitar <b>${formatRupiah(Math.ceil(sisa/bulanSisa))}</b> per bulan.` : '.'}</div>` : '<div class="keterangan-kartu" style="margin-top:9px">🎉 Selamat! Impian ini sudah terwujud. Kamu hebat!</div>'}
        ${g.catatan? `<div class="teks-kecil teks-abu" style="margin-top:6px;font-style:italic">“${aman(g.catatan)}”</div>` : ''}
        <div class="baris" style="margin-top:15px">
          ${!tercapai? `<button class="tombol tombol-emas tombol-kecil" onclick="bukaTambahDanaTujuan('${g.id}')">🐷 Tambah Dana</button>` : ''}
          <button class="tombol tombol-garis tombol-kecil" onclick="bukaFormTujuan('${g.id}')">✏️ Ubah</button>
          <button class="tombol tombol-bahaya tombol-kecil" onclick="hapusTujuan('${g.id}')">🗑️ Hapus</button></div></div>`;
    }).join('')}
  </div>
  ${!(data.tujuan||[]).length ? `<div class="kartu jarak-atas">${kotakKosong('👑','Belum Ada Impian Tertulis','Liburan impian? Tas idaman? Tulis tujuan pertamamu dan mulai mewujudkannya.','<button class="tombol tombol-emas" onclick="bukaFormTujuan()">＋ Buat Tujuan Pertama</button>')}</div>` : ''}`;
}
function bukaFormTujuan(idUbah=''){
  const g = idUbah ? data.tujuan.find(x=>x.id===idUbah) : null;
  bukaModal(g ? '✏️ Ubah Tujuan' : '👑 Tujuan Tabungan Baru', `
    <form id="formTujuan">
      <div class="isian"><label>Nama Impian</label><input type="text" id="fgNama" maxlength="50" required value="${g?aman(g.nama):''}" placeholder="mis. Liburan Mewah ke Paris"></div>
      <div class="duo">
        <div class="isian"><label>Lambang</label><input type="text" id="fgIkon" maxlength="4" value="${g?aman(g.ikon):'👑'}" style="text-align:center;font-size:20px"></div>
        <div class="isian"><label>Warna Khas</label><select id="fgWarna">${WARNA_PILIHAN.map(w=>`<option value="${w}" ${g&&g.warna===w?'selected':''} style="color:${w}">● ${w==='#d4af37'?'Emas':w}</option>`).join('')}</select></div>
      </div>
      <div class="duo">
        <div class="isian"><label>Dana yang Dibutuhkan (Rupiah)</label><input type="text" id="fgTarget" inputmode="numeric" required value="${g?g.target.toLocaleString('id-ID'):''}" placeholder="mis. 50.000.000"></div>
        <div class="isian"><label>Sudah Terkumpul (Rupiah)</label><input type="text" id="fgTerkumpul" inputmode="numeric" value="${g?g.terkumpul.toLocaleString('id-ID'):''}" placeholder="0"></div>
      </div>
      <div class="isian"><label>Tanggal Target Terwujud</label><input type="date" id="fgBatas" value="${g? (g.batasTanggal||'') : ''}"></div>
      <div class="isian"><label>Catatan Penyemangat</label><input type="text" id="fgCatatan" maxlength="90" value="${g?aman(g.catatan||''):''}" placeholder="Tulis alasan impian ini berharga untukmu…"></div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">💾 Simpan Tujuan</button></div>
    </form>`);
  beriTitikRibuan($('#fgTarget')); beriTitikRibuan($('#fgTerkumpul'));
  $('#formTujuan').addEventListener('submit', e=>{
    e.preventDefault();
    const isi = {nama:$('#fgNama').value.trim(), ikon:$('#fgIkon').value.trim()||'👑', warna:$('#fgWarna').value,
      target:angkaSaja($('#fgTarget').value), terkumpul:angkaSaja($('#fgTerkumpul').value), batasTanggal:$('#fgBatas').value, catatan:$('#fgCatatan').value.trim()};
    if(isi.target<=0){ beriTahu('Dana yang dibutuhkan wajib lebih besar dari nol ya.'); return; }
    if(g) Object.assign(g, isi); else data.tujuan.push({id:idBaru(), ...isi});
    simpanData(); tutupModal(); tampilUlang(); beriTahu('Tujuan berhasil disimpan 👑');
  });
}
function bukaTambahDanaTujuan(id){
  const g = data.tujuan.find(x=>x.id===id); if(!g) return;
  bukaModal('🐷 Tambah Dana — '+aman(g.nama), `
    <form id="formTambahDana">
      <p class="keterangan-kartu">Dana diambil dari dompet pilihanmu dan otomatis tercatat sebagai pengeluaran kategori <b>Tabungan &amp; Tujuan</b>.</p>
      <div class="isian" style="margin-top:14px"><label>Jumlah Ditambahkan (Rupiah)</label><input type="text" id="fdanaJumlah" inputmode="numeric" required placeholder="mis. 1.000.000">
      <div class="petunjuk">Sisa menuju target: ${formatRupiah(Math.max(0,g.target-g.terkumpul))}</div></div>
      <div class="duo">
        <div class="isian"><label>Ambil dari Dompet</label><select id="fdanaDompet">${(data.dompet||[]).map(d=>`<option value="${d.id}">${d.ikon} ${aman(d.nama)} — ${formatRupiah(saldoDompet(d.id))}</option>`).join('')}</select></div>
        <div class="isian"><label>Tanggal</label><input type="date" id="fdanaTanggal" value="${hariIniISO()}"></div>
      </div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">🐷 Tambahkan Dana</button></div>
    </form>`);
  beriTitikRibuan($('#fdanaJumlah'));
  $('#formTambahDana').addEventListener('submit', e=>{
    e.preventDefault();
    const jumlah = angkaSaja($('#fdanaJumlah').value);
    if(jumlah<=0){ beriTahu('Jumlah wajib lebih besar dari nol ya.'); return; }
    g.terkumpul += jumlah;
    data.transaksi.push({id:idBaru(), jenis:'pengeluaran', kategoriId:'tabungan-tujuan', dompetId:$('#fdanaDompet').value, dompetTujuanId:'',
      jumlah, tanggal:$('#fdanaTanggal').value||hariIniISO(), catatan:'Menabung untuk '+g.nama, tujuanId:g.id});
    simpanData(); tutupModal(); tampilUlang();
    beriTahu(g.terkumpul>=g.target ? '🎉 Luar biasa! Tujuan ini TERCAPAI! 👑' : 'Dana berhasil ditambahkan. Selangkah lebih dekat! 🐷');
  });
}
function hapusTujuan(id){ konfirmasiHapus('Hapus Tujuan?', 'Tujuan ini akan dihapus. Transaksi tabungannya tetap tersimpan di riwayat.', ()=>{ data.tujuan=data.tujuan.filter(g=>g.id!==id); simpanData(); tampilUlang(); beriTahu('Tujuan dihapus 🗑️'); }); }

/* ---------------- UTANG & PIUTANG ---------------- */
let saringUtang = 'semua';
function tampilUtang(){
  const semua = data.utang||[];
  const totalUtang = semua.filter(u=>u.jenis==='utang').reduce((s,u)=>s+(u.jumlah-u.terbayar),0);
  const totalPiutang = semua.filter(u=>u.jenis==='piutang').reduce((s,u)=>s+(u.jumlah-u.terbayar),0);
  const daftar = semua.filter(u=> saringUtang==='semua' || u.jenis===saringUtang);
  $('#konten').innerHTML = `
  <div class="kisi kisi-3" style="margin-bottom:18px">
    <div class="kartu statistik"><div class="ikon-stat">💳</div><div class="nilai teks-merah">${formatRupiah(totalUtang)}</div><div class="label">SISA UTANG SAYA (BELUM LUNAS)</div></div>
    <div class="kartu statistik"><div class="ikon-stat">🪙</div><div class="nilai teks-hijau">${formatRupiah(totalPiutang)}</div><div class="label">SISA PIUTANG (UANG SAYA DI ORANG LAIN)</div></div>
    <div class="kartu statistik"><div class="ikon-stat">🤝</div><div class="nilai">${semua.filter(u=>u.terbayar>=u.jumlah).length} Lunas</div><div class="label">DARI ${semua.length} CATATAN UTANG PIUTANG</div></div>
  </div>
  <div class="baris-antara" style="margin-bottom:16px">
    <div class="baris">
      <button class="tombol ${saringUtang==='semua'?'tombol-emas':'tombol-garis'} tombol-kecil" onclick="saringUtang='semua';tampilUtang()">Semua</button>
      <button class="tombol ${saringUtang==='utang'?'tombol-emas':'tombol-garis'} tombol-kecil" onclick="saringUtang='utang';tampilUtang()">💳 Utang Saya</button>
      <button class="tombol ${saringUtang==='piutang'?'tombol-emas':'tombol-garis'} tombol-kecil" onclick="saringUtang='piutang';tampilUtang()">🪙 Piutang Saya</button>
    </div>
    <button class="tombol tombol-emas" onclick="bukaFormUtang()">＋ Catat Baru</button>
  </div>
  <div class="kisi kisi-2">
    ${daftar.map(u=>{
      const sisa = u.jumlah-u.terbayar, lunas = sisa<=0, p = persen(u.terbayar,u.jumlah);
      const hari = u.jatuhTempo ? selisihHari(u.jatuhTempo) : null;
      const labelTempo = lunas ? '<span class="lencana lencana-hijau">✅ LUNAS</span>'
        : hari===null ? '<span class="lencana lencana-emas">BELUM LUNAS</span>'
        : hari<0 ? '<span class="lencana lencana-merah">⏰ LEWAT JATUH TEMPO</span>'
        : hari<=7 ? `<span class="lencana lencana-jingga">JATUH TEMPO ${hari===0?'HARI INI':hari+' HARI LAGI'}</span>`
        : '<span class="lencana lencana-emas">BELUM LUNAS</span>';
      return `<div class="kartu">
        <div class="baris-antara"><div><h3 class="huruf-mewah" style="font-size:19px;color:var(--putih)">${u.jenis==='utang'?'💳':'🪙'} ${aman(u.nama)}</h3>
          <div class="teks-kecil teks-abu">${u.jenis==='utang'?'Saya berutang kepada':'Meminjamkan kepada'} · mulai ${formatTanggalSingkat(u.tanggal)}${u.jatuhTempo? ' · jatuh tempo '+formatTanggalSingkat(u.jatuhTempo) : ''}</div></div>${labelTempo}</div>
        <div class="baris-antara" style="margin:15px 0 7px"><span class="teks-kecil teks-abu">Terbayar <b style="color:var(--putih)">${formatRupiah(u.terbayar)}</b> dari ${formatRupiah(u.jumlah)}</span>
          <span class="teks-tebal ${lunas?'teks-hijau':'teks-emas'}">${lunas?'Lunas 🎉':'Sisa '+formatRupiah(sisa)}</span></div>
        <div class="batang"><div class="${lunas?'hijau':''}" style="width:${p}%"></div></div>
        ${u.catatan?`<div class="teks-kecil teks-abu" style="margin-top:8px;font-style:italic">“${aman(u.catatan)}”</div>`:''}
        <div class="baris" style="margin-top:14px">
          ${!lunas?`<button class="tombol tombol-emas tombol-kecil" onclick="bukaPembayaranUtang('${u.id}')">💰 Catat Pembayaran</button>`:''}
          <button class="tombol tombol-garis tombol-kecil" onclick="bukaFormUtang('${u.id}')">✏️ Ubah</button>
          <button class="tombol tombol-bahaya tombol-kecil" onclick="hapusUtang('${u.id}')">🗑️ Hapus</button></div></div>`;
    }).join('')}
  </div>
  ${!daftar.length ? `<div class="kartu jarak-atas">${kotakKosong('🤝','Bersih Tanpa Beban','Tidak ada catatan utang piutang di sini. Tenang sekali rasanya.')}</div>` : ''}`;
}
function bukaFormUtang(idUbah=''){
  const u = idUbah ? data.utang.find(x=>x.id===idUbah) : null;
  bukaModal(u ? '✏️ Ubah Catatan' : '🤝 Catat Utang / Piutang Baru', `
    <form id="formUtang">
      <div class="isian"><label>Jenis Catatan</label><select id="fuJenis">
        <option value="utang" ${u&&u.jenis==='utang'?'selected':''}>💳 Utang Saya — saya yang berutang</option>
        <option value="piutang" ${u&&u.jenis==='piutang'?'selected':''}>🪙 Piutang Saya — orang lain berutang ke saya</option></select></div>
      <div class="isian"><label>Nama Orang / Keperluan</label><input type="text" id="fuNama" maxlength="50" required value="${u?aman(u.nama):''}" placeholder="mis. Sinta Anggraini"></div>
      <div class="duo">
        <div class="isian"><label>Jumlah Total (Rupiah)</label><input type="text" id="fuJumlah" inputmode="numeric" required value="${u?u.jumlah.toLocaleString('id-ID'):''}" placeholder="mis. 2.000.000"></div>
        <div class="isian"><label>Sudah Terbayar (Rupiah)</label><input type="text" id="fuTerbayar" inputmode="numeric" value="${u?u.terbayar.toLocaleString('id-ID'):''}" placeholder="0"></div>
      </div>
      <div class="duo">
        <div class="isian"><label>Tanggal Mulai</label><input type="date" id="fuTanggal" value="${u?u.tanggal:hariIniISO()}"></div>
        <div class="isian"><label>Jatuh Tempo</label><input type="date" id="fuTempo" value="${u?(u.jatuhTempo||''):''}"></div>
      </div>
      <div class="isian"><label>Catatan</label><input type="text" id="fuCatatan" maxlength="90" value="${u?aman(u.catatan||''):''}" placeholder="Keterangan singkat…"></div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">💾 Simpan Catatan</button></div>
    </form>`);
  beriTitikRibuan($('#fuJumlah')); beriTitikRibuan($('#fuTerbayar'));
  $('#formUtang').addEventListener('submit', e=>{
    e.preventDefault();
    const isi = {jenis:$('#fuJenis').value, nama:$('#fuNama').value.trim(), jumlah:angkaSaja($('#fuJumlah').value),
      terbayar:Math.min(angkaSaja($('#fuTerbayar').value), angkaSaja($('#fuJumlah').value)), tanggal:$('#fuTanggal').value||hariIniISO(),
      jatuhTempo:$('#fuTempo').value, catatan:$('#fuCatatan').value.trim()};
    if(isi.jumlah<=0){ beriTahu('Jumlah total wajib lebih besar dari nol ya.'); return; }
    if(u) Object.assign(u, isi); else data.utang.push({id:idBaru(), ...isi});
    simpanData(); tutupModal(); tampilUlang(); beriTahu('Catatan berhasil disimpan 🤝');
  });
}
function bukaPembayaranUtang(id){
  const u = data.utang.find(x=>x.id===id); if(!u) return;
  const sisa = u.jumlah-u.terbayar;
  bukaModal('💰 Catat Pembayaran — '+aman(u.nama), `
    <form id="formBayar">
      <p class="keterangan-kartu">Pembayaran ini juga tercatat otomatis sebagai ${u.jenis==='utang'?'pengeluaran <b>Pembayaran Utang</b> dari':'pemasukan <b>Penerimaan Piutang</b> ke'} dompet pilihanmu.</p>
      <div class="isian" style="margin-top:14px"><label>Jumlah Dibayar (Rupiah)</label><input type="text" id="fbJumlah" inputmode="numeric" required value="${sisa.toLocaleString('id-ID')}">
      <div class="petunjuk">Sisa saat ini: ${formatRupiah(sisa)}</div></div>
      <div class="duo">
        <div class="isian"><label>${u.jenis==='utang'?'Bayar dari Dompet':'Diterima ke Dompet'}</label><select id="fbDompet">${(data.dompet||[]).map(d=>`<option value="${d.id}">${d.ikon} ${aman(d.nama)} — ${formatRupiah(saldoDompet(d.id))}</option>`).join('')}</select></div>
        <div class="isian"><label>Tanggal</label><input type="date" id="fbTanggal" value="${hariIniISO()}"></div>
      </div>
      <div class="baris" style="justify-content:flex-end"><button type="button" class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
      <button type="submit" class="tombol tombol-emas">💰 Simpan Pembayaran</button></div>
    </form>`);
  beriTitikRibuan($('#fbJumlah'));
  $('#formBayar').addEventListener('submit', e=>{
    e.preventDefault();
    const jumlah = Math.min(angkaSaja($('#fbJumlah').value), sisa);
    if(jumlah<=0){ beriTahu('Jumlah wajib lebih besar dari nol ya.'); return; }
    u.terbayar += jumlah;
    data.transaksi.push({id:idBaru(), jenis: u.jenis==='utang'?'pengeluaran':'pemasukan',
      kategoriId: u.jenis==='utang'?'bayar-utang':'piutang-masuk', dompetId:$('#fbDompet').value, dompetTujuanId:'',
      jumlah, tanggal:$('#fbTanggal').value||hariIniISO(), catatan:(u.jenis==='utang'?'Pembayaran utang: ':'Penerimaan piutang: ')+u.nama, utangId:u.id});
    simpanData(); tutupModal(); tampilUlang();
    beriTahu(u.terbayar>=u.jumlah ? '🎉 LUNAS! Bebas & lega sekali rasanya 👑' : 'Pembayaran berhasil dicatat 💰');
  });
}
function hapusUtang(id){ konfirmasiHapus('Hapus Catatan?', 'Catatan utang piutang ini akan dihapus dari daftarmu.', ()=>{ data.utang=data.utang.filter(u=>u.id!==id); simpanData(); tampilUlang(); beriTahu('Catatan dihapus 🗑️'); }); }

/* ---------------- KALENDER ---------------- */
let bulanKalender = kunciBulanIni(), tanggalTerpilih = hariIniISO();
function tampilKalender(){
  const [th,bl] = bulanKalender.split('-').map(Number);
  const awalBulan = new Date(th, bl-1, 1);
  const geserAwal = (awalBulan.getDay()+6)%7; /* mulai Senin */
  const mulai = new Date(th, bl-1, 1-geserAwal);
  const r = ringkasanBulan(bulanKalender);
  const perHari = {};
  (data.transaksi||[]).forEach(t=>{
    perHari[t.tanggal] = perHari[t.tanggal] || {masuk:0, keluar:0};
    if(t.jenis==='pemasukan') perHari[t.tanggal].masuk += t.jumlah;
    if(t.jenis==='pengeluaran') perHari[t.tanggal].keluar += t.jumlah;
  });
  let selHTML = '';
  for(let i=0;i<42;i++){
    const d = new Date(mulai.getFullYear(), mulai.getMonth(), mulai.getDate()+i);
    const iso = keISO(d), diLuar = d.getMonth()!==bl-1, info = perHari[iso];
    selHTML += `<button class="sel-hari ${diLuar?'luar':''} ${iso===tanggalTerpilih?'terpilih':''} ${iso===hariIniISO()?'hari-ini':''}" onclick="tanggalTerpilih='${iso}';tampilKalender()">
      <span class="angka-hari">${d.getDate()}</span>
      ${info?`<span class="titik-hari">${info.masuk?`<span class="masuk">+${formatRingkas(info.masuk)}</span>`:''}${info.keluar?`<span class="keluar">−${formatRingkas(info.keluar)}</span>`:''}</span>`:''}
    </button>`;
  }
  const transaksiHari = (data.transaksi||[]).filter(t=>t.tanggal===tanggalTerpilih);
  const infoHari = perHari[tanggalTerpilih] || {masuk:0,keluar:0};
  $('#konten').innerHTML = `
  <div class="kisi kisi-utama">
    <div class="kartu">
      <div class="kepala-kartu"><div><h2>📅 ${labelBulan(bulanKalender)}</h2>
        <div class="keterangan-kartu">Masuk <b class="teks-hijau">${formatRupiah(r.masuk)}</b> · Keluar <b class="teks-merah">${formatRupiah(r.keluar)}</b></div></div>
        <div class="baris"><button class="tombol tombol-garis tombol-kecil" onclick="bulanKalender=geserKunciBulan(bulanKalender,-1);tampilKalender()">← Bulan Lalu</button>
        <button class="tombol tombol-garis tombol-kecil" onclick="bulanKalender='${kunciBulanIni()}';tanggalTerpilih='${hariIniISO()}';tampilKalender()">Bulan Ini</button>
        <button class="tombol tombol-garis tombol-kecil" onclick="bulanKalender=geserKunciBulan(bulanKalender,1);tampilKalender()">Bulan Depan →</button></div></div>
      <div class="kisi-kalender">${['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'].map(h=>`<div class="nama-hari">${h}</div>`).join('')}${selHTML}</div>
    </div>
    <div class="kartu">
      <div class="kepala-kartu"><div><h2>🖤 ${formatTanggal(tanggalTerpilih)}</h2>
      <div class="keterangan-kartu">Masuk <b class="teks-hijau">${formatRupiah(infoHari.masuk)}</b> · Keluar <b class="teks-merah">${formatRupiah(infoHari.keluar)}</b></div></div>
      <button class="tombol tombol-emas tombol-kecil" onclick="bukaFormTransaksi()">＋ Tambah</button></div>
      ${transaksiHari.length ? transaksiHari.map(t=>barisTransaksi(t,true)).join('') : kotakKosong('🌙','Hari yang Tenang','Tidak ada transaksi pada tanggal ini.')}
    </div>
  </div>`;
}

/* ---------------- LAPORAN ---------------- */
let bulanLaporan = kunciBulanIni(), tahunLaporan = String(new Date().getFullYear());
function tampilLaporan(){
  const r = ringkasanBulan(bulanLaporan);
  const perKat = pengeluaranPerKategori(bulanLaporan);
  const bulan12 = Array.from({length:12},(_,i)=> tahunLaporan+'-'+dua(i+1));
  const masuk12 = bulan12.map(k=>ringkasanBulan(k).masuk), keluar12 = bulan12.map(k=>ringkasanBulan(k).keluar);
  const totalMasukTahun = masuk12.reduce((a,b)=>a+b,0), totalKeluarTahun = keluar12.reduce((a,b)=>a+b,0);
  const [thLap,blLap] = bulanLaporan.split('-').map(Number);
  const jumlahHari = new Date(thLap, blLap, 0).getDate();
  const rataHarian = r.keluar ? Math.round(r.keluar/jumlahHari) : 0;
  const rasio = r.masuk>0 ? Math.round((r.masuk-r.keluar)/r.masuk*100) : 0;
  const pengeluaranTerkecilBesar = (data.transaksi||[]).filter(t=>t.jenis==='pengeluaran' && kunciBulanDariISO(t.tanggal)===bulanLaporan).sort((a,b)=>b.jumlah-a.jumlah)[0];
  const tahunPilihan = [...new Set([String(new Date().getFullYear()), ...(data.transaksi||[]).map(t=>t.tanggal.slice(0,4))])].sort().reverse();

  $('#konten').innerHTML = `
  <div class="kartu"><div class="kepala-kartu"><div><h2>📊 Laporan Keuangan Pribadi</h2><div class="keterangan-kartu">Gambaran lengkap perjalanan uangmu — hanya untuk matamu</div></div>
    <div class="baris">
      <button class="tombol tombol-garis tombol-kecil" onclick="unduhTabelTransaksi()">⬇️ Unduh Tabel</button>
      <button class="tombol tombol-garis tombol-kecil" onclick="unduhCadangan()">⬇️ Unduh Cadangan</button>
      <button class="tombol tombol-emas tombol-kecil" onclick="window.print()">🖨️ Cetak Laporan</button></div></div>
    <div class="duo" style="max-width:560px">
      <div class="isian" style="margin:0"><label>Laporan Bulan</label><input type="month" id="lapBulan" value="${bulanLaporan}"></div>
      <div class="isian" style="margin:0"><label>Grafik Tahun</label><select id="lapTahun">${tahunPilihan.map(th=>`<option value="${th}" ${th===tahunLaporan?'selected':''}>${th}</option>`).join('')}</select></div>
    </div></div>

  <div class="kisi kisi-4 jarak-atas">
    <div class="kartu statistik"><div class="label">PEMASUKAN ${labelBulan(bulanLaporan).toUpperCase()}</div><div class="nilai teks-hijau">${formatRupiah(r.masuk)}</div></div>
    <div class="kartu statistik"><div class="label">PENGELUARAN ${labelBulan(bulanLaporan).toUpperCase()}</div><div class="nilai teks-merah">${formatRupiah(r.keluar)}</div></div>
    <div class="kartu statistik"><div class="label">SELISIH (SISA BULAN INI)</div><div class="nilai ${r.selisih>=0?'teks-emas':'teks-merah'}">${formatRupiah(r.selisih)}</div></div>
    <div class="kartu statistik"><div class="label">RATA-RATA PENGELUARAN PER HARI</div><div class="nilai">${formatRupiah(rataHarian)}</div></div>
  </div>

  <div class="kartu jarak-atas"><div class="kepala-kartu"><div><h2>📈 Arus Kas Tahun ${tahunLaporan}</h2><div class="keterangan-kartu">Total pemasukan ${formatRupiah(totalMasukTahun)} · Total pengeluaran ${formatRupiah(totalKeluarTahun)} · Sisa ${formatRupiah(totalMasukTahun-totalKeluarTahun)}</div></div></div>
    <div class="bungkus-grafik" style="height:300px"><canvas id="grafikLaporan"></canvas></div>
    <div class="baris" style="margin-top:10px"><span class="item-legenda"><span class="warna" style="background:#3ecf8e"></span>Pemasukan</span><span class="item-legenda"><span class="warna" style="background:#ff6b81"></span>Pengeluaran</span></div></div>

  <div class="kisi kisi-utama jarak-atas">
    <div class="kartu"><div class="kepala-kartu"><div><h2>🍩 Rincian Pengeluaran ${labelBulan(bulanLaporan)}</h2></div></div>
      ${perKat.length ? `<div class="baris" style="align-items:flex-start;gap:22px"><div class="bungkus-donat"><canvas id="donatLaporan"></canvas><div class="pusat-donat"><div class="teks-kecil teks-abu">TOTAL</div><div class="besar">${formatRingkas(r.keluar)}</div><div class="teks-kecil teks-abu">rupiah</div></div></div>
        <div class="legenda">${perKat.map(k=>`<div class="item-legenda"><span class="warna" style="background:${k.warna}"></span>${k.ikon} ${aman(k.nama)}<span class="teks-abu">${persen(k.nilai,r.keluar)}%</span><span class="akhir">${formatRupiah(k.nilai)}</span></div>`).join('')}</div></div>`
      : kotakKosong('🍩','Tidak Ada Pengeluaran','Bulan ini bersih dari pengeluaran. Luar biasa hemat!')}
    </div>
    <div class="kartu kartu-emas-tipis"><div class="kepala-kartu"><div><h2>✨ Wawasan Bulan ${labelBulanSingkat(bulanLaporan)}</h2></div></div>
      <p class="keterangan-kartu" style="line-height:1.85;margin-bottom:11px">🐷 Rasio menabungmu bulan ini <b class="teks-emas">${rasio}%</b>. ${rasio>=20?'Sudah di atas anjuran sehat 20% — pertahankan mahkotamu! 👑': rasio>=0?'Terus tingkatkan perlahan menuju 20% yang sehat ya.':'Pengeluaran melampaui pemasukan — yuk rapikan dengan lembut.'}</p>
      ${pengeluaranTerkecilBesar?`<p class="keterangan-kartu" style="line-height:1.85;margin-bottom:11px">💎 Pengeluaran tunggal terbesarmu: <b>${aman(pengeluaranTerkecilBesar.catatan || cariKategori(pengeluaranTerkecilBesar.kategoriId).nama)}</b> sebesar <b class="teks-emas">${formatRupiah(pengeluaranTerkecilBesar.jumlah)}</b> pada ${formatTanggalSingkat(pengeluaranTerkecilBesar.tanggal)}.</p>`:''}
      ${perKat[0]?`<p class="keterangan-kartu" style="line-height:1.85;margin-bottom:11px">${perKat[0].ikon} Kategori paling menyerap dana: <b>${aman(perKat[0].nama)}</b> (${persen(perKat[0].nilai,r.keluar)}% dari seluruh pengeluaran).</p>`:''}
      <p class="keterangan-kartu" style="line-height:1.85">🖤 Total kekayaanmu saat ini <b class="teks-emas">${formatRupiah(totalKekayaan())}</b> yang tersimpan di ${(data.dompet||[]).length} dompet.</p>
    </div>
  </div>

  <div class="kartu jarak-atas"><div class="kepala-kartu"><div><h2>📅 Ringkasan per Bulan — Tahun ${tahunLaporan}</h2></div></div>
    <div style="overflow-x:auto"><table><thead><tr><th>Bulan</th><th>Pemasukan</th><th>Pengeluaran</th><th>Sisa</th><th>Rasio Menabung</th></tr></thead>
    <tbody>${bulan12.map((k,i)=>{ const m=masuk12[i], kl=keluar12[i]; return `<tr><td class="teks-tebal">${labelBulan(k)}</td><td class="teks-hijau">${formatRupiah(m)}</td><td class="teks-merah">${formatRupiah(kl)}</td><td class="${m-kl>=0?'teks-emas':'teks-merah'} teks-tebal">${formatRupiah(m-kl)}</td><td>${m>0? Math.round((m-kl)/m*100)+'%' : '—'}</td></tr>`;}).join('')}
    <tr><td class="teks-tebal teks-emas">JUMLAH SETAHUN</td><td class="teks-tebal teks-hijau">${formatRupiah(totalMasukTahun)}</td><td class="teks-tebal teks-merah">${formatRupiah(totalKeluarTahun)}</td><td class="teks-tebal teks-emas">${formatRupiah(totalMasukTahun-totalKeluarTahun)}</td><td class="teks-tebal">${totalMasukTahun>0? Math.round((totalMasukTahun-totalKeluarTahun)/totalMasukTahun*100)+'%' : '—'}</td></tr>
    </tbody></table></div></div>`;

  $('#lapBulan').addEventListener('change', e=>{ bulanLaporan = e.target.value || kunciBulanIni(); tampilLaporan(); });
  $('#lapTahun').addEventListener('change', e=>{ tahunLaporan = e.target.value; tampilLaporan(); });
  requestAnimationFrame(()=>{
    gambarGrafikBatang('grafikLaporan', bulan12.map(labelBulanSingkat), masuk12, keluar12);
    if(perKat.length) gambarDonat('donatLaporan', perKat.slice(0,8));
  });
}

/* ---------------- PENGATURAN ---------------- */
function tampilPengaturan(){
  const nama = data.pengaturan.namaPemilik || 'Shakira';
  $('#konten').innerHTML = `
  <div class="kisi kisi-2">
    <div style="display:flex;flex-direction:column;gap:18px">
      <div class="kartu"><div class="kepala-kartu"><div><h2>👑 Profil Pemilik</h2><div class="keterangan-kartu">Satu-satunya orang yang berkuasa di ruang ini</div></div></div>
        <form id="formProfil"><div class="isian"><label>Nama Pemilik</label><input type="text" id="setNama" maxlength="30" value="${aman(nama)}" required></div>
        <button class="tombol tombol-emas" type="submit">💾 Simpan Nama</button></form></div>

      <div class="kartu kartu-emas-tipis"><div class="kepala-kartu"><div><h2>🔒 Keamanan &amp; Kerahasiaan</h2><div class="keterangan-kartu">Ubah kata sandi 6 angkamu secara berkala</div></div></div>
        <form id="formUbahSandi">
          <div class="isian"><label>Kata Sandi Saat Ini</label><input type="password" id="sandiLama" inputmode="numeric" maxlength="6" required placeholder="••••••"></div>
          <div class="duo"><div class="isian"><label>Kata Sandi Baru</label><input type="password" id="sandiBaruSet" inputmode="numeric" maxlength="6" required placeholder="••••••"></div>
          <div class="isian"><label>Ulangi Kata Sandi Baru</label><input type="password" id="sandiBaruUlang" inputmode="numeric" maxlength="6" required placeholder="••••••"></div></div>
          <div class="pesan-salah" id="pesanUbahSandi"></div>
          <div class="baris"><button class="tombol tombol-emas" type="submit">🔐 Ubah Kata Sandi</button>
          <button class="tombol tombol-garis" type="button" onclick="kunciAplikasi()">🔒 Kunci Sekarang</button></div></form></div>

      <div class="kartu"><div class="kepala-kartu"><div><h2>🖤 Tentang Shakira</h2></div></div>
        <p class="keterangan-kartu" style="line-height:1.85"><b class="teks-emas">Shakira 🖤</b> adalah catatan keuangan pribadi yang dibuat hanya untuk satu orang.
        Seluruh data tersimpan <b>hanya di perangkat ini</b> — tidak ada akun, tidak ada peladen, tidak ada yang bisa mengintip.
        Rajin-rajinlah mengunduh cadangan data agar catatan berhargamu tidak hilang saat berganti perangkat ya.</p>
        <p class="keterangan-kartu" style="margin-top:10px">📦 Saat ini tersimpan: <b>${(data.transaksi||[]).length} transaksi</b>, <b>${(data.dompet||[]).length} dompet</b>, <b>${(data.anggaran||[]).length} anggaran</b>, <b>${(data.tujuan||[]).length} tujuan</b>, <b>${(data.utang||[]).length} catatan utang piutang</b>.</p></div>
    </div>

    <div style="display:flex;flex-direction:column;gap:18px">
      <div class="kartu"><div class="kepala-kartu"><div><h2>🏷️ Kategori Buatan Saya</h2><div class="keterangan-kartu">Selain ${KATEGORI_BAWAAN.length} kategori bawaan yang lengkap, kamu bisa menambah kategorimu sendiri</div></div></div>
        <form id="formKategoriBaru">
          <div class="duo"><div class="isian"><label>Nama Kategori</label><input type="text" id="katNama" maxlength="35" required placeholder="mis. Arisan Keluarga"></div>
          <div class="isian"><label>Lambang</label><input type="text" id="katIkon" maxlength="4" value="✨" style="text-align:center;font-size:19px"></div></div>
          <div class="duo"><div class="isian"><label>Jenis</label><select id="katJenis"><option value="pengeluaran">💸 Pengeluaran</option><option value="pemasukan">💚 Pemasukan</option></select></div>
          <div class="isian"><label>Warna</label><select id="katWarna">${WARNA_PILIHAN.map(w=>`<option value="${w}" style="color:${w}">● ${w==='#d4af37'?'Emas':w}</option>`).join('')}</select></div></div>
          <button class="tombol tombol-emas" type="submit">＋ Tambah Kategori</button></form>
        <div style="margin-top:16px">
          ${(data.kategoriKustom||[]).length ? (data.kategoriKustom||[]).map(k=>`<div class="item-transaksi"><div class="ikon-kategori" style="background:${k.warna}22">${k.ikon}</div>
            <div class="tengah"><div class="nama">${aman(k.nama)}</div><div class="rinci">${k.jenis==='pemasukan'?'Pemasukan':'Pengeluaran'}</div></div>
            <button class="tombol-ikon" onclick="hapusKategoriKustom('${k.id}')">🗑️ Hapus</button></div>`).join('')
          : '<p class="keterangan-kartu">Belum ada kategori buatan sendiri.</p>'}
        </div></div>

      <div class="kartu"><div class="kepala-kartu"><div><h2>💾 Cadangan &amp; Berkas</h2><div class="keterangan-kartu">Jaga catatanmu tetap aman selamanya</div></div></div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="tombol tombol-garis-emas" onclick="unduhCadangan()">⬇️ Unduh Cadangan Seluruh Data</button>
          <button class="tombol tombol-garis" onclick="unduhTabelTransaksi()">⬇️ Unduh Tabel Seluruh Transaksi</button>
          <label class="tombol tombol-garis" style="cursor:pointer">⬆️ Pulihkan dari Berkas Cadangan
            <input type="file" id="berkasPulihkan" accept=".json,application/json" class="tersembunyi"></label>
        </div></div>

      <div class="kartu" style="border-color:rgba(255,107,129,.4)"><div class="kepala-kartu"><div><h2>⚠️ Zona Berbahaya</h2><div class="keterangan-kartu">Lakukan dengan hati yang mantap — tidak bisa dibatalkan</div></div></div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="tombol tombol-garis" onclick="muatDataContohBaru()">✨ Ganti dengan Data Contoh Mewah</button>
          <button class="tombol tombol-bahaya" onclick="hapusSemuaData()">🗑️ Hapus Seluruh Data (Kata Sandi Tetap)</button>
          <button class="tombol tombol-bahaya" onclick="aturUlangTotal()">💥 Hapus Segalanya &amp; Mulai dari Awal</button>
        </div></div>
    </div>
  </div>`;

  $('#formProfil').addEventListener('submit', e=>{
    e.preventDefault(); data.pengaturan.namaPemilik = $('#setNama').value.trim() || 'Shakira';
    simpanData(); segarkanProfil(); beriTahu('Nama pemilik berhasil disimpan 👑');
  });
  $('#formUbahSandi').addEventListener('submit', async e=>{
    e.preventDefault();
    const lama = $('#sandiLama').value, baru = $('#sandiBaruSet').value, ulang = $('#sandiBaruUlang').value;
    if((await acakSandi(lama)) !== localStorage.getItem(KUNCI_SANDI)){ $('#pesanUbahSandi').textContent='Kata sandi saat ini salah.'; return; }
    if(!/^\d{6}$/.test(baru)){ $('#pesanUbahSandi').textContent='Kata sandi baru wajib tepat 6 angka.'; return; }
    if(baru!==ulang){ $('#pesanUbahSandi').textContent='Kedua kata sandi baru belum sama.'; return; }
    localStorage.setItem(KUNCI_SANDI, await acakSandi(baru));
    e.target.reset(); $('#pesanUbahSandi').textContent=''; beriTahu('Kata sandi berhasil diubah 🔐');
  });
  $('#formKategoriBaru').addEventListener('submit', e=>{
    e.preventDefault();
    data.kategoriKustom = data.kategoriKustom || [];
    data.kategoriKustom.push({id:'kustom-'+idBaru(), nama:$('#katNama').value.trim(), ikon:$('#katIkon').value.trim()||'✨', jenis:$('#katJenis').value, warna:$('#katWarna').value});
    simpanData(); tampilUlang(); beriTahu('Kategori baru berhasil ditambahkan 🏷️');
  });
  $('#berkasPulihkan').addEventListener('change', e=>{
    const berkas = e.target.files[0]; if(!berkas) return;
    const pembaca = new FileReader();
    pembaca.onload = () => {
      try{
        const hasil = JSON.parse(pembaca.result);
        if(!hasil || !Array.isArray(hasil.transaksi) || !Array.isArray(hasil.dompet)) throw new Error('tidak sah');
        data = Object.assign(dataKosong('Shakira'), hasil);
        simpanData(); segarkanProfil(); tampilUlang(); beriTahu('Data berhasil dipulihkan dari cadangan 🎉');
      }catch(err){ beriTahu('Berkas itu bukan cadangan Shakira yang sah. Coba berkas lain ya.'); }
    };
    pembaca.readAsText(berkas);
  });
}
function hapusKategoriKustom(id){ konfirmasiHapus('Hapus Kategori?', 'Kategori ini akan dihapus. Transaksi lama yang memakainya akan tampil sebagai “Tanpa Kategori”.', ()=>{ data.kategoriKustom=(data.kategoriKustom||[]).filter(k=>k.id!==id); simpanData(); tampilUlang(); beriTahu('Kategori dihapus 🗑️'); }); }
function muatDataContohBaru(){
  bukaModal('✨ Ganti dengan Data Contoh?', `<p class="keterangan-kartu" style="line-height:1.8">Seluruh data saat ini akan <b class="teks-merah"> diganti</b> dengan data contoh mewah untuk enam bulan terakhir. Lanjutkan?</p>
    <div class="baris" style="justify-content:center;margin-top:18px"><button class="tombol tombol-garis" onclick="tutupModal()">Batal</button>
    <button class="tombol tombol-emas" id="yaContoh">Ya, Ganti Sekarang</button></div>`);
  $('#yaContoh').addEventListener('click', ()=>{ data = dataContoh(data.pengaturan.namaPemilik); simpanData(); tutupModal(); tampilUlang(); beriTahu('Data contoh mewah berhasil dimuat ✨'); });
}
function hapusSemuaData(){
  konfirmasiHapus('Hapus Seluruh Data?', 'Semua transaksi, dompet, anggaran, tujuan, dan catatan utang piutang akan <b>hilang selamanya</b>. Kata sandimu tetap sama.', ()=>{
    const nama = data.pengaturan.namaPemilik; data = dataKosong(nama); simpanData(); tampilUlang(); beriTahu('Seluruh data sudah dihapus. Lembaran baru yang bersih 🌱');
  });
}
function aturUlangTotal(){
  konfirmasiHapus('Hapus Segalanya?', 'Data <b>dan kata sandi</b> akan dihapus total dari perangkat ini. Shakira akan mulai lagi dari nol.', ()=>{
    localStorage.removeItem(KUNCI_DATA); localStorage.removeItem(KUNCI_SANDI); sessionStorage.removeItem('shakira_terbuka');
    data = null; location.reload();
  });
}

/* ---------------- Berkas: unduh tabel & cadangan ---------------- */
function unduhBerkas(nama, isi, tipe){
  const gumpal = new Blob([isi], {type:tipe});
  const tautan = document.createElement('a');
  tautan.href = URL.createObjectURL(gumpal); tautan.download = nama; tautan.click();
  setTimeout(()=> URL.revokeObjectURL(tautan.href), 2000);
}
function unduhTabelTransaksi(){
  const baris = [['Tanggal','Jenis','Kategori','Dompet','Dompet Tujuan','Jumlah (Rupiah)','Catatan']];
  [...(data.transaksi||[])].sort((a,b)=>a.tanggal.localeCompare(b.tanggal)).forEach(t=>{
    baris.push([t.tanggal, t.jenis==='pemasukan'?'Pemasukan':t.jenis==='pengeluaran'?'Pengeluaran':'Pindah Dana',
      t.jenis==='pemindahan'?'—':cariKategori(t.kategoriId).nama, cariDompet(t.dompetId).nama,
      t.dompetTujuanId?cariDompet(t.dompetTujuanId).nama:'—', t.jumlah, (t.catatan||'').replace(/"/g,'""')]);
  });
  const isi = '﻿' + baris.map(b=> b.map(x=>`"${x}"`).join(';')).join('\n');
  unduhBerkas('shakira-transaksi-'+hariIniISO()+'.csv', isi, 'text/csv;charset=utf-8');
  beriTahu('Tabel transaksi berhasil diunduh ⬇️');
}
function unduhCadangan(){
  unduhBerkas('cadangan-shakira-'+hariIniISO()+'.json', JSON.stringify(data, null, 2), 'application/json');
  beriTahu('Cadangan seluruh data berhasil diunduh 💾 Simpan di tempat aman ya.');
}

/* ---------------- Gambar grafik (tanpa pustaka luar) ---------------- */
function siapkanKanvas(id){
  const kanvas = document.getElementById(id); if(!kanvas) return null;
  const rasio = window.devicePixelRatio || 1;
  const lebar = kanvas.clientWidth, tinggi = kanvas.clientHeight;
  if(!lebar || !tinggi) return null;
  kanvas.width = lebar*rasio; kanvas.height = tinggi*rasio;
  const ctx = kanvas.getContext('2d'); ctx.scale(rasio, rasio);
  return {ctx, lebar, tinggi};
}
function gambarGrafikBatang(id, label, masukArr, keluarArr){
  const s = siapkanKanvas(id); if(!s) return;
  const {ctx, lebar, tinggi} = s;
  const maks = Math.max(...masukArr, ...keluarArr, 1) * 1.15;
  const dasar = tinggi - 34, puncak = 16, tinggiGrafik = dasar - puncak;
  ctx.font = '10.5px "Plus Jakarta Sans", sans-serif'; ctx.textAlign = 'right';
  for(let i=0;i<=4;i++){
    const y = puncak + tinggiGrafik - (tinggiGrafik*i/4);
    ctx.strokeStyle = 'rgba(255,253,246,.07)'; ctx.beginPath(); ctx.moveTo(48,y); ctx.lineTo(lebar-6,y); ctx.stroke();
    ctx.fillStyle = '#8a8694'; ctx.fillText(formatRingkas(maks*i/4), 43, y+3);
  }
  const lebarKelompok = (lebar-56) / label.length;
  const lebarBatang = Math.min(17, lebarKelompok*0.28);
  label.forEach((lb,i)=>{
    const tengahX = 52 + lebarKelompok*i + lebarKelompok/2;
    [[masukArr[i],'#3ecf8e',-1],[keluarArr[i],'#ff6b81',1]].forEach(([nilai,warna,arah])=>{
      const h = Math.max(2, nilai/maks*tinggiGrafik);
      const x = tengahX + (arah<0 ? -lebarBatang-2 : 2);
      ctx.fillStyle = warna; ctx.beginPath();
      ctx.roundRect(x, dasar-h, lebarBatang, h, [5,5,0,0]); ctx.fill();
    });
    ctx.fillStyle = '#a7a3ad'; ctx.textAlign='center'; ctx.fillText(lb, tengahX, tinggi-12); ctx.textAlign='right';
  });
}
function gambarDonat(id, entri){
  const s = siapkanKanvas(id); if(!s) return;
  const {ctx, lebar, tinggi} = s;
  const total = entri.reduce((a,e)=>a+e.nilai,0); if(!total) return;
  const cx = lebar/2, cy = tinggi/2, r = Math.min(lebar,tinggi)/2 - 8, tebal = r*0.34;
  let sudut = -Math.PI/2;
  entri.forEach(e=>{
    const potong = e.nilai/total * Math.PI*2;
    ctx.beginPath(); ctx.strokeStyle = e.warna; ctx.lineWidth = tebal;
    ctx.arc(cx, cy, r - tebal/2, sudut+0.02, sudut+potong-0.02); ctx.stroke();
    sudut += potong;
  });
}

/* ---------------- Awalan aplikasi ---------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  muatData();
  document.querySelectorAll('#navigasi [data-halaman], #navigasiBawah [data-halaman]').forEach(el=>{
    el.addEventListener('click', ()=> pindahHalaman(el.dataset.halaman));
  });
  $('#tombolKunciAtas').addEventListener('click', kunciAplikasi);
  $('#tombolKunciSamping').addEventListener('click', kunciAplikasi);
  $('#tombolTambahGlobal').addEventListener('click', ()=> bukaFormTransaksi());
  $('#tombolTambahBawah').addEventListener('click', ()=> bukaFormTransaksi());
  $('#tombolTutupModal').addEventListener('click', tutupModal);
  $('#lapisanModal').addEventListener('click', e=>{ if(e.target.id==='lapisanModal') tutupModal(); });
  let tundaCari;
  $('#cariGlobal').addEventListener('input', e=>{
    clearTimeout(tundaCari);
    tundaCari = setTimeout(()=>{ saring.cari = e.target.value; pindahHalaman('transaksi'); }, 500);
  });
  let tundaUkuran;
  window.addEventListener('resize', ()=>{ clearTimeout(tundaUkuran); tundaUkuran=setTimeout(()=>{ if(sesiTerbuka()) tampilUlang(); }, 350); });

  if(localStorage.getItem(KUNCI_SANDI) && sesiTerbuka() && data) masukAplikasi();
  else tampilLayarKunci();
});
