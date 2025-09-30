/* generated using openapi-typescript-codegen -- do not edit */
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
  readonly aptToSend?: string | null;
  debug?: string | null;
  priceInEur?: number;
  priceInUsd?: number;
  priceInJpy?: number;
  effectivedate?: string;
  priceInLovelace?: number;
  additionalPriceInTokens?: Array<Tokens> | null;
  sendbackToUser?: number;
  revervationtype?: string | null;
  currency?: string | null;
  priceInLamport?: number;
  priceInOcta?: number;
  priceInSatoshi?: number;
};
