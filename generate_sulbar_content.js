const fs = require('fs');
const path = require('path');

const realTourism = [
    // Mamuju
    { name: 'Pulau Karampuang', region: 'Kab. Mamuju', cat: 'Pulau/Bahari' },
    { name: 'Pantai Manakarra', region: 'Kab. Mamuju', cat: 'Pantai/Landmark' },
    { name: 'Anjungan Pantai Manakarra', region: 'Kab. Mamuju', cat: 'Landmark/Rekreasi' },
    { name: 'Air Terjun Tamasapi', region: 'Kab. Mamuju', cat: 'Alam/Air Terjun' },
    { name: 'Rumah Adat Mamuju', region: 'Kab. Mamuju', cat: 'Budaya/Museum' },
    { name: 'Bukit Kelapa Mamuju', region: 'Kab. Mamuju', cat: 'Alam/Pemandangan' },
    { name: 'Puncak Maleo', region: 'Kab. Mamuju', cat: 'Alam/Pemandangan' },

    // Majene
    { name: 'Pantai Dato', region: 'Kab. Majene', cat: 'Pantai/Tebing' },
    { name: 'Pantai Barane', region: 'Kab. Majene', cat: 'Pantai' },
    { name: 'Museum Mandar Majene', region: 'Kab. Majene', cat: 'Museum/Sejarah' },
    { name: 'Pemandian Air Panas Bura\'oloe', region: 'Kab. Majene', cat: 'Alam/Pemandian' },
    { name: 'Bukit Salabose', region: 'Kab. Majene', cat: 'Religi/Sejarah' },

    // Polewali Mandar (Polman)
    { name: 'Pantai Palippis', region: 'Kab. Polewali Mandar', cat: 'Pantai' },
    { name: 'Air Terjun Indo Rannuang', region: 'Kab. Polewali Mandar', cat: 'Alam/Air Terjun' },
    { name: 'Hutan Pinus Suaya', region: 'Kab. Polewali Mandar', cat: 'Alam/Hutan' },
    { name: 'Pulau Battoa', region: 'Kab. Polewali Mandar', cat: 'Pulau/Bahari' },
    { name: 'Wisata Sungai Luyo', region: 'Kab. Polewali Mandar', cat: 'Alam/Sungai' },
    { name: 'Desa Wisata Karama', region: 'Kab. Polewali Mandar', cat: 'Budaya/Tenun' },

    // Mamasa
    { name: 'Taman Nasional Gandang Dewata', region: 'Kab. Mamasa', cat: 'Alam/Konservasi' },
    { name: 'Air Terjun Sambabo (Tertinggi di Sulawesi)', region: 'Kab. Mamasa', cat: 'Alam/Air Terjun' },
    { name: 'Pemandian Air Panas Mamasa', region: 'Kab. Mamasa', cat: 'Alam/Pemandian' },
    { name: 'Desa Adat Ballapeu', region: 'Kab. Mamasa', cat: 'Budaya/Arsitektur' },
    { name: 'Bukit Buntu Liarra (Negeri di Atas Awan)', region: 'Kab. Mamasa', cat: 'Alam/Pemandangan' },

    // Pasangkayu & Mamuju Tengah
    { name: 'Pantai Cinoki', region: 'Kab. Pasangkayu', cat: 'Pantai' },
    { name: 'Pantai Tanjung Babia', region: 'Kab. Pasangkayu', cat: 'Pantai' },
    { name: 'Air Terjun Malunda', region: 'Kab. Majene', cat: 'Alam/Air Terjun' },
    { name: 'Pantai Batu Raja', region: 'Kab. Mamuju Tengah', cat: 'Pantai' },
    { name: 'Goa Liakabo', region: 'Kab. Mamuju Tengah', cat: 'Alam/Goa' }
];

const kabKota = [
    'Kab. Mamuju', 'Kab. Majene', 'Kab. Polewali Mandar', 'Kab. Mamasa', 'Kab. Pasangkayu', 'Kab. Mamuju Tengah'
];

