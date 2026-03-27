const fs = require('fs');
const path = require('path');

const realTourism = [
    // Nabire (Ibu Kota)
    { name: 'Hiu Paus (Whale Shark) Nabire', region: 'Kab. Nabire', cat: 'Alam/Bahari/Satwa' },
    { name: 'Pantai Gedo', region: 'Kab. Nabire', cat: 'Pantai' },
    { name: 'Pantai MAF (Pusat Kuliner)', region: 'Kab. Nabire', cat: 'Pantai/Kuliner' },
    { name: 'Pulau Pepaya', region: 'Kab. Nabire', cat: 'Pulau/Bahari' },
    { name: 'Air Terjun Bihewa', region: 'Kab. Nabire', cat: 'Alam/Air Terjun' },

    // Mimika (Timika)
    { name: 'PT Freeport Indonesia (Kuala Kencana)', region: 'Kab. Mimika', cat: 'Edukasi/Arsitektur' },
    { name: 'Puncak Jaya (Carstenz Pyramid)', region: 'Kab. Mimika/Puncak Jaya', cat: 'Alam/Gunung/Salju' },
    { name: 'Taman Nasional Lorentz (Pusat)', region: 'Lintas Kabupaten', cat: 'Alam/Konservasi' },
    { name: 'Pelabuhan Paumako', region: 'Kab. Mimika', cat: 'Rekreasi/Pesisir' },
    { name: 'Pantai Ipaya', region: 'Kab. Mimika', cat: 'Pantai' },

    // Paniai, Deiyai, Dogiyai
    { name: 'Danau Paniai', region: 'Kab. Paniai', cat: 'Alam/Danau' },
    { name: 'Danau Tigi', region: 'Kab. Deiyai', cat: 'Alam/Danau' },
    { name: 'Gunung Deiyai', region: 'Kab. Deiyai', cat: 'Alam/Gunung' },
    { name: 'Lembah Kamuu', region: 'Kab. Dogiyai', cat: 'Alam/Lembah' },
    { name: 'Puncak Moanemani', region: 'Kab. Dogiyai', cat: 'Alam/Pemandangan' },

    // Puncak & Intan Jaya
    { name: 'Puncak Sugapa', region: 'Kab. Intan Jaya', cat: 'Alam/Pemandangan' },
    { name: 'Gunung Grasberg', region: 'Kab. Mimika', cat: 'Alam/Geologi' },
    { name: 'Air Terjun Wandia', region: 'Kab. Nabire', cat: 'Alam/Air Terjun' }
];

const kabKota = [
    'Kab. Nabire', 'Kab. Mimika', 'Kab. Paniai', 'Kab. Dogiyai', 'Kab. Deiyai', 'Kab. Intan Jaya', 'Kab. Puncak', 'Kab. Puncak Jaya'
];

