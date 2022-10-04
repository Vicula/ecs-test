<script default lang="ts">
/**
==============================================================================
 * 
 * @module    LoadingWrapper
 * @brief   Wrapper component used to embed loading state functionality and
 *          fallback displays
 * 
 ==============================================================================
 */
export default defineComponent({});
</script>

<template>
  <section v-if="error" class="loading-wrapper">
    <span v-if="true">Retry</span>
    <span v-else>{{ error }}</span>
  </section>
  <section v-else>
    <!-- <Suspense v-else> -->
    <slot />
    <!-- <template #fallback>
      <section class="loading-wrapper">loading...</section>
    </template> -->
    <!-- </Suspense> -->
  </section>
</template>

<script setup lang="ts">
import { defineComponent, useSlots, ref, Ref, onErrorCaptured } from "vue";

/**
 * @consts
 ------------------------------------------------------------------------------
 */

// const ViewA = defineAsyncComponent(() => import("./components/ViewA.vue"));
const slots = useSlots(),
  defaultSlot = slots.default?.()[0],
  skeleton = defaultSlot?.type.Skeleton,
  error: Ref<Error | null> = ref(null);

console.log();

defaultSlot && !defaultSlot.dirs && (defaultSlot.dirs = []);

/**
 * @hooks
 ------------------------------------------------------------------------------
 */

onErrorCaptured((err: Error) => {
  error.value = err;
});

defineExpose({
  /**
   * Here we can doc exposed properties
   */
  error,
});
</script>
