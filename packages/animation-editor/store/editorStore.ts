import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useEditorState = create<BearState>()(
  devtools(
    (set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }),
  )
)