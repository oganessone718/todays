import { create } from "zustand";

export interface TmpTodayValues {
  id?: number;
  title: string;
  content: string;
  date: string;
  emojiUrl: string;
  mentions: string[];
  tags: string[];
  visibles: string[];
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
    mentions: [],
    tags: [],
    visibles: [],
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
        mentions: [],
        tags: [],
        visibles: [],
      },
    }),
}));

export default useTmpTodayStore;
