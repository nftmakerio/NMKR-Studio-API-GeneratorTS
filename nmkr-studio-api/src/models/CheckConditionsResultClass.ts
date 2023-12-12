/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssetsAssociatedWithAccount } from './AssetsAssociatedWithAccount';
import type { FrankenAddressProtectionClass } from './FrankenAddressProtectionClass';

export type CheckConditionsResultClass = {
  conditionsMet?: boolean;
  rejectReason?: string | null;
  rejectParameter?: string | null;
  sendBackAddress?: FrankenAddressProtectionClass;
  assetsAssociatedWithAccount?: Array<AssetsAssociatedWithAccount> | null;
  stakeAddress?: string | null;
};
