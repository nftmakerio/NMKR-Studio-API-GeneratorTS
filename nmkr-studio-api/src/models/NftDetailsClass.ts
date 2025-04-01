/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blockchain } from './Blockchain';
export type NftDetailsClass = {
  id?: number;
  ipfshash?: string | null;
  state?: string | null;
  name?: string | null;
  displayname?: string | null;
  detaildata?: string | null;
  minted?: boolean;
  receiveraddress?: string | null;
  selldate?: string | null;
  soldby?: string | null;
  reserveduntil?: string | null;
  policyid?: string | null;
  assetid?: string | null;
  assetname?: string | null;
  fingerprint?: string | null;
  initialminttxhash?: string | null;
  title?: string | null;
  series?: string | null;
  ipfsGatewayAddress?: string | null;
  metadata?: string | null;
  singlePrice?: number | null;
  uid?: string | null;
  paymentGatewayLinkForSpecificSale?: string | null;
  sendBackCentralPaymentInLovelace?: number | null;
  priceInLovelaceCentralPayments?: number | null;
  uploadSource?: string | null;
  priceInLamportCentralPayments?: number | null;
  singlePriceSolana?: number | null;
  priceInOctsCentralPayments?: number | null;
  mintedOnBlockchain?: Blockchain;
  mintingfees?: number | null;
};
