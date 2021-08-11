<template lang="pug">
.loader-wrapper(v-show="show")
  .loader carregando...
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api';

export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props) {
    const show = ref(props.currentBreakpoint.index === 'loading');
    watch(
      () => props.currentBreakpoint,
      (value) => {
        show.value = value.index === 'loading';
      }
    );
    return { show };
  }
});
</script>

<style module lang="scss">
.loader-wrapper {
  position: absolute;
  width: 100em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56.25em;
}
.loader,
.loader::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid #fff;
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #fff;
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
