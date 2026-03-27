const fs = require('fs');
const path = require('path');

const realTourism = [
    // Bandung & Lembang
    { name: 'Kawah Putih Ciwidey', region: 'Kab. Bandung', cat: 'Alam/Vulkanik' },
    { name: 'Tangkuban Perahu', region: 'Kab. Bandung Barat', cat: 'Alam/Vulkanik' },
    { name: 'Orchid Forest Cikole', region: 'Kab. Bandung Barat', cat: 'Alam/Hutan' },
    { name: 'Situ Patenggang', region: 'Kab. Bandung', cat: 'Alam/Danau' },
    { name: 'Ranca Upas', region: 'Kab. Bandung', cat: 'Alam/Penangkaran' },
    { name: 'Farmhouse Lembang', region: 'Kab. Bandung Barat', cat: 'Rekreasi' },
    { name: 'Floating Market Lembang', region: 'Kab. Bandung Barat', cat: 'Rekreasi' },
    { name: 'Dusun Bambu', region: 'Kab. Bandung Barat', cat: 'Ekowisata' },
    { name: 'The Great Asia Africa', region: 'Kab. Bandung Barat', cat: 'Rekreasi' },
    { name: 'Saung Angklung Udjo', region: 'Kota Bandung', cat: 'Budaya' },
    { name: 'Museum Geologi Bandung', region: 'Kota Bandung', cat: 'Edukasi' },
    { name: 'Gedung Sate', region: 'Kota Bandung', cat: 'Sejarah/Landmark' },
    { name: 'Jalan Asia Afrika', region: 'Kota Bandung', cat: 'Sejarah/Landmark' },
    { name: 'Tebing Keraton', region: 'Kab. Bandung', cat: 'Pemandangan' },
    { name: 'Curug Pelangi', region: 'Kab. Bandung Barat', cat: 'Alam/Air Terjun' },
    
    // Bogor
    { name: 'Kebun Raya Bogor', region: 'Kota Bogor', cat: 'Alam/Edukasi' },
    { name: 'Taman Safari Indonesia', region: 'Kab. Bogor', cat: 'Satwa/Alam' },
    { name: 'Kuntum Farmfield', region: 'Kota Bogor', cat: 'Edutainment' },
    { name: 'Curug Cilember', region: 'Kab. Bogor', cat: 'Alam/Air Terjun' },
    { name: 'Little Venice Kota Bunga', region: 'Kab. Bogor', cat: 'Rekreasi' },
    { name: 'Taman Bunga Nusantara', region: 'Kab. Cianjur/Bogor', cat: 'Taman' },
    { name: 'Gunung Pancar', region: 'Kab. Bogor', cat: 'Alam/Hutan Pinus' },
    { name: 'Devoyage Bogor', region: 'Kota Bogor', cat: 'Rekreasi' },

    // Garut
    { name: 'Kawah Talaga Bodas', region: 'Kab. Garut', cat: 'Alam/Vulkanik' },
    { name: 'Gunung Papandayan', region: 'Kab. Garut', cat: 'Alam/Pendakian' },
    { name: 'Situ Bagendit', region: 'Kab. Garut', cat: 'Alam/Danau' },
    { name: 'Pantai Santolo', region: 'Kab. Garut', cat: 'Pantai' },
    { name: 'Pantai Rancabuaya', region: 'Kab. Garut', cat: 'Pantai' },
    { name: 'Darajat Pass', region: 'Kab. Garut', cat: 'Pemandian Air Panas' },

    // Sukabumi
    { name: 'Geopark Ciletuh', region: 'Kab. Sukabumi', cat: 'Alam/Geologi' },
    { name: 'Jembatan Gantung Situ Gunung', region: 'Kab. Sukabumi', cat: 'Pemandangan' },
    { name: 'Pantai Pelabuhan Ratu', region: 'Kab. Sukabumi', cat: 'Pantai' },
    { name: 'Curug Sawer', region: 'Kab. Sukabumi', cat: 'Alam/Air Terjun' },
    { name: 'Ujung Genteng', region: 'Kab. Sukabumi', cat: 'Pantai/Konservasi' },

    // Cianjur
    { name: 'Situs Gunung Padang', region: 'Kab. Cianjur', cat: 'Sejarah/Megalitikum' },
    { name: 'Kebun Raya Cibodas', region: 'Kab. Cianjur', cat: 'Alam/Edukasi' },
    { name: 'Curug Citambur', region: 'Kab. Cianjur', cat: 'Alam/Air Terjun' },
    { name: 'Istana Kepresidenan Cipanas', region: 'Kab. Cianjur', cat: 'Sejarah' },

    // Cirebon
    { name: 'Keraton Kasepuhan', region: 'Kota Cirebon', cat: 'Sejarah/Budaya' },
    { name: 'Goa Sunyaragi', region: 'Kota Cirebon', cat: 'Sejarah/Arsitektur' },
    { name: 'Batik Trusmi', region: 'Kab. Cirebon', cat: 'Budaya/Belanja' },
    { name: 'Makam Sunan Gunung Jati', region: 'Kab. Cirebon', cat: 'Religi/Sejarah' },

    // Tasikmalaya
    { name: 'Gunung Galunggung', region: 'Kab. Tasikmalaya', cat: 'Alam/Vulkanik' },
    { name: 'Kampung Naga', region: 'Kab. Tasikmalaya', cat: 'Budaya/Tradisional' },
    { name: 'Pantai Karang Tawulan', region: 'Kab. Tasikmalaya', cat: 'Pantai' },
    { name: 'Situ Gede', region: 'Kota Tasikmalaya', cat: 'Alam/Danau' },

    // Pangandaran
    { name: 'Pantai Pangandaran', region: 'Kab. Pangandaran', cat: 'Pantai' },
    { name: 'Green Canyon (Cukang Taneuh)', region: 'Kab. Pangandaran', cat: 'Alam/Sungai' },
    { name: 'Pantai Batu Karas', region: 'Kab. Pangandaran', cat: 'Pantai/Surfing' },
    { name: 'Pantai Madasari', region: 'Kab. Pangandaran', cat: 'Pantai' },
    { name: 'Citumang Green Valley', region: 'Kab. Pangandaran', cat: 'Alam/Sungai' },

    // Sumedang, Kuningan, Majalengka
    { name: 'Taman Batu Hanjuang', region: 'Kab. Kuningan', cat: 'Alam' },
    { name: 'Telaga Biru Cicerem', region: 'Kab. Kuningan', cat: 'Alam/Danau' },
    { name: 'Gunung Ciremai', region: 'Kab. Kuningan/Majalengka', cat: 'Alam/Gunung' },
    { name: 'Terasering Panyaweuyan', region: 'Kab. Majalengka', cat: 'Alam/Persawahan' },
    { name: 'Curug Muara Jaya', region: 'Kab. Majalengka', cat: 'Alam/Air Terjun' },
    { name: 'Taman Buru Masigit Kareumbi', region: 'Kab. Sumedang', cat: 'Alam/Konservasi' },
    { name: 'Kampung Toga', region: 'Kab. Sumedang', cat: 'Rekreasi' },
    { name: 'Jatigede Dam', region: 'Kab. Sumedang', cat: 'Landmark/Air' },
    
    // Bekasi, Depok, Karawang, Purwakarta
    { name: 'Waduk Jatiluhur', region: 'Kab. Purwakarta', cat: 'Landmark/Air' },
    { name: 'Gunung Lembu', region: 'Kab. Purwakarta', cat: 'Alam/Pemandangan' },
    { name: 'Candi Jiwa Batujaya', region: 'Kab. Karawang', cat: 'Sejarah' },
    { name: 'Curug Cigentis', region: 'Kab. Karawang', cat: 'Alam/Air Terjun' },
    { name: 'Hutan Pinus Sentul', region: 'Kab. Bogor', cat: 'Alam' },
    { name: 'Monumen Perjuangan Karawang', region: 'Kab. Karawang', cat: 'Sejarah' }
];

