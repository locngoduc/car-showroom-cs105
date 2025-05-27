import { create } from "zustand";

type LoadingStateTypes = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isModelReady: boolean;
  setIsModelReady: (isModelReady: boolean) => void;
};

export const useLoadingStateStore = create<LoadingStateTypes>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isModelReady: false,
  setIsModelReady: (isModelReady: boolean) => set({ isModelReady })
}));
