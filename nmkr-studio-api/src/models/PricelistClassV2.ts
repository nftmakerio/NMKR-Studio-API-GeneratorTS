/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyTypes } from './CurrencyTypes';

export type PricelistClassV2 = {
  countNft?: number;
  /**
   * @deprecated
   */
  priceInLovelace?: number | null;
  price?: number | null;
  currency?: CurrencyTypes;
  isActive?: boolean;
  validFrom?: string | null;
  validTo?: string | null;
};
