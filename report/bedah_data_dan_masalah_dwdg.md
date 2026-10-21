# Bedah Data & Diagnosis Masalah: DWDG Mini Case Competition 2026
**Topik Kasus:** *Connecting Every Home: Optimizing Telkomsel’s Household Connectivity Portfolio*  
**Sumber Referensi:**
- [DWDG Mini Case Competitoin Case.pdf](../references/DWDG%20Mini%20Case%20Competitoin%20Case.pdf)
- [Annual-Report-Telkomsel-2025-web-ID.pdf](../references/Annual-Report-Telkomsel-2025-web-ID.pdf)

---

## 1. Inti Permasalahan (*The Core Problem: Volume vs. Value Paradox*)

Pada tahun 2025, bisnis konektivitas rumah tangga (*Household Connectivity*) Telkomsel mengalami **paradoks pertumbuhan**: jumlah pelanggan rumah tangga terus bertambah secara signifikan, namun nilai uang yang dihasilkan per rumah tangga (**ARPU**) turun lebih dalam sehingga **total pendapatan segmen rumah tangga justru menyusut**.

> [!IMPORTANT]
> **Pertanyaan Kunci Lomba (Key Question):**  
> *"Seiring kebutuhan konektivitas rumah tangga yang semakin beragam, bagaimana Telkomsel harus **mendiferensiasikan dan memposisikan IndiHome serta Orbit** di berbagai segmen pelanggan untuk membuka nilai jangka panjang yang lebih kuat **tanpa bergantung terutama pada perang harga**?"*

```mermaid
flowchart TD
    A["Kondisi Pasar Broadband Rumah Tangga 2025<br/>(Kompetisi Harga Ketat & Fragmentasi Pasar)"] --> B["Akuisisi Pelanggan Baru (+712 Ribu)<br/>Didominasi Paket Single-Play (1P) & Entry-Level"]
    B --> C["Jumlah Pelanggan IndiHome B2C Naik +7,4% YoY<br/>(9,61 Juta -> 10,32 Juta)"]
    B --> D["ARPU IndiHome B2C Anjlok -10,1% YoY<br/>(Rp237,6 Ribu -> Rp213,5 Ribu)"]
    C --> E["PARADOKS PENDAPATAN:<br/>Pendapatan IndiHome B2C Turun -1,6% YoY<br/>(Rp26,606 Triliun -> Rp26,168 Triliun / -Rp438 Miliar)"]
    D --> E
    E --> F["Tantangan Strategis DWDG 2026:<br/>Bagaimana memposisikan IndiHome (Fiber) & Orbit (FWA)<br/>secara komplementer untuk memulihkan ARPU & LTV?"]
```

---

## 2. Tabel Data Lengkap dari Annual Report Telkomsel 2025

Berikut adalah rangkuman angka resmi dari **Laporan Tahunan Telkomsel 2025** (Halaman 7–11 dan 156–158) yang wajib menjadi fondasi argumen kuantitatif tim kamu:

### A. Kinerja Segmen Rumah Tangga (IndiHome B2C & FMC)

| Indikator Utama | FY 2023 | FY 2024 | FY 2025 | Perubahan YoY (2024–2025) | Referensi Halaman AR 2025 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Pelanggan IndiHome B2C** | 8,694 Juta | 9,612 Juta | **10,324 Juta** | **+7,4%** (+712 ribu *net add*) | Hal. 9, 11, 86, 156 |
| **ARPU IndiHome B2C** | Rp253,0 ribu | Rp237,6 ribu | **Rp213,5 ribu** | **-10,1%** (-Rp24,1 ribu/bln) | Hal. 11, 156, 157 |
| **Pendapatan IndiHome B2C** | Rp13.227 M* | Rp26.606 M | **Rp26.168 M** | **-1,6%** (-Rp438 miliar) | Hal. 10, 157 |
| **Penetrasi Konvergensi (FMC)** | ~50% | ~57% | **59%** | **+2 ppt** (>7% pertumbuhan sub FMC) | Hal. 7, 63, 66, 86 |
| **Estimasi Rumah Tangga FMC** | ~4,35 Juta | ~5,48 Juta | **~6,09 Juta** | **~4,23 Juta FBB belum FMC (41%)** | Kalkulasi Basis 10,324 Jt |

