/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SoldNftsOrTokensFromWhitelist } from './SoldNftsOrTokensFromWhitelist';

export type GetWhitelistEntriesClass = {
    addresss?: string | null;
    stakeaddress?: string | null;
    countNftsOrTokens?: number;
    created?: string;
    totalSoldNftsOrTokens?: number;
    soldNftsOrTokens?: Array<SoldNftsOrTokensFromWhitelist> | null;
};

