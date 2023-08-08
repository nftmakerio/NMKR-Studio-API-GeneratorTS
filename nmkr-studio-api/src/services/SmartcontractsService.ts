/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPaymentAddressResultClass } from '../models/GetPaymentAddressResultClass';
import type { PaymentTransactionResultClass } from '../models/PaymentTransactionResultClass';
import type { SmartcontractDirectsaleDatumInformationClass } from '../models/SmartcontractDirectsaleDatumInformationClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SmartcontractsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns GetPaymentAddressResultClass Success
   * @throws ApiError
   */
  public getV2GetBuyOutSmartcontractAddress({
    customerid,
    txHashLockedinAssets,
    authorization,
  }: {
    customerid: number;
    txHashLockedinAssets: string;
    authorization?: string;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetBuyOutSmartcontractAddress/{customerid}/{txHashLockedinAssets}',
      path: {
        customerid: customerid,
        txHashLockedinAssets: txHashLockedinAssets,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
        406: `Not Acceptable`,
        429: `Too Many Requests`,
        500: `Server Error`,
      },
    });
  }

  /**
   * Returns the datum information for a smartcontract directsale transaction
   * You will receive the datum information of a smartcontract directsale transaction (JPG Store V2 Contract and NMKR V2 Contract)
   * @returns SmartcontractDirectsaleDatumInformationClass Returns an array of SmartcontractDirectsaleDatumInformationClass
   * @throws ApiError
   */
  public getV2GetDatumInformationForSmartcontractDirectsaleTransaction({
    txhash,
    authorization,
  }: {
    txhash: string;
    authorization?: string;
  }): CancelablePromise<SmartcontractDirectsaleDatumInformationClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetDatumInformationForSmartcontractDirectsaleTransaction/{txhash}',
      path: {
        txhash: txhash,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong policyid etc.)`,
        404: `There are no royalty informations for this policyid`,
        406: `The policyid is not valid`,
      },
    });
  }

  /**
   * @returns PaymentTransactionResultClass Success
   * @throws ApiError
   */
  public getV2GetListedAssetPaymentTransaction({
    policyid,
    assetnameinhex,
    authorization,
  }: {
    policyid: string;
    assetnameinhex: string;
    authorization?: string;
  }): CancelablePromise<PaymentTransactionResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetListedAssetPaymentTransaction/{policyid}/{assetnameinhex}',
      path: {
        policyid: policyid,
        assetnameinhex: assetnameinhex,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not Found`,
        406: `Not Acceptable`,
        429: `Too Many Requests`,
        500: `Server Error`,
      },
    });
  }
}
