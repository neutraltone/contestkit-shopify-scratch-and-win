<template>
  <header class="relative">
    <DrawerToggleButton
      class="absolute top-0 right-0 z-20 p-2 m-2"
      @toggle="handleDrawerToggle"
    >
      <TimesSolid class="w-8 h-8 text-white" />
    </DrawerToggleButton>
  </header>
</template>

<script>
import TimesSolid from "@/components/Icons/TimesSolid";

import DrawerToggleButton from "./DrawerToggleButton";

export default {
  components: {
    DrawerToggleButton,
    TimesSolid,
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("toggle");
    },
  },
};
</script>
