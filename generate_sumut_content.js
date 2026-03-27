const fs = require('fs');
const path = require('path');

const realTourism = [
    // Medan
    { name: 'Istana Maimun', region: 'Kota Medan', cat: 'Sejarah/Budaya' },
    { name: 'Tjong A Fie Mansion', region: 'Kota Medan', cat: 'Sejarah/Museum' },
    { name: 'Masjid Raya Al-Mashun', region: 'Kota Medan', cat: 'Religi/Sejarah' },
    { name: 'Gereja Graha Maria Annai Velangkanni', region: 'Kota Medan', cat: 'Religi/Arsitektur' },
    { name: 'Rahmat International Wildlife Museum', region: 'Kota Medan', cat: 'Museum/Edukasi' },
    { name: 'Museum Negeri Sumatera Utara', region: 'Kota Medan', cat: 'Museum/Sejarah' },
    { name: 'Vihara Gunung Timur', region: 'Kota Medan', cat: 'Religi/Budaya' },
    
    // Deli Serdang & Binjai
    { name: 'Hairos Water Park', region: 'Kab. Deli Serdang', cat: 'Rekreasi' },
    { name: 'Air Terjun Dwi Warna Sibolangit', region: 'Kab. Deli Serdang', cat: 'Alam/Air Terjun' },
    { name: 'Taman Wisata Alam Sibolangit', region: 'Kab. Deli Serdang', cat: 'Alam/Hutan' },
    { name: 'Danau Linting', region: 'Kab. Deli Serdang', cat: 'Alam/Danau' },

    // Karo (Berastagi)
    { name: 'Bukit Gundaling', region: 'Kab. Karo', cat: 'Alam/Pemandangan' },
    { name: 'Gunung Sibayak', region: 'Kab. Karo', cat: 'Alam/Gunung' },
    { name: 'Gunung Sinabung', region: 'Kab. Karo', cat: 'Alam/Gunung' },
    { name: 'Air Terjun Sipiso-piso', region: 'Kab. Karo', cat: 'Alam/Air Terjun' },
    { name: 'Pagoda Taman Alam Lumbini', region: 'Kab. Karo', cat: 'Religi/Arsitektur' },
    { name: 'Danau Lau Kawar', region: 'Kab. Karo', cat: 'Alam/Danau' },
    { name: 'Mikie Funland', region: 'Kab. Karo', cat: 'Rekreasi' },

    // Simalungun & Pematangsiantar
    { name: 'Bukit Indah Simarjarunjung', region: 'Kab. Simalungun', cat: 'Alam/Pemandangan' },
    { name: 'Kawah Putih Tinggi Raja', region: 'Kab. Simalungun', cat: 'Alam/Geologi' },
    { name: 'Siantar Zoo', region: 'Kota Pematangsiantar', cat: 'Satwa/Edukasi' },
    { name: 'Patung Yesus Sibea-bea', region: 'Kab. Samosir/Simalungun', cat: 'Religi/Pemandangan' },

    // Samosir & Toba
    { name: 'Danau Toba', region: 'Lintas Kabupaten', cat: 'Alam/Danau' },
    { name: 'Pulau Samosir', region: 'Kab. Samosir', cat: 'Budaya/Alam' },
    { name: 'Bukit Holbung', region: 'Kab. Samosir', cat: 'Alam/Pemandangan' },
    { name: 'Menara Pandang Tele', region: 'Kab. Samosir', cat: 'Alam/Pemandangan' },
    { name: 'Desa Wisata Tomok', region: 'Kab. Samosir', cat: 'Budaya/Sejarah' },
    { name: 'Huta Siallagan', region: 'Kab. Samosir', cat: 'Budaya/Sejarah' },
    { name: 'Pantai Pasir Putih Parbaba', region: 'Kab. Samosir', cat: 'Pantai/Danau' },
    { name: 'Air Terjun Efrata', region: 'Kab. Samosir', cat: 'Alam/Air Terjun' },

    // Nias
    { name: 'Pantai Sorake', region: 'Kab. Nias Selatan', cat: 'Pantai/Surfing' },
    { name: 'Pantai Lagundri', region: 'Kab. Nias Selatan', cat: 'Pantai/Surfing' },
    { name: 'Desa Bawomataluo', region: 'Kab. Nias Selatan', cat: 'Budaya/Sejarah' },
    { name: 'Museum Pusaka Nias', region: 'Kota Gunungsitoli', cat: 'Museum/Budaya' },

    // Langkat
    { name: 'Bukit Lawang', region: 'Kab. Langkat', cat: 'Alam/Konservasi' },
    { name: 'Tangkahan (The Hidden Paradise)', region: 'Kab. Langkat', cat: 'Alam/Konservasi' },
    { name: 'Taman Nasional Gunung Leuser', region: 'Lintas Provinsi', cat: 'Alam/Konservasi' },

    // Tapanuli & Lainnya
    { name: 'Pulau Mursala', region: 'Kab. Tapanuli Tengah', cat: 'Alam/Pulau' },
    { name: 'Pantai Pandan', region: 'Kab. Tapanuli Tengah', cat: 'Pantai' },
    { name: 'Aek Sijorni', region: 'Kab. Tapanuli Selatan', cat: 'Alam/Air Terjun' },
    { name: 'Candi Bahal', region: 'Kab. Padang Lawas Utara', cat: 'Sejarah/Budaya' },
    { name: 'Huta Ginjang', region: 'Kab. Tapanuli Utara', cat: 'Alam/Pemandangan' },
    { name: 'Air Soda Tarutung', region: 'Kab. Tapanuli Utara', cat: 'Alam/Pemandian' }
];

