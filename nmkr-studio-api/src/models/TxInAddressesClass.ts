/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dataproviders } from './Dataproviders';
import type { TxInClass } from './TxInClass';
import type { TxInTokensClass } from './TxInTokensClass';

export type TxInAddressesClass = {
  address?: string | null;
  stakeAddress?: string | null;
  txIn?: Array<TxInClass> | null;
  readonly lovelaceSummary?: number;
  readonly tokensSum?: number;
  dataProvider?: Dataproviders;
  readonly totalTokenSum?: number;
  readonly getAllTokens?: Array<TxInTokensClass> | null;
};
