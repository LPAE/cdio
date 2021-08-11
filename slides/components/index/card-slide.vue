<template lang="pug">
  .card
    img.card-thumbnail(:src="thumbnail")
    .card-title
        |{{title}}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    thumbnail: { required: true, type: String },
    title: { required: true, type: String }
  }
});
</script>

<style module lang="scss">
.card {
  background-color: var(--component-background-color);
  border-radius: 5px;
  margin: 0.5rem;
  overflow: hidden;
  width: 350px;
  box-shadow: var(--shadow1);
  &-thumbnail {
    width: 100%;
  }
  &-title,
  &-title:visited {
    font-size: 14px;
    color: var(--component-text-color);
    text-decoration: none;
    padding: 0.25rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>
