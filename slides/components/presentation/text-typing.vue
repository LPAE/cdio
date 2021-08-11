<template lang="pug">
  span
    span
      |{{currentText}}
    span.cursor(v-show="isRunning" :class="{'blinking': isRunning }")
      ||
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  watch
} from '@nuxtjs/composition-api';

interface StackAddType {
  type: 'add';
  text: string;
}

interface StackDeleteType {
  type: 'delete';
  count: number;
}

type Stack = StackDeleteType | StackAddType;

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 50
    },
    withErrors: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { emit }) {
    const delay = (timeout: number): Promise<void> => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };
    const getRandomTypingTime = () => {
      return Math.floor(Math.random() * props.speed);
    };
    const getRandomCharacter = () => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      return letters.charAt(Math.floor(Math.random() * letters.length));
    };
    const currentText = ref('');
    const stack = ref<Stack[]>([]);
    const isRunning = ref(false);
    let updater: {
      status: Promise<void>;
      cancel: () => void;
    } | null = null;
    const updateText = () => {
      let cancelExecution = false;

      const updaterFunction = async () => {
        if (stack.value.length === 0) {
          return;
        }

        if (isRunning.value && updater) {
          updater.cancel();
          await updater.status;
        }

        isRunning.value = true;

        for (
          let action = stack.value.shift();
          action;
          action = stack.value.shift()
        ) {
          if (action.type === 'delete') {
            for (let i = 0; i < action.count; i++) {
              await delay(5);
              if (cancelExecution) return;
              currentText.value = currentText.value.slice(
                0,
                currentText.value.length - 1
              );
            }
          } else {
            for (let i = 0; i < action.text.length; i++) {
              await delay(getRandomTypingTime());
              if (cancelExecution) return;
              if (props.withErrors && Math.random() < 0.1) {
                const numberOfWrongCharacters = Math.floor(Math.random() * 3);
                for (let k = 0; k < numberOfWrongCharacters; k++) {
                  currentText.value += getRandomCharacter();
                  await delay(getRandomTypingTime());
                }
                for (let k = 0; k < numberOfWrongCharacters; k++) {
                  await delay(getRandomTypingTime());
                  currentText.value = currentText.value.slice(
                    0,
                    currentText.value.length - 1
                  );
                }
              }
              currentText.value += action.text.charAt(i);
            }
          }
        }
        isRunning.value = false;
        !cancelExecution && emit('updated');
      };

      return {
        status: updaterFunction(),
        cancel: () => {
          cancelExecution = true;
        }
      };
    };

    watch(
      () => props.text,
      async (value: string, oldValue: string) => {
        let commonTextCount = 0;
        currentText.value = oldValue;

        stack.value = [];
        for (let i = 0; i < value.length; i++) {
          if (value.charAt(i) === oldValue.charAt(i)) {
            commonTextCount++;
          } else {
            break;
          }
        }
        if (commonTextCount < oldValue.length) {
          stack.value.push({
            type: 'delete',
            count: oldValue.length - commonTextCount
          });
        }
        if (commonTextCount <= value.length) {
          stack.value.push({ type: 'add', text: value.slice(commonTextCount) });
        }
        updater = updateText();
      }
    );

    onMounted(() => {
      if (props.text) {
        stack.value.push({ type: 'add', text: props.text });
        updater = updateText();
      }
    });

    return { currentText, isRunning };
  }
});
</script>

<style module>
.cursor {
  opacity: 0;
}
.blinking {
  animation: blink 0.5s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
}
</style>
