/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PricelistDiscountTypes } from './PricelistDiscountTypes';
export type PriceDiscountClassV2 = {
  condition?: PricelistDiscountTypes;
  description?: string | null;
  minvalue?: number | null;
  minvalue2?: number | null;
  minvalue3?: number | null;
  minvalue4?: number | null;
  minvalue5?: number | null;
  isActive?: boolean;
  sendbackDiscount?: number;
  policyIdOrStakeAddress1?: string | null;
  policyIdOrStakeAddress2?: string | null;
  policyIdOrStakeAddress3?: string | null;
  policyIdOrStakeAddress4?: string | null;
  policyIdOrStakeAddress5?: string | null;
  whitelistedAddresses?: Array<string> | null;
  policyProjectname?: string | null;
  operator?: string | null;
  couponcode?: string | null;
};