*\*Catatan: Pendapatan IndiHome B2C 2023 hanya dikonsolidasikan separuh tahun pasca-integrasi FMC Juli 2023.*

```mermaid
xychart-beta
    title "Paradoks IndiHome B2C (2023 - 2025): Pelanggan Naik vs ARPU Turun"
    x-axis ["2023", "2024", "2025"]
    y-axis "ARPU (Rp Ribu)" 180 --> 270
    bar [253.0, 237.6, 213.5]
    line [253.0, 237.6, 213.5]
```

### B. Kinerja Korporat, Seluler & Infrastruktur Telkomsel (Konteks Ekosistem)

| Indikator Korporat & Jaringan | FY 2024 | FY 2025 | Perubahan YoY | Implikasi Strategis untuk Kasus Rumah Tangga |
| :--- | :---: | :---: | :---: | :--- |
| **Total Pendapatan Telkomsel** | Rp113.340 M | **Rp109.307 M** | -3,6% | IndiHome B2C menyumbang **23,9%** dari total pendapatan Telkomsel. |
| **Pendapatan Bisnis Digital (Seluler)** | Rp78.286 M | **Rp76.805 M** | -1,9% | Menyumbang **92,4%** pendapatan seluler (naik dari 90,3% di 2024). |
| **Pendapatan Legacy (Voice/SMS)** | Rp8.447 M | **Rp6.334 M** | -25,0% | Penurunan struktural; memaksa monetisasi datang dari data & rumah tangga. |
| **EBITDA & Margin EBITDA** | Rp51.337 M (45,3%) | **Rp49.624 M (45,4%)** | -3,3% (+0,1ppt) | Margin sangat sehat (45,4%) berkat efisiensi biaya (-3,7% OpEx) & sinergi TelkomGroup. |
| **Pelanggan Seluler** | 159,39 Juta | **156,06 Juta** | -2,1% | Basis masif untuk *cross-selling* Orbit & konversi ekosistem FMC. |
| **ARPU Seluler** | Rp44 ribu | **Rp43 ribu** | -2,3% | Membaik di Semester II-2025 (+5,1% QoQ di Q3 & +2,4% QoQ di Q4). |
| **Data Payload / Traffic** | 20,39 Juta TB | **23,44 Juta TB** | **+15,0%** | Konsumsi data melonjak 15% (22.895 Petabyte), bukti kebutuhan kuota rumah tinggi. |
| **Total BTS (3G/4G/5G)** | 271.040 (222.265) | **293.136 (244.501)** | **+8,2%** (+10,0%) | Termasuk **~5.000 BTS 5G di 80 kota** — tulang punggung **Telkomsel Orbit**! |

---

## 3. Temuan Emas (*Hidden Gems*) di Annual Report 2025 untuk Memperkuat Solusi H.O.M.E.

Jika peserta lain hanya membaca *casebook* 4 halaman, mereka hanya tahu "IndiHome = Fiber" dan "Orbit = Wireless". Dari hasil bedah **Annual Report Telkomsel 2025 (Halaman 63–66 dan 81–86)**, terdapat **3 fakta strategis** mengenai IndiHome, Orbit, dan FMC yang menjadi fondasi solusi **Home Ladder (H.O.M.E.)**:

1. **Senjata Monetisasi Baru IndiHome di 2025 (Halaman 82 & 85 — Mendukung Tahap *Optimize*):**
   - **IndiHome Gamer:** Diluncurkan akhir 2025 dengan kecepatan *upload* dan *download* simetris (1:1) plus *benefit* *gaming* di ekosistem Dunia Games.
   - **Program HSMP (*Higher Speed More Price*) & *Early Payment*:** Program *upselling* kecepatan untuk menaikkan ARPU dan menekan *churn* lewat insentif pembayaran lebih awal.
   - **Multi-OTT Soft Bundle & *Set-Top Box (STB) Takeover*:** Mengubah pelanggan *Single-Play (1P)* menjadi *Dual-Play (2P)* / *Triple-Play (3P)* melalui paket *streaming* terpadu (Vidio, iQIYI, Viu, WeTV, Vision+ Premium, Prime Video, Netflix, Disney+, Max).
