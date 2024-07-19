import { create } from "zustand";

type tZustandStore = {
  tempNumber: number;
};

const useZustandStore = create<tZustandStore>((set) => ({
  tempNumber: 0,
}));

export default useZustandStore;
