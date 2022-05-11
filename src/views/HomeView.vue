<template>
  <counter />
  <counter-squared />
  <dynamic-color />
  <buttons />
</template>

<script>
// @ is an alias to /src
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";
import DynamicColor from "../components/DynamicColor.vue";
import Buttons from "../components/Buttons.vue";

export default {
  name: "HomeView",
  components: {
    Counter,
    CounterSquared,
    DynamicColor,
    Buttons,
  },
};
</script>




<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 8em;
  font-weight: bold;
}
.buttons {
  display: flex;
  justify-content: center;
}
.btn1 {
  background: #41b883;
  color: white;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
}
.btn2 {
  background: #395062;
  color: white;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
}
.color-code {
  padding: 4px;
  font-size: 20px;
}
</style>