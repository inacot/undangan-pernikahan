
(function () {
  'use strict';

  
     /* 1. CONFIG — object & array of objects
     Ganti data contoh di sini; seluruh halaman ikut berubah otomatis.*/

  const CONFIG = {
    // Tanggal utama (akad). Format ISO: TAHUN-BULAN-TANGGAL T JAM:MENIT:DETIK +ZONA
    tanggalUtama: '2027-03-13T08:00:00+07:00',
    zonaWaktu: 'Asia/Jakarta',
    labelZona: 'WIB',

    mempelaiWanita: {
      nama: 'Aisyah Putri Maharani',
      panggilan: 'Aisyah',
      urutan: 'Putri kedua dari',
      ayah: 'Bapak Dr. ellos rizky., M.Kes',
      ibu: 'Ibu putri ayu., S.pd',
      foto: 'assets/images/bride.jpg',
      instagram: '@ais_ptri'
    },
    mempelaiPria: {
      nama: 'Raka Pratama Putra',
      panggilan: 'Raka',
      urutan: 'Putra pertama dari',
      ayah: 'Bapak Dr. H. Andi Saputra',
      ibu: 'Ibu Dr. Hj. Siti Nurhaliza',
      foto: 'assets/images/groom.jpg',
      instagram: '@rka_pratama'
    },

    kalimatPembuka:
      'Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir dan memberikan doa restu pada hari bahagia kami.',

    // Array of objects: acara
    acara: [
      {
        judul: 'Akad Nikah',
        mulai: '2027-03-13T08:00:00+07:00',
        selesai: '2027-03-13T10:00:00+07:00',
        lokasi: 'Masjid Al-Ikhlas',
        alamat: 'Jl. Ngagel Wasana III No.2, Baratajaya, Kec. Gubeng, Surabaya, Jawa Timur 60284'
      },
      {
        judul: 'Resepsi',
        mulai: '2027-03-13T11:00:00+07:00',
        selesai: '2027-03-13T14:00:00+07:00',
        lokasi: 'Gedung Serbaguna',
        alamat: 'Jl. Ahmad Yani No.146-148, RT.006/RW.02, Gayungan, Kec. Gayungan, Surabaya, Jawa Timur 60235'
      }
    ],

    // Array of objects: kutipan / doa
    kutipan: [
      {
        teks: 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
        sumber: 'QS. Ar-Rum: 21'
      },
      {
        teks: 'Semoga Allah memberkahimu, memberkahi atasmu, dan mengumpulkan kalian berdua dalam kebaikan.',
        sumber: 'Doa untuk pengantin (HR. Abu Dawud & At-Tirmidzi)'
      },
      {
        teks: 'Cinta bukan tentang menemukan seseorang yang sempurna, tetapi belajar menyempurnakan bersama.',
        sumber: 'Kutipan pernikahan'
      },
      {
        teks: 'Semoga rumah tangga ini menjadi tempat pulang yang hangat, penuh sakinah, mawaddah, dan rahmah.',
        sumber: 'Doa untuk kedua mempelai'
      }
    ],

    // Array of objects: timeline kisah cinta (foto opsional: isi path atau kosongkan)
    kisah: [
      { tahun: '2019', judul: 'Pertama Bertemu', deskripsi: 'Kami bertemu pertama kali di sebuah acara kampus. Awalnya hanya saling menyapa singkat.', foto: '' },
      { tahun: '2020', judul: 'Mulai Mengenal', deskripsi: 'Obrolan demi obrolan membuat kami menyadari banyak kesamaan dan saling nyaman.', foto: '' },
      { tahun: '2022', judul: 'Menjalin Hubungan', deskripsi: 'Kami memutuskan berjalan bersama, saling mendukung dalam suka maupun duka.', foto: '' },
      { tahun: '2026', judul: 'Lamaran', deskripsi: 'Dengan restu keluarga, kami melangkah ke jenjang yang lebih serius.', foto: '' },
      { tahun: '2027', judul: 'Menuju Hari Pernikahan', deskripsi: 'Kini kami bersiap memulai babak baru dan berharap Anda hadir berbagi kebahagiaan.', foto: '' }
    ],

    // Array of objects: galeri (ganti file di assets/images dengan fotomu, nama file sama)
    galeri: [
      { src: 'assets/images/gallery-1.jpg', alt: 'Foto galeri 1', caption: 'Foto 1' },
      { src: 'assets/images/gallery-2.jpg', alt: 'Foto galeri 2', caption: 'Foto 2' },
      { src: 'assets/images/gallery-3.jpg', alt: 'Foto galeri 3', caption: 'Foto 3' },
      { src: 'assets/images/gallery-4.jpg', alt: 'Foto galeri 4', caption: 'Foto 4' },
      { src: 'assets/images/gallery-5.jpg', alt: 'Foto galeri 5', caption: 'Foto 5' },
      { src: 'assets/images/gallery-6.jpg', alt: 'Foto galeri 6', caption: 'Foto 6' }
    ],

    // Array of objects: hadiah (PLACEHOLDER, bukan rekening asli)
    hadiah: [
      { bank: 'Bank BRI', pemilik: 'a.n. aisyah putri', nomor: '1234 5678 9102' },
      { bank: 'Bank Seabank', pemilik: 'a.n. raka pratama', nomor: '1111 2111 3111' }
    ],

    maksTamu: 10,
    kunciRSVP: 'undangan_rsvp',
    kunciUcapan: 'undangan_ucapan'
  };

  // Gambar pengganti jika file foto gagal dimuat (data URI SVG sederhana)
  const FALLBACK_SRC =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">' +
      '<rect width="100%" height="100%" fill="#f1dede"/>' +
      '<text x="50%" y="50%" text-anchor="middle" font-family="serif" font-size="40" fill="#5c4a42">Foto belum tersedia</text>' +
      '</svg>'
    );

  /* ===================================================================
     2. UTILITAS
     =================================================================== */
  // Pintasan pengambil elemen (arrow function)
  const $ = (id) => document.getElementById(id);

  // Variabel dengan let karena nilainya berubah
  let toastTimer = null;       // menyimpan ID setTimeout notifikasi
  let countdownTimer = null;   // menyimpan ID setInterval countdown
  let lightboxIndex = -1;      // foto galeri yang sedang dibuka
  let lastFocused = null;      // elemen yang fokus sebelum lightbox dibuka

  /** Membaca array dari LocalStorage. Mengembalikan [] jika kosong/gagal. */
  function readStorage(key) {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('Gagal membaca LocalStorage:', err.message);
      return [];
    }
  }

  /** Menyimpan array ke LocalStorage. Mengembalikan true jika berhasil. */
  function writeStorage(key, data) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('Gagal menyimpan ke LocalStorage:', err.message);
      return false;
    }
  }

  /** Menampilkan notifikasi singkat, lalu menyembunyikannya dengan setTimeout. */
  function showNotification(message, type) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.remove('success', 'error', 'show');
    toast.classList.add(type === 'error' ? 'error' : 'success');
    // paksa browser menghitung ulang agar animasi berulang tiap kali
    void toast.offsetWidth;
    toast.classList.add('show');

    // cegah timer menumpuk jika fungsi dipanggil berulang
    if (toastTimer !== null) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      toastTimer = null;
    }, 3000); // 3000 milidetik = 3 detik
  }

  /** Menyalin teks ke clipboard (Clipboard API + cadangan execCommand). */
  async function copyText(text, successMessage) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(area);
        if (!ok) throw new Error('execCommand gagal');
      }
      showNotification(successMessage, 'success');
    } catch (err) {
      console.error('Gagal menyalin:', err.message);
      showNotification('Gagal menyalin. Silakan salin secara manual.', 'error');
    }
  }

  /** Jika gambar gagal dimuat, pakai gambar pengganti (hanya sekali). */
  function attachImageFallback(img) {
    img.addEventListener('error', () => {
      if (img.dataset.fallback === '1') return;
      img.dataset.fallback = '1';
      console.warn('Gambar tidak ditemukan:', img.getAttribute('src'));
      img.src = FALLBACK_SRC;
    });
  }

  /** Memformat tanggal panjang bahasa Indonesia, mis. "Sabtu, 13 Maret 2027". */
  function formatTanggal(isoString) {
    const d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return 'Tanggal belum valid';
    return d.toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
      timeZone: CONFIG.zonaWaktu
    });
  }

  /** Memformat jam, mis. "08.00". */
  function formatJam(isoString) {
    const d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return '--.--';
    return d.toLocaleTimeString('id-ID', {
      hour: '2-digit', minute: '2-digit', timeZone: CONFIG.zonaWaktu
    });
  }

  /** Menambah angka nol di depan: 5 -> "05" */
  function pad(number) {
    return String(number).padStart(2, '0');
  }

  /** Membuat elemen dengan class dan teks (aman: memakai textContent). */
  function buat(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  /* ===================================================================
     3. FITUR
     =================================================================== */

  /* ---------- Data dari CONFIG ke halaman (DOM: textContent) ---------- */
  function isiDataUtama() {
    const w = CONFIG.mempelaiWanita;
    const p = CONFIG.mempelaiPria;
    // Pengantin pria dulu atau wanita dulu? Di sini: wanita & pria (ubah jika perlu)
    const namaPasangan = w.panggilan + ' & ' + p.panggilan;
    const tanggal = formatTanggal(CONFIG.tanggalUtama);

    $('coverNames').textContent = namaPasangan;
    $('heroNames').textContent = namaPasangan;
    $('footerNames').textContent = namaPasangan;
    $('navBrand').textContent = w.panggilan.charAt(0) + ' & ' + p.panggilan.charAt(0);
    $('coverDate').textContent = tanggal;
    $('heroDate').textContent = tanggal;
    $('footerDate').textContent = tanggal;
    $('heroText').textContent = CONFIG.kalimatPembuka;
    $('year').textContent = String(new Date(CONFIG.tanggalUtama).getFullYear() || new Date().getFullYear());
    document.title = 'The Wedding of ' + namaPasangan;

    // Nama tamu dari parameter URL: index.html?to=Nama%20Tamu
    const params = new URLSearchParams(window.location.search);
    const tamu = params.get('to');
    if (tamu !== null && tamu.trim() !== '') {
      $('coverGuest').textContent = tamu.trim().slice(0, 60);
      $('rsvpName').value = tamu.trim().slice(0, 60);
    }

    // Kartu profil
    isiProfil('bride', w);
    isiProfil('groom', p);
  }

  function isiProfil(prefix, data) {
    $(prefix + 'Name').textContent = data.nama;
    $(prefix + 'Order').textContent = data.urutan;
    $(prefix + 'Parents').textContent = data.ayah + ' & ' + data.ibu;
    $(prefix + 'Social').textContent = data.instagram ? 'Instagram: ' + data.instagram : '';
    const img = $(prefix + 'Img');
    img.src = data.foto;
    img.alt = 'Foto ' + data.nama + ' (contoh)';
  }

  /* ---------- Sampul: tombol Buka Undangan ---------- */
  function setupCover() {
    const cover = $('cover');
    const openBtn = $('openBtn');

    openBtn.addEventListener('click', () => {
      console.log('Tombol "Buka Undangan" diklik: sampul ditutup, konten ditampilkan');
      cover.classList.add('is-open');                 // animasi naik/menghilang
      document.body.classList.remove('locked');       // scroll aktif lagi
      document.body.classList.add('opened');          // tampilkan navigasi
      window.scrollTo(0, 0);
      // setelah animasi selesai, sembunyikan sepenuhnya agar tidak menghalangi
      setTimeout(() => {
        cover.hidden = true;
      }, 900);
    });
  }

  /* ---------- Navigasi: hamburger + menu aktif ---------- */
  function setupNavigation() {
    const toggle = $('menuToggle');
    const menu = $('navMenu');
    const links = document.querySelectorAll('.nav-link');

    toggle.addEventListener('click', () => {
      const terbuka = menu.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(terbuka));
      toggle.setAttribute('aria-label', terbuka ? 'Tutup menu' : 'Buka menu');
    });

    // tutup menu ketika salah satu tautan diklik
    links.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu');
      });
    });

    // tandai menu aktif sesuai bagian yang sedang terlihat
    const sections = ['home', 'mempelai', 'acara', 'kisah', 'galeri', 'rsvp', 'hadiah', 'ucapan']
      .map((id) => $(id))
      .filter((el) => el !== null);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => observer.observe(s));
    }
  }

  /* ---------- Animasi muncul saat di-scroll ---------- */
  function setupReveal() {
    document.documentElement.classList.add('js');
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- Countdown ---------- */
  /**
   * Menghitung selisih waktu lalu memperbarui 4 kotak countdown.
   * Rumus: 1 detik = 1000 ms; 1 menit = 60 detik; 1 jam = 3600 detik; 1 hari = 86400 detik.
   * Operator % (sisa bagi) dipakai agar jam < 24, menit < 60, detik < 60.
   */
  function updateCountdown() {
    const target = new Date(CONFIG.tanggalUtama).getTime();

    // Tanggal tidak valid -> getTime() menghasilkan NaN
    if (Number.isNaN(target)) {
      console.error('Tanggal pernikahan tidak valid:', CONFIG.tanggalUtama);
      $('cdMessage').textContent = 'Tanggal pernikahan belum valid. Periksa CONFIG.tanggalUtama.';
      stopCountdown();
      return;
    }

    const selisih = target - Date.now(); // milidetik

    if (selisih <= 0) {
      tampilkanCountdown(0, 0, 0, 0); // hindari angka negatif
      $('cdMessage').textContent = 'Acara pernikahan telah berlangsung. Terima kasih atas doa Anda.';
      stopCountdown();
      return;
    }

    const totalDetik = Math.floor(selisih / 1000);
    const hari = Math.floor(totalDetik / 86400);
    const jam = Math.floor((totalDetik % 86400) / 3600);
    const menit = Math.floor((totalDetik % 3600) / 60);
    const detik = totalDetik % 60;
    tampilkanCountdown(hari, jam, menit, detik);
  }

  function tampilkanCountdown(hari, jam, menit, detik) {
    $('cd-days').textContent = pad(hari);
    $('cd-hours').textContent = pad(jam);
    $('cd-minutes').textContent = pad(menit);
    $('cd-seconds').textContent = pad(detik);
  }

  function stopCountdown() {
    if (countdownTimer !== null) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      console.log('Countdown dihentikan');
    }
  }

  function startCountdown() {
    if (countdownTimer !== null) return; // jangan buat timer ganda
    updateCountdown();                   // tampilkan nilai awal tanpa menunggu 1 detik
    const target = new Date(CONFIG.tanggalUtama).getTime();
    if (!Number.isNaN(target) && target > Date.now()) {
      countdownTimer = setInterval(updateCountdown, 1000); // 1000 ms = 1 detik
      console.log('Countdown berjalan');
    }
  }

  /* ---------- Acara: kartu, Maps, salin alamat, kalender ---------- */
  function urlMaps(acara) {
    return 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(acara.lokasi + ' ' + acara.alamat);
  }

  /** Format tanggal untuk file kalender (.ics), waktu UTC: 20270313T010000Z */
  function formatICS(isoString) {
    return new Date(isoString).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }

  function unduhKalender(acara) {
    if (Number.isNaN(new Date(acara.mulai).getTime())) {
      showNotification('Tanggal acara belum valid.', 'error');
      return;
    }
    const baris = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Undangan Pernikahan//ID',
      'BEGIN:VEVENT',
      'UID:' + formatICS(acara.mulai) + '-' + acara.judul.replace(/\s+/g, '') + '@undangan.contoh',
      'DTSTAMP:' + formatICS(new Date().toISOString()),
      'DTSTART:' + formatICS(acara.mulai),
      'DTEND:' + formatICS(acara.selesai),
      'SUMMARY:' + acara.judul + ' - ' + CONFIG.mempelaiWanita.panggilan + ' & ' + CONFIG.mempelaiPria.panggilan,
      'LOCATION:' + (acara.lokasi + ', ' + acara.alamat).replace(/,/g, '\\,'),
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    const blob = new Blob([baris.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = acara.judul.toLowerCase().replace(/\s+/g, '-') + '.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('File kalender diunduh. Buka file untuk menambahkannya.', 'success');
  }

  function renderAcara() {
    const wadah = $('eventList');
    wadah.textContent = '';

    CONFIG.acara.forEach((acara) => {
      const kartu = buat('article', 'event-card reveal');
      kartu.appendChild(buat('h3', 'event-title', acara.judul));
      kartu.appendChild(buat('p', 'event-date', formatTanggal(acara.mulai)));
      kartu.appendChild(buat('p', 'event-time',
        formatJam(acara.mulai) + ' – ' + formatJam(acara.selesai) + ' ' + CONFIG.labelZona));
      kartu.appendChild(buat('p', 'event-place', acara.lokasi));
      kartu.appendChild(buat('p', 'event-address', acara.alamat));

      const baris = buat('div', 'btn-row center');

      const maps = buat('a', 'btn btn-small btn-primary', 'Buka Google Maps');
      maps.href = urlMaps(acara);
      maps.target = '_blank';
      maps.rel = 'noopener noreferrer';

      const salin = buat('button', 'btn btn-small btn-outline', 'Salin Alamat');
      salin.type = 'button';
      salin.addEventListener('click', () => {
        copyText(acara.lokasi + ', ' + acara.alamat, 'Alamat ' + acara.judul + ' berhasil disalin');
      });

      const kalender = buat('button', 'btn btn-small btn-outline', 'Tambahkan ke Kalender');
      kalender.type = 'button';
      kalender.addEventListener('click', () => unduhKalender(acara));

      baris.append(maps, salin, kalender);
      kartu.appendChild(baris);
      wadah.appendChild(kartu);
    });
  }

  /* ---------- Kutipan: tombol Ganti Kutipan ---------- */
  let kutipanSekarang = 0;

  function tampilkanKutipan(index) {
    const item = CONFIG.kutipan[index];
    $('quoteText').textContent = '“' + item.teks + '”';
    $('quoteSource').textContent = item.sumber;
  }

  function setupKutipan() {
    tampilkanKutipan(kutipanSekarang);
    $('quoteBtn').addEventListener('click', () => {
      if (CONFIG.kutipan.length < 2) return; // tidak ada pilihan lain
      let baru;
      // do-while: acak minimal sekali, ulangi sampai berbeda dari kutipan sekarang
      do {
        baru = Math.floor(Math.random() * CONFIG.kutipan.length);
      } while (baru === kutipanSekarang);
      kutipanSekarang = baru;
      tampilkanKutipan(kutipanSekarang);
    });
  }

  /* ---------- Timeline kisah cinta (dibuat dari array lewat DOM) ---------- */
  function renderKisah() {
    const daftar = $('timeline');
    daftar.textContent = '';

    CONFIG.kisah.forEach((item, i) => {
      const li = buat('li', 'tl-item reveal ' + (i % 2 === 0 ? 'tl-left' : 'tl-right'));
      const kartu = buat('div', 'tl-card');
      kartu.appendChild(buat('span', 'tl-year', item.tahun));
      kartu.appendChild(buat('h3', 'tl-title', item.judul));
      kartu.appendChild(buat('p', 'tl-desc', item.deskripsi));
      if (item.foto) {
        const img = buat('img', 'tl-photo');
        img.src = item.foto;
        img.alt = 'Foto: ' + item.judul;
        img.loading = 'lazy';
        attachImageFallback(img);
        kartu.appendChild(img);
      }
      li.appendChild(buat('span', 'tl-dot'));
      li.appendChild(kartu);
      daftar.appendChild(li);
    });
  }

  /* ---------- Galeri + Lightbox ---------- */
  function renderGaleri() {
    const grid = $('galleryGrid');
    grid.textContent = '';

    // perulangan for klasik untuk menampilkan data galeri
    for (let i = 0; i < CONFIG.galeri.length; i++) {
      const foto = CONFIG.galeri[i];
      const tombol = buat('button', 'gallery-item reveal');
      tombol.type = 'button';
      tombol.setAttribute('aria-label', 'Buka foto: ' + foto.caption);

      const img = buat('img');
      img.src = foto.src;
      img.alt = foto.alt;
      img.loading = 'lazy';
      attachImageFallback(img);

      tombol.appendChild(img);
      tombol.addEventListener('click', () => bukaLightbox(i));
      grid.appendChild(tombol);
    }
  }

  function tampilkanFotoLightbox() {
    const foto = CONFIG.galeri[lightboxIndex];
    const img = $('lightboxImg');
    img.dataset.fallback = '';
    img.src = foto.src;
    img.alt = foto.alt;
    $('lightboxCaption').textContent =
      foto.caption + ' (' + (lightboxIndex + 1) + '/' + CONFIG.galeri.length + ')';
  }

  function bukaLightbox(index) {
    lastFocused = document.activeElement;
    lightboxIndex = index;
    tampilkanFotoLightbox();
    const lb = $('lightbox');
    lb.hidden = false;
    lb.classList.add('open');
    document.body.classList.add('no-scroll');
    $('lbClose').focus();
  }

  function tutupLightbox() {
    const lb = $('lightbox');
    lb.classList.remove('open');
    lb.hidden = true;
    document.body.classList.remove('no-scroll');
    lightboxIndex = -1;
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function geserLightbox(arah) {
    if (lightboxIndex < 0) return;
    const total = CONFIG.galeri.length;
    // % dipakai agar kembali ke awal/akhir (looping)
    lightboxIndex = (lightboxIndex + arah + total) % total;
    tampilkanFotoLightbox();
  }

  function setupLightbox() {
    attachImageFallback($('lightboxImg'));
    $('lbClose').addEventListener('click', tutupLightbox);
    $('lbPrev').addEventListener('click', () => geserLightbox(-1));
    $('lbNext').addEventListener('click', () => geserLightbox(1));

    // klik area gelap di luar foto untuk menutup
    $('lightbox').addEventListener('click', (e) => {
      if (e.target === $('lightbox')) tutupLightbox();
    });

    // keyboard: Esc menutup, panah kiri/kanan berpindah foto
    document.addEventListener('keydown', (e) => {
      if (lightboxIndex < 0) return;
      if (e.key === 'Escape') tutupLightbox();
      else if (e.key === 'ArrowLeft') geserLightbox(-1);
      else if (e.key === 'ArrowRight') geserLightbox(1);
    });

    // geser jari di HP
    let sentuhAwal = null;
    $('lightbox').addEventListener('touchstart', (e) => {
      sentuhAwal = e.changedTouches[0].clientX;
    }, { passive: true });
    $('lightbox').addEventListener('touchend', (e) => {
      if (sentuhAwal === null) return;
      const jarak = e.changedTouches[0].clientX - sentuhAwal;
      if (Math.abs(jarak) > 50) geserLightbox(jarak > 0 ? -1 : 1);
      sentuhAwal = null;
    }, { passive: true });
  }

  /* ---------- Hadiah ---------- */
  function renderHadiah() {
    const wadah = $('giftList');
    wadah.textContent = '';
    CONFIG.hadiah.forEach((item) => {
      const kartu = buat('article', 'gift-card reveal');
      kartu.appendChild(buat('h3', 'gift-bank', item.bank));
      kartu.appendChild(buat('p', 'gift-number', item.nomor));
      kartu.appendChild(buat('p', 'gift-owner', item.pemilik));
      const tombol = buat('button', 'btn btn-small btn-primary', 'Salin Nomor Rekening');
      tombol.type = 'button';
      tombol.addEventListener('click', () => {
        // hapus spasi agar mudah ditempel di aplikasi bank
        copyText(item.nomor.replace(/\s/g, ''), 'Nomor rekening ' + item.bank + ' berhasil disalin');
      });
      kartu.appendChild(tombol);
      wadah.appendChild(kartu);
    });
  }

  /* ---------- RSVP ---------- */

  /**
   * Mengubah kode status menjadi label dan class CSS (memakai switch).
   * @param {string} status - 'hadir' | 'tidak' | 'ragu'
   * @returns {{label: string, kelas: string}}
   */
  function describeStatus(status) {
    switch (status) {
      case 'hadir':
        return { label: 'Hadir', kelas: 'status-hadir' };
      case 'tidak':
        return { label: 'Tidak Hadir', kelas: 'status-tidak' };
      case 'ragu':
        return { label: 'Belum Pasti', kelas: 'status-ragu' };
      default:
        return { label: 'Tidak diketahui', kelas: '' };
    }
  }

  function setError(id, message) {
    const el = $(id);
    el.textContent = message;
    // class "invalid" pada input memberi garis merah
    const inputId = id.replace('err-', '');
    const input = $(inputId);
    if (input) input.classList.toggle('invalid', message !== '');
  }

  function clearErrors(ids) {
    ids.forEach((id) => setError(id, ''));
  }

  /**
   * Memvalidasi data RSVP.
   * @param {object} data - { nama, telepon, status, jumlah (number), catatan }
   * @returns {object} { valid: boolean, errors: object }
   * Fungsi ini juga menyesuaikan data.jumlah secara logis sesuai status.
   */
  function validateRSVP(data) {
    const errors = {};

    if (data.nama.length === 0) {
      errors.nama = 'Nama wajib diisi.';
    } else if (data.nama.length < 2) {
      errors.nama = 'Nama minimal 2 karakter.';
    }

    if (data.telepon !== '' && !/^[0-9+\-\s]{8,20}$/.test(data.telepon)) {
      errors.telepon = 'Nomor telepon tidak valid (hanya angka, +, - dan spasi).';
    }

    if (data.status === '') {
      errors.status = 'Silakan pilih status kehadiran.';
    } else if (data.status === 'hadir') {
      // Hadir: jumlah harus bilangan bulat 1..maksTamu
      if (!Number.isInteger(data.jumlah)) {
        errors.jumlah = 'Jumlah tamu harus berupa angka bulat.';
      } else if (data.jumlah <= 0) {
        errors.jumlah = 'Jika hadir, jumlah tamu minimal 1.';
      } else if (data.jumlah > CONFIG.maksTamu) {
        errors.jumlah = 'Jumlah tamu maksimal ' + CONFIG.maksTamu + ' orang.';
      }
    } else if (data.status === 'tidak') {
      data.jumlah = 0; // tidak hadir -> otomatis nol
    } else {
      // belum pasti: tidak dihitung sebagai hadir, tapi angka tetap tidak boleh negatif
      if (!Number.isInteger(data.jumlah) || data.jumlah < 0) {
        errors.jumlah = 'Jumlah tamu tidak boleh negatif.';
      }
    }

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  /** Mengambil nilai form RSVP menjadi object */
  function bacaFormRSVP() {
    const terpilih = document.querySelector('input[name="status"]:checked');
    const mentah = $('rsvpCount').value.trim();
    return {
      nama: $('rsvpName').value.trim(),
      telepon: $('rsvpPhone').value.trim(),
      status: terpilih ? terpilih.value : '',
      // Number('') = 0, jadi kolom kosong dianggap NaN agar ketahuan
      jumlah: mentah === '' ? NaN : Number(mentah),
      catatan: $('rsvpNote').value.trim()
    };
  }

  function renderRSVP() {
    const data = readStorage(CONFIG.kunciRSVP);
    const daftar = $('rsvpList');
    daftar.textContent = '';

    // arrow function + filter/map/reduce untuk ringkasan
    const hadir = data.filter((r) => r.status === 'hadir');
    const totalHadir = hadir.map((r) => r.jumlah).reduce((a, b) => a + b, 0);
    const jumlahRagu = data.filter((r) => r.status === 'ragu').length;
    const jumlahTidak = data.filter((r) => r.status === 'tidak').length;

    $('rsvpSummary').textContent = data.length === 0
      ? 'Belum ada RSVP tersimpan di browser ini.'
      : 'Hadir: ' + totalHadir + ' orang (' + hadir.length + ' konfirmasi) · Tidak hadir: ' +
        jumlahTidak + ' · Belum pasti: ' + jumlahRagu;

    data.forEach((r) => {
      const info = describeStatus(r.status);
      const li = buat('li', 'entry');
      const kepala = buat('div', 'entry-head');
      kepala.appendChild(buat('strong', 'entry-name', r.nama));
      kepala.appendChild(buat('span', 'badge ' + info.kelas, info.label));
      li.appendChild(kepala);
      if (r.status === 'hadir') li.appendChild(buat('p', 'entry-meta', 'Jumlah tamu: ' + r.jumlah));
      if (r.catatan) li.appendChild(buat('p', 'entry-text', r.catatan));
      daftar.appendChild(li);
    });
  }

  function setupRSVP() {
    const form = $('rsvpForm');
    const countInput = $('rsvpCount');
    const idError = ['err-rsvpName', 'err-rsvpPhone', 'err-rsvpStatus', 'err-rsvpCount'];

    // event "change" pada radio: sesuaikan kolom jumlah tamu secara logis
    document.querySelectorAll('input[name="status"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.value === 'tidak') {
          countInput.value = '0';
          countInput.disabled = true;
        } else {
          countInput.disabled = false;
          if (radio.value === 'hadir' && Number(countInput.value) < 1) countInput.value = '1';
        }
        setError('err-rsvpStatus', '');
      });
    });

    // event "input": hapus pesan error saat pengguna mulai memperbaiki
    $('rsvpName').addEventListener('input', () => setError('err-rsvpName', ''));
    $('rsvpPhone').addEventListener('input', () => setError('err-rsvpPhone', ''));
    countInput.addEventListener('input', () => setError('err-rsvpCount', ''));

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // cegah halaman reload
      $('rsvpSuccess').textContent = '';
      clearErrors(idError);

      const data = bacaFormRSVP();
      const hasil = validateRSVP(data);

      if (!hasil.valid) {
        // tampilkan pesan di dekat input yang bermasalah
        if (hasil.errors.nama) setError('err-rsvpName', hasil.errors.nama);
        if (hasil.errors.telepon) setError('err-rsvpPhone', hasil.errors.telepon);
        if (hasil.errors.status) setError('err-rsvpStatus', hasil.errors.status);
        if (hasil.errors.jumlah) setError('err-rsvpCount', hasil.errors.jumlah);
        console.warn('Validasi RSVP gagal:', hasil.errors);
        showNotification('Periksa kembali isian formulir.', 'error');
        return; // data TIDAK disimpan
      }

      console.log('Form RSVP berhasil divalidasi');
      const semua = readStorage(CONFIG.kunciRSVP);
      semua.push({
        nama: data.nama,
        telepon: data.telepon,
        status: data.status,
        jumlah: data.jumlah,
        catatan: data.catatan,
        waktu: new Date().toISOString()
      });

      if (writeStorage(CONFIG.kunciRSVP, semua)) {
        const info = describeStatus(data.status);
        $('rsvpSuccess').textContent =
          'Terima kasih, ' + data.nama + '! Konfirmasi "' + info.label + '" tersimpan di browser ini.';
        showNotification('RSVP berhasil disimpan', 'success');
        form.reset();
        countInput.disabled = false;
        countInput.value = '1';
        renderRSVP();
      } else {
        showNotification('Gagal menyimpan. LocalStorage mungkin dinonaktifkan.', 'error');
      }
    });

    $('rsvpClear').addEventListener('click', () => {
      if (readStorage(CONFIG.kunciRSVP).length === 0) {
        showNotification('Belum ada data RSVP.', 'error');
        return;
      }
      if (window.confirm('Hapus semua data RSVP di browser ini?')) {
        writeStorage(CONFIG.kunciRSVP, []);
        renderRSVP();
        showNotification('Data RSVP dihapus', 'success');
      }
    });
  }

  /* ---------- Buku tamu ---------- */
  function validateGuestbook(nama, pesan) {
    const errors = {};
    if (nama === '') errors.nama = 'Nama wajib diisi.';
    else if (nama.length > 40) errors.nama = 'Nama maksimal 40 karakter.';

    if (pesan === '') errors.pesan = 'Ucapan wajib diisi.';
    else if (pesan.length < 5) errors.pesan = 'Ucapan minimal 5 karakter.';
    else if (pesan.length > 300) errors.pesan = 'Ucapan maksimal 300 karakter.';

    return { valid: Object.keys(errors).length === 0, errors: errors };
  }

  /** Menyimpan satu ucapan baru. Mengembalikan true jika berhasil tersimpan. */
  function saveGuestbook(nama, pesan) {
    const semua = readStorage(CONFIG.kunciUcapan);
    semua.push({ id: Date.now(), nama: nama, pesan: pesan, waktu: new Date().toISOString() });
    return writeStorage(CONFIG.kunciUcapan, semua);
  }

  function hapusUcapan(id) {
    // filter menghasilkan array baru tanpa ucapan yang dihapus
    const sisa = readStorage(CONFIG.kunciUcapan).filter((u) => u.id !== id);
    writeStorage(CONFIG.kunciUcapan, sisa);
    renderGuestbook();
    showNotification('Ucapan dihapus', 'success');
  }

  function renderGuestbook() {
    const data = readStorage(CONFIG.kunciUcapan);
    const daftar = $('guestList');
    daftar.textContent = '';
    $('guestTotal').textContent = String(data.length);

    if (data.length === 0) {
      daftar.appendChild(buat('li', 'entry empty', 'Belum ada ucapan. Jadilah yang pertama!'));
      return;
    }

    // tampilkan dari yang terbaru (loop mundur memakai for)
    for (let i = data.length - 1; i >= 0; i--) {
      const u = data[i];
      const li = buat('li', 'entry');
      const kepala = buat('div', 'entry-head');
      kepala.appendChild(buat('strong', 'entry-name', u.nama));
      const hapus = buat('button', 'link-btn', 'Hapus');
      hapus.type = 'button';
      hapus.setAttribute('aria-label', 'Hapus ucapan dari ' + u.nama);
      hapus.addEventListener('click', () => hapusUcapan(u.id));
      kepala.appendChild(hapus);
      li.appendChild(kepala);
      li.appendChild(buat('p', 'entry-text', u.pesan));   // textContent -> aman dari XSS
      daftar.appendChild(li);
    }
  }

  function setupGuestbook() {
    const form = $('guestForm');
    const nameInput = $('guestName');
    const msgInput = $('guestMessage');
    const counter = $('guestCounter');

    // event "input": penghitung karakter + hapus pesan error
    msgInput.addEventListener('input', () => {
      counter.textContent = msgInput.value.length + ' / 300';
      setError('err-guestMessage', '');
    });
    nameInput.addEventListener('input', () => setError('err-guestName', ''));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      $('guestSuccess').textContent = '';
      clearErrors(['err-guestName', 'err-guestMessage']);

      const nama = nameInput.value.trim();
      const pesan = msgInput.value.trim();
      const hasil = validateGuestbook(nama, pesan);

      if (!hasil.valid) {
        if (hasil.errors.nama) setError('err-guestName', hasil.errors.nama);
        if (hasil.errors.pesan) setError('err-guestMessage', hasil.errors.pesan);
        console.warn('Validasi buku tamu gagal:', hasil.errors);
        return;
      }

      if (saveGuestbook(nama, pesan)) {
        console.log('Ucapan baru tersimpan');
        $('guestSuccess').textContent = 'Terima kasih atas ucapan dan doanya, ' + nama + '!';
        showNotification('Ucapan berhasil disimpan', 'success');
        form.reset();
        counter.textContent = '0 / 300';
        renderGuestbook(); // tampil tanpa reload
      } else {
        showNotification('Gagal menyimpan. LocalStorage mungkin dinonaktifkan.', 'error');
      }
    });

    $('guestClear').addEventListener('click', () => {
      if (readStorage(CONFIG.kunciUcapan).length === 0) {
        showNotification('Belum ada ucapan.', 'error');
        return;
      }
      if (window.confirm('Hapus semua ucapan di browser ini?')) {
        writeStorage(CONFIG.kunciUcapan, []);
        renderGuestbook();
        showNotification('Semua ucapan dihapus', 'success');
      }
    });
  }

  /* ---------- Footer ---------- */
  function setupFooter() {
    $('backTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===================================================================
     4. LAB — demonstrasi materi (hasil dicetak di halaman + console)
     =================================================================== */

  // Function declaration: punya parameter (a, b) dan nilai kembali (return)
  function tambah(a, b) {
    return a + b;
  }

  // Arrow function dengan satu parameter
  const kuadrat = (x) => x * x;

  /** var punya function scope, let/const punya block scope */
  function demoScope() {
    if (true) {
      var dariVar = 'var';
      let dariLet = 'let';
      const dariConst = 'const';
      // dariLet & dariConst hanya hidup di dalam blok if ini
      void dariLet; void dariConst;
    }
    // typeof pada variabel yang tidak dikenal -> "undefined" (tidak error)
    return 'var di luar blok: ' + typeof dariVar + ' | let di luar blok: ' + typeof dariLet;
  }

  function runDemo() {
    const baris = [];

    // --- Variabel & scope
    baris.push('[Scope] ' + demoScope());
    const daftarConst = [1, 2];
    daftarConst.push(3); // boleh! const hanya melarang penggantian referensi (daftarConst = ...)
    baris.push('[const] array const tetap bisa di-push: ' + JSON.stringify(daftarConst));

    // --- Tujuh kategori tipe data
    let belumDiisi;                                  // undefined
    const dataTipe = {
      'String': 'Aisyah',
      'Number': 150,
      'Boolean': true,
      'Array': ['a', 'b'],
      'Object': { nama: 'Raka' },
      'Null': null,
      'Undefined': belumDiisi
    };
    const hasilTipe = [];
    for (const nama in dataTipe) {
      const nilai = dataTipe[nama];
      const tipe = Array.isArray(nilai) ? 'array (typeof = ' + typeof nilai + ')' : typeof nilai;
      hasilTipe.push(nama + ' -> ' + tipe);
    }
    baris.push('[typeof] ' + hasilTipe.join(' | '));
    baris.push('[typeof null] "' + typeof null + '" (perilaku khusus JavaScript)');

    // --- Operator
    baris.push('[Aritmatika] 7+2=' + (7 + 2) + ', 7-2=' + (7 - 2) + ', 7*2=' + (7 * 2) +
      ', 7/2=' + (7 / 2) + ', 7%2=' + (7 % 2) + ', 2**3=' + (2 ** 3));
    baris.push('[Perbandingan] "5"==5 -> ' + ('5' == 5) + ' | "5"===5 -> ' + ('5' === 5) + // eslint-disable-line eqeqeq
      ' | 3!=4 -> ' + (3 != 4) + ' | 3!==3 -> ' + (3 !== 3) +
      ' | 3<4 -> ' + (3 < 4) + ' | 3>4 -> ' + (3 > 4) + ' | 4<=4 -> ' + (4 <= 4) + ' | 4>=5 -> ' + (4 >= 5));
    baris.push('[Logika] true&&false -> ' + (true && false) + ' | true||false -> ' + (true || false) +
      ' | !true -> ' + (!true));
    let n = 10;
    n += 5; n -= 3; n *= 2; n /= 4;
    baris.push('[Penugasan] n=10; += 5; -= 3; *= 2; /= 4 -> n = ' + n);

    // --- Function & arrow function
    baris.push('[Function] tambah(2, 3) = ' + tambah(2, 3) + ' | [Arrow] kuadrat(4) = ' + kuadrat(4));

    // --- Perulangan
    let i = 1;
    const hasilWhile = [];
    while (i <= 3) {          // dicek DULU, baru dijalankan
      hasilWhile.push(i);
      i++;                    // wajib ada agar tidak menjadi loop tanpa akhir
    }
    baris.push('[while] ' + hasilWhile.join(', '));

    let j = 10;
    let jalan = 0;
    do {                      // dijalankan DULU minimal sekali, baru dicek
      jalan++;
      j++;
    } while (j < 3);          // kondisi salah dari awal, tapi tetap jalan 1 kali
    baris.push('[do-while] kondisi salah dari awal, tetap berjalan ' + jalan + ' kali');

    const hasilFor = [];
    for (let k = 0; k < 3; k++) hasilFor.push('item' + k);
    baris.push('[for] ' + hasilFor.join(', '));

    // --- switch memakai fungsi yang sama dengan RSVP
    baris.push('[switch] describeStatus("hadir") = ' + describeStatus('hadir').label +
      ' | describeStatus("ragu") = ' + describeStatus('ragu').label);

    const teks = baris.join('\n');
    $('demoOutput').textContent = teks;
    console.log('Hasil demo JavaScript:\n' + teks);
  }

  function setupLab() {
    // Sama seperti contoh di video dosen: ambil elemen -> baca textContent -> ubah style.color
    const judul = document.getElementById('titleDemo');
    console.log('textContent judul demo:', judul.textContent);

    let warnaIndex = 0;
    const warna = ['#b07878', '#7d9170', '#c3a26b', '#5c4a42'];
    $('colorBtn').addEventListener('click', () => {
      warnaIndex = (warnaIndex + 1) % warna.length;
      judul.style.color = warna[warnaIndex];
    });

    let versiTeks = 0;
    const teks = ['Halo Dunia', 'Selamat Datang di Undangan Kami'];
    $('textBtn').addEventListener('click', () => {
      versiTeks = versiTeks === 0 ? 1 : 0;
      judul.textContent = teks[versiTeks];
      judul.classList.toggle('lab-title-big'); // classList.toggle
    });

    $('demoBtn').addEventListener('click', runDemo);
  }

  /* ===================================================================
     5. INIT — dipanggil sekali
     =================================================================== */
  function init() {
    // gambar statis di HTML juga diberi fallback
    document.querySelectorAll('img').forEach(attachImageFallback);

    isiDataUtama();
    setupCover();
    setupNavigation();
    renderAcara();
    setupKutipan();
    renderKisah();
    renderGaleri();
    setupLightbox();
    renderHadiah();
    setupRSVP();
    renderRSVP();
    setupGuestbook();
    renderGuestbook();
    setupFooter();
    setupLab();
    startCountdown();

    // Dipanggil terakhir agar kartu yang dibuat lewat JS (acara, timeline, dll.) ikut beranimasi
    setupReveal();

    console.log('Website undangan berhasil dimuat');
  }

  init();
})();
