<template>
  <div id="home-page">
    <LoadingWrapper>
      <h1>Test</h1>
    </LoadingWrapper>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import { Page } from "@/Mixins";
import { LoadingWrapper } from "@/components";

@Options({
  components: { LoadingWrapper },
})
export default class HomePage extends Page {
  mounted() {}
}
</script>