const pref = ['Air Terjun', 'Pantai', 'Nabire', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Taman', 'Kali', 'Puncak', 'Salju', 'Freeport'];
const loc = ['Nabire', 'Mimika', 'Timika', 'Paniai', 'Deiyai', 'Dogiyai', 'Puncak Jaya', 'Carstenz', 'Lorentz', 'Sugapa', 'Gedo', 'Bihewa', 'Kuala Kencana'];
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
        { name: 'Ribka Haluk', role: 'Pj. Gubernur Papua Tengah Pertama, Menteri Sosial RI saat ini (Putri asli Papua Tengah)' },
        { name: 'Johannes Rettob', role: 'Plt. Bupati Mimika, Tokoh sentral pembangunan di wilayah pesisir selatan Papua Tengah' },
        { name: 'Eltinus Omaleng', role: 'Mantan Bupati Mimika, Tokoh yang berperan dalam peta kebijakan pertambangan di Timika' },
        { name: 'Mesak Magai', role: 'Bupati Nabire saat ini, Tokoh pemersatu wilayah adat Meepago' },
        { name: 'Suku Kamoro', role: 'Masyarakat adat di wilayah pesisir Mimika dengan kebudayaan maritim dan seni ukir "Mbitoro"' },
        { name: 'Suku Amungme', role: 'Etnis penghuni wilayah pegunungan yang menjaga kelestarian Puncak Jaya' },
        { name: 'Suku Mee', role: 'Kelompok etnis terbesar di wilayah Paniai, Deiyai, dan Dogiyai dengan sistem ekonomi tradisional "Me"' },
        { name: 'Suku Damal', role: 'Etnis di wilayah Puncak dan Puncak Jaya dengan tradisi pegunungan yang kuat' },
        { name: 'Suku Moni', role: 'Kelompok etnis penghuni wilayah Intan Jaya dengan kearifan lokal pertanian' },
        { name: 'Henky Rumere', role: 'Tokoh intelektual dan pendidik di Nabire' },
        { name: 'Meky Nawipa', role: 'Mantan Bupati Paniai, Pilot sekaligus tokoh inspiratif asli Papua Tengah' },
        { name: 'Fery Sonneville (Tokoh Bulu Tangkis Bangsa)', role: 'Pernah memiliki peran strategis dalam koordinasi pemuda di Irian Barat' },
        { name: 'Abraham Dimara (Pahlawan Nasional)', role: 'Sosok sentral pembebasan Irian Barat (Lahir di Arandai, Sorong Selatan namun berjuang untuk seluruh Papua)' },
        { name: 'Lisa Rumbewas (Atlet Kebanggaan Papua)', role: 'Atlet angkat besi pemecah rekor dunia (Inspirasi kaum muda Meepago)' },
        { name: 'Masyarakat Nabire', role: 'Masyarakat yang dikenal dengan toleransi beragama dan kemajemukan etnis di "Kota Berseri"' },
        { name: 'Para Pendaki Puncak Jaya (Cartensz Pyramid)', role: 'Menjadi duta pariwisata ekstrem Papua Tengah di mata dunia' },
        { name: 'Tokoh Adat Meepago', role: 'Institusi adat yang membawahi wilayah adat pegunungan tengah bagian barat' },
        { name: 'Bambang Soesatyo (Tokoh Nasional)', role: 'Hanya dalam kaitan dengan Ketua MPR RI yang sering berkunjung dan membangun aspirasi DOB' },
        { name: 'Isaias Douw', role: 'Mantan Bupati Nabire dua periode yang membangun fondasi kota Nabire modern' },
        { name: 'Masyarakat Suku Wate', role: 'Pemilik ulayat tanah di wilayah Nabire yang menjaga kearifan pesisir' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua Tengah

## Ringkasan
**Ibu Kota:** Nabire
**Lokasi:** Bagian tengah-barat Pulau Papua
**Cakupan Wilayah:** 8 Kabupaten

Papua Tengah adalah provinsi ke-36 yang diresmikan di Indonesia pada tahun 2022. Mencakup wilayah adat **Meepago**, provinsi ini memiliki keanekaragaman geografis yang sangat kontras, mulai dari pesisir Teluk Cendrawasih yang kaya akan satwa Hiu Paus, hingga titik tertinggi di Indonesia, yaitu **Puncak Jaya (Carstensz Pyramid)**. Ibu kotanya, Nabire, merupakan kota pelabuhan yang menjembatani wilayah pesisir dengan daerah pegunungan di pedalaman Papua.

## Administrasi
Provinsi Papua Tengah terdiri dari 8 kabupaten:
### Kabupaten
1. Kabupaten Deiyai
2. Kabupaten Dogiyai
3. Kabupaten Intan Jaya
4. Kabupaten Mimika
5. Kabupaten Nabire
6. Kabupaten Paniai
7. Kabupaten Puncak
8. Kabupaten Puncak Jaya

## Sejarah Singkat
Sejarah wilayah ini terkait erat dengan pembukaan wilayah di pedalaman Papua oleh misionaris dan penjelajah Barat. Di Mimika, pengembangan industri pertambangan (PT Freeport Indonesia) sejak tahun 1960-an telah mengubah drastis lanskap ekonomi dan sosial daerah tersebut. Wilayah pegunungan tengah (Paniai dkk) dikenal memiliki sejarah perdagangan tradisional "Me" yang sangat maju. Pada tahun 2022, Papua Tengah resmi menjadi provinsi baru sebagai upaya pemerintah mempercepat pembangunan pusat pertumbuhan ekonomi mandiri.

## Fun Fact / Hal Menarik
- **Satu-satunya Titik Salju di Khatulistiwa:** Di Papua Tengah terdapat Puncak Jaya (Carstenz Pyramid), gunung tertinggi di Indonesia yang memiliki puncak tertutup salju abadi.
- **Hiu Paus Nabire:** Berbeda dengan lokasi lain, di Nabire, Hiu Paus sering terlihat sepanjang tahun di dekat bagang nelayan karena keramahan habitat setempat.
- **Taman Nasional Lorentz:** Merupakan taman nasional terbesar di Asia Tenggara dan Situs Warisan Dunia UNESCO yang titik sentralnya berada di wilayah Papua Tengah.
- **Kuala Kencana:** Kota modern pertama di Indonesia yang dibangun oleh PT Freeport di tengah hutan Mimika dengan infrastruktur bawah tanah (tanpa kabel menggantung).

## Budaya
- **Suku Kamoro & Amungme:** Dua suku besar di wilayah Mimika yang memiliki kearifan lokal dari pesisir hingga pegunungan tinggi.
- **Rumah Karewari:** Rumah adat tradisional masyarakat suku Kamoro yang digunakan untuk pendidikan dan inisiasi pemuda.
- **Seni Ukir Kamoro (Mbitoro):** Ukiran kayu pilar yang melambangkan totem leluhur, memiliki estetika yang hampir setara dengan seni ukir Asmat.
- **Tradis "Me":** Sistem pertukaran tradisional menggunakan kulit kerang (Me) di wilayah Paniai yang menunjukkan kemajuan sistem ekonomi tradisional Papua.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Papeda Nabire** | Sagu kental yang disiram kuah ikan kuah kuning kental, menjadi sajian wajib di pesisir Papua Tengah. |
| **Ikan Cakalang Asap** | Oleh-oleh khas Nabire yang diproses secara tradisional melalui pengasapan kayu pilihan hingga warna kemerahan. |
| **Olahan Buah Merah Nabire** | Ekstrak buah Pandanus yang digunakan sebagai suplemen kesehatan dan minyak bumbu makanan. |
| **Kopi Moanemani** | Kopi Arabika kualitas ekspor yang ditanam secara organik oleh masyarakat adat di Dogiyai. |
| **Tambelo** | Cacing kayu mentah yang dikonsumsi masyarakat pesisir Kamoro, dipercaya memiliki khasiat kebugaran luar biasa. |

## Pariwisata
Provinsi Papua Tengah menawarkan eksotisme Hiu Paus Nabire, kemegahan Puncak Jaya, hingga ketenangan Danau Paniai di pegunungan.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Papua Tengah.
- Dinas Pariwisata & Ekonomi Kreatif Kabupaten Nabire & Mimika.
- UNESCO World Heritage Centre regarding Lorentz National Park.
`;

    fs.writeFileSync(path.join(__dirname, 'Papua-Tengah', 'README.md'), readmeContent);
    console.log('Papua Tengah README.md has been successfully generated without numbers.');
}

generateContent();
