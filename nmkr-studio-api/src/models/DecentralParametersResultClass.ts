/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MintNftsResultClass } from './MintNftsResultClass';
import type { Tokens } from './Tokens';
export type DecentralParametersResultClass = {
  mintNfts?: MintNftsResultClass | null;
  priceInLovelace?: number | null;
  additionalPriceInTokens?: Array<Tokens> | null;
  stakeRewards?: number | null;
  discount?: number | null;
  rejectParameter?: string | null;
  rejectReason?: string | null;
  tokenRewards?: number | null;
  fees?: number | null;
  optionalReceiverAddress?: string | null;
};
