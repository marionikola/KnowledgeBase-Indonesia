# Rencana Pengembangan KnowledgeBase Indonesia

## Ringkasan Masalah

Repo ini memiliki beberapa masalah yang perlu diselesaikan:

1. **Duplikasi folder**: Ada dua root folder `provinsi/` (lowercase) dan `Provinsi/` (Title Case) yang berisi konten yang sama
2. **Inkonsistensi penamaan**: Di Bali, ada folder `kabupaten/badung/` (lowercase) DAN `kabupaten/Kabupaten-Badung/` (Title-Kebab-Case) secara bersamaan
3. **Konten kosong**: Sebagian besar README.md masih kosong (hanya template)
4. **Struktur tidak lengkap**: Banyak provinsi belum memiliki folder kabupaten/kota

---

## Konvensi Penamaan yang Disepakati

### Folder Provinsi
- Format: **kebab-case lowercase**
- Contoh: `aceh/`, `jawa-barat/`, `dki-jakarta/`

### Folder Kabupaten/Kota
- Format: **kebab-case lowercase** (konsisten dengan provinsi)
- Contoh: `badung/`, `banda-aceh/`, `nusa-tenggara-barat/`
- **Tidak** menggunakan prefix `Kabupaten-` atau `Kota-` dalam nama folder
- Prefix tersebut hanya ada di dalam konten `README.md` (judul H1)

### Judul dalam README.md
- Kabupaten: `# Kabupaten [Nama]`
- Kota: `# Kota [Nama]`

---

## Inventarisasi 38 Provinsi & Kabupaten/Kota

### 1. Aceh
**Kabupaten (18):** aceh-barat, aceh-barat-daya, aceh-besar, aceh-jaya, aceh-selatan, aceh-singkil, aceh-tamiang, aceh-tengah, aceh-tenggara, aceh-timur, aceh-utara, bener-meriah, bireuen, gayo-lues, nagan-raya, pidie, pidie-jaya, simeulue
**Kota (5):** banda-aceh, langsa, lhokseumawe, sabang, subulussalam

### 2. Bali
**Kabupaten (8):** badung, bangli, buleleng, gianyar, jembrana, karangasem, klungkung, tabanan
**Kota (1):** denpasar

### 3. Banten
**Kabupaten (4):** lebak, pandeglang, serang, tangerang
**Kota (4):** cilegon, serang, tangerang, tangerang-selatan

### 4. Bengkulu
**Kabupaten (9):** bengkulu-selatan, bengkulu-tengah, bengkulu-utara, kaur, kepahiang, lebong, mukomuko, rejang-lebong, seluma
**Kota (1):** bengkulu

### 5. DI Yogyakarta
**Kabupaten (4):** bantul, gunungkidul, kulon-progo, sleman
**Kota (1):** yogyakarta

### 6. DKI Jakarta
**Kabupaten (1):** kepulauan-seribu
**Kota (5):** jakarta-barat, jakarta-pusat, jakarta-selatan, jakarta-timur, jakarta-utara

### 7. Gorontalo
**Kabupaten (5):** boalemo, bone-bolango, gorontalo, gorontalo-utara, pohuwato
**Kota (1):** gorontalo

### 8. Jambi
**Kabupaten (9):** batanghari, bungo, kerinci, merangin, muaro-jambi, sarolangun, tanjung-jabung-barat, tanjung-jabung-timur, tebo
**Kota (2):** jambi, sungai-penuh

### 9. Jawa Barat
**Kabupaten (18):** bandung, bandung-barat, bekasi, bogor, ciamis, cianjur, cirebon, garut, indramayu, karawang, kuningan, majalengka, pangandaran, purwakarta, subang, sukabumi, sumedang, tasikmalaya
**Kota (9):** bandung, banjar, bekasi, bogor, cimahi, cirebon, depok, sukabumi, tasikmalaya

### 10. Jawa Tengah
**Kabupaten (29):** banjarnegara, banyumas, batang, blora, boyolali, brebes, cilacap, demak, grobogan, jepara, karanganyar, kebumen, kendal, klaten, kudus, magelang, pati, pekalongan, pemalang, purbalingga, purworejo, rembang, semarang, sragen, sukoharjo, tegal, temanggung, wonogiri, wonosobo
**Kota (6):** magelang, pekalongan, salatiga, semarang, surakarta, tegal

### 11. Jawa Timur
**Kabupaten (29):** bangkalan, banyuwangi, blitar, bojonegoro, bondowoso, gresik, jember, jombang, kediri, lamongan, lumajang, madiun, magetan, malang, mojokerto, nganjuk, ngawi, pacitan, pamekasan, pasuruan, ponorogo, probolinggo, sampang, sidoarjo, situbondo, sumenep, trenggalek, tuban, tulungagung
**Kota (9):** batu, blitar, kediri, madiun, malang, mojokerto, pasuruan, probolinggo, surabaya

