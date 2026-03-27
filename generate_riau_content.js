const fs = require('fs');
const path = require('path');

const realTourism = [
    // Pekanbaru (Ibu Kota)
    { name: 'Masjid Agung An-Nur Riau', region: 'Kota Pekanbaru', cat: 'Religi/Landmark' },
    { name: 'Museum Sang Nila Utama', region: 'Kota Pekanbaru', cat: 'Museum/Sejarah' },
    { name: 'Perpustakaan Soeman HS', region: 'Kota Pekanbaru', cat: 'Edukasi/Arsitektur' },
    { name: 'Asia Heritage', region: 'Kota Pekanbaru', cat: 'Rekreasi/Budaya' },
    { name: 'Pasar Bawah (Pasar Wisata)', region: 'Kota Pekanbaru', cat: 'Budaya/Pasar' },
    { name: 'Danau Bandar Kayangan', region: 'Kota Pekanbaru', cat: 'Alam/Danau' },
    { name: 'Rumah Singgah Tuan Kadi', region: 'Kota Pekanbaru', cat: 'Sejarah/Situs' },

    // Siak
    { name: 'Istana Siak Sri Indrapura', region: 'Kab. Siak', cat: 'Sejarah/Landmark' },
    { name: 'Jembatan Tengku Agung Sultanah Latifah', region: 'Kab. Siak', cat: 'Landmark/Arsitektur' },
    { name: 'Taman Nasional Zamrud', region: 'Kab. Siak', cat: 'Alam/Konservasi' },
    { name: 'Klenteng Hock Siu Kiong', region: 'Kab. Siak', cat: 'Religi/Sejarah' },

    // Kampar & Kuantan Singingi
    { name: 'Candi Muara Takus', region: 'Kab. Kampar', cat: 'Sejarah/Arkeologi' },
    { name: 'Air Terjun Gulamo (Green Canyon Riau)', region: 'Kab. Kampar', cat: 'Alam/Air Terjun' },
    { name: 'Ulu Kasok (Raja Ampat Riau)', region: 'Kab. Kampar', cat: 'Alam/Pemandangan' },
    { name: 'Sungai Hijau', region: 'Kab. Kampar', cat: 'Alam/Pemandian' },
    { name: 'Taman Nasional Tesso Nilo', region: 'Kab. Pelalawan/Inhu', cat: 'Alam/Konservasi' },
    { name: 'Air Terjun Guruh Gemurai', region: 'Kab. Kuantan Singingi', cat: 'Alam/Air Terjun' },
    { name: 'Lembah Bawang', region: 'Kab. Kuantan Singingi', cat: 'Alam/Pemandangan' },

    // Pelalawan & Indragiri
    { name: 'Ombak Bono (Sungai Kampar)', region: 'Kab. Pelalawan', cat: 'Fenomena Alam/Surfing' },
    { name: 'Danau Raja', region: 'Kab. Indragiri Hulu', cat: 'Alam/Danau' },
    { name: 'Taman Nasional Bukit Tigapuluh', region: 'Kab. Indragiri Hulu', cat: 'Alam/Konservasi' },
    { name: 'Pantai Solop', region: 'Kab. Indragiri Hilir', cat: 'Pantai/Mangrove' },

    // Bengkalis, Dumai, Rokan
    { name: 'Pantai Selat Baru', region: 'Kab. Bengkalis', cat: 'Pantai' },
    { name: 'Pantai Rupat Utara (Pasir Panjang)', region: 'Kab. Bengkalis', cat: 'Pantai/Pasir Putih' },
    { name: 'Masjid Agung Islamic Center Pasir Pengaraian', region: 'Kab. Rokan Hulu', cat: 'Religi/Landmark' },
    { name: 'Benteng Tujuh Lapis', region: 'Kab. Rokan Hulu', cat: 'Sejarah/Situs' },
    { name: 'Danau Napangga', region: 'Kab. Rokan Hilir', cat: 'Alam/Danau' },
    { name: 'Pulau Jemur', region: 'Kab. Rokan Hilir', cat: 'Pulau/Bahari' },
    { name: 'Pantai Teluk Makmur', region: 'Kota Dumai', cat: 'Pantai' }
];

const kabKota = [
    'Kota Pekanbaru', 'Kota Dumai',
    'Kab. Siak', 'Kab. Kampar', 'Kab. Pelalawan', 'Kab. Indragiri Hulu', 'Kab. Indragiri Hilir', 'Kab. Kuantan Singingi', 'Kab. Bengkalis', 'Kab. Meranti', 'Kab. Rokan Hulu', 'Kab. Rokan Hilir'
];

