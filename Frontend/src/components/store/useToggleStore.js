import { create } from "zustand";

const useToggleStore = create((set) => ({
  //NavToggle
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  openNav: () => set({ isNavOpen: true }),
  closeNav: () => set({ isNavOpen: false }),
  //SesarchToggle
  isSearchOpen: false,
  toggleSearch: () => set((state) => ({isSearchOpen: !state.isSearchOpen})),
  openSearch: () => set({isSearchOpen: true}),
  closeSearch: () => set({isSearchOpen: false})
}));

export default useToggleStore;
