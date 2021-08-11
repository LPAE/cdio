<template lang="pug">
  svg.newtons-cradle(:class="{'newtons-cradle-right':currentBreakpoint.index === 'blank', 'newtons-cradle-left':currentBreakpoint.index !== 'blank' && currentBreakpoint.index !=='cover'}" viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      defs
        radialGradient(id="shadow-ball" cx="20%" cy="20%" r="1" gradientTransform="rotate(0, 0, 0)" gradientUnits="objectBoundingBox")
          stop(stop-color="#fff" stop-opacity="0.2" offset="0")
          stop(stop-color="#000" stop-opacity="0.5" offset="100%")
        radialGradient(id="shadow-ball-first" cx="20%" cy="20%" r="1" gradientUnits="objectBoundingBox")
          stop(stop-color="#fff" stop-opacity="0.2" offset="0")
          stop(stop-color="#000" stop-opacity="0.5" offset="100%")
          animateTransform(
            ref="firstShadowBallEl"
            attributeName="gradientTransform"
            type="rotate"
            begin="2s"
            keyTimes="0; 0.25; 0.5; 1"
            values="0; 15; 0; 0;"
            dur="2s"
            repeatCount="indefinite")
        radialGradient(id="shadow-ball-last" cx="20%" cy="20%" r="1" gradientUnits="objectBoundingBox")
          stop(stop-color="#fff" stop-opacity="0.2" offset="0")
          stop(stop-color="#000" stop-opacity="0.5" offset="100%")
          animateTransform(
            ref="lastShadowBallEl"
            attributeName="gradientTransform"
            type="rotate"
            begin="2s"
            keyTimes="0; 0.25; 0.5; 1"
            values="0; -15; 0; 0;"
            dur="2s"
            repeatCount="indefinite")
      g.newtons-cradle-ball-first
        line.newtons-cradle-line(x1="50" y1="0" x2="50" y2="45" stroke-width="0.2")
        circle(fill="#00e2ff" r="10" cx="50" cy="45")
        circle.newtons-cradle-ball-shadow(r="10" cx="50" cy="45" fill="url(#shadow-ball-first)" )
        image(width="20" y="35" x="40" height="20" :xlink:href="require('../../assets/slides3/pendulo c.svg')")
      g.newtons-cradle-ball-middle.newtons-cradle-ball-second
        line.newtons-cradle-line(x1="70" y1="0" x2="70" y2="45" stroke-width="0.2")
        circle(fill="#aab500" r="10" cx="70" cy="45")
        circle.newtons-cradle-ball-shadow(r="10" cx="70" cy="45" fill="url(#shadow-ball)" )
        image(width="20" x="60" y="35" height="20" :xlink:href="require('../../assets/slides3/pendulo d.svg')")
      g.newtons-cradle-ball-middle.newtons-cradle-ball-third
        line.newtons-cradle-line(x1="90" y1="0" x2="90" y2="45" stroke-width="0.2")
        circle(fill="#ca2a00" r="10" cx="90" cy="45")
        circle.newtons-cradle-ball-shadow(r="10" cx="90" cy="45" fill="url(#shadow-ball)" )
        image(width="20" x="80" y="35" height="20" :xlink:href="require('../../assets/slides3/pendulo i.svg')")
      g.newtons-cradle-ball-last
        line.newtons-cradle-line(x1="110" y1="0" x2="110" y2="45" stroke-width="0.2")
        circle(fill="#0050d8" r="10" cx="110" cy="45")
        circle.newtons-cradle-ball-shadow(r="10" cx="110" cy="45" fill="url(#shadow-ball-last)" )
        image(width="20" transform-origin="110 45" x="100" y="35" height="20" :xlink:href="require('../../assets/slides3/pendulo o.svg')")
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from '@nuxtjs/composition-api';

interface SVGAnimateElementWithCommands extends SVGAnimateElement {
  endElement(): void;
  beginElementAt(time: number): void;
}
export default defineComponent({
  props: { currentBreakpoint: { type: Object, required: true } },
  setup(props) {
    const firstShadowBallEl = ref() as Ref<SVGAnimateElementWithCommands>;
    const lastShadowBallEl = ref() as Ref<SVGAnimateElementWithCommands>;
    watch(
      () => props.currentBreakpoint,
      (value) => {
        const animations = [
          { time: 2, element: firstShadowBallEl },
          { time: 1, element: lastShadowBallEl }
        ];
        if (value.index === 'cover') {
          for (const animation of animations) {
            if (animation.element) {
              animation.element.value.beginElementAt(animation.time);
            }
          }
        } else {
          for (const animation of animations) {
            if (animation.element) {
              animation.element.value.endElement();
            }
          }
        }
      }
    );
    return { firstShadowBallEl, lastShadowBallEl };
  }
});
</script>

<style module lang="scss">
@keyframes first-ball {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50%,
  100% {
    transform: rotate(0deg);
  }
}

@keyframes middle-ball {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-0.5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(0.5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes last-ball {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50%,
  100% {
    transform: rotate(0deg);
  }
}

.newtons-cradle-ball-first {
  animation: first-ball 2s forwards infinite;
  transform-origin: 50px 0;
  animation-delay: 2s;
}

.newtons-cradle-ball-middle {
  animation: middle-ball 2s forwards infinite;
  animation-delay: 1s;
}

.newtons-cradle-ball-second {
  transform-origin: 70px 0;
}

.newtons-cradle-ball-third {
  transform-origin: 90px 0;
}

.newtons-cradle-ball-last {
  animation: last-ball 2s forwards infinite;
  transform-origin: 110px 0;
  animation-delay: 3s;
}

.newtons-cradle-line {
  stroke: var(--text);
}

.newtons-cradle {
  width: 100em;
  position: absolute;
  transition: transform 3s;
  transform: translate(0, 0) scale(1.2);
}

.newtons-cradle-right {
  transform: translate(200em, 0) scale(5);
}

.newtons-cradle-left {
  transform: translate(-200em, 0) scale(5);
}
:is(.newtons-cradle-left, .newtons-cradle-right)
  :is(.newtons-cradle-ball-first, .newtons-cradle-ball-middle, .newtons-cradle-ball-last) {
  animation: none;
}
</style>
