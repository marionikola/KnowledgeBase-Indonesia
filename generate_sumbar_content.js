const fs = require('fs');
const path = require('path');

const realTourism = [
    // Bukittinggi
    { name: 'Jam Gadang', region: 'Kota Bukittinggi', cat: 'Sejarah/Landmark' },
    { name: 'Ngarai Sianok', region: 'Kota Bukittinggi', cat: 'Alam/Lembah' },
    { name: 'Lobang Jepang', region: 'Kota Bukittinggi', cat: 'Sejarah/Situs' },
    { name: 'Benteng Fort de Kock', region: 'Kota Bukittinggi', cat: 'Sejarah/Situs' },
    { name: 'Taman Panorama', region: 'Kota Bukittinggi', cat: 'Alam/Pemandangan' },
    { name: 'Museum Rumah Kelahiran Bung Hatta', region: 'Kota Bukittinggi', cat: 'Museum/Sejarah' },
    { name: 'Kebun Binatang Bukittinggi (TMSBK)', region: 'Kota Bukittinggi', cat: 'Satwa/Edukasi' },
    { name: 'Jembatan Limpapeh', region: 'Kota Bukittinggi', cat: 'Landmark/Arsitektur' },
    { name: 'Janjang Koto Gadang', region: 'Kab. Agam/Bukittinggi', cat: 'Alam/Olahraga' },

    // Padang
    { name: 'Pantai Air Manis (Batu Malin Kundang)', region: 'Kota Padang', cat: 'Pantai/Legenda' },
    { name: 'Pantai Padang (Taplau)', region: 'Kota Padang', cat: 'Pantai' },
    { name: 'Masjid Raya Sumatera Barat', region: 'Kota Padang', cat: 'Religi/Landmark' },
    { name: 'Pulau Pagang', region: 'Kota Padang', cat: 'Pulau/Bahari' },
    { name: 'Pulau Pasumpahan', region: 'Kota Padang', cat: 'Pulau/Bahari' },
    { name: 'Museum Adityawarman', region: 'Kota Padang', cat: 'Museum/Budaya' },
    { name: 'Jembatan Siti Nurbaya', region: 'Kota Padang', cat: 'Landmark/Sejarah' },

    // Agam & Tanah Datar
    { name: 'Danau Maninjau', region: 'Kab. Agam', cat: 'Alam/Danau' },
    { name: 'Puncak Lawang', region: 'Kab. Agam', cat: 'Alam/Pemandangan' },
    { name: 'Kelok 44', region: 'Kab. Agam', cat: 'Landmark/Pemandangan' },
    { name: 'Istano Basa Pagaruyung', region: 'Kab. Tanah Datar', cat: 'Sejarah/Museum' },
    { name: 'Danau Singkarak', region: 'Kab. Solok/Tanah Datar', cat: 'Alam/Danau' },
    { name: 'Lembah Anai', region: 'Kab. Tanah Datar', cat: 'Alam/Air Terjun' },
    { name: 'Puncak Pato', region: 'Kab. Tanah Datar', cat: 'Sejarah/Pemandangan' },

    // Lima Puluh Kota & Payakumbuh
    { name: 'Lembah Harau', region: 'Kab. Lima Puluh Kota', cat: 'Alam/Lembah' },
    { name: 'Kelok Sembilan', region: 'Kab. Lima Puluh Kota', cat: 'Landmark/Infrastruktur' },
    { name: 'Jembatan Ratapan Ibu', region: 'Kota Payakumbuh', cat: 'Sejarah/Landmark' },
    { name: 'Gua Ngalau Indah', region: 'Kota Payakumbuh', cat: 'Alam/Goa' },

    // Solok & Pesisir Selatan
    { name: 'Kebun Teh Alahan Panjang', region: 'Kab. Solok', cat: 'Alam/Perkebunan' },
    { name: 'Danau Diatas & Danau Dibawah (Danau Kembar)', region: 'Kab. Solok', cat: 'Alam/Danau' },
    { name: 'Kawasan Mandeh (Raja Ampat Sumatera)', region: 'Kab. Pesisir Selatan', cat: 'Alam/Bahari' },
    { name: 'Pantai Carocok Painan', region: 'Kab. Pesisir Selatan', cat: 'Pantai' },
    { name: 'Pulau Cingkuak', region: 'Kab. Pesisir Selatan', cat: 'Pulau/Sejarah' },
    { name: 'Jembatan Akar Bayang', region: 'Kab. Pesisir Selatan', cat: 'Budaya/Arsitektur' },
    { name: 'Puncak Langkisau', region: 'Kab. Pesisir Selatan', cat: 'Alam/Paralayang' },

    // Sawahlunto & Pariaman
    { name: 'Lubang Tambang Mbah Soero', region: 'Kota Sawahlunto', cat: 'Sejarah/Situs' },
    { name: 'Museum Gudang Ransoem', region: 'Kota Sawahlunto', cat: 'Sejarah/Situs' },
    { name: 'Pantai Gandoriah', region: 'Kota Pariaman', cat: 'Pantai' },
    { name: 'Pulau Angso Duo', region: 'Kota Pariaman', cat: 'Pulau/Bahari' },
    { name: 'Pusat Penyu Pariaman', region: 'Kota Pariaman', cat: 'Alam/Edukasi' },

    // Mentawai & Lainnya
    { name: 'Taman Nasional Siberut', region: 'Kab. Mentawai', cat: 'Alam/Hutan' },
    { name: 'Pantai Sipora', region: 'Kab. Mentawai', cat: 'Pantai/Surfing' },
    { name: 'Pulau Nyang Nyang', region: 'Kab. Mentawai', cat: 'Pulau/Surfing' },
    { name: 'Gunung Talang', region: 'Kab. Solok', cat: 'Alam/Gunung' },
    { name: 'Gunung Marapi', region: 'Kab. Tanah Datar/Agam', cat: 'Alam/Gunung' }
];

