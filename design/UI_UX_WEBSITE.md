# Spesifikasi UI/UX & Panduan Desain Website/Aplikasi: "MyTelkomsel H.O.M.E. (Home Ladder Navigator)"

**Nama Produk:** **MyTelkomsel H.O.M.E. (*Home Ladder Navigator*)**  
**Bentuk Produk:** Modul Web-App Responsif (*Mobile-First Super-App View* + *Desktop Executive Dashboard*)  
**File Implementasi Terkait:**
- [prototype_home_ladder_navigator.html](file:///home/brenandacaesa/PROJECT/DWDG/report/prototype_home_ladder_navigator.html) *(Prototipe HTML Interaktif)*
- [Software_Proposed_Idea.md](file:///home/brenandacaesa/PROJECT/DWDG/report/Software_Proposed_Idea.md) *(Arsitektur Fungsional)*
- [LOGO_DESIGN.md](file:///home/brenandacaesa/PROJECT/DWDG/design/LOGO_DESIGN.md) *(Identitas Visual & Logo)*

---

## 1. Prinsip Utama UI/UX (*Core Design Principles*)

Agar juri lomba langsung menangkap nilai strategis **H.O.M.E.** dalam waktu kurang dari **60 detik saat demo**, desain UI/UX wajib mematuhi 4 prinsip berikut:

1. **Dual-Perspective Toggle (*Customer View vs Telkomsel View*):**
   - Di bagian *Top Navbar*, terdapat tombol *toggle* instan antara:
     - **📱 Customer View (4 Layar H.O.M.E.):** Memperlihatkan pengalaman pelanggan rumah tangga dari memilih paket hingga mengejar Milestone `Bronze` $\to$ `Silver` $\to$ `Gold`.
     - **📊 Telkomsel Executive View (Khusus Juri / B2B):** Memperlihatkan peta geospasial ODP, matriks distribusi 4 segmen rumah tangga, *funnel* konversi 450.000 pelanggan Orbit $\to$ IndiHome, dan dampak ARPU.
2. **Guided Stepper Navigation (`H` $\to$ `O` $\to$ `M` $\to$ `E`):**
   - Pengguna tidak pernah tersesat di menu yang rumit. Navigasi utama berbentuk **4 Anak Tangga Horizontal** yang selalu terlihat di atas layar.
3. **Gamified Milestone UX (Pendekatan Shopee Member):**
   - Mengganti tabel syarat & ketentuan yang membosankan menjadi **Progress Bar Interaktif (`🥉 Bronze` $\to$ `🥈 Silver` $\to$ `🥇 Gold`)** lengkap dengan indikator *"1 misi lagi untuk naik ke Gold!"* dan kalkulator **"Rugi Bersih jika Pindah ke Kompetitor"**.
4. **Zero-Friction Decision Cards:**
   - Setiap layar maksimal menampilkan **3 kartu pilihan** dengan lencana rekomendasi yang jelas (*"Paling Pas untuk Rumahmu"*).

---

## 2. Design System & UI Tokens (Tailwind CSS Ready)

### A. Skema Warna (*Color Tokens*)
Menggunakan tema **Modern Dark Slate + Telkomsel Crimson & Semantic Accents** agar grafik geospasial, lencana milestone, dan indikator finansial terlihat kontras dan premium di proyektor ruang penjurian:

| Komponen UI | Kelas Tailwind CSS | Kode HEX | Fungsi Visual |
| :--- | :--- | :---: | :--- |
| **App Background** | `bg-slate-950` | `#020617` | Latar belakang utama kanvas aplikasi |
| **Card Surface** | `bg-slate-900 border-slate-800` | `#0F172A` | Kontainer kartu modul & panel simulasi |
| **Primary Brand / CTA** | `bg-rose-600 hover:bg-rose-500` | `#E11D48` / `#E60012` | Tombol aksi utama, tab aktif `H.O.M.E.` |
| **Orbit Indicator (FWA)** | `text-sky-400 bg-sky-500/10` | `#38BDF8` | Penanda produk **Telkomsel Orbit** & zona *Cellular-Only* |
| **IndiHome Indicator (FTTH)** | `text-emerald-400 bg-emerald-500/10` | `#34D399` | Penanda produk **IndiHome**, zona *Fiber-Ready*, & kenaikan ARPU |
| **Milestone Bronze** | `text-amber-500 border-amber-500` | `#F59E0B` | Lencana & kartu **🥉 Bronze Starter** |
| **Milestone Silver** | `text-slate-200 border-slate-300` | `#E2E8F0` | Lencana & kartu **🥈 Silver Upgrader** |
| **Milestone Gold VIP** | `text-yellow-400 border-yellow-400` | `#FACC15` | Lencana & kartu **🥇 Gold Family VIP** |

### B. Tipografi & Hierarki Ukuran
- **Font Family:** `Inter` atau `Plus Jakarta Sans` (Google Fonts).
- **Heading Layar (`H1` / `H2`):** `text-xl md:text-2xl font-bold tracking-tight text-white`
- **Angka KPI / Kalkulator Rupiah:** `text-2xl font-bold tabular-nums` (menggunakan `tabular-nums` agar angka tidak bergoyang saat *slider* digeser).
- **Label & Badge Mikro:** `text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full`

---

## 3. Arsitektur Layar & Wireframe Fungsional (5 View Utama)

```mermaid
flowchart TB
    NAV["TOP NAVBAR: Logo MyTelkomsel H.O.M.E. + Mode Switch (Customer View vs Telkomsel View)"]
    NAV --> CUST["CUSTOMER VIEW (Stepper 4 Anak Tangga)"]
    NAV --> EXEC["TELKOMSEL VIEW (Executive GIS & KPI Dashboard)"]
    
    CUST --> S1["Layar 1: [H] HARMONIZE<br/>Peta Geospasial ODP + 6 Kuesioner Cepat<br/>-> Output: Segmen & Produk (Orbit vs IndiHome)"]
    CUST --> S2["Layar 2: [O] OPTIMIZE<br/>3 Kartu Value Ladder<br/>(Connectivity -> +Entertainment -> +Productivity)"]
    CUST --> S3["Layar 3: [M] MOVE UP<br/>Radar 3 Sinyal Kesiapan Orbit -> IndiHome<br/>+ Jaminan Zero Downtime"]
    CUST --> S4["Layar 4: [E] EMBED<br/>Progress Bar Milestone (Bronze -> Silver -> Gold)<br/>+ Kalkulator Switching Cost Keluarga"]
```

---

### Layar 1: `[H] HARMONIZE` — *Smart Geo-Placement & 6-Question Profiler*
- **Tujuan UX:** Membuktikan bahwa Orbit dan IndiHome tidak saling kanibal karena dipisahkan sejak awal oleh **data geospasial jaringan** dan **profil kebutuhan rumah tangga**.
- **Tata Letak (*2-Column Split Grid*):**
  - **Kolom Kiri (Input 7 Kolom Grid):**
    1. **Toggle Geospasial Lokasi:** 2 tombol kartu interaktif:
       - `🟢 Zona Hijau (Fiber-Ready — ODP IndiHome <150m)`
       - `🔵 Zona Biru (Cellular-Only — Jaringan 4G/5G Orbit)`
    2. **Preset Uji Cepat Juri:** 4 tombol pil (*Flexible Starters*, *Flexible Growing*, *Stable Mainstream*, *Performance*) agar juri bisa menguji 4 segmen hanya dengan 1 klik.
    3. **6 Dropdown Kuesioner Singkat:** Status hunian, durasi tinggal, jumlah orang/perangkat, aktivitas utama, tingkat kekritisan koneksi, dan layanan saat ini.
  - **Kolom Kanan (Output 5 Kolom Grid):**
    - **Kartu Hasil Rekomendasi Utama:** Menampilkan **Nama Segmen**, **Positioning Tagline**, **Rekomendasi Produk Utama** (`Telkomsel Orbit` vs `IndiHome` vs `Orbit -> Prioritas Move Up IndiHome`), dan **Catatan Geospasial Pintar** (*Geo-Override Rule*).
    - **CTA Button:** `"Lanjut ke Anak Tangga 2: OPTIMIZE →"`

---

### Layar 2: `[O] OPTIMIZE` — *Vertical Value Ladder (Pendorong ARPU)*
- **Tujuan UX:** Menunjukkan bagaimana pelanggan IndiHome/Orbit 1P dinaikkan ARPU-nya tanpa paksaan melalui 3 anak tangga nilai yang relevan.
- **Komponen UI Utama:**
  - **Header Indikator ARPU Real-Time:** Menampilkan perubahan ARPU secara langsung saat kartu dipilih (`Rp213.500` $\to$ `Rp230.000 (+Rp16,5K)` $\to$ `Rp250.000 (+Rp36,5K)`).
  - **3 Interactive Pricing/Value Cards (3-Column Grid):**
    1. **Tangga 1 — Connectivity Only (Baseline 1P):** Harga dasar Rp213,5rb/bln (Milestone: `🥉 Bronze`).
    2. **Tangga 2 — Connectivity + Entertainment (Recommended Badge):** +Rp16,5rb/bln, dapat kecepatan ekstra + paket streaming keluarga (Naik ke Milestone: `🥈 Silver`).
    3. **Tangga 3 — Connectivity + Productivity / Gaming:** +Rp36,5rb/bln, dapat *Symmetrical Speed / Low Latency* + *Orbit Backup* (Naik ke Milestone: `🥈 Silver Plus`).

---

### Layar 3: `[M] MOVE UP` — *Orbit-to-IndiHome Graduation Radar*
- **Tujuan UX:** Memvisualisasikan keunikan terbesar strategi **H.O.M.E.** yang tidak dimiliki kompetitor—yakni memindahkan pelanggan Orbit yang sudah *outgrow* ke IndiHome secara otomatis dan tanpa putus koneksi.
- **Komponen UI Utama:**
  - **Status Pill Dinamis di Pojok Kanan Atas:** Berubah warna antara `🟢 SIAP NAIK KE INDIHOME (3/3 Sinyal Terpenuhi)` atau `🟡 TETAP DI ORBIT DULU (Tidak Dipaksa Pindah)`.
  - **3 Kartu Checkbox Sinyal Telemetri:**
    1. `☑️ Sinyal 1 (Infrastruktur):` Lokasi rumah kini sudah terjangkau jaringan ODP IndiHome (*Fiber-Ready*).
    2. `☑️ Sinyal 2 (Usage Telemetry):` Pemakaian kuota Orbit $>300\text{ GB/bulan}$ atau sering beli *top-up* kuota tambahan.
    3. `☑️ Sinyal 3 (Tenure & Hunian):` Aktif $\ge 6\text{ bulan}$ di titik lokasi yang sama (indikasi menetap).
  - **Banner Tawaran "Naik Kelas Tanpa Jeda":** Menjelaskan bahwa internet Orbit tetap menyala sampai teknisi IndiHome selesai memasang kabel fiber, ditambah bebas biaya pasang Rp500.000 & masa loyalitas tidak hangus.

---

### Layar 4: `[E] EMBED` — *Shopee-Style Milestone Loyalty & Switching Cost Calculator*
- **Tujuan UX:** Menunjukkan bagaimana integrasi nomor HP keluarga (FMC) dan gamifikasi **Milestone (`🥉 Bronze` $\to$ `🥈 Silver` $\to$ `🥇 Gold`)** mengunci pelanggan sehingga *churn* turun drastis.
- **Komponen UI Utama:**
  1. **Milestone Progress Bar ala Shopee Member (Full-Width Top Panel):**
     - Bar progres bergradasi (`Bronze` $\to$ `Silver` $\to$ `Gold`) yang berubah panjangnya (`34%` $\to$ `68%` $\to$ `100%`) beserta teks misi dinamis.
     - **3 Kartu Tier Milestone (`🥉 Bronze Starter`, `🥈 Silver Upgrader`, `🥇 Gold Family VIP`):** Kartu yang sedang aktif menyala dengan *border* tebal bercahaya.
  2. **Panel Kiri — Slider Simulasi Anggota Keluarga (1–5 Nomor HP):**
     - Menggeser *slider* dari `1 Nomor` ke `3–5 Nomor` langsung mengubah status Milestone dari **Bronze** $\to$ **Silver** $\to$ **Gold** dan meng-update **Dompet Benefit Bulanan** (Kuota Keluarga 10–50 GB + Akses Multi-OTT + VIP Priority Care $<6\text{ jam}$).
  3. **Panel Kanan — Kalkulator "Takut Turun Kasta" (*Switching Cost / Loss Aversion Card*):**
     - Menampilkan angka besar: **Total Nilai Benefit Milestone (Rp145.000/bulan)**.
     - Menyajikan kesimpulan psikologis yang tajam: *"Jika pindah ke Wi-Fi kompetitor yang lebih murah Rp25.000/bulan, status Gold gugur dan keluarga justru **rugi bersih Rp120.000/bulan**!"*

---

### Layar 5 (Mode Khusus Juri): `TELKOMSEL EXECUTIVE VIEW`
- **Tujuan UX:** Memberikan sudut pandang manajemen Telkomsel (*B2B / Internal Dashboard*) yang merangkum dampak bisnis selama 3–5 tahun.
- **Komponen UI Utama:**
  - **4 Kartu KPI Utama (4-Column Grid):**
    1. **Target ARPU:** `Rp213,5K → Rp238,5K` (`+Rp25K/pelanggan` $\approx$ `+Rp3,1 Triliun/tahun`).
    2. **Target Move Up (Orbit $\to$ IndiHome):** `450.000 Rumah Tangga` (`~38%` dari base aktif Orbit).
    3. **Penetrasi FMC (Embed):** `59% → 73%` (`+1,9 Juta Rumah Tangga FMC`).
    4. **Penurunan Monthly Churn:** `-45 bps` (dari `~1,20%` ke `~0,75%` per bulan).
  - **Panel Distribusi 4 Segmen & Funnel Konversi Terukur:** Menampilkan jumlah rumah tangga di tiap segmen dan tahapan *funnel* dari *Eligible* (620K) $\to$ *Dijangkau* (560K) $\to$ *Menerima Tawaran* (475K) $\to$ *Terpasang Tanpa Jeda* (450K).

---

## 4. Prompt Siap Pakai untuk AI UI/UX Builder (v0.dev / Lovable / Bolt / Figma)

Jika kamu atau tim ingin men-*generate* ulang atau mengembangkan tampilan UI ini di **v0 by Vercel**, **Lovable.dev**, atau **Figma AI**, salin prompt berikut:

> **Prompt UI/UX Generator:**  
> `Create a modern, high-converting dark-mode interactive web application prototype named "MyTelkomsel H.O.M.E. (Home Ladder Navigator)" using Tailwind CSS. Include a top navigation header with the brand logo, a 4-step horizontal ladder navigation bar ([H] Harmonize, [O] Optimize, [M] Move Up, [E] Embed), and a mode switch between "Customer View" and "Telkomsel Executive View".`  
> `- In Screen 1 (Harmonize), create a split layout with a geospatial coverage toggle (Green Fiber-Ready ODP vs Blue Cellular-Only Orbit), 4 quick segment preset buttons, and a 6-question household quiz on the left, with a dynamic segment & product recommendation card on the right.`  
> `- In Screen 2 (Optimize), display 3 interactive value-ladder pricing cards (Connectivity Only, +Entertainment, +Productivity/Gaming) with a live ARPU uplift indicator.`  
> `- In Screen 3 (Move Up), build a 3-signal migration readiness radar (Fiber-Ready location, >300GB Orbit usage, >6 months tenure) with a zero-downtime Orbit-to-IndiHome upgrade offer banner.`  
> `- In Screen 4 (Embed), design a Shopee-style gamified Milestone Loyalty progress bar (Bronze Starter -> Silver Upgrader -> Gold Family VIP), an interactive slider for linked family mobile numbers (1 to 5 lines), a monthly claimable family benefit wallet, and a red "Switching Cost / Loss Aversion" calculator showing the net monthly loss in IDR if the family switches to a cheaper competitor.`  
> `Use slate-950/900 backgrounds, Telkomsel crimson (#E60012), sky-400 for Orbit, emerald-400 for IndiHome, and gold (#FACC15) for VIP milestones.`
