/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuctionHistoryResultClass } from './AuctionHistoryResultClass';

export type AuctionsResultClass = {
    jsonHash?: string | null;
    minBet?: number;
    runsUntil?: string;
    actualBid?: number | null;
    history?: Array<AuctionHistoryResultClass> | null;
    marketplaceFeePercent?: number | null;
    royaltyFeePercent?: number | null;
};

