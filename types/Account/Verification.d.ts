/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VerificationProps {}

export default class Verification extends SvelteComponentTyped<
  VerificationProps,
  {
    successCreate: CustomEvent<any>;
    failureCreate: CustomEvent<any>;
    successComplete: CustomEvent<any>;
    failureComplete: CustomEvent<any>;
  },
  {
    default: {
      actions: {
        create: (url: string) => Promise<object>;
        complete: (user: string, secret: string) => Promise<object>;
      };
    };
  }
> {}
