<template lang="pug">
.header-wrapper 
  header.header
    span.header-title
      |Slides
</template>

<style module lang="scss">
.header-wrapper{
  width: 100vw;
  height: 56px;
}
.header {
  background-color: var(--component-background-color);
  position: fixed;
  padding: 1rem 2rem;
  box-shadow: var(--shadow1);
  width: 100vw;
  height: 24px;
  &-title {
    font-size: 24px;
    font-weight: 700;
    color: var(--component-text-color);
    text-decoration: none;
  }
}
</style>
