<template>
  <div>
    <input
      class="color-code"
      placeholder="Enter Color Code"
      type="text"
      v-model="ggcolorCode"
    />
  </div>
</template>

<script>
export default {
  computed: {
    ggcolorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(value) {
        this.$store.commit("setColorCode", value);
      },
    },
  },
};
</script>

<style>
</style>