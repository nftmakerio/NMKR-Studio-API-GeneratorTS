/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentTransactionSubstates =
  | 'waitingforlocknft'
  | 'waitingforbid'
  | 'sold'
  | 'canceled'
  | 'readytosignbyseller'
  | 'readytosignbysellercancel'
  | 'readytosignbybuyer'
  | 'auctionexpired'
  | 'waitingforsale'
  | 'submitted'
  | 'confirmed';
