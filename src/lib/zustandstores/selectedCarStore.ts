import { create } from "zustand";
import { cars } from "../cars";
import { CarColorProps } from "../types/types";

type SelectedCarProps = {
  logo: string;
  country: string;
  manufacturer: string;
  model: string;
  year: string;
  sound?: string;
  colors: CarColorProps[];
  displacement: string;
  maxPower: string;
  torque: string;
  drivetrain: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  description: string;
};

const car1 = cars[0];
export const useSelectedCarStore = create<{
  selectedCar: SelectedCarProps;
  setSelectedCar: (car: SelectedCarProps) => void;
}>()((set) => ({
  selectedCar: {
    logo: car1.logo,
    country: car1.country,
    manufacturer: car1.manufacturer,
    model: car1.model,
    year: car1.year,
    sound: car1.sound,
    colors: car1.colors,
    displacement: car1.displacement,
    maxPower: car1.maxPower,
    torque: car1.torque,
    drivetrain: car1.drivetrain,
    length: car1.length,
    width: car1.width,
    height: car1.height,
    weight: car1.weight,
    description: car1.description,
  },
  setSelectedCar: (car: SelectedCarProps) => set(() => ({ selectedCar: car })),
}));
