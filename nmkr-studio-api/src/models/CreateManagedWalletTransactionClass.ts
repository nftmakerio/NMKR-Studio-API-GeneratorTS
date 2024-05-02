/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionReceiversClass } from './TransactionReceiversClass';

export type CreateManagedWalletTransactionClass = {
  senderaddress?: string | null;
  walletpassword?: string | null;
  receivers?: Array<TransactionReceiversClass> | null;
};
