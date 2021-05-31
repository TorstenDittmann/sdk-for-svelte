/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RecoverPasswordProps {}

export default class RecoverPassword extends SvelteComponentTyped<
  RecoverPasswordProps,
  {
    successRecover: CustomEvent<any>;
    failureRecover: CustomEvent<any>;
    successComplete: CustomEvent<any>;
    failureComplete: CustomEvent<any>;
  },
  {
    default: {
      actions: {
        recover: (email: string, url: string) => Promise<void>;
        complete: (
          user: string,
          secret: string,
          password: string,
          passwordAgain: string
        ) => Promise<void>;
      };
    };
  }
> {}
