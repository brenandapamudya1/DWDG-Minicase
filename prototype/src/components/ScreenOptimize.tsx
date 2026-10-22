import React from 'react';
import { OptimizeState, StepKey } from '../types';

interface Props {
  opt: OptimizeState;
  setOpt: React.Dispatch<React.SetStateAction<OptimizeState>>;
  onNextStep: (step: StepKey) => void;
}

export const ScreenOptimize: React.FC<Props> = ({ opt, setOpt, onNextStep }) => {
  const tierConfig = {
    1: {
      title: 'Tangga 1: Connectivity Only (1P Basic)',
      price: 213500,
      retailValue: 250000,
      upliftText: 'Baseline ARPU (Rp 213.500)',
      poin: 100,
      milestone: '🥉 Bronze Starter',
    },
    2: {
      title: 'Tangga 2: + Entertainment Bundle',
      price: 230000,
      retailValue: 315000,
      upliftText: 'Uplift Nilai +Rp 16.500 / bln',
      poin: 250,
      milestone: '🥈 Silver Upgrader',
    },
    3: {
      title: 'Tangga 3: + Upgrade Speed / Gamer Tier',
      price: 250000,
      retailValue: 390000,
      upliftText: 'Uplift Nilai +Rp 36.500 / bln',
      poin: 400,
      milestone: '🥈 Silver Plus',
    },
  }[opt.selectedTier];

  const addonTotal =
    (opt.addonOrbitFallback ? 25000 : 0) + (opt.addonCloudCctv ? 20000 : 0);
  const totalMonthly = tierConfig.price + addonTotal;
  const totalSavings = tierConfig.retailValue - tierConfig.price;

  const formatIDR = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  return (
    <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
      {/* Header Sub-bar Context */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-1 border border-slate-100">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wide">
            Tahap 2 dari 4 • [O] Optimize
          </span>
          <span className="text-[11px] text-on-surface-variant font-semibold">• Vertical Value Ladder</span>
        </div>
        <h1 className="font-outfit text-lg font-bold text-on-surface tracking-tight mt-0.5">
          Optimize Your Monthly Value Ladder
        </h1>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Menaikkan nilai per koneksi secara <strong>vertikal</strong> (bukan menaikkan tarif dasar paksa), melainkan melalui tangga benefit yang relevan dengan kebiasaan rumah tangga.
        </p>
      </div>

      {/* Live Value & ARPU Uplift Sticky Summary Card */}
      <div className="bg-gradient-to-r from-surface-container-lowest via-surface-container-low to-surface-container-lowest p-4 rounded-xl shadow-md flex flex-col gap-2 border border-primary-container/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-secondary font-bold">
              Konfigurasi Tangga Nilai Aktif
            </span>
          </div>
          <span className="text-[11px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
            Hemat {formatIDR(totalSavings)}/bln
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <div>
            <h2 className="font-outfit text-sm font-bold text-on-surface leading-tight">
              {tierConfig.title}
            </h2>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              Nilai Eceran Terpisah: <span className="line-through">{formatIDR(tierConfig.retailValue)}</span> •{' '}
              <strong className="text-secondary">{tierConfig.upliftText}</strong>
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-outfit text-xl text-primary-container font-extrabold block tabular-nums">
              {formatIDR(totalMonthly)}
            </span>
            <span className="text-[11px] text-on-surface-variant">/ bulan</span>
          </div>
        </div>

        <div className="pt-1.5 flex items-center justify-between bg-surface-container/60 rounded-lg px-2.5 py-1.5 text-[11px]">
          <div className="flex items-center gap-1 text-on-surface font-semibold">
            <span className="material-symbols-outlined text-[15px] text-amber-500 material-fill">stars</span>
            <span>+{tierConfig.poin} POIN • Buka {tierConfig.milestone}</span>
          </div>
          <span className="text-secondary font-bold flex items-center gap-0.5">
            SLA 99,9%
            <span className="material-symbols-outlined text-[14px]">verified</span>
          </span>
        </div>
      </div>

      {/* 3 Value Ladder Cards */}
      <div className="flex flex-col gap-3.5">
        {/* Card 1: Tier 1 Connectivity Only (Baseline Rp213.500) */}
        <div
          onClick={() => setOpt((p) => ({ ...p, selectedTier: 1 }))}
          className={`cursor-pointer bg-surface-container-lowest p-4 rounded-xl transition-all flex flex-col gap-2.5 border ${
            opt.selectedTier === 1
              ? 'border-2 border-primary-container shadow-lg'
              : 'border-slate-200 shadow-sm hover:border-slate-300'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase mb-1">
                Tangga 1 • Baseline 1P (Bronze)
              </span>
              <h3 className="font-outfit text-base font-bold text-on-surface">
                Connectivity Only (Essential)
              </h3>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Koneksi dasar rumah tangga untuk browsing, media sosial &amp; belajar harian.
              </p>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                opt.selectedTier === 1
                  ? 'bg-primary-container text-white shadow-sm'
                  : 'bg-surface-container text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">check</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[19px]">speed</span>
              </div>
              <div>
                <div className="font-outfit text-sm font-bold text-on-surface leading-none">30–50 Mbps</div>
                <div className="text-[10px] text-on-surface-variant">Internet Rumah Dasar</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[19px]">router</span>
              </div>
              <div>
                <div className="font-outfit text-sm font-bold text-on-surface leading-none">WiFi 5</div>
                <div className="text-[10px] text-on-surface-variant">1–5 Perangkat</div>
              </div>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-0.5">
            <div>
              <span className="font-outfit text-xl font-extrabold text-on-surface">Rp 213.500</span>
              <span className="text-xs text-on-surface-variant"> / bln (Baseline ARPU 2025)</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              🥉 Bronze Starter
            </span>
          </div>

          <div className="flex flex-col gap-1 text-xs text-on-surface pt-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Jaringan Fiber / Orbit Stabil + CS 24/7 via MyTelkomsel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Bonus bayar tepat waktu (Voucher Kuota Darurat 5 GB)</span>
            </div>
          </div>
        </div>

        {/* Card 2: Tier 2 + Entertainment Bundle (Rp230.000 | +Rp16,5K Uplift) */}
        <div
          onClick={() => setOpt((p) => ({ ...p, selectedTier: 2 }))}
          className={`cursor-pointer p-4 rounded-2xl transition-all relative flex flex-col gap-2.5 bg-gradient-to-b from-primary-fixed/30 via-white to-white border ${
            opt.selectedTier === 2
              ? 'border-2 border-primary-container shadow-xl'
              : 'border-slate-200 shadow-md hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-primary-container text-white text-[10px] font-bold shadow-sm">
              <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
              PALING POPULER • PILIHAN KELUARGA
            </span>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                opt.selectedTier === 2
                  ? 'bg-primary-container text-white shadow-sm'
                  : 'bg-surface-container text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">check</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-outfit text-base font-extrabold text-on-surface">
                Tangga 2: + Entertainment Bundle
              </h3>
              <span className="text-[10px] text-secondary bg-secondary-container/60 px-2 py-0.5 rounded font-bold">
                +Rp 16,5rb/bln
              </span>
            </div>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Dipicu saat trafik streaming video keluarga tinggi di jam malam (19.00–22.00).
            </p>
          </div>

          {/* 3-Column Micro Dashboard */}
          <div className="grid grid-cols-3 gap-1.5 bg-surface-container-low p-2.5 rounded-xl">
            <div className="flex flex-col items-center justify-center text-center p-1.5 bg-white rounded-lg">
              <span className="material-symbols-outlined text-[18px] text-secondary">bolt</span>
              <span className="font-outfit text-xs font-extrabold text-on-surface">75–100 Mbps</span>
              <span className="text-[10px] text-on-surface-variant">Anti-Buffering</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-1.5 bg-white rounded-lg">
              <span className="material-symbols-outlined text-[18px] text-tertiary">devices</span>
              <span className="font-outfit text-xs font-extrabold text-on-surface">6–10 Alat</span>
              <span className="text-[10px] text-on-surface-variant">Simultan 4K</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-1.5 bg-white rounded-lg">
              <span className="material-symbols-outlined text-[18px] text-primary-container">live_tv</span>
              <span className="font-outfit text-xs font-extrabold text-on-surface">Multi-OTT</span>
              <span className="text-[10px] text-on-surface-variant">TV &amp; Smartphone</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between py-0.5">
            <div>
              <span className="line-through text-on-surface-variant text-xs">Rp 315.000</span>
              <div className="flex items-baseline gap-1">
                <span className="font-outfit text-2xl text-primary-container font-extrabold">
                  Rp 230.000
                </span>
                <span className="text-xs text-on-surface-variant">/ bln</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-slate-800 bg-slate-200 px-2.5 py-1 rounded-lg">
              🥈 Naik ke Silver
            </span>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-on-surface pt-0.5">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">
                verified
              </span>
              <span>
                <strong>Bundel Hiburan Keluarga:</strong> Akses Vidio / Disney+ Hotstar / Viu (Hemat &gt;50% dibanding beli ketengan)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-[16px] shrink-0 mt-0.5">
                verified
              </span>
              <span>
                <strong>Loyalty Speed Boost:</strong> Gratis kenaikan kecepatan tahunan +10 Mbps permanen
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Tier 3 + Upgrade Speed / Gamer Tier (Rp250.000 | +Rp36,5K Uplift) */}
        <div
          onClick={() => setOpt((p) => ({ ...p, selectedTier: 3 }))}
          className={`cursor-pointer bg-surface-container-lowest p-4 rounded-xl transition-all flex flex-col gap-2.5 border ${
            opt.selectedTier === 3
              ? 'border-2 border-primary-container shadow-lg'
              : 'border-slate-200 shadow-sm hover:border-slate-300'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase mb-1">
                Tangga 3 • Performance &amp; Pro Gaming (+Rp 36,5rb/bln)
              </span>
              <h3 className="font-outfit text-base font-bold text-on-surface">
                Tangga 3: + Upgrade Tier (HSMP / Gamer)
              </h3>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Dipicu saat &ge;8 perangkat aktif bersamaan, WFH upload besar, atau gaming kompetitif.
              </p>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                opt.selectedTier === 3
                  ? 'bg-primary-container text-white shadow-sm'
                  : 'bg-surface-container text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">check</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2.5 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[19px]">sports_esports</span>
              </div>
              <div>
                <div className="font-outfit text-sm font-bold text-on-surface leading-none">150–200 Mbps</div>
                <div className="text-[10px] text-secondary font-bold">Simetris 1:1 • &lt;10ms Ping</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[19px]">wifi</span>
              </div>
              <div>
                <div className="font-outfit text-sm font-bold text-on-surface leading-none">WiFi 6 Mesh</div>
                <div className="text-[10px] text-on-surface-variant">&gt;10 Perangkat Aktif</div>
              </div>
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-0.5">
            <div>
              <span className="line-through text-on-surface-variant text-xs mr-1.5">Rp 390.000</span>
              <span className="font-outfit text-xl font-extrabold text-on-surface">Rp 250.000</span>
              <span className="text-xs text-on-surface-variant"> / bln</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-900">
              🥈 Silver Plus
            </span>
          </div>

          <div className="flex flex-col gap-1 text-xs text-on-surface pt-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Prioritas trafik Gaming &amp; Video Conference tanpa throttling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              <span>Garansi penanganan teknisi VIP &lt;6 jam &amp; Multi-OTT lengkap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Add-Ons */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary-container text-[20px]">extension</span>
            <h3 className="font-outfit text-sm font-bold text-on-surface">
              Add-On Opsional (Pendorong Nilai Tambahan)
            </h3>
          </div>
          <span className="text-[11px] text-on-surface-variant">Fleksibel</span>
        </div>

        {/* Add-on 1: Orbit Auto-Failover */}
        <div
          onClick={() => setOpt((p) => ({ ...p, addonOrbitFallback: !p.addonOrbitFallback }))}
          className="cursor-pointer p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 border border-slate-200/60"
        >
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">cell_tower</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-on-surface">Orbit 4G/5G Seamless Backup</span>
                <span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded font-bold">
                  Always On
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-snug mt-0.5">
                Otomatis beralih ke jaringan seluler Orbit dalam 1 detik jika kabel fiber terganggu.
              </p>
              <span className="text-xs font-bold text-primary-container mt-1 inline-block">
                +Rp 25.000 / bln
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Toggle Orbit Backup"
            className={`w-11 h-6 rounded-full transition-colors p-0.5 shrink-0 ${
              opt.addonOrbitFallback ? 'bg-secondary' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                opt.addonOrbitFallback ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Add-on 2: Cloud CCTV */}
        <div
          onClick={() => setOpt((p) => ({ ...p, addonCloudCctv: !p.addonCloudCctv }))}
          className="cursor-pointer p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 border border-slate-200/60"
        >
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">videocam</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-on-surface">Smart Home Cloud CCTV 30-Hari</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-snug mt-0.5">
                Penyimpanan rekaman kamera keamanan rumah terenkripsi di cloud Telkomsel.
              </p>
              <span className="text-xs font-bold text-primary-container mt-1 inline-block">
                +Rp 20.000 / bln
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Toggle Cloud CCTV"
            className={`w-11 h-6 rounded-full transition-colors p-0.5 shrink-0 ${
              opt.addonCloudCctv ? 'bg-secondary' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                opt.addonCloudCctv ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Bottom Action Card */}
      <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
              Estimasi Tagihan Bulanan Rumah
            </span>
            <div className="font-outfit text-2xl font-extrabold text-primary-container tabular-nums">
              {formatIDR(totalMonthly)}
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block text-[10px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">
              Tanpa Kenaikan Tarif Dasar Paksa
            </span>
            <div className="text-[11px] text-on-surface-variant mt-0.5">Membuka {tierConfig.milestone}</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNextStep('M')}
          className="w-full h-12 rounded-xl bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span>Kunci Paket &amp; Cek Radar [M] Move Up</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
