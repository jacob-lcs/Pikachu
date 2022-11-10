import create from 'zustand'

interface SettingsPanelState {
  bears: number
  increase: (by: number) => void
}

export const useSettingsPanelStore = create<SettingsPanelState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))