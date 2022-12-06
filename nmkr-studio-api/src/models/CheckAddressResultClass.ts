/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NFT } from './NFT';

export type CheckAddressResultClass = {
    state?: string | null;
    lovelace?: number;
    hasToPay?: number;
    payDateTime?: string | null;
    expiresDateTime?: string | null;
    transaction?: string | null;
    senderAddress?: string | null;
    reservedNft?: Array<NFT> | null;
    rejectReason?: string | null;
    rejectParameter?: string | null;
    stakeReward?: number | null;
    discount?: number | null;
    customProperty?: string | null;
};

