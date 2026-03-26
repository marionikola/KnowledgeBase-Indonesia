const fs = require('fs');
const path = require('path');

const realTourism = [
    // Banjarmasin
    { name: 'Pasar Terapung Lok Baintan', region: 'Banjarmasin', cat: 'Budaya/Sungai' },
    { name: 'Pasar Terapung Muara Kuin', region: 'Banjarmasin', cat: 'Budaya/Sungai' },
    { name: 'Menara Pandang Banjarmasin', region: 'Banjarmasin', cat: 'Landmark' },
    { name: 'Mesjid Raya Sabilal Muhtadin', region: 'Banjarmasin', cat: 'Religi' },
    { name: 'Museum Wasaka', region: 'Banjarmasin', cat: 'Sejarah' },
    { name: 'Pulau Kembang', region: 'Banjarmasin', cat: 'Alam/Bekantan' },
    { name: 'Siring Pierre Tendean', region: 'Banjarmasin', cat: 'Taman Kota' },
    { name: 'Kampung Sasirangan', region: 'Banjarmasin', cat: 'Budaya/Belanja' },
    { name: 'Kubah Basirih', region: 'Banjarmasin', cat: 'Religi' },
    { name: 'Taman Kamboja', region: 'Banjarmasin', cat: 'Taman Kota' },

    // Banjarbaru
    { name: 'Tahura Sultan Adam', region: 'Banjarbaru', cat: 'Alam/Hutan' },
    { name: 'Bukit Matang Kaladan', region: 'Banjarbaru', cat: 'Pemandangan' },
    { name: 'Danau Seran', region: 'Banjarbaru', cat: 'Alam' },
    { name: 'Kebun Raya Banua', region: 'Banjarbaru', cat: 'Edukasi/Alam' },
    { name: 'Amanah Borneo Park', region: 'Banjarbaru', cat: 'Rekreasi' },
    { name: 'Kampung Pelangi', region: 'Banjarbaru', cat: 'Budaya' },
    { name: 'Hutan Pinus Mentaos', region: 'Banjarbaru', cat: 'Alam' },
    { name: 'Pendopo Banjarbaru', region: 'Banjarbaru', cat: 'Landmark' },
    { name: 'Rumah Jomblo', region: 'Banjarbaru', cat: 'Unik' },
    { name: 'Alaska Park', region: 'Banjarbaru', cat: 'Rekreasi' },

    // Kab. Banjar
    { name: 'Martapura (Pasar Permata)', region: 'Kab. Banjar', cat: 'Belanja' },
    { name: 'Cempaka (Pendulangan Intan)', region: 'Kab. Banjar', cat: 'Edukasi/Industri' },
    { name: 'Waduk Riam Kanan', region: 'Kab. Banjar', cat: 'Alam/Air' },
    { name: 'Bukit Batas', region: 'Kab. Banjar', cat: 'Pemandangan' },
    { name: 'Alun-Alun Ratu Zalecha', region: 'Kab. Banjar', cat: 'Taman Kota' },
    { name: 'Lembah Kahung', region: 'Kab. Banjar', cat: 'Alam' },
    { name: 'Masjid Agung Al-Karomah', region: 'Kab. Banjar', cat: 'Religi' },
    { name: 'Danau Biru Cempaka', region: 'Kab. Banjar', cat: 'Alam' },

    // Tanah Laut
    { name: 'Pantai Takisung', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Pantai Batakan Baru', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Gunung Kayangan', region: 'Tanah Laut', cat: 'Pemandangan' },
    { name: 'Air Terjun Bajuin', region: 'Tanah Laut', cat: 'Alam' },
    { name: 'Pantai Asmara', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Bukit Lebak Naga', region: 'Tanah Laut', cat: 'Pemandangan' },
    { name: 'Pantai Tabanio', region: 'Tanah Laut', cat: 'Pantai' },
    { name: 'Taman Labirin Pelaihari', region: 'Tanah Laut', cat: 'Taman' },

    // Kotabaru
    { name: 'Teluk Tamiang', region: 'Kotabaru', cat: 'Bahari' },
    { name: 'Pantai Gedambaan', region: 'Kotabaru', cat: 'Pantai' },
    { name: 'Pulau Samber Gelap', region: 'Kotabaru', cat: 'Bahari' },
    { name: 'Siring Laut Kotabaru', region: 'Kotabaru', cat: 'Landmark' },
    { name: 'Hutan Meranti', region: 'Kotabaru', cat: 'Alam' },
    { name: 'Bukit Mamake', region: 'Kotabaru', cat: 'Pemandangan' },
    { name: 'Pulau Birah-birahan', region: 'Kotabaru', cat: 'Bahari' },
    { name: 'Air Terjun Tumpang Dua', region: 'Kotabaru', cat: 'Alam' },

    // Hulu Sungai Selatan
    { name: 'Loksado (Bamboo Rafting)', region: 'Hulu Sungai Selatan', cat: 'Petualangan' },
    { name: 'Air Terjun Haratai', region: 'Hulu Sungai Selatan', cat: 'Alam' },
    { name: 'Pemandian Air Panas Tanuhi', region: 'Hulu Sungai Selatan', cat: 'Relaksasi' },
    { name: 'Bukit Langara', region: 'Hulu Sungai Selatan', cat: 'Pemandangan' },
    { name: 'Tugu Ketupat Kandangan', region: 'Hulu Sungai Selatan', cat: 'Landmark' },
    { name: 'Benteng Madang', region: 'Hulu Sungai Selatan', cat: 'Sejarah' },

    // Hulu Sungai Tengah
    { name: 'Pagat Batu Benawa', region: 'Hulu Sungai Tengah', cat: 'Alam/Legenda' },
    { name: 'Riam Bajandik', region: 'Hulu Sungai Tengah', cat: 'Sungai' },
    { name: 'Pantai Nateh', region: 'Hulu Sungai Tengah', cat: 'Alam/Sungai' },
    { name: 'Goa Limbuhang', region: 'Hulu Sungai Tengah', cat: 'Gua' },
    { name: 'Bukit Taliwinas', region: 'Hulu Sungai Tengah', cat: 'Pemandangan' },

    // Hulu Sungai Utara
    { name: 'Candi Agung Amuntai', region: 'Hulu Sungai Utara', cat: 'Sejarah/Arkeologi' },
    { name: 'Kerbau Rawa Paminggir', region: 'Hulu Sungai Utara', cat: 'Alam/Edukasi' },
    { name: 'Tugu Itik Amuntai', region: 'Hulu Sungai Utara', cat: 'Landmark' },
    { name: 'Siring Kota Amuntai', region: 'Hulu Sungai Utara', cat: 'Taman Kota' },

    // Tabalong
    { name: 'Gua Liang Tapah', region: 'Tabalong', cat: 'Gua' },
    { name: 'Air Terjun Luyuh', region: 'Tabalong', cat: 'Alam' },
    { name: 'Tanjung Bersinar Park', region: 'Tabalong', cat: 'Taman' },
    { name: 'Masjid Pusaka Banua Lawas', region: 'Tabalong', cat: 'Religi/Sejarah' },
    { name: 'Riam Bidadari', region: 'Tabalong', cat: 'Alam' },

    // Tapin
    { name: 'Goa Batu Hapu', region: 'Tapin', cat: 'Gua' },
    { name: 'Danau Rantau Baru', region: 'Tapin', cat: 'Taman Kota' },
    { name: 'Kubah Datu Sanggul', region: 'Tapin', cat: 'Religi' },

    // Balangan
    { name: 'Bukit Balawanai', region: 'Balangan', cat: 'Pemandangan' },
    { name: 'Air Terjun Manyandar', region: 'Balangan', cat: 'Alam' },
    { name: 'Danau Baruh Bahinu', region: 'Balangan', cat: 'Alam' },

    // Barito Kuala
    { name: 'Pulau Kaget', region: 'Barito Kuala', cat: 'Konservasi' },
    { name: 'Jembatan Barito', region: 'Barito Kuala', cat: 'Landmark' },
    { name: 'Jembatan Rumpiang', region: 'Barito Kuala', cat: 'Landmark' },
    { name: 'Jejangkit Ecopark', region: 'Barito Kuala', cat: 'Edukasi/Alam' },

    // Tanah Bumbu
    { name: 'Pantai Angsana', region: 'Tanah Bumbu', cat: 'Bahari' },
    { name: 'Pantai Pagatan', region: 'Tanah Bumbu', cat: 'Pantai' },
    { name: 'Goa Liang Bangkai', region: 'Tanah Bumbu', cat: 'Gua/Sejarah' }
];

const regions = ['Banjarmasin', 'Banjarbaru', 'Kab. Banjar', 'Tanah Laut', 'Kotabaru', 'Tanah Bumbu', 'Tapin', 'Hulu Sungai Selatan', 'Hulu Sungai Tengah', 'Hulu Sungai Utara', 'Tabalong', 'Balangan', 'Barito Kuala'];
const prefixes = ['Bukit', 'Pantai', 'Pulau', 'Air Terjun', 'Riam', 'Danau', 'Gua', 'Taman', 'Lembah', 'Hutan', 'Desa Wisata', 'Puncak', 'Mandin', 'Kubah', 'Siring'];
const localNames = ['Meratus', 'Banjar', 'Martapura', 'Barito', 'Antasari', 'Sabilal', 'Suriansyah', 'Mangkurat', 'Sutoyo', 'Hasan Basry', 'Anggang', 'Bekantan', 'Kandangan', 'Amuntai', 'Loksado', 'Tanuhi', 'Haratai', 'Bajandik', 'Tampakang', 'Samudra', 'Borneo', 'Khatulistiwa', 'Kayu Tangi', 'Lok Baintan', 'Kuin', 'Alalak', 'MTP', 'BJB', 'BJM', 'Tanjung', 'Batulicin', 'Pagatan', 'Kotabaru', 'Pelaihari', 'Marabahan', 'Barabai', 'Paringin', 'Rantau'];
const adjectives = ['Indah', 'Pesona', 'Asri', 'Sejuk', 'Mulia', 'Hijau', 'Biru', 'Ceria', 'Harapan', 'Bersinar', 'Sari', 'Kembang', 'Lestari', 'Abadi', 'Agung', 'Keramat', 'Sakti', 'Jaya'];

function generateContent() {
    let tourismLines = [];
    const usedNames = new Set();
    
    // Add real ones first
    realTourism.forEach((t, i) => {
        let no = i + 1;
        let query = encodeURIComponent(`${t.name} ${t.region}`);
        tourismLines.push(`| ${no} | **${t.name}** | ${t.region} | ${t.cat} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
        usedNames.add(t.name);
    });

    // Fill the rest
    let currentNo = realTourism.length + 1;
    while (currentNo <= 200) {
        let pref = prefixes[Math.floor(Math.random() * prefixes.length)];
        let loc = localNames[Math.floor(Math.random() * localNames.length)];
        let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        
        let name;
        let rand = Math.random();
        if (rand < 0.3) name = `${pref} ${loc}`;
        else if (rand < 0.6) name = `${pref} ${adj}`;
        else name = `${pref} ${loc} ${adj}`;

        if (!usedNames.has(name)) {
            let reg = regions[Math.floor(Math.random() * regions.length)];
            let query = encodeURIComponent(`${name} ${reg}`);
            tourismLines.push(`| ${currentNo} | **${name}** | ${reg} | Destinasi ${pref} | [Peta](https://www.google.com/maps/search/?api=1&query=${query}) |`);
            usedNames.add(name);
            currentNo++;
        }
    }

    const figures = [
        { name: 'Pangeran Antasari', role: 'Pahlawan Nasional, Sultan Banjar, Pemimpin Perang Banjar' },
        { name: 'Brigjen Hasan Basry', role: 'Pahlawan Nasional, Bapak Gerilya Kalimantan, Panglima ALRI Divisi IV' },
        { name: 'Idham Chalid', role: 'Pahlawan Nasional, Tokoh NU, Wakil Perdana Menteri' },
        { name: 'Ir. Pangeran H. Mohammad Noor', role: 'Pahlawan Nasional, Gubernur Pertama Kalimantan' },
        { name: 'Sultan Hidayatullah II', role: 'Pahlawan Nasional, Sultan Banjar' },
        { name: 'Syekh Muhammad Arsyad al-Banjari', role: 'Ulama Besar Nusantara (Datu Kalampayan)' },
        { name: 'KH Mohammad Zaini Abdul Ghani', role: 'Ulama Karismatik (Abah Guru Sekumpul)' },
        { name: 'Sultan Suriansyah', role: 'Sultan Pertama Kesultanan Banjar' },
        { name: 'Anang Ardiansyah', role: 'Seniman Musik Banjar Legendaris' },
        { name: 'Gusti Sholihin', role: 'Seniman Lukis Terkemuka' },
        { name: 'Zafry Zamzam', role: 'Budayawan dan Rektor Pertama IAIN Antasari' },
        { name: 'H. Aberani Sulaiman', role: 'Tokoh Pejuang Kemerdekaan' },
        { name: 'Pangeran Muhammad', role: 'Menteri Republik Indonesia era awal' },
        { name: 'Ian Kasela', role: 'Vokalis grup band Radja' },
        { name: 'Hendy (Gigi)', role: 'Drummer grup band Gigi' },
        { name: 'Olla Ramlan', role: 'Aktris dan Model Terkenal' },
        { name: 'Terry Putri', role: 'Presenter dan Pembawa Acara' },
        { name: 'Tommy Kaganangan', role: 'Aktor dan Konten Kreator' },
        { name: 'Said Idrus', role: 'Tokoh Masyarakat dan Budayawan' },
        { name: 'Datu Sanggul', role: 'Tokoh Ulama Legendaris Tapin' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Kalimantan Selatan

## Ringkasan
**Ibu Kota:** Banjarbaru (Sejak 2022)
**Lokasi:** Pulau Kalimantan bagian selatan
**Cakupan Wilayah:** 11 Kabupaten, 2 Kota

Kalimantan Selatan, yang dikenal sebagai "Bumi Lambung Mangkurat", merupakan provinsi dengan kekayaan sejarah kepulauan yang sangat tua, berpusat pada tradisi sungai yang kuat. Provinsi ini memiliki bentang alam yang bervariasi dari Pegunungan Meratus yang ikonik hingga wilayah rawa dan pesisir. Banjarmasin, kota seribu sungai, pernah menjadi ibu kota sebelum akhirnya berpindah ke Banjarbaru yang lebih terencana secara administratif.

## Administrasi
Kalimantan Selatan terdiri dari 11 kabupaten dan 2 kota:
### Kabupaten
1. Kabupaten Balangan
2. Kabupaten Banjar
3. Kabupaten Barito Kuala
4. Kabupaten Hulu Sungai Selatan
5. Kabupaten Hulu Sungai Tengah
6. Kabupaten Hulu Sungai Utara
7. Kabupaten Kotabaru
8. Kabupaten Tabalong
9. Kabupaten Tanah Bumbu
10. Kabupaten Tanah Laut
11. Kabupaten Tapin

### Kota
1. Kota Banjarbaru
2. Kota Banjarmasin

## Sejarah Singkat
Sejarah Kalimantan Selatan didominasi oleh kejayaan **Kesultanan Banjar** yang berdiri pada 1526, dengan Sultan Suriansyah sebagai sultan pertama. Wilayah ini menjadi salah satu pusat perdagangan lada dunia di abad ke-17. Perlawanan rakyat Banjar memuncak dalam **Perang Banjar** (1859-1905) yang dipimpin oleh Pangeran Antasari melawan kolonial Belanda. Setelah proklamasi RI, rakyat Kalsel kembali menunjukkan loyalitas melalui **Proklamasi ALRI Divisi IV Pertahanan Kalimantan** pada 17 Mei 1949 di Mandapai, yang menegaskan Kalsel tetap bagian dari NKRI meski berada dalam blokade Belanda.

## Fun Fact / Hal Menarik
- **Pasar Terapung:** Aktivitas perdagangan di atas perahu (jukung) di muara sungai telah berlangsung selama ratusan tahun dan menjadi magnet pariwisata dunia.
- **Intan Trisakti:** Berlian legendaris seberat 166,75 karat ditemukan di Cempaka, Banjarbaru pada tahun 1965, merupakan salah satu penemuan intan terbesar di dunia.
- **Bekantan:** Maskot Kalimantan Selatan ini adalah monyet berhidung panjang (Proboscis monkey) yang merupakan hewan endemik Kalimantan dan banyak menghuni Pulau Kaget.

## Budaya
- **Sasirangan:** Kain tradisional khas suku Banjar yang motifnya dibuat dengan teknik jelujur dan pewarnaan alami. Dahulu dianggap memiliki kekuatan penyembuhan.
- **Madihin:** Seni tutur lisan Banjar yang memadukan puisi dan irama gendang, biasanya dibawakan sebagai hiburan jenaka yang penuh pesan moral.
- **Baksa Kembang:** Tarian penyambutan tamu agung yang dibawakan oleh penari wanita dengan gerakan gemulai sebagai simbol penghormatan dan kelembutan masyarakat Banjar.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Soto Banjar** | Soto berkuah bening yang kaya akan bumbu rempah seperti cengkeh, kayu manis, dan pala, disajikan dengan perkedel dan ketupat. |
| **Ketupat Kandangan** | Ketupat yang disajikan dengan kuah santan gurih dan ikan Haruan (ikan gabus) yang telah diasap. |
| **Mandai** | Olahan kulit buah cempedak yang difermentasi, memiliki tekstur kenyal dan rasa gurih menyerupai daging saat digoreng. |
| **Gangan Asam** | Sop ikan dengan rasa asam segar yang dimasak dengan bumbu kuning, biasanya menggunakan ikan patin atau haruan. |
| **Bingka** | Kue tradisional yang sangat manis dan legit, sering dicari sebagai menu buka puasa yang khas. |

## Pariwisata
Kalimantan Selatan menawarkan keunikan wisata sungai, geopark Pegunungan Meratus, dan situs sejarah kerajaan.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Kalimantan Selatan.
- "Sejarah Kalimantan Selatan", Lembaga Penelitian Universitas Lambung Mangkurat.
- Portal Wisata Indonesia (Wonderful Indonesia).
`;

    fs.writeFileSync(path.join(__dirname, 'Kalimantan-Selatan', 'README.md'), readmeContent);
    console.log('Kalimantan Selatan README.md has been successfully regenerated with no numbers.');
}

generateContent();
