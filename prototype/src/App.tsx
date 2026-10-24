import React, { useEffect, useState } from 'react';
import { EmbedState, HouseholdProfile, MoveUpState, OptimizeState, StepKey } from './types';
import { ScreenHarmonize } from './components/ScreenHarmonize';
import { ScreenOptimize } from './components/ScreenOptimize';
import { ScreenMoveUp } from './components/ScreenMoveUp';
import { ScreenEmbed } from './components/ScreenEmbed';

const STEPS: { key: StepKey; short: string; label: string }[] = [
  { key: 'H', short: 'H', label: '[H] Harmonize' },
  { key: 'O', short: 'O', label: '[O] Optimize' },
  { key: 'M', short: 'M', label: '[M] Move Up' },
  { key: 'E', short: 'E', label: '[E] Embed' },
];

export const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState<StepKey>('H');
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [splashFading, setSplashFading] = useState<boolean>(false);

  useEffect(() => {
    if (!showSplash) return;
    setSplashFading(false);

    const fadeTimer = window.setTimeout(() => {
      setSplashFading(true);
    }, 2100);

    const hideTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 2550);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [showSplash]);

  const dismissSplashNow = () => {
    setSplashFading(true);
    window.setTimeout(() => {
      setShowSplash(false);
    }, 300);
  };

  // Step 1: Harmonize State
  const [profile, setProfile] = useState<HouseholdProfile>({
    coverage: 'fiber',
    presetId: 'mainstream',
    q1Dwelling: 'stable',
    q2Members: '3-4',
    q3Activities: ['4K Streaming', 'WFH & Sekolah'],
    q4CurrentConn: 'indihome',
    q5PeakHour: 'malam',
    q6Criticality: 'penting',
  });

  // Step 2: Optimize State
  const [opt, setOpt] = useState<OptimizeState>({
    selectedTier: 2,
    addonOrbitFallback: false,
    addonCloudCctv: false,
  });

  // Step 3: Move Up State
  const [move, setMove] = useState<MoveUpState>({
    sig1FiberReady: true,
    sig2HighUsage: true,
    sig3TenureMet: true,
    selectedSlot: 1,
  });

  // Step 4: Embed State
  const [embed, setEmbed] = useState<EmbedState>({
    familyLines: 3,
    claimedPerks: {
      quota: true,
      ott: false,
      vip: false,
    },
  });

  const handleGoStep = (step: StepKey) => {
    setActiveStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeMilestoneBadge =
    embed.familyLines === 1
      ? 'Bronze Starter'
      : embed.familyLines === 2
      ? 'Silver Upgrader'
      : 'Gold VIP';

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-start md:py-6">
      {/* Desktop Presenter Helper Strip (Hidden on Mobile Phones) */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[440px] mb-3 px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-200 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold text-white">MyTelkomsel H.O.M.E.</span>
          <button
            type="button"
            onClick={() => {
              setActiveStep('H');
              setShowSplash(true);
            }}
            className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/80 text-rose-300 hover:bg-rose-600 hover:text-white transition-colors font-semibold"
            title="Putar ulang animasi Entrance Logo"
          >
            ↻ Intro
          </button>
        </div>
        <div className="flex items-center gap-1">
          {STEPS.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => handleGoStep(s.key)}
              className={`px-2 py-0.5 rounded font-bold text-[11px] transition-colors ${
                activeStep === s.key
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {s.short}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Super-App Container Frame */}
      <div className="w-full max-w-[440px] min-h-screen md:min-h-[840px] bg-surface text-on-surface flex flex-col relative md:rounded-[32px] md:shadow-[0_24px_60px_rgba(0,0,0,0.6)] md:border-[6px] md:border-slate-800 md:overflow-x-clip">
        {/* Entrance Splash Screen Overlay */}
        {showSplash && (
          <div
            onClick={dismissSplashNow}
            className={`fixed inset-0 md:max-w-[428px] md:mx-auto md:my-auto z-50 flex flex-col items-center justify-between px-6 py-12 cursor-pointer select-none bg-gradient-to-br from-[#990009] via-[#E60012] to-[#FF2E1F] text-white transition-all duration-500 ${
              splashFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            {/* Subtle Decorative Ambient Circles */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-300/15 blur-3xl" />

            {/* Top Super-App Endorsement */}
            <div className="relative z-10 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-extrabold tracking-[0.2em] uppercase text-rose-50">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Telkomsel Ecosystem
            </div>

            {/* Center Minimalist Option A Logo & Brand Lockup */}
            <div className="relative z-10 flex flex-col items-center text-center animate-splash-logo">
              {/* Glowing Outer Halo */}
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute -inset-4 rounded-[36px] bg-white/20 blur-xl animate-pulse" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                  className="w-28 h-28 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] relative z-10"
                >
                  <rect
                    x="8"
                    y="8"
                    width="224"
                    height="224"
                    rx="52"
                    fill="#E60012"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                  />
                  <path
                    d="M48 122 L130 62 L152 78 L152 64 L172 64 L172 93 L192 108 L192 126 L130 81 L48 141 Z"
                    fill="#FFFFFF"
                  />
                  <polygon
                    points="62,141 86,123 86,184 62,184"
                    fill="#FFFFFF"
                    className="animate-bar-rise-1"
                  />
                  <polygon
                    points="96,116 120,98 120,184 96,184"
                    fill="#FFFFFF"
                    className="animate-bar-rise-2"
                  />
                  <polygon
                    points="130,91 154,109 154,184 130,184"
                    fill="#FFFFFF"
                    className="animate-bar-rise-3"
                  />
                  <polygon
                    points="164,116 184,131 184,184 164,184"
                    fill="#FFFFFF"
                    className="animate-bar-rise-4"
                  />
                </svg>
              </div>

              <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-rose-100">
                MyTelkomsel
              </span>
              <h1 className="font-outfit text-4xl font-black tracking-tight text-white mt-1 drop-shadow-sm">
                H.O.M.E.
              </h1>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/90 mt-1.5">
                Home Ladder Navigator
              </p>

              {/* 4 Steps Mini Pill Strip */}
              <div className="mt-6 flex items-center gap-1.5 text-[10px] font-extrabold text-white/95 bg-black/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                <span>Harmonize</span>
                <span className="text-rose-200">•</span>
                <span>Optimize</span>
                <span className="text-rose-200">•</span>
                <span>Move Up</span>
                <span className="text-rose-200">•</span>
                <span>Embed</span>
              </div>
            </div>

            {/* Bottom Loading Progress & Hint */}
            <div className="relative z-10 w-full max-w-[220px] flex flex-col items-center gap-2">
              <div className="w-full h-1.5 rounded-full bg-white/25 overflow-hidden">
                <div className="h-full bg-white rounded-full animate-splash-progress" />
              </div>
              <span className="text-[10px] font-semibold text-rose-100/90 tracking-wide">
                Menyiapkan Ekosistem Rumah Anda...
              </span>
            </div>
          </div>
        )}

        {/* Top Fixed Red Telkomsel Header */}
        <header className="sticky top-0 w-full z-40 md:rounded-t-[26px] bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container shadow-[0_10px_24px_-4px_rgba(184,0,14,0.22)]">
          <div className="flex flex-col justify-between py-1">
            {/* Top Brand & User Profile Row */}
            <div className="flex items-center justify-between px-4 h-14">
              <div
                onClick={() => handleGoStep('H')}
                className="cursor-pointer flex items-center gap-2.5"
              >
                {/* Official SVG Logo: MyTelkomsel H.O.M.E. (Option A Minimalist Red & White) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 240 240"
                  className="w-9 h-9 rounded-xl shadow-md shrink-0"
                >
                  <rect
                    x="8"
                    y="8"
                    width="224"
                    height="224"
                    rx="52"
                    fill="#E60012"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                  />
                  <path
                    d="M48 122 L130 62 L152 78 L152 64 L172 64 L172 93 L192 108 L192 126 L130 81 L48 141 Z"
                    fill="#FFFFFF"
                  />
                  <polygon points="62,141 86,123 86,184 62,184" fill="#FFFFFF" />
                  <polygon points="96,116 120,98 120,184 96,184" fill="#FFFFFF" />
                  <polygon points="130,91 154,109 154,184 130,184" fill="#FFFFFF" />
                  <polygon points="164,116 184,131 184,184 164,184" fill="#FFFFFF" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-rose-100 uppercase tracking-wider leading-none">
                    MyTelkomsel
                  </span>
                  <span className="text-white font-outfit font-extrabold text-base tracking-tight leading-tight">
                    H.O.M.E. <span className="text-xs font-medium text-rose-100">Navigator</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleGoStep('E')}
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full pl-2 pr-3 py-1 border border-white/20 hover:bg-white/25 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-outfit font-extrabold text-xs shadow-sm">
                    BS
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-white leading-none uppercase tracking-wide">
                      Budi S.
                    </span>
                    <span className="text-[9px] font-extrabold text-amber-200 leading-tight uppercase">
                      {activeMilestoneBadge}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Active Screen Content */}
        <main className="flex-1 w-full pb-24">
          {activeStep === 'H' && (
            <ScreenHarmonize
              profile={profile}
              setProfile={setProfile}
              onNextStep={handleGoStep}
            />
          )}
          {activeStep === 'O' && (
            <ScreenOptimize opt={opt} setOpt={setOpt} onNextStep={handleGoStep} />
          )}
          {activeStep === 'M' && (
            <ScreenMoveUp move={move} setMove={setMove} onNextStep={handleGoStep} />
          )}
          {activeStep === 'E' && (
            <ScreenEmbed embed={embed} setEmbed={setEmbed} onNextStep={handleGoStep} />
          )}
        </main>

        {/* Bottom Super-App Navigation Bar (Always Fixed to Viewport Bottom) */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] md:max-w-[428px] z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-2 pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
          <button
            type="button"
            onClick={() => handleGoStep('H')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
              activeStep === 'H' ? 'text-primary-container font-bold' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[21px]">compass_calibration</span>
            <span className="text-[10px] mt-0.5">Harmonize</span>
          </button>

          <button
            type="button"
            onClick={() => handleGoStep('O')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
              activeStep === 'O' ? 'text-primary-container font-bold' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[21px]">stacked_bar_chart</span>
            <span className="text-[10px] mt-0.5">Optimize</span>
          </button>

          {/* Center Highlighted H.O.M.E. Button */}
          <button
            type="button"
            onClick={() => {
              const nextOrder: Record<StepKey, StepKey> = { H: 'O', O: 'M', M: 'E', E: 'H' };
              handleGoStep(nextOrder[activeStep]);
            }}
            className="flex flex-col items-center justify-center -mt-4"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-primary to-[#FF4D4D] text-white flex items-center justify-center shadow-lg border-2 border-white">
              <span className="material-symbols-outlined text-[22px]">home_iot_device</span>
            </div>
            <span className="text-[10px] font-extrabold text-primary-container mt-0.5">
              H.O.M.E.
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleGoStep('M')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
              activeStep === 'M' ? 'text-primary-container font-bold' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[21px]">upgrade</span>
            <span className="text-[10px] mt-0.5">Move Up</span>
          </button>

          <button
            type="button"
            onClick={() => handleGoStep('E')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors relative ${
              activeStep === 'E' ? 'text-primary-container font-bold' : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined text-[21px]">workspace_premium</span>
            <span className="text-[10px] mt-0.5">Embed</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
