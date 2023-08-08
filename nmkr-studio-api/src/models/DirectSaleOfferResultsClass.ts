/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SmartcontractDirectsaleReceiverClass } from './SmartcontractDirectsaleReceiverClass';

export type DirectSaleOfferResultsClass = {
  offerPrice?: number;
  lockedInAmount?: number;
  buyerAddress?: string | null;
  buyerTxDatumHash?: string | null;
  buyerTxHash?: string | null;
  buyerTxCreate?: string | null;
  sellerAddress?: string | null;
  receivers?: Array<SmartcontractDirectsaleReceiverClass> | null;
};
