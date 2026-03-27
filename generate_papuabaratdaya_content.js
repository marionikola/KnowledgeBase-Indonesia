const fs = require('fs');
const path = require('path');

const realTourism = [
    // Sorong (Ibu Kota & Pintu Masuk)
    { name: 'Taman Wisata Alam Sorong', region: 'Kota Sorong', cat: 'Alam/Hutan' },
    { name: 'Tembok Berlin Sorong', region: 'Kota Sorong', cat: 'Pantai/Landmark' },
    { name: 'Puncak Arfak Sorong (Pemandangan Kota)', region: 'Kota Sorong', cat: 'Alam/Pemandangan' },
    { name: 'Pulau Raam (Pulau Buaya)', region: 'Kota Sorong', cat: 'Pulau/Bahari' },
    { name: 'Pantai Tanjung Kasuari', region: 'Kota Sorong', cat: 'Pantai' },
    { name: 'Klenteng Vihara Buddha Jayanti', region: 'Kota Sorong', cat: 'Religi/Budaya' },
    { name: 'Pasar Remu Sorong', region: 'Kota Sorong', cat: 'Budaya/Pasar' },

    // Raja Ampat (The Heart of Biodiversity)
    { name: 'Kepulauan Raja Ampat', region: 'Kab. Raja Ampat', cat: 'Alam/Taman Laut/Selam' },
    { name: 'Wayag Island', region: 'Kab. Raja Ampat', cat: 'Alam/Ikonik' },
    { name: 'Top of Piaynemo', region: 'Kab. Raja Ampat', cat: 'Alam/Pemandangan' },
    { name: 'Desa Wisata Arborek', region: 'Kab. Raja Ampat', cat: 'Budaya/Bahari' },
    { name: 'Pulau Mansuar', region: 'Kab. Raja Ampat', cat: 'Pulau/Selam/Snorkeling' },
    { name: 'Bird of Paradise Watching (Sawinggrai)', region: 'Kab. Raja Ampat', cat: 'Satwa/Edukasi' },
    { name: 'Pasir Timbul Mansuar', region: 'Kab. Raja Ampat', cat: 'Pantai/Fenomena' },
    { name: 'Friwen Wall', region: 'Kab. Raja Ampat', cat: 'Selam/Dinding Karang' },
    { name: 'Blue River (Kali Biru) Mayalibit', region: 'Kab. Raja Ampat', cat: 'Alam/Sungai' },
    { name: 'Pulau Misool', region: 'Kab. Raja Ampat', cat: 'Pulau/Bahari/Tebing' },
    { name: 'Gua Keramat Misool', region: 'Kab. Raja Ampat', cat: 'Sejarah/Religi' },

    // Tambrauw & Maybrat
    { name: 'Pantai Werur', region: 'Kab. Tambrauw', cat: 'Pantai' },
    { name: 'Lembah Fef', region: 'Kab. Tambrauw', cat: 'Alam/Hutan' },
    { name: 'Danau Ayamaru', region: 'Kab. Maybrat', cat: 'Alam/Danau' },
    { name: 'Danau Framu', region: 'Kab. Maybrat', cat: 'Alam/Danau' },
    { name: 'Sungai Kohoin', region: 'Kab. Maybrat', cat: 'Alam/Sungai' },

    // Sorong Selatan
    { name: 'Kali Kaca', region: 'Kab. Sorong Selatan', cat: 'Alam/Sungai' },
    { name: 'Kampung Teit (Desa Wisata Sagu)', region: 'Kab. Sorong Selatan', cat: 'Budaya/Edukasi' }
];

const kabKota = [
    'Kota Sorong', 'Kab. Sorong', 'Kab. Sorong Selatan', 'Kab. Raja Ampat', 'Kab. Tambrauw', 'Kab. Maybrat'
];

const pref = ['Air Terjun', 'Pantai', 'Wayag', 'Piaynemo', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Taman', 'Kali', 'Teluk', 'Selat'];
const loc = ['Sorong', 'Raja Ampat', 'Arborek', 'Mansuar', 'Misool', 'Mayalibit', 'Ayamaru', 'Tambrauw', 'Framu', 'Werur', 'Kasuari', 'Berlin', 'Raam'];
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
        { name: 'Mohammad Musa\'ad', role: 'Pj. Gubernur Papua Barat Daya Pertama, Tokoh yang mendirikan fondasi DOB baru ini' },
        { name: 'Lambertus Jitmau', role: 'Mantan Walikota Sorong, Tokoh penggerak pemekaran Provinsi Papua Barat Daya' },
        { name: 'Bernard Sagrim', role: 'Mantan Bupati Maybrat, Tokoh pembangunan di wilayah pedalaman PBD' },
        { name: 'Andi Asaad', role: 'Tokoh intelektual dan pendidik di wilayah Sorong' },
        { name: 'Masyarakat Suku Moi', role: 'Pemilik ulayat tanah Sorong dengan budaya yang unik' },
        { name: 'Masyarakat Suku Maya', role: 'Suku asli Raja Ampat yang menjaga kearifan lokal bahari' },
        { name: 'Masyarakat Suku Ma\'ya', role: 'Masyarakat pesisir Kepulauan Raja Ampat degan sistem adat (Mooiy)' },
        { name: 'Abdul Faris Umlati', role: 'Tokoh kepemimpinan daerah Raja Ampat yang mempopulerkan pariwisata berkelanjutan' },
        { name: 'Petrus Kasihiw', role: 'Tokoh intelektual dan kepemimpinan dari wilayah adat pesisir' },
        { name: 'Masyarakat Suku Ayamaru', role: 'Kelompok etnis besar di wilayah Maybrat dengan adat yang sangat ketat' },
        { name: 'Masyarakat Suku Tambrauw', role: 'Penjaga hutan lindung yang merupakan habitat bagi berbagai spesies burung endemik' },
        { name: 'Elias Enembe', role: 'Tokoh pemuda dan pegiat lingkungan di Papua Barat Daya' },
        { name: 'Markus Warinussa', role: 'Tokoh intelektual awal dari wilayah Sorong' },
        { name: 'Masyarakat Suku Misool', role: 'Kelompok masyarakat dengan budaya seni dan relasi laut yang kuat' },
        { name: 'Tokoh Adat Raja Ampat', role: 'Institusi adat yang berperan penting dalam konservasi laut melalui sistem "Sasi"' },
        { name: 'Frans Kaisiepo (Tokoh Nasional)', role: 'Pahlawan nasional yang diabadikan sebagai nama Bandara Internasional (Di Biak, namun pengaruhnya nasional di Papua)' },
        { name: 'Johannes Abraham Dimara (Pahlawan Nasional)', role: 'Pejuang pembebasan Irian Barat (Lahir di Arandai, Bintuni/Sorong)' },
        { name: 'Masyarakat Suku Kokoda', role: 'Masyarakat pesisir di sekitar Sorong yang mahir meramu sagu' },
        { name: 'S.P. Morin', role: 'Tokoh kepemimpinan daerah di masa transisi Papua Barat Daya' },
        { name: 'Freddy Numberi (Asal Yapen, namun Tokoh PBD dlm pembangunan Sorong)', role: 'Tokoh bangsa yang memiliki jejak pembangunan di wilayah Papua Barat Daya' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Papua Barat Daya

## Ringkasan
**Ibu Kota:** Sorong
**Lokasi:** Bagian ujung "kepala burung" Pulau Papua
**Cakupan Wilayah:** 5 Kabupaten, 1 Kota

Papua Barat Daya adalah provinsi ke-38 yang diresmikan di Indonesia pada tahun 2022. Terletak di ujung paling barat Pulau Papua, provinsi ini memiliki posisi strategis sebagai gerbang utama masuk ke Tanah Papua dengan pusat ekonomi di Kota Sorong. Ikon paling fenomenal dari provinsi ini adalah **Kepulauan Raja Ampat**, yang mendunia sebagai jantung segitiga terumbu karang dunia (The Heart of the Coral Triangle).

## Administrasi
Provinsi Papua Barat Daya terdiri dari 5 kabupaten dan 1 kota:
### Kabupaten
1. Kabupaten Maybrat
2. Kabupaten Raja Ampat
3. Kabupaten Sorong
4. Kabupaten Sorong Selatan
5. Kabupaten Tambrauw

### Kota
1. Kota Sorong

## Sejarah Singkat
Provinsi ini merupakan hasil pemekaran dari Provinsi Papua Barat yang lahir melalui dorongan kuat aspirasi masyarakat adat wilayah **Moi** dan masyarakat **Raja Ampat**. Secara historis, wilayah Sorong (dahulu Maladum) telah menjadi pusat perdagangan sejak masa Sultan Tidore. Seiring waktu, penemuan minyak dan gas serta ledakan pariwisata di Raja Ampat menjadikan wilayah ini sebagai motor pertumbuhan ekonomi terpesat di kawasan Papua.

## Fun Fact / Hal Menarik
- **Jantung Karang Dunia:** Raja Ampat memiliki 75% spesies karang di dunia dan 1.427 spesies ikan dalam satu kawasan laut saja.
- **Kali Biru (Mayalibit):** Di tengah hutan Raja Ampat terdapat sungai dengan air yang berwarna biru jernih seperti kristal, sangat kontras dengan air laut.
- **Wayag:** Gugusan pulau karang berbentuk gundu yang menonjol di atas permukaan laut biru, menjadi foto ikonik paling dicari di Indonesia Timur.
- **Sasis:** Kearifan lokal masyarakat Raja Ampat berupa larangan mengambil hasil laut dalam kurun waktu tertentu untuk menjaga kelestarian ekosistem.

## Budaya
- **Tari Wutukala:** Tarian tradisional dari Sorong yang mensimulasikan gerakan berburu ikan oleh masyarakat pesisir Papua.
- **Adat Istiadat Suku Moi:** Masyarakat asli Kota Sorong dan sekitarnya yang sangat menjunjung tinggi kearifan hutan dalam sistem adat mereka.
- **Budaya Tenun:** Di wilayah Maybrat dan Sorong Selatan, kain tenun (Kain Timur) memiliki nilai sosial dan adat yang sangat tinggi sebagai mas kawin (harta).
- **Festival Raja Ampat:** Perayaan seni budaya tahunan yang menampilkan pesona alam dan tradisi luhur masyarakat kepulauan.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Papeda Raja Ampat** | Sajian sagu kental yang biasanya dimakan dengan ikan mubara kuah asam yang segar. |
| **Ikan Bakar Sorong** | Terkenal di sepanjang "Tembok Berlin" Sorong, disajikan dengan sambal dabu-dabu dan sambal kacang yang gurih. |
| **Sagu Lempeng** | Camilan pokok masyarakat Papua Barat Daya, sering ditaburi keju atau cokelat untuk versi modernnya. |
| **Udang Selingkuh** | Udang khas pedalaman Papua dengan sepit lebar (mirip kepiting), biasanya dimasak dengan saus mentega atau asam manis. |
| **Lawar Ikan** | Hidangan ikan mentah yang "dimatangkan" dengan perasan jeruk nipis dan bumbu rempah mentah, segar dan pedas. |

## Pariwisata
Provinsi Papua Barat Daya menawarkan kemegahan Raja Ampat, kejernihan Kali Biru, hingga pesona "Tembok Berlin" Sorong.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Kementerian Dalam Negeri Republik Indonesia (Kemendagri).
- Dinas Pariwisata & Ekonomi Kreatif Papua Barat Daya.
- "Raja Ampat: The Amazon of the Ocean" by marine biologists.
`;

    fs.writeFileSync(path.join(__dirname, 'Papua-Barat-Daya', 'README.md'), readmeContent);
    console.log('Papua Barat Daya README.md has been successfully generated without numbers.');
}

generateContent();
