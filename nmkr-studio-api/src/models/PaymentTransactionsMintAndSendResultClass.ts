/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MintAndSendSubstates } from './MintAndSendSubstates';

export type PaymentTransactionsMintAndSendResultClass = {
    state?: MintAndSendSubstates;
    transactionId?: string | null;
    executed?: string | null;
    receiverAddress?: string | null;
};

