<template>
  <div class="entity" v-bind:style="styleobj" :data-eid="eid"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { MaskUtils } from "../lib/ecs/MaskUtils";

interface Props {
  eid: string;
  entitydata: any;
}

const props = withDefaults(defineProps<Props>(), {
  eid: "hello",
  entitydata: {},
});

const styleobj = computed(() => {
  for (let c = 0; c < props.entitydata.components.length; c++) {
    if (
      MaskUtils.matchesAny(
        props.entitydata.components[c].mask,
        MaskUtils.Masks.StyleComponent
      )
    ) {
      return props.entitydata.components[c].data.style;
    }
  }
});
</script>

<style scoped>
.entity {
  border-radius: 5px;
}
</style>
