import { create } from "zustand";

export interface TmpTodayValues {
  id?: number;
  title: string;
  content: string;
  date: string;
  emojiUrl: string;
  mentions: Set<string>;
  tags: Set<string>;
  visiblePeople: Set<string>;
  visibleGroups: Set<string>;
}

interface TmpTodayStore {
  tmpToday: TmpTodayValues;
  setTmpToday: (tmpToday: Partial<TmpTodayValues>) => void;
  resetTmpToday: () => void;
}
const initialTmpTodayState: TmpTodayValues = {
  title: "",
  emojiUrl: "",
  content: "",
  date: new Date().toISOString().split("T")[0],
  mentions: new Set(),
  tags: new Set(),
  visiblePeople: new Set(),
  visibleGroups: new Set(),
};

const useTmpTodayStore = create<TmpTodayStore>((set) => ({
  tmpToday: initialTmpTodayState,

  setTmpToday: (updates) =>
    set((state) => ({
      ...state,
      tmpToday: {
        ...state.tmpToday,
        ...updates,
      },
    })),

  resetTmpToday: () =>
    set({
      tmpToday: initialTmpTodayState,
    }),
}));

export default useTmpTodayStore;
