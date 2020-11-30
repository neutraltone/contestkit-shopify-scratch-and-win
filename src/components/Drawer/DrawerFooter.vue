<template>
  <div
    class="absolute inset-x-0 bottom-0 flex justify-center px-4 pt-4 lg:px-8 lg:pt-8"
    :class="{
      'pointer-events-none': !isPlayed,
    }"
  >
    <div
      class="flex flex-col items-center justify-between w-full max-w-sm p-6 text-black duration-300 ease-in-out bg-white shadow-lg transform-gpu sm:p-12 transition-opacity-transform delay-2000 rounded-t-2xl"
      :class="{
        'translate-y-full opacity-0': !isPlayed,
        'translate-y-0 opacity-100': isPlayed,
      }"
    >
      <div class="flex flex-col justify-center w-full text-center">
        <h2 class="mb-2 text-2xl font-semibold">Congratulations!</h2>
        <Countdown class="mb-2" />
        <form>
          <div>
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div>
            <Button>Claim Prize</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import Countdown from "@/components/Countdown/Countdown";

export default {
  props: {
    isPlayed: {
      required: true,
      type: Boolean,
    },
  },
  components: {
    Button,
    Countdown,
  },
  methods: {
    handleClaimPrizeClick() {
      this.$emit("claim");
    },
  },
};
</script>