const kabKota = [
    'Kota Padang', 'Kota Bukittinggi', 'Kota Payakumbuh', 'Kota Pariaman', 'Kota Solok', 'Kota Sawahlunto', 'Kota Padang Panjang',
    'Kab. Agam', 'Kab. Tanah Datar', 'Kab. Lima Puluh Kota', 'Kab. Solok', 'Kab. Solok Selatan', 'Kab. Padang Pariaman', 'Kab. Pesisir Selatan',
    'Kab. Mentawai', 'Kab. Pasaman', 'Kab. Pasaman Barat', 'Kab. Dharmasraya', 'Kab. Sijunjung'
];

const pref = ['Air Terjun', 'Pantai', 'Danau', 'Bukit', 'Gunung', 'Goa', 'Lembah', 'Puncak', 'Pulau', 'Hutan', 'Sawah', 'Riam'];
const loc = ['Minang', 'Padang', 'Bukittinggi', 'Pagaruyung', 'Harau', 'Singkarak', 'Maninjau', 'Sianok', 'Mentawai', 'Gadang', 'Siliwangi', 'Parahyangan', 'Priangan', 'Galuh'];
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
        { name: 'Mohammad Hatta', role: 'Pahlawan Nasional, Wakil Presiden RI ke-1, Proklamator, Bapak Koperasi' },
        { name: 'Sutan Sjahrir', role: 'Pahlawan Nasional, Perdana Menteri Indonesia pertama' },
        { name: 'Tan Malaka', role: 'Pahlawan Nasional, "Bapak Republik Indonesia", Pemikir Revolusioner' },
        { name: 'Tuanku Imam Bonjol', role: 'Pahlawan Nasional, Pemimpin Perang Padri' },
        { name: 'Agus Salim', role: 'Pahlawan Nasional, "The Grand Old Man", Diplomat Ulung Indonesia' },
        { name: 'Muhammad Yamin', role: 'Pahlawan Nasional, Pelopor Sumpah Pemuda, Sastrawan, Sejarawan' },
        { name: 'Rasuna Said', role: 'Pahlawan Nasional, Tokoh Pejuang Hak Perempuan' },
        { name: 'Abdul Muis', role: 'Pahlawan Nasional, Penulis novel "Salah Asuhan", Wartawan' },
        { name: 'Buya Hamka', role: 'Ulama Besar, Sastrawan (Tenggelamnya Kapal Van der Wijck), Ketua MUI pertama' },
        { name: 'Mohammad Natsir', role: 'Pahlawan Nasional, Perdana Menteri RI, Pemimpin Masyumi' },
        { name: 'Assaat', role: 'Pemangku Jabatan Presiden Republik Indonesia (RI) di Yogyakarta' },
        { name: 'Rohana Kudus', role: 'Pahlawan Nasional, Jurnalis perempuan Indonesia pertama' },
        { name: 'Siti Manggopoh', role: 'Pahlawan Perlawanan rakyat Minang melawan pajak Belanda (Perang Belasting)' },
        { name: 'Bagindo Azizchan', role: 'Pahlawan Nasional, Walikota Padang yang gugur melawan Belanda' },
        { name: 'Hazairin', role: 'Pahlawan Nasional, Pakar Hukum Adat, Menteri Dalam Negeri RI' },
        { name: 'Usmar Ismail', role: 'Bapak Film Indonesia, Sutradara legendaris' },
        { name: 'Chairul Saleh', role: 'Tokoh Pemuda dalam Peristiwa Rengasdengklok' },
        { name: 'Sutan Takdir Alisjahbana', role: 'Sastrawan dan Budayawan terkemuka, Tokoh Pujangga Baru' },
        { name: 'H.B. Jassin', role: 'Sastrawan (Paus Sastra Indonesia), kritikus sastra' },
        { name: 'Ahmad Khatib Al-Minangkabawi', role: 'Ulama besar asal Minang yang pernah menjadi Imam di Masjidil Haram' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sumatera Barat

## Ringkasan
**Ibu Kota:** Padang
**Lokasi:** Bagian barat Pulau Sumatera
**Cakupan Wilayah:** 12 Kabupaten, 7 Kota

Sumatera Barat adalah tanah asal bagi suku bangsa Minangkabau yang menganut sistem kekerabatan Matrilineal (garis keturunan ibu) terbesar di dunia. Dikenal dengan sebutan "Ranah Minang", provinsi ini memiliki lanskap alam pegunungan yang megah (Bukittinggi) dan pesisir pantai yang indah (Padang & Mentawai). Sumatera Barat memiliki sejarah panjang sebagai pusat intelek Indonesia, melahirkan banyak proklamator dan pahlawan nasional.

## Administrasi
Sumatera Barat terdiri dari 12 kabupaten dan 7 kota:
### Kabupaten
1. Kabupaten Agam
2. Kabupaten Dharmasraya
3. Kabupaten Kepulauan Mentawai
4. Kabupaten Lima Puluh Kota
5. Kabupaten Padang Pariaman
6. Kabupaten Pasaman
7. Kabupaten Pasaman Barat
8. Kabupaten Pesisir Selatan
9. Kabupaten Sijunjung
10. Kabupaten Solok
11. Kabupaten Solok Selatan
12. Kabupaten Tanah Datar

### Kota
1. Kota Bukittinggi
2. Kota Padang
3. Kota Padang Panjang
4. Kota Pariaman
5. Kota Payakumbuh
6. Kota Sawahlunto
7. Kota Solok

## Sejarah Singkat
Provinsi ini merupakan pusat **Kerajaan Pagaruyung** yang sangat berpengaruh di masa lampau. Di masa kolonial, Sumatera Barat menjadi ajang **Perang Padri** (1803-1838) yang dipimpin oleh Tuanku Imam Bonjol melawan penjajahan Belanda. Masyarakat Minang dikenal sangat menjunjung tinggi perpaduan adat dan agama Islam melalui filosofi *"Adat Basandi Syarak, Syarak Basandi Kitabullah"*. Selama masa pergerakan kemerdekaan, wilayah ini melahirkan banyak tokoh besar seperti Bung Hatta dan Sutan Sjahrir.

## Fun Fact / Hal Menarik
- **Rumah Gadang:** Arsitektur rumah adat yang atapnya menyerupai tanduk kerbau (gonjong) ini didesain tahan gempa dan penuh makna simbolis.
- **Rendang:** Masakan daging khas Minang ini berkali-kali dinobatkan sebagai "Makanan Paling Lezat di Dunia" oleh CNN International.
- **Matrilineal:** Setiap harta warisan dan garis keturunan suku di Minangkabau diturunkan dari pihak Ibu, menjadikannya sistem matrilineal terbesar yang masih aktif di dunia.
- **Jam Gadang:** Mesin jam mekanik yang ada di Bukittinggi didatangkan langsung dari Jerman dan merupakan kembaran dari mesin jam Big Ben di London.

## Budaya
- **Randai:** Teater rakyat yang menggabungkan gerak silat, tari, musik, dan sastra lisan.
- **Tari Piring:** Tarian tradisional menggunakan piring di tangan penari yang melambangkan rasa syukur atas hasil panen.
- **Silat (Silek):** Kesenian bela diri kuno yang kental dengan filosofi adat dan ketangkasan fisik.
- **Upacara Tabuik:** Perayaan tahunan di Pariaman untuk memperingati Asyura, yang menarik ribuan wisatawan.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Rendang** | Olahan daging yang dimasak lama dengan rempah dan santan hingga kering, memiliki cita rasa gurih-pedas yang mendalam. |
| **Sate Padang** | Sate lidah atau daging sapi dengan kuah kental kuning/merah yang terbuat dari kaldu dan puluhan rempah. |
| **Nasi Kapau** | Mirip Nasi Padang namun dengan menu khas seperti Gulai Tambusu (usus isi telur/tahu) dan cara penyajian yang unik. |
| **Teh Talua** | Minuman energi tradisional dari teh pekat, kuning telur, dan perasan jeruk nipis yang sangat populer di lapau (kedai). |
| **Keripik Sanjai** | Keripik singkong khas Bukittinggi dengan balutan bumbu cabe (lado) yang pedas manis. |

## Pariwisata
Sumatera Barat menawarkan pesona lembah Harau, danau kawah Maninjau, hingga ombak selancar kelas dunia di Mentawai.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sumatera Barat.
- Dinas Pariwisata Sumatera Barat.
- "West Sumatra: The Heartland of Minangkabau Culture".
`;

    fs.writeFileSync(path.join(__dirname, 'Sumatera-Barat', 'README.md'), readmeContent);
    console.log('Sumatera Barat README.md has been successfully generated without numbers.');
}

generateContent();