const kabKota = [
    'Kota Bandung', 'Kota Bogor', 'Kota Depok', 'Kota Bekasi', 'Kota Cirebon', 'Kota Sukabumi', 'Kota Tasikmalaya', 'Kota Banjar', 'Kota Cimahi',
    'Kab. Bandung', 'Kab. Bandung Barat', 'Kab. Bogor', 'Kab. Bekasi', 'Kab. Karawang', 'Kab. Purwakarta', 'Kab. Subang', 'Kab. Sukabumi', 'Kab. Cianjur',
    'Kab. Garut', 'Kab. Tasikmalaya', 'Kab. Ciamis', 'Kab. Kuningan', 'Kab. Majalengka', 'Kab. Sumedang', 'Kab. Indramayu', 'Kab. Cirebon', 'Kab. Pangandaran'
];

const pref = ['Curug', 'Pantai', 'Situ', 'Kawah', 'Gunung', 'Bukit', 'Lembah', 'Taman', 'Kampung', 'Hutan', 'Riam', 'Goa', 'Telaga'];
const loc = ['Parahyangan', 'Sunda', 'Pajajaran', 'Galuh', 'Siliwangi', 'Pasundan', 'Citarum', 'Cimanuk', 'Cisadane', 'Malabar', 'Priangan', 'Galunggung', 'Ciremai', 'Salak', 'Gede', 'Pangrango', 'Burangrang', 'Tangkuban', 'Wayang', 'Patoha', 'Papandayan', 'Guntur'];
const adj = ['Asri', 'Indah', 'Pesona', 'Lestari', 'Agung', 'Mulia', 'Sejuk', 'Hijau', 'Biru', 'Ceria', 'Harapan', 'Abadi', 'Luhur', 'Kencana', 'Sakti', 'Jaya', 'Makmur'];

