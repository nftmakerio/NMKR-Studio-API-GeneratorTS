/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayoutWalletState } from './PayoutWalletState';

export type GetPayoutWalletsResultClass = {
    walletAddress?: string | null;
    created?: string;
    state?: PayoutWalletState;
    comment?: string | null;
};

