import { RootState as AccessibilityState } from './accessibility';
import { RootState as SlideState } from './slide';

import { ActionTree } from 'vuex';

export const state = () => ({});
export type RootState = {
  accessibility: AccessibilityState;
  slide: SlideState;
};