### 12. Kalimantan Barat
**Kabupaten (12):** bengkayang, kapuas-hulu, kayong-utara, ketapang, kubu-raya, landak, melawi, mempawah, sambas, sanggau, sekadau, sintang
**Kota (2):** pontianak, singkawang

### 13. Kalimantan Selatan
**Kabupaten (11):** balangan, banjar, barito-kuala, hulu-sungai-selatan, hulu-sungai-tengah, hulu-sungai-utara, kotabaru, tabalong, tanah-bumbu, tanah-laut, tapin
**Kota (2):** banjarbaru, banjarmasin

### 14. Kalimantan Tengah
**Kabupaten (13):** barito-selatan, barito-timur, barito-utara, gunung-mas, kapuas, katingan, kotawaringin-barat, kotawaringin-timur, lamandau, murung-raya, pulang-pisau, seruyan, sukamara
**Kota (1):** palangka-raya

### 15. Kalimantan Timur
**Kabupaten (7):** berau, kutai-barat, kutai-kartanegara, kutai-timur, mahakam-ulu, paser, penajam-paser-utara
**Kota (3):** balikpapan, bontang, samarinda

### 16. Kalimantan Utara
**Kabupaten (4):** bulungan, malinau, nunukan, tana-tidung
**Kota (1):** tarakan

### 17. Kepulauan Bangka Belitung
**Kabupaten (6):** bangka, bangka-barat, bangka-selatan, bangka-tengah, belitung, belitung-timur
**Kota (1):** pangkal-pinang

### 18. Kepulauan Riau
**Kabupaten (5):** bintan, karimun, kepulauan-anambas, lingga, natuna
**Kota (2):** batam, tanjung-pinang

### 19. Lampung
**Kabupaten (13):** lampung-barat, lampung-selatan, lampung-tengah, lampung-timur, lampung-utara, mesuji, pesawaran, pesisir-barat, pringsewu, tanggamus, tulang-bawang, tulang-bawang-barat, way-kanan
**Kota (2):** bandar-lampung, metro

### 20. Maluku
**Kabupaten (9):** buru, buru-selatan, kepulauan-aru, maluku-barat-daya, maluku-tengah, maluku-tenggara, maluku-tenggara-barat, seram-bagian-barat, seram-bagian-timur
**Kota (2):** ambon, tual

### 21. Maluku Utara
**Kabupaten (8):** halmahera-barat, halmahera-selatan, halmahera-tengah, halmahera-timur, halmahera-utara, kepulauan-sula, pulau-morotai, pulau-taliabu
**Kota (2):** ternate, tidore-kepulauan

### 22. Nusa Tenggara Barat
**Kabupaten (8):** bima, dompu, lombok-barat, lombok-tengah, lombok-timur, lombok-utara, sumbawa, sumbawa-barat
**Kota (2):** bima, mataram

### 23. Nusa Tenggara Timur
**Kabupaten (21):** alor, belu, ende, flores-timur, kupang, lembata, malaka, manggarai, manggarai-barat, manggarai-timur, nagekeo, ngada, rote-ndao, sabu-raijua, sikka, sumba-barat, sumba-barat-daya, sumba-tengah, sumba-timur, timor-tengah-selatan, timor-tengah-utara
**Kota (1):** kupang

### 24. Papua
**Kabupaten (28):** asmat, biak-numfor, boven-digoel, deiyai, dogiyai, intan-jaya, jayapura, jayawijaya, keerom, kepulauan-yapen, lanny-jaya, mamberamo-raya, mamberamo-tengah, mappi, merauke, mimika, nabire, nduga, paniai, pegunungan-bintang, puncak, puncak-jaya, sarmi, supiori, tolikara, waropen, yahukimo, yalimo
**Kota (1):** jayapura

### 25. Papua Barat
**Kabupaten (6):** fakfak, kaimana, manokwari, manokwari-selatan, pegunungan-arfak, teluk-bintuni, teluk-wondama
**Kota (1):** sorong

### 26. Papua Barat Daya
**Kabupaten (5):** maybrat, raja-ampat, sorong, sorong-selatan, tambrauw
**Kota (1):** sorong

### 27. Papua Pegunungan
**Kabupaten (8):** bintang, jayawijaya, lanny-jaya, mamberamo-tengah, nduga, pegunungan-bintang, tolikara, yalimo
**Kota (0):** -

### 28. Papua Selatan
**Kabupaten (4):** asmat, boven-digoel, mappi, merauke
**Kota (0):** -

### 29. Papua Tengah
**Kabupaten (8):** deiyai, dogiyai, intan-jaya, mimika, nabire, paniai, puncak, puncak-jaya
**Kota (0):** -

### 30. Riau
**Kabupaten (10):** bengkalis, indragiri-hilir, indragiri-hulu, kampar, kepulauan-meranti, kuantan-singingi, pelalawan, rokan-hilir, rokan-hulu, siak
**Kota (2):** dumai, pekanbaru

