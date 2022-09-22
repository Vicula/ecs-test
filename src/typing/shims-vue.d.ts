declare module "*.vue" {
  // eslint-disable-next-line prettier/prettier
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, never>;
  // noinspection JSDuplicatedDeclaration
  export default component;
}

declare module "*.vue" {
  import Vue from "vue";
  const value: Vue.VueConstructor<Vue>;
  // noinspection JSDuplicatedDeclaration
  export default value;
}

declare module "@/components/*" {
  import Vue from "vue";
  const value: Vue.VueConstructor<Vue>;
  // noinspection JSDuplicatedDeclaration
  export default value;
}

declare module "@/pages/*" {
  import Vue from "vue";
  const value: Vue.VueConstructor<Vue>;
  // noinspection JSDuplicatedDeclaration
  export default value;
}

declare module "*.json" {
  const value: never;
  export default value;
}
