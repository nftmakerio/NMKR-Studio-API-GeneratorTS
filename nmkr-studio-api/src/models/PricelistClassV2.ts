/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coin } from './Coin';
export type PricelistClassV2 = {
  countNft?: number;
  /**
   * @deprecated
   */
  priceInLovelace?: number | null;
  price?: number | null;
  currency?: Coin;
  isActive?: boolean;
  validFrom?: string | null;
  validTo?: string | null;
};
