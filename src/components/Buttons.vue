<template>
  <div class="buttons">
    <button class="btn1" @click="$store.dispatch('decreaseCounter')">
      Decrease
    </button>
    <button class="btn2" @click="$store.dispatch('increaseCounter')">
      Increase
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>