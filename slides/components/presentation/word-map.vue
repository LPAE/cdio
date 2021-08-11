<template lang="pug">
.wrapper
  .words
    appTextTyping.word(v-for="word in layout.layout" :speed="150" :key="word.id" :style="{\
      'transform': `translate3d(${word.x}em, ${word.y}em, 0) rotate(${word.angle}deg)`,\
      'font-size':`${word.size}em`,\
      'width': `${word.width}em`,\
      'opacity': word.opacity \
      }" :text="word.text")
     
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api';
import appTextTyping from './text-typing.vue';
export default defineComponent({
  components: { appTextTyping },
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props) {
    const words = [
      'Impressão 3D',
      'Reconhecimento facial',
      'Blockchain',
      'Inteligência artificial ',
      'CAD',
      'Internet das coisas',
      'Realidade virtual ',
      'RFID ',
      'Carros autônomos ',
      'Robotização',
      'Assistentes virtuais',
      'iBPMS',
      'Computação em nuvem ',
      'GPS',
      'Aprendizado de máquina',
      'Big Data'
    ];
    const layout = reactive({
      layout: [
        {
          id: 0,
          x: -40,
          y: 29,
          angle: 90,
          text: '',
          size: 3,
          opacity: 1
        },
        {
          id: 1,
          x: -2,
          y: 0.3,
          angle: 0,
          text: '',
          size: 4,
          opacity: 0.91
        },
        {
          id: 2,
          x: 23,
          y: 4,
          angle: 0,
          text: '',
          size: 2,
          opacity: 0.84
        },
        {
          id: 3,
          x: -6.5,
          y: 50,
          angle: 90,
          text: '',
          size: 1.5,
          opacity: 0.92
        },
        {
          id: 4,
          x: 38,
          y: 4,
          angle: 0,
          text: '',
          size: 2,
          opacity: 0.85
        },
        {
          id: 5,
          x: -34,
          y: 53,
          angle: 90,
          text: '',
          size: 2.5,
          opacity: 0.91
        },
        {
          id: 6,
          x: 18,
          y: 9,
          angle: 0,
          text: '',
          size: 3,
          opacity: 0.92
        },
        {
          id: 7,
          x: 35,
          y: 6,
          angle: 0,
          text: '',
          size: 3.4,
          opacity: 0.93
        },
        {
          id: 8,
          x: 21,
          y: -2,
          angle: 0,
          text: '',
          size: 2.6,
          opacity: 0.83
        },
        {
          id: 9,
          x: -30,
          y: 36,
          angle: 90,
          text: '',
          size: 2.3,
          opacity: 0.9
        },
        {
          id: 10,
          x: 40,
          y: 16,
          angle: 0,
          text: '',
          size: 1.8,
          opacity: 0.94
        },
        {
          id: 11,
          x: -15.5,
          y: 54,
          angle: 90,
          text: '',
          size: 1.4,
          opacity: 0.7
        },
        {
          id: 12,
          x: 23,
          y: 12.5,
          angle: 0,
          text: '',
          size: 1.7,
          opacity: 0.8
        },
        {
          id: 13,
          x: 44,
          y: 0,
          angle: 0,
          text: '',
          size: 3,
          opacity: 0.9
        },
        {
          id: 14,
          x: 44,
          y: 3,
          angle: 0,
          text: '',
          size: 2,
          opacity: 0.6
        },
        {
          id: 15,
          x: -28,
          y: 61.5,
          angle: 90,
          text: '',
          size: 2,
          opacity: 0.4
        }
      ].map((word) => ({
        ...word,
        x: word.x / word.size,
        y: word.y / word.size,
        width: 100 / word.size
      }))
    });

    watch(
      () => props.currentBreakpoint,
      (value) => {
        if (value.label === '6') {
          for (let i = 0; i < words.length; i++) {
            layout.layout[i].text = words[i];
          }
        } else {
          for (let i = 0; i < words.length; i++) {
            layout.layout[i].text = '';
          }
        }
      }
    );
    return { layout };
  }
});
</script>

<style module lang="scss">
.word {
  position: absolute;
  color: var(--primary);
  font-weight: 700;
}

.words {
  position: absolute;
  transform: translate3d(47em, 29em, 0) scale(0.7);
  transform-origin: center center;
}
</style>
