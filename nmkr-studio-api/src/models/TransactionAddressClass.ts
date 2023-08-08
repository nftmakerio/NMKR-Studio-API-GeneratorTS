/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressTxInClass } from './AddressTxInClass';

export type TransactionAddressClass = {
    pkh?: string | null;
    addresses?: Array<AddressTxInClass> | null;
    collateralTxIn?: string | null;
    changeAddress?: string | null;
};

