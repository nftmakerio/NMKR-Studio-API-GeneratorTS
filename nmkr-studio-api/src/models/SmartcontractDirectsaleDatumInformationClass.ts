/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SmartcontractDirectsaleReceiverClass } from './SmartcontractDirectsaleReceiverClass';

export type SmartcontractDirectsaleDatumInformationClass = {
  totalPriceInLovelace?: number;
  smartContractName?: string | null;
  smartContractAddress?: string | null;
  nmkrPayLink?: string | null;
  preparedPaymentTransactionId?: string | null;
  datumCbor?: string | null;
  receivers?: Array<SmartcontractDirectsaleReceiverClass> | null;
};
