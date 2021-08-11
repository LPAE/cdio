<template lang="pug">
  .index
    app-header
    .card-wrapper
      a.link(href="presentation/1.html")
        app-card-slide(title="Primeira apresentação" :thumbnail="require('../assets/1.webp')")
      a.link(href="presentation/2.html")
        app-card-slide(title="Segunda apresentação" :thumbnail="require('../assets/2.webp')")
      nuxt-link.link(to="/presentation/3")
        app-card-slide(title="Terceira apresentação" :thumbnail="require('../assets/3.webp')")
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import appCardSlide from '~/components/index/card-slide.vue';
import appHeader from '~/components/index/header.vue';

export default defineComponent({
  components: { appHeader, appCardSlide }
});
</script>

<style module>
.index {
  background-color: var(--page-background-color);
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.card-wrapper {
  display: flex;
  width: 100vw;
  height: calc(100vh - 56px);
  justify-content: center;
  align-items: center;
}
.link{
  text-decoration: none;
}
</style>
