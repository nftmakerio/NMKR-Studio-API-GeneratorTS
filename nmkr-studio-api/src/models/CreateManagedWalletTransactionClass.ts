/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionReceiversClass } from './TransactionReceiversClass';

export type CreateManagedWalletTransactionClass = {
  receivers?: Array<TransactionReceiversClass> | null;
  senderaddress?: string | null;
  walletpassword?: string | null;
};
