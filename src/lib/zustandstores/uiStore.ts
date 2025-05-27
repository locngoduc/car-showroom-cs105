import { create } from "zustand";

type UITypes = {
  isUIVisible: boolean;
  setIsUIVisible: (isUIVisible: boolean) => void;
  isInShowcaseMenu: boolean;
  setIsInShowcaseMenu: (isInShowcaseMenu: boolean) => void;
  isInLandingMenu: boolean;
  setIsInLandingMenu: (isInLandingMenu: boolean) => void;
  toggleUI: () => void;
  toggleShowcaseMenu: () => void;
  isInPaintSelection: boolean;
  setIsInPaintSelection: (isInPaintSelection: boolean) => void;
  togglePaintSelection: () => void;
  isInCarSelection: boolean;
  setIsInCarSelection: (isInCarSelection: boolean) => void;
  toggleCarSelection: () => void;
};

export const useUIStore = create<UITypes>()((set) => ({
  isUIVisible: true,
  setIsUIVisible: (isUIVisible: boolean) => set({ isUIVisible }),
  isInShowcaseMenu: false,
  setIsInShowcaseMenu: (isInShowcaseMenu: boolean) => set({ isInShowcaseMenu }),
  isInLandingMenu: true,
  setIsInLandingMenu: (isInLandingMenu: boolean) => set({ isInLandingMenu }),
  toggleShowcaseMenu: () => set((state) => ({ isInShowcaseMenu: !state.isInShowcaseMenu})),
  toggleUI: () => set((state) => ({ isUIVisible: !state.isUIVisible })),
  isInPaintSelection: false,
  setIsInPaintSelection: (isInPaintSelection: boolean) => set({ isInPaintSelection }),
  togglePaintSelection: () => set((state) => ({ isInPaintSelection: !state.isInPaintSelection})),
  isInCarSelection: false,
  setIsInCarSelection: () => set((state) => ({ isInCarSelection: !state.isInCarSelection})),
  toggleCarSelection: () => set((state) => ({ isInCarSelection: !state.isInCarSelection})),
}));
