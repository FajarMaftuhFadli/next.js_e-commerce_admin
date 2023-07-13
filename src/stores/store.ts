import { create } from 'zustand';

type StoreState = {
  pageTitle: string;
  setPageTitle: (newPageTitle: string) => void;
};

const useStore = create<StoreState>((set) => ({
  pageTitle: '',
  setPageTitle: (newPageTitle) => set(() => ({ pageTitle: newPageTitle })),
}));

export default useStore;
