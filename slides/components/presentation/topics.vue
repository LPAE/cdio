<template lang="pug">
div.wrapper
  .list(:class='{"list-disable": currentTopics !== 1}')
    .topic(v-for="(topic, index) in topicsList.topics1" :style="{   \
      width: topic.width != null && (topic.width/(topic.size ||1)) +'em',   \
      height: topic.height != null && (topic.height/(topic.size ||1)) +'em', \
      'font-size': topic.size + 'em',\
      transform: `translate3d(${topic.x||0/(topic.size ||1)}em, ${topic.y||0/(topic.size ||1)}em, 0)` \
      }" :key="index" :class="{'bullet': !(topic.bullet == false) }")
      span.line(v-html="topic.text")
  .list.list-2(:class='{"list-disable": currentTopics !== 2}')
    .topic(v-for="(topic, index) in topicsList.topics2" :style="{   \
      width: topic.width != null && (topic.width/(topic.size ||1)) +'em',   \
      height: topic.height != null && (topic.height/(topic.size ||1)) +'em', \
      'font-size': topic.size + 'em',\
      transform: `translate3d(${topic.x||0/(topic.size ||1)}em, ${topic.y||0/(topic.size ||1)}em, 0)` \
      }" :key="index" :class="{'bullet': !(topic.bullet == false) }")
      span.line(v-html="topic.text")
</template>
<script lang="ts">
import appTextTyping from './text-typing.vue';
import { defineComponent, reactive, ref, watch } from '@nuxtjs/composition-api';

export default defineComponent({
  components: { appTextTyping },
  props: {
    topics: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props: any) {
    let setTimeoutId: any = null;
    const currentTopics = ref(1);
    const topicsList = reactive({ topics1: [], topics2: [] });

    watch(
      () => props.topics,
      (value: any) => {
        if (setTimeoutId) clearTimeout(setTimeoutId);
        if (currentTopics.value === 1) {
          topicsList.topics2 = value;
          currentTopics.value = 2;
          setTimeoutId = setTimeout(() => {
            topicsList.topics1 = [];
          }, 400);
        } else {
          currentTopics.value = 1;
          topicsList.topics1 = value;
          setTimeoutId = setTimeout(() => {
            topicsList.topics2 = [];
          }, 400);
        }
      }
    );
    return { currentTopics, topicsList };
  }
});
</script>

<style module lang="scss">
.wrapper {
  position: relative;
}

.list {
  list-style: none;
  padding: 0;
  position: absolute;
  margin: 0;
  transition: all 400ms;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  &-disable {
    opacity: 0;
    transform: translateX(1em);
  }
}

.topic {
  opacity: 1;
  display: inline-block;
  transition: all 400ms;
  position: relative;
  margin: 0;
  vertical-align: middle;
  margin-top: 2em;
  line-height: 1.5;
}
.topic span.line {
  word-break: break-word;
  max-width: 100%;
  font-size: 2em;
}
.topic.bullet {
  padding-left: 2em;
}
.topic.bullet::before {
  font-size: 4em;
  content: '• ';
  position: absolute;
  left: -0.5em;
  top: -0.45em;
  vertical-align: middle;
  color: var(--primary);
}
</style>
