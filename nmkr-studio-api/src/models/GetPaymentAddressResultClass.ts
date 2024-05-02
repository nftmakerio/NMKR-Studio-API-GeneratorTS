/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tokens } from './Tokens';

export type GetPaymentAddressResultClass = {
  paymentAddress?: string | null;
  paymentAddressId?: number;
  expires?: string;
  readonly adaToSend?: string | null;
  readonly solToSend?: string | null;
  debug?: string | null;
  priceInEur?: number;
  priceInUsd?: number;
  priceInJpy?: number;
  priceInBtc?: number;
  effectivedate?: string;
  priceInLovelace?: number;
  additionalPriceInTokens?: Array<Tokens> | null;
  sendbackToUser?: number;
  revervationtype?: string | null;
  currency?: string | null;
  priceInLamport?: number;
};
