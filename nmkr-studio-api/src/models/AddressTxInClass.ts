/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TxInClass } from './TxInClass';

export type AddressTxInClass = {
    address?: string | null;
    utxo?: Array<TxInClass> | null;
};

