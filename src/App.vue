<template>
  <!-- ROUTER OUTLET -->
  <RouterView />
</template>
@import "sass/styles";
<script lang="ts">
import { Options, Vue, setup } from "vue-class-component";

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "styles";

</style>
