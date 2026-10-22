export type StepKey = 'H' | 'O' | 'M' | 'E';

export type CoverageType = 'fiber' | 'orbit';

export type SegmentId = 'starter' | 'growing' | 'mainstream' | 'performance';

export interface HouseholdProfile {
  coverage: CoverageType;
  presetId: SegmentId;
  q1Dwelling: 'flex' | 'mid' | 'stable';
  q2Members: '1-2' | '3-4' | '5+';
  q3Activities: string[];
  q4CurrentConn: 'none' | 'orbit' | 'indihome' | 'other';
  q5PeakHour: 'pagi' | 'siang' | 'malam';
  q6Criticality: 'standar' | 'penting' | 'kritis';
}

export interface OptimizeState {
  selectedTier: 1 | 2 | 3;
  addonOrbitFallback: boolean;
  addonCloudCctv: boolean;
}

export interface MoveUpState {
  sig1FiberReady: boolean;
  sig2HighUsage: boolean;
  sig3TenureMet: boolean;
  selectedSlot: 1 | 2 | 3;
}

export interface EmbedState {
  familyLines: 1 | 2 | 3 | 4 | 5;
  claimedPerks: Record<string, boolean>;
}
