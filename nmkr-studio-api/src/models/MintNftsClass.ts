/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReserveNftsClassV2 } from './ReserveNftsClassV2';

export type MintNftsClass = {
  countNfts?: number | null;
  reserveNfts?: Array<ReserveNftsClassV2> | null;
};
