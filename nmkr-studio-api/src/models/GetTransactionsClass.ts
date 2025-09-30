/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blockchain } from './Blockchain';
import type { GetTransactionNftsClass } from './GetTransactionNftsClass';
export type GetTransactionsClass = {
  created?: string;
  state?: string | null;
  nftprojectId?: number;
  ada?: number;
  fee?: number;
  mintingcostsada?: number;
  projectada?: number;
  projectincomingtxhash?: string | null;
  receiveraddress?: string | null;
  senderaddress?: string | null;
  transactionid?: string | null;
  transactiontype?: string | null;
  projectaddress?: string | null;
  eurorate?: number;
  nftcount?: number;
  tokencount?: number;
  originatoraddress?: string | null;
  stakereward?: number;
  stakeaddress?: string | null;
  additionalPayoutWallets?: number;
  confirmed?: boolean;
  priceintokensquantity?: number;
  priceintokenspolicyid?: string | null;
  priceintokenstokennamehex?: string | null;
  priceintokensmultiplier?: number;
  nmkrcosts?: number;
  discount?: number;
  customerProperty?: string | null;
  blockchain?: Blockchain;
  transactionNfts?: Array<GetTransactionNftsClass> | null;
  coin?: string | null;
  projectname?: string | null;
  nftProjectUid?: string | null;
};
