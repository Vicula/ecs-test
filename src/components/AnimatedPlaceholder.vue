<template>
  <div class="placeholder"/>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Component } from "@/Mixins";

export default class AnimatedPlaceholder extends Component() {
  @Prop({
    type: Number,
    default: 50,
  })
  width?: number;

  @Prop({
    type: Number,
    default: 50,
  })
  height?: number;

  @Prop({
    type: Number,
    default: 0,
  })
  radius?: number;
}
</script>

<style lang="scss" scoped>
    .placeholder{
        
    }
</style>
