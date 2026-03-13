# Panduan Rename Folder dari Title Case ke Kebab-Case Lowercase

## Tujuan
Mengubah nama folder yang menggunakan Format Title Case (misal: `Aceh-Barat`) menjadi kebab-case lowercase (misal: `aceh-barat`) sesuai konvensi yang disepakati di KnowledgeBase Indonesia.

## Langkah-langkah

### 1. Persiapan
- Pastikan Anda berada di direktori yang sesuai (misalnya, `d:/Repositories/Project/KnowledgeBase-Indonesia`).
- Pastikan Anda telah membackup data atau bekerja di branch yang aman jika menggunakan version control.

### 2. Identifikasi Folder yang Perlu Di-rename
- Masuk ke direktori provinsi yang ingin diproses, kemudian ke subfolder `kabupaten` atau `kota`.
- Contoh: `cd Aceh/Kabupaten`
- Daftar semua folder:
  ```bash
  dir /ad
  ```
  (di Windows) atau
  ```bash
  ls -la
  ```
  (di Linux/MacOS, tetapi kita menggunakan Windows di sini).

### 3. Proses Rename
- Untuk setiap folder yang menggunakan Title Case (huruf pertama setiap kata kapital dan menggunakan tanda hubung), ubah menjadi huruf kecil semua.
- Contoh: `Aceh-Barat` menjadi `aceh-barat`.
- Gunakan perintah `ren` di Windows CMD:
  ```bash
  ren "NamaFolderTitleCase" "namafolderkebabcase"
  ```
  Contoh:
  ```bash
  ren "Aceh-Barat" "aceh-barat"
  ```

### 4. Verifikasi
- Setelah rename, daftarkan ulang folder untuk memastikan perubahan berhasil.
  ```bash
  dir /ad
  ```
- Periksa bahwa tidak ada folder yang terlewat atau yang masih menggunakan Title Case.
- Pastikan isi folder (file README.md dan subfolder jika ada) tetap ada dan tidak rusak.

### 5. Ulangi untuk Semua Provinsi
- Ulangi langkah 2-4 untuk setiap provinsi di Indonesia, baik untuk subfolder `kabupaten` maupun `kota`.

## Catatan
- Pastikan tidak ada prefix `Kabupaten-` atau `Kota-` dalam nama folder. Prefix tersebut hanya boleh ada di dalam konten `README.md` (judul H1).
- Jika terdapat folder yang sudah menggunakan kebab-case lowercase, tidak perlu di-rename.
- Lakukan satu provinsi pada satu waktu untuk meminimalkan kesalahan.
- Setelah selesai, lakukan commit jika menggunakan Git.

## Contoh Skrip Batch (Opsional)
Untuk mempercepat proses, Anda dapat membuat skrip batch. Namun, pastikan untuk menguji skrip pada satu provinsi terlebih dahulu sebelum menerapkannya ke semua provinsi.

Contoh skrip batch untuk satu provinsi (simpan sebagai `rename_provinsi.bat`):
```batch
@echo off
setlocal enabledelayedexpansion

set "PROVINSI_PATH=Aceh"
set "KABUPATEN_PATH=%PROVINSI_PATH%\Kabupaten"
set "KOTA_PATH=%PROVINSI_PATH%\Kota"

echo Processing Kabupaten in %PROVINSI_PATH%...
pushd %KABUPATEN_PATH%
for /d %%D in (*) do (
    set "foldername=%%D"
    set "lowercase=!foldername:A=a!"
    set "lowercase=!lowercase:B=b!"
    set "lowercase=!lowercase:C=c!"
    set "lowercase=!lowercase:D=d!"
    set "lowercase=!lowercase:E=e!"
    set "lowercase=!lowercase:F=f!"
    set "lowercase=!lowercase:G=g!"
    set "lowercase=!lowercase:H=h!"
    set "lowercase=!lowercase:I=i!"
    set "lowercase=!lowercase:J=j!"
    set "lowercase=!lowercase:K=k!"
    set "lowercase=!lowercase:L=l!"
    set "lowercase=!lowercase:M=m!"
    set "lowercase=!lowercase:N=n!"
    set "lowercase=!lowercase:O=o!"
    set "lowercase=!lowercase:P=p!"
    set "lowercase=!lowercase:Q=q!"
    set "lowercase=!lowercase:R=r!"
    set "lowercase=!lowercase:S=s!"
    set "lowercase=!lowercase:T=t!"
    set "lowercase=!lowercase:U=u!"
    set "lowercase=!lowercase:V=v!"
    set "lowercase=!lowercase:W=w!"
    set "lowercase=!lowercase:X=x!"
    set "lowercase=!lowercase:Y=y!"
    set "lowercase=!lowercase:Z=z!"
    if not "!foldername!"=="!lowercase!" (
        ren "!foldername!" "!lowercase!"
        echo Renamed: !foldername! -> !lowercase!
    )
)
popd

echo Processing Kota in %PROVINSI_PATH%...
pushd %KOTA_PATH%
for /d %%D in (*) do (
    set "foldername=%%D"
    set "lowercase=!foldername:A=a!"
    set "lowercase=!lowercase:B=b!"
    set "lowercase=!lowercase:C=c!"
    set "lowercase=!lowercase:D=d!"
    set "lowercase=!lowercase:E=e!"
    set "lowercase=!lowercase:F=f!"
    set "lowercase=!lowercase:G=g!"
    set "lowercase=!lowercase:H=h!"
    set "lowercase=!lowercase:I=i!"
    set "lowercase=!lowercase:J=j!"
    set "lowercase=!lowercase:K=k!"
    set "lowercase=!lowercase:L=l!"
    set "lowercase=!lowercase:M=m!"
    set "lowercase=!lowercase:N=n!"
    set "lowercase=!lowercase:O=o!"
    set "lowercase=!lowercase:P=p!"
    set "lowercase=!lowercase:Q=q!"
    set "lowercase=!lowercase:R=r!"
    set "lowercase=!lowercase:S=s!"
    set "lowercase=!lowercase:T=t!"
    set "lowercase=!lowercase:U=u!"
    set "lowercase=!lowercase:V=v!"
    set "lowercase=!lowercase:W=w!"
    set "lowercase=!lowercase:X=x!"
    set "lowercase=!lowercase:Y=y!"
    set "lowercase=!lowercase:Z=z!"
    if not "!foldername!"=="!lowercase!" (
        ren "!foldername!" "!lowercase!"
        echo Renamed: !foldername! -> !lowercase!
    )
)
popd

endlocal
```
Catatan: Skrip di atas hanya mengubah huruf menjadi kecil tanpa mengubah struktur nama (misal: `Aceh-Barat` tetap menjadi `aceh-barat` karena kita hanya mengubah huruf). Namun, karena nama folder kita hanya berisi huruf dan tanda hubung, dan kita ingin semua huruf kecil, maka skrip di atas cukup.

Namun, untuk kejelasan, sebaiknya kita ubah satu per satu dengan mengetahui pola nama. Skrip di atas mengasumsikan bahwa nama folder hanya berisi huruf dan tanda hubung, dan kita hanya ingin mengubah huruf menjadi kecil.

Jika ada angka atau karakter lain, skrip mungkin perlu disesuaikan.

## Referensi
- Konvensi penamaan yang disepakati terdapat dalam file `ROADMAP.md` di folder `_docs`.