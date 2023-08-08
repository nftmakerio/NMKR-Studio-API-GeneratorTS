/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuctionsHistory } from './AuctionsHistory';
import type { AuctionsNft } from './AuctionsNft';

export type GetAuctionStateResultClass = {
  auctionname?: string | null;
  auctionType?: string | null;
  address?: string | null;
  minbet?: number;
  actualbet?: number;
  runsuntil?: string;
  selleraddress?: string | null;
  highestbidder?: string | null;
  created?: string;
  state?: string | null;
  royaltyfeespercent?: number | null;
  royaltyaddress?: string | null;
  marketplacefeepercent?: number | null;
  auctionsNfts?: Array<AuctionsNft> | null;
  auctionshistories?: Array<AuctionsHistory> | null;
};
