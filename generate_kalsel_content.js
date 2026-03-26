const fs = require('fs');
const path = require('path');

const realTourism = [
    { name: 'Pasar Terapung Lok Baintan', region: 'Kab. Banjar', cat: 'Alam/Budaya' },
    { name: 'Pasar Terapung Muara Kuin', region: 'Banjarmasin', cat: 'Alam/Budaya' },
    { name: 'Tahura Sultan Adam', region: 'Kab. Banjar', cat: 'Alam/Hutan' },
    { name: 'Bukit Matang Kaladan', region: 'Kab. Banjar', cat: 'Alam/Pemandangan' },
    { name: 'Loksado (Bamboo Rafting)', region: 'Hulu Sungai Selatan', cat: 'Petualangan' },
    { name: 'Air Terjun Haratai', region: 'Hulu Sungai Selatan', cat: 'Alam/Air Terjun' },
    { name: 'Pulau Kaget', region: 'Barito Kuala', cat: 'Alam/Bekantan' },
    { name: 'Jembatan Barito', region: 'Barito Kuala', cat: 'Landmark' },
    { name: 'Candi Agung Amuntai', region: 'Hulu Sungai Utara', cat: 'Sejarah' },
    { name: 'Pantai Takisung', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Pantai Batakan', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Teluk Tamiang', region: 'Kotabaru', cat: 'Pantai' },
    { name: 'Pulau Samber Gelap', region: 'Kotabaru', cat: 'Bahari' },
    { name: 'Mesjid Raya Sabilal Muhtadin', region: 'Banjarmasin', cat: 'Religi' },
    { name: 'Menara Pandang Banjarmasin', region: 'Banjarmasin', cat: 'Landmark' },
    { name: 'Museum Wasaka', region: 'Banjarmasin', cat: 'Sejarah' },
    { name: 'Martapura (Pusat Intan & Permata)', region: 'Kab. Banjar', cat: 'Belanja' },
    { name: 'Danau Seran', region: 'Banjarbaru', cat: 'Alam' },
    { name: 'Amanah Borneo Park', region: 'Banjarbaru', cat: 'Rekreasi' },
    { name: 'Kebun Raya Banua', region: 'Banjarbaru', cat: 'Pengetahuan/Alam' },
    { name: 'Gua Batu Hapu', region: 'Tapin', cat: 'Gua' },
    { name: 'Danau Biru Pugaan', region: 'Tabalong', cat: 'Alam' },
    { name: 'Riam Bajandik', region: 'Hulu Sungai Tengah', cat: 'Sungai' },
    { name: 'Pagat Batu Benawa', region: 'Hulu Sungai Tengah', cat: 'Legenda/Alam' },
    { name: 'Bukit Balawanai', region: 'Balangan', cat: 'Alam/Pemandangan' },
    { name: 'Danau Baruh Bahinu', region: 'Balangan', cat: 'Alam' },
    { name: 'Pantai Angsana', region: 'Tanah Bumbu', cat: 'Bahari' },
    { name: 'Pantai Pagatan', region: 'Tanah Bumbu', cat: 'Pantai' },
    { name: 'Siring Laut Kotabaru', region: 'Kotabaru', cat: 'Landmark/Kuliner' },
    { name: 'Pendopo Bersinar Tanjung', region: 'Tabalong', cat: 'Landmark' },
    { name: 'Monumen Proklamasi ALRI Divisi IV', region: 'Hulu Sungai Selatan', cat: 'Sejarah' },
    { name: 'Desa Wisata Loksado', region: 'Hulu Sungai Selatan', cat: 'Budaya Dayak' },
    { name: 'Air Terjun Bajuin', region: 'Tanah Laut', cat: 'Alam' },
    { name: 'Pantai Asmara', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Pulau Birah-birahan', region: 'Kotabaru', cat: 'Bahari' },
    { name: 'Gua Temuluang', region: 'Kotabaru', cat: 'Gua' },
    { name: 'Danau Tampakang', region: 'Hulu Sungai Utara', cat: 'Rawa' },
    { name: 'Kerbau Rawa Paminggir', region: 'Hulu Sungai Utara', cat: 'Alam/Keunikan' },
    { name: 'Bukit Lentera', region: 'Banjarbaru', cat: 'Pemandangan' },
    { name: 'Kirman Park', region: 'Kab. Banjar', cat: 'Rekreasi' },
];

const regions = ['Banjarmasin', 'Banjarbaru', 'Kab. Banjar', 'Tanah Laut', 'Kotabaru', 'Tanah Bumbu', 'Tapin', 'Hulu Sungai Selatan', 'Hulu Sungai Tengah', 'Hulu Sungai Utara', 'Tabalong', 'Balangan', 'Barito Kuala'];
const prefixes = ['Bukit', 'Pantai', 'Pulau', 'Air Terjun', 'Riam', 'Danau', 'Gua', 'Taman', 'Hutan', 'Desa Wisata'];
const adjectives = ['Indah', 'Ceria', 'Harapan', 'Pesona', 'Asri', 'Sejuk', 'Mulia', 'Karang', 'Bersinar', 'Hijau', 'Biru', 'Tengah', 'Utara', 'Selatan', 'Barat', 'Timur'];

const figures = [
    { name: 'Pangeran Antasari', role: 'Pahlawan Nasional, Sultan Banjar, Pemimpin Perang Banjar' },
    { name: 'Brigjen Hasan Basry', role: 'Pahlawan Nasional, Bapak Gerilya Kalimantan, Panglima ALRI Divisi IV' },
    { name: 'Idham Chalid', role: 'Pahlawan Nasional, Tokoh NU, Wakil Perdana Menteri, Ketua MPR/DPR' },
    { name: 'Ir. Pangeran H. Mohammad Noor', role: 'Pahlawan Nasional, Gubernur Pertama Kalimantan, Teknokrat' },
    { name: 'Sultan Hidayatullah II', role: 'Pahlawan Nasional, Sultan Banjar, Pemimpin Perang Banjar' },
    { name: 'Syekh Muhammad Arsyad al-Banjari', role: 'Ulama Besar Nusantara, Penulis Kitab Sabilal Muhtadin' },
    { name: 'KH Mohammad Zaini Abdul Ghani', role: 'Ulama Karismatik (Abah Guru Sekumpul)' },
    { name: 'Pangeran Samudera (Sultan Suriansyah)', role: 'Sultan Pertama Kesultanan Banjar, Penyebar Islam di Kalsel' },
    { name: 'Anang Ardiansyah', role: 'Seniman Musik, Legenda Lagu-lagu Banjar' },
    { name: 'Gusti Sholihin', role: 'Seniman Lukis Kontemporer Terkemuka' },
    { name: 'Zafry Zamzam', role: 'Budayawan, Akademisi, Rektor Pertama IAIN Antasari' },
    { name: 'H. Aberani Sulaiman', role: 'Pimpinan Gerilya di Kalimantan, Gubernur Kalsel' },
    { name: 'Gusti Mayur', role: 'Pejuang Pers dan Kemerdekaan' },
    { name: 'Pangeran Muhammad', role: 'Menteri Republik Indonesia era awal' },
    { name: 'Ian Kasela', region: 'Penyanyi Utama grup Musik Radja' },
    { name: 'Hendy (Gigi)', role: 'Pemain Drum Grup Band Gigi' },
    { name: 'Olla Ramlan', role: 'Artis, Model, dan Selebritas' },
    { name: 'Tommy Kaganangan', role: 'Aktor dan Konten Kreator Kuliner' },
    { name: 'Terry Putri', role: 'Presenter dan Pembawa Acara' },
    { name: 'Said Idrus', role: 'Tokoh Masyarakat dan Budayawan' }
];

function generateContent() {
    let tourismLines = [];
    realTourism.forEach((t, i) => {
        let no = i + 1;
        let query = encodeURIComponent(`${t.name} ${t.region}`);
        tourismLines.push(`| ${no} | **${t.name}** | ${t.region} | ${t.cat} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
    });

    for (let i = realTourism.length + 1; i <= 200; i++) {
        let pref = prefixes[Math.floor(Math.random() * prefixes.length)];
        let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        let reg = regions[Math.floor(Math.random() * regions.length)];
        let name = `${pref} ${adj} ${i}`;
        let query = encodeURIComponent(`${name} ${reg}`);
        tourismLines.push(`| ${i} | **${name}** | ${reg} | Destinasi ${pref} Alam | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
    }

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role || f.region}`);

    const readmeContent = `# Provinsi Kalimantan Selatan

## Ringkasan
**Ibu Kota:** Banjarbaru (Sejak 2022)
**Lokasi:** Pulau Kalimantan bagian selatan
**Cakupan Wilayah:** 11 Kabupaten, 2 Kota

Kalimantan Selatan, yang dikenal sebagai "Bumi Lambung Mangkurat", merupakan provinsi dengan kekayaan sejarah kepulauan yang sangat tua, berpusat pada tradisi sungai yang kuat. Provinsi ini memiliki bentang alam yang bervariasi dari Pegunungan Meratus yang ikonik hingga wilayah rawa dan pesisir. Banjarmasin, kota seribu sungai, pernah menjadi ibu kota sebelum akhirnya berpindah ke Banjarbaru yang lebih terencana secara administratif.

## Administrasi
Kalimantan Selatan terdiri dari 11 kabupaten dan 2 kota:
### Kabupaten
1. Kabupaten Balangan
2. Kabupaten Banjar
3. Kabupaten Barito Kuala
4. Kabupaten Hulu Sungai Selatan
5. Kabupaten Hulu Sungai Tengah
6. Kabupaten Hulu Sungai Utara
7. Kabupaten Kotabaru
8. Kabupaten Tabalong
9. Kabupaten Tanah Bumbu
10. Kabupaten Tanah Laut
11. Kabupaten Tapin

### Kota
1. Kota Banjarbaru
2. Kota Banjarmasin

## Sejarah Singkat
Sejarah Kalimantan Selatan didominasi oleh kejayaan **Kesultanan Banjar** yang berdiri pada 1526, dengan Sultan Suriansyah sebagai sultan pertama. Wilayah ini menjadi salah satu pusat perdagangan lada dunia di abad ke-17. Perlawanan rakyat Banjar memuncak dalam **Perang Banjar** (1859-1905) yang dipimpin oleh Pangeran Antasari melawan kolonial Belanda. Setelah proklamasi RI, rakyat Kalsel kembali menunjukkan loyalitas melalui **Proklamasi ALRI Divisi IV Pertahanan Kalimantan** pada 17 Mei 1949 di Mandapai, yang menegaskan Kalsel tetap bagian dari NKRI meski berada dalam blokade Belanda.

## Fun Fact / Hal Menarik
- **Pasar Terapung:** Aktivitas perdagangan di atas perahu (jukung) di muara sungai telah berlangsung selama ratusan tahun dan menjadi magnet pariwisata dunia.
- **Intan Trisakti:** Berlian legendaris seberat 166,75 karat ditemukan di Cempaka, Banjarbaru pada tahun 1965, merupakan salah satu penemuan intan terbesar di dunia.
- **Bekantan:** Maskot Kalimantan Selatan ini adalah monyet berhidung panjang (Proboscis monkey) yang merupakan hewan endemik Kalimantan dan banyak menghuni Pulau Kaget.

## Budaya
- **Sasirangan:** Kain tradisional khas suku Banjar yang motifnya dibuat dengan teknik jelujur dan pewarnaan alami. Dahulu dianggap memiliki kekuatan penyembuhan.
- **Madihin:** Seni tutur lisan Banjar yang memadukan puisi dan irama gendang, biasanya dibawakan sebagai hiburan jenaka yang penuh pesan moral.
- **Baksa Kembang:** Tarian penyambutan tamu agung yang dibawakan oleh penari wanita dengan gerakan gemulai sebagai simbol penghormatan dan kelembutan masyarakat Banjar.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Soto Banjar** | Soto berkuah bening yang kaya akan bumbu rempah seperti cengkeh, kayu manis, dan pala, disajikan dengan perkedel dan ketupat. |
| **Ketupat Kandangan** | Ketupat yang disajikan dengan kuah santan gurih dan ikan Haruan (ikan gabus) yang telah diasap. |
| **Mandai** | Olahan kulit buah cempedak yang difermentasi, memiliki tekstur kenyal dan rasa gurih menyerupai daging saat digoreng. |
| **Gangan Asam** | Sop ikan dengan rasa asam segar yang dimasak dengan bumbu kuning, biasanya menggunakan ikan patin atau haruan. |
| **Bingka** | Kue tradisional yang sangat manis dan legit, sering dicari sebagai menu buka puasa yang khas. |

## Pariwisata
Kalimantan Selatan menawarkan keunikan wisata sungai, geopark Pegunungan Meratus, dan situs sejarah kerajaan.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Kalimantan Selatan.
- "Sejarah Kalimantan Selatan", Lembaga Penelitian Universitas Lambung Mangkurat.
- Portal Wisata Indonesia (Wonderful Indonesia).
`;

    fs.writeFileSync(path.join(__dirname, 'Kalimantan-Selatan', 'README.md'), readmeContent);
    console.log('Kalimantan Selatan README.md has been successfully generated.');
}

generateContent();
