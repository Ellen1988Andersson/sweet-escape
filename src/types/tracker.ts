export type GoalDuration = 7 | 30 | 90 | number;

export type GoalStatus = "active" | "completed" | "ended";

export type MoodLevel = "great" | "good" | "okay" | "tough";

export type CravingLevel = "none" | "mild" | "moderate" | "strong";

export interface SugarFreeGoal {
  id: string;
  targetDays: GoalDuration;
  startDate: string; // YYYY-MM-DD (local date)
  endDate: string;   // YYYY-MM-DD
  status: GoalStatus;
  completedAt?: string;
}

export interface DailyCheckIn {
  id: string;
  date: string; // YYYY-MM-DD (one check-in per day)
  goalId: string;
  stayedSugarFree: boolean;
  mood: MoodLevel;
  craving: CravingLevel;
  note?: string;
  xpEarned: number;
  createdAt: string; // ISO timestamp
}

export interface StreakRecord {
  goalId: string;
  days: number;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
}

export interface UserProgress {
  activeGoal: SugarFreeGoal | null;
  pastGoals: SugarFreeGoal[];
  checkIns: DailyCheckIn[];
  totalXp: number;
  bestStreak: number;
}

export interface StorageResult<T> {
  success: boolean;
  data: T;
  error?: string;
}