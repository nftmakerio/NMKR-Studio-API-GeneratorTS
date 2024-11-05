/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Blockchain } from './Blockchain';

export type PayoutWalletsClassV2 = {
  payoutWallet?: string | null;
  valuePercent?: number | null;
  valueFixInLovelace?: number | null;
  custompropertyCondition?: string | null;
  blockchain?: Blockchain;
};
