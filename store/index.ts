import { create } from 'zustand';

interface INavigationState {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

export const useNavBarStore = create<INavigationState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
}));
