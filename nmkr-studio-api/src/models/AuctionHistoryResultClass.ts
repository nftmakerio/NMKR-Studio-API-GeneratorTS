/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuctionHistoryStates } from './AuctionHistoryStates';

export type AuctionHistoryResultClass = {
    txHash?: string | null;
    bidAmount?: number;
    created?: string;
    state?: AuctionHistoryStates;
    address?: string | null;
    returnTxHash?: string | null;
    signedAndSubmitted?: boolean;
};

