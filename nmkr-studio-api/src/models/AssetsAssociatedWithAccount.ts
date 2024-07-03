/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Blockchain } from './Blockchain';

export type AssetsAssociatedWithAccount = {
  unit?: string | null;
  quantity?: number | null;
  blockchain?: Blockchain;
  readonly fingerprint?: string | null;
  readonly assetName?: string | null;
  policyId?: string | null;
  assetNameInHex?: string | null;
};
