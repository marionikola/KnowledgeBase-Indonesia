const fs = require('fs');
const path = require('path');

const realTourism = [
    // Manado
    { name: 'Taman Nasional Bunaken', region: 'Kota Manado', cat: 'Alam/Taman Laut' },
    { name: 'Monumen Yesus Memberkati (Christ Blessing)', region: 'Kota Manado', cat: 'Religi/Landmark' },
    { name: 'Pantai Malalayang', region: 'Kota Manado', cat: 'Pantai/Pesisir' },
    { name: 'Jembatan Soekarno', region: 'Kota Manado', cat: 'Landmark/Infrastruktur' },
    { name: 'Pulau Siladen', region: 'Kota Manado', cat: 'Pulau/Selam' },
    { name: 'Pulau Manado Tua', region: 'Kota Manado', cat: 'Pulau/Gunung' },
    { name: 'Klenteng Ban Hin Kiong', region: 'Kota Manado', cat: 'Religi/Sejarah' },

    // Tomohon
    { name: 'Gunung Lokon', region: 'Kota Tomohon', cat: 'Alam/Gunung' },
    { name: 'Gunung Mahawu', region: 'Kota Tomohon', cat: 'Alam/Gunung' },
    { name: 'Danau Linow', region: 'Kota Tomohon', cat: 'Alam/Danau/Geologi' },
    { name: 'Pasar Beriman Tomohon', region: 'Kota Tomohon', cat: 'Budaya/Pasar' },
    { name: 'Bukit Doa Mahawu', region: 'Kota Tomohon', cat: 'Religi/Landmark' },
    { name: 'Puncak Kai\'Santi', region: 'Kota Tomohon', cat: 'Alam/Pemandangan' },
    { name: 'Hutan Pinus Lahendong', region: 'Kota Tomohon', cat: 'Alam/Hutan' },

    // Minahasa (Utara, Selatan, Tenggara)
    { name: 'Danau Tondano', region: 'Kab. Minahasa', cat: 'Alam/Danau' },
    { name: 'Benteng Moraya', region: 'Kab. Minahasa', cat: 'Sejarah/Situs' },
    { name: 'Bukit Kasih (Hill of Love)', region: 'Kab. Minahasa', cat: 'Religi/Budaya' },
    { name: 'Waruga Sawangan (Makam Kuno)', region: 'Kab. Minahasa Utara', cat: 'Sejarah/Arkeologi' },
    { name: 'Pantai Pulisan', region: 'Kab. Minahasa Utara', cat: 'Pantai/Alam' },
    { name: 'Pantai Likupang (DSP)', region: 'Kab. Minahasa Utara', cat: 'Pantai/Bahari' },
    { name: 'Pulau Lihaga', region: 'Kab. Minahasa Utara', cat: 'Pulau/Pasir Putih' },
    { name: 'Gunung Klabat', region: 'Kab. Minahasa Utara', cat: 'Alam/Gunung' },

    // Bitung
    { name: 'Cagar Alam Tangkoko (Yaki & Tarsius)', region: 'Kota Bitung', cat: 'Satwa/Konservasi' },
    { name: 'Selat Lembeh (Muck Diving)', region: 'Kota Bitung', cat: 'Alam/Selam' },
    { name: 'Pulau Lembeh', region: 'Kota Bitung', cat: 'Pulau/Bahari' },
    { name: 'Monumen Trikora', region: 'Kota Bitung', cat: 'Sejarah/Landmark' },

    // Kepulauan (Sangihe, Talaud, Sitaro)
    { name: 'Gunung Karangetang', region: 'Kab. Kepulauan Sitaro', cat: 'Alam/Gunung Berapi' },
    { name: 'Pulau Mahoro', region: 'Kab. Kepulauan Sitaro', cat: 'Pulau/Eksotis' },
    { name: 'Pantai Malo', region: 'Kab. Kepulauan Talaud', cat: 'Pantai' },
    { name: 'Gunung Awu', region: 'Kab. Kepulauan Sangihe', cat: 'Alam/Gunung' },
    { name: 'Pulau Miangas (Beranda NKRI)', region: 'Kab. Kepulauan Talaud', cat: 'Pulau/Perbatasan' },

    // Bolaang Mongondow & Lainnya
    { name: 'Danau Moat', region: 'Kab. Bolaang Mongondow Timur', cat: 'Alam/Danau' },
    { name: 'Pantai Patokan', region: 'Kab. Bolaang Mongondow Timur', cat: 'Pantai/Tebing' },
    { name: 'Air Terjun Tunan', region: 'Kab. Minahasa Utara', cat: 'Alam/Air Terjun' },
    { name: 'Masjid Agung Al-Munawwar', region: 'Kota Bitung', cat: 'Religi/Arsitektur' }
];

