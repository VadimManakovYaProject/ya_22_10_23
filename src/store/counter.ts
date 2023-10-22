import { create } from "zustand"

interface ICounterStore {
  value: number;
  handleIncrement(): void;
  handleDecriment(): void;
}

export const useCounterStore = create<ICounterStore>((set) => ({
  value: 0,
  handleIncrement: () => set((state) => ({ value: state.value + 1 })),
  handleDecriment: () => set((state) => ({ value: state.value - 1 })),
}));