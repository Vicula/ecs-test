<template>
  <section v-if="false" class="loading-wrapper">
    <span v-if="true">Retry</span>
    <span v-else>Error</span>
  </section>
  <Suspense v-else>
    <slot />
    <template #fallback>
      <section class="loading-wrapper">loading...</section>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { setup } from "vue-class-component";
import { useLoading, useDisplayStates } from "@/composables";
import { Component } from "@/Mixins";
import { Use, Set, Get } from "@/lib/test";
import { useToggleSystem } from "@/systems";
import { LoadingDisplayStateTypes } from "@/types";



export default class LoadingWrapper extends Component() {
  @Set({ types: [useLoading, useDisplayStates<LoadingDisplayStateTypes>] })
  private wrapperState!: useLoading & useDisplayStates<LoadingDisplayStateTypes>;

  @Use() private wrapperState2!: useToggleSystem;

  @Get() private wrapperState3!: useToggleSystem;

  // @Prop({
  //   type: Boolean,
  //   default: false,
  // })
  // retry?: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  retry?: boolean;

  mounted() {
    console.log(this.wrapperState2);
  }
}
</script>

<style lang="scss" scoped>

</style>