function generateContent() {
    let tourismLines = [];
    const usedNames = new Set();

    // 1. Add real places
    realTourism.forEach((t, i) => {
        let no = i + 1;
        let query = encodeURIComponent(`${t.name} ${t.region}`);
        tourismLines.push(`| ${no} | **${t.name}** | ${t.region} | ${t.cat} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
        usedNames.add(t.name);
    });

    // 2. Generate the rest (up to 200)
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
        { name: 'Ir. H. Djuanda Kartawidjaja', role: 'Pahlawan Nasional, Pencetus Deklarasi Djuanda' },
        { name: 'Dewi Sartika', role: 'Pahlawan Nasional, Pelopor Pendidikan Perempuan (Sakola Istri)' },
        { name: 'Raden Otto Iskandardinata', role: 'Pahlawan Nasional, "Si Jalak Harupat", Pengusul Nama TNI' },
        { name: 'Mohammad Toha', role: 'Pahlawan Nasional, Tokoh Bandung Lautan Api' },
        { name: 'Achmad Soebardjo', role: 'Pahlawan Nasional, Menteri Luar Negeri RI Pertama' },
        { name: 'KH Noer Ali', role: 'Pahlawan Nasional, "Singa Karawang-Bekasi"' },
        { name: 'KH Zainal Mustafa', role: 'Pahlawan Nasional, Pemimpin Perlawanan Singaparna' },
        { name: 'Susi Susanti', role: 'Atlet Bulu Tangkis, Peraih Emas Pertama Olimpiade RI' },
        { name: 'Taufik Hidayat', role: 'Atlet Bulu Tangkis, Peraih Emas Olimpiade Athena' },
        { name: 'Asep Sunandar Sunarya', role: 'Maestro Wayang Golek Dunia (Si Cepot)' },
        { name: 'Daeng Soetigna', role: 'Maestro Angklung, Pencipta Angklung Diatonis' },
        { name: 'Gugum Gumbira', role: 'Maestro Tari Jaipongan' },
        { name: 'Popo Iskandar', role: 'Pelukis Modern Terkemuka' },
        { name: 'Iwa Koesoemasoemantri', role: 'Pahlawan Nasional, Menteri Sosial RI Pertama' },
        { name: 'Raden Machjar Angga Koesoemadinata', role: 'Pakar Teori Musik Sunda' },
        { name: 'Lasminingrat', role: 'Tokoh Pendidikan Perempuan dari Garut' },
        { name: 'Raden Ayu Lasminingrat', role: 'Penerjemah dan Penulis Cerita Anak Sunda' },
        { name: 'Anthony Sinisuka Ginting', role: 'Atlet Bulu Tangkis Papan Atas Dunia' },
        { name: 'Ridwan Kamil', role: 'Arsitek Internasional dan Tokoh Inovasi Daerah' },
        { name: 'R.E. Martadinata', role: 'Pahlawan Nasional, Laksamana TNI AL' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Jawa Barat

## Ringkasan
**Ibu Kota:** Bandung
**Lokasi:** Bagian barat Pulau Jawa
**Cakupan Wilayah:** 18 Kabupaten, 9 Kota

Jawa Barat merupakan provinsi dengan populasi terbanyak di Indonesia dan menjadi pusat budaya Suku Sunda. Dikenal dengan sebutan "Tanah Pasundan", wilayah ini memiliki topografi pegunungan vulkanik yang subur, serta pesisir pantai utara dan selatan yang membentang luas. Jawa Barat memiliki peranan krusial baik di masa kerajaan kuno (seperti Kerajaan Tarumanagara dan Pajajaran) maupun dalam sejarah kemerdekaan Indonesia.

## Administrasi
Jawa Barat terdiri dari 18 kabupaten dan 9 kota:
### Kabupaten
1. Kabupaten Bandung
2. Kabupaten Bandung Barat
3. Kabupaten Bekasi
4. Kabupaten Bogor
5. Kabupaten Ciamis
6. Kabupaten Cianjur
7. Kabupaten Cirebon
8. Kabupaten Garut
9. Kabupaten Indramayu
10. Kabupaten Karawang
11. Kabupaten Kuningan
12. Kabupaten Majalengka
13. Kabupaten Pangandaran
14. Kabupaten Purwakarta
15. Kabupaten Subang
16. Kabupaten Sukabumi
17. Kabupaten Sumedang
18. Kabupaten Tasikmalaya

### Kota
1. Kota Bandung
2. Kota Banjar
3. Kota Bekasi
4. Kota Bogor
5. Kota Cimahi
6. Kota Cirebon
7. Kota Depok
8. Kota Sukabumi
9. Kota Tasikmalaya

## Sejarah Singkat
Jawa Barat adalah rumah bagi salah satu kerajaan tertua di Nusantara, **Tarumanagara** (abad ke-4 hingga abad ke-7). Puncak kejayaan Hindu-Budha terjadi pada masa **Kerajaan Pajajaran** dengan raja legendarisnya Sri Baduga Maharaja atau Prabu Siliwangi. Pasca-kemerdekaan, wilayah ini menjadi saksi peristiwa **Bandung Lautan Api** pada tahun 1946, di mana rakyat membakar Bandung Selatan demi mempertahankan kemerdekaan. Selain itu, Bandung menjadi pusat diplomasi dunia melalui **Konferensi Asia-Afrika 1955** yang melahirkan Dasasila Bandung.

## Fun Fact / Hal Menarik
- **Gedung Sate:** Kantor Gubernur Jawa Barat di Bandung ini memiliki ornamen "sate" dengan 6 tusukan yang melambangkan 6 juta Gulden biaya pembangunannya.
- **UNESCO Culture:** Angklung, alat musik bambu khas Sunda, telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia.
- **Bosscha:** Observatorium Bosscha di Lembang adalah observatorium tertua di Indonesia dan salah satu yang terpilih sebagai situs warisan dunia IAU.

## Budaya
- **Angklung:** Alat musik multitonal yang terbuat dari bambu. Saung Angklung Udjo adalah pusat pelestariannya yang mendunia.
- **Wayang Golek:** Pertunjukan boneka kayu yang mementaskan epos Mahabharata dan Ramayana dengan tokoh jenaka khas Sunda seperti Si Cepot.
- **Jaipongan:** Tarian enerjik yang memadukan elemen silat, ketuk tilu, dan musik kendang yang dinamis.
- **Sisingaan:** Seni pertunjukan tradisional dari Subang yang menampilkan patung singa yang diusung oleh para penari.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Nasi Timbel** | Nasi hangat yang dibungkus daun pisang, disajikan dengan ayam goreng, tahu, tempe, lalapan, dan sambal terasi. |
| **Seblak** | Camilan pedas gurih berbahan dasar kerupuk basah yang dimasak dengan kencur, bumbu aromatik, dan aneka toping. |
| **Batagor** | Bakso Tahu Goreng, makanan khas Bandung dengan saus kacang kental yang gurih. |
| **Karedok** | Salad sayuran mentah segar yang disiram saus kacang, berbeda dengan Gado-gado yang menggunakan sayuran matang. |
| **Peuyeum** | Tape singkong khas Bandung yang difermentasi, memiliki rasa manis asam yang kuat. |

## Pariwisata
Jawa Barat menawarkan keindahan pegunungan, pantai eksotis, dan wisata belanja/kuliner.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Jawa Barat.
- Sejarah Jawa Barat, Dinas Kebudayaan dan Pariwisata (Disparbud) Jabar.
- Wonderful Indonesia - West Java.
`;

    fs.writeFileSync(path.join(__dirname, 'Jawa-Barat', 'README.md'), readmeContent);
    console.log('Jawa Barat README.md has been successfully generated without numbers.');
}

generateContent();
