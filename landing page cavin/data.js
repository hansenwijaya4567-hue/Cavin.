// ========================================
// DATA VARIAN JAECOO - CAVIN EDWARD
// ========================================
// Struktur tiap varian:
//   id        : identitas unik (dipakai untuk path gambar & form)
//   nama      : nama lengkap varian
//   harga     : angka murni tanpa titik/koma (contoh: 315800000)
//   gambar    : path file di folder /images
//   fitur     : daftar highlight singkat (tampil di kartu & modal)
//   spesifikasi: daftar grup spesifikasi detail dari data resmi Jaecoo
//                (tampil di modal "Lihat Detail")
// Nomor WhatsApp: 6285762610036 (wa.me/6285762610036)
// Nama Sales: Cavin Edward
// ========================================

const PRODUCT_DATA = [
  // ==================== JAECOO J5 EV STANDARD ====================
  {
    id: "j5-ev-standard",
    nama: "Jaecoo J5 EV Standard",
    harga: 315800000,
    gambar: "images/j5-ev-standard.jpg",
    fitur: [
      "Penggerak Listrik Pure EV",
      "Desain Modern & Sporty",
      "Jarak Tempuh 461 km (NEDC)",
      "6 Airbag + Rear Camera",
      "Ground Clearance 200 mm"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.380 x 1.860 x 1.650 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.620 mm" },
          { label: "Ground Clearance", nilai: "200 mm" },
          { label: "Wading Depth", nilai: "450 mm" },
          { label: "Kapasitas Penumpang", nilai: "5 Penumpang" },
          { label: "Bagasi", nilai: "480 L (1.180 L kursi dilipat) + Front Trunk 35 L" }
        ]
      },
      {
        judul: "Performa & Penggerak",
        item: [
          { label: "Tipe Motor", nilai: "Permanent Magnet Synchronous Motor" },
          { label: "Tenaga Maksimal", nilai: "155 kW (210 PS)" },
          { label: "Torsi Maksimal", nilai: "288 Nm" },
          { label: "Akselerasi 0-100 km/h", nilai: "7,3 detik" },
          { label: "Penggerak", nilai: "Front-Wheel Drive (FWD)" },
          { label: "Suspensi", nilai: "Depan: MacPherson / Belakang: Multi-link" }
        ]
      },
      {
        judul: "Baterai & Pengisian",
        item: [
          { label: "Kapasitas Baterai", nilai: "60,9 kWh (LFP)" },
          { label: "Jarak Tempuh", nilai: "461 km (NEDC)" },
          { label: "Fast Charging", nilai: "130 kW DC (30-80% ± 28 menit)" },
          { label: "Mode Berkendara", nilai: "Eco / Normal / Sport + Regenerative Braking" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Head Unit", nilai: "9 inci" },
          { label: "Audio", nilai: "2 Speaker" },
          { label: "Jok", nilai: "Fabric" },
          { label: "Velg", nilai: "R18 Alloy" },
          { label: "Kamera", nilai: "Rear Camera" },
          { label: "Airbag", nilai: "6 Airbag" }
        ]
      }
    ]
  },

  // ==================== JAECOO J5 EV PREMIUM ====================
  {
    id: "j5-ev-premium",
    nama: "Jaecoo J5 EV Premium",
    harga: 356800000,
    gambar: "images/j5-ev-premium.jpg",
    fitur: [
      "Panoramic Roof 1,45 m²",
      "Display 13,2\" Full HD",
      "17 Fitur ADAS + Kamera 540°",
      "Wireless Charging 50W",
      "Power Tailgate"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.380 x 1.860 x 1.650 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.620 mm" },
          { label: "Ground Clearance", nilai: "200 mm" },
          { label: "Wading Depth", nilai: "450 mm" },
          { label: "Kapasitas Penumpang", nilai: "5 Penumpang" },
          { label: "Bagasi", nilai: "480 L (1.180 L kursi dilipat) + Front Trunk 35 L" }
        ]
      },
      {
        judul: "Performa & Penggerak",
        item: [
          { label: "Tipe Motor", nilai: "Permanent Magnet Synchronous Motor" },
          { label: "Tenaga Maksimal", nilai: "155 kW (210 PS)" },
          { label: "Torsi Maksimal", nilai: "288 Nm" },
          { label: "Akselerasi 0-100 km/h", nilai: "7,3 detik" },
          { label: "Penggerak", nilai: "Front-Wheel Drive (FWD)" },
          { label: "Suspensi", nilai: "Depan: MacPherson / Belakang: Multi-link" }
        ]
      },
      {
        judul: "Baterai & Pengisian",
        item: [
          { label: "Kapasitas Baterai", nilai: "60,9 kWh (LFP)" },
          { label: "Jarak Tempuh", nilai: "461 km (NEDC)" },
          { label: "Fast Charging", nilai: "130 kW DC (30-80% ± 28 menit)" },
          { label: "Mode Berkendara", nilai: "Eco / Normal / Sport + Regenerative Braking" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Sunroof", nilai: "Panoramic Roof 1,45 m²" },
          { label: "Head Unit", nilai: "13,2 inci Full HD" },
          { label: "Audio", nilai: "8 Speaker" },
          { label: "Jok", nilai: "Synthetic Leather" },
          { label: "Velg", nilai: "R18 Alloy" },
          { label: "Power Tailgate", nilai: "Ya" },
          { label: "Wireless Charging", nilai: "Fast Wireless Charging 50W" },
          { label: "Keselamatan", nilai: "17 Fitur ADAS + Kamera 540° + 6 Airbag" }
        ]
      }
    ]
  },

  // ==================== JAECOO J7 SHS ====================
  {
    id: "j7-shs",
    nama: "Jaecoo J7 SHS",
    harga: 540800000,
    gambar: "images/j7-shs.jpg",
    fitur: [
      "Super Hybrid System (SHS)",
      "Jarak Tempuh Hingga 1.300 km",
      "Efisiensi Bahan Bakar Unggul",
      "Display 14,8\" + Cluster 10,25\"",
      "8 Airbag"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.500 x 1.865 x 1.670 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.672 mm" },
          { label: "Ground Clearance", nilai: "174 mm" },
          { label: "Kapasitas Penumpang", nilai: "5 Penumpang" },
          { label: "Tangki Bahan Bakar", nilai: "60 Liter" },
          { label: "Velg", nilai: "R19 Alloy" }
        ]
      },
      {
        judul: "Powertrain (Super Hybrid System)",
        item: [
          { label: "Mesin", nilai: "1.5L TGDI DHE (Fifth Generation 1.5T)" },
          { label: "Transmisi", nilai: "1DHT (Dedicated Hybrid Transmission)" },
          { label: "Tenaga Mesin", nilai: "145 kW (194 PS)" },
          { label: "Torsi Maksimal", nilai: "290 Nm" },
          { label: "Akselerasi 0-100 km/h", nilai: "7,3 detik" },
          { label: "Kecepatan Maksimal", nilai: "180 km/jam" },
          { label: "Penggerak", nilai: "Front-Wheel Drive (FWD)" }
        ]
      },
      {
        judul: "Baterai & Jarak Tempuh",
        item: [
          { label: "Kapasitas Baterai", nilai: "18,3 kWh" },
          { label: "Jarak Tempuh Total", nilai: "Hingga 1.300 km" },
          { label: "Jarak Mode EV", nilai: "± 90 km" },
          { label: "Efisiensi", nilai: "Sangat efisien berkat kombinasi mesin + motor listrik" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Display", nilai: "14,8\" Touchscreen + 10,25\" LCD Cluster" },
          { label: "Kamera", nilai: "360° Around View Monitor" },
          { label: "AC", nilai: "Dual-zone Climate Control + Vent Baris Kedua" },
          { label: "Keselamatan", nilai: "8 Airbag + ADAS" }
        ]
      }
    ]
  },

  // ==================== JAECOO J7 AWD ====================
  {
    id: "j7-awd",
    nama: "Jaecoo J7 AWD",
    harga: 575800000,
    gambar: "images/j7-awd.jpg",
    fitur: [
      "Penggerak All-Wheel Drive (AWD)",
      "Mesin 1.6L TGDI Turbo",
      "Wading Depth 600 mm",
      "Ground Clearance 200 mm",
      "Traksi Mantap Berbagai Medan"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.500 x 1.865 x 1.680 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.672 mm" },
          { label: "Ground Clearance", nilai: "200 mm" },
          { label: "Wading Depth", nilai: "600 mm" },
          { label: "Kapasitas Penumpang", nilai: "5 Penumpang" },
          { label: "Velg", nilai: "R19 Alloy" }
        ]
      },
      {
        judul: "Performa & Penggerak",
        item: [
          { label: "Mesin", nilai: "1.6L TGDI Turbo Petrol" },
          { label: "Tenaga Maksimal", nilai: "136,5 kW (183 PS)" },
          { label: "Torsi Maksimal", nilai: "275 Nm" },
          { label: "Transmisi", nilai: "7-Speed Dual Clutch (DCT)" },
          { label: "Penggerak", nilai: "All-Wheel Drive (AWD)" },
          { label: "Kecepatan Maksimal", nilai: "180 km/jam" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Mode Berkendara", nilai: "Multi Drive Mode (termasuk mode off-road)" },
          { label: "Kamera", nilai: "360° / 540° Panoramic Camera" },
          { label: "Keselamatan", nilai: "Multiple Airbag + ADAS" },
          { label: "Kenyamanan", nilai: "Power Tailgate, Sunroof, Jok Elektrik" }
        ]
      }
    ]
  },

  // ==================== JAECOO J8 SHS ====================
  {
    id: "j8-shs",
    nama: "Jaecoo J8 SHS",
    harga: 869800000,
    gambar: "images/j8-shs.jpg",
    fitur: [
      "Flagship 7-Seater SUV PHEV",
      "Super Hybrid System + Triple Motor AWD",
      "Tenaga Kombinasi 530 hp / 650 Nm",
      "Jarak Tempuh Hingga 1.400 km",
      "14 Speaker Sony + HUD"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.820 x 1.930 x 1.710 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.820 mm" },
          { label: "Kapasitas Penumpang", nilai: "7 Penumpang" },
          { label: "Tangki Bahan Bakar", nilai: "70 Liter" },
          { label: "Wading Depth", nilai: "600 mm" },
          { label: "Velg", nilai: "R20 Alloy" }
        ]
      },
      {
        judul: "Powertrain (SHS + ARDIS AWD)",
        item: [
          { label: "Klasifikasi", nilai: "SHS (Super Hybrid System)" },
          { label: "Mesin", nilai: "1.5 TGDI" },
          { label: "Transmisi", nilai: "3-Speed Dedicated Hybrid Transmission (DHT)" },
          { label: "Motor Listrik", nilai: "Triple-Motor Setup" },
          { label: "Penggerak", nilai: "AWD (ARDIS - All Road Drive Intelligent System)" },
          { label: "Tenaga Kombinasi", nilai: "530 hp" },
          { label: "Torsi Kombinasi", nilai: "650 Nm" },
          { label: "Akselerasi 0-100 km/h", nilai: "5,4 detik" },
          { label: "Suspensi", nilai: "CDC Magnetic Suspension" }
        ]
      },
      {
        judul: "Baterai & Jarak Tempuh",
        item: [
          { label: "Kapasitas Baterai", nilai: "34,496 kWh" },
          { label: "Jarak Tempuh Maksimal", nilai: "Hingga 1.400 km" },
          { label: "Jarak Mode EV", nilai: "± 180 km" },
          { label: "V2L Power", nilai: "6,6 kW" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Sunroof", nilai: "Power Panoramic Sunroof" },
          { label: "Tailgate", nilai: "Hands-Free Power Tailgate" },
          { label: "Jok", nilai: "Nappa Leather (Heated/Ventilated/Massage/Memory)" },
          { label: "Display", nilai: "Dual 12,3\" Display + Windshield HUD" },
          { label: "Audio", nilai: "14 Sony Premium Speakers + Subwoofer" },
          { label: "Wireless Charging", nilai: "50W Fast Charging" },
          { label: "Keselamatan", nilai: "10 Airbag + 19 ADAS + Kamera 540°" },
          { label: "Sensor", nilai: "Front 4 + Rear 4" }
        ]
      }
    ]
  },

  // ==================== JAECOO J8 AWD (ARDIS) ====================
  {
    id: "j8-awd",
    nama: "Jaecoo J8 AWD",
    harga: 729800000,
    gambar: "images/j8-awd.jpg",
    fitur: [
      "Flagship 7-Seater SUV",
      "Mesin 2.0L TGDI Turbo",
      "Penggerak AWD ARDIS",
      "CDC Magnetic Suspension",
      "Wading Depth 600 mm"
    ],
    spesifikasi: [
      {
        judul: "Dimensi & Kapasitas",
        item: [
          { label: "Panjang x Lebar x Tinggi", nilai: "4.820 x 1.930 x 1.710 mm" },
          { label: "Jarak Sumbu Roda (Wheelbase)", nilai: "2.820 mm" },
          { label: "Kapasitas Penumpang", nilai: "7 Penumpang" },
          { label: "Tangki Bahan Bakar", nilai: "65 Liter" },
          { label: "Wading Depth", nilai: "600 mm" },
          { label: "Velg", nilai: "R20 Alloy" }
        ]
      },
      {
        judul: "Performa & Penggerak",
        item: [
          { label: "Mesin", nilai: "2.0L TGDI Turbo Petrol" },
          { label: "Tenaga Maksimal", nilai: "248 PS (183 kW)" },
          { label: "Torsi Maksimal", nilai: "385 Nm" },
          { label: "Transmisi", nilai: "8-Speed Automatic" },
          { label: "Penggerak", nilai: "AWD (ARDIS - All Road Drive Intelligent System)" },
          { label: "Suspensi", nilai: "CDC Magnetic Suspension" }
        ]
      },
      {
        judul: "Fitur Utama",
        item: [
          { label: "Sunroof", nilai: "Power Panoramic Sunroof" },
          { label: "Tailgate", nilai: "Hands-Free Power Tailgate" },
          { label: "Jok", nilai: "Leather Seats + Power Adjustment" },
          { label: "Display", nilai: "Dual 12,3\" Display" },
          { label: "Kamera", nilai: "540° Panoramic Camera" },
          { label: "Keselamatan", nilai: "Multiple Airbag + ADAS" },
          { label: "Mode Berkendara", nilai: "Multi Drive Mode + Mode Off-road" }
        ]
      }
    ]
  }
];

// Fungsi helper format harga
function formatHarga(harga) {
  if (harga <= 0) return "Hubungi Sales";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(harga);
}

// Export untuk digunakan di script.js (global)
window.PRODUCT_DATA = PRODUCT_DATA;
window.formatHarga = formatHarga;
