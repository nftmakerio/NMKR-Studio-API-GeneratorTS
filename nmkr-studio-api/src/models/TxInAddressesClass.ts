/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TxInClass } from './TxInClass';
import type { TxInTokensClass } from './TxInTokensClass';

export type TxInAddressesClass = {
  address?: string | null;
  stakeAddress?: string | null;
  txIn?: Array<TxInClass> | null;
  readonly lovelaceSummary?: number;
  readonly tokensSum?: number;
  dataProvider?: string | null;
  readonly totalTokenSum?: number;
  readonly getAllTokens?: Array<TxInTokensClass> | null;
};
