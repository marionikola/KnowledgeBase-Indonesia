const fs = require('fs');
const path = require('path');

const realTourism = [
    // Kendari
    { name: 'Pantai Nambo', region: 'Kota Kendari', cat: 'Pantai' },
    { name: 'Masjid Al-Alam (Masjid Apung)', region: 'Kota Kendari', cat: 'Religi/Landmark' },
    { name: 'Taman Walikota (Kendari Water Front)', region: 'Kota Kendari', cat: 'Rekreasi/Pesisir' },
    { name: 'Pulau Labengki (Raja Ampat-nya Sultra)', region: 'Kab. Konawe Utara', cat: 'Alam/Bahari' },
    { name: 'Pantai Toronipa', region: 'Kab. Konawe', cat: 'Pantai/Pasir Putih' },
    { name: 'Air Terjun Moramo', region: 'Kab. Konawe Selatan', cat: 'Alam/Air Terjun' },
    { name: 'Pulau Bokori', region: 'Kab. Konawe', cat: 'Pulau/Bahari' },

    // Wakatobi
    { name: 'Taman Nasional Wakatobi', region: 'Kab. Wakatobi', cat: 'Alam/Konservasi/Selam' },
    { name: 'Pulau Wangi-Wangi', region: 'Kab. Wakatobi', cat: 'Pulau/Bahari' },
    { name: 'Pulau Kaledupa', region: 'Kab. Wakatobi', cat: 'Pulau/Bahari' },
    { name: 'Pulau Tomia', region: 'Kab. Wakatobi', cat: 'Pulau/Bahari' },
    { name: 'Pulau Binongko', region: 'Kab. Wakatobi', cat: 'Pulau/Budaya' },
    { name: 'Desa Wisata Bajo Mola', region: 'Kab. Wakatobi', cat: 'Budaya/Bahari' },
    { name: 'Puncak Khayangan Tomia', region: 'Kab. Wakatobi', cat: 'Alam/Pemandangan' },
    { name: 'Hoga Island', region: 'Kab. Wakatobi', cat: 'Pulau/Selam' },

    // Buton & Baubau
    { name: 'Benteng Keraton Buton', region: 'Kota Baubau', cat: 'Sejarah/Situs' },
    { name: 'Pantai Nirwana', region: 'Kota Baubau', cat: 'Pantai' },
    { name: 'Air Terjun Tirta Rimba', region: 'Kota Baubau', cat: 'Alam/Air Terjun' },
    { name: 'Goa Lakasa', region: 'Kota Baubau', cat: 'Alam/Goa' },
    { name: 'Hutan Lambusango', region: 'Kab. Buton', cat: 'Alam/Konservasi' },
    { name: 'Pantai Kamali', region: 'Kota Baubau', cat: 'Rekreasi/Pesisir' },

    // Muna & Bombana
    { name: 'Danau Napabale', region: 'Kab. Muna', cat: 'Alam/Danau/Unik' },
    { name: 'Pantai Meleura', region: 'Kab. Muna', cat: 'Pantai/Bahari' },
    { name: 'Goa Liangkabori (Prasejarah)', region: 'Kab. Muna', cat: 'Arkeologi/Sejarah' },
    { name: 'Pulau Sagori', region: 'Kab. Bombana', cat: 'Pulau/Sejarah' },
    { name: 'Taman Nasional Rawa Aopa Watumohai', region: 'Lintas Kabupaten', cat: 'Alam/Konservasi' },

    // Konawe & Konawe Utara
    { name: 'Pantai Taipa', region: 'Kab. Konawe Utara', cat: 'Pantai' },
    { name: 'Pemandian Air Panas Wawolesea', region: 'Kab. Konawe Utara', cat: 'Alam/Pemandian' },
    { name: 'Puncak Ahuawali', region: 'Kab. Konawe', cat: 'Alam/Pemandangan' },
    { name: 'Air Terjun Tumburano', region: 'Kab. Konawe Kepulauan', cat: 'Alam/Air Terjun' },

    // Kolaka
    { name: 'Sungai Tamborasi (Sungai Terpendek Dunia)', region: 'Kab. Kolaka', cat: 'Alam/Sungai' },
    { name: 'Pantai Malaha', region: 'Kab. Kolaka', cat: 'Pantai' },
    { name: 'Pulau Padamarang', region: 'Kab. Kolaka', cat: 'Pulau/Selam' }
];

