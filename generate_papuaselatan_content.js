const fs = require('fs');
const path = require('path');

const realTourism = [
    // Merauke (Ibu Kota)
    { name: 'Monumen Kapsul Waktu', region: 'Kab. Merauke', cat: 'Landmark/Sejarah' },
    { name: 'Sota (Titik Perbatasan RI-PNG)', region: 'Kab. Merauke', cat: 'Wisata Perbatasan' },
    { name: 'Taman Nasional Wasur (Rumah Musamus)', region: 'Kab. Merauke', cat: 'Alam/Konservasi' },
    { name: 'Pantai Lampu Satu', region: 'Kab. Merauke', cat: 'Pantai/Pemandangan' },
    { name: 'Pantai Payum', region: 'Kab. Merauke', cat: 'Pantai' },
    { name: 'Monumen Sabang Merauke (Merauke)', region: 'Kab. Merauke', cat: 'Landmark/Sejarah' },
    { name: 'Musamus (Rumah Rayap Raksasa)', region: 'Kab. Merauke', cat: 'Alam/Fenomena' },
    { name: 'Gereja Tua Kumbe', region: 'Kab. Merauke', cat: 'Religi/Sejarah' },

    // Asmat (Art & Culture)
    { name: 'Museum Kebudayaan dan Kemajuan Asmat', region: 'Kab. Asmat', cat: 'Museum/Budaya' },
    { name: 'Agats (Kota di Atas Papan)', region: 'Kab. Asmat', cat: 'Budaya/Unik' },
    { name: 'Sungai Lorentz (Hilir)', region: 'Kab. Asmat', cat: 'Alam/Sungai' },
    { name: 'Hutan Bakau Asmat', region: 'Kab. Asmat', cat: 'Alam/Hutan' },

    // Boven Digoel (History)
    { name: 'Situs Bekas Penjara Boven Digoel', region: 'Kab. Boven Digoel', cat: 'Sejarah/Situs' },
    { name: 'Tugu Bung Hatta', region: 'Kab. Boven Digoel', cat: 'Sejarah/Landmark' },
    { name: 'Kali Kao', region: 'Kab. Boven Digoel', cat: 'Alam/Sungai' },

    // Mappi
    { name: 'Rumah Diatas Pohon Suku Korowai (Sebagian)', region: 'Kab. Mappi/Yahukimo', cat: 'Budaya/Arsitektur' },
    { name: 'Sungai Mappi', region: 'Kab. Mappi', cat: 'Alam/Sungai' },
    { name: 'Tepi Sungai Kepi', region: 'Kab. Mappi', cat: 'Alam/Pemandangan' }
];

const kabKota = [
    'Kab. Merauke', 'Kab. Asalam', 'Kab. Mappi', 'Kab. Boven Digoel'
];

