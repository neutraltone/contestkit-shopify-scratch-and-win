<template>
  <div
    class="absolute inset-0 z-20 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-50 lg:p-8"
    :class="{
      'opacity-0 pointer-events-none delay-150': !isOpen,
      'opacity-100': isOpen,
    }"
  >
    <div
      class="relative flex flex-col w-full max-w-md max-h-full duration-300 ease-in-out bg-white border border-gray-200 shadow-2xl transform-gpu transition-opacity-transform rounded-2xl"
      :class="{
        'opacity-0 translate-y-14': !isOpen,
        'opacity-100 translate-y-0 delay-150': isOpen,
      }"
    >
      <div
        class="flex items-center justify-between pl-4 border-b border-gray-200 sm:pl-8"
      >
        <h2 class="mr-8 text-2xl font-semibold truncate whitespace-nowrap">
          {{ title }}
        </h2>
        <button @click="handleCloseModalClick" class="p-2">
          <TimesSolid class="w-8 h-8 text-black" />
        </button>
      </div>
      <div class="p-4 overflow-auto typography rounded-b-2xl sm:px-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import TimesSolid from "@/components/Icons/TimesSolid";

export default {
  props: {
    isOpen: {
      require: true,
      type: Boolean,
    },
    title: {
      default: "More Info",
      type: String,
    },
  },
  components: {
    TimesSolid,
  },
  methods: {
    handleCloseModalClick() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.typography h1,
.typography h2,
.typography h3,
.typography h4,
.typography h5,
.typography h6,
.typography p,
.typography ul,
.typography ol {
  margin: 1em 0;
}

.typography > first-child {
  margin-top: 0;
}

.typography > last-child {
  margin-bottom: 0;
}
</style>
