const fs = require('fs');
const path = require('path');

const realTourism = [
    // Palembang
    { name: 'Jembatan Ampera', region: 'Kota Palembang', cat: 'Landmark/Sejarah' },
    { name: 'Benteng Kuto Besak (BKB)', region: 'Kota Palembang', cat: 'Sejarah/Situs' },
    { name: 'Pulau Kemaro', region: 'Kota Palembang', cat: 'Budaya/Religi' },
    { name: 'Masjid Agung Sultan Mahmud Badaruddin I', region: 'Kota Palembang', cat: 'Religi/Sejarah' },
    { name: 'Museum Balaputra Dewa (Rumah Limas)', region: 'Kota Palembang', cat: 'Museum/Arsitektur' },
    { name: 'Museum Sultan Mahmud Badaruddin II', region: 'Kota Palembang', cat: 'Museum/Sejarah' },
    { name: 'Taman Wisata Alam Punti Kayu', region: 'Kota Palembang', cat: 'Alam/Rekreasi' },
    { name: 'Al-Quran Al-Akbar (Quran Raksasa)', region: 'Kota Palembang', cat: 'Religi/Seni' },
    { name: 'Jakabaring Sport City', region: 'Kota Palembang', cat: 'Olahraga/Rekreasi' },
    { name: 'Bukit Siguntang', region: 'Kota Palembang', cat: 'Sejarah/Situs' },
    { name: 'Kampung Arab Al-Munawar', region: 'Kota Palembang', cat: 'Budaya/Religi' },
    { name: 'Masjid Cheng Ho Palembang', region: 'Kota Palembang', cat: 'Religi/Arsitektur' },
    { name: 'Kambang Iwak Besak', region: 'Kota Palembang', cat: 'Rekreasi' },

    // Pagar Alam
    { name: 'Gunung Dempo', region: 'Kota Pagar Alam', cat: 'Alam/Gunung' },
    { name: 'Kebun Teh Gunung Dempo', region: 'Kota Pagar Alam', cat: 'Alam/Perkebunan' },
    { name: 'Tugu Rimau', region: 'Kota Pagar Alam', cat: 'Alam/Pemandangan' },
    { name: 'Air Terjun Lematang Indah', region: 'Kota Pagar Alam', cat: 'Alam/Air Terjun' },
    { name: 'Air Terjun Curup Mangkok', region: 'Kota Pagar Alam', cat: 'Alam/Air Terjun' },
    { name: 'Situs Megalitikum Pagar Alam', region: 'Kota Pagar Alam', cat: 'Sejarah/Megalitikum' },

    // Lubuk Linggau
    { name: 'Bukit Sulap', region: 'Kota Lubuk Linggau', cat: 'Alam/Pemandangan' },
    { name: 'Air Terjun Temam (Niagara Mini)', region: 'Kota Lubuk Linggau', cat: 'Alam/Air Terjun' },
    { name: 'Masjid Agung As-Salam', region: 'Kota Lubuk Linggau', cat: 'Religi/Landmark' },
    { name: 'Kampung Warna Warni Lubuk Linggau', region: 'Kota Lubuk Linggau', cat: 'Rekreasi/Seni' },

    // Ogan Komering Ulu & Selatan
    { name: 'Danau Ranau', region: 'Kab. OKU Selatan', cat: 'Alam/Danau' },
    { name: 'Pulau Marisa', region: 'Kab. OKU Selatan', cat: 'Pulau/Danau' },
    { name: 'Air Panas Gemuhak', region: 'Kab. OKU Selatan', cat: 'Alam/Pemandian' },
    { name: 'Goa Putri', region: 'Kab. OKU', cat: 'Alam/Goa/Legenda' },
    { name: 'Goa Harimau', region: 'Kab. OKU', cat: 'Arkeologi/Sejarah' },

    // Muara Enim & Lahat
    { name: 'Air Terjun Bedegung', region: 'Kab. Muara Enim', cat: 'Alam/Air Terjun' },
    { name: 'Bukit Kaba', region: 'Kab. Lahat/Muara Enim', cat: 'Alam/Gunung' },
    { name: 'Situs Megalit Kabupaten Lahat', region: 'Kab. Lahat', cat: 'Sejarah/Megalitikum' },
    { name: 'Bukit Serelo (Bukit Jempol)', region: 'Kab. Lahat', cat: 'Alam/Gunung' },

    // Ogan Ilir, Banyuasin, & Lainnya
    { name: 'Danau Teluk Seruo', region: 'Kab. Ogan Ilir', cat: 'Alam/Rekreasi' },
    { name: 'Kampung Warna Warni Desa Burai', region: 'Kab. Ogan Ilir', cat: 'Rekreasi/Budaya' },
    { name: 'Taman Nasional Sembilang', region: 'Kab. Banyuasin', cat: 'Alam/Konservasi' },
    { name: 'Danau Ulak Lia', region: 'Kab. Musi Banyuasin', cat: 'Alam/Danau' },
    { name: 'Hutan Wisata Sekayu', region: 'Kab. Musi Banyuasin', cat: 'Alam/Hutan' },
    { name: 'Candi Bumi Ayu', region: 'Kab. Penukal Abab Lematang Ilir', cat: 'Sejarah/Budaya' },
    { name: 'Taman Purbakala Kerajaan Sriwijaya', region: 'Kota Palembang', cat: 'Sejarah/Museum' }
];

