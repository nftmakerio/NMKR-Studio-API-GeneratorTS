/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dataproviders } from './Dataproviders';
import type { TxInClass } from './TxInClass';
export type TxInAddressesClass = {
  address?: string | null;
  stakeAddress?: string | null;
  txIn?: Array<TxInClass> | null;
  readonly lovelaceSummary?: number;
  readonly tokensSum?: number;
  dataProvider?: Dataproviders;
  readonly totalTokenSum?: number;
};
