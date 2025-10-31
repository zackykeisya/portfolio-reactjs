// Import semua gambar yang dibutuhkan
import html5 from '../assets/img/html5.png'
import css3 from '../assets/img/css3.svg'
import javascript from '../assets/img/javascript.png'
import bootstrap from '../assets/img/bootstrap.png'
import php from '../assets/img/PHP-removebg-preview.png'
import laravel from '../assets/img/Laravel_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png'
import mysql from '../assets/img/mysql.png'
import react from '../assets/img/react.png'
import flutter from '../assets/img/flutter.png'
import firebase from '../assets/img/firebase.png'
import lumen from '../assets/img/lumen.png'

// Import gambar project
import webshp1 from '../assets/projekImg/webshp/webshp1.png'
import webshp2 from '../assets/projekImg/webshp/webshp2.png'
import webshp3 from '../assets/projekImg/webshp/webshp3.png'
import webshp4 from '../assets/projekImg/webshp/webshp4.png'

import datsis1 from '../assets/projekImg/datsis/datsis1.jpg'
import datsis2 from '../assets/projekImg/datsis/datsis2.jpg'
import datsis3 from '../assets/projekImg/datsis/datsis3.jpg'

import ksr1 from '../assets/projekImg/ksr/ksr1.png'

import boking1 from '../assets/projekImg/boking/boking1.png'
import boking2 from '../assets/projekImg/boking/boking2.png'
import boking3 from '../assets/projekImg/boking/boking3.png'
import boking4 from '../assets/projekImg/boking/boking4.png'
import boking5 from '../assets/projekImg/boking/boking5.png'
import boking6 from '../assets/projekImg/boking/boking6.png'
import boking7 from '../assets/projekImg/boking/boking7.png'

import ticketing1 from '../assets/projekImg/ticketing/ticketing1.png'
import ticketing2 from '../assets/projekImg/ticketing/ticketing2.png'
import ticketing3 from '../assets/projekImg/ticketing/ticketing3.png'
import ticketing4 from '../assets/projekImg/ticketing/ticketing4.png'
import ticketing5 from '../assets/projekImg/ticketing/ticketing5.png'
import ticketing6 from '../assets/projekImg/ticketing/ticketing6.png'

