import React from 'react';
import { HouseholdProfile, SegmentId, StepKey } from '../types';

interface Props {
  profile: HouseholdProfile;
  setProfile: React.Dispatch<React.SetStateAction<HouseholdProfile>>;
  onNextStep: (step: StepKey) => void;
}

interface SegmentInfo {
  id: SegmentId;
  name: string;
  shortLabel: string;
  badgeText: string;
  icon: string;
  subtitle: string;
  tagline: string;
  recommendedProduct: string;
  basePrice: string;
  originalPrice: string;
  matchScore: string;
  perks: string[];
  geoNote: string;
}

export const ScreenHarmonize: React.FC<Props> = ({ profile, setProfile, onNextStep }) => {
  const applyPreset = (id: SegmentId) => {
    if (id === 'starter') {
      setProfile({
        coverage: 'orbit',
        presetId: 'starter',
        q1Dwelling: 'flex',
        q2Members: '1-2',
        q3Activities: ['4K Streaming'],
        q4CurrentConn: 'none',
        q5PeakHour: 'malam',
        q6Criticality: 'standar',
      });
    } else if (id === 'growing') {
      setProfile({
        coverage: 'orbit',
        presetId: 'growing',
        q1Dwelling: 'mid',
        q2Members: '3-4',
        q3Activities: ['4K Streaming', 'WFH & Sekolah'],
        q4CurrentConn: 'orbit',
        q5PeakHour: 'malam',
        q6Criticality: 'penting',
      });
    } else if (id === 'mainstream') {
      setProfile({
        coverage: 'fiber',
        presetId: 'mainstream',
        q1Dwelling: 'stable',
        q2Members: '3-4',
        q3Activities: ['4K Streaming', 'WFH & Sekolah'],
        q4CurrentConn: 'indihome',
        q5PeakHour: 'malam',
        q6Criticality: 'penting',
      });
    } else {
      setProfile({
        coverage: 'fiber',
        presetId: 'performance',
        q1Dwelling: 'stable',
        q2Members: '5+',
        q3Activities: ['4K Streaming', 'WFH & Sekolah', 'Cloud Gaming', 'CCTV & Smart IoT'],
        q4CurrentConn: 'indihome',
        q5PeakHour: 'malam',
        q6Criticality: 'kritis',
      });
    }
  };

  const toggleActivity = (act: string) => {
    setProfile((prev) => {
      const exists = prev.q3Activities.includes(act);
      const nextActs = exists
        ? prev.q3Activities.filter((a) => a !== act)
        : [...prev.q3Activities, act];
      return { ...prev, q3Activities: nextActs.length ? nextActs : [act] };
    });
  };

  // Compute dynamic segment based on Dual-Data (Geospatial + Quiz Telemetry)
  const computeRecommendation = (): SegmentInfo => {
    const isFlexibleDwelling = profile.q1Dwelling === 'flex' || profile.q1Dwelling === 'mid';
    const intensityScore =
      (profile.q2Members === '5+' ? 2 : profile.q2Members === '3-4' ? 1 : 0) +
      (profile.q3Activities.length >= 3 ? 2 : profile.q3Activities.length === 2 ? 1 : 0) +
      (profile.q6Criticality === 'kritis' ? 2 : profile.q6Criticality === 'penting' ? 1 : 0);

    const isFiber = profile.coverage === 'fiber';

    if (profile.q1Dwelling === 'flex' && intensityScore <= 2) {
      return {
        id: 'starter',
        name: 'Flexible Starters',
        shortLabel: 'Kos / Kontrakan',
        badgeText: '1-2 Org',
        icon: 'laptop_mac',
        subtitle: 'Hunian fleksibel, praktis dibawa pindah',
        tagline: '"Instant & Movable Home Wi-Fi"',
        recommendedProduct: 'Telkomsel Orbit (Plug & Play 4G/5G)',
        basePrice: 'Rp 135.000',
        originalPrice: 'Rp 175.000',
        matchScore: '99% COCOK',
        perks: [
          'Langsung aktif dalam 5 menit tanpa tarik kabel fisik atau bor dinding',
          'Fleksibel dibawa pindah kos/kontrakan kapan saja tanpa penalti kontrak',
          'Otomatis terdaftar di program Milestone 🥉 Bronze Starter (+Bonus Kuota 5 GB)',
          'Prioritas naik kelas (Move Up) ke IndiHome Fiber saat pindah ke rumah tetap',
        ],
        geoNote: 'Mesin Orbit dipilih agar tidak terjadi tumpang-tindih dengan IndiHome pada hunian sewa jangka pendek.',
      };
    }

    if (isFlexibleDwelling && intensityScore > 2) {
      return {
        id: 'growing',
        name: 'Flexible Growing Families',
        shortLabel: 'Keluarga Berkembang',
        badgeText: 'Target Move Up',
        icon: 'trending_up',
        subtitle: 'Trafik tumbuh (100-250 GB), siap naik ke Fiber',
        tagline: '"Flexible Connectivity that Can Grow"',
        recommendedProduct: isFiber
          ? 'Orbit → Siap Naik Kelas ke IndiHome Fiber'
          : 'Telkomsel Orbit + Antrean Prioritas Move Up',
        basePrice: 'Rp 213.500',
        originalPrice: 'Rp 265.000',
        matchScore: '97% COCOK',
        perks: [
          'Terlayani instan hari ini dengan Orbit High-Quota untuk 4–6 perangkat keluarga',
          'Gratis Biaya Pasang IndiHome Rp500.000 saat naik kelas (Move Up) ke Fiber',
          'Masa loyalitas (tenure) selama memakai Orbit langsung dibawa ke IndiHome (🥈 Silver)',
          'Transisi Zero-Downtime: internet Orbit tetap menyala sampai IndiHome aktif',
        ],
        geoNote: isFiber
          ? 'Lokasi Anda sudah Fiber-Ready! Anda dapat langsung menjadwalkan Move Up ke IndiHome tanpa jeda koneksi.'
          : 'Aturan Geospasial Pintar: Lokasi belum Fiber-Ready, sistem menempatkan Anda di Orbit sekarang & mengaktifkan radar otomatis saat ODP Fiber masuk.',
      };
    }

    if (!isFlexibleDwelling && intensityScore >= 4) {
      return {
        id: 'performance',
        name: 'Performance Households',
        shortLabel: 'Gamer / WFH Kritis',
        badgeText: 'Ultra-Low Ping',
        icon: 'sports_esports',
        subtitle: '>10 perangkat, gaming kompetitif & WFH kritis',
        tagline: '"High-Performance Digital Home"',
        recommendedProduct: isFiber
          ? 'IndiHome High-Tier (Gamer/HSMP) + Orbit Auto-Failover'
          : 'Orbit Max 5G Sekarang + Prioritas Utama IndiHome Fiber',
        basePrice: 'Rp 250.000',
        originalPrice: 'Rp 315.000',
        matchScore: '99% COCOK',
        perks: [
          'Jaringan serat optik simetris 1:1 dengan latensi ultra-rendah (<10ms SG Ping)',
          'Dilengkapi Orbit Auto-Failover Backup: koneksi otomatis beralih jika kabel gangguan',
          'Mendukung >10 perangkat simultan (4K Streaming, Cloud Gaming, Zoom HD, Smart CCTV)',
          'Langsung membuka Milestone 🥈 Silver Plus & siap ke 🥇 Gold Family VIP',
        ],
        geoNote: isFiber
          ? 'Kombinasi IndiHome High-Tier + Orbit Backup menjamin produktivitas & gaming Zero-Downtime.'
          : 'Lokasi belum terjangkau ODP Fiber. Anda dilayani Orbit Max hari ini & menjadi prioritas #1 ekspansi ODP.',
      };
    }

    // Default: Stable Mainstream Families
    return {
      id: 'mainstream',
      name: 'Stable Mainstream Families',
      shortLabel: 'Keluarga Menetap',
      badgeText: 'Populer',
      icon: 'family_restroom',
      subtitle: '3-5 Org, Streaming 4K, belajar & kerja dari rumah',
      tagline: '"Reliable Digital Home Experience"',
      recommendedProduct: isFiber
        ? 'IndiHome Fiber Broadband (50–100 Mbps)'
        : 'Orbit Family Sekarang → Auto-Move Up ke IndiHome Fiber',
      basePrice: isFiber ? 'Rp 213.500' : 'Rp 195.000',
      originalPrice: 'Rp 260.000',
      matchScore: '98% COCOK',
      perks: [
        isFiber
          ? '100% Fiber Optic stabil tanpa kuota batas (Unlimited) untuk seluruh anggota rumah'
          : 'Koneksi rumah langsung aktif hari ini sambil menunggu instalasi ODP IndiHome di jalan Anda',
        'Siap upgrade (+Entertainment Bundle Rp230.000/bln)',
        'Buka Kuota Keluarga Bersama 30–50 GB/bln untuk (🥇 Gold VIP)',
        'Garansi layanan teknisi prioritas via aplikasi MyTelkomsel',
      ],
      geoNote: isFiber
        ? 'ODP-KBY-042 tersedia 12 meter dari rumah Anda! IndiHome adalah mesin utama paling tepat.'
        : 'Aturan Geospasial Pintar: Profil rumah cocok IndiHome, namun karena lokasi belum Fiber-Ready, Anda ditempatkan di Orbit sekarang & masuk antrean Move Up otomatis!',
    };
  };

  const rec = computeRecommendation();

  return (
    <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
      {/* Coverage Check / Geospatial Card */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-3 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-primary-container text-[20px]">share_location</span>
            <span className="text-sm font-bold text-on-surface">1. Validasi Geospasial Jaringan Rumah</span>
          </div>
          <span className="text-[11px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> GIS Live
          </span>
        </div>

        {/* Geospatial Map & Radar Widget */}
        <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-800 flex items-end p-3 shadow-inner">
          {/* Stylistic Map Grid Background */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#10b981 1px, #0f172a 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/60 flex flex-col justify-between p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                <span
                  className={`material-symbols-outlined text-[15px] ${
                    profile.coverage === 'fiber' ? 'text-secondary' : 'text-sky-600'
                  }`}
                >
                  sensors
                </span>
                <span className="text-[11px] text-on-surface font-bold">
                  {profile.coverage === 'fiber' ? 'Zona Hijau: ODP Fiber Aktif' : 'Zona Biru: 4G/5G Orbit Area'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white font-semibold">
                <span className="flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px] text-emerald-400">speed</span>
                  {profile.coverage === 'fiber' ? 'Ping: 7ms' : 'Ping: 22ms'}
                </span>
                <span className="flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px] text-sky-300">signal_cellular_alt</span>
                  -62 dBm
                </span>
              </div>
            </div>

            {/* Radar Pulse Effect Icon */}
            <div className="self-center my-auto flex items-center justify-center relative">
              <span
                className={`absolute w-12 h-12 rounded-full animate-ping ${
                  profile.coverage === 'fiber' ? 'bg-emerald-400/40' : 'bg-sky-400/40'
                }`}
              ></span>
              <div
                className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow-md ${
                  profile.coverage === 'fiber' ? 'bg-secondary' : 'bg-sky-600'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {profile.coverage === 'fiber' ? 'settings_input_hdmi' : 'wifi_tethering'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-1 text-[11px] font-semibold truncate">
                <span className="material-symbols-outlined text-[14px] text-rose-400">pin_drop</span>
                <span className="truncate">Kebayoran Baru, Jakarta Selatan (-6.241, 106.801)</span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setProfile((p) => ({ ...p, coverage: p.coverage === 'fiber' ? 'orbit' : 'fiber' }))
                }
                className="text-[11px] font-bold text-sky-300 underline shrink-0 ml-2"
              >
                Ubah Zona Peta
              </button>
            </div>
          </div>
        </div>

        {/* Coverage Mode Selector Toggles */}
        <div className="flex flex-col gap-2">
          {/* Option 1: Green Fiber Badge */}
          <div
            onClick={() => setProfile((p) => ({ ...p, coverage: 'fiber' }))}
            className={`cursor-pointer p-3 rounded-xl flex items-start gap-2.5 transition-all border ${
              profile.coverage === 'fiber'
                ? 'bg-secondary-container/25 border-secondary shadow-sm'
                : 'bg-surface-container-low border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <div className="relative mt-0.5 flex-shrink-0">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  profile.coverage === 'fiber'
                    ? 'bg-secondary text-white'
                    : 'bg-surface-container-highest text-outline'
                }`}
              >
                <span className="material-symbols-outlined text-[13px]">
                  {profile.coverage === 'fiber' ? 'check' : 'radio_button_unchecked'}
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold text-on-surface">
                  Zona Hijau: ODP-KBY-042 Ready (IndiHome Fiber)
                </span>
                <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded font-bold shrink-0">
                  ODP &lt;150m
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                Port optik IndiHome tersedia di depan rumah. Rekomendasi utama untuk keluarga menetap &amp; trafik tinggi.
              </p>
            </div>
          </div>

          {/* Option 2: Sky Blue Orbit Badge */}
          <div
            onClick={() => setProfile((p) => ({ ...p, coverage: 'orbit' }))}
            className={`cursor-pointer p-3 rounded-xl flex items-start gap-2.5 transition-all border ${
              profile.coverage === 'orbit'
                ? 'bg-sky-50 border-sky-600 shadow-sm'
                : 'bg-surface-container-low border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                profile.coverage === 'orbit'
                  ? 'bg-sky-600 text-white'
                  : 'bg-surface-container-highest text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">
                {profile.coverage === 'orbit' ? 'check' : 'radio_button_unchecked'}
              </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold text-on-surface">
                  Zona Biru/Kuning: Cellular-Only (Telkomsel Orbit 4G/5G)
                </span>
                <span className="text-[10px] bg-sky-100 text-sky-900 px-1.5 py-0.5 rounded font-bold shrink-0">
                  Plug &amp; Play
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                Area belum terjangkau kabel fiber atau hunian kos/sewa. Aktif instan tanpa instalasi kabel &amp; masuk antrean Move Up.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Household Profile Presets (4 Official Segments from Report) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="font-outfit text-sm font-bold text-on-surface">
              2. Pilih Preset 4 Segmen Rumah Tangga (H.O.M.E.)
            </h2>
            <p className="text-[11px] text-on-surface-variant">
              Klik salah satu segmen untuk simulasi cepat atau ubah kuis di bawah
            </p>
          </div>
          <span className="material-symbols-outlined text-primary-container text-[20px]">auto_awesome</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            {
              id: 'starter' as SegmentId,
              title: 'Flexible Starters',
              sub: 'Kos/Kontrak • Orbit Murni',
              badge: '1-2 Org',
              icon: 'laptop_mac',
            },
            {
              id: 'growing' as SegmentId,
              title: 'Flexible Growing',
              sub: 'Keluarga Muda • Orbit → Fiber',
              badge: 'Move Up',
              icon: 'trending_up',
            },
            {
              id: 'mainstream' as SegmentId,
              title: 'Stable Mainstream',
              sub: 'Menetap • IndiHome Fiber',
              badge: 'Populer',
              icon: 'family_restroom',
            },
            {
              id: 'performance' as SegmentId,
              title: 'Performance Home',
              sub: 'Gamer/Pro • Fiber + Orbit Backup',
              badge: 'Zero-Lag',
              icon: 'sports_esports',
            },
          ].map((item) => {
            const active = rec.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => applyPreset(item.id)}
                className={`text-left p-3 rounded-xl flex flex-col justify-between h-28 transition-all relative overflow-hidden border ${
                  active
                    ? 'bg-primary-fixed/25 border-primary-container shadow-[0_4px_14px_rgba(184,0,14,0.12)]'
                    : 'bg-surface-container-lowest border-slate-200/80 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      active
                        ? 'bg-primary-container text-white'
                        : 'bg-surface-container text-primary-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      active
                        ? 'bg-primary-container text-white'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div>
                  <div
                    className={`text-xs font-bold leading-snug ${
                      active ? 'text-primary-container' : 'text-on-surface'
                    }`}
                  >
                    {item.title}
                  </div>
                  <div className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">{item.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6-Question Interactive Household Discovery Quiz */}
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-4 border border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] text-primary-container font-bold uppercase tracking-wider">
              Kuis Personalisasi (6 Indikator)
            </span>
            <h2 className="font-outfit text-sm font-bold text-on-surface">
              Detail Kebutuhan &amp; Siklus Hunian Rumah
            </h2>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </div>
        </div>

        {/* Q1: Status Hunian & Rencana Tinggal */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
              1
            </span>
            Status hunian &amp; rencana menetap di lokasi ini?
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { val: 'flex', label: 'Kos/Sewa (<1 thn)' },
              { val: 'mid', label: 'Transisi (1-3 thn)' },
              { val: 'stable', label: 'Menetap (>3 thn)' },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() =>
                  setProfile((p) => ({ ...p, q1Dwelling: opt.val as HouseholdProfile['q1Dwelling'] }))
                }
                className={`py-2 px-2 rounded-lg text-center text-[11px] font-bold transition-colors ${
                  profile.q1Dwelling === opt.val
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Q2: Jumlah Anggota Rumah & Perangkat */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
              2
            </span>
            Jumlah anggota keluarga &amp; perangkat terhubung?
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { val: '1-2', label: '1-2 Org (1-3 alat)' },
              { val: '3-4', label: '3-4 Org (4-7 alat)' },
              { val: '5+', label: '5+ Org (8+ alat)' },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() =>
                  setProfile((p) => ({ ...p, q2Members: opt.val as HouseholdProfile['q2Members'] }))
                }
                className={`py-2 px-2 rounded-lg text-center text-[11px] font-bold transition-colors ${
                  profile.q2Members === opt.val
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Q3: Aktivitas Internet Dominan */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
              3
            </span>
            Aktivitas internet harian paling dominan?
          </label>
          <div className="flex flex-wrap gap-1.5">
            {[
              { name: '4K Streaming', icon: 'movie' },
              { name: 'WFH & Sekolah', icon: 'video_call' },
              { name: 'Cloud Gaming', icon: 'sports_esports' },
              { name: 'CCTV & Smart IoT', icon: 'videocam' },
            ].map((act) => {
              const selected = profile.q3Activities.includes(act.name);
              return (
                <button
                  key={act.name}
                  type="button"
                  onClick={() => toggleActivity(act.name)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1 transition-colors ${
                    selected
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface-container-low text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">{act.icon}</span>
                  {act.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Q4: Koneksi Utama Saat Ini */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
              4
            </span>
            Layanan internet rumah yang dipakai sekarang?
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { val: 'indihome', label: 'IndiHome Fiber', icon: 'router' },
              { val: 'orbit', label: 'Telkomsel Orbit', icon: 'cell_wifi' },
              { val: 'none', label: 'Belum Punya / Hotspot', icon: 'smartphone' },
              { val: 'other', label: 'ISP Kompetitor Lain', icon: 'swap_horiz' },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() =>
                  setProfile((p) => ({ ...p, q4CurrentConn: opt.val as HouseholdProfile['q4CurrentConn'] }))
                }
                className={`p-2 rounded-lg text-left text-[11px] font-bold flex items-center gap-1.5 transition-colors ${
                  profile.q4CurrentConn === opt.val
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{opt.icon}</span>
                <span className="truncate">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Q5 & Q6 Compact Row */}
        <div className="grid grid-cols-1 gap-3 pt-1">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
                5
              </span>
              Jam pemakaian puncak (peak hour) keluarga?
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { val: 'pagi', label: 'Pagi (08-12)' },
                { val: 'siang', label: 'Siang (13-17)' },
                { val: 'malam', label: 'Malam (19-23)' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() =>
                    setProfile((p) => ({ ...p, q5PeakHour: opt.val as HouseholdProfile['q5PeakHour'] }))
                  }
                  className={`py-2 px-2 rounded-lg text-center text-[11px] font-bold transition-colors ${
                    profile.q5PeakHour === opt.val
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface-container-low text-on-surface'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-on-surface font-bold flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-surface-container-high text-on-surface text-[11px] flex items-center justify-center font-bold">
                6
              </span>
              Seberapa kritis kebutuhan koneksi stabil tanpa jeda?
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { val: 'standar', label: 'Standar' },
                { val: 'penting', label: 'Penting' },
                { val: 'kritis', label: 'Wajib Stabil' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() =>
                    setProfile((p) => ({
                      ...p,
                      q6Criticality: opt.val as HouseholdProfile['q6Criticality'],
                    }))
                  }
                  className={`py-2 px-2 rounded-lg text-center text-[11px] font-bold transition-colors ${
                    profile.q6Criticality === opt.val
                      ? 'bg-primary-container text-white shadow-sm'
                      : 'bg-surface-container-low text-on-surface'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Output Recommendation Card */}
      <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-lg border-2 border-primary-container/30 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-primary-container uppercase tracking-wider">
              <span className="material-symbols-outlined text-[15px]">psychology</span>
              Hasil Penempatan Segmen H.O.M.E.
            </div>
            <h3 className="font-outfit text-lg font-extrabold text-on-surface mt-0.5">{rec.name}</h3>
            <p className="text-xs font-semibold text-secondary">{rec.tagline}</p>
          </div>
          <div className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-xl text-center shrink-0">
            <div className="font-outfit text-sm font-extrabold leading-tight">{rec.matchScore}</div>
          </div>
        </div>

        {/* Recommended Product Box */}
        <div className="bg-surface-container-low p-3 rounded-xl flex items-center justify-between gap-2 border border-slate-200/70">
          <div>
            <div className="text-[11px] text-on-surface-variant font-semibold">Rekomendasi Mesin Utama:</div>
            <div className="text-xs font-extrabold text-on-surface mt-0.5">{rec.recommendedProduct}</div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-outfit text-xl font-extrabold text-primary-container">{rec.basePrice}</span>
              <span className="text-[11px] text-on-surface-variant">/ bulan</span>
              <span className="text-[11px] text-slate-400 line-through ml-1">{rec.originalPrice}</span>
            </div>
          </div>
          <span className="text-[10px] font-bold bg-secondary/15 text-secondary px-2 py-1 rounded-lg shrink-0">
            🥉 Buka Bronze
          </span>
        </div>

        {/* Geo-Override Smart Rule Explanation */}
        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-2">
          <span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">info</span>
          <p className="text-[11px] text-amber-950 leading-snug">
            <strong>Logika Geospasial H.O.M.E.:</strong> {rec.geoNote}
          </p>
        </div>

        {/* Perks Checklist */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
            Keuntungan Penempatan Tepat Sejak Awal:
          </div>
          {rec.perks.map((perk, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="leading-snug">{perk}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onNextStep('O')}
          className="mt-2 w-full h-12 rounded-xl bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Pemilihan Produk</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
