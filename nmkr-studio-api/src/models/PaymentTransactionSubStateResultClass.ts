/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentTransactionSubstates } from './PaymentTransactionSubstates';

export type PaymentTransactionSubStateResultClass = {
    paymentTransactionSubstate?: PaymentTransactionSubstates;
    lastTxHash?: string | null;
};

