import { create } from 'zustand';

interface SideBarState {
    isSheetOpen: boolean;
    toggleSheet: () => void;
}

const useStore = create<SideBarState>((set) => ({
    isSheetOpen: false,
    toggleSheet: () => set((state) => ({ isSheetOpen: !state.isSheetOpen })),
}));

export default useStore;