export const projects = {
  ecommerce: {
    title: "E-Commerce Website",
    subtitle: "Platform jual beli online dengan fitur lengkap",
    description: "Website e-commerce dengan fitur katalog produk, keranjang belanja, pembayaran, dan dashboard admin. (dibuat saat kelas 10)",
    images: [webshp1, webshp2, webshp3, webshp4],
    tech: ["HTML", "CSS"],
    features: [
      "Katalog produk masih statis",
      "Keranjang belanja",
      "Pembayaran online",
      "Dashboard admin"
    ],
    demo: "https://webshp.vercel.app/",
    documentation: `<ul>
      <li>Login sebagai admin untuk mengelola produk</li>
      <li>Checkout menggunakan fitur pembayaran simulasi</li>
    </ul>`
  },
  student: {
    title: "Student Data Management",
    subtitle: "Sistem manajemen data siswa sekolah",
    description: "Aplikasi untuk mengelola data siswa, absensi, nilai, dan laporan. (dibuat saat kelas 10)",
    images: [datsis1, datsis2, datsis3],
    tech: ["CSS", "PHP", "MySQL"],
    features: [
      "Manajemen data siswa",
      "Absensi online",
      "Cetak laporan"
    ],
    demo: "#",
    documentation: `<p>Gunakan fitur filter untuk mencari siswa berdasarkan kelas.</p>`
  },
  pos: {
    title: "Weather Detector App",
    subtitle: "Aplikasi ReactJS pendeteksi cuaca",
    description: "Aplikasi ReactJS untuk mendeteksi cuaca suatu kota menggunakan public API dari OpenWeatherMap. (dibuat saat kelas 11)",
    images: [ksr1],
    tech: ["JavaScript", "React", "Bootstrap"],
    features: [
      "Cari cuaca berdasarkan nama kota",
      "Menampilkan suhu, kondisi, dan icon cuaca",
      "Menggunakan API OpenWeatherMap"
    ],
    demo: "#",
    documentation: `
      <p>Dokumentasi lengkap aplikasi ini dapat dilihat pada link berikut:<br>
      <a href="https://drive.google.com/drive/folders/1SUfEm7M2-5ddPx1dULF8s3JT-69SX1PE?usp=sharing" target="_blank" style="color:#3b82f6;text-decoration:underline;">
        Google Drive Dokumentasi Weather Detector App
      </a>
      </p>
      <h4>Contoh Endpoint API:</h4>
      <p>
        <a href="https://api.openweathermap.org/data/2.5/weather?q=bogor&appid=ac9d21f60ea5a2b193883ac1cfb90618&units=metric" target="_blank">
          https://api.openweathermap.org/data/2.5/weather?q=bogor&appid=ac9d21f60ea5a2b193883ac1cfb90618&units=metric
        </a>
      </p>
      <p>Frontend dibuat dengan ReactJS, fetch data menggunakan <code>fetch</code> atau <code>axios</code>.</p>
    `
  },
  perpus: {
    title: "Perpustakaan",
    subtitle: "Aplikasi perpustakaan digital",
    description: "Aplikasi perpustakaan digital yang dibuat menggunakan React dan mengonsumsi data dari API eksternal untuk daftar buku, detail, dan peminjaman. (dibuat saat kelas 11)",
    images: [boking1, boking2, boking3, boking4, boking5, boking6, boking7],
    tech: ["JavaScript", "React", "Bootstrap"],
    features: [
      "Menampilkan daftar buku dari API",
      "Detail buku dinamis",
      "Peminjaman dan pengembalian buku",
      "Pencarian buku real-time"
    ],
    demo: "#",
    documentation: `
      <p>Full dokumentasi aplikasi ini dapat dilihat pada link berikut:<br>
      <a href="https://drive.google.com/drive/folders/1SUfEm7M2-5ddPx1dULF8s3JT-69SX1PE?usp=sharing" target="_blank" style="color:#3b82f6;text-decoration:underline;">
        Google Drive Dokumentasi Perpustakaan
      </a>
      </p>
      <ul>
        <li>Frontend dibuat dengan ReactJS</li>
        <li>Menggunakan fetch/axios untuk mengambil data buku dari API</li>
        <li>State management menggunakan React hooks</li>
        <li>Contoh API: <code>http://45.64.100.26:88/perpus-api/public/api</code></li>
      </ul>
    `
  },
  pharmacy: {
    title: "Pharmacy System",
    subtitle: "Sistem manajemen apotek dan obat-obatan",
    description: "Aplikasi untuk mengelola stok obat, resep, dan transaksi di apotek. (dibuat saat kelas 10)",
    images: [],
    tech: ["JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
    features: [
      "Manajemen stok obat",
      "Transaksi penjualan",
      "Cetak resep"
    ],
    demo: "#",
    documentation: `<a href="https://github.com/zackykeisya/Apotek-4.git" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a>`,
  },
  complaint: {
    title: "Public Complaint System",
    subtitle: "Platform pengaduan masyarakat",
    description: "Aplikasi untuk menerima dan menindaklanjuti pengaduan masyarakat. (dibuat saat kelas 11)",
    images: [],
    tech: ["JavaScript", "Bootstrap", "PHP", "Laravel", "MySQL"],
    features: [
      "Form pengaduan online",
      "Tracking status pengaduan",
      "Notifikasi email"
    ],
    demo: [],
    documentation: `<a href="https://github.com/zackykeisya/PengaduanMasyarakat.git" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a>`,
  },
  ticket: {
    title: "Ticketing App",
    subtitle: "Aplikasi manajemen tiket online",
    description: "Aplikasi mobile untuk pembelian dan manajemen tiket event, dibangun menggunakan Flutter dan Firebase. (dibuat saat kelas 11)",
    images: [ticketing1, ticketing2, ticketing3, ticketing4, ticketing5, ticketing6],
    tech: ["Flutter", "Firebase"],
    features: [
      "Pendaftaran dan login pengguna",
      "Pencarian dan pembelian tiket event",
      "QR Code untuk validasi tiket",
      "Notifikasi pembelian",
      "Integrasi pembayaran digital"
    ],
    demo: "#",
    documentation: `
      <a href="https://github.com/zackykeisya/ticketing-app" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a><br>
      <a href="https://www.figma.com/design/TqxkSiKhWa4bGikPjefLGE/TICKETING-APP-UJI-KELAYAKAN-PPLG-XI-2?node-id=0-1&t=xjF9zISV17pKgi8l-1" target="_blank" class="text-pink-500 underline">Lihat Desain Figma</a>
    `
  }
}

export const certificates = [
  {
    title: "Front-End Web Development",
    issuer: "Dicoding Academy",
    icon: "📜"
  },
  {
    title: "UX Design Fundamentals",
    issuer: "Google x Coursera",
    icon: "🧠"
  },
  {
    title: "React Beginner to Advanced",
    issuer: "BuildWithAngga",
    icon: "💻"
  }
]

export const techIcons = {
  "HTML": html5,
  "CSS": css3,
  "JavaScript": javascript,
  "PHP": php,
  "Laravel": laravel,
  "MySQL": mysql,
  "Bootstrap": bootstrap,
  "React": react,
  "Lumen": lumen,
  "Flutter": flutter,
  "Firebase": firebase,
}