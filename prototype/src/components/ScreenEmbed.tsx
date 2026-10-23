import React from 'react';
import { EmbedState, StepKey } from '../types';

interface Props {
  embed: EmbedState;
  setEmbed: React.Dispatch<React.SetStateAction<EmbedState>>;
  onNextStep: (step: StepKey) => void;
}

const FAMILY_MEMBERS = [
  {
    name: 'Ibu Sari (Admin)',
    phone: '0811-9821-XXXX',
    role: 'Kepala Akun Rumah',
    avatarBg: 'bg-rose-100 text-rose-700',
    icon: 'face_3',
  },
  {
    name: 'Ayah Budi',
    phone: '0812-4412-XXXX',
    role: 'Anggota Keluarga',
    avatarBg: 'bg-sky-100 text-sky-700',
    icon: 'face_6',
  },
  {
    name: 'Anak 1 (Rian)',
    phone: '0821-7782-XXXX',
    role: 'Pelajar / Mahasiswa',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    icon: 'face',
  },
  {
    name: 'Anak 2 (Nisa)',
    phone: '0852-1904-XXXX',
    role: 'Pelajar Sekolah',
    avatarBg: 'bg-amber-100 text-amber-800',
    icon: 'face_4',
  },
  {
    name: 'Nenek / Kakek',
    phone: '0813-6610-XXXX',
    role: 'Keluarga Serumah',
    avatarBg: 'bg-purple-100 text-purple-700',
    icon: 'elderly',
  },
];

export const ScreenEmbed: React.FC<Props> = ({ embed, setEmbed, onNextStep }) => {
  const lines = embed.familyLines;

  // Milestone calculation aligned 100% with Proposed_Solution.md
  // 1 Line -> Bronze (~Rp15.000/bln)
  // 2 Lines -> Silver (~Rp65.000/bln)
  // >=3 Lines -> Gold VIP (Rp145.000/bln at 3 lines: Rp60K Quota + Rp45K Multi-OTT + Rp40K VIP Care & Speed Boost)
  const tierName =
    lines === 1
      ? '🥉 BRONZE STARTER'
      : lines === 2
      ? '🥈 SILVER UPGRADER'
      : '🥇 GOLD FAMILY VIP';

  const progressWidth = lines === 1 ? '25%' : lines === 2 ? '62%' : '100%';

  const sharedQuotaGB = lines === 1 ? 5 : lines === 2 ? 20 : lines * 10;
  const quotaVal = lines === 1 ? 10000 : lines === 2 ? 30000 : lines * 20000;
  const ottVal = lines === 1 ? 0 : lines === 2 ? 20000 : 45000;
  const vipVal = lines === 1 ? 5000 : lines === 2 ? 15000 : 40000;

  const totalBenefitMonthly = quotaVal + ottVal + vipVal; // At 3 lines = 60,000 + 45,000 + 40,000 = Rp 145.000 / bln!
  const competitorDiscount = 25000;
  const netSwitchingLossMonthly = totalBenefitMonthly - competitorDiscount; // At 3 lines = Rp 120.000 / bln!
  const yearlyBenefitProtected = totalBenefitMonthly * 12;

  const formatIDR = (val: number) => 'Rp ' + val.toLocaleString('id-ID');

  const toggleClaim = (key: string) => {
    setEmbed((prev) => ({
      ...prev,
      claimedPerks: {
        ...prev.claimedPerks,
        [key]: !prev.claimedPerks[key],
      },
    }));
  };

  return (
    <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
      {/* Gamified Milestone Tier Bar (Strictly 3 Tiers: Bronze -> Silver -> Gold VIP) */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-md flex flex-col gap-3.5 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500 text-[26px]">military_tech</span>
            <div>
              <div className="text-sm font-extrabold text-on-surface">H.O.M.E. Milestone Loyalty</div>
              <div className="text-[11px] text-on-surface-variant">
                Progres kasta loyalitas rumah tangga (Pendekatan Shopee Member)
              </div>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold">
            {tierName}
          </div>
        </div>

        {/* Horizontal 3-Tier Track */}
        <div className="relative pt-2 pb-1">
          <div className="absolute left-8 right-8 top-6 h-2 bg-surface-container-high rounded-full -translate-y-1/2 z-0"></div>
          <div
            className="absolute left-8 top-6 h-2 bg-gradient-to-r from-amber-600 via-slate-400 to-yellow-400 rounded-full -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `calc(${progressWidth} - 2rem)` }}
          ></div>

          <div className="relative z-10 grid grid-cols-3 gap-2">
            {/* Tier 1: Bronze */}
            <div
              onClick={() => setEmbed((p) => ({ ...p, familyLines: 1 }))}
              className="cursor-pointer flex flex-col items-center text-center gap-1"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${
                  lines === 1
                    ? 'bg-amber-600 text-white ring-4 ring-amber-200 scale-105'
                    : 'bg-secondary text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[19px]">
                  {lines > 1 ? 'done_all' : 'shield'}
                </span>
              </div>
              <span className="text-xs font-extrabold text-on-surface">🥉 Bronze</span>
              <span className="text-[10px] text-on-surface-variant leading-tight">
                Tahap H (1 No • ~Rp15rb)
              </span>
            </div>

            {/* Tier 2: Silver */}
            <div
              onClick={() => setEmbed((p) => ({ ...p, familyLines: 2 }))}
              className="cursor-pointer flex flex-col items-center text-center gap-1"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${
                  lines === 2
                    ? 'bg-slate-600 text-white ring-4 ring-slate-300 scale-105'
                    : lines > 2
                    ? 'bg-secondary text-white'
                    : 'bg-surface-container-high text-outline'
                }`}
              >
                <span className="material-symbols-outlined text-[19px]">
                  {lines > 2 ? 'done_all' : 'trending_up'}
                </span>
              </div>
              <span className="text-xs font-extrabold text-on-surface">🥈 Silver</span>
              <span className="text-[10px] text-on-surface-variant leading-tight">
                Tahap O/M (2 No • ~Rp65rb)
              </span>
            </div>

            {/* Tier 3: Gold VIP (Highest Tier!) */}
            <div
              onClick={() => setEmbed((p) => ({ ...p, familyLines: 3 }))}
              className="cursor-pointer flex flex-col items-center text-center gap-1"
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    lines >= 3
                      ? 'bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-400 text-amber-950 shadow-lg ring-4 ring-amber-200 scale-110'
                      : 'bg-surface-container-high text-outline'
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                </div>
              </div>
              <span
                className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                  lines >= 3 ? 'bg-amber-100 text-amber-900' : 'text-on-surface-variant'
                }`}
              >
                🥇 Gold VIP
              </span>
              <span className="text-[10px] font-bold text-on-surface leading-tight">
                Tahap E (&ge;3 No • Rp145rb+)
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Mission Prompt Box (No Diamond tier — Gold VIP is peak!) */}
        <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-1.5 border border-slate-200/70">
          <div className="flex justify-between items-center text-xs">
            <span className="text-on-surface font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-amber-600 text-[16px]">stars</span>
              {lines === 1
                ? 'Progres Misi: 1 / 3 Anak Tangga'
                : lines === 2
                ? 'Progres Misi: 2 / 3 Anak Tangga'
                : 'Milestone Puncak Tercapai (3 / 3)'}
            </span>
            <span className="text-primary-container font-extrabold text-[11px]">
              {lines === 1
                ? 'Misi Berikutnya: Silver'
                : lines === 2
                ? '1 Nomor Lagi ke Gold VIP!'
                : 'Level Tertinggi: Gold Family VIP'}
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-surface-container-high overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-primary-container to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: lines === 1 ? '34%' : lines === 2 ? '68%' : '100%' }}
            />
          </div>

          <p className="text-[11px] text-on-surface-variant leading-snug">
            {lines === 1 && (
              <>
                🎯 <strong>Misi ke Silver:</strong> Ambil paket <em>+Entertainment/Speed</em> (Optimize) atau migrasi Orbit ke IndiHome (Move Up) &amp; tautkan 2 nomor keluarga.
              </>
            )}
            {lines === 2 && (
              <>
                🔥 <strong>Tinggal 1 Langkah Lagi ke Gold VIP!</strong> Tautkan <strong>1 nomor HP anak/keluarga lagi</strong> untuk membuka Kuota Keluarga 30 GB/bln &amp; Teknisi VIP &lt;6 Jam.
              </>
            )}
            {lines >= 3 && (
              <>
                🎉 <strong>Selamat! Rumah tangga Anda berada di kasta tertinggi 🥇 Gold Family VIP.</strong> Pertahankan langganan aktif agar seluruh benefit <strong>{formatIDR(totalBenefitMonthly)}/bln</strong> tidak hangus.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Hub Nomor Keluarga (1 to 5 Lines Selector) */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-md flex flex-col gap-3.5 border border-slate-100">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary-container text-[21px]">diversity_1</span>
            <h2 className="font-outfit text-sm font-bold text-on-surface">
              Hub Nomor Seluler Keluarga (Horizontal FMC)
            </h2>
          </div>
          <p className="text-xs text-on-surface-variant">
            Klik jumlah nomor anggota keluarga yang ditautkan ke akun rumah untuk simulasi benefit &amp; proteksi churn:
          </p>
        </div>

        {/* 1-5 Number Selector Buttons */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-on-surface-variant font-semibold">Jumlah Nomor Terhubung:</span>
            <span className="font-outfit font-extrabold text-primary-container text-sm">
              {lines} Nomor ({lines === 1 ? 'Bronze' : lines === 2 ? 'Silver' : 'Gold VIP'})
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {([1, 2, 3, 4, 5] as const).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setEmbed((p) => ({ ...p, familyLines: num }))}
                className={`py-2.5 rounded-xl font-outfit text-sm font-extrabold transition-all ${
                  lines === num
                    ? 'bg-primary-container text-white shadow-md scale-[1.02]'
                    : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {num} {num === 3 ? '★' : ''}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-on-surface-variant px-1">
            <span>1 No (Bronze)</span>
            <span>2 No (Silver)</span>
            <span className="font-bold text-amber-700">&ge;3 No (Ideal: Gold VIP)</span>
          </div>
        </div>

        {/* Active Family Member Cards */}
        <div className="grid grid-cols-2 gap-2">
          {FAMILY_MEMBERS.slice(0, lines).map((member, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container-low border border-slate-200/60"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${member.avatarBg}`}
              >
                <span className="material-symbols-outlined text-[20px]">{member.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-on-surface truncate">{member.name}</span>
                <span className="text-[10px] text-on-surface-variant truncate">{member.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Quota Highlight Banner */}
        <div className="rounded-xl p-3 bg-gradient-to-br from-secondary-container/40 via-surface-container-low to-secondary-container/20 flex items-start gap-2.5 border border-secondary/20">
          <div className="p-2 rounded-xl bg-secondary text-white shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[19px]">group_add</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-on-surface">
              {sharedQuotaGB} GB Kuota Keluarga Bersama (Senilai {formatIDR(quotaVal)}/bln)
            </span>
            <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
              Dapat dipakai bersama oleh seluruh {lines} nomor HP anggota keluarga di luar rumah + bebas telepon sekeluarga 24 jam.
            </p>
          </div>
        </div>
      </div>

      {/* Shopee-Style Monthly Claimable Perk Wallet */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-md flex flex-col gap-3 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[22px]">
              account_balance_wallet
            </span>
            <div>
              <h2 className="font-outfit text-sm font-bold text-on-surface">
                Dompet Klaim Benefit Bulanan ({tierName})
              </h2>
              <span className="text-[11px] text-on-surface-variant">
                Total nilai benefit bulanan keluarga: <strong>{formatIDR(totalBenefitMonthly)}/bln</strong>
              </span>
            </div>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-bold shrink-0">
            Reset Tiap Tanggal 1
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {/* Perk 1: Shared Family Quota */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">cell_tower</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-on-surface truncate">
                  1. Kuota Keluarga Bersama ({sharedQuotaGB} GB/bln)
                </span>
                <span className="text-[11px] text-secondary font-bold">
                  Senilai {formatIDR(quotaVal)} / bulan
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleClaim('quota')}
              className={`text-[11px] px-3 py-1.5 rounded-lg shrink-0 font-bold flex items-center gap-1 transition-all ${
                embed.claimedPerks['quota']
                  ? 'bg-surface-container-highest text-on-surface-variant'
                  : 'bg-primary-container text-white shadow-sm'
              }`}
            >
              {embed.claimedPerks['quota'] ? (
                <>
                  <span className="material-symbols-outlined text-[13px]">check</span> Diklaim
                </>
              ) : (
                'Klaim'
              )}
            </button>
          </div>

          {/* Perk 2: Multi-OTT Family Entertainment */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="w-9 h-9 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">smart_display</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-on-surface truncate">
                  2. Bundling Hiburan Multi-OTT (TV &amp; HP)
                </span>
                <span className="text-[11px] text-on-surface-variant font-semibold">
                  {ottVal > 0
                    ? `Vidio / Disney+ / Viu (Senilai ${formatIDR(ottVal)}/bln)`
                    : 'Terbuka di Milestone Silver & Gold VIP'}
                </span>
              </div>
            </div>
            <button
              type="button"
              disabled={ottVal === 0}
              onClick={() => toggleClaim('ott')}
              className={`text-[11px] px-3 py-1.5 rounded-lg shrink-0 font-bold flex items-center gap-1 transition-all ${
                ottVal === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : embed.claimedPerks['ott']
                  ? 'bg-surface-container-highest text-on-surface-variant'
                  : 'bg-primary-container text-white shadow-sm'
              }`}
            >
              {ottVal === 0 ? (
                'Terkunci'
              ) : embed.claimedPerks['ott'] ? (
                <>
                  <span className="material-symbols-outlined text-[13px]">check</span> Diklaim
                </>
              ) : (
                'Klaim'
              )}
            </button>
          </div>

          {/* Perk 3: Speed Boost & VIP Care */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-on-surface truncate">
                  3. Speed Boost +10 Mbps &amp; VIP Care &lt;6 Jam
                </span>
                <span className="text-[11px] text-on-surface-variant font-semibold">
                  Prioritas Teknisi &amp; Poin (Senilai {formatIDR(vipVal)}/bln)
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggleClaim('vip')}
              className={`text-[11px] px-3 py-1.5 rounded-lg shrink-0 font-bold flex items-center gap-1 transition-all ${
                embed.claimedPerks['vip']
                  ? 'bg-surface-container-highest text-on-surface-variant'
                  : 'bg-primary-container text-white shadow-sm'
              }`}
            >
              {embed.claimedPerks['vip'] ? (
                <>
                  <span className="material-symbols-outlined text-[13px]">check</span> Diklaim
                </>
              ) : (
                'Klaim'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* High-Impact Loss Aversion Calculator Card (Unified with Proposed_Solution.md!) */}
      <div className="rounded-2xl p-4 bg-error-container text-on-error-container shadow-xl flex flex-col gap-3 relative overflow-hidden border border-error/25">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-[24px]">warning</span>
          <div className="flex flex-col">
            <span className="text-[10px] text-error font-extrabold tracking-wider uppercase">
              Kalkulator "Biaya Berpindah" (Loss Aversion ala Shopee)
            </span>
            <h3 className="font-outfit text-sm font-extrabold text-on-surface leading-tight">
              Simulasi Kerugian Jika Pindah ke Wi-Fi Kompetitor
            </h3>
          </div>
        </div>

        {/* Big Loss Callout Box */}
        <div className="bg-white rounded-xl p-3.5 text-center shadow-sm border border-error/15">
          <span className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider block">
            {netSwitchingLossMonthly > 0
              ? 'Total Kerugian Bersih Keluarga Jika Cabut Langganan:'
              : 'Selisih Nilai Saat Ini (Naik ke Silver/Gold untuk Proteksi Penuh):'}
          </span>
          <div className="font-outfit text-2xl font-extrabold text-error mt-0.5 tabular-nums">
            {netSwitchingLossMonthly > 0
              ? `Rugi -${formatIDR(netSwitchingLossMonthly)} / bulan`
              : `Benefit Aktif: ${formatIDR(totalBenefitMonthly)} / bulan`}
          </div>
          <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
            Walaupun ISP kompetitor menawarkan diskon tarif <strong>Rp 25.000/bulan</strong>, keluarga Anda kehilangan benefit ekosistem senilai <strong>{formatIDR(totalBenefitMonthly)}/bulan</strong> (<strong>{formatIDR(yearlyBenefitProtected)}/tahun</strong> hangus seketika!).
          </p>
        </div>

        {/* Breakdown of What Gets Forfeited */}
        <div className="space-y-1.5 text-xs">
          <span className="text-[10px] font-extrabold text-on-error-container uppercase tracking-wider block">
            Fasilitas Keluarga yang Langsung Gugur Jika Pindah ISP:
          </span>

          <div className="bg-white/90 p-2.5 rounded-xl flex items-start gap-2 text-on-surface">
            <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">cancel</span>
            <span className="text-[11px] leading-snug">
              <strong>Kuota Keluarga {sharedQuotaGB} GB ({lines} Nomor HP) Hangus:</strong> Harus beli paket data ketengan seharga <strong>{formatIDR(quotaVal)}/bln</strong>.
            </span>
          </div>

          <div className="bg-white/90 p-2.5 rounded-xl flex items-start gap-2 text-on-surface">
            <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">cancel</span>
            <span className="text-[11px] leading-snug">
              <strong>Akses Multi-OTT Keluarga Terputus:</strong> Kehilangan tayangan hiburan keluarga senilai <strong>{formatIDR(ottVal)}/bln</strong>.
            </span>
          </div>

          <div className="bg-white/90 p-2.5 rounded-xl flex items-start gap-2 text-on-surface">
            <span className="material-symbols-outlined text-error text-[16px] shrink-0 mt-0.5">cancel</span>
            <span className="text-[11px] leading-snug">
              <strong>Status {tierName} &amp; Tenure Gugur ke Nol:</strong> Kehilangan Speed Boost +10 Mbps &amp; garansi teknisi VIP &lt;6 jam senilai <strong>{formatIDR(vipVal)}/bln</strong>.
            </span>
          </div>
        </div>

        {/* Positive Retention Summary */}
        <div className="bg-white rounded-xl p-3 flex items-center gap-2.5 border border-secondary/30">
          <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px]">savings</span>
          </div>
          <p className="text-[11px] text-on-surface leading-snug">
            <strong className="text-secondary">Keputusan Cerdas:</strong> Bertahan di ekosistem <strong>MyTelkomsel H.O.M.E.</strong> mengamankan nilai manfaat <strong>{formatIDR(yearlyBenefitProtected)} per tahun</strong> bagi keluarga Anda!
          </p>
        </div>
      </div>

      {/* Bottom Action CTA */}
      <div className="space-y-2 pt-1">
        <button
          type="button"
          onClick={() => onNextStep('H')}
          className="w-full h-12 px-4 rounded-xl bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>Kunci Perlindungan Gold VIP (Kembali ke [H] Awal)</span>
        </button>
      </div>
    </div>
  );
};
