/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuctionsResultClass } from './AuctionsResultClass';
import type { DecentralParametersResultClass } from './DecentralParametersResultClass';
import type { DirectSaleOfferResultsClass } from './DirectSaleOfferResultsClass';
import type { DirectSaleResultsClass } from './DirectSaleResultsClass';
import type { PaymentgatewayResultsClass } from './PaymentgatewayResultsClass';
import type { PaymentTransactionsMintAndSendResultClass } from './PaymentTransactionsMintAndSendResultClass';
import type { PaymentTransactionsStates } from './PaymentTransactionsStates';
import type { PaymentTransactionSubStateResultClass } from './PaymentTransactionSubStateResultClass';
import type { PaymentTransactionTypes } from './PaymentTransactionTypes';
import type { SmartContractInformationResultClass } from './SmartContractInformationResultClass';
import type { TransactionParametersClass } from './TransactionParametersClass';

export type PaymentTransactionResultClass = {
    paymentTransactionUid?: string | null;
    projectUid?: string | null;
    paymentTransactionType?: PaymentTransactionTypes;
    customProperties?: Record<string, string | null> | null;
    state?: PaymentTransactionsStates;
    transactionParameters?: Array<TransactionParametersClass> | null;
    paymentTransactionCreated?: string;
    paymentgatewayResults?: PaymentgatewayResultsClass;
    paymentTransactionSubStateResult?: PaymentTransactionSubStateResultClass;
    auctionResults?: AuctionsResultClass;
    directSaleResults?: DirectSaleResultsClass;
    directSaleOfferResults?: DirectSaleOfferResultsClass;
    decentralParameters?: DecentralParametersResultClass;
    mintAndSendResults?: PaymentTransactionsMintAndSendResultClass;
    smartContractInformation?: SmartContractInformationResultClass;
    cbor?: string | null;
    signedCbor?: string | null;
    expires?: string | null;
    signGuid?: string | null;
    fee?: number | null;
    txHash?: string | null;
    nmkrPayUrl?: string | null;
    referencedTransaction?: PaymentTransactionResultClass;
    customeripaddress?: string | null;
    referer?: string | null;
};

