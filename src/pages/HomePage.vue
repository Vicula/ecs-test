<template>
  <div id="home-page">
    <LoadingWrapper>
      <h1>Test</h1>
    </LoadingWrapper>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import { defineComponent } from "vue";
import { Page } from "@/Mixins";
import { LoadingWrapper } from "@/components";

@Options({
  components: { LoadingWrapper },
})
export default class HomePage extends Page {
  mounted() {
  }
}
</script>
<style scoped lang="scss">
  h1{
    @apply w-5;
  }
</style>
