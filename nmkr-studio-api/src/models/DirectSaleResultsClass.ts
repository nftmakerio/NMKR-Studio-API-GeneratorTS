/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetPaymentAddressResultClass } from './GetPaymentAddressResultClass';
import type { SmartcontractDirectsaleReceiverClass } from './SmartcontractDirectsaleReceiverClass';

export type DirectSaleResultsClass = {
    sellingPrice?: number;
    lockedInAmount?: number;
    sellerAddress?: string | null;
    buyerAddress?: string | null;
    sellerTxDatumHash?: string | null;
    sellerTxHash?: string | null;
    sellerTxCreate?: string | null;
    receivers?: Array<SmartcontractDirectsaleReceiverClass> | null;
    buyoutSmartcontractAddress?: GetPaymentAddressResultClass;
};

