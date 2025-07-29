import { create } from "zustand";

export interface TmpTodayValues {
  id?: number;
  title: string;
  content: string;
  date: string;
  emojiUrl: string;
  mentions: Set<string>;
  tags: Set<string>;
  visibles: Set<string>;
}

interface TmpTodayStore {
  tmpToday: TmpTodayValues;
  setTmpToday: (tmpToday: Partial<TmpTodayValues>) => void;
}

const useTmpTodayStore = create<TmpTodayStore>((set) => ({
  tmpToday: {
    title: "",
    emojiUrl: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    mentions: new Set(),
    tags: new Set(),
    visibles: new Set(),
  },

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
      tmpToday: {
        title: "",
        emojiUrl: "",
        content: "",
        date: "",
        mentions: new Set(),
        tags: new Set(),
        visibles: new Set(),
      },
    }),
}));

export default useTmpTodayStore;
