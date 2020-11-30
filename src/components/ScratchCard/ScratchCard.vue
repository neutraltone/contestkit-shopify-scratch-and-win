<template>
  <div
    class="relative max-w-xs duration-300 delay-1000 transition-width-shadow"
    :class="{ 'shadow-2xl': isPlayed, 'shadow-none': !isPlayed }"
  >
    <img
      srcset="
        @/assets/images/scratch-card/ScratchCardBottom.png,
        @/assets/images/scratch-card/ScratchCardBottom@2x.png 2x,
        @/assets/images/scratch-card/ScratchCardBottom@3x.png 3x
      "
      src="@/assets/images/scratch-card/ScratchCardBottom.png"
      alt="Sorry not this time"
      width="480"
      height="582"
    />
    <img
      @click="handleCardScratch"
      class="absolute top-0 transition-opacity cursor-pointer"
      :class="{ 'opacity-0': isPlayed, 'opacity-100': !isPlayed }"
      src="@/assets/images/scratch-card/ScratchCardTop.png"
      srcset="
        @/assets/images/scratch-card/ScratchCardTop.png,
        @/assets/images/scratch-card/ScratchCardTop@2x.png 2x,
        @/assets/images/scratch-card/ScratchCardTop@3x.png 3x
      "
      alt="Scratch Me!"
      width="480"
      height="582"
    />
  </div>
</template>

<script>
export default {
  props: {
    isPlayed: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    handleCardScratch() {
      this.$emit("scratched", true);
    },
  },
};
</script>
