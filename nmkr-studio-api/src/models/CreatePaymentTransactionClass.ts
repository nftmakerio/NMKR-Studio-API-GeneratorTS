/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuctionParametersClass } from './AuctionParametersClass';
import type { DecentralParametersClass } from './DecentralParametersClass';
import type { DirectSaleParameterClass } from './DirectSaleParameterClass';
import type { PaymentgatewayParametersClass } from './PaymentgatewayParametersClass';
import type { PaymentTransactionNotificationsClass } from './PaymentTransactionNotificationsClass';
import type { PaymentTransactionTypes } from './PaymentTransactionTypes';
import type { TransactionParametersClass } from './TransactionParametersClass';

export type CreatePaymentTransactionClass = {
  projectUid?: string | null;
  paymentTransactionType?: PaymentTransactionTypes;
  customProperties?: Record<string, string | null> | null;
  transactionParameters?: Array<TransactionParametersClass> | null;
  paymentgatewayParameters?: PaymentgatewayParametersClass;
  decentralParameters?: DecentralParametersClass;
  auctionParameters?: AuctionParametersClass;
  directSaleParameters?: DirectSaleParameterClass;
  customerIpAddress?: string | null;
  paymentTransactionNotifications?: Array<PaymentTransactionNotificationsClass> | null;
  referer?: string | null;
  referencedPaymenttransactionUid?: string | null;
};
