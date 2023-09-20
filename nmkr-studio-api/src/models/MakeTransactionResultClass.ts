/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MakeTransactionResults } from './MakeTransactionResults';

export type MakeTransactionResultClass = {
  state?: MakeTransactionResults;
  errorMessage?: string | null;
  txHash?: string | null;
  executed?: string;
  fee?: number | null;
};