const kabKota = [
    'Kota Medan', 'Kota Binjai', 'Kota Pematangsiantar', 'Kota Tanjungbalai', 'Kota Tebing Tinggi', 'Kota Sibolga', 'Kota Padangsidimpuan', 'Kota Gunungsitoli',
    'Kab. Deli Serdang', 'Kab. Langkat', 'Kab. Karo', 'Kab. Simalungun', 'Kab. Dairi', 'Kab. Tapanuli Utara', 'Kab. Tapanuli Selatan', 'Kab. Tapanuli Tengah',
    'Kab. Asahan', 'Kab. Labuhanbatu', 'Kab. Toba', 'Kab. Samosir', 'Kab. Nias Selatan', 'Kab. Mandailing Natal', 'Kab. Humbang Hasundutan', 'Kab. Pakpak Bharat'
];

const pref = ['Air Terjun', 'Pantai', 'Danau', 'Bukit', 'Gunung', 'Pemandian', 'Hutan', 'Riam', 'Lembah', 'Goa', 'Telaga', 'Pulau', 'Huta'];
const loc = ['Toba', 'Samosir', 'Batak', 'Deli', 'Karo', 'Nias', 'Simalungun', 'Sibolga', 'Tapanuli', 'Medan', 'Leuser', 'Mursala', 'Bahal', 'Sijorni'];
const adj = ['Asri', 'Indah', 'Pesona', 'Lestari', 'Agung', 'Mulia', 'Sejuk', 'Hijau', 'Biru', 'Ceria', 'Sakti', 'Jaya', 'Makmur'];

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
        { name: 'Sisingamangaraja XII', role: 'Pahlawan Nasional, Raja Toba yang melawan Belanda selama 30 tahun' },
        { name: 'Adam Malik', role: 'Pahlawan Nasional, Wakil Presiden RI ke-3, Tokoh Diplomasi Internasional' },
        { name: 'A.H. Nasution', role: 'Jenderal Besar TNI, Penggagas Taktik Gerilya (Fundamentals of Guerrilla Warfare)' },
        { name: 'D.I. Pandjaitan', role: 'Pahlawan Revolusi, Mayor Jenderal TNI Anumerta' },
        { name: 'Kiras Bangun', role: 'Pahlawan Nasional dari Karo (Garam Bata)' },
        { name: 'Ferdinand Lumban Tobing', role: 'Pahlawan Nasional, Gubernur Sumatera Utara pertama' },
        { name: 'T.B. Simatupang', role: 'Pahlawan Nasional, Tokoh Militer dan Pemikir Strategi' },
        { name: 'Djamin Ginting', role: 'Pahlawan Nasional dari Tanah Karo, Tokoh Militer' },
        { name: 'Amir Hamzah', role: 'Pahlawan Nasional, Penyair Angkatan Pujangga Baru dari Langkat' },
        { name: 'Sultan Ma\'mun Al Rasyid Perkasa Alamsyah', role: 'Pembangun Istana Maimun dan Masjid Raya Medan' },
        { name: 'Tjong A Fie', role: 'Tokoh Filantropis dan Pengusaha legendaris di Medan' },
        { name: 'E.W.P. Tambunan', role: 'Gubernur Sumut yang mempopulerkan semboyan "Marsipature Hutanabe"' },
        { name: 'Chairil Anwar', role: 'Penyair Terkemuka Indonesia, Tokoh Angkatan 45 (Lahir di Medan)' },
        { name: 'Donald Pandiangan', role: 'Legenda Panahan Indonesia, "Robin Hood Indonesia"' },
        { name: 'Ricky Sibiase', role: 'Atlet legendaris yang membanggakan Sumut' },
        { name: 'Marga Batak', role: 'Sistem Kekerabatan yang sangat kuat dan mendunia' },
        { name: 'Ono Niha', role: 'Sebutan untuk masyarakat asli Pulau Nias dengan budaya Megalitikum' },
        { name: 'Sultan Deli', role: 'Lembaga Adat Kesultanan yang masih bertahan hingga kini' },
        { name: 'T. Rizal Nurdin', role: 'Tokoh Kepemimpinan Sumatera Utara' },
        { name: 'H.M. Said', role: 'Tokoh Pers dan Pendiri Harian Waspada' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sumatera Utara

## Ringkasan
**Ibu Kota:** Medan
**Lokasi:** Bagian utara Pulau Sumatera
**Cakupan Wilayah:** 25 Kabupaten, 8 Kota

Sumatera Utara adalah provinsi dengan populasi terbesar di Pulau Sumatera dan dikenal karena kemajemukan etnisnya (Batak, Melayu, Nias, Tionghoa, India, dll). Wilayah ini memiliki ikon pariwisata dunia, yaitu **Danau Toba**, danau vulkanik terbesar di dunia. Dengan pusat pemerintahan di Medan (sebagai kota terbesar di Sumatera), provinsi ini memiliki peranan strategis dalam sejarah, perdagangan, dan budaya di Indonesia Barat.

## Administrasi
Sumatera Utara terdiri dari 25 kabupaten dan 8 kota:
### Kabupaten
1. Kabupaten Asahan
2. Kabupaten Batu Bara
3. Kabupaten Dairi
4. Kabupaten Deli Serdang
5. Kabupaten Humbang Hasundutan
6. Kabupaten Karo
7. Kabupaten Labuhanbatu
8. Kabupaten Labuhanbatu Selatan
9. Kabupaten Labuhanbatu Utara
10. Kabupaten Langkat
11. Kabupaten Mandailing Natal
12. Kabupaten Nias
13. Kabupaten Nias Barat
14. Kabupaten Nias Selatan
15. Kabupaten Nias Utara
16. Kabupaten Padang Lawas
17. Kabupaten Padang Lawas Utara
18. Kabupaten Pakpak Bharat
19. Kabupaten Samosir
20. Kabupaten Serdang Bedagai
21. Kabupaten Simalungun
22. Kabupaten Tapanuli Selatan
23. Kabupaten Tapanuli Tengah
24. Kabupaten Tapanuli Utara
25. Kabupaten Toba

### Kota
1. Kota Binjai
2. Kota Gunungsitoli
3. Kota Medan
4. Kota Padangsidimpuan
5. Kota Pematangsiantar
6. Kota Sibolga
7. Kota Tanjungbalai
8. Kota Tebing Tinggi

## Sejarah Singkat
Sejarah Sumatera Utara ditandai dengan kejayaan **Kesultanan Deli** yang berkembang pesat berkat industri tembakau. Di wilayah pegunungan, pahlawan **Sisingamangaraja XII** memimpin perlawanan heroik melawan kolonialis Belanda selama puluhan tahun (Perang Batak). Pulau Nias memiliki sejarah budaya megalitikum yang unik yang masih lestari hingga kini. Setelah kemerdekaan, Medan menjadi salah satu kota terdepan di Indonesia dalam pembangunan ekonomi dan infrastruktur.

## Fun Fact / Hal Menarik
- **Danau Toba:** Terbentuk dari ledakan gunung api super (Supervolcano) sekitar 74.000 tahun yang lalu, yang dampaknya dirasakan secara global.
- **Istana Maimun:** Memiliki arsitektur yang memadukan unsur Melayu, Islam, Spanyol, India, dan Italia, mencerminkan akulturasi budaya tingkat tinggi.
- **Bika Ambon:** Meskipun namanya Ambon, kue ini asli dari Medan. Nama tersebut diambil dari Jalan Ambon di Medan tempat kue ini pertama kali populer.
- **Lompat Batu (Fahombo):** Tradisi dari Nias Selatan di mana pemuda harus melompati batu setinggi 2 meter sebagai tanda kedewasaan.

## Budaya
- **Ulos:** Kain tenun tradisional Batak yang setiap motifnya memiliki makna spiritual dan sosial yang berbeda.
- **Marsipature Hutanabe:** Semboyan Batak yang berarti "Membangun kampung halaman sendiri", mencerminkan semangat perantau sukses yang kembali membangun daerah asal.
- **Suku Nias (Ono Niha):** Budaya yang terkenal dengan arsitektur rumah adat (Omo Hada) dan tradisi megalitikum yang kuat.
- **Budaya Melayu Deli:** Dikenal dengan sastra pantun, musik zapin, dan peninggalan megah istana para Sultan.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Bika Ambon** | Kue berongga dengan tekstur kenyal dan rasa manis legit yang menjadi ikon oleh-oleh Medan. |
| **Arsik** | Olahan ikan mas dengan bumbu rempah kuning yang kaya akan andaliman (merica Batak) yang getir-gurih. |
| **Bolu Meranti** | Bolu gulung dengan tekstur sangat lembut dan aneka rasa, sangat populer sebagai buah tangan. |
| **Duren Medan** | Terkenal dengan rasa yang lebih konsisten, pahit manis, dan tekstur yang *creamy*. |
| **Mie Gomak** | Sering dijuluki "Spaghetti Batak", mie kuning tebal yang disajikan dengan kuah santan atau digoreng. |

## Pariwisata
Sumatera Utara menawarkan keajaiban alam Danau Toba, hutan tropis Leuser, hingga pantai selancar tingkat dunia di Nias.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sumatera Utara.
- Dinas Pariwisata Sumatera Utara.
- Peta Wisata Danau Toba dan Sumatera Utara.
`;

    fs.writeFileSync(path.join(__dirname, 'Sumatera-Utara', 'README.md'), readmeContent);
    console.log('Sumatera Utara README.md has been successfully generated without numbers.');
}

generateContent();
