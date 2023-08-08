/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetWhitelistEntriesClass } from '../models/GetWhitelistEntriesClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WhitelistsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all entries of a projects whitelist
     * With this call you can retrieve all entries of a whitelist of a project (if the project has one)
     * @returns GetWhitelistEntriesClass Returns the complete whitelist and how much are already sold
     * @throws ApiError
     */
    public getV2ManageWhitelist({
        projectuid,
        authorization,
    }: {
        projectuid: string,
        authorization?: string,
    }): CancelablePromise<GetWhitelistEntriesClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ManageWhitelist/{projectuid}',
            path: {
                'projectuid': projectuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
                404: `The project was not found in our database or not assiged to your account`,
                406: `Some data are not correct - eg wrong wallet address`,
            },
        });
    }

    /**
     * Adds an entry to a projects whitelist
     * With this call you can add an entry to a whitelist of a project (if the project has one)
     * @returns any Returns when the address was added to the whitelist
     * @throws ApiError
     */
    public postV2ManageWhitelist({
        projectuid,
        address,
        countofnfts,
        authorization,
    }: {
        projectuid: string,
        address: string,
        countofnfts: number,
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ManageWhitelist/{projectuid}/{address}/{countofnfts}',
            path: {
                'projectuid': projectuid,
                'address': address,
                'countofnfts': countofnfts,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
                404: `The project was not found in our database or not assiged to your account`,
                406: `Some data are not correct - eg wrong wallet address`,
            },
        });
    }

    /**
     * Deletes an entry from a projects whitelist
     * With this call you can delete an entry from a whitelist of a project (if the project has one)
     * @returns any Returns, when the address was successfully deleted from the list
     * @throws ApiError
     */
    public deleteV2ManageWhitelist({
        projectuid,
        address,
        authorization,
    }: {
        projectuid: string,
        address: string,
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/ManageWhitelist/{projectuid}/{address}',
            path: {
                'projectuid': projectuid,
                'address': address,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
                404: `The project was not found in our database or not assiged to your account`,
                406: `Some data are not correct - eg wrong wallet address`,
            },
        });
    }

}
