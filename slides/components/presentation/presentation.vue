<template lang="pug">
.presentation-wrapper(ref="presentationWrapperEl" :style="{'font-size': scale + 'px' }")
  .presentation.presentation-screen
    app-newtons-cradle(:current-breakpoint='currentBreakpoint')
    app-logos(:current-breakpoint='currentBreakpoint')
    app-images(:current-breakpoint='currentBreakpoint')
    app-word-map(:current-breakpoint='currentBreakpoint')
    app-loading(:current-breakpoint='currentBreakpoint')
    app-image-rotation(:current-breakpoint='currentBreakpoint')
    .slide
      app-text-typing.slide-title(:text='currentBreakpoint.title ||""')
      app-topics.slide-topics(:topics='currentBreakpoint.topics')
</template>
<script lang="ts">
import appNewtonsCradle from './newtons-cradle.vue';
import appTextTyping from './text-typing.vue';
import appLoading from './loading.vue';
import appWordMap from './word-map.vue';
import appTopics from './topics.vue';
import appLogos from './logos.vue';
import appImages from './images.vue';
import appImageRotation from './image-rotation.vue';

import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  useStore,
  watch
} from '@nuxtjs/composition-api';
import { RootState } from '~/store';

export default defineComponent({
  components: {
    appNewtonsCradle,
    appLoading,
    appLogos,
    appTextTyping,
    appWordMap,
    appTopics,
    appImageRotation,
    appImages
  },
  setup() {
    const { getters } = useStore<RootState>();
    const currentBreakpoint = ref(getters['slide/currentBreakpoint']);
    watch(
      () => getters['slide/currentBreakpoint'],
      (value) => (currentBreakpoint.value = value)
    );

    const scale = ref(100);
    const presentationWrapperEl = ref() as Ref<HTMLElement>;
    const resize = () => {
      const width = presentationWrapperEl.value.offsetWidth;
      const height = presentationWrapperEl.value.offsetHeight;
      if (width / height > 1.777777) {
        // aspect ratio is greater than 16/9
        scale.value = (height * 1.777777) / 100;
      } else {
        scale.value = width / 100;
      }
    };
    if (process.browser) {
      window.addEventListener('resize', resize);
      onMounted(() => resize());
      onBeforeUnmount(() => {
        window.removeEventListener('resize', resize);
      });
    }

    return { currentBreakpoint, presentationWrapperEl, scale };
  }
});
</script>

<style module lang="scss">
.presentation-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 4em 4em;
  &-title {
    font-weight: 700;
    font-size: 3em;
    font-family: 'Roboto Mono', monospace;
    color: var(--primary);
  }
  &-topics {
    color: var(--text);
    margin-top: 1em;
    width: 93em;
  }
}

.presentation {
  z-index: 0;
  user-select: none;
  overflow: hidden;
  height: 56.25em;
  position: relative;
  width: 100em;
  background-color: var(--background);
}

.presentation-screen {
  display: block;
}

@media screen and (min-aspect-ratio: 16/9) {
  .presentation {
    font-size: 1.7777777777vh;
  }
}
</style>
