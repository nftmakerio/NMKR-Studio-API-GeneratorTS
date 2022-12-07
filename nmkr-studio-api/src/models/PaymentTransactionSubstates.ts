/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export enum PaymentTransactionSubstates {
  WAITINGFORLOCKNFT = 'waitingforlocknft',
  WAITINGFORBID = 'waitingforbid',
  SOLD = 'sold',
  CANCELED = 'canceled',
  READYTOSIGNBYSELLER = 'readytosignbyseller',
  READYTOSIGNBYSELLERCANCEL = 'readytosignbysellercancel',
  READYTOSIGNBYBUYER = 'readytosignbybuyer',
  AUCTIONEXPIRED = 'auctionexpired',
  WAITINGFORSALE = 'waitingforsale',
  SUBMITTED = 'submitted',
  CONFIRMED = 'confirmed',
}
