<template>
  <div id="home-page">
    <LoadingWrapper ref="loadingRef">
      <Test />
    </LoadingWrapper>
  </div>
</template>

<script setup lang="ts">
import { LoadingWrapper, Test } from "@/components";
import { ref, onMounted } from "vue";

const loadingRef = ref<InstanceType<typeof LoadingWrapper> | null>(null);
onMounted(() => {
  console.log(loadingRef.value?.error);
});
</script>
