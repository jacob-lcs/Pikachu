import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface BearState {
  isDarkMode: boolean
  setDarkMode: (isDarkMode: boolean) => void
}

export const useEditorState = create<BearState>()(
  devtools(
    (set) => ({
      isDarkMode: false,
      setDarkMode: (isDarkMode) => set(() => ({ isDarkMode: isDarkMode })),
    }),
  )
)