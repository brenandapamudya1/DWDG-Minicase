# PITCH DECK PLAN — "Home Ladder: H.O.M.E."
**Kasus:** *Connecting Every Home: Optimizing Telkomsel’s Household Connectivity Portfolio* (DWDG Mini Case Competition 2026)  
**Strategi:** **Home Ladder: H.O.M.E.** (*Harmonize → Optimize → Move Up → Embed*)  
**Prototype:** **MyTelkomsel H.O.M.E. (*Home Ladder Navigator*)**  
**Aturan:** **10 slide utama** (di luar Cover & Appendix)

**Sumber yang dipakai:**
- Referensi deck: `references/powerpoint/pitchdeck mas farrel.pdf` (Re-POTE / I.B.D Strategy, 10 hlm) & `references/powerpoint/pitchdeck mas afa.pdf` (FoodWise, 15 hlm)
- Isi solusi: [Proposed_Solution.md](file:///home/brenandacaesa/PROJECT/DWDG/report/Proposed_Solution.md), [Software_Proposed_Idea.md](file:///home/brenandacaesa/PROJECT/DWDG/report/Software_Proposed_Idea.md), [bedah_data_dan_masalah_dwdg.md](file:///home/brenandacaesa/PROJECT/DWDG/report/bedah_data_dan_masalah_dwdg.md)
- Visual: [gantt_chart_5_years.png](file:///home/brenandacaesa/PROJECT/DWDG/figure/gantt_chart_5_years.png), [prototype_home_ladder_navigator.html](file:///home/brenandacaesa/PROJECT/DWDG/report/prototype_home_ladder_navigator.html), [LOGO_DESIGN.md](file:///home/brenandacaesa/PROJECT/DWDG/design/LOGO_DESIGN.md), [UI_UX_WEBSITE.md](file:///home/brenandacaesa/PROJECT/DWDG/design/UI_UX_WEBSITE.md)

---

## 0. Pelajaran dari 2 Deck Referensi

| Aspek | Deck Farrel (Re-POTE, *case competition*) | Deck Afa (FoodWise, *business plan*) | Yang Kita Adopsi |
| :--- | :--- | :--- | :--- |
| **Alur cerita** | Executive Summary → Background → Solusi 1/2/3 → Partner → Value Proposition → Implementation & Impact → Feasibility | Persona → Problem → Ide → UI/UX → Feasibility (Porter, SWOT) → Marketing → HR → Finansial → Roadmap → Conclusion | **Alur Farrel** (lebih cocok untuk *case competition* dengan *key question*), ditambah **slide UI/UX prototype** ala Afa |
| **Executive Summary** | Situation → Key Question → Answer (3 pilar) → 4 Expected Impact dalam 1 slide | – | **Dipakai persis**: Situation, Key Question, Answer (H.O.M.E.), Expected Impact |
| **Framework masalah** | *Situation → Gaps → Resulting Impact → Key Question*, plus *Key Area to Analyze* (Internal: People, Process, Product, Management · External: Competitor, Trend, PESTLE) | **SCQA** (Situation, Complication, Question, Answer) berbasis persona | **SCQA** di Exec Summary & Problem, **Internal–External lens** di Analysis |
| **Keterlacakan solusi** | Label **"Root Cause Answered: A1, A2, B1…"** di setiap slide solusi | – | **Wajib dipakai**: kode akar masalah **A / B / C** muncul di setiap slide solusi |
| **Navigasi** | Footer bar: *Background · Analysis · Strategy · Implementation · Conclusion* (aktif ditebalkan) | Sidebar kiri dengan nomor slide | **Footer bar ala Farrel** |
| **Bukti angka** | Angka besar (70 Tons, -99%, 90%) + sumber kecil di pojok (*Sc: …*) | Grafik finansial, NPV, payback | **Big-number callout + sumber kecil** (AR Telkomsel 2025 / Casebook) |
| **Feasibility** | B/C ratio, ROI 10 thn, payback, ESG dengan *Borda Count* | Porter Five Forces, SWOT, NPV, risk matrix | KPI & finansial di slide Impact; **SWOT/TOWS & Porter di Appendix** |
| **Roadmap** | Fase Y1–Y4 dengan *quick wins* | 5 fase | **Gantt 3 fase / 5 tahun** yang sudah kita buat |

> [!IMPORTANT]
> **Kekuatan utama Farrel yang wajib ditiru:** setiap slide punya **1 judul berupa kalimat insight** (bukan sekadar "Analysis"), dan setiap solusi **menunjuk balik ke akar masalah**. Juri bisa mengikuti logika *problem → root cause → solution → impact* tanpa tersesat.

---

## 1. Rekomendasi Framework Analisis

| Kebutuhan | Framework yang Disarankan | Dipakai di | Alasan |
| :--- | :--- | :--- | :--- |
| Membingkai masalah & jawaban | **SCQA** | Slide 1, 2 | Dipakai kedua referensi; cocok dengan format *key question* casebook |
| Menemukan akar masalah | **Issue Tree (MECE)** + kode **A/B/C** | Slide 3 | Memecah "pendapatan turun walau pelanggan naik" menjadi 3 cabang yang tidak tumpang-tindih → mudah dilacak ke solusi |
| Memahami pelanggan | **Segmentation 2×2** (*Fleksibilitas Hunian × Intensitas Digital*) + **Dual-Data** (Geospasial ODP + Usage Telemetry) | Slide 4 | Langsung menjawab larangan casebook *"avoid treating both products as interchangeable"* |
| Memahami pasar & pesaing | **Internal–External Lens** (adaptasi Farrel: *Product, Process, Customer* · *Competitor, Trend*) + **Competitive Capability Matrix** | Slide 4 | Membuktikan *white space*: belum ada pesaing yang punya tangga Fiber↔FWA otomatis |
| Validasi strategis | **SWOT → TOWS** (S-O, W-T) | Appendix A3 | Dipakai Afa; tidak muat di 10 slide, tapi siap saat Q&A |
| Intensitas industri | **Porter Five Forces** (ringkas) | Appendix A4 | Mendukung argumen "perang harga 1P" |
| Prioritas solusi | **Impact–Effort Matrix** | Appendix A5 | Menjelaskan mengapa *Harmonize & Optimize* dijalankan duluan (Fase 1) |

> [!TIP]
> Untuk slide utama cukup **SCQA + Issue Tree + Segmentation 2×2 + Capability Matrix**. Empat ini sudah menjawab pertanyaan "kenapa", "siapa", dan "kenapa kita bisa menang". Sisanya taruh di Appendix sebagai amunisi Q&A.

---

## 2. Struktur Deck (Ringkasan)

| # | Bagian (Footer) | Judul Slide (Action Title) | Framework / Visual Utama |
| :-: | :--- | :--- | :--- |
| **C** | – | **Cover** — *Home Ladder: H.O.M.E.* | Logo, nama tim |
| **1** | Executive Summary | Telkomsel tidak kekurangan pelanggan — pelanggannya tidak punya tangga untuk naik | SCQA 1 halaman |
| **2** | Background | Pelanggan naik +7,4%, tapi pendapatan turun −1,6%: paradoks volume tanpa nilai | Big numbers + grafik 2024 vs 2025 |
| **3** | Analysis | Tiga akar masalah: peran produk kabur, tidak ada tangga nilai, switching cost rendah | Issue Tree (A/B/C) |
| **4** | Analysis | Orbit & IndiHome melayani fase hidup rumah tangga yang berbeda — dan pesaing belum menghubungkannya | Segmentation 2×2 + Capability Matrix → **Key Insight** |
| **5** | Strategy | H.O.M.E.: mengubah dua produk yang bersaing menjadi satu tangga perjalanan rumah tangga | Diagram tangga 4 anak tangga |
| **6** | Strategy | Cara kerja tiap anak tangga: dari penempatan tepat hingga loyalitas Bronze–Silver–Gold | 4 kolom mekanisme + Milestone |
| **7** | Strategy | MyTelkomsel H.O.M.E.: tangga ini berjalan di aplikasi yang sudah dipakai pelanggan | Mockup 4 layar + Telkomsel View |
| **8** | Implementation | Roadmap 5 tahun, 3 fase, dengan GTM dan mitigasi risiko | Gantt + GTM strip + 3 risiko utama |
| **9** | Implementation | Dampak terukur: ARPU kembali ke Rp238,5K, FMC 73%, churn −45 bps | KPI table + rumus revenue |
| **10** | Conclusion | Dari pertumbuhan jumlah menjadi pertumbuhan nilai | Recap H.O.M.E. + punchline + CTA |
| **A** | Appendix | Data & detail pendukung (A1–A8) | Tabel |

**Alokasi waktu presentasi (asumsi 10 menit):** Slide 1 (1’) · 2–4 (2,5’) · 5–7 (3,5’) · 8–9 (2’) · 10 (1’).

---

## 3. Detail Per Slide

### COVER
- **Judul:** **Home Ladder: H.O.M.E.**
- **Sub-judul:** *Turning Household Growth into Household Value — Harmonize · Optimize · Move Up · Embed*
- **Elemen:** logo MyTelkomsel H.O.M.E. (SVG di [LOGO_DESIGN.md](file:///home/brenandacaesa/PROJECT/DWDG/design/LOGO_DESIGN.md)), nama tim & anggota, "DWDG Mini Case Competition 2026".
- **Visual:** ilustrasi 4 anak tangga naik di dalam siluet rumah (biru → hijau → merah → emas).

---

### SLIDE 1 — Executive Summary
**Action title:** *Telkomsel tidak kekurangan pelanggan rumah tangga — pelanggannya masuk di lantai dasar dan tidak punya tangga untuk naik.*

**Layout (ala Farrel hlm. 3):** kiri = Situation & Complication, kanan = Answer (4 pilar), tengah bawah = Key Question, baris paling bawah = 4 Expected Impact.

| Blok | Isi |
| :--- | :--- |
| **Situation** | IndiHome B2C tumbuh **9,61 Jt → 10,32 Jt (+7,4%)**, FMC sudah **59%**, Orbit melayani area non-fiber. |
| **Complication** | ARPU turun **Rp237,6K → Rp213,5K (−10,1%)**, pendapatan IndiHome B2C turun **−1,6% (−Rp438 M)**. Orbit & IndiHome berisiko saling kanibal, **41% (~4,23 Jt)** rumah belum terikat FMC. |
| **Key Question** | *Bagaimana Telkomsel menata IndiHome, Orbit, dan FMC agar pertumbuhan pelanggan berubah menjadi pertumbuhan nilai?* |
| **Answer: H.O.M.E.** | **H**armonize — produk yang tepat sejak awal (geospasial + usage) · **O**ptimize — naikkan nilai per koneksi · **M**ove Up — Orbit naik ke IndiHome saat siap · **E**mbed — ikat keluarga lewat FMC + Milestone Bronze–Silver–Gold |
| **Expected Impact** | ARPU **Rp238,5K** · **450K** rumah Orbit → IndiHome · FMC **73%** · Monthly churn **−45 bps** (≈ **+Rp3,1 T/thn**) |

**Speaker note:** "Masalahnya bukan di akuisisi, tapi di apa yang terjadi setelah pelanggan masuk."

---

### SLIDE 2 — Background & Problem Identification
**Action title:** *Pelanggan naik +7,4%, tetapi pendapatan turun −1,6%: Telkomsel tumbuh dalam volume, bukan dalam nilai.*

**Layout (ala Farrel hlm. 4 "Landscape"):**
- **Kiri — Big numbers (3 kartu):** `+7,4%` pelanggan · `−10,1%` ARPU · `−1,6%` pendapatan (*Sc: Annual Report Telkomsel 2025*).
- **Tengah — Grafik:** bar pelanggan 2024 vs 2025 ditumpuk dengan garis ARPU yang turun (menggambarkan "gunting" paradoks). Bisa diambil dari [dashboard_visualisasi_dwdg.html](file:///home/brenandacaesa/PROJECT/DWDG/report/dashboard_visualisasi_dwdg.html).
- **Kanan — Konteks portofolio:** IndiHome (fiber, rumah menetap) · Orbit (FWA, fleksibel, non-fiber) · FMC 59%.
- **Bawah — SCQ ringkas:** *Gaps saat ini* → *Dampak yang terjadi* (perang harga 1P, potensi kanibalisasi, churn mudah) → **Key Question** (kotak tegas).

---

### SLIDE 3 — Root Cause Analysis
**Action title:** *Tiga akar masalah membuat konektivitas rumah dijual sebagai "pipa internet" komoditas.*

**Framework:** **Issue Tree (MECE)** — akar: *"Pendapatan turun walau pelanggan naik"*.

| Kode | Akar Masalah | Bukti | Konsekuensi |
| :-: | :--- | :--- | :--- |
| **A** | **Peran produk kabur** — Orbit & IndiHome sama-sama dilihat sebagai "internet rumah" | Casebook: *avoid treating both products as interchangeable* | Saling berebut pelanggan, bersaing di harga |
| **B** | **Tidak ada tangga nilai** — pelanggan masuk sebagai 1P dan berhenti di situ | ARPU −10,1% saat pelanggan +7,4% | Pertumbuhan pelanggan tidak menambah pendapatan |
| **C** | **Switching cost rendah** — 41% rumah belum terikat FMC | FMC 59% (~6,09 Jt dari 10,32 Jt) | Diskon pesaing Rp20–25K cukup untuk memicu churn |

**Visual:** pohon kiri→kanan; tiap cabang diberi lencana kode **A / B / C** yang nanti muncul lagi di Slide 5–6 sebagai *"Root Cause Answered"*.

---

### SLIDE 4 — Analysis & Key Insight
**Action title:** *Orbit dan IndiHome melayani fase hidup rumah tangga yang berbeda — dan belum ada pesaing yang menghubungkan keduanya.*

**Layout 2 kolom:**

**Kiri — Customer Lens: Segmentation 2×2 (Dual-Data)**

| | Intensitas Digital Rendah–Sedang | Intensitas Digital Tinggi |
| :--- | :--- | :--- |
| **Fleksibel** (sewa/kos, non-fiber) | **Flexible Starters** → Orbit | **Flexible Growing Families** → Orbit → *Move Up* |
| **Stabil** (menetap, fiber-ready) | **Stable Mainstream** → IndiHome (*Optimize & Embed*) | **Performance Households** → IndiHome High-Tier + Orbit Backup |

*Input data:* Geospasial ODP (zona hijau/kuning/biru) + Usage Telemetry (trafik malam, tethering, jumlah SIM se-atap).

**Kanan — Competitor Lens: Capability Matrix**

| Kapabilitas | Telkomsel (H.O.M.E.) | XL (Satu Fiber/Lite) | Indosat (HiFi/HiFi Air) | ISP murni |
| :--- | :-: | :-: | :-: | :-: |
| Fiber + FWA | ✅ | ✅ | ✅ | ❌ |
| Penempatan berbasis geospasial | ✅ | ❌ | ❌ | ❌ |
| Migrasi otomatis FWA → Fiber | ✅ | ❌ | ❌ | ❌ |
| Bundel seluler keluarga (FMC) | ✅ 59% | ✅ | Terbatas | ❌ |
| Loyalitas berbasis milestone | ✅ | ❌ | ❌ | ❌ |

**Kotak KEY INSIGHT (bawah, menonjol):**
> *Orbit bukan pesaing IndiHome — Orbit adalah **anak tangga pertama** menuju IndiHome. Peluangnya ada di **jalur penghubung** (Move Up & Embed) yang belum dimiliki siapa pun.*

---

### SLIDE 5 — Proposed Solution: H.O.M.E. Framework
**Action title:** *H.O.M.E. mengubah dua produk yang saling bersaing menjadi satu tangga perjalanan rumah tangga.*

**Visual utama:** tangga 4 anak tangga dari bawah ke atas, tiap anak tangga punya label *Root Cause Answered*.

| Anak Tangga | Apa yang Dilakukan | Arah Nilai | Root Cause Answered |
| :--- | :--- | :--- | :-: |
| **H — Harmonize** | Tempatkan rumah tangga di produk yang tepat sejak awal (geospasial + usage) | Fondasi | **A** |
| **O — Optimize** | Naikkan nilai per koneksi: Rp213,5K → +Entertainment Rp230K → +Upgrade Tier Rp250K | **Vertikal** (ARPU) | **B** |
| **M — Move Up** | Orbit naik ke IndiHome saat area fiber-ready & kebutuhan tumbuh, tanpa putus koneksi | Siklus hidup | **A + B** |
| **E — Embed** | Tautkan nomor HP keluarga + Milestone Bronze–Silver–Gold | **Horizontal** (koneksi per rumah) | **C** |

**Kalimat kunci di slide:** *"Optimize menambah pendapatan per koneksi; Embed menambah jumlah koneksi per rumah."*

---

### SLIDE 6 — Solution Deep Dive: Mekanisme & Loyalitas
**Action title:** *Setiap anak tangga punya pemicu yang jelas — dan setiap kenaikan dihargai lewat Milestone Bronze–Silver–Gold.*

**Bagian atas — 4 kolom mekanisme (ringkas, 3 poin per kolom):**

| H — Harmonize | O — Optimize | M — Move Up | E — Embed |
| :--- | :--- | :--- | :--- |
| Zona hijau/kuning/biru ODP | Trigger: trafik streaming tinggi → tawarkan OTT bundle | Eligible: fiber-ready + >150 GB/bln + menetap | Tautkan ≥3 nomor keluarga |
| Kuesioner 6 pertanyaan (pelanggan baru) | Trigger: ≥7 perangkat → HSMP/Gamer | Zero-downtime: Orbit tetap aktif sampai IndiHome terpasang | Kuota keluarga bersama 30–40 GB |
| *Geo-override*: cocok IndiHome tapi belum fiber → Orbit + antrean Move Up | Tarif dasar tidak dinaikkan | Gratis pasang + tenure terbawa; modem direkondisi | Multi-OTT + VIP care <6 jam |

**Bagian bawah — Milestone Loyalty (progress bar ala Shopee):**

| 🥉 Bronze (Tahap H) | 🥈 Silver (Tahap O / M) | 🥇 Gold (Tahap E) |
| :--- | :--- | :--- |
| 1 koneksi rumah | Add-on / upgrade atau migrasi Orbit → IndiHome | Rumah + ≥3 nomor keluarga |
| Bonus bayar tepat waktu **~Rp15K/bln** | Gratis pasang Rp500K + speed boost **~Rp65K/bln** | Kuota keluarga + Multi-OTT + VIP **~Rp145K/bln** |

**Callout psikologi:** *Goal-gradient* (dorong naik) + *Loss aversion* (pindah ke pesaing = rugi bersih **Rp120K/bln**).

---

### SLIDE 7 — Prototype: MyTelkomsel H.O.M.E.
**Action title:** *Tangga ini berjalan di MyTelkomsel — tanpa aplikasi baru, langsung menjangkau pelanggan yang sudah ada.*

**Layout (ala Afa hlm. 6 "UI/UX"):** 4 mockup HP berjajar + 1 mockup laptop.
1. **Layar H** — peta zona fiber + kuesioner → rekomendasi produk & segmen.
2. **Layar O** — 3 kartu tangga nilai + ARPU berubah real-time.
3. **Layar M** — radar 3 sinyal kesiapan migrasi.
4. **Layar E** — progress bar Bronze → Silver → Gold + kalkulator "rugi jika pindah".
5. **Telkomsel View (laptop)** — distribusi segmen, funnel Move Up (620K eligible → 450K terpasang), KPI.

**Bawah:** *User journey* 1 baris (Cek lokasi → Dapat rekomendasi → Upgrade → Naik ke IndiHome → Tautkan keluarga → Gold).  
**Sumber screenshot:** [prototype_home_ladder_navigator.html](file:///home/brenandacaesa/PROJECT/DWDG/report/prototype_home_ladder_navigator.html). Siapkan QR code ke demo jika diperbolehkan.

---

### SLIDE 8 — Implementation Roadmap
**Action title:** *Dijalankan bertahap dalam 3 fase selama 5 tahun: buktikan dulu, lalu skalakan.*

**Visual utama:** [gantt_chart_5_years.png](file:///home/brenandacaesa/PROJECT/DWDG/figure/gantt_chart_5_years.png)

| Fase | Periode | Fokus | Milestone Kunci |
| :--- | :--- | :--- | :--- |
| **1. Foundation** | 2026–2027 | Harmonize & Optimize | Dual-data engine, pilot kota, add-on OTT, Move Up 100K–250K |
| **2. Scale-Up** | H2 2027–H1 2029 | Move Up & Embed | Rollout nasional, Milestone Bronze–Silver–Gold, Move Up 450K |
| **3. Maturity** | 2029–2030 | Ekosistem H.O.M.E. penuh | FMC 78%+, Move Up 600K+, optimasi berbasis data |

**Strip GTM (1 baris per anak tangga):** H *"Pas Rumahnya, Pas Internetnya"* (kemitraan kos & developer) · O *"Upgrade Serunya, Bukan Harganya"* · M *"Kabel Fiber Sudah di Depan Rumahmu"* · E *"Satu Rumah, Satu Kuota Keluarga"*.

**3 risiko utama + mitigasi (kotak kecil):**
1. Kanibalisasi Orbit–IndiHome → aturan geospasial + harga per GB Orbit di atas IndiHome.
2. Gagal migrasi Move Up → zero-downtime + gratis pasang + tenure terbawa.
3. Beban BTS dari Orbit → BTS >65% utilisasi jadi prioritas ekspansi ODP & Move Up.

*(Matriks risiko lengkap di Appendix A6.)*

---

### SLIDE 9 — Impact & Measurement
**Action title:** *Dampak terukur: ARPU kembali ke Rp238,5K, FMC naik ke 73%, churn bulanan turun 45 bps.*

| KPI | Baseline 2025 | Fase 1 (2026–27) | Fase 2 (2027–29) | Fase 3 (2029–30) |
| :--- | :-: | :-: | :-: | :-: |
| ARPU IndiHome B2C | Rp213,5K | Rp224–229,8K | **Rp238,5K** | Rp245K+ |
| Migrasi Orbit → IndiHome (kumulatif) | – | 100–250K | **450K** | 600K+ |
| Penetrasi FMC | 59% | 65–68% | **73%** | 78%+ |
| Monthly churn | ~1,20% | −20 → −35 bps | **−45 bps** | −50 bps |
| Tambahan pendapatan (run-rate) | – | +Rp1,3–2,0 T | **+Rp3,1–3,6 T** | +Rp4 T+ |

**Callout rumus:** setiap +Rp1.000 ARPU × 10,32 Jt pelanggan × 12 bln ≈ **Rp0,124 T/thn** → +Rp25K ≈ **+Rp3,1 T/thn**.

**Leading indicators per anak tangga (cara mengukur):** H = % rumah sesuai rekomendasi segmen · O = take-rate add-on · M = konversi funnel eligible → terpasang · E = % rumah Silver/Gold.

> [!WARNING]
> Kedua deck referensi menampilkan **ROI, payback, dan B/C ratio**. Kita belum punya data biaya (CapEx/OpEx). Jika tim ingin menambahkannya, susun dari asumsi yang jelas (biaya benefit Milestone, subsidi pemasangan, pengembangan modul aplikasi, rekondisi modem) dan **tandai sebagai estimasi**. Jangan menampilkan angka biaya tanpa dasar.

---

### SLIDE 10 — Conclusion
**Action title:** *Dari pertumbuhan jumlah menjadi pertumbuhan nilai.*

- **Kiri — Recap 4 anak tangga** (ikon H · O · M · E + 1 kalimat masing-masing + kode A/B/C yang dijawab).
- **Tengah — Punchline:**
  > *"Masalah Telkomsel bukan kekurangan pelanggan, melainkan pelanggan yang masuk sebagai single-play tanpa tangga untuk naik. H.O.M.E. menempatkan setiap rumah di produk yang tepat, menaikkan nilainya, memindahkannya dari Orbit ke IndiHome saat siap, dan mengikatnya ke ekosistem keluarga."*
- **Kanan — Next step (CTA):** pilot Fase 1 di 2–3 kota dengan campuran zona fiber & non-fiber, ukur 4 leading indicator dalam 6 bulan.
- **Penutup visual:** logo + tagline *"Every Home, One Ladder Up."*

---

## 4. Appendix (Tidak Dihitung dalam 10 Slide)

| Kode | Isi | Sumber |
| :-: | :--- | :--- |
| **A1** | Data baseline lengkap 2023–2025 (pelanggan, ARPU, pendapatan, FMC) | [bedah_data_dan_masalah_dwdg.md](file:///home/brenandacaesa/PROJECT/DWDG/report/bedah_data_dan_masalah_dwdg.md) |
| **A2** | Detail 4 segmen: indikator geospasial & usage per segmen | Proposed_Solution §2 |
| **A3** | **SWOT → TOWS** H.O.M.E. (lihat draf di bawah) | Baru |
| **A4** | **Porter Five Forces** industri FBB Indonesia (ringkas) | Baru |
| **A5** | **Impact–Effort Matrix** — alasan urutan fase | Baru |
| **A6** | Matriks risiko lengkap (5 risiko) & mitigasi | Proposed_Solution §4B |
| **A7** | Benchmark kompetitor detail (XL, Indosat, ISP murni, T-Mobile/Verizon) | Proposed_Solution §4A |
| **A8** | Asumsi perhitungan KPI (base Orbit ~1,1–1,2 Jt, satuan churn bulanan, rumus ARPU) | Proposed_Solution §6A |

**Draf A3 — SWOT → TOWS**

| | **Opportunities:** permintaan broadband rumah tumbuh; area non-fiber masih luas; keluarga multi-SIM | **Threats:** perang harga ISP 1P; pesaing punya Fiber + FWA; beban jaringan seluler |
| :--- | :--- | :--- |
| **Strengths:** 10,32 Jt IndiHome; basis seluler & BTS terbesar; FMC 59%; MyTelkomsel | **S-O:** pakai data geospasial + usage untuk Harmonize & Move Up; Embed lewat basis seluler | **S-T:** Milestone Gold menaikkan switching cost di atas diskon pesaing |
| **Weaknesses:** ARPU turun; peran Orbit vs IndiHome kabur; 41% belum FMC | **W-O:** tangga Optimize mengubah 1P jadi 2P/3P tanpa menaikkan tarif dasar | **W-T:** aturan geospasial & harga per GB mencegah kanibalisasi |

**Draf A4 — Porter Five Forces (ringkas):** Rivalitas **tinggi** (perang harga 1P) · Daya tawar pembeli **tinggi** (biaya pindah rendah → dijawab Embed) · Ancaman substitusi **sedang** (hotspot seluler, FWA pesaing) · Ancaman pendatang baru **rendah–sedang** (butuh infrastruktur) · Daya tawar pemasok **rendah–sedang** (perangkat & konten OTT).

**Draf A5 — Impact–Effort:** Harmonize & Optimize = *quick win* (dampak tinggi, upaya rendah, pakai data yang sudah ada) → Fase 1 · Move Up & Embed = *strategic bet* (dampak tinggi, butuh ekspansi ODP & program loyalitas) → Fase 2–3.

---

## 5. Panduan Visual Deck

- **Rasio:** 16:9. **Font:** Plus Jakarta Sans / Poppins (judul Bold, isi Regular).
- **Warna:** merah Telkomsel `#E60012` (aksen & judul), navy `#0F172A` (teks), biru `#0EA5E9` = Orbit, hijau `#10B981` = IndiHome, emas `#FACC15` = Gold/Embed. Detail di [LOGO_DESIGN.md](file:///home/brenandacaesa/PROJECT/DWDG/design/LOGO_DESIGN.md).
- **Struktur tiap slide (ala Farrel):** label section kecil (merah, italic) → **action title** 1 kalimat → konten → sumber kecil di pojok kanan bawah → **footer nav**: *Background · Analysis · Strategy · Implementation · Conclusion* (yang aktif ditebalkan & digaris bawah).
- **Konsistensi warna anak tangga:** H biru · O hijau · M merah · E emas — dipakai sama di Slide 5, 6, 7, 8, 10.
- **Lencana root cause:** pil kecil `A` `B` `C` di pojok kanan atas Slide 5 & 6 (*"Root Cause Answered"*).
- **Aturan teks:** maksimal ~40 kata per blok; angka penting dibuat besar; hindari paragraf.
