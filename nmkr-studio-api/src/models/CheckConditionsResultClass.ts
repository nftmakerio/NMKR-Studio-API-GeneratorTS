/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FrankenAddressProtectionClass } from './FrankenAddressProtectionClass';

export type CheckConditionsResultClass = {
  conditionsMet?: boolean;
  rejectReason?: string | null;
  rejectParameter?: string | null;
  sendBackAddress?: FrankenAddressProtectionClass;
};