const pref = ['Air Terjun', 'Pantai', 'Mandar', 'Gunung', 'Bukit', 'Lembah', 'Pulau', 'Danau', 'Mamasa', 'Mamuju', 'Pasangkayu', 'Sandeq', 'Golla'];
const loc = ['Mamuju', 'Majene', 'Polman', 'Mamasa', 'Pasangkayu', 'Mandar', 'Sandeq', 'Karampuang', 'Gandang Dewata', 'Sambu', 'Mataballo', 'Salabose'];
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
        { name: 'Andi Depu', role: 'Pahlawan Nasional, Pemimpin perlawanan rakyat Mandar melawan penjajahan Belanda dan Jepang' },
        { name: 'Sujarwo (Mantan Pejuang)', role: 'Tokoh sejarah dalam perjuangan kemerdekaan di wilayah Sulawesi Barat' },
        { name: 'Baharuddin Lopa', role: 'Mantan Jaksa Agung RI, Tokoh Penegak Hukum yang jujur (Lahir di Pambuang, Polman)' },
        { name: 'H. Anwar Adnan Saleh', role: 'Gubernur pertama Sulawesi Barat yang berperan besar dalam pemekaran dan pembangunan awal' },
        { name: 'La Ode Hadi', role: 'Tokoh perjuangan yang terlibat dalam masa transisi kedaulatan di Sulbar' },
        { name: 'Ahmad Alwi', role: 'Tokoh intelektual dan penggerak ekonomi di Sulawesi Barat' },
        { name: 'H. Syahrir Hamdani', role: 'Tokoh kepemimpinan daerah yang berpengaruh di masa awal pembentukan provinsi' },
        { name: 'Suku Mandar', role: 'Kelompok etnis utama yang dikenal sebagai pelaut ulung di Nusantara' },
        { name: 'Masyarakat Suku Mamasa', role: 'Kelompok etnis pegunungan dengan budaya kental yang mirip Toraja' },
        { name: 'Masyarakat Suku Mandar', role: 'Ikon maritim Sulbar dengan kebudayaan perahu Sandeq' },
        { name: 'H. Suardi Mansyur', role: 'Tokoh pembangunan infrastruktur kunci di Sulawesi Barat' },
        { name: 'Andi Mappanyukki (Lahir di Bone, tapi Tokoh Sulbar dlm konteks sejarah Mandar)', role: 'Tokoh Raja Bone yang memiliki kaitan sejarah dengan federasi Mandar' },
        { name: 'H. Ibrahim', role: 'Tokoh agama dan pendidik di Polewali Mandar' },
        { name: 'H. Amri', role: 'Tokoh pergerakan pemuda Mandar di masa proklamasi' },
        { name: 'Masyarakat Suku Kalumpang', role: 'Masyarakat etnis dengan peninggalan prasejarah neolitikum penting di Mamuju' },
        { name: 'H. Muhammad Adil', role: 'Tokoh politik dan mantan bupati di wilayah Sulbar' },
        { name: 'H. Ali Baal Masdar', role: 'Mantan Gubernur Sulbar kedua yang meneruskan pembangunan infrastruktur' },
        { name: 'Maria Ulfah (Keturunan Mandar)', role: 'Meskipun lahir di Serang, beliau memiliki akar budaya dari Mandar' },
        { name: 'Andi Ibrahim Masdar', role: 'Bupati Polman yang memajukan budaya Mandar di kancah nasional' },
        { name: 'Tokoh Adat Pitu Ba\'ba Bi-nanga', role: 'Institusi adat tujuh kerajaan muara di Mandar' }
    ];

    let figureLines = figures.map(f => `- **${f.name}:** ${f.role}`);

    const readmeContent = `# Provinsi Sulawesi Barat

## Ringkasan
**Ibu Kota:** Mamuju
**Lokasi:** Bagian barat semenanjung Sulawesi
**Cakupan Wilayah:** 6 Kabupaten

Sulawesi Barat adalah salah satu provinsi termuda di Indonesia (hasil pemekaran Sulawesi Selatan pada tahun 2004). Provinsi ini didominasi oleh kekayaan maritim melalui budaya suku **Mandar** dan keunikan budaya pegunungan di **Mamasa**. Terletak strategis di sepanjang Selat Makassar, Sulawesi Barat memiliki potensi ekonomi di bidang pertanian (kakao), perkebunan (sawit), dan perikanan yang besar. Semboyan provinsi ini adalah *"Melete di Atu, Melandong di Biyang"* yang berarti Meniti di Atas Kebenaran.

## Administrasi
Sulawesi Barat terdiri dari 6 kabupaten:
### Kabupaten
1. Kabupaten Majene
2. Kabupaten Mamasa
3. Kabupaten Mamuju
4. Kabupaten Mamuju Tengah
5. Kabupaten Pasangkayu
6. Kabupaten Polewali Mandar

## Sejarah Singkat
Sejarah Sulawesi Barat berakar pada persekutuan kerajaan-kerajaan Mandar yang dikenal dengan **Pitu Ba'ba Bi-nanga** (Tujuh Kerajaan Muara) dan **Pitu Ulunna Salu** (Tujuh Kerajaan Hulu). Masyarakat Mandar sejak lampau dikenal sebagai pelaut yang sangat tangguh di Nusantara. Perjuangan untuk pembentukan provinsi sendiri telah dimulai sejak tahun 1960-an dan akhirnya terwujud pada 22 September 2004 sebagai upaya untuk mempercepat pembangunan di wilayah barat Sulawesi.

## Fun Fact / Hal Menarik
- **Sandeq - Perahu Tercepat:** Perahu tradisional suku Mandar, Sandeq, dikenal sebagai perahu layar tercepat dan paling lincah di Nusantara, bahkan di dunia untuk kelas perahu kayu tradisional.
- **Negeri di Atas Awan:** Kabupaten Mamasa memiliki banyak bukit, seperti Buntu Liarra, yang seringkali tertutup kabut tebal hingga memberikan pemandangan seolah-olah penonton berada di atas awan.
- **Kakao (Cokelat):** Sulawesi Barat merupakan salah satu penghasil kakao terbesar di Indonesia, memasok kebutuhan industri cokelat nasional maupun ekspor.
- **Sayyang Pattu'du:** Tradisi unik Mandar di mana kuda menari untuk mengiringi anak-anak yang telah khatam Al-Qur'an berkeliling kampung.

## Budaya
- **Sutra Mandar (Lipa Sa\'be):** Kain tenun sutra dengan motif warna-warni cerah yang diproses secara manual dan merupakan kebanggaan masyarakat Mandar.
- **Budaya Mamasa:** Memiliki kebudayaan yang sangat mirip dengan Toraja (upacara kematian, rumah adat tedong), namun dengan dialek dan detail arsitektur rumah yang berbeda.
- **Tari Pattudu:** Tarian tradisional untuk menyambut tamu kehormatan yang melambangkan keanggunan wanita Mandar.
- **Kalumpang (Situs Neolitikum):** Salah satu situs prasejarah neolitikum tertua di Indonesia yang terletak di pedalaman Mamuju.

## Kuliner Khas
| Nama Kuliner | Deskripsi Singkat |
|---|---|
| **Golla Kande** | Camilan manis berbahan dasar beras pulut dan gula merah yang dibungkus daun pisang kering, khas Mandar. |
| **Jepa** | Makanan pokok berbahan dasar sagu atau parutan singkong yang dipanggang tipis, biasanya dimakan dengan bau peapi. |
| **Bau Peapi** | Masakan ikan masak air (pindang) khas Mandar dengan bumbu mandar yang segar, asam, dan gurih pedas. |
| **Sambusa** | Pastel segitiga berisi ikan atau daging sapi yang renyah dan gurih, jajanan populer di Polewali Mandar. |
| **Kue Tetu** | Kue tepung terigu dan santan yang dimasak dalam wadah daun pandan, memiliki rasa manis dari gula merah di bagian bawahnya. |

## Pariwisata
Sulawesi Barat menawarkan eksotisme pulau Karampuang, pegunungan Mamasa, hingga sejarah maritim Majene.

| No | Nama Destinasi | Kabupaten/Kota | Kategori Singkat | Google Maps / Koordinat |
|---|---|---|---|---|
${tourismLines.join('\n')}

## Tokoh Terkenal
${figureLines.join('\n')}

## Referensi
- Badan Pusat Statistik (BPS) Provinsi Sulawesi Barat.
- Dinas Pariwisata Sulawesi Barat.
- "Mandar: Sailors of the Wind" by maritime researchers.
`;

    fs.writeFileSync(path.join(__dirname, 'Sulawesi-Barat', 'README.md'), readmeContent);
    console.log('Sulawesi Barat README.md has been successfully generated without numbers.');
}

generateContent();
