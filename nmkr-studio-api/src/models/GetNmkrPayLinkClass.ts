/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NmkrPayPaymentgatewayParamatersClass } from './NmkrPayPaymentgatewayParamatersClass';
import type { NmkrPayTransactionTypes } from './NmkrPayTransactionTypes';
import type { PaymentTransactionNotificationsClass } from './PaymentTransactionNotificationsClass';

export type GetNmkrPayLinkClass = {
  projectUid?: string | null;
  referer?: string | null;
  customerIpAddress?: string | null;
  customProperties?: Record<string, string | null> | null;
  paymentTransactionNotifications?: Array<PaymentTransactionNotificationsClass> | null;
  paymentTransactionType?: NmkrPayTransactionTypes;
  paymentgatewayParameters?: NmkrPayPaymentgatewayParamatersClass | null;
};
