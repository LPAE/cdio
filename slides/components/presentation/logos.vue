<template lang="pug">
  transition(name="fade")
    .logos(v-show="currentBreakpoint.index === 'cover'")
      .logo.ifsc-logo
      .logo.daeln-logo
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } }
});
</script>

<style module lang="scss">
.logos {
  width: 100em;
  height: 56.25em;
  position: absolute;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  transform: translate3d(0, 47.25em, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 1s, opacity 1s;
}
.fade-enter-active {
  transition-delay: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(10em, 57.25em, 0) scale(0.3);
  transform-origin: center center;
}

.logo {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
}
.ifsc-logo {
  width: 50em;
  height: 5em;
  background-image: url('./assets/slides3/IFSC.svg');
}
.daeln-logo {
  background-image: url('./assets/slides3/daeln.svg');
  width: 50em;
  height: 5em;
}
</style>
