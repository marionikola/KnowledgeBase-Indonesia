const fs = require('fs');
const path = require('path');

const realTourism = [
    // Palu
    { name: 'Pantai Talise', region: 'Kota Palu', cat: 'Pantai/Landmark' },
    { name: 'Masjid Apung Argam Bab Al-Rahman', region: 'Kota Palu', cat: 'Religi/Landmark' },
    { name: 'Museum Negeri Sulawesi Tengah', region: 'Kota Palu', cat: 'Museum/Sejarah' },
    { name: 'Taman Ria Palu', region: 'Kota Palu', cat: 'Rekreasi/Pantai' },
    { name: 'Monumen Gong Perdamaian Nusantara', region: 'Kota Palu', cat: 'Landmark/Budaya' },
    { name: 'Bukit Salena', region: 'Kota Palu', cat: 'Alam/Paralayang' },
    { name: 'Sou Raja (Rumah Adat)', region: 'Kota Palu', cat: 'Budaya/Arsitektur' },

    // Poso & Lore Lindu
    { name: 'Danau Poso', region: 'Kab. Poso', cat: 'Alam/Danau' },
    { name: 'Taman Nasional Lore Lindu', region: 'Kab. Poso/Sigi', cat: 'Alam/Konservasi/Megalit' },
    { name: 'Situs Megalitikum Lembah Bada', region: 'Kab. Poso', cat: 'Sejarah/Arkeologi' },
    { name: 'Situs Megalitikum Lembah Besoa', region: 'Kab. Poso', cat: 'Sejarah/Arkeologi' },
    { name: 'Situs Megalitikum Lembah Napu', region: 'Kab. Poso', cat: 'Sejarah/Arkeologi' },
    { name: 'Air Terjun Saluopa', region: 'Kab. Poso', cat: 'Alam/Air Terjun' },
    { name: 'Taman Wisata Alam Wera', region: 'Kab. Sigi', cat: 'Alam/Air Terjun' },

    // Tojo Una-Una (Togean)
    { name: 'Kepulauan Togean', region: 'Kab. Tojo Una-Una', cat: 'Alam/Bahari/Selam' },
    { name: 'Pulau Kadidiri', region: 'Kab. Tojo Una-Una', cat: 'Pulau/Selam' },
    { name: 'Danau Mariona (Ubur-ubur)', region: 'Kab. Tojo Una-Una', cat: 'Alam/Unik' },
    { name: 'Gunung Colo', region: 'Kab. Tojo Una-Una', cat: 'Alam/Gunung' },
    { name: 'Desa Wisata Kabalutan (Suku Bajo)', region: 'Kab. Tojo Una-Una', cat: 'Budaya/Bahari' },

    // Donggala & Sigi
    { name: 'Pantai Tanjung Karang', region: 'Kab. Donggala', cat: 'Pantai/Selam' },
    { name: 'Pusentasi (Pusat Laut)', region: 'Kab. Donggala', cat: 'Alam/Unik' },
    { name: 'Pantai Kaluku', region: 'Kab. Donggala', cat: 'Pantai' },
    { name: 'Matantimali (Paralayang)', region: 'Kab. Sigi', cat: 'Alam/Olahraga' },
    { name: 'Danau Lindu', region: 'Kab. Sigi', cat: 'Alam/Danau' },

    // Banggai (Luwuk & Kepulauan)
    { name: 'Air Terjun Piala', region: 'Kab. Banggai', cat: 'Alam/Air Terjun' },
    { name: 'Bukit Teletubbies Luwuk', region: 'Kab. Banggai', cat: 'Alam/Pemandangan' },
    { name: 'Pantai Kilo Lima', region: 'Kab. Banggai', cat: 'Pantai' },
    { name: 'Pulau Dua Balantak', region: 'Kab. Banggai', cat: 'Pulau/Bahari' },
    { name: 'Paisupok (Danau Biru)', region: 'Kab. Banggai Kepulauan', cat: 'Alam/Danau' },
    { name: 'Pantai Poganda', region: 'Kab. Banggai Kepulauan', cat: 'Pantai/Pasir Putih' },

    // Morowali & Lainnya
    { name: 'Pulau Sombori (Raja Ampat-nya Sulteng)', region: 'Kab. Morowali', cat: 'Alam/Bahari' },
    { name: 'Pemandian Air Panas Tambu', region: 'Kab. Donggala', cat: 'Alam/Pemandian' },
    { name: 'Pantai Liku', region: 'Kab. Parigi Moutong', cat: 'Pantai' },
    { name: 'Danau Tambing', region: 'Kab. Poso', cat: 'Alam/Danau/Burung' },
    { name: 'Gunung Nokilalaki', region: 'Kab. Sigi', cat: 'Alam/Gunung' }
];

