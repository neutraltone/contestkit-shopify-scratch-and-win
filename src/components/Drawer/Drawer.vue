<template>
  <div
    class="fixed inset-y-0 w-full max-w-2xl transition-transform transform-gpu"
    :class="{
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen,
    }"
  >
    <div
      class="relative h-full duration-300 transition-color"
      :class="{
        'bg-green-500 translate-x-0': isOpen,
        'bg-red-500 -translate-x-full': !isOpen,
      }"
    >
      <DrawerHeader @toggle="handleDrawerToggle" />
      <DrawerBody
        :isOpen="isOpen"
        :isPlayed="isPlayed"
        @scratched="handleCardScratch($event)"
        @showMoreInfo="handleMoreInfoToggle"
      />
      <DrawerFooter :isPlayed="isPlayed" />
      <div
        class="absolute inset-y-0 right-0 flex items-center -z-10"
        :class="{ 'pointer-events-none': isOpen }"
      >
        <DrawerToggleButton
          class="flex-grow-0 p-6 pl-3 duration-300 transform-gpu transition-drawer-toggle"
          :class="{
            'bg-green-500 rounded-r-none -translate-x-0': isOpen,
            'bg-red-500 rounded-r-full translate-x-full': !isOpen,
          }"
          @toggle="handleDrawerToggle"
        >
          <Gift class="w-12 h-12 text-white" />
        </DrawerToggleButton>
      </div>
      <Modal :isOpen="isMoreInfoShown" @close="handleMoreInfoToggle">
        <h2>Something</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas totam
          tenetur, quod accusamus velit asperiores architecto non nobis odio
          sit, voluptatum harum hic iste vero at deleniti ipsa perferendis
          dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas totam
          tenetur, quod accusamus velit asperiores architecto non nobis odio
          sit, voluptatum harum hic iste vero at deleniti ipsa perferendis
          dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas totam
          tenetur, quod accusamus velit asperiores architecto non nobis odio
          sit, voluptatum harum hic iste vero at deleniti ipsa perferendis
          dolorum?
        </p>
      </Modal>
    </div>
  </div>
</template>

<script>
import Gift from "@/components/Icons/Gift";
import Modal from "@/components/Modal/Modal";
import DrawerBody from "./DrawerBody";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";
import DrawerToggleButton from "./DrawerToggleButton";

export default {
  components: {
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerToggleButton,
    Gift,
    Modal,
  },
  data: () => ({
    isMoreInfoShown: false,
    isOpen: false,
    isPlayed: false,
  }),
  methods: {
    handleCardScratch(event) {
      this.isPlayed = event;
    },
    handleDrawerToggle() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.isPlayed = false;
      }
    },
    handleMoreInfoToggle() {
      this.isMoreInfoShown = !this.isMoreInfoShown;
    },
  },
};
</script>