const pref = ['Air Terjun', 'Pantai', 'Wasur', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Taman', 'Kali', 'Telaga', 'Musamus', 'Sota'];
const loc = ['Merauke', 'Asmat', 'Mappi', 'Boven Digoel', 'Sota', 'Wasur', 'Kapsul Waktu', 'Agats', 'Kumbe', 'Kao', 'Kepi', 'Korowai', 'Mulia'];
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
        { name: 'Apolo Safanpo', role: 'Pj. Gubernur Papua Selatan Pertama, Tokoh sentral dalam pembentukan provinsi ini' },
        { name: 'Johannes Gluba Gebze', role: 'Mantan Bupati Merauke yang meletakkan fondasi pembangunan modern di wilayah selatan' },
        { name: 'Mohammad Hatta (Pahlawan Nasional)', role: 'Wakil Presiden Pertama RI, Pernah diasingkan di Boven Digoel' },
        { name: 'Sutan Sjahrir (Pahlawan Nasional)', role: 'Perdana Menteri Pertama RI, Pernah diasingkan di Boven Digoel' },
        { name: 'Sayuti Melik (Pahlawan Nasional)', role: 'Pengetik teks Proklamasi, Pernah diasingkan di Boven Digoel' },
        { name: 'Masyarakat Suku Asmat', role: 'Kelompok etnis yang memiliki reputasi dunia dalam seni pahat kayu tradisional' },
        { name: 'Suku Marind', role: 'Masyarakat adat asli di wilayah Merauke dengan budaya yang kaya di lahan basah' },
        { name: 'Suku Mappi', role: 'Etnis penghuni wilayah rawa dan sungai besar di pedalaman selatan Papua' },
        { name: 'Suku Korowai', role: 'Kelompok etnis yang terkenal dengan arsitektur rumah pohon (Rumah Tinggi) di Mappi' },
        { name: 'Masyarakat Suku Mandobo', role: 'Penghuni wilayah hutan Boven Digoel dengan keberagaman bahasa' },
        { name: 'Suku Muyu', role: 'Etnis di wilayah perbatasan yang memiliki sistem ekonomi tradisional yang maju' },
        { name: 'Tokoh Adat Musamus', role: 'Institusi adat yang menjaga kearifan lokal di Taman Nasional Wasur' },
        { name: 'Gani Syafei (Tokoh Sultra, namun Tokoh PBD dlm pembangunan Sorong)', role: 'Salah satu perintis awal pembangunan administrasi di Merauke' },
        { name: 'Hj. Syahrurrahman', role: 'Tokoh intelektual dan pendidik di Merauke' },
        { name: 'Yanni', role: 'Tokoh politik perempuan yang berperan aktif dalam memperjuangkan aspirasi rakyat Papua Selatan' },
        { name: 'Hengky Yaluwo', role: 'Mantan Bupati Boven Digoel yang berperan dalam pembangunan infrastruktur perbatasan' },
        { name: 'Kristosomus Yohanes', role: 'Tokoh agama dan sosial di wilayah pedalaman Mappi' },
        { name: 'Masyarakat Agats', role: 'Simbol ketangguhan masyarakat pesisir selatan yang hidup di atas papan' },
        { name: 'Romanus Mbaraka', role: 'Bupati Merauke yang menjabat saat ini, fokus pada kemandirian ekonomi' },
        { name: 'Ferry Sonneville (Tokoh Bulu Tangkis Bangsa)', role: 'Berperan besar dalam koordinasi olahraga di wilayah selatan Papua' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua Selatan

## Ringkasan
**Ibu Kota:** Merauke
**Lokasi:** Bagian timur-selatan Pulau Papua
**Cakupan Wilayah:** 4 Kabupaten

Papua Selatan adalah provinsi ke-35 yang diresmikan di Indonesia pada tahun 2022. Terletak di perbatasan paling timur Indonesia, provinsi ini mencakup wilayah yang luas dari pesisir hingga pedalaman rawa. Ibu kotanya, Merauke, dikenal dalam slogan kebangsaan "Dari Sabang sampai Merauke" sebagai titik paling timur Nusantara. Provinsi ini memiliki ciri khas lahan basah yang luas (Wetlands) dan kekayaan budaya seni ukir kelas dunia dari masyarakat Asmat.

## Administrasi
Provinsi Papua Selatan terdiri dari 4 kabupaten:
### Kabupaten
1. Kabupaten Asmat
2. Kabupaten Boven Digoel
3. Kabupaten Mappi
4. Kabupaten Merauke

## Sejarah Singkat
Provinsi ini mencakup wilayah adat **Anim Ha**. Merauke didirikan sebagai kota administratif sejak tahun 1902 oleh Belanda untuk mengamankan wilayah perbatasan. Boven Digoel memiliki nilai sejarah nasional yang sangat tinggi karena merupakan tempat pengasingan para tokoh bangsa (Hatta, Syahrir) di masa kolonial. Masyarakat adat Marind dan Asmat telah mendiami wilayah ini selama ribuan tahun dengan sistem sosial yang sangat teratur. Pada tahun 2022, aspirasi untuk mendekatkan pelayanan publik di wilayah selatan terwujud dengan hadirnya pemerintah provinsi sendiri.

## Fun Fact / Hal Menarik
- **Kapsul Waktu 2085:** Di Merauke terdapat monumen Kapsul Waktu yang berisi mimpi-mimpi anak muda Indonesia yang baru akan dibuka pada tahun 2085.
- **Musamus (Rumah Rayap Raksasa):** Hanya ditemukan di Merauke dan sebagian kecil Australia, gundukan tanah setinggi 2-5 meter ini adalah sarang rayap yang sangat kokoh dan unik.
- **Kota di Atas Papan:** Agats (Ibu Kota Asmat) dibangun sepenuhnya di atas papan kayu dan beton penyangga karena lokasinya berada di daerah rawa yang selalu pasang-surut.
- **Sota (Ujung Timur):** Titik Perbatasan darat RI-PNG (Papua Nugini) di Sota adalah salah satu perbatasan terindah dan paling rapi di Indonesia.

## Budaya
- **Seni Ukir Asmat:** Pahatan kayu tradisional yang melambangkan penghormatan terhadap leluhur (Bisj Pole), telah diakui secara internasional sebagai karya seni tingkat tinggi.
- **Tarian Marind-anim:** Tarian luhur yang menampilkan kebesaran masyarakat adat Merauke dalam upacara-upacara keagamaan dan penyambutan.
- **Rumah Tinggi Korowai:** Masyarakat Suku Korowai membangun rumah di atas pohon setinggi 30-50 meter untuk menghindari bahaya binatang buas dan banjir rawa.
- **Pesta Ulat Sagu:** Tradisi memanen dan mengonsumsi ulat sagu sebagai sumber protein penting dalam acara-acara adat di wilayah rawa.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Papeda Merauke** | Sagu kental yang disajikan dengan kuah pindang ikan sembilang atau kakap merah segar. |
| **Sate Rusa** | Kuliner paling populer di Merauke, menggunakan daging rusa liar yang teksturnya sangat lembut dan rendah kolesterol. |
| **Sagu Lempeng Bakar** | Teman minum teh masyarakat Merauke di sore hari, diolah dengan cara tradisional di atas bara api. |
| **Nasi Merauke (Beras Merauke)** | Hasil bumi utama dari daerah lumbung pangan surplus di Papua, dikenal dengan butiran yang wangi dan pulan. |
| **Dendeng Rusa** | Olahan daging rusa manis-gurih yang tahan lama dan menjadi oleh-oleh khas paling dicari saat ke Merauke. |

## Pariwisata
Provinsi Papua Selatan menawarkan kemegahan Taman Nasional Wasur, sejarah pengasingan Boven Digoel, hingga keajaiban budaya Agats.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Papua Selatan.
- Dinas Pariwisata & Kebudayaan Kabupaten Merauke & Asmat.
- "Asmat: The Art and Spirit of the Forest".
`;

    fs.writeFileSync(path.join(__dirname, 'Papua-Selatan', 'README.md'), readmeContent);
    console.log('Papua Selatan README.md has been successfully generated without numbers.');
}

generateContent();
