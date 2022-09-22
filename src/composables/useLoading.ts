import { computed, ref } from "vue";
import { Utils } from "@/utils/Utils";

export default class useLoading {
  // state encapsulated and managed by the composable
  private loading = ref(false);
  public delay = ref(0);
  public isLoading = computed({
    get: () => this.loading.value,
    set: async (val) => {
      this.delay.value && (await Utils.sleep(this.delay.value));
      this.loading.value = val;
    },
  });

  constructor(isLoading?: boolean, delay?: number) {
    delay && (this.delay.value = delay);
    isLoading && (this.isLoading.value = isLoading);
  }
}
