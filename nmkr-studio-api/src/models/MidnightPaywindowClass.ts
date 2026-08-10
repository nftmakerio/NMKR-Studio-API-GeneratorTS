/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaywindowNft } from './PaywindowNft';
import type { PaywindowRecipient } from './PaywindowRecipient';
export type MidnightPaywindowClass = {
  id?: string | null;
  ownerSeed?: string | null;
  contractAddress?: string | null;
  nft?: PaywindowNft | null;
  recipients?: Array<PaywindowRecipient> | null;
};
