/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TxInClass } from './TxInClass';

export type TxInAddressesClass = {
    address?: string | null;
    stakeAddress?: string | null;
    txIn?: Array<TxInClass> | null;
    readonly lovelaceSummary?: number;
    readonly tokensSum?: number;
    dataProvider?: string | null;
};

