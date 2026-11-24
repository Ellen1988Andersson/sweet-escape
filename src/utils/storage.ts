import type {
  UserProgress,
  SugarFreeGoal,
  DailyCheckIn,
  StorageResult,
} from "../types/tracker";

const STORAGE_KEY = "sweet_escape_progress_v1";

export const DEFAULT_PROGRESS: UserProgress = {
  activeGoal: null,
  pastGoals: [],
  checkIns: [],
  totalXp: 0,
  bestStreak: 0,
};

// Maps browser storage errors to clear error messages
function getStorageErrorMessage(error: unknown): string {
  if (error instanceof DOMException) {
    if (error.name === "QuotaExceededError") {
      return "Storage quota exceeded. Unable to save your progress.";
    }
    if (error.name === "SecurityError") {
      return "Browser storage is blocked. Enable cookies/site data to save progress.";
    }
  }
  return "An unexpected storage error occurred.";
}

// Loads user progress from localStorage with safe fallbacks
export function loadProgress(): StorageResult<UserProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { success: true, data: DEFAULT_PROGRESS };
    }

    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    const normalized: UserProgress = {
      ...DEFAULT_PROGRESS,
      ...parsed,
      pastGoals: Array.isArray(parsed.pastGoals) ? parsed.pastGoals : [],
      checkIns: Array.isArray(parsed.checkIns) ? parsed.checkIns : [],
    };

    return { success: true, data: normalized };
  } catch {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore secondary removal errors
    }
    return {
      success: false,
      data: DEFAULT_PROGRESS,
      error: "Saved data was corrupted and has been reset.",
    };
  }
}

// Saves the entire user progress object to localStorage
export function saveProgress(progress: UserProgress): StorageResult<UserProgress> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return { success: true, data: progress };
  } catch (error) {
    return {
      success: false,
      data: progress,
      error: getStorageErrorMessage(error),
    };
  }
}

// Starts a new sugar-free goal and archives any active goal
export function startNewGoal(newGoal: SugarFreeGoal): StorageResult<UserProgress> {
  const { data: current } = loadProgress();
  const updatedPastGoals = current.activeGoal
    ? [...current.pastGoals, { ...current.activeGoal, status: "ended" as const }]
    : current.pastGoals;

  const updated: UserProgress = {
    ...current,
    activeGoal: newGoal,
    pastGoals: updatedPastGoals,
  };

  return saveProgress(updated);
}

// Saves or updates a daily check-in and recalculates total XP
export function saveCheckIn(checkIn: DailyCheckIn): StorageResult<UserProgress> {
  const { data: current } = loadProgress();
  const existingIndex = current.checkIns.findIndex(
    (item) => item.date === checkIn.date && item.goalId === checkIn.goalId
  );

  let updatedCheckIns: DailyCheckIn[];
  let xpDelta = checkIn.xpEarned;

  if (existingIndex >= 0) {
    xpDelta = checkIn.xpEarned - current.checkIns[existingIndex].xpEarned;
    updatedCheckIns = [...current.checkIns];
    updatedCheckIns[existingIndex] = checkIn;
  } else {
    updatedCheckIns = [...current.checkIns, checkIn];
  }

  const updated: UserProgress = {
    ...current,
    checkIns: updatedCheckIns,
    totalXp: Math.max(0, current.totalXp + xpDelta),
  };

  return saveProgress(updated);
}

// Resets all stored user progress
export function resetAllProgress(): StorageResult<UserProgress> {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { success: true, data: DEFAULT_PROGRESS };
  } catch (error) {
    return {
      success: false,
      data: DEFAULT_PROGRESS,
      error: getStorageErrorMessage(error),
    };
  }
}