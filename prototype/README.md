# MyTelkomsel H.O.M.E. — Home Ladder Navigator (Prototype)

Prototipe interaktif berbasis **TypeScript + React + Vite + Tailwind CSS** untuk **DWDG Mini Case Competition 2026**.  
Dirancang dengan tampilan **Mobile Super-App Container** (100% Customer View) yang siap di-deploy ke **Vercel** agar dewan juri dapat langsung mencoba seluruh alur **H.O.M.E. (Harmonize → Optimize → Move Up → Embed)**.

## Fitur & Layar Utama (4 Tahap H.O.M.E.)

1. **`[H]` Harmonize — Smart Household Profiler & Geospatial ODP Matchmaker**
   - Simulasi cek kesiapan jaringan ODP (*Zona Hijau Fiber-Ready* vs *Zona Biru Cellular-Only Orbit*).
   - 4 Segmen Rumah Tangga (*Flexible Starters*, *Flexible Growing Families*, *Stable Mainstream Families*, *Performance Households*) + kuesioner interaktif 6 pertanyaan dengan aturan *Anti-Cannibalization Guardrail*.
2. **`[O]` Optimize — Interactive Value Ladder Calculator**
   - Simulasi tangga nilai ARPU dari baseline *Connectivity Only* (**Rp 213.500/bln**) $\to$ *+Entertainment Bundle* (**Rp 230.000/bln**, Uplift **+Rp 16.500**) $\to$ *+Upgrade Tier / Gamer* (**Rp 250.000/bln**, Uplift **+Rp 36.500**) beserta add-on keluarga.
3. **`[M]` Move Up — Seamless Orbit-to-IndiHome Migration Tracker**
   - 3 indikator *Predictive Migration Radar* (*ODP Fiber-Ready <150m*, *Pemakaian Orbit >150 GB/bln*, *Tenure Menetap $\ge 6$ Bulan*).
   - *Zero-Downtime Guarantee* (modem Orbit tetap aktif selama instalasi IndiHome + bebas biaya pasang **Rp 500.000**) & klaim *Trade-In* modem Orbit.
4. **`[E]` Embed — Shopee-Style Household Loyalty Milestone & Switching Cost**
   - 3 Tier Milestone Keluarga: **🥉 Bronze Starter** (1 Nomor) $\to$ **🥈 Silver Upgrader** (2 Nomor) $\to$ **🥇 Gold Family VIP** ($\ge 3$ Nomor, benefit **Rp 145.000/bln**).
   - Dompet klaim *perks* bulanan + *Loss Aversion Calculator* yang memperlihatkan kerugian bersih **-Rp 120.000/bln** jika keluarga pindah ke WiFi kompetitor murah.

---

## Cara Menjalankan secara Lokal

```bash
cd prototype
npm install
npm run dev
```

## Cara Deploy ke Vercel

1. Push repository ke GitHub.
2. Buka [Vercel](https://vercel.com/new) dan pilih repository ini.
3. Pada bagian **Root Directory**, pilih `prototype`.
4. Klik **Deploy** (konfigurasi SPA sudah otomatis diatur melalui `vercel.json`).
