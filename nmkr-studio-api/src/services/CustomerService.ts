/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { GetPayoutWalletsResultClass } from '../models/GetPayoutWalletsResultClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomerService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Adds a payout wallet to your account
   * With this call you can add a payout wallet in your account. You have to confirm the wallet by clicking the link in the email
   * @returns ApiErrorResultClass Returns the Apiresultclass with the information about the address
   * @throws ApiError
   */
  public getV2AddPayoutWallet({
    walletaddress,
    authorization,
  }: {
    walletaddress: string;
    authorization?: string;
  }): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/AddPayoutWallet/{walletaddress}',
      path: {
        walletaddress: walletaddress,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
        406: `Some data are not correct - eg wrong wallet address`,
      },
    });
  }

  /**
   * Returns all payout wallets in your account
   * @returns GetPayoutWalletsResultClass Returns the GetPayoutWalletsResultClass
   * @throws ApiError
   */
  public getV2GetPayoutWallets({
    authorization,
  }: {
    authorization?: string;
  }): CancelablePromise<Array<GetPayoutWalletsResultClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPayoutWallets',
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
      },
    });
  }
}