### 31. Sulawesi Barat
**Kabupaten (6):** majene, mamasa, mamuju, mamuju-tengah, pasangkayu, polewali-mandar
**Kota (0):** -

### 32. Sulawesi Selatan
**Kabupaten (21):** bantaeng, barru, bone, bulukumba, enrekang, gowa, jeneponto, kepulauan-selayar, luwu, luwu-timur, luwu-utara, maros, pangkajene-dan-kepulauan, pinrang, sidenreng-rappang, sinjai, soppeng, takalar, tana-toraja, toraja-utara, wajo
**Kota (3):** makassar, palopo, parepare

### 33. Sulawesi Tengah
**Kabupaten (12):** banggai, banggai-kepulauan, banggai-laut, buol, donggala, morowali, morowali-utara, parigi-moutong, poso, sigi, tojo-una-una, tolitoli
**Kota (1):** palu

### 34. Sulawesi Tenggara
**Kabupaten (15):** bombana, buton, buton-selatan, buton-tengah, buton-utara, kolaka, kolaka-timur, kolaka-utara, konawe, konawe-kepulauan, konawe-selatan, konawe-utara, muna, muna-barat, wakatobi
**Kota (2):** bau-bau, kendari

### 35. Sulawesi Utara
**Kabupaten (11):** bolaang-mongondow, bolaang-mongondow-selatan, bolaang-mongondow-timur, bolaang-mongondow-utara, kepulauan-sangihe, kepulauan-siau-tagulandang-biaro, kepulauan-talaud, minahasa, minahasa-selatan, minahasa-tenggara, minahasa-utara
**Kota (4):** bitung, kotamobagu, manado, tomohon

### 36. Sumatera Barat
**Kabupaten (12):** agam, dharmasraya, kepulauan-mentawai, lima-puluh-kota, padang-pariaman, pasaman, pasaman-barat, pesisir-selatan, sijunjung, solok, solok-selatan, tanah-datar
**Kota (7):** bukittinggi, padang, padang-panjang, pariaman, payakumbuh, sawahlunto, solok

### 37. Sumatera Selatan
**Kabupaten (13):** banyuasin, empat-lawang, lahat, muara-enim, musi-banyuasin, musi-rawas, musi-rawas-utara, ogan-ilir, ogan-komering-ilir, ogan-komering-ulu, ogan-komering-ulu-selatan, ogan-komering-ulu-timur, penukal-abab-lematang-ilir
**Kota (4):** lubuklinggau, pagar-alam, palembang, prabumulih

### 38. Sumatera Utara
**Kabupaten (25):** asahan, batu-bara, dairi, deli-serdang, humbang-hasundutan, karo, labuhanbatu, labuhanbatu-selatan, labuhanbatu-utara, langkat, mandailing-natal, nias, nias-barat, nias-selatan, nias-utara, padang-lawas, padang-lawas-utara, pakpak-bharat, samosir, serdang-bedagai, simalungun, tapanuli-selatan, tapanuli-tengah, tapanuli-utara, toba
**Kota (8):** binjai, gunungsitoli, medan, padang-sidempuan, pematang-siantar, sibolga, tanjung-balai, tebing-tinggi

---

## Rencana Eksekusi

### Fase 1: Bersihkan Duplikasi
- Hapus folder `Provinsi/` (Title Case) karena duplikat dari `provinsi/` (lowercase)
- Di Bali: hapus folder `kabupaten/Kabupaten-Badung/` dst (Title-Kebab-Case) karena duplikat dari `kabupaten/badung/` dst
- Di Bali: hapus folder `kota/Kota-Denpasar/` karena duplikat dari `kota/denpasar/`
- Konten yang sudah ada di folder Title-Kebab-Case dipindahkan ke folder lowercase

### Fase 2: Buat Struktur Folder Lengkap
Untuk setiap provinsi yang belum memiliki folder kabupaten/kota, buat struktur:
```
provinsi/{nama-provinsi}/
  README.md
  kabupaten/
    README.md
    {nama-kabupaten}/
      README.md
  kota/
    README.md
    {nama-kota}/
      README.md
```

### Fase 3: Isi Konten
Setiap README.md diisi dengan konten sesuai template:
- Ringkasan (lokasi, luas, populasi, ibu kota)
- Administrasi (daftar kabupaten/kota)
- Sejarah singkat
- Fun fact / hal menarik
- Budaya
- Kuliner
- Wisata (tabel minimal 10 destinasi)
- Tokoh
- Referensi

---

## Prioritas Eksekusi

Karena jumlah file sangat besar (38 provinsi × rata-rata 15 kabupaten/kota = ~570+ file README.md), eksekusi dilakukan secara batch per provinsi menggunakan Code mode.

**Urutan prioritas:**
1. Bersihkan duplikasi (Fase 1) - paling kritis
2. Buat semua struktur folder (Fase 2) - fondasi
3. Isi konten provinsi (Fase 3a) - 38 file
4. Isi konten kabupaten/kota (Fase 3b) - ~570 file, batch per provinsi
