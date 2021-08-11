<template lang="pug">
.toolbar-wrapper(ref="wrapperElement" @click="mouseClick($event)", @mousemove="mouseMove" :class="{'toolbar-hide-cursor': !toolbarActive}")
  .toolbar(:class='{ "toolbar-active": toolbarActive}', @pointerout="toolbarOut", @pointerover="toolbarOver", ref="toolbar")
    .toolbar-button(@click="toolbarToPrevious()")
      |<
    .counter
      |{{label}}
    .toolbar-button(@click="toolbarToNext()")
      |>
</template>

<script lang="ts">
import {
  defineComponent,
  Ref,
  ref,
  useStore,
  watch
} from '@nuxtjs/composition-api';
import { RootState } from '~/store';

export default defineComponent({
  setup() {
    const timeoutHideToolbar = 1000;
    const toolbarActive = ref(true);
    const wrapperElement = ref() as Ref<HTMLElement>;
    let toolbarFocus = true;

    let intervalHideToolbar: any;
    const { state, dispatch, getters } = useStore<RootState>();
    const label = ref(state.slide.currentIndex);
    watch(
      () => getters['slide/currentBreakpoint'],
      (value) => {
        label.value = value.label;
      }
    );

    const toolbarOver = () => {
      if (intervalHideToolbar) {
        clearTimeout(intervalHideToolbar);
      }
      toolbarActive.value = true;
      toolbarFocus = true;
    };

    const toolbarOut = () => {
      if (intervalHideToolbar) {
        clearTimeout(intervalHideToolbar);
      }
      toolbarFocus = false;
      intervalHideToolbar = setTimeout(() => {
        if (!toolbarFocus) {
          toolbarActive.value = false;
        }
      }, timeoutHideToolbar);
      toolbarFocus = false;
    };

    const toolbarToNext = () => {
      dispatch('slide/toNext');
    };

    const toolbarToPrevious = () => {
      dispatch('slide/toPrevious');
    };

    const mouseClick = (event: MouseEvent) => {
      if (wrapperElement.value == event.target) {
        if (!toolbarFocus) {
          toolbarActive.value = false;
        }
        if (event.clientX > window.innerWidth / 2) {
          toolbarToNext();
        } else {
          toolbarToPrevious();
        }
      }
    };
    const mouseMove = () => {
      if (!toolbarActive.value) {
        toolbarActive.value = true;
        setTimeout(() => {
          if (!toolbarFocus) {
            toolbarActive.value = false;
          }
        }, timeoutHideToolbar);
      }
    };
    return {
      wrapperElement,
      toolbarActive,
      mouseMove,
      mouseClick,
      toolbarOut,
      toolbarOver,
      toolbarToNext,
      toolbarToPrevious,
      label
    };
  }
});
</script>

<style module>
.toolbar-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.toolbar-controls {
  display: flex;
  width: 50%;
}

.toolbar-button,
.counter {
  background-color: var(--component-background-color);
  font-size: 1rem;
  font-family: 'Segoe UI', Helvetica, sans-serif;
  color: var(--component-text-color);
  height: 36px;
  width: 36px;
  margin: 0.25rem;
  border-radius: 99px;
  text-align: center;
  vertical-align: middle;
  line-height: 36px;
  box-shadow: var(--shadow3);
}
.toolbar-hide-cursor {
  cursor: none;
  opacity: 0;
}

.toolbar {
  background-color: var(--page-background-color);
  user-select: none;
  transition: all 0.25s;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 1rem;
  border-radius: 6px;
  padding: 0.5rem;
}

.toolbar-active {
  opacity: 1;
}
</style>