2. **Revamp Nasional Telkomsel Orbit (Halaman 82 & 86 — Mendukung Tahap *Harmonize* & *Move Up*):**
   - Pada 2025, paket Orbit disederhanakan secara nasional dengan opsi **Prabayar (Prepaid)** dan **Pascabayar (Postpaid)**.
   - Orbit berperan ganda: **(a) Solusi *Greenfield*** di wilayah yang belum terjangkau jaringan *fiber* (FTTH), dan **(b) Solusi Fleksibilitas/Mobilitas** bagi rumah tangga non-permanen (perantau, penghuni kos/apartemen sewa, rumah baru pindah) sebelum nantinya naik kelas (**Move Up**) ke IndiHome saat menetap dan *fiber-ready*.
3. **Peluang Konvergensi FMC & Super-App MyTelkomsel (Halaman 64, 66, 82, 86 — Mendukung Tahap *Embed*):**
   - Penetrasi konvergensi (FMC) saat ini baru mencapai **59%** dari basis FBB (~6,09 juta pelanggan). Artinya masih ada **41% (~4,23 juta rumah tangga IndiHome)** yang **belum** terhubung dengan nomor seluler keluarga Telkomsel, sehingga mudah berpindah ke kompetitor (*low switching cost*).

---

## 4. Pemetaan Masalah ke 4 Pertanyaan Lomba & Tangga H.O.M.E.

```mermaid
flowchart LR
    Q1["1. Segmentasi Rumah Tangga<br/>(H: Harmonize)"] --> Q2["2. Peran IndiHome vs Orbit<br/>(H: Harmonize & M: Move Up)"]
    Q2 --> Q3["3. Siklus Nilai & Retensi<br/>(O: Optimize, M: Move Up, E: Embed)"]
    Q3 --> Q4["4. Implementasi & Dampak Bisnis<br/>(Roadmap 5 Tahun & KPI)"]
```

| Pertanyaan di Casebook DWDG | Akar Masalah Saat Ini (Data 2025) | Arah Strategi **Home Ladder (H.O.M.E.)** |
| :--- | :--- | :--- |
| **Q1. Segmentasi Rumah Tangga Prioritas** | Pelanggan rumah tangga diperlakukan seragam sehingga banyak yang memilih paket 1P termurah. | Membagi segmen rumah tangga berdasarkan **Data Geospasial ODP Fiber + Penggunaan Internet (*Usage*)**: *Flexible Starters*, *Flexible Growing Families*, *Stable Mainstream Families*, dan *Performance Households*. |
| **Q2. Peran IndiHome vs Orbit** | Risiko kanibalisasi jika Orbit dan IndiHome dijual ke target yang sama sebagai barang substitusi. | **Dua mesin dalam satu perjalanan rumah tangga (*Home Ladder*):**<br/>• **Orbit:** Mesin fleksibilitas & pintu masuk di area belum *fiber-ready*.<br/>• **IndiHome:** Mesin stabilitas & performa tinggi untuk keluarga menetap di area *fiber-ready*. |
| **Q3. Akuisisi, Retensi & Peningkatan Nilai (ARPU/LTV)** | ARPU turun -10,1% (ke Rp213,5rb) karena proporsi 1P membesar dan 41% pelanggan belum FMC. | • **Optimize:** Menaikkan nilai per koneksi (`Rp213K` $\to$ `+Entertainment Rp230K` $\to$ `+Upgrade Tier Rp250K`).<br/>• **Move Up:** Migrasi terukur dari Orbit ke IndiHome saat *fiber-ready* & menetap.<br/>• **Embed:** Menautkan seluler anggota keluarga + *Family Quota* + *Home Loyalty* untuk menekan *churn*. |
| **Q4. Implementasi, KPI & Estimasi Dampak Bisnis** | Pertumbuhan pelanggan +7,4% gagal menjadi pertumbuhan pendapatan (-1,6%). | • **Roadmap 3 Fase Selama 5 Tahun (2026–2030)**.<br/>• **Kalkulasi Dampak:** Kenaikan ARPU +Rp25K (ke Rp238,5K) pada basis 10,3 juta pelanggan membuka **$\pm$Rp3,1 Triliun pendapatan tambahan tahunan** tanpa perang harga! |
