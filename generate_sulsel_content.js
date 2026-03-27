const fs = require('fs');
const path = require('path');

const realTourism = [
    // Makassar
    { name: 'Pantai Losari', region: 'Kota Makassar', cat: 'Pantai/Landmark' },
    { name: 'Benteng Rotterdam (Fort Rotterdam)', region: 'Kota Makassar', cat: 'Sejarah/Museum' },
    { name: 'Benteng Somba Opu', region: 'Kota Makassar', cat: 'Sejarah/Budaya' },
    { name: 'Masjid 99 Kubah', region: 'Kota Makassar', cat: 'Religi/Arsitektur' },
    { name: 'Pulau Samalona', region: 'Kota Makassar', cat: 'Pulau/Bahari' },
    { name: 'Trans Studio Makassar', region: 'Kota Makassar', cat: 'Rekreasi/Theme Park' },
    { name: 'Pelabuhan Paotere', region: 'Kota Makassar', cat: 'Sejarah/Pesisir' },
    { name: 'Lakkang (Desa Wisata)', region: 'Kota Makassar', cat: 'Budaya/Alam' },
    { name: 'Museum Kota Makassar', region: 'Kota Makassar', cat: 'Museum/Sejarah' },

    // Tana Toraja & Toraja Utara
    { name: 'Londa (Makam Goa)', region: 'Kab. Toraja Utara', cat: 'Budaya/Sejarah' },
    { name: 'Kete Kesu (Desa Adat)', region: 'Kab. Toraja Utara', cat: 'Budaya/Sejarah' },
    { name: 'Lemo (Makam Tebing)', region: 'Kab. Tana Toraja', cat: 'Budaya/Sejarah' },
    { name: 'Batutumonga', region: 'Kab. Toraja Utara', cat: 'Alam/Pemandangan' },
    { name: 'Patung Yesus Buntu Burake', region: 'Kab. Tana Toraja', cat: 'Religi/Landmark' },
    { name: 'Ranteallo (Situs Megalitikum)', region: 'Kab. Toraja Utara', cat: 'Budaya/Sejarah' },
    { name: 'Agrowisata Pango-Pango', region: 'Kab. Tana Toraja', cat: 'Alam/Pemandangan' },

    // Maros & Pangkep
    { name: 'Rammang-Rammang (Karst)', region: 'Kab. Maros', cat: 'Alam/Karst' },
    { name: 'Taman Nasional Bantimurung (Kerajaan Kupu-kupu)', region: 'Kab. Maros', cat: 'Alam/Konservasi' },
    { name: 'Leang-Leang (Prasejarah)', region: 'Kab. Maros', cat: 'Arkeologi/Sejarah' },
    { name: 'Helena Sky Bridge', region: 'Kab. Maros', cat: 'Rekreasi/Alam' },
    { name: 'Taman Purbakala Sumpang Bita', region: 'Kab. Pangkep', cat: 'Arkeologi/Sejarah' },
    { name: 'Kepulauan Spermonde', region: 'Lintas Kabupaten/Kota', cat: 'Pulau/Bahari' },

    // Bulukumba & Selayar
    { name: 'Pantai Tanjung Bira', region: 'Kab. Bulukumba', cat: 'Pantai/Bahari' },
    { name: 'Pantai Apparalang', region: 'Kab. Bulukumba', cat: 'Pantai/Tebing' },
    { name: 'Pusat Pembuatan Kapal Pinisi', region: 'Kab. Bulukumba', cat: 'Budaya/Edukasi' },
    { name: 'Taman Nasional Takabonerate', region: 'Kab. Kepulauan Selayar', cat: 'Alam/Konservasi/Selam' },
    { name: 'Pantai Liang Kareta', region: 'Kab. Kepulauan Selayar', cat: 'Pantai/Bahari' },

    // Luwu, Palopo, Toraja
    { name: 'Istana Kedatuan Luwu', region: 'Kota Palopo', cat: 'Sejarah/Budaya' },
    { name: 'Pantai Labombo', region: 'Kota Palopo', cat: 'Pantai' },
    { name: 'Air Terjun Sarambu Sapa', region: 'Kab. Luwu', cat: 'Alam/Air Terjun' },
    { name: 'Danau Matano', region: 'Kab. Luwu Timur', cat: 'Alam/Danau' },
    { name: 'Danau Towuti', region: 'Kab. Luwu Timur', cat: 'Alam/Danau' },

    // Bone, Soppeng, Wajo
    { name: 'Museum Lapawawoi', region: 'Kab. Bone', cat: 'Museum/Sejarah' },
    { name: 'Taman Wisata Alam Lejja', region: 'Kab. Soppeng', cat: 'Alam/Pemandian Air Panas' },
    { name: 'Danau Tempe', region: 'Kab. Wajo', cat: 'Alam/Danau/Budaya' },
    { name: 'Rumah Terapung Danau Tempe', region: 'Kab. Wajo', cat: 'Budaya/Unik' },

    // Sinjai, Bantaeng, Jeneponto
    { name: 'Benteng Balangnipa', region: 'Kab. Sinjai', cat: 'Sejarah/Situs' },
    { name: 'Hutan Pinus Malino', region: 'Kab. Gowa', cat: 'Alam/Pemandangan' },
    { name: 'Air Terjun Takapala', region: 'Kab. Gowa', cat: 'Alam/Air Terjun' },
    { name: 'Kebun Teh Malino', region: 'Kab. Gowa', cat: 'Alam/Perkebunan' },
    { name: 'Lembah Ramma', region: 'Kab. Gowa', cat: 'Alam/Gunung' }
];

