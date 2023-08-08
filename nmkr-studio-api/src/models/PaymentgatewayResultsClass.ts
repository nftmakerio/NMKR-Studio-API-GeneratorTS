/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MintNftsResultClass } from './MintNftsResultClass';
import type { Tokens } from './Tokens';

export type PaymentgatewayResultsClass = {
  priceInLovelace?: number | null;
  fee?: number | null;
  minUtxo?: number | null;
  mintNfts?: MintNftsResultClass;
  additionalPriceInTokens?: Array<Tokens> | null;
};
