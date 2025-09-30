/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TxInTokensClass } from './TxInTokensClass';
export type TxInClass = {
  txHash?: string | null;
  txId?: number;
  lovelace?: number;
  tokens?: Array<TxInTokensClass> | null;
  readonly txHashId?: string | null;
  txTimestamp?: string | null;
  readonly tokenSum?: number;
  scriptPubKey?: string | null;
  confirmations?: number | null;
};
