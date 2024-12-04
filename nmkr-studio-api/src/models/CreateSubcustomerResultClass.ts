/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubcustomerMintcouponPayinAddresses } from './SubcustomerMintcouponPayinAddresses';

export type CreateSubcustomerResultClass = {
  description?: string | null;
  externalId?: string | null;
  subcustomerId?: number;
  created?: string;
  mintcouponPayinAddresses?: Array<SubcustomerMintcouponPayinAddresses> | null;
};
