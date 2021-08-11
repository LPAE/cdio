import { MutationTree } from 'vuex'

type ColorScheme = 'light' | 'dark'
interface FocusState {
  focusElementId: string | null
  colorScheme: ColorScheme
  darkModeClick: {
    x: number
    y: number
  }
}

export const state = (): FocusState => ({
  focusElementId: '',
  colorScheme: 'dark',
  darkModeClick: {
    x: 0,
    y: 0,
  },
})

export const mutations: MutationTree<RootState> = {
  setFocusElement(state, payload) {
    state.focusElementId = payload.elementId
  },
  setBlurElement(state, payload) {
    if (payload.elementId === state.focusElementId) {
      state.focusElementId = null
    }
  },
  setDarkmodeClickPosition(state, payload) {
    state.darkModeClick.x = payload.clickX
    state.darkModeClick.y = payload.clickY
  },
  setColorScheme(state, payload) {
    state.colorScheme = payload.colorScheme
  },
}

export type RootState = ReturnType<typeof state>
