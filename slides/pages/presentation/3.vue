<template lang="pug">
  .index
    app-presentation-toolbar(:current-breakpoint="currentBreakpoint")
    app-presentation.index-presentation(:current-breakpoint="currentBreakpoint")
</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from '@nuxtjs/composition-api';
import appPresentation from '@/components/presentation/presentation.vue';
import appPresentationToolbar from '@/components/presentation/presentation-toolbar.vue';
import { RootState } from '~/store';

export default defineComponent({
  components: {
    appPresentationToolbar,
    appPresentation
  },

  setup(props, { emit }) {
    const store = useStore<RootState>();

    const keyboardEvent = (event: KeyboardEvent) => {
      const keysNextBreakpoint = ['ArrowRight', ' ', 'Enter'];
      const keysPreviousBreakpoint = ['ArrowLeft'];
      if (keysNextBreakpoint.includes(event.key)) {
        store.dispatch('slide/toNext');
      } else if (keysPreviousBreakpoint.includes(event.key)) {
        store.dispatch('slide/toPrevious');
      }
    };

    onMounted(() => {
      window.addEventListener('keyup', keyboardEvent);
      if (store.getters['slide/currentBreakpoint'].autoplay) {
        setTimeout(() => {
          store.dispatch('slide/toNext');
        }, store.getters['slide/currentBreakpoint'].timeout || 0);
      }
    });
    return {
      currentBreakpoint: store.getters['slide/currentBreakpoint']
    };
  }
});
</script>

<style module>
.index {
  background-color: #000;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
