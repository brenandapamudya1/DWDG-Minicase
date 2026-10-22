import React, { useState } from 'react';
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

  const stepIndex = STEPS.findIndex((s) => s.key === activeStep);
  const progressBarPercent =
    stepIndex === 0 ? '12%' : stepIndex === 1 ? '38%' : stepIndex === 2 ? '68%' : '100%';

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
          <span className="text-slate-400">• Customer App View</span>
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
      <div className="w-full max-w-[440px] min-h-screen md:min-h-[840px] bg-surface text-on-surface flex flex-col relative md:rounded-[32px] md:shadow-[0_24px_60px_rgba(0,0,0,0.6)] md:border-[6px] md:border-slate-800 overflow-hidden">
        {/* Top Fixed Red Telkomsel Header + 4-Step H.O.M.E. Stepper */}
        <header className="sticky top-0 w-full z-40 bg-gradient-to-r from-[#FF4D4D] via-[#E60012] to-primary-container shadow-[0_10px_24px_-4px_rgba(184,0,14,0.22)]">
          <div className="flex flex-col justify-between pt-2 pb-2.5">
            {/* Top Brand & User Profile Row */}
            <div className="flex items-center justify-between px-4 h-14">
              <div
                onClick={() => handleGoStep('H')}
                className="cursor-pointer flex items-center gap-2.5"
              >
                {/* Official SVG Logo: MyTelkomsel H.O.M.E. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  className="w-9 h-9 rounded-xl shadow-md shrink-0"
                >
                  <defs>
                    <linearGradient id="tselGradApp" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B91C1C" />
                      <stop offset="50%" stopColor="#E60012" />
                      <stop offset="100%" stopColor="#FF4D00" />
                    </linearGradient>
                    <linearGradient id="goldGradApp" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE047" />
                      <stop offset="100%" stopColor="#EAB308" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="4"
                    y="4"
                    width="112"
                    height="112"
                    rx="26"
                    fill="#0F172A"
                    stroke="#ffffff"
                    strokeWidth="4"
                  />
                  <path
                    d="M22 54 L60 22 L98 54"
                    fill="none"
                    stroke="url(#tselGradApp)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="28" y="76" width="12" height="18" rx="3" fill="#0EA5E9" />
                  <rect x="45" y="66" width="12" height="28" rx="3" fill="#10B981" />
                  <rect x="62" y="54" width="12" height="40" rx="3" fill="url(#tselGradApp)" />
                  <rect x="79" y="42" width="12" height="52" rx="3" fill="url(#goldGradApp)" />
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

            {/* Interactive 4-Step H.O.M.E. Ladder Stepper Bar */}
            <div className="bg-white/95 backdrop-blur-xl px-3 py-2.5 mx-3 mt-1 rounded-xl shadow-[0_4px_20px_-2px_rgba(184,0,14,0.12)]">
              <div className="relative flex items-center justify-between">
                {/* Background Track */}
                <div className="absolute left-6 right-6 top-3 h-[2.5px] bg-surface-container-high z-0"></div>
                {/* Active Progress Track */}
                <div
                  className="absolute left-6 top-3 h-[2.5px] bg-primary-container z-0 transition-all duration-300"
                  style={{ width: `calc(${progressBarPercent} - 2rem)` }}
                ></div>

                {STEPS.map((s, idx) => {
                  const isCurrent = activeStep === s.key;
                  const isPassed = idx < stepIndex;

                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => handleGoStep(s.key)}
                      className="relative z-10 flex flex-col items-center gap-1 group focus:outline-none"
                    >
                      <div className="relative flex items-center justify-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                            isCurrent
                              ? 'bg-primary-container text-white shadow-md scale-110'
                              : isPassed
                              ? 'bg-secondary text-white shadow-sm'
                              : 'bg-surface-container text-outline hover:bg-surface-container-high'
                          }`}
                        >
                          {isPassed ? (
                            <span className="material-symbols-outlined text-[14px]">check</span>
                          ) : (
                            s.short
                          )}
                        </div>
                        {isCurrent && (
                          <span className="absolute -inset-1 rounded-full bg-primary-container/25 animate-ping"></span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] tracking-tight transition-colors ${
                          isCurrent
                            ? 'text-primary-container font-extrabold'
                            : isPassed
                            ? 'text-secondary font-bold'
                            : 'text-outline font-semibold'
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Main Active Screen Content */}
        <main className="flex-1 w-full pb-20">
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

        {/* Bottom Super-App Navigation Bar */}
        <nav className="sticky bottom-0 w-full z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-2 py-1.5 flex items-center justify-around shadow-[0_-4px_20px_rgba(15,23,42,0.05)]">
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
            <span className="text-[10px] mt-0.5">Milestone</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
