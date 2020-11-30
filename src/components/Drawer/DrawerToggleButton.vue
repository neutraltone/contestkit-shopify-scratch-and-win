<template>
  <button class="focus:outline-none" @click="handleButtonClick">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    handleButtonClick() {
      this.$emit("toggle");
    },
  },
};
</script>