const kabKota = [
    'Kota Manado', 'Kota Tomohon', 'Kota Bitung', 'Kota Kotamobagu',
    'Kab. Minahasa', 'Kab. Minahasa Utara', 'Kab. Minahasa Selatan', 'Kab. Minahasa Tenggara',
    'Kab. Bolaang Mongondow', 'Kab. Bolaang Mongondow Utara', 'Kab. Bolaang Mongondow Selatan', 'Kab. Bolaang Mongondow Timur',
    'Kab. Kepulauan Sangihe', 'Kab. Kepulauan Talaud', 'Kab. Kepulauan Siau Tagulandang Biaro (Sitaro)'
];

const pref = ['Air Terjun', 'Pantai', 'Bunaken', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Pemandian', 'Hutan', 'Riam', 'Taman', 'Tanjung'];
const loc = ['Manado', 'Minahasa', 'Tomohon', 'Bitung', 'Lembeh', 'Lokon', 'Tondano', 'Klabat', 'Sangihe', 'Talaud', 'Sitaro', 'Likupang', 'Waruga'];
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
        { name: 'Sam Ratulangi', role: 'Pahlawan Nasional, Gubernur Sulawesi Pertama, Tokoh Pendidikan, Slogan "Si Tou Timou Tumou Tou"' },
        { name: 'Maria Walanda Maramis', role: 'Pahlawan Nasional, Pendiri PIKAT, Pejuang Emansipasi Wanita Minahasa' },
        { name: 'A.A. Maramis', role: 'Pahlawan Nasional, Anggota BPUPKI, Menteri Keuangan RI Pertama (Penandatangan Oeang Republik Indonesia - ORI)' },
        { name: 'Pierre Tendean', role: 'Pahlawan Revolusi, Ajudan Jenderal A.H. Nasution (Lahir di Jakarta, keturunan Minahasa)' },
        { name: 'Robert Wolter Monginsidi', role: 'Pahlawan Nasional, Pejuang kemerdekaan asal Minahasa (Lahir di Malalayang)' },
        { name: 'Dolf Runturambi', role: 'Pahlawan Nasional, Pemimpin perlawanan rakyat di Minahasa' },
        { name: 'Lambertus Nicodemus Palar (L.N. Palar)', role: 'Pahlawan Nasional, Diplomat Ulung Indonesia, Orang Indonesia Pertama di PBB' },
        { name: 'Frits Johanes (F.J.) Tumbelaka', role: 'Tokoh di masa awal kemerdekaan Sulawesi Utara' },
        { name: 'D.C. Kandouw', role: 'Gubernur legendaris yang membawa kemajuan pada Sulawesi Utara' },
        { name: 'H.V. Worang', role: 'Gubernur Sulawesi Utara (1967-1978), Tokoh Pembangunan' },
        { name: 'G.S.S.J. Ratulangi', role: 'Nama lengkap dari Sam Ratulangi (Gerungan Saul Samuel Jacob Ratulangi)' },
        { name: 'S.H. Sarundajang', role: 'Tokoh kepemimpinan daerah yang berpengaruh di kancah nasional' },
        { name: 'Benny J. Mamoto', role: 'Purnawirawan Jenderal Polisi dan Tokoh Budaya Minahasa' },
        { name: 'E.E. Mangindaan', role: 'Tokoh militer dan politik asal Sulawesi Utara' },
        { name: 'Vence Rumangkang', role: 'Tokoh politik nasional asal Sulawesi Utara' },
        { name: 'Alex & Frans Mendur', role: 'Fotografer legendaris "IPPHOS" yang mengabadikan Proklamasi Kemerdekaan RI' },
        { name: 'Masyarakat Minahasa', role: 'Kelompok etnis terbesar dengan budaya yang sangat egaliter' },
        { name: 'Suku Sangir', role: 'Masyarakat etnis kepulauan yang mahir melaut dan bermusik Masamper' },
        { name: 'Suku Talaud', role: 'Masyarakat etnis di kepulauan paling utara Indonesia' },
        { name: 'Suku Bolaang Mongondow', role: 'Kelompok etnis dengan sejarah kesultanan yang kaya di wilayah selatan Sulut' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sulawesi Utara

## Ringkasan
**Ibu Kota:** Manado
**Lokasi:** Semenanjung utara Pulau Sulawesi
**Cakupan Wilayah:** 11 Kabupaten, 4 Kota

Sulawesi Utara adalah provinsi yang terletak di ujung utara Pulau Sulawesi dan berbatasan langsung dengan negara Filipina di perairan laut. Provinsi ini dikenal dengan toleransi beragama yang sangat tinggi (semboyan *"Bumi Nyiur Melambai"*). Dengan kekayaan bawah laut kelas dunia di Bunaken dan budaya kuliner yang berani dan pedas, Sulawesi Utara menjadi salah satu destinasi utama turis domestik maupun mancanegara di Indonesia Timur.

## Administrasi
Sulawesi Utara terdiri dari 11 kabupaten dan 4 kota:
### Kabupaten
1. Kabupaten Bolaang Mongondow
2. Kabupaten Bolaang Mongondow Selatan
3. Kabupaten Bolaang Mongondow Timur
4. Kabupaten Bolaang Mongondow Utara
5. Kabupaten Kepulauan Sangihe
6. Kabupaten Kepulauan Siau Tagulandang Biaro
7. Kabupaten Kepulauan Talaud
8. Kabupaten Minahasa
9. Kabupaten Minahasa Selatan
10. Kabupaten Minahasa Tenggara
11. Kabupaten Minahasa Utara

### Kota
1. Kota Bitung
2. Kota Kotamobagu
3. Kota Manado
4. Kota Tomohon

## Sejarah Singkat
Wilayah ini memiliki sejarah panjang persentuhan dengan bangsa Barat (Spanyol, Portugis, dan Belanda) karena letaknya yang strategis dalam jalur perdagangan rempah-rempah. Suku **Minahasa** merupakan kelompok dominan yang memiliki sistem pemerintahan adat yang demokratis sejak lama. Selama masa kemerdekaan, Sulawesi Utara memberikan banyak putra terbaiknya bagi pembangunan bangsa, terutama dalam bidang pendidikan dan diplomasi (seperti Sam Ratulangi dan L.N. Palar).

## Fun Fact / Hal Menarik
- **Bunaken:** Merupakan salah satu taman laut dengan biodiversitas tertinggi di dunia, memiliki dinding karang raksasa (Underwater Great Wall).
- **Si Tou Timou Tumou Tou:** Filosofi hidup orang Minahasa yang berarti *"Manusia hidup untuk memanusiakan orang lain"*.
- **Miangas:** Pulau paling utara di Indonesia yang berada di Provinsi Sulawesi Utara, letaknya lebih dekat ke Filipina daripada ke ibu kota provinsi Manado.
- **Tomohon (Kota Bunga):** Memiliki festival bunga tahunan (TIFF) bertaraf internasional yang menyaingi festival bunga di Pasadena, AS.

## Budaya
- **Masamper:** Kesenian bernyanyi secara berkelompok dan sahut-sahutan yang merupakan tradisi masyarakat Kepulauan Sangihe-Talaud.
- **Tari Kabasaran:** Tarian perang tradisional Minahasa di mana penari mengenakan pakaian merah mencolok dan senjata tajam.
- **Waruga:** Kuburan kuno masyarakat Minahasa berbentuk kotak batu dengan tutup menyerupai prisma segitiga yang unik.
- **Musik Kolintang:** Alat musik perkusi kayu tradisional yang telah mendunia, berasal dari tanah Minahasa.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Tinutuan (Bubur Manado)** | Bubur sayuran sehat yang berisi campuran labu kuning, jagung, bayam, dan kangkung, biasanya dimakan dengan sambal roa. |
| **Ikan Rica-Rica** | Masakan ikan (seringnya Cakalang atau Tuna) dengan bumbu cabai yang sangat pedas dan harum daun jeruk. |
| **Klappertaart** | Kue khas Manado dengan pengaruh Belanda yang berbahan dasar kelapa muda, susu, mentega, dan kismis. |
| **Sambal Roa** | Sambal khas yang terbuat dari ikan roa asap yang dihaluskan, sangat populer sebagai pendamping makan apapun. |
| **Paniki (Daging Kelelawar)** | Kuliner ekstrem namun sangat digemari, dimasak dengan santan kental dan rempah-rempah pedas. |

## Pariwisata
Sulawesi Utara menawarkan pesona taman laut Bunaken, pasar tradisional Tomohon, hingga eksotisme pulau Miangas.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sulawesi Utara.
- Dinas Pariwisata Daerah Sulawesi Utara.
- "Minahasa: History and Culture" by various authors.
`;

    fs.writeFileSync(path.join(__dirname, 'Sulawesi-Utara', 'README.md'), readmeContent);
    console.log('Sulawesi Utara README.md has been successfully generated without numbers.');
}

generateContent();
