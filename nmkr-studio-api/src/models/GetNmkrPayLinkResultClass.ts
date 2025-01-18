/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DecentralParametersResultClass } from './DecentralParametersResultClass';
import type { NmkrPayTransactionTypes } from './NmkrPayTransactionTypes';
import type { PaymentgatewayParametersClass } from './PaymentgatewayParametersClass';
import type { PaymentTransactionsStates } from './PaymentTransactionsStates';
import type { PaymentTransactionSubstates } from './PaymentTransactionSubstates';
import type { PaymentTransactionTypes } from './PaymentTransactionTypes';
export type GetNmkrPayLinkResultClass = {
  paymentTransactionUid?: string | null;
  projectUid?: string | null;
  customProperties?: Record<string, string | null> | null;
  state?: PaymentTransactionsStates;
  paymentTransactionCreated?: string;
  customeripaddress?: string | null;
  referer?: string | null;
  txHash?: string | null;
  expires?: string | null;
  nmkrPayUrl?: string | null;
  paymentgatewayParameters?: PaymentgatewayParametersClass | null;
  paymentgatewayResults?: DecentralParametersResultClass | null;
  transactionType?: NmkrPayTransactionTypes;
  paymentTransactionSubstate?: PaymentTransactionSubstates;
  paymentGatewayType?: PaymentTransactionTypes;
};
