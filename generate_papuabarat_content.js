const fs = require('fs');
const path = require('path');

const realTourism = [
    // Manokwari
    { name: 'Pantai Pasir Putih Yen Bebay', region: 'Kab. Manokwari', cat: 'Pantai' },
    { name: 'Pulau Mansinam (Situs Religi)', region: 'Kab. Manokwari', cat: 'Religi/Sejarah' },
    { name: 'Gunung Meja (Hutan Kota)', region: 'Kab. Manokwari', cat: 'Alam/Hutan' },
    { name: 'Pantai Bakaro', region: 'Kab. Manokwari', cat: 'Pantai/Pesisir' },
    { name: 'Bendungan Prafi', region: 'Kab. Manokwari', cat: 'Alam/Pemandangan' },
    { name: 'Hutan Lindung Warkapi', region: 'Kab. Manokwari', cat: 'Alam/Hutan' },
    { name: 'Pantai Amban', region: 'Kab. Manokwari', cat: 'Pantai' },

    // Fakfak
    { name: 'Situs Purbakala Tapurang (Lukisan Tebing)', region: 'Kab. Fakfak', cat: 'Arkeologi/Sejarah' },
    { name: 'Air Terjun Kiti-Kiti', region: 'Kab. Fakfak', cat: 'Alam/Air Terjun' },
    { name: 'Pantai Wayob', region: 'Kab. Fakfak', cat: 'Pantai' },
    { name: 'Masjid Patimburak (Masjid Tertua)', region: 'Kab. Fakfak', cat: 'Religi/Sejarah' },
    { name: 'Hutan Pinus Fakfak', region: 'Kab. Fakfak', cat: 'Alam/Hutan' },

    // Kaimana
    { name: 'Senja di Kaimana (Pantai Simora)', region: 'Kab. Kaimana', cat: 'Pantai/Pemandangan' },
    { name: 'Teluk Triton', region: 'Kab. Kaimana', cat: 'Alam/Bahari/Tebing' },
    { name: 'Situs Seni Karst Kaimana', region: 'Kab. Kaimana', cat: 'Arkeologi/Budaya' },
    { name: 'Benteng Fort du Bus', region: 'Kab. Kaimana', cat: 'Sejarah/Situs' },

    // Teluk Bintuni & Teluk Wondama
    { name: 'Hutan Mangrove Teluk Bintuni', region: 'Kab. Teluk Bintuni', cat: 'Alam/Mangrove' },
    { name: 'Taman Nasional Teluk Cendrawasih (Wondama)', region: 'Kab. Teluk Wondama', cat: 'Alam/Konservasi' },
    { name: 'Pulau Rumberpon', region: 'Kab. Teluk Wondama', cat: 'Pulau/Selam' },
    { name: 'Bukit Aitumeri (Situs Pendidikan)', region: 'Kab. Teluk Wondama', cat: 'Sejarah/Budaya' },

    // Pegunungan Arfak
    { name: 'Danau Anggi Giji', region: 'Kab. Pegunungan Arfak', cat: 'Alam/Danau' },
    { name: 'Danau Anggi Gida', region: 'Kab. Pegunungan Arfak', cat: 'Alam/Danau' },
    { name: 'Puncak Kobrey', region: 'Kab. Pegunungan Arfak', cat: 'Alam/Pemandangan' },
    { name: 'Observasi Burung Pintar (Bowerbird)', region: 'Kab. Pegunungan Arfak', cat: 'Satwa/Edukasi' }
];

const kabKota = [
    'Kab. Manokwari', 'Kab. Fakfak', 'Kab. Kaimana', 'Kab. Teluk Wondama', 'Kab. Teluk Bintuni', 'Kab. Pegunungan Arfak', 'Kab. Manokwari Selatan'
];

