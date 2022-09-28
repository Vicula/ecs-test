<template>
  <!-- ROUTER OUTLET -->
  <RouterView />
</template>

<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
