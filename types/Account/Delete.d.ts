/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeleteProps {}

export default class Delete extends SvelteComponentTyped<
  DeleteProps,
  { success: CustomEvent<any>; failure: CustomEvent<any> },
  {
    default: {
      actions: {
        delete: () => Promise<object>;
      };
    };
  }
> {}
