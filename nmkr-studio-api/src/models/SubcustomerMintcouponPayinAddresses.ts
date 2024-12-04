/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Blockchain } from './Blockchain';
import type { Coin } from './Coin';

export type SubcustomerMintcouponPayinAddresses = {
  blockchain?: Blockchain;
  address?: string | null;
  network?: string | null;
  coin?: Coin;
  pricePerMintCoupon?: number;
};
