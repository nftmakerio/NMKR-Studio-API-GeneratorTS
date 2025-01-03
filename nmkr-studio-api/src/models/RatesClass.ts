/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CryptoCoin } from './CryptoCoin';

export type RatesClass = {
  coin?: CryptoCoin;
  usdRate?: number;
  eurRate?: number;
  jpyRate?: number;
  btcRate?: number;
  effectivedate?: string;
};
