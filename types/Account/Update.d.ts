/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UpdateProps {}

export default class Update extends SvelteComponentTyped<
  UpdateProps,
  {
    successName: CustomEvent<any>;
    failureName: CustomEvent<any>;
    successEmail: CustomEvent<any>;
    failureEmail: CustomEvent<any>;
    successPassword: CustomEvent<any>;
    failurePassword: CustomEvent<any>;
  },
  {
    default: {
      actions: {
        name: (name: string) => Promise<object>;
        email: (email: string, password: string) => Promise<object>;
        password: (password: string, oldPassword: string) => Promise<object>;
      };
    };
  }
> {}
