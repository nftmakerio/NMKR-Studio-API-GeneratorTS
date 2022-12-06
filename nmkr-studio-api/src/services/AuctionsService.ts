/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAuctionStateResultClass } from '../models/GetAuctionStateResultClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuctionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns the state - and the last bids of a auction project
     * @param auctionuid
     * @param authorization
     * @returns GetAuctionStateResultClass Returns an array of the GetAuctionStateResultClass
     * @throws ApiError
     */
    public getV2GetAuctionState(
        auctionuid: string,
        authorization?: string,
    ): CancelablePromise<Array<GetAuctionStateResultClass>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/GetAuctionState/{auctionuid}',
            path: {
                'auctionuid': auctionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
                404: `Not Found`,
            },
        });
    }

}
