<template>
  <div class="base-input">
    <div class="base-input__icon">
      <BaseIcon v-if="icon" :icon="icon" />
    </div>
    <div class="base-input__container" :class="{ 'base-input__container--has-value': model }">
      <label class="base-input__label" :for="id">{{ placeholder }}</label>
      <input class="base-input__field" v-model="model" :id="id" />
    </div>
  </div>
</template>

<script setup>
import BaseIcon from './base-icon.component.vue'

const model = defineModel()

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  icon: {
    type: Object,
    default: null,
  },
  id: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.base-input {
  @include flex($justify: center, $align: center);
  @include dimension(rem(354), rem(56));

  background-color: var(--surface-container-low);
  border-radius: $radius-lg;
  border: 1px solid transparent;

  &:focus-within {
    border-color: var(--primary);
  }

  &__container {
    position: relative;
    flex: 1;

    &:focus-within,
    &--has-value {
      @include flex($justify: space-between);
      
      .base-input__label {
        top: rem(10);
        right: 0;

        color: var(--primary);

        transform: translateY(-100%) scale(0.75);

      }
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    right: 0;

    color: var(--on-surface-variant);

    transform: translateY(-50%) scale(1);
    transform-origin: right top;
    transition:
      transform 0.2s ease,
      top 0.2s ease;


    pointer-events: none;
  }

  &__field {
    width: 100%;

    background-color: transparent;
    color: var(--on-surface);
    border: none;

    font-size: rem(16);

    &:focus {
      outline: none;
    }
  }

  &__icon {
    @include flex($justify: center, $align: center);

    width: rem(48);

    color: var(--on-surface-variant);
  }
}
</style>
