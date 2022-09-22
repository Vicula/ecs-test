import { ref } from "vue";

export default class useDisplayStates<T> {
  public state;

  constructor(state: T) {
    this.state = ref(state);
  }
}
