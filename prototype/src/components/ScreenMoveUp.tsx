import React from 'react';
import { MoveUpState, StepKey } from '../types';

interface Props {
  move: MoveUpState;
  setMove: React.Dispatch<React.SetStateAction<MoveUpState>>;
  onNextStep: (step: StepKey) => void;
}

export const ScreenMoveUp: React.FC<Props> = ({ move, setMove, onNextStep }) => {
  const activeSignalsCount =
    (move.sig1FiberReady ? 1 : 0) +
    (move.sig2HighUsage ? 1 : 0) +
    (move.sig3TenureMet ? 1 : 0);

  const score = activeSignalsCount === 3 ? 100 : activeSignalsCount === 2 ? 67 : activeSignalsCount === 1 ? 34 : 0;
  const isReady = activeSignalsCount === 3;
  const dashOffset = 188.5 - (188.5 * score) / 100;

  return (
    <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
      {/* 3-Signal Migration Readiness Radar Widget */}
      <div className="bg-surface-container-lowest rounded-xl shadow-md p-4 flex flex-col gap-3.5 border border-slate-100">
        <div className="flex items-center justify-between bg-surface-container-low rounded-xl p-3.5">
          <div className="flex flex-col gap-0.5 pr-2">
            <div className="flex items-center gap-1.5">
              <span
                className={`material-symbols-outlined text-[19px] ${
                  isReady ? 'text-secondary' : 'text-amber-600'
                }`}
              >
                radar
              </span>
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  isReady ? 'text-secondary' : 'text-amber-700'
                }`}
              >
                Radar Kesiapan Migrasi (Klik Sinyal untuk Uji)
              </span>
            </div>
            <span className="font-outfit text-base font-extrabold text-on-surface">
              {isReady
                ? '100% Siap Naik Kelas ke IndiHome!'
                : `Tetap di Orbit Dulu (${activeSignalsCount}/3 Sinyal)`}
            </span>
            <span className="text-[11px] text-on-surface-variant">
              {isReady
                ? 'Seluruh 3 sinyal infrastruktur, usage & hunian terpenuhi.'
                : 'Guardrail H.O.M.E.: Pelanggan belum siap tidak dipaksa pindah ke Fiber.'}
            </span>
          </div>

          {/* Radial Circular Progress Meter */}
          <div className="relative flex-shrink-0 w-18 h-18 flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 72 72">
              <circle
                className="text-surface-variant fill-none"
                cx="36"
                cy="36"
                r="30"
                stroke="currentColor"
                strokeWidth="6"
              ></circle>
              <circle
                className={`${isReady ? 'text-secondary' : 'text-amber-500'} fill-none transition-all duration-300`}
                cx="36"
                cy="36"
                r="30"
                stroke="currentColor"
                strokeDasharray="188.5"
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                strokeWidth="6"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-outfit text-sm font-extrabold text-on-surface">{score}%</span>
              <span className="text-[9px] font-bold text-on-surface-variant -mt-0.5">SKOR</span>
            </div>
          </div>
        </div>

        {/* 3 Clickable Diagnostic Signals */}
        <div className="space-y-2.5">
          {/* Signal 1: Fiber-Ready ODP */}
          <div
            onClick={() => setMove((m) => ({ ...m, sig1FiberReady: !m.sig1FiberReady }))}
            className={`cursor-pointer p-3 rounded-xl flex items-start gap-3 transition-all border ${
              move.sig1FiberReady
                ? 'bg-surface-container-low border-secondary/40'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}
          >
            <div
              className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                move.sig1FiberReady
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">settings_input_hdmi</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-on-surface">
                  1. Sinyal Geospasial: ODP Fiber-Ready
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    move.sig1FiberReady
                      ? 'bg-secondary/15 text-secondary'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {move.sig1FiberReady ? 'TERPENUHI (ODP 12m)' : 'BELUM FIBER'}
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                Jaringan optik IndiHome (<strong>ODP-KBY-042</strong>) kini aktif 12 meter dari depan pagar rumah Anda (4 port kosong tersedia).
              </p>
            </div>
          </div>

          {/* Signal 2: High Orbit Cellular Usage */}
          <div
            onClick={() => setMove((m) => ({ ...m, sig2HighUsage: !m.sig2HighUsage }))}
            className={`cursor-pointer p-3 rounded-xl flex items-start gap-3 transition-all border ${
              move.sig2HighUsage
                ? 'bg-surface-container-low border-primary-container/30'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}
          >
            <div
              className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                move.sig2HighUsage
                  ? 'bg-primary-fixed text-on-primary-fixed-variant'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">trending_up</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-on-surface">
                  2. Sinyal Usage Telemetry: Trafik Tinggi
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    move.sig2HighUsage
                      ? 'bg-primary-fixed text-on-primary-fixed-variant'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {move.sig2HighUsage ? 'TERPENUHI (>150 GB/bln)' : 'PEMAKAIAN RENDAH'}
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                Pemakaian Orbit keluarga mencapai <strong>210 GB bulan lalu</strong> (2x isi ulang kuota). Naik ke IndiHome Fiber memberikan kuota <strong>Unlimited</strong> dengan biaya per GB jauh lebih hemat.
              </p>
            </div>
          </div>

          {/* Signal 3: Loyalty Tenure & Settled Dwelling */}
          <div
            onClick={() => setMove((m) => ({ ...m, sig3TenureMet: !m.sig3TenureMet }))}
            className={`cursor-pointer p-3 rounded-xl flex items-start gap-3 transition-all border ${
              move.sig3TenureMet
                ? 'bg-surface-container-low border-sky-400/40'
                : 'bg-slate-50 border-slate-200 opacity-70'
            }`}
          >
            <div
              className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                move.sig3TenureMet
                  ? 'bg-tertiary-fixed text-tertiary'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-on-surface">
                  3. Sinyal Hunian &amp; Tenure: Menetap &ge;6 Bln
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    move.sig3TenureMet
                      ? 'bg-tertiary-fixed text-tertiary'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {move.sig3TenureMet ? 'TERPENUHI (9 Bulan)' : 'MASIH SEWA SINGKAT'}
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                Masa aktif 9 bulan di Orbit <strong>tidak hangus (Tenure Carryover)</strong>—langsung membuka status <strong>🥈 Silver Upgrader</strong> &amp; <strong>Gratis Biaya Pasang Rp 500.000</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Zero-Downtime Orbit-to-IndiHome Upgrade Hero Card (Fixed Icon Glitch!) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF4D4D] via-[#E60012] to-primary-container text-white p-4 shadow-xl">
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[160px]">wifi_tethering</span>
        </div>

        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            <span>Jaminan Transisi Zero-Downtime</span>
          </div>

          <h2 className="font-outfit text-lg font-extrabold leading-snug text-white">
            Internet Orbit Tetap Menyala Sampai Lampu Optik IndiHome Hijau!
          </h2>

          <p className="text-xs text-white/90 leading-relaxed">
            Tidak ada internet mati walau 1 detik. Koneksi Orbit Anda tetap aktif selama masa tunggu hingga teknisi selesai memasang IndiHome di rumah.
          </p>

          {/* Visual Live State Simulation (Clean valid icons!) */}
          <div className="p-3 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-between gap-2 my-1 border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white text-primary-container flex items-center justify-center shadow shrink-0">
                <span className="material-symbols-outlined text-[18px]">cell_wifi</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white">Telkomsel Orbit</span>
                <span className="text-[10px] font-semibold text-amber-200">Tetap Aktif Selama Transisi</span>
              </div>
            </div>

            <span className="material-symbols-outlined text-white text-[20px] shrink-0">sync_alt</span>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow shrink-0">
                <span className="material-symbols-outlined text-[18px]">router</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white">IndiHome Fiber</span>
                <span className="text-[10px] font-semibold text-emerald-200">Instalasi Ekspres</span>
              </div>
            </div>
          </div>

          {/* Bonus Offer Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-primary-container text-[10px] font-bold shadow-sm">
              <span className="material-symbols-outlined text-[13px]">card_giftcard</span>
              Gratis Biaya Pasang (Hemat Rp 500rb)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-primary-container text-[10px] font-bold shadow-sm">
              <span className="material-symbols-outlined text-[13px]">military_tech</span>
              Tenure Orbit Terbawa ke Silver
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-primary-container text-[10px] font-bold shadow-sm">
              <span className="material-symbols-outlined text-[13px]">autorenew</span>
              Trade-In / Backup Modem 1-Pintu
            </span>
          </div>
        </div>
      </div>

      {/* Technician Appointment & Slot Picker */}
      <div className="bg-surface-container-lowest rounded-xl shadow-md p-4 space-y-3 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary-container text-[20px]">engineering</span>
            <h3 className="font-outfit text-sm font-bold text-on-surface">
              Pilih Jadwal Teknisi IndiHome (1-Pintu)
            </h3>
          </div>
          <span className="text-[10px] font-bold text-secondary bg-secondary-container/60 px-2 py-0.5 rounded-full">
            Bebas Biaya Rp 500rb
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {[
            {
              slot: 1 as const,
              title: 'Besok Pagi, 10:00 - 12:00 WIB',
              sub: 'Slot Tercepat Tersedia (Dalam 24 Jam)',
              icon: 'calendar_today',
            },
            {
              slot: 2 as const,
              title: 'Besok Siang, 14:00 - 16:00 WIB',
              sub: 'Kedatangan Teknisi Ekspres Sore',
              icon: 'schedule',
            },
            {
              slot: 3 as const,
              title: 'Sabtu Akhir Pekan, 10:00 - 12:00 WIB',
              sub: 'Direkomendasikan saat seluruh keluarga di rumah',
              icon: 'weekend',
            },
          ].map((item) => {
            const selected = move.selectedSlot === item.slot;
            return (
              <button
                key={item.slot}
                type="button"
                onClick={() => setMove((m) => ({ ...m, selectedSlot: item.slot }))}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border ${
                  selected
                    ? 'bg-surface-container border-primary-container shadow-sm'
                    : 'bg-surface-container-low border-transparent hover:bg-surface-container/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      selected ? 'text-primary-container' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-on-surface">{item.title}</span>
                    <span className="text-[11px] text-on-surface-variant">{item.sub}</span>
                  </div>
                </div>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    selected
                      ? 'bg-primary-container text-white'
                      : 'bg-surface-variant text-transparent'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">check</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container-low text-[11px] text-on-surface-variant">
          <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
            recycling
          </span>
          <p className="leading-snug">
            <strong>Efisiensi Perangkat:</strong> Modem Orbit Anda dapat dijadikan <strong>Backup Failover Otomatis</strong> di rumah atau ditukar-tambah (<em>Modem Refurbishment Loop</em>) langsung melalui teknisi yang datang.
          </p>
        </div>
      </div>

      {/* Actions & Migration CTAs */}
      <div className="space-y-2 pt-1">
        <button
          type="button"
          onClick={() => onNextStep('E')}
          className="w-full h-12 px-4 rounded-xl bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span>Konfirmasi Move Up &amp; Buka [E] Embed Milestone</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>

        <div className="flex items-center justify-center gap-1.5 text-on-surface-variant pt-1">
          <span className="material-symbols-outlined text-[15px]">lock</span>
          <span className="text-[11px]">
            Rp 0 biaya instalasi • Tanpa penalti pembatalan Orbit • Masa aktif terbawa
          </span>
        </div>
      </div>
    </div>
  );
};
