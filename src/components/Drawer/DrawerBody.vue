<template>
  <div
    class="flex flex-col items-center justify-center h-full p-4 text-white lg:p-8"
  >
    <div
      class="flex-grow-0 flex-shrink-0 max-w-xs pb-4 mx-auto overflow-hidden text-center duration-300 delay-1000 transition-height-opacity lg:pb-8"
      :class="{ 'opacity-0 h-0': isPlayed, 'opacity-100': !isPlayed }"
      :style="{ height: `${contentHeight}px` }"
      ref="content"
    >
      <h1 class="mb-2 text-2xl font-semibold">Win 10% off!</h1>
      <p class="mb-2">
        Scratch the card to be in with a chance to win 10% anything in store!
      </p>
      <button @click="handleMoreInfoClick" class="font-semibold">
        More info →
      </button>
    </div>
    <ScratchCard :isPlayed="isPlayed" @scratched="handleCardScratch($event)" />
    <div
      class="absolute inset-0 transition-opacity duration-700 ease-in-out blur delay-2100"
      :class="{
        'opacity-100': isPlayed,
        'opacity-0 pointer-events-none': !isPlayed,
      }"
    />
  </div>
</template>

<script>
import ScratchCard from "@/components/ScratchCard/ScratchCard";

export default {
  props: {
    isOpen: {
      required: true,
      type: Boolean,
    },
    isPlayed: {
      required: true,
      type: Boolean,
    },
  },
  data: () => ({
    contentHeight: null,
    initialContentHeight: null,
  }),
  components: {
    ScratchCard,
  },
  methods: {
    handleCardScratch(event) {
      this.contentHeight = 0;
      this.$emit("scratched", event);
    },
    handleMoreInfoClick() {
      this.$emit("showMoreInfo");
    },
  },
  watch: {
    isPlayed() {
      if (this.isPlayed === false) {
        this.contentHeight = this.$refs.content.offsetHeight;
      }
    },
    isOpen() {
      if (this.isOpen === true) {
        this.contentHeight = this.$refs.content.offsetHeight;
        this.initialContentHeight = this.contentHeight;
      }
      if (this.isOpen === false) {
        this.contentHeight = this.initialContentHeight;
      }
    },
  },
};
</script>

<style>
.blur {
  backdrop-filter: blur(1.5rem);
}
</style>
