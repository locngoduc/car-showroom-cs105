import { create } from "zustand";

type CarColorStateTypes = {
  color: CarColorProps;
  setColor: (color: CarColorProps) => void;
};

type CarColorProps = {
  name: string;
  hexCode: string;
};

export const useCarColorStore = create<CarColorStateTypes>()(
  (set) => ({
    name: "test",
    hexCode: "#FFF",
    color: {
      name: "test",
      hexCode: "#FFF",
    },
    setColor: (color: CarColorProps) => set(() => ({ color })),
  })
);
