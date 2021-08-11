<template lang="pug">
.image-wrapper
  transition-group(name="fade")
    img.image-layer(v-for="image in currentImages" :src="image" :key="image")
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from '@nuxtjs/composition-api';
export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props) {
    const currentImages: Ref<string[]> = ref([]);

    watch(
      () => props.currentBreakpoint,
      (value) => {
        if (!value) return;
        if (value.images) currentImages.value = value.images;
        else currentImages.value = [];
      }
    );
    return { currentImages };
  }
});
</script>

<style module lang="scss">
.image-layer {
  width: 100em;
  height: 56.25em;
  position: absolute;
  object-fit: contain;
}
.image-wrapper {
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 1s, opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform-origin: center center;
  transform: translate3d(4em, 0, 0);
}
</style>
