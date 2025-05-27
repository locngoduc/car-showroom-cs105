import { create } from "zustand";

type FloorStateStypes = {
  isFloorVisible: boolean;
  setIsFloorVisible: (isFloorVisible: boolean) => void;
};

export const useFloorStateStore = create<FloorStateStypes>()((set) => ({
  isFloorVisible: false,
  setIsFloorVisible: (isFloorVisible: boolean) => set({ isFloorVisible }),
}));
