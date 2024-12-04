/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubcustomerMintcouponPayinAddresses } from './SubcustomerMintcouponPayinAddresses';

export type SubcustomerClass = {
  description?: string | null;
  externalId?: string | null;
  subcustomerId?: number;
  created?: string;
  mintcouponPayinAddresses?: Array<SubcustomerMintcouponPayinAddresses> | null;
  mintCoupons?: number;
  loginUsername?: string | null;
};
