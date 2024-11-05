/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tokens } from './Tokens';

export type PricelistClass = {
  countNft?: number;
  priceInLovelace?: number;
  readonly adaToSend?: string | null;
  priceInEur?: number;
  priceInUsd?: number;
  priceInJpy?: number;
  priceInBtc?: number;
  effectivedate?: string;
  additionalPriceInTokens?: Array<Tokens> | null;
  paymentGatewayLinkForRandomNftSale?: string | null;
  currency?: string | null;
  sendBackCentralPaymentInLovelace?: number;
  readonly sendBackCentralPaymentInAda?: string | null;
  priceInLovelaceCentralPayments?: number;
  readonly adaToSendCentralPayments?: string | null;
  priceInLamport?: number;
  readonly solToSend?: string | null;
  validFrom?: string | null;
  validTo?: string | null;
};