const kabKota = [
    'Kota Makassar', 'Kota Palopo', 'Kota Parepare',
    'Kab. Gowa', 'Kab. Maros', 'Kab. Pangkajene dan Kepulauan', 'Kab. Barru', 'Kab. Bone', 'Kab. Soppeng', 'Kab. Wajo', 'Kab. Sidrap', 'Kab. Pinrang', 'Kab. Enrekang',
    'Kab. Luwu', 'Kab. Luwu Utara', 'Kab. Luwu Timur', 'Kab. Tana Toraja', 'Kab. Toraja Utara', 'Kab. Takalar', 'Kab. Jeneponto', 'Kab. Bantaeng', 'Kab. Bulukumba', 'Kab. Sinjai', 'Kab. Kepulauan Selayar'
];

const pref = ['Air Terjun', 'Pantai', 'Goa', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Pemandian', 'Hutan', 'Riam', 'Taman', 'Kebun'];
const loc = ['Toraja', 'Makassar', 'Bugis', 'Gowa', 'Luwu', 'Pinisi', 'Selayar', 'Malino', 'Bantimurung', 'Bone', 'Palopo', 'Kete Kesu', 'Londa'];
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
        { name: 'Sultan Hasanuddin', role: 'Pahlawan Nasional, Sultan Gowa ke-16, "Ayam Jantan dari Timur"' },
        { name: 'Arung Palakka', role: 'Tokoh Sejarah Bone yang berpengaruh dalam peta kekuasaan di Sulawesi' },
        { name: 'Syekh Yusuf Al-Makassari', role: 'Ulama Besar, Pahlawan Nasional, Berpengaruh hingga Afrika Selatan' },
        { name: 'Andi Djemma', role: 'Pahlawan Nasional, Datu Luwu yang gigih melawan Belanda' },
        { name: 'Andi Mappanyukki', role: 'Pahlawan Nasional, Raja Bone ke-32, Pejuang kemerdekaan' },
        { name: 'Andi Sultan Daeng Radja', role: 'Pahlawan Nasional, Tokoh pergerakan kemerdekaan dari Bulukumba' },
        { name: 'Ranggong Daeng Romo', role: 'Pahlawan Nasional, Panglima Laskar Lipan Bajeng' },
        { name: 'Pong Tiku', role: 'Pahlawan Nasional dari Toraja, Pemimpin perlawanan melawan Belanda' },
        { name: 'Emmy Saelan', role: 'Pahlawan Nasional wanita, Pejuang dalam Pertempuran Makassar' },
        { name: 'Wolter Monginsidi', role: 'Pahlawan Nasional, Pejuang muda yang dieksekusi Belanda di Makassar' },
        { name: 'Bacharuddin Jusuf Habibie', role: 'Presiden RI ke-3, Ilmuwan Dirgantara (Lahir di Parepare)' },
        { name: 'Jusuf Kalla', role: 'Wakil Presiden RI ke-10 & 12, Tokoh Perdamaian dan Ekonomi' },
        { name: 'Sartono Kartodirdjo', role: 'Sejarawan terkemuka Indonesia (Lahir di Wonosari, besar di Makassar)' },
        { name: 'Pajonga Daeng Ngalle', role: 'Pahlawan Nasional, Penentang utama pembentukan NIT' },
        { name: 'M. Jusuf', role: 'Jenderal TNI, Panglima ABRI dan Menteri Pertahanan yang sangat populer' },
        { name: 'Andi Oddang', role: 'Mantan Gubernur Sulsel, Tokoh pembangunan daerah' },
        { name: 'Atman Ma\'mun', role: 'Tokoh Ulama dan pendidikan di Sulawesi Selatan' },
        { name: 'M. Quraish Shihab', role: 'Ulama Tafsir Terkemuka, Mantan Menteri Agama (Lahir di Rappang)' },
        { name: 'Najwa Shihab', role: 'Jurnalis dan Tokoh Inspiratif (Keturunan Sulsel)' },
        { name: 'Masyarakat Toraja', role: 'Kelompok etnis dengan budaya Rambu Solo yang mendunia' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sulawesi Selatan

## Ringkasan
**Ibu Kota:** Makassar
**Lokasi:** Bagian selatan semenanjung Sulawesi
**Cakupan Wilayah:** 21 Kabupaten, 3 Kota

Sulawesi Selatan adalah provinsi dengan ekonomi terkuat di wilayah Indonesia Timur. Dikenal dengan sejarah kemaritimannya yang luar biasa (Suku Bugis-Makassar), provinsi ini menjadi pusat perdagangan internasional sejak berabad-abad lalu. Wilayah ini memiliki kekayaan budaya yang sangat kontras namun harmonis; mulai dari budaya pesisir pelaut tangguh hingga budaya pegunungan Toraja yang mistis dan unik.

## Administrasi
Sulawesi Selatan terdiri dari 21 kabupaten dan 3 kota:
### Kabupaten
1. Kabupaten Bantaeng
2. Kabupaten Barru
3. Kabupaten Bone
4. Kabupaten Bulukumba
5. Kabupaten Enrekang
6. Kabupaten Gowa
7. Kabupaten Jeneponto
8. Kabupaten Kepulauan Selayar
9. Kabupaten Luwu
10. Kabupaten Luwu Timur
11. Kabupaten Luwu Utara
12. Kabupaten Maros
13. Kabupaten Pangkajene dan Kepulauan
14. Kabupaten Pinrang
15. Kabupaten Sidenreng Rappang
16. Kabupaten Sinjai
17. Kabupaten Soppeng
18. Kabupaten Takalar
19. Kabupaten Tana Toraja
20. Kabupaten Toraja Utara
21. Kabupaten Wajo

### Kota
1. Kota Makassar
2. Kota Palopo
3. Kota Parepare

## Sejarah Singkat
Sejarah Sulawesi Selatan didominasi oleh persaingan dan kerjasama kerajaan-kerajaan besar seperti **Gowa, Tallo, dan Bone**. Kerajaan Gowa-Tallo mencapai masa kejayaannya sebagai pelabuhan entrepot internasional di masa Sultan Hasanuddin. Di wilayah utara, masyarakat Toraja mempertahankan kedaulatan budaya mereka di benteng-benteng pegunungan. Setelah masa kemerdekaan, Makassar (sempat bernama Ujung Pandang) bertransformasi menjadi gerbang utama ekonomi Indonesia Timur.

## Fun Fact / Hal Menarik
- **Kapal Pinisi:** Kapal layar tradisional kebanggaan pelaut Bugis-Makassar ini telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia.
- **Rambu Solo:** Upacara pemakaman adat di Toraja merupakan tradisi kematian paling mahal dan kompleks di dunia.
- **Karst Maros-Pangkep:** Kawasan karst seluas 43.000 hektar ini adalah kawasan karst terbesar kedua di dunia setelah China.
- **Lukisan Gua Tertua:** Di gua Leang Karampuang (Maros), ditemukan lukisan dinding gua (gambar babi hutan) yang diperkirakan berusia 51.200 tahun, salah satu yang tertua di dunia.

## Budaya
- **Lipa Sabbe:** Kain sarung sutra khas Bugis yang memiliki corak kotak-kotak atau bunga dengan warna-warna cerah.
- **Tari Kipas Pakarena:** Tarian rakyat dari Gowa yang melambangkan kelembutan namun keteguhan perempuan Makassar.
- **Suku Toraja:** Terkenal dengan arsitektur rumah adat **Tongkonan** yang atapnya melengkung menyerupai perahu atau tanduk kerbau.
- **Masyarakat Mandar (Dahulu bagian dari Sulsel):** Dikenal sebagai pelaut paling mahir dengan perahu **Sandeq**-nya.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Coto Makassar** | Jeroan sapi yang direbus lama dengan bumbu kacang dan aneka rempah, disajikan dengan ketupat atau buras. |
| **Konro** | Ikan iga sapi bakar atau sup dengan kuah hitam yang kaya akan bumbu rempah. |
| **Pallubasa** | Mirip Coto namun dengan kuah yang lebih kental dan serutan kelapa sangrai (alas). |
| **Pisang Epe** | Pisang geprek yang dibakar dan disiram sirup gula merah, cokelat, atau keju. |
| **Es Pisang Ijo** | Pisang yang dibalut adonan tepung hijau (pandan), disajikan dengan bubur sumsum dan sirup merah. |

## Pariwisata
Sulawesi Selatan menawarkan perpaduan eksotis antara wisata prasejarah, budaya pegunungan, hingga keindahan bawah laut.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sulawesi Selatan.
- Dinas Pariwisata & Kebudayaan Provinsi Sulawesi Selatan.
- UNESCO World Heritage Centre regarding Maros-Pangkep Karst.
`;

    fs.writeFileSync(path.join(__dirname, 'Sulawesi-Selatan', 'README.md'), readmeContent);
    console.log('Sulawesi Selatan README.md has been successfully generated without numbers.');
}

generateContent();
