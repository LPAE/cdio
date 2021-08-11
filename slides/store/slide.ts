import { MutationTree, GetterTree, ActionTree } from 'vuex';
import breakpoints from '../breakpoints';

interface Topics {
  text: string;
  bullet?: boolean;
  width?: number;
  size?: number;
  x?: number;
  y?: number;
}

interface Breakpoint {
  title?: string;
  label: string;
  topics?: Topics[];
  images?: string[];
  background?: string;
  autoplay?: boolean;
  timeout?: number;
}

interface BreakpointsState {
  breakpoints: Breakpoint[];
  currentIndex: number;
}

export const state = (): BreakpointsState => ({
  breakpoints,
  currentIndex: 0
});

export type RootState = ReturnType<typeof state>;

let timeout: any;
const preload = (url: string) => {
  return new Promise((resolve, reject) => {
    if (process.client) {
      const img = new Image();
      img.src = url;
      img.addEventListener('load', () => resolve(img));
    } else {
      resolve(null);
    }
  });
};

const images = [
  require('../assets/slides3/daeln.svg'),
  require('../assets/slides3/IFSC.svg'),
  require('../assets/slides3/pendulo d.svg'),
  require('../assets/slides3/pendulo i.svg'),
  require('../assets/slides3/pendulo o.svg')
];

for (const breakpoint of breakpoints) {
  if (breakpoint.images) {
    for (const image of breakpoint.images) {
      images.push(image);
    }
  }
}

const loadedImages = Promise.all(images.map((image) => preload(image)));


export const mutations: MutationTree<RootState> = {
  setIndex(state, payload) {
    state.currentIndex = payload.index;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async toNext({ state, dispatch, commit }) {
    let newIndex: number;
    await loadedImages;

    if (state.currentIndex === state.breakpoints.length - 1) {
      newIndex = 0;
    } else {
      newIndex = state.currentIndex + 1;
    }

    commit({ type: 'setIndex', index: newIndex });

    if (state.breakpoints[newIndex].autoplay != undefined) {
      timeout = setTimeout(
        () => dispatch('toNext'),
        state.breakpoints[newIndex].timeout || 0
      );
    }
  },

  async toPrevious({ state, commit, dispatch }) {
    let newIndex: number;
    await loadedImages;

    if (state.currentIndex === 0) {
      newIndex = state.breakpoints.length - 1;
    } else {
      newIndex = state.currentIndex - 1;
    }

    commit({ type: 'setIndex', index: newIndex });

    if (state.breakpoints[newIndex].autoplay != undefined) {
      timeout = setTimeout(
        () => dispatch('toPrevious'),
        state.breakpoints[newIndex].timeout || 0
      );
    }
  }
};

export const getters: GetterTree<RootState, RootState> = {
  currentBreakpoint: (state) => state.breakpoints[state.currentIndex]
};
