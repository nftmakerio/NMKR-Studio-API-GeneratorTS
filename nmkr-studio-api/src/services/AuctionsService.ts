/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAuctionClass } from '../models/CreateAuctionClass';
import type { GetAuctionsClass } from '../models/GetAuctionsClass';
import type { GetAuctionStateResultClass } from '../models/GetAuctionStateResultClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuctionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creates a new legacy auction in the cardano network
   * @returns GetAuctionStateResultClass Returns an array of the GetAuctionStateResultClass
   * @throws ApiError
   */
  public postV2CreateAuction({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateAuctionClass;
  }): CancelablePromise<GetAuctionStateResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateAuction/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Deletes an auction - if the auction is not already started
   * @returns any Returns an array of the GetAuctionStateResultClass
   * @throws ApiError
   */
  public getV2DeleteAuction({ auctionuid }: { auctionuid: string }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteAuction/{auctionuid}',
      path: {
        auctionuid: auctionuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Returns all auctions of the customer
   * @returns GetAuctionsClass Returns an array of the GetAuctionStateResultClass
   * @throws ApiError
   */
  public getV2GetAllAuctions({ customerid }: { customerid: number }): CancelablePromise<Array<GetAuctionsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAllAuctions/{customerid}',
      path: {
        customerid: customerid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Returns the state - and the last bids of a auction project
   * @returns GetAuctionStateResultClass Returns an array of the GetAuctionStateResultClass
   * @throws ApiError
   */
  public getV2GetAuctionState({ auctionuid }: { auctionuid: string }): CancelablePromise<GetAuctionStateResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAuctionState/{auctionuid}',
      path: {
        auctionuid: auctionuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }
}