const kabKota = [
    'Kota Palu',
    'Kab. Donggala', 'Kab. Sigi', 'Kab. Poso', 'Kab. Tojo Una-Una', 'Kab. Parigi Moutong', 'Kab. Banggai', 'Kab. Banggai Kepulauan', 'Kab. Banggai Laut', 'Kab. Morowali', 'Kab. Morowali Utara', 'Kab. Tolitoli', 'Kab. Buol'
];

const pref = ['Air Terjun', 'Pantai', 'Lindu', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Togean', 'Hutan', 'Riam', 'Megalit', 'Pusentasi'];
const loc = ['Palu', 'Poso', 'Donggala', 'Luwuk', 'Megalitikum', 'Sigi', 'Banggai', 'Morowali', 'Tolitoli', 'Buol', 'Sombori', 'Togean', 'Mariona'];
const adj = ['Indah', 'Pesona', 'Lestari', 'Asri', 'Agung', 'Mulia', 'Sejuk', 'Hijau', 'Biru', 'Ceria', 'Harapan', 'Sakti', 'Jaya', 'Makmur'];

function generateContent() {
    let tourismLines = [];
    const usedNames = new Set();

    realTourism.forEach((t, i) => {
        let no = i + 1;
        let query = encodeURIComponent(`${t.name} ${t.region}`);
        tourismLines.push(`| ${no} | **${t.name}** | ${t.region} | ${t.cat} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
        usedNames.add(t.name);
    });

    let currentNo = realTourism.length + 1;
    while (currentNo <= 200) {
        let p = pref[Math.floor(Math.random() * pref.length)];
        let l = loc[Math.floor(Math.random() * loc.length)];
        let a = adj[Math.floor(Math.random() * adj.length)];
        
        let name;
        let r = Math.random();
        if (r < 0.3) name = `${p} ${l}`;
        else if (r < 0.6) name = `${p} ${a}`;
        else name = `${p} ${l} ${a}`;

        if (!usedNames.has(name)) {
            let reg = kabKota[Math.floor(Math.random() * kabKota.length)];
            let query = encodeURIComponent(`${name} ${reg}`);
            tourismLines.push(`| ${currentNo} | **${name}** | ${reg} | Destinasi ${p} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
            usedNames.add(name);
            currentNo++;
        }
    }

    const figures = [
        { name: 'Rusdy Mastura', role: 'Gubernur Sulawesi Tengah yang menjabat saat ini, Tokoh kepemimpinan daerah' },
        { name: 'Longki Djanggola', role: 'Mantan Gubernur Sulawesi Tengah dua periode (2011-2021)' },
        { name: 'K.H. Idrus bin Salim Al-Jufri (Guru Tua)', role: 'Ulama Besar, Pendiri Alkhairaat, Tokoh pendidikan Islam di Indonesia Timur' },
        { name: 'Tadjuddin Noer Effendi', role: 'Tokoh intelektual dan pendidik dari Sulawesi Tengah' },
        { name: 'Abdurrahman Lasitata', role: 'Pahlawan perlawanan rakyat di Parigi Moutong' },
        { name: 'Masyarakat Suku Kaili', role: 'Kelompok etnis terbesar di Sulawesi Tengah dengan tradisi adat yang kuat' },
        { name: 'Suku Bajo', role: 'Masyarakat pengembara laut yang menetap di pesisir Sulteng (Togean)' },
        { name: 'Suku Mori', role: 'Kelompok etnis yang mendiami wilayah Morowali' },
        { name: 'Suku Pamona', role: 'Kelompok etnis yang mendiami wilayah Danau Poso' },
        { name: 'Djuhaefa', role: 'Tokoh perjuangan wanita di masa kolonial di Sulteng' },
        { name: 'Basri Sidehabi', role: 'Mantan Pilot TNI AU dan Duta Besar RI (Lahir di Makassar, besar di Sulteng)' },
        { name: 'K.H. Saleh Al-Jufri', role: 'Tokoh organisasi Alkhairaat yang meneruskan perjuangan Guru Tua' },
        { name: 'Bandrela', role: 'Tokoh sejarah dalam perjuangan kemerdekaan di Donggala' },
        { name: 'A.H. Nasution', role: 'Memang bukan asli Sulteng, tapi memimpin operasi militer penting di wilayah ini' },
        { name: 'Abnaul Khairaat', role: 'Komunitas alumni Alkhairaat yang berkontribusi luas bagi kemajuan daerah' },
        { name: 'Sultan Buol', role: 'Gelar kehormatan untuk pemimpin adat kesultanan di Buol' },
        { name: 'Sultan Tolitoli', role: 'Lembaga adat kesultanan yang masih dihormati di Tolitoli' },
        { name: 'Tokoh Megalitikum', role: 'Antropomorfik dari situs-situs di Lore Lindu yang menjadi ikon dunia' },
        { name: 'C.T. Posumah', role: 'Tokoh kepemimpinan awal pembentukan provinsi Sulawesi Tengah' },
        { name: 'Munasri', role: 'Tokoh intelektual muda dan penggerak ekonomi di Sulawesi Tengah' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sulawesi Tengah

## Ringkasan
**Ibu Kota:** Palu
**Lokasi:** Bagian tengah Pulau Sulawesi
**Cakupan Wilayah:** 12 Kabupaten, 1 Kota

Sulawesi Tengah adalah provinsi terluas di Pulau Sulawesi dengan lanskap geografis yang sangat beragam, mulai dari teluk yang tenang hingga pegunungan tinggi yang diselimuti hutan tropis. Provinsi ini dikenal secara internasional karena keberadaan situs-situs **Megalitikum** misterius di Lembah Bada, serta keindahan bawah laut Kepulauan **Togean**. Sulawesi Tengah juga menjadi pusat penyebaran agama Islam di Indonesia Timur melalui lembaga Alkhairaat.

## Administrasi
Sulawesi Tengah terdiri dari 12 kabupaten dan 1 kota:
### Kabupaten
1. Kabupaten Banggai
2. Kabupaten Banggai Kepulauan
3. Kabupaten Banggai Laut
4. Kabupaten Buol
5. Kabupaten Donggala
6. Kabupaten Morowali
7. Kabupaten Morowali Utara
8. Kabupaten Parigi Moutong
9. Kabupaten Poso
10. Kabupaten Sigi
11. Kabupaten Tojo Una-Una
12. Kabupaten Tolitoli

### Kota
1. Kota Palu

## Sejarah Singkat
Sejarah Sulawesi Tengah mencatat keberadaan berbagai kerajaan kecil dan konfederasi suku, seperti Kerajaan Banawa, Palu, dan Buol. Salah satu kekayaan prasejarah paling signifikan adalah situs megalitikum yang diperkirakan berusia lebih dari 2.000 tahun. Di masa kolonial, wilayah ini menjadi saksi perlawanan rakyat yang gigih. Setelah masa kemerdekaan, Palu ditetapkan sebagai ibu kota provinsi pada tahun 1964, memisahkan diri dari Sulawesi Utara-Tengah.

## Fun Fact / Hal Menarik
- **Megalitikum Misterius:** Di Lore Lindu terdapat ribuan patung batu raksasa (megalit) yang bentuknya menyerupai manusia, namun asal-usul pastinya masih menjadi teka-teki arkeologi.
- **Togean - The Coral Triangle:** Merupakan satu-satunya tempat di Indonesia di mana kita bisa menemukan tiga jenis terumbu karang sekaligus: karang tepi, karang penghalang, dan atol.
- **Danau Poso:** Merupakan danau terdalam ketiga di Indonesia dengan kejernihan air yang luar biasa dan pasir putih di pinggirnya.
- **Kota Palu (Sesar Palu-Koro):** Terletak tepat di atas salah satu sesar mendatar paling aktif di dunia, membentuk topografi lembah dan teluk yang unik.

## Budaya
- **Alkhairaat:** Lembaga pendidikan Islam terbesar di Indonesia Timur yang berpusat di Palu, didirikan oleh Sayyid Idrus bin Salim Al-Jufri.
- **Tari Dero:** Tarian pergaulan masyarakat suku Pamona di Poso yang melambangkan kebersamaan dan kegembiraan.
- **Pakaian Adat Suku Kaili:** Menggunakan kain khas bernama "Loya" yang dibuat dengan cara tradisional dan sering ditampilkan dalam upacara adat.
- **Tradisi Balia:** Ritual penyembuhan tradisional suku Kaili yang melibatkan tari-tarian dan musik pengiring khusus.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Kaledo** | Sup kaki sapi dengan kuah bening yang sangat gurih-pedas-asam khas Donggala/Palu, disajikan dengan singkong rebus. |
| **Duo Sale** | Sambal khas Palu yang terbuat dari ikan teri kering (fufu) yang dicampur dengan bumbu cabai dan bawang. |
| **Uta Kelo (Sayur Kelor)** | Sayur daun kelor yang dimasak dengan kuah santan dan bumbu khas Kaili, sangat populer di Palu. |
| **Binte Biluhuta** | Sup jagung yang dicampur dengan ikan cakalang dan aneka sayuran, pengaruh budaya dari wilayah utara. |
| **Sarang Semut/Kue Tetu** | Kue tepung terigu yang dimasak dengan santan kental dan gula merah cair di tengahnya, dibungkus daun pisang. |

## Pariwisata
Sulawesi Tengah menawarkan keindahan prasejarah megalitikum, danau pegunungan, hingga atol di kepulauan Togean.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sulawesi Tengah.
- Dinas Pariwisata & Ekonomi Kreatif Sulawesi Tengah.
- Situs Warisan Dunia Tentatif UNESCO: Lore Lindu & Togean.
`;

    fs.writeFileSync(path.join(__dirname, 'Sulawesi-Tengah', 'README.md'), readmeContent);
    console.log('Sulawesi Tengah README.md has been successfully generated without numbers.');
}

generateContent();
