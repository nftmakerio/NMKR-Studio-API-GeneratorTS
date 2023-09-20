/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionTokensClass } from './TransactionTokensClass';

export type TransactionReceiversClass = {
  receiverAddress?: string | null;
  receiverLovelace?: number;
  sendTokens?: Array<TransactionTokensClass> | null;
};