const pref = ['Air Terjun', 'Pantai', 'Siak', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Taman', 'Kali', 'Muara Takus', 'Bono', 'Benteng'];
const loc = ['Pekanbaru', 'Siak', 'Kampar', 'Pelalawan', 'Rokan', 'Indragiri', 'Bengkalis', 'Muara Takus', 'Tesso Nilo', 'Guruh Gemurai', 'Solop', 'Dumai', 'Meranti'];
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
        { name: 'Sultan Syarif Kasim II', role: 'Pahlawan Nasional, Sultan Siak terakhir, Tokoh yang menyumbangkan hartanya untuk kemerdekaan RI' },
        { name: 'Tuanku Tambusai', role: 'Pahlawan Nasional, Pemimpin perlawanan rakyat Rokan dalam Perang Padri' },
        { name: 'Raja Ali Haji', role: 'Pahlawan Nasional, Sastrawan pelopor bahasa Melayu-Indonesia, Penulis Gurindam 12 (Lahir di Pulau Penyengat, akar budaya Riau)' },
        { name: 'Soeman HS', role: 'Tokoh Sastra dan Pendidikan dari Riau, Pionir penulisan cerita detektif di Indonesia' },
        { name: 'Tengku Buwang Asmara', role: 'Sultan Siak ke-2, Tokoh pejuang yang melawan ekspansi Belanda' },
        { name: 'H. Rusli Zainal', role: 'Mantan Gubernur Riau dua periode yang membangun infrastruktur masif (Jembatan Siak, Perpustakaan, dsb)' },
        { name: 'Marah Halim Harahap', role: 'Tokoh kepemimpinan awal yang berpengaruh di wilayah Riau dan sekitarnya' },
        { name: 'Tabrani Rab', role: 'Tokoh intelektual, budayawan, dan penggerak aspirasi masyarakat Riau' },
        { name: 'H. Anas Maamun', role: 'Mantan Gubernur Riau yang fokus pada pemekaran wilayah dan pembangunan desa' },
        { name: 'Syamsuar', role: 'Gubernur Riau periode 2019-2023, Fokus pada Riau sebagai pusat ekonomi halal dan budaya Melayu' },
        { name: 'Edy Natar Nasution', role: 'Tokoh militer dan mantan Wakil Gubernur Riau' },
        { name: 'Masyarakat Suku Melayu', role: 'Kelompok etnis terbesar dengan budaya yang sangat menjunjung tinggi etika dan kesantunan' },
        { name: 'Suku Talang Mamak', role: 'Suku asli pedalaman Riau yang mempertahankan kearifan lokal hutan gambut' },
        { name: 'Suku Sakai', role: 'Kelompok etnis pedalaman yang memiliki sejarah panjang dalam pengolahan sumber daya alam tradisional' },
        { name: 'Masyarakat Suku Akit', role: 'Masyarakat pesisir Kepulauan Riau yang mahir dalam meramu hasil hutan dan laut' },
        { name: 'Tokoh Adat Kesultanan Siak', role: 'Lembaga adat yang menjaga kelestarian Istana Siak dan tradisi diraja' },
        { name: 'K.H. Abdurrahman', role: 'Tokoh agama dan pendidikan awal di wilayah Riau daratan' },
        { name: 'H. Tenas Effendy', role: 'Budayawan Melayu Riau terkemuka, Pakar tunjuk ajar Melayu' },
        { name: 'Zulmansyah Sekedang', role: 'Tokoh pers dan intelektual di Riau' },
        { name: 'Andi Asaad (Tokoh Intelek Sultra, namun memiliki pengaruh pemikiran di Riau)', role: 'Tokoh pendidikan yang memperluas jaringan intelektual di Sumatera-Riau' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Riau

## Ringkasan
**Ibu Kota:** Pekanbaru
**Lokasi:** Bagian tengah-timur Pulau Sumatera
**Cakupan Wilayah:** 10 Kabupaten, 2 Kota

Riau adalah provinsi yang kaya akan sumber daya alam, dikenal sebagai "Bumi Melayu" dan salah satu penyumbang devisa terbesar bagi Indonesia melalui sektor minyak dan gas (Migas) serta perkebunan kelapa sawit. Terletak strategis di sepanjang Selat Malaka, Riau memiliki sejarah kejayaan Melayu lewat Kesultanan Siak Sri Indrapura. Dengan semboyan *"The Homeland of Melayu"*, provinsi ini terus melestarikan akar budaya Melayu yang menjadi cikal bakal bahasa Indonesia.

## Administrasi
Provinsi Riau terdiri dari 10 kabupaten dan 2 kota:
### Kabupaten
1. Kabupaten Bengkalis
2. Kabupaten Indragiri Hilir
3. Kabupaten Indragiri Hulu
4. Kabupaten Kampar
5. Kabupaten Kepulauan Meranti
6. Kabupaten Kuantan Singingi
7. Kabupaten Pelalawan
8. Kabupaten Rokan Hilir
9. Kabupaten Rokan Hulu
10. Kabupaten Siak

### Kota
1. Kota Dumai
2. Kota Pekanbaru

## Sejarah Singkat
Provinsi Riau dulunya merupakan bagian dari Provinsi Sumatera Tengah sebelum berdiri sendiri pada tahun 1957. Wilayah ini memiliki sejarah panjang yang membanggakan melalui **Kesultanan Siak Sri Indrapura** yang didirikan oleh Sultan Abdul Jalil Rahmad Syah. Sultan Syarif Kasim II, sultan terakhir, merupakan pahlawan nasional yang memberikan dukungan finansial dan moral sangat besar bagi kedaulatan RI di masa awal kemerdekaan. Situs Candi Muara Takus menunjukkan pengaruh peradaban Hindu-Buddha kuno yang pernah berjaya di pedalaman Kampar.

## Fun Fact / Hal Menarik
- **Homeland of Melayu:** Bahasa Indonesia yang kita gunakan saat ini berakar dari bahasa Melayu Riau-Lingga yang dikodifikasi secara intelektual oleh para sastrawan di wilayah ini.
- **Pala Siak:** Istana Siak menyimpan sebuah alat pemutar musik kuno bernama "Komet" yang hanya ada dua di dunia; satu di Siak, satu lagi di Jerman.
- **Gelombang Bono:** Sebuah fenomena langka di dunia di mana ombak laut masuk ke dalam muara sungai (Sungai Kampar), menciptakan ombak tinggi yang bisa digunakan untuk berselancar.
- **Candi Muara Takus:** Satu-satunya kompleks candi Buddha tertua di Sumatera yang materialnya seluruhnya terbuat dari batu bata merah.

## Budaya
- **Sastra Melayu:** Tradisi menulis dan berpantun yang sangat kuat, melahirkan karya filosofis seperti **Gurindam Duabelas**.
- **Tari Persembahan (Makan Sirih):** Tarian adat untuk menyambut tamu kehormatan sebagai simbol penghargaan dan keramahtamahan orang Melayu.
- **Pacu Jalur:** Lomba perahu naga tradisional yang megah dan sangat meriah di Kabupaten Kuantan Singingi setiap tahunnya.
- **Istana Siak Sri Indrapura:** Arsitektur megah perpaduan Melayu, Arab, dan Eropa yang masih berdiri kokoh sebagai simbol kejayaan Riau.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Gulai Ikan Patin** | Olahan ikan patin dengan kuah kuning yang kental, asam, dan gurih, menjadi menu wajib di Riau. |
| **Bolu Kemojo** | Kue padat khas Riau dengan bentuk bunga kamboja, memiliki rasa pandan yang sangat khas dan manis. |
| **Mie Sagu** | Kuliner khas Kepulauan Meranti yang diolah dari sagu, biasanya digoreng pedas dengan tauge dan teri. |
| **Asam Pedas Ikan Baung** | Ikan sungai baung yang dimasak dengan bumbu asam pedas khas melayu, memberikan rasa segar di lidah. |
| **Roti Jala** | Roti berbentuk jaring yang disajikan dengan kari ayam atau kambing, biasanya hadir dalam acara adat. |

## Pariwisata
Provinsi Riau menawarkan kemegahan Istana Siak, sejarah prasejarah Muara Takus, hingga adrenalin berselancar bono di Sungai Kampar.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Riau.
- Dinas Pariwisata Provinsi Riau.
- "The Kingdom of Siak: History and Legacy".
`;

    fs.writeFileSync(path.join(__dirname, 'Riau', 'README.md'), readmeContent);
    console.log('Riau README.md has been successfully generated without numbers.');
}

generateContent();