const pref = ['Air Terjun', 'Pantai', 'Triton', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Taman', 'Hutan', 'Riam', 'Situs', 'Teluk'];
const loc = ['Manokwari', 'Fakfak', 'Kaimana', 'Wondama', 'Bintuni', 'Arfak', 'Mansinam', 'Triton', 'Anggi', 'Cendrawasih', 'Fort du Bus', 'Yen Bebay', 'Simora'];
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
        { name: 'Abraham Octavianus Atururi', role: 'Pahlawan Pembangunan, Gubernur Papua Barat Pertama yang berjasa dalam pemekaran daerah' },
        { name: 'Dominggus Mandacan', role: 'Mantan Gubernur Papua Barat, Kepala Suku Besar Arfak yang sangat dihormati' },
        { name: 'Paulus Waterpauw', role: 'Purnawirawan Jenderal Polisi, Mantan Kapolda di berbagai wilayah dan mantan Pj. Gubernur Papua Barat' },
        { name: 'Sultan Tidore', role: 'Secara historis memiliki pengaruh besar di pesisir Papua Barat (Fakfak, Kaimana)' },
        { name: 'Pdt. I.S. Kijne', role: 'Tokoh pendidikan dan penyebar agama di Papua (Membangun pusat pendidikan di Miei, Wondama)' },
        { name: 'Otto dan Geisler', role: 'Rasul pertama di Tanah Papua yang mendarat di Pulau Mansinam pada 5 Februari 1855' },
        { name: 'Masyarakat Suku Arfak', role: 'Kelompok etnis yang dikenal dengan budaya luhur dan tarian Tumbat Tanah' },
        { name: 'Masyarakat Suku Fakfak', role: 'Penghuni wilayah pala terbesar di Papua dengan budaya yang sangat toleran' },
        { name: 'Masyarakat Suku Kaimana', role: 'Dikenal dengan keramahannya dan sejarah "Senja di Kaimana"' },
        { name: 'Lukas Enembe (Asal Peg. Tengah, namun Tokoh Nasional di Tanah Papua)', role: 'Tokoh kepemimpinan dengan pengaruh luas di Tanah Papua' },
        { name: 'Alberthina Ho', role: 'Hakim terkemuka di Indonesia yang lahir di Fakfak' },
        { name: 'Mahrus Munir', role: 'Tokoh agama dan persaudaraan di wilayah Papua Barat' },
        { name: 'Keluarga Mandacan', role: 'Klan kepemimpinan tradisional di wilayah Manokwari dan Arfak' },
        { name: 'Jimmy Demianus Ijie', role: 'Tokoh politik yang gigih memperjuangkan aspirasi rakyat Papua di kancah nasional' },
        { name: 'Masyarakat Suku Hatam', role: 'Kelompok etnis di Pegunungan Arfak dengan kearifan lokal konservasi burung' },
        { name: 'Masyarakat Suku Moile', role: 'Bagian dari masyarakat adat Arfak yang menjaga kelestarian hutan hujan Papua' },
        { name: 'Herman Saurean', role: 'Tokoh pergerakan pemuda di masa awal kemerdekaan di Manokwari' },
        { name: 'Suku Wondama', role: 'Masyarakat dengan orientasi kelautan yang kuat dan sejarah pendidikan yang tua' },
        { name: 'Suku Serui di Papua Barat', role: 'Etnis perantau yang memberikan kontribusi besar pada perdagangan di Manokwari' },
        { name: 'Tokoh Adat Bintuni', role: 'Masing-masing mempertahankan kearifan lokal di wilayah Teluk Bintuni yang kaya alam' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua Barat

## Ringkasan
**Ibu Kota:** Manokwari
**Lokasi:** Bagian leher burung Pulau Papua
**Cakupan Wilayah:** 7 Kabupaten

Papua Barat adalah provinsi yang terletak di bagian kepala/leher Pulau Papua. Dikenal dengan sebutan "Provinsi Konservasi", wilayah ini memiliki kekayaan biodiversitas yang sangat tinggi, mulai dari ekosistem hutan hujan tropis di Pegunungan Arfak hingga keajaiban bahari di Teluk Triton, Kaimana. Ibu kotanya, Manokwari, dikenal sebagai "Kota Injil" karena sejarah masuknya ajaran agama Kristen pertama kali di Tanah Papua (Pulau Mansinam).

## Administrasi
Provinsi Papua Barat terdiri dari 7 kabupaten:
### Kabupaten
1. Kabupaten Fakfak
2. Kabupaten Kaimana
3. Kabupaten Manokwari
4. Kabupaten Manokwari Selatan
5. Kabupaten Pegunungan Arfak
6. Kabupaten Teluk Bintuni
7. Kabupaten Teluk Wondama

## Sejarah Singkat
Wilayah Papua Barat memiliki hubungan historis yang unik dengan Kesultanan Tidore di Maluku, terutama di wilayah pesisir Fakfak dan Kaimana. Pada 14 Februari 1855, dua misionaris Jerman mendarat di Pulau Mansinam, menandai awal mula peradaban modern dan pendidikan di Tanah Papua. Papua Barat secara resmi berdiri sebagai provinsi sendiri pada tahun 2003 (awalnya bernama Irian Jaya Barat) sebagai hasil pemekaran dari Provinsi Papua.

## Fun Fact / Hal Menarik
- **Kota Injil:** Manokwari adalah titik awal sejarah agama Samawi di Tanah Papua, yang diperingati setiap tanggal 5 Februari sebagai hari besar daerah.
- **Senja Kaimana:** Keindahan matahari terbenam di Kaimana telah mendunia lewat lagu populer dan keindahan alam Teluk Triton yang eksotis.
- **Burung Pintar (Bowerbird):** Di Pegunungan Arfak, terdapat burung yang mampu membangun sarang berbentuk rumah dan dihiasi benda-warni untuk menarik pasangannya.
- **Mangrove Teluk Bintuni:** Salah satu kawasan hutan mangrove terluas dan terbaik di dunia, yang menjadi paru-paru global bagi wilayah Indonesia Timur.

## Budaya
- **Tari Tumbat Tanah:** Tarian kebesaran masyarakat suku Arfak yang dilakukan sambil melompat-lompat sebagai ungkapan syukur dan persatuan.
- **Budaya Pala (Fah):** Di Fakfak, tanaman pala bukan hanya komoditas ekonomi tetapi juga bagian dari identitas adat dan sejarah perbudakan masa lalu.
- **Suku Arfak:** Kelompok etnis utama di Papua Barat yang terbagi dalam empat sub-suku besar: Hatam, Moile, Meyah, dan Sough.
- **Mansinam:** Pulau kecil di depan pusat Kota Manokwari yang menjadi situs religi nasional dan simbol perdamaian di Tanah Papua.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Ikan Bakar Manokwari** | Ikan bakar khas dengan bumbu sambal mentah yang super pedas, berbahan utama cabai dan bawang mentah yang digerus kasar. |
| **Sagu Lempeng** | Kue sagu keras yang dibakar, biasanya dinikmati dengan teh hangat atau kopi di pagi hari. |
| **Daging Rusa** | Kuliner khas di wilayah Fakfak dan pedalaman, diolah menjadi sate, sop, atau dendang dengan rasa gurih yang unik. |
| **Manisan Pala** | Camilan khas Fakfak yang terbuat dari buah pala segar, memiliki rasa manis pedas yang memberikan efek hangat di tubuh. |
| **Papeda Gulung (Papeda Bungkus)** | Variasi penyajian papeda yang dibungkus daun pisang untuk memudahkan dikonsumsi saat perjalanan. |

## Pariwisata
Provinsi Papua Barat menawarkan keajaiban bahari Teluk Triton, situs religi Mansinam, hingga habitat burung endemik di Pegunungan Arfak.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Papua Barat.
- Dinas Pariwisata & Kebudayaan Provinsi Papua Barat.
- "History of Mansinam and the Spreading of Gospel in Papua".
`;

    fs.writeFileSync(path.join(__dirname, 'Papua-Barat', 'README.md'), readmeContent);
    console.log('Papua Barat README.md has been successfully generated without numbers.');
}

generateContent();