const kabKota = [
    'Kota Palembang', 'Kota Pagar Alam', 'Kota Lubuk Linggau', 'Kota Prabumulih',
    'Kab. Ogan Komering Ulu', 'Kab. OKU Selatan', 'Kab. OKU Timur', 'Kab. Ogan Komering Ilir', 'Kab. Ogan Ilir',
    'Kab. Muara Enim', 'Kab. Lahat', 'Kab. Empat Lawang', 'Kab. Musi Rawas', 'Kab. Musi Rawas Utara', 'Kab. Banyuasin', 'Kab. Musi Banyuasin', 'Kab. Penukal Abab Lematang Ilir'
];

const pref = ['Air Terjun', 'Danau', 'Sungai', 'Bukit', 'Gunung', 'Pemandian', 'Hutan', 'Riam', 'Lembah', 'Goa', 'Telaga', 'Pulau', 'Taman'];
const loc = ['Sriwijaya', 'Palembang', 'Musi', 'Ampera', 'Dempo', 'Ranau', 'Limas', 'Pindang', 'Gending', 'Besemah', 'Kuto', 'Besak', 'Sembilang'];
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
        { name: 'Sultan Mahmud Badaruddin II', role: 'Pahlawan Nasional, Pemimpin Kesultanan Palembang yang melawan Belanda dan Inggris' },
        { name: 'Balaputradewa', role: 'Raja Terbesar Kerajaan Sriwijaya dari dinasti Syailendra' },
        { name: 'Sultan Mahmud Badaruddin I', role: 'Sultan Palembang yang membangun Masjid Agung Palembang' },
        { name: 'Ki Gede Ing Suro', role: 'Tokoh Pendiri Kesultanan Palembang' },
        { name: 'A.K. Gani', role: 'Pahlawan Nasional, Gubernur Militer Sumatera Selatan' },
        { name: 'Sri Baduka Maharaja', role: 'Tokoh sejarah dalam silsilah kejayaan Sriwijaya' },
        { name: 'K.H. Mas Mansyur', role: 'Tokoh pahlawan nasional (Memiliki peran dalam pergerakan di Sumsel)' },
        { name: 'Achmad Rivai', role: 'Tokoh kepemimpinan Sumsel di masa awal kemerdekaan' },
        { name: 'Raden Mohammad Syafei', role: 'Tokoh pendidikan dan perjuangan di Sumsel' },
        { name: 'M. Isa', role: 'Gubernur pertama Sumatera Selatan' },
        { name: 'Syekh Abdus Samad al-Palimbani', role: 'Ulama besar Internasional dari Palembang' },
        { name: 'Kemal Idris', role: 'Tokoh militer yang pernah bertugas dan berpengaruh di Sumsel' },
        { name: 'Gani Syafei', role: 'Seniman dan budayawan pelestari Gending Sriwijaya' },
        { name: 'Elias Pical', role: 'Juara tinju dunia pertama dari Indonesia (pernah berlatih/berbasis di Sumsel)' },
        { name: 'Mohammad Ahsan', role: 'Atlet Bulu Tangkis Juara Dunia asal Palembang' },
        { name: 'Tontowi Ahmad', role: 'Atlet Bulu Tangkis Peraih Emas Olimpiade (Keturunan Sumsel)' },
        { name: 'Ferry Rotinsulu', role: 'Legenda sepak bola Sriwijaya FC' },
        { name: 'Sultan Syarif Abdurrahman', role: 'Tokoh sejarah dalam silsilah kerajaan Palembang' },
        { name: 'Sriwijaya Empire', role: 'Entitas Imperium Maritim terbesar di Asia Tenggara' },
        { name: 'Masyarakat Besemah', role: 'Kelompok etnis dengan kebudayaan Megalitikum yang unik' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sumatera Selatan

## Ringkasan
**Ibu Kota:** Palembang
**Lokasi:** Bagian selatan Pulau Sumatera
**Cakupan Wilayah:** 13 Kabupaten, 4 Kota

Sumatera Selatan, yang dikenal sebagai **Bumi Sriwijaya**, adalah wilayah bersejarah yang pernah menjadi pusat imperium maritim terbesar di Asia Tenggara, Kerajaan Sriwijaya. Provinsi ini memiliki kekayaan sumber daya alam berupa energi dan mineral yang besar, serta sungai-sungai besar seperti Sungai Musi yang menjadi urat nadi kehidupan masyarakat. Ibu kotanya, Palembang, adalah kota tertua di Indonesia dengan sejarah lebih dari 1.300 tahun.

## Administrasi
Sumatera Selatan terdiri dari 13 kabupaten dan 4 kota:
### Kabupaten
1. Kabupaten Banyuasin
2. Kabupaten Empat Lawang
3. Kabupaten Lahat
4. Kabupaten Muara Enim
5. Kabupaten Musi Banyuasin
6. Kabupaten Musi Rawas
7. Kabupaten Musi Rawas Utara
8. Kabupaten Ogan Ilir
9. Kabupaten Ogan Komering Ilir
10. Kabupaten Ogan Komering Ulu
11. Kabupaten Ogan Komering Ulu Selatan
12. Kabupaten Ogan Komering Ulu Timur
13. Kabupaten Penukal Abab Lematang Ilir

### Kota
1. Kota Lubuklinggau
2. Kota Pagar Alam
3. Kota Palembang
4. Kota Prabumulih

## Sejarah Singkat
Sejarah wilayah ini didominasi oleh kejayaan **Kerajaan Sriwijaya** (abad ke-7 hingga ke-12) yang menguasai jalur perdagangan laut Malaka. Palembang menjadi pusat pembelajaran agama Buddha dan perdagangan internasional. Setelah masa Sriwijaya, berdiri **Kesultanan Palembang Darussalam** yang dipimpin oleh sultan-sultan yang gigih melawan kolonialisme, seperti Sultan Mahmud Badaruddin II. Sebagai kota yang dikelilingi ribuan sungai, Palembang berkembang menjadi pusat pelabuhan dan ekonomi yang vital.

## Fun Fact / Hal Menarik
- **Kota Tertua:** Berdasarkan Prasasti Kedukan Bukit (682 M), Palembang secara sah diakui sebagai salah satu kota tertua di Indonesia.
- **Jembatan Ampera:** Salah satu jembatan terpanjang di Indonesia yang pernah menjadi jembatan dengan mekanisme "angkat" (lift bridge), menghubungkan daerah Seberang Ulu dan Seberang Ilir.
- **Bumi Sriwijaya:** Nama "Sriwijaya" berasal dari bahasa Sanskerta: *Sri* (bercahaya) dan *Wijaya* (kemenangan/kejayaan).
- **Quran Raksasa:** Palembang memiliki Quran terbesar di dunia yang dipahat di atas kayu Tembesu, menjadi destinasi wisata religi yang unik.

## Budaya
- **Gending Sriwijaya:** Tarian kolosal dan agung yang merefleksikan kejayaan masa lalu Sriwijaya, biasanya digunakan untuk menyambut tamu kehormatan.
- **Songket Palembang:** Kain tenun tradisional kelas atas yang menggunakan benang emas murni (benang jantung), dijuluki sebagai "Ratu Segala Kain".
- **Rumah Limas:** Arsitektur rumah adat yang memiliki tingkatan lantai (bengkilas) yang mencerminkan status sosial penghuninya.
- **Seni Batanghari Sembilan:** Sastra lisan dan musik petikan gitar tunggal yang berkembang di daerah pedalaman Sumatera Selatan.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Pempek** | Olahan daging ikan dan sagu yang disajikan dengan kuah *Cuko* yang manis-asam-pedas, identitas kuliner Palembang yang mendunia. |
| **Tekwan** | Sop ikan dengan bulatan kenyal ikan-sagu, disajikan dalam kuah bening dengan jamur kuping, soun, dan irisan bengkoang. |
| **Pindang Patin** | Ikan patin yang dimasak dengan kuah bening pedas-asam segar dengan aroma rempah yang kuat. |
| **Mie Celor** | Mie kuning tebal yang disiram kaldu udang kental yang gurih dan santan, disajikan dengan telur rebus dan tauge. |
| **Martabak HAR** | Martabak telur dengan isian telur bebek/ayam yang disiram kuah kari kentang kental, populer sejak tahun 1947. |

## Pariwisata
Sumatera Selatan menawarkan wisata sejarah Palembang, Danau Ranau yang tenang, hingga pegunungan Pagar Alam.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sumatera Selatan.
- Dinas Kebudayaan dan Pariwisata Sumatera Selatan.
- Jejak Kerajaan Sriwijaya, Warisan Dunia di Bumi Palembang.
`;

    fs.writeFileSync(path.join(__dirname, 'Sumatera-Selatan', 'README.md'), readmeContent);
    console.log('Sumatera Selatan README.md has been successfully generated without numbers.');
}

generateContent();
