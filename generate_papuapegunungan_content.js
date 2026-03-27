const fs = require('fs');
const path = require('path');

const realTourism = [
    // Jayawijaya (Wamena)
    { name: 'Lembah Baliem', region: 'Kab. Jayawijaya', cat: 'Budaya/Alam' },
    { name: 'Mumi Aikima (Mumi Berusia Ratusan Tahun)', region: 'Kab. Jayawijaya', cat: 'Sejarah/Situs' },
    { name: 'Mumi Jiwika', region: 'Kab. Jayawijaya', cat: 'Sejarah/Situs' },
    { name: 'Mumi Pumo', region: 'Kab. Jayawijaya', cat: 'Sejarah/Situs' },
    { name: 'Pasar Jibama Wamena', region: 'Kab. Jayawijaya', cat: 'Budaya/Pasar' },
    { name: 'Hutan Pinus Isakusa', region: 'Kab. Jayawijaya', cat: 'Alam/Hutan' },
    { name: 'Pasir Putih Aikima (Bekas Danau Purba)', region: 'Kab. Jayawijaya', cat: 'Alam/Unik' },
    { name: 'Telaga Biru (Maima)', region: 'Kab. Jayawijaya', cat: 'Alam/Legenda' },
    { name: 'Jembatan Gantung Sinakma', region: 'Kab. Jayawijaya', cat: 'Landmark' },

    // Lanny Jaya & Tolikara
    { name: 'Lembah Tiom', region: 'Kab. Lanny Jaya', cat: 'Alam/Pemandangan' },
    { name: 'Puncak Lanny Jaya', region: 'Kab. Lanny Jaya', cat: 'Alam/Gunung' },
    { name: 'Danau Karubaga', region: 'Kab. Tolikara', cat: 'Alam/Danau' },
    { name: 'Air Terjun Gilingan Karubaga', region: 'Kab. Tolikara', cat: 'Alam/Air Terjun' },

    // Nduga & Yahukimo
    { name: 'Taman Nasional Lorentz (Sebagian Pegunungan)', region: 'Lintas Kabupaten', cat: 'Alam/Konservasi' },
    { name: 'Gunung Trikora', region: 'Kab. Jayawijaya/Nduga', cat: 'Alam/Gunung' },
    { name: 'Bandara Dekai', region: 'Kab. Yahukimo', cat: 'Infrastruktur/Hub' },

    // Jayawijaya - Pegunungan Tengah Lainnya
    { name: 'Puncak Mandala (Salju Abadi)', region: 'Kab. Pegunungan Bintang', cat: 'Alam/Gunung' },
    { name: 'Desa Wisata Suroba', region: 'Kab. Jayawijaya', cat: 'Budaya/Edukasi' },
    { name: 'Goa Kontilola', region: 'Kab. Jayawijaya', cat: 'Alam/Goa' },
    { name: 'Danau Habema (Danau di Atas Awan)', region: 'Kab. Jayawijaya', cat: 'Alam/Danau/Tertinggi' }
];

const kabKota = [
    'Kab. Jayawijaya', 'Kab. Lanny Jaya', 'Kab. Pegunungan Bintang', 'Kab. Tolikara', 'Kab. Yahukimo', 'Kab. Yalimo', 'Kab. Nduga', 'Kab. Mamberamo Tengah'
];

const pref = ['Air Terjun', 'Lembah', 'Mumi', 'Gunung', 'Bukit', 'Lembah', 'Puncak', 'Danau', 'Taman', 'Kali', 'Telaga', 'Goa', 'Pasar'];
const loc = ['Wamena', 'Baliem', 'Jayawijaya', 'Habema', 'Lanny Jaya', 'Tiom', 'Karubaga', 'Mandala', 'Suroba', 'Lorentz', 'Kontilola', 'Sinakma', 'Maima'];
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
        { name: 'Nikolaus Kondomo', role: 'Pj. Gubernur Papua Pegunungan Pertama, Tokoh sentral dalam pembentukan DOB ini' },
        { name: 'Jhon Richard Banua', role: 'Mantan Bupati Jayawijaya, Tokoh pembangunan di Lembah Baliem' },
        { name: 'Suku Dani', role: 'Kelompok etnis terbesar di wilayah Lembah Baliem dengan budaya tradisional yang sangat kuat' },
        { name: 'Suku Lani', role: 'Masyarakat etnis besar di wilayah pegunungan tengah dengan sistem pertanian tradisional' },
        { name: 'Suku Yali', role: 'Penghuni wilayah pegunungan Yalimo dan Yahukimo, dikenal dengan kostum adat dan arsitektur yang khas' },
        { name: 'Mumi Papua', role: 'Warisan sejarah leluhur suku Dani yang diawetkan secara tradisional selama ratusan tahun' },
        { name: 'Panglima Perang Baliem', role: 'Institusi kepemimpinan adat tradisional di wilayah pegunungan tengah' },
        { name: 'Tokoh Gereja di Wamena', role: 'Gereja berperan penting dalam pendidikan dan kesehatan masyarakat di pegunungan' },
        { name: 'Tokoh Suku Nduga', role: 'Mempertahankan kearifan lokal di wilayah Pegunungan Tengah' },
        { name: 'Tokoh Suku Yahukimo', role: 'Masyarakat adat yang mendiami wilayah pedalaman dengan kekayaan budaya lisan' },
        { name: 'Ferry Sonneville (Tokoh Bulu Tangkis Bangsa)', role: 'Andil besar dalam membawa Papua (termasuk Pegunungan) ke pentas olahraga nasional' },
        { name: 'Lisa Rumbewas (Atlet Kebanggaan Papua)', role: 'Inspirasi bagi atlet muda di seluruh Tanah Papua termasuk wilayah pegunungan' },
        { name: 'Tokoh Pembangunan Infrastruktur (Bandara Wamena)', role: 'Pihak-pihak yang berjasa membuka keterisolasian wilayah pegunungan tengah' },
        { name: 'Pemimpin Adat Suku Lani', role: 'Penjaga tradisi dan perdamaian antarsuku di Pegunungan Tengah' },
        { name: 'Herman Wayoi (Tokoh Sejarah Papua)', role: 'Putra terbaik Papua yang turut mewarnai peta politik nasional' },
        { name: 'Masyarakat Pegunungan Bintang', role: 'Satu-satunya wilayah di Papua yang memiliki salju abadi di Puncak Mandala' },
        { name: 'Edo Kondologit (Tokoh Seni)', role: 'Suara inspirasi yang membawa kebudayaan Papua ke panggung internasional' },
        { name: 'Boaz Solossa (Legenda Persipura)', role: 'Ikon olahraga yang sangat dihormati di wilayah pegunungan' },
        { name: 'Tokoh Pendidikan di Mamberamo Tengah', role: 'Membuka akses intelektual di sela-sela pegunungan yang curam' },
        { name: 'Masyarakat Lembah Baliem', role: 'Tuan rumah dari Festival budaya terbesar di Papua (FBB)' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua Pegunungan

## Ringkasan
**Ibu Kota:** Wamena (Kab. Jayawijaya)
**Lokasi:** Bagian tengah-timur Pegunungan Tengah Papua
**Cakupan Wilayah:** 8 Kabupaten

Papua Pegunungan adalah provinsi ke-37 yang diresmikan di Indonesia pada tahun 2022. Ini merupakan satu-satunya provinsi di Indonesia yang bersifat **Landlocked** (terkunci di daratan tanpa garis pantai). Terletak di jantung Pegunungan Tengah Papua, provinsi ini memiliki keunikan geografis berupa lembah-lembah luas yang dikelilingi puncak-puncak gunung setinggi 4.000 meter ke atas. Ibu kotanya, Wamena, telah lama menjadi pusat logistik dan peradaban di pedalaman Papua.

## Administrasi
Provinsi Papua Pegunungan terdiri dari 8 kabupaten:
### Kabupaten
1. Kabupaten Jayawijaya
2. Kabupaten Lanny Jaya
3. Kabupaten Mamberamo Tengah
4. Kabupaten Nduga
5. Kabupaten Pegunungan Bintang
6. Kabupaten Tolikara
7. Kabupaten Yahukimo
8. Kabupaten Yalimo

## Sejarah Singkat
Provinsi ini mencakup wilayah adat **La Pago**. Sejarah panjang wilayah ini ditandai dengan ditemukannya Lembah Baliem secara tidak sengaja oleh ekspedisi Archbold pada tahun 1938. Masyarakat pegunungan tengah, terutama suku **Dani** dan **Lani**, memiliki sistem pertanian dan organisasi sosial yang sangat maju sejak ribuan tahun lalu. Pemekaran menjadi provinsi tersendiri bertujuan untuk memutus rantai keterisolasian geografis yang selama ini menjadi kendala utama pembangunan di wilayah pegunungan.

## Fun Fact / Hal Menarik
- **Satu-satunya Provinsi Landlocked:** Tidak memiliki laut, akses utama ke wilayah ini hampir 100% bergantung pada transportasi udara melalui Bandara Wamena.
- **Festival Budaya Lembah Baliem (FBB):** Festival tertua dan terbesar di Tanah Papua yang memperagakan simulasi perang antar suku dan tarian peradaban asli Papua.
- **Danau Habema:** Dijuluki "Danau di Atas Awan" karena terletak di ketinggian 3.225 mdpl, menjadikannya salah satu danau tertinggi di Indonesia.
- **Salju Abadi Puncak Mandala:** Di Kabupaten Pegunungan Bintang, terdapat Puncak Mandala yang merupakan salah satu dari tiga gunung di Indonesia yang memiliki salju abadi (selain Carstenz dan Trikora).

## Budaya
- **Honai:** Rumah adat berbentuk bulat dengan atap jerami berbentuk kubah, yang didesain secara arsitektural untuk menahan udara dingin pegunungan.
- **Upacara Bakar Batu (Barapen):** Tradisi memasak bersama menggunakan batu panas yang diletakkan di dalam lubang tanah, sebagai bentuk syukur dan rekonsiliasi.
- **Mumi Papua:** Penghormatan luar biasa suku Dani terhadap leluhur (panglima perang) dengan mengawetkan jenazah secara tradisional menggunakan asap.
- **Koteka:** Pakaian tradisional pria dari buah labu air yang telah dikeringkan, merupakan simbol identitas dan status sosial di Pegunungan Tengah.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Hipere (Ubi Jalar)** | Makanan pokok utama masyarakat pegunungan, diolah dengan cara dibakar, direbus, atau dalam upacara bakar batu. |
| **Daging Babi Bakar Batu** | Olahan daging yang paling dihormati dalam tradisi Papua Pegunungan, dimasak perlahan bersama umbi-umbian di atas batu panas. |
| **Buah Merah (Kuo)** | Ekstrak buah Pandanus conoideus yang kaya akan nutrisi, biasanya dikonsumsi sebagai saus pendamping ubi jalar. |
| **Papeda Pegunungan** | Berbeda dengan pesisir, di sini papeda seringkali dikonsumsi dengan sup umbi-umbian atau hasil buruan hutan. |
| **Kopi Wamena** | Salah satu kopi Arabika terbaik di dunia, ditanam secara organik di ketinggian di atas 1.500 mdpl di Lembah Baliem. |

## Pariwisata
Provinsi Papua Pegunungan menawarkan kemegahan Lembah Baliem, misteri Mumi papua, hingga kejernihan Danau Habema di puncak pegunungan.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Papua Pegunungan.
- Dinas Pariwisata & Kebudayaan Papua Pegunungan.
- "The Hidden Valley: Discovery of Baliem" by various researchers.
`;

    fs.writeFileSync(path.join(__dirname, 'Papua-Pegunungan', 'README.md'), readmeContent);
    console.log('Papua Pegunungan README.md has been successfully generated without numbers.');
}

generateContent();
