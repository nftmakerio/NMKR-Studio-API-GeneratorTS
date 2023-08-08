/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PricelistDiscountTypes } from './PricelistDiscountTypes';

export type PriceDiscountClassV2 = {
  condition?: PricelistDiscountTypes;
  description?: string | null;
  minvalue?: number;
  isActive?: boolean;
  sendbackDiscount?: number;
  policyIdOrStakeAddress1?: string | null;
  policyIdOrStakeAddress2?: string | null;
  policyIdOrStakeAddress3?: string | null;
  policyIdOrStakeAddress4?: string | null;
  policyIdOrStakeAddress5?: string | null;
  whitelistedAddresses?: Array<string> | null;
  policyProjectname?: string | null;
};
