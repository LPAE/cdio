<template lang="pug">
  div
    nuxt(:class="{'LAYOUT-COLOR-SCHEME-DARK': this.darkColorScheme, 'LAYOUT-COLOR-SCHEME-LIGHT': !this.darkColorScheme}")
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const darkColorScheme = ref<boolean>(false);
    if (process.browser && window && window.matchMedia) {
      darkColorScheme.value = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      const onColorSchemeChange = (event: MediaQueryListEvent) => {
        darkColorScheme.value = event.matches;
      };
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', onColorSchemeChange);

      onBeforeUnmount(() => {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', onColorSchemeChange);
      });
    }
    return { darkColorScheme };
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-weight: 300;
}
@media print {
  @page {
    size: 1920px 1080px;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
  }
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}
</style>