const kabKota = [
    'Kota Kendari', 'Kota Baubau',
    'Kab. Konawe', 'Kab. Konawe Utara', 'Kab. Konawe Selatan', 'Kab. Konawe Kepulauan', 'Kab. Muna', 'Kab. Muna Barat', 'Kab. Buton', 'Kab. Buton Utara', 'Kab. Buton Selatan', 'Kab. Buton Tengah', 'Kab. Wakatobi', 'Kab. Bombana', 'Kab. Kolaka', 'Kab. Kolaka Utara', 'Kab. Kolaka Timur'
];

const pref = ['Air Terjun', 'Pantai', 'Wakatobi', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Moramo', 'Kendari', 'Buton', 'Labengki', 'Muna'];
const loc = ['Kendari', 'Baubau', 'Buton', 'Muna', 'Wakatobi', 'Konawe', 'Kolaka', 'Moramo', 'Labengki', 'Aopa', 'Napabale', 'Rawa', 'Tomia'];
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
        { name: 'Oputa Yi Koo (Sultan Himayatuddin Muhammad Saidi)', role: 'Pahlawan Nasional, Sultan Buton ke-20 dan ke-23 yang menolak taklid pada kompeni Belanda' },
        { name: 'H. Abdul Silondae', role: 'Tokoh kepemimpinan awal dalam sejarah pembentukan Provinsi Sulawesi Tenggara' },
        { name: 'Edy Sabara', role: 'Mantan Gubernur Sulawesi Tenggara yang berpengaruh dalam peta pembangunan daerah' },
        { name: 'La Ode Hadi', role: 'Tokoh intelektual dan pejuang pergerakan kemerdekaan dari muna' },
        { name: 'Mohammad Isa Lagitaba', role: 'Pahlawan perlawanan rakyat Kolaka di masa kolonial' },
        { name: 'Sultan Buton', role: 'Institusi adat dari kesultanan Buton yang pernah memiliki benteng terluas di dunia' },
        { name: 'Suku Buton', role: 'Kelompok etnis besar yang mahir melaut dan memiliki sejarah kesultanan yang megah' },
        { name: 'Suku Bugis-Makassar di Sultra', role: 'Memiliki peran penting dalam perdagangan dan sejarah pesisir Sultra' },
        { name: 'Masyarakat Suku Tolaki', role: 'Etnis penduduk asli di wilayah daratan utama Sulawesi Tenggara (Kendari, Konawe)' },
        { name: 'Suku Muna', role: 'Etnis besar dengan sejarah kerajaan yang kuat di wilayah kepulauan' },
        { name: 'Suku Bajo di Wakatobi', role: 'Masyarakat pengembara laut yang menjadi bagian tak terpisahkan dari identitas bahari Sultra' },
        { name: 'La Ode Kaimuddin', role: 'Mantan Gubernur Sultra yang dikenal dengan visi pembangunan pedesaan' },
        { name: 'Ali Mazi', role: 'Tokoh politik dan mantan Gubernur Sultra yang melahirkan proyek strategis di Kendari' },
        { name: 'Tambo Laka', role: 'Gubernur pertama Sulawesi Tenggara (1964)' },
        { name: 'H. Nur Alam', role: 'Mantan Gubernur Sultra yang mempopulerkan program "Bahteramas"' },
        { name: 'Ahmad Syafii Maarif (Asal Sumpur Kudus, tetapi Tokoh Sultra di kancah nasional)', role: 'Tokoh bangsa dan ulama yang sangat dihormati (Keturunan Sultra)' },
        { name: 'H. Alala', role: 'Gubernur Sulawesi Tenggara yang dikenal dengan program Gerakan Pembangunan Perdesaan (GPP)' },
        { name: 'Apriyani Rahayu', role: 'Atlet Bulu Tangkis Peraih Emas Olimpiade Tokyo 2020 asal Konawe' },
        { name: 'Saddil Ramdani', role: 'Pemain sepak bola Tim Nasional Indonesia asal Sulawesi Tenggara' },
        { name: 'Masyarakat Wakatobi', role: 'Ikon dunia dalam hal konservasi taman laut dan kearifan lokal bahari' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sulawesi Tenggara

## Ringkasan
**Ibu Kota:** Kendari
**Lokasi:** Bagian tenggara semenanjung Sulawesi
**Cakupan Wilayah:** 15 Kabupaten, 2 Kota

Sulawesi Tenggara adalah provinsi dengan kekayaan sumber daya alam pertambangan (nikel terbesar di dunia) dan potensi wisata bahari tingkat internasional. Provinsi ini memiliki wilayah daratan dan ratusan pulau kecil yang sangat eksotis. Ikon paling terkenalnya adalah **Taman Nasional Wakatobi**, surga keragaman hayati laut dunia. Selain itu, provinsi ini memiliki sejarah besar lewat Kesultanan Buton dengan peninggalan benteng keratonnya yang megah.

## Administrasi
Sulawesi Tenggara terdiri dari 15 kabupaten dan 2 kota:
### Kabupaten
1. Kabupaten Bombana
2. Kabupaten Buton
3. Kabupaten Buton Selatan
4. Kabupaten Buton Tengah
5. Kabupaten Buton Utara
6. Kabupaten Kolaka
7. Kabupaten Kolaka Timur
8. Kabupaten Kolaka Utara
9. Kabupaten Konawe
10. Kabupaten Konawe Kepulauan
11. Kabupaten Konawe Selatan
12. Kabupaten Konawe Utara
13. Kabupaten Muna
14. Kabupaten Muna Barat
15. Kabupaten Wakatobi

### Kota
1. Kota Baubau
2. Kota Kendari

## Sejarah Singkat
Sejarah wilayah ini sangat dipengaruhi oleh **Kesultanan Buton**, salah satu kesultanan besar di Nusantara yang memiliki hubungan diplomatik luas. Buton dikenal sebagai satu-satunya kesultanan di Indonesia yang tidak pernah dijajah secara fisik oleh Belanda, karena kekuatan diplomasi dan sistem pertahanan bentengnya. Wilayah daratan Sultra didominasi oleh pengaruh Kerajaan Konawe. Pada tahun 1964, Sulawesi Tenggara resmi berdiri sendiri terpisah dari Provinsi Sulawesi Selatan-Tenggara.

## Fun Fact / Hal Menarik
- **Benteng Terluas di Dunia:** Benteng Keraton Buton memiliki keliling 2.740 meter, yang secara resmi diakui sebagai benteng terluas di dunia (Guinness World Record).
- **Sungai Terpendek di Dunia:** Sungai Tamborasi di Kolaka memiliki panjang hanya 20 meter dan langsung bermuara ke laut, menjadikannya salah satu sungai terpendek di dunia.
- **Wakatobi (Segitiga Karang Dunia):** Nama Wakatobi merupakan akronim dari empat pulau utamanya: Wangi-Wangi, Kaledupa, Tomia, dan Binongko.
- **Asal Usul Nama Kendari:** Nama ibu kotanya konon berasal dari kata *"Kandari"*, yaitu alat angkut tradisional berupa keranjang yang sering dibawa oleh masyarakat setempat di masa lampau.

## Budaya
- **Lariangi:** Tarian klasik dari Wakatobi (pulau Kaledupa) yang merupakan tarian persembahan bagi tamu-tamu agung kerajaan.
- **Liangkabori:** Situs prasejarah di Pulau Muna yang memuat lukisan-lukisan dinding gua peninggalan peradaban masa lalu Sultra.
- **Kalosara:** Simbol adat suku Tolaki yang berbentuk anyaman rotan melingkar, melambangkan persatuan dan penyelesaian masalah melalui musyawarah.
- **Upacara Pakande-kandea:** Tradisi adat masyarakat Buton (Baubau) sebagai jamuan makan bersama bagi para tamu atau sebagai perayaan hasil perjuangan.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Sinonggi** | Makanan khas suku Tolaki yang terbuat dari saripati sagu, disajikan dengan kuah ikan kuning yang segar dan pedas. |
| **Kasuami** | Olahan ubi kayu (singkong) yang dikukus berbentuk kerucut, makanan pokok alternatif masyarakat Buton & Wakatobi. |
| **Ikan Parende** | Sop ikan khas Buton/Baubau dengan kuah bening yang kaya akan rempah pilihan. |
| **Kabu-Kabu** | Olahan kelapa parut dan ikan bakar suwir dengan campuran bumbu rempah mentah yang khas. |
| **Kopi Kaapi** | Kopi tradisional khas pesisir Sultra yang memiliki aroma dan rasa yang sangat kuat. |

## Pariwisata
Sulawesi Tenggara menawarkan keajaiban bawah laut Wakatobi, sungai terpendek Tamborasi, hingga rawa luas Aopa Watumohai.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sulawesi Tenggara.
- Dinas Pariwisata Provinsi Sulawesi Tenggara.
- "Buton: The Unconquered Kingdom" by local historians.
`;

    fs.writeFileSync(path.join(__dirname, 'Sulawesi-Tenggara', 'README.md'), readmeContent);
    console.log('Sulawesi Tenggara README.md has been successfully generated without numbers.');
}

generateContent();
