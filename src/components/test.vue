<script default lang="tsx">
/**
==============================================================================
 * 
 * @module    Test
 * @brief   Wrapper component used to embed loading state functionality and
 *          fallback displays
 * 
 ==============================================================================
 */
export default defineComponent({
  Skeleton: defineComponent({
    name: "TestSkeleton",
    render() {
      return (
        <div>
          <AnimatedPlaceholder height="25px" width="100px" />
          <AnimatedPlaceholder height="25px" width="100px" />
          <AnimatedPlaceholder height="25px" width="100px" />
        </div>
      );
    },
  }),
});
</script>

<template>
  <div>
    <p>my txt</p>
    <p>my txt</p>
    <p>my txt</p>
  </div>
</template>

<script setup lang="tsx">
import { AnimatedPlaceholder } from "@/components";
import { defineComponent } from "vue";

defineExpose({});
</script>
