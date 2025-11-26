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

// Tech Icons - PASTIKAN INI DIEKSPORT
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

export const projects = {
  ecommerce: {
    title: {
      id: "Website E-Commerce",
      en: "E-Commerce Website"
    },
    subtitle: {
      id: "Platform jual beli online dengan fitur lengkap",
      en: "Complete online shopping platform with full features"
    },
    description: {
      id: "Website e-commerce dengan fitur katalog produk, keranjang belanja, pembayaran, dan dashboard admin. (dibuat saat kelas 10)",
      en: "E-commerce website with product catalog, shopping cart, payment, and admin dashboard features. (created in 10th grade)"
    },
    images: [webshp1, webshp2, webshp3, webshp4],
    tech: ["HTML", "CSS"],
    features: {
      id: [
        "Katalog produk masih statis",
        "Keranjang belanja",
        "Pembayaran online",
        "Dashboard admin"
      ],
      en: [
        "Static product catalog",
        "Shopping cart",
        "Online payment",
        "Admin dashboard"
      ]
    },
    demo: "https://webshp.vercel.app/",
    documentation: {
      id: `<ul>
        <li>Login sebagai admin untuk mengelola produk</li>
        <li>Checkout menggunakan fitur pembayaran simulasi</li>
      </ul>`,
      en: `<ul>
        <li>Login as admin to manage products</li>
        <li>Checkout using simulated payment feature</li>
      </ul>`
    }
  },
  student: {
    title: {
      id: "Manajemen Data Siswa",
      en: "Student Data Management"
    },
    subtitle: {
      id: "Sistem manajemen data siswa sekolah",
      en: "School student data management system"
    },
    description: {
      id: "Aplikasi untuk mengelola data siswa, absensi, nilai, dan laporan. (dibuat saat kelas 10)",
      en: "Application to manage student data, attendance, grades, and reports. (created in 10th grade)"
    },
    images: [datsis1, datsis2, datsis3],
    tech: ["CSS", "PHP", "MySQL"],
    features: {
      id: [
        "Manajemen data siswa",
        "Absensi online",
        "Cetak laporan"
      ],
      en: [
        "Student data management",
        "Online attendance",
        "Report printing"
      ]
    },
    demo: "#",
    documentation: {
      id: `<p>Gunakan fitur filter untuk mencari siswa berdasarkan kelas.</p>`,
      en: `<p>Use filter feature to search students by class.</p>`
    }
  },
  pos: {
    title: {
      id: "Aplikasi Pendeteksi Cuaca",
      en: "Weather Detector App"
    },
    subtitle: {
      id: "Aplikasi ReactJS pendeteksi cuaca",
      en: "ReactJS weather detection application"
    },
    description: {
      id: "Aplikasi ReactJS untuk mendeteksi cuaca suatu kota menggunakan public API dari OpenWeatherMap. (dibuat saat kelas 11)",
      en: "ReactJS application to detect weather in a city using public API from OpenWeatherMap. (created in 11th grade)"
    },
    images: [ksr1],
    tech: ["JavaScript", "React", "Bootstrap"],
    features: {
      id: [
        "Cari cuaca berdasarkan nama kota",
        "Menampilkan suhu, kondisi, dan icon cuaca",
        "Menggunakan API OpenWeatherMap"
      ],
      en: [
        "Search weather by city name",
        "Display temperature, conditions, and weather icons",
        "Using OpenWeatherMap API"
      ]
    },
    demo: "#",
    documentation: {
      id: `
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
      `,
      en: `
        <p>Complete documentation for this application can be seen at the following link:<br>
        <a href="https://drive.google.com/drive/folders/1SUfEm7M2-5ddPx1dULF8s3JT-69SX1PE?usp=sharing" target="_blank" style="color:#3b82f6;text-decoration:underline;">
          Google Drive Weather Detector App Documentation
        </a>
        </p>
        <h4>Example API Endpoint:</h4>
        <p>
          <a href="https://api.openweathermap.org/data/2.5/weather?q=bogor&appid=ac9d21f60ea5a2b193883ac1cfb90618&units=metric" target="_blank">
            https://api.openweathermap.org/data/2.5/weather?q=bogor&appid=ac9d21f60ea5a2b193883ac1cfb90618&units=metric
          </a>
        </p>
        <p>Frontend built with ReactJS, data fetching using <code>fetch</code> or <code>axios</code>.</p>
      `
    }
  },
  perpus: {
    title: {
      id: "Perpustakaan Digital",
      en: "Digital Library"
    },
    subtitle: {
      id: "Aplikasi perpustakaan digital",
      en: "Digital library application"
    },
    description: {
      id: "Aplikasi perpustakaan digital yang dibuat menggunakan React dan mengonsumsi data dari API eksternal untuk daftar buku, detail, dan peminjaman. (dibuat saat kelas 11)",
      en: "Digital library application built using React and consuming data from external API for book lists, details, and borrowing. (created in 11th grade)"
    },
    images: [boking1, boking2, boking3, boking4, boking5, boking6, boking7],
    tech: ["JavaScript", "React", "Bootstrap"],
    features: {
      id: [
        "Menampilkan daftar buku dari API",
        "Detail buku dinamis",
        "Peminjaman dan pengembalian buku",
        "Pencarian buku real-time"
      ],
      en: [
        "Display book list from API",
        "Dynamic book details",
        "Book borrowing and return",
        "Real-time book search"
      ]
    },
    demo: "#",
    documentation: {
      id: `
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
      `,
      en: `
        <p>Full documentation for this application can be seen at the following link:<br>
        <a href="https://drive.google.com/drive/folders/1SUfEm7M2-5ddPx1dULF8s3JT-69SX1PE?usp=sharing" target="_blank" style="color:#3b82f6;text-decoration:underline;">
          Google Drive Library Documentation
        </a>
        </p>
        <ul>
          <li>Frontend built with ReactJS</li>
          <li>Using fetch/axios to get book data from API</li>
          <li>State management using React hooks</li>
          <li>Example API: <code>http://45.64.100.26:88/perpus-api/public/api</code></li>
        </ul>
      `
    }
  },
  pharmacy: {
    title: {
      id: "Sistem Apotek",
      en: "Pharmacy System"
    },
    subtitle: {
      id: "Sistem manajemen apotek dan obat-obatan",
      en: "Pharmacy and medicine management system"
    },
    description: {
      id: "Aplikasi untuk mengelola stok obat, resep, dan transaksi di apotek. (dibuat saat kelas 10)",
      en: "Application to manage drug stock, prescriptions, and transactions in pharmacy. (created in 10th grade)"
    },
    images: [],
    tech: ["JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
    features: {
      id: [
        "Manajemen stok obat",
        "Transaksi penjualan",
        "Cetak resep"
      ],
      en: [
        "Drug stock management",
        "Sales transactions",
        "Prescription printing"
      ]
    },
    demo: "#",
    documentation: {
      id: `<a href="https://github.com/zackykeisya/Apotek-4.git" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a>`,
      en: `<a href="https://github.com/zackykeisya/Apotek-4.git" target="_blank" class="text-blue-500 underline">View Source Code on GitHub</a>`
    }
  },
  complaint: {
    title: {
      id: "Sistem Pengaduan Masyarakat",
      en: "Public Complaint System"
    },
    subtitle: {
      id: "Platform pengaduan masyarakat",
      en: "Public complaint platform"
    },
    description: {
      id: "Aplikasi untuk menerima dan menindaklanjuti pengaduan masyarakat. (dibuat saat kelas 11)",
      en: "Application to receive and follow up on public complaints. (created in 11th grade)"
    },
    images: [],
    tech: ["JavaScript", "Bootstrap", "PHP", "Laravel", "MySQL"],
    features: {
      id: [
        "Form pengaduan online",
        "Tracking status pengaduan",
        "Notifikasi email"
      ],
      en: [
        "Online complaint form",
        "Complaint status tracking",
        "Email notifications"
      ]
    },
    demo: [],
    documentation: {
      id: `<a href="https://github.com/zackykeisya/PengaduanMasyarakat.git" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a>`,
      en: `<a href="https://github.com/zackykeisya/PengaduanMasyarakat.git" target="_blank" class="text-blue-500 underline">View Source Code on GitHub</a>`
    }
  },
  ticket: {
    title: {
      id: "Aplikasi Tiket",
      en: "Ticketing App"
    },
    subtitle: {
      id: "Aplikasi manajemen tiket online",
      en: "Online ticket management application"
    },
    description: {
      id: "Aplikasi mobile untuk pembelian dan manajemen tiket event, dibangun menggunakan Flutter dan Firebase. (dibuat saat kelas 11)",
      en: "Mobile application for purchasing and managing event tickets, built using Flutter and Firebase. (created in 11th grade)"
    },
    images: [ticketing1, ticketing2, ticketing3, ticketing4, ticketing5, ticketing6],
    tech: ["Flutter", "Firebase"],
    features: {
      id: [
        "Pendaftaran dan login pengguna",
        "Pencarian dan pembelian tiket event",
        "QR Code untuk validasi tiket",
        "Notifikasi pembelian",
        "Integrasi pembayaran digital"
      ],
      en: [
        "User registration and login",
        "Event ticket search and purchase",
        "QR Code for ticket validation",
        "Purchase notifications",
        "Digital payment integration"
      ]
    },
    demo: "#",
    documentation: {
      id: `
        <a href="https://github.com/zackykeisya/ticketing-app" target="_blank" class="text-blue-500 underline">Lihat Source Code di GitHub</a><br>
        <a href="https://www.figma.com/design/TqxkSiKhWa4bGikPjefLGE/TICKETING-APP-UJI-KELAYAKAN-PPLG-XI-2?node-id=0-1&t=xjF9zISV17pKgi8l-1" target="_blank" class="text-pink-500 underline">Lihat Desain Figma</a>
      `,
      en: `
        <a href="https://github.com/zackykeisya/ticketing-app" target="_blank" class="text-blue-500 underline">View Source Code on GitHub</a><br>
        <a href="https://www.figma.com/design/TqxkSiKhWa4bGikPjefLGE/TICKETING-APP-UJI-KELAYAKAN-PPLG-XI-2?node-id=0-1&t=xjF9zISV17pKgi8l-1" target="_blank" class="text-pink-500 underline">View Figma Design</a>
      `
    }
  }
}

export const certificates = [
  {
    title: {
      id: "Pengembangan Web Front-End",
      en: "Front-End Web Development"
    },
    issuer: {
      id: "Dicoding Academy",
      en: "Dicoding Academy"
    },
    icon: "📜",
    date: "2023",
    description: {
      id: "Sertifikat kompetensi dalam pengembangan web front-end modern",
      en: "Competency certificate in modern front-end web development"
    }
  },
  {
    title: {
      id: "Fundamental Desain UX",
      en: "UX Design Fundamentals"
    },
    issuer: {
      id: "Google x Coursera",
      en: "Google x Coursera"
    },
    icon: "🧠",
    date: "2023",
    description: {
      id: "Sertifikat fundamental desain pengalaman pengguna",
      en: "User experience design fundamentals certificate"
    }
  },
  {
    title: {
      id: "React Pemula hingga Mahir",
      en: "React Beginner to Advanced"
    },
    issuer: {
      id: "BuildWithAngga",
      en: "BuildWithAngga"
    },
    icon: "💻",
    date: "2023",
    description: {
      id: "Sertifikat penguasaan React.js dari dasar hingga tingkat lanjut",
      en: "React.js mastery certificate from basic to advanced level"
    }
  },
  {
    title: {
      id: "JavaScript Modern ES6+",
      en: "Modern JavaScript ES6+"
    },
    issuer: {
      id: "Programming Hub",
      en: "Programming Hub"
    },
    icon: "⚡",
    date: "2022",
    description: {
      id: "Sertifikat penguasaan JavaScript modern dengan fitur ES6+",
      en: "Modern JavaScript with ES6+ features certificate"
    }
  },
  {
    title: {
      id: "Pengembangan Aplikasi Mobile",
      en: "Mobile App Development"
    },
    issuer: {
      id: "Alibaba Cloud",
      en: "Alibaba Cloud"
    },
    icon: "📱",
    date: "2022",
    description: {
      id: "Sertifikat pengembangan aplikasi mobile dengan Flutter",
      en: "Mobile app development with Flutter certificate"
    }
  },
  {
    title: {
      id: "Cloud Computing Fundamentals",
      en: "Cloud Computing Fundamentals"
    },
    issuer: {
      id: "AWS Educate",
      en: "AWS Educate"
    },
    icon: "☁️",
    date: "2022",
    description: {
      id: "Sertifikat fundamental cloud computing dan layanan AWS",
      en: "Cloud computing fundamentals and AWS services certificate"
    }
  }
]