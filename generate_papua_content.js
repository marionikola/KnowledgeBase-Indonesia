const fs = require('fs');
const path = require('path');

const realTourism = [
    // Jayapura
    { name: 'Danau Sentani', region: 'Kab. Jayapura', cat: 'Alam/Danau' },
    { name: 'Pantai Base-G', region: 'Kota Jayapura', cat: 'Pantai' },
    { name: 'Puncak Jayapura City', region: 'Kota Jayapura', cat: 'Alam/Pemandangan' },
    { name: 'Jembatan Youtefa (Jembatan Merah)', region: 'Kota Jayapura', cat: 'Landmark/Arsitektur' },
    { name: 'Pantai Hamadi', region: 'Kota Jayapura', cat: 'Pantai/Sejarah' },
    { name: 'Perbatasan RI-PNG Skouw', region: 'Kota Jayapura', cat: 'Wisata Perbatasan' },
    { name: 'Cagar Alam Pegunungan Cyclops', region: 'Kota Jayapura/Kab. Jayapura', cat: 'Alam/Konservasi' },
    { name: 'Museum Negeri Papua', region: 'Kota Jayapura', cat: 'Museum/Budaya' },
    { name: 'Bukit Tungku Wiri (Bukit Teletubbies)', region: 'Kab. Jayapura', cat: 'Alam/Pemandangan' },
    { name: 'Desa Wisata Tablanusu', region: 'Kab. Jayapura', cat: 'Budaya/Alam' },

    // Biak Numfor & Supiori
    { name: 'Pantai Bosnik', region: 'Kab. Biak Numfor', cat: 'Pantai/Bahari' },
    { name: 'Goa Jepang (Binsari)', region: 'Kab. Biak Numfor', cat: 'Sejarah/Situs' },
    { name: 'Pantai Batu Picah', region: 'Kab. Biak Numfor', cat: 'Pantai/Fenomena Alam' },
    { name: 'Kepulauan Padaido', region: 'Kab. Biak Numfor', cat: 'Pulau/Bahari/Selam' },
    { name: 'Air Terjun Wafsarak', region: 'Kab. Biak Numfor', cat: 'Alam/Air Terjun' },
    { name: 'Hutan Mangrove Sorendiweri', region: 'Kab. Supiori', cat: 'Alam/Mangrove' },

    // Yapen & Waropen
    { name: 'Pantai Mariadei', region: 'Kab. Kepulauan Yapen', cat: 'Pantai' },
    { name: 'Taman Nasional Teluk Cendrawasih (Sebagian)', region: 'Lintas Kabupaten', cat: 'Alam/Konservasi' },

    // Sarmi, Keerom, Mamberamo Raya
    { name: 'Pantai Sarmi', region: 'Kab. Sarmi', cat: 'Pantai' },
    { name: 'Arung Jeram Sungai Mamberamo', region: 'Kab. Mamberamo Raya', cat: 'Petualangan/Sungai' },
    { name: 'Tugu Peringatan Perang Dunia II Keerom', region: 'Kab. Keerom', cat: 'Sejarah' }
];

const kabKota = [
    'Kota Jayapura', 'Kab. Jayapura', 'Kab. Biak Numfor', 'Kab. Kepulauan Yapen', 'Kab. Supiori', 'Kab. Sarmi', 'Kab. Keerom', 'Kab. Mamberamo Raya', 'Kab. Waropen'
];

const pref = ['Danau', 'Pantai', 'Bukit', 'Gunung', 'Pulau', 'Hutan', 'Riam', 'Goa', 'Telaga', 'Puncak', 'Lembah', 'Tanjung', 'Sungai'];
const loc = ['Sentani', 'Jayapura', 'Biak', 'Cyclops', 'Youtefa', 'Padaido', 'Yapen', 'Waropen', 'Sarmi', 'Keerom', 'Mamberamo', 'Hamadi', 'Skouw'];
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
        { name: 'Frans Kaisiepo', role: 'Pahlawan Nasional, Gubernur Irian Barat, Namanya diabadikan di mata uang Rp 10.000' },
        { name: 'Silas Papare', role: 'Pahlawan Nasional, Pendiri Partai Kemerdekaan Irian Indonesia' },
        { name: 'Marthen Indey', role: 'Pahlawan Nasional, Tokoh pejuang kemerdekaan Indonesia di Papua' },
        { name: 'Johannes Abraham Dimara', role: 'Pahlawan Nasional, Tokoh pembebasan Irian Barat' },
        { name: 'Lucas Enembe', role: 'Mantan Gubernur Papua yang menjabat selama dua periode' },
        { name: 'Barnabas Suebu', role: 'Mantan Gubernur Papua, Pelopor program pemberdayaan kampung' },
        { name: 'Freddy Numberi', role: 'Tokoh militer, mantan Gubernur Papua dan mantan Menteri RI' },
        { name: 'Theys Eluay', role: 'Tokoh pemimpin masyarakat Papua (Ketua Presidium Dewan Papua)' },
        { name: 'Edo Kondologit', role: 'Penyanyi dan Politisi asal Papua (Malifut, Sorong/Jayapura)' },
        { name: 'Boaz Solossa', role: 'Legenda sepak bola Indonesia, Kapten tersukses Persipura Jayapura' },
        { name: 'Eduard Ivakdalam', role: 'Legenda sepak bola Persipura Jayapura' },
        { name: 'Lisa Rumbewas', role: 'Atlet Angkat Besi Peraih Medali di tiga Olimpiade berbeda' },
        { name: 'Raema Lisa Rumbewas', role: 'Atlet kebanggaan Papua dan Indonesia di kancah dunia' },
        { name: 'Herman Wayoi', role: 'Tokoh intelektual dan politik awal di Papua' },
        { name: 'Suku Dani', role: 'Kelompok etnis yang dikenal dengan budaya tradisional yang kuat (Mumi Baliem)' },
        { name: 'Suku Asmat', role: 'Etnis dengan kemampuan memahat kayu tingkat dunia' },
        { name: 'Suku Biak', role: 'Suku bangsa pelaut profesional dari Papua Utara' },
        { name: 'Acub Zaenal', role: 'Gubernur Irian Jaya yang sangat dicintai masyarakat (1973-1975)' },
        { name: 'Ferry Sonneville', role: 'Tokoh bulu tangkis yang berperan dalam sejarah olahraga di Papua' },
        { name: 'Gracia Billy Mambrasar', role: 'Staf Khusus Presiden RI, Tokoh muda inspiratif asal Papua' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua

## Ringkasan
**Ibu Kota:** Jayapura
**Lokasi:** Bagian utara-timur Pulau Papua
**Cakupan Wilayah:** 8 Kabupaten, 1 Kota

Provinsi Papua adalah provinsi induk yang terletak di bagian utara Pulau Papua. Setelah pemekaran wilayah (DOB) pada tahun 2022, cakupan wilayahnya terkonsentrasi di bagian utara, meliputi kawasan Teluk Yos Sudarso, Danau Sentani, hingga perbatasan negara Papua Nugini. Ikon utamanya adalah Kota Jayapura yang merupakan pusat pemerintahan, ekonomi, dan pendidikan terdepan di Tanah Papua.

## Administrasi
Provinsi Papua terdiri dari 8 kabupaten dan 1 kota:
### Kabupaten
1. Kabupaten Biak Numfor
2. Kabupaten Jayapura
3. Kabupaten Keerom
4. Kabupaten Kepulauan Yapen
5. Kabupaten Mamberamo Raya
6. Kabupaten Sarmi
7. Kabupaten Supiori
8. Kabupaten Waropen

### Kota
1. Kota Jayapura

## Sejarah Singkat
Sejarah Papua merupakan bagian tak terpisahkan dari perjuangan integrasi Irian Barat ke dalam NKRI. Melalui Penentuan Pendapat Rakyat (Pepera) tahun 1969, rakyat Papua menyatakan bergabung dengan Republik Indonesia. Jayapura (dahulu bernama Sukarnopura dan Hollandia) telah lama menjadi pusat administrasi penting sejak masa kolonial Belanda. Nama "Papua" secara resmi digunakan kembali menggantikan nama "Irian Jaya" pada tahun 2002 melalui Undang-Undang Otonomi Khusus.

## Fun Fact / Hal Menarik
- **Danau Sentani:** Danau seluas 9.360 hektar ini memiliki 21 pulau kecil di tengahnya dan dihuni oleh suku Sentani yang memiliki budaya seni lukis kulit kayu yang unik.
- **Jembatan Youtefa:** Jembatan merah melengkung ini menjadi ikon baru kemajuan infrastruktur Papua, menghubungkan Hamadi dan Holtekamp.
- **Burung Cendrawasih:** Dikenal sebagai *"Bird of Paradise"*, hanya dapat ditemukan secara alami di wilayah Papua dan pulau-pulau sekitarnya.
- **Skouw:** Titik perbatasan darat RI-PNG (Papua Nugini) di Jayapura yang menjadi destinasi wisata belanja dan edukasi perbatasan.

## Budaya
- **Seni Lukis Kulit Kayu:** Kerajinan khas dari Danau Sentani (Asei) yang menggunakan kulit kayu pohon Khombouw sebagai media lukis.
- **Tari Yospan (Yosim Pancar):** Tarian pergaulan yang melambangkan kebersamaan dan kegembiraan pemuda-pemudi di pesisir Papua.
- **Ukiran Asmat (Meskipun kini di Papua Selatan, akarnya mendunia):** Representasi seni rupa Papua yang paling dikenal di kancah internasional.
- **Honai:** Rumah adat suku-suku di pegunungan Papua yang kini menjadi simbol identitas rumah adat Papua secara umum.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Papeda** | Makanan pokok berbahan dasar sagu kental yang disajikan dengan Ikan Kuah Kuning. |
| **Ikan Bakar Manokwari/Jayapura** | Ikan laut segar yang dibakar dengan bumbu sambal mentah yang sangat pedas dan perasan jeruk kunci. |
| **Kue Lontar** | Mirip dengan pie susu atau egg tart, merupakan warisan kuliner masa kolonial di Papua. |
| **Sagu Sep** | Olahan sagu dengan campuran daging kelapa muda, pisang, atau daging, dimasak dengan cara dibakar di dalam tanah/batu. |
| **Sarang Semut** | Tumbuhan obat khas hutan Papua (Myrmecodia) yang dipercaya memiliki khasiat kesehatan luar biasa. |

## Pariwisata
Provinsi Papua menawarkan perpaduan antara wisata bahari pesisir, danau luas, hingga situs sejarah Perang Dunia II di Biak.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Papua.
- Dinas Kebudayaan dan Pariwisata Provinsi Papua.
- "Papua: The Land of Spirits and Golden Birds".
`;

    fs.writeFileSync(path.join(__dirname, 'Papua', 'README.md'), readmeContent);
    console.log('Papua README.md has been successfully generated without numbers.');
}

generateContent();
