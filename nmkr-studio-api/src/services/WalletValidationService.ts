/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckWalletValidationResultClass } from '../models/CheckWalletValidationResultClass';
import type { GetWalletValidationAddressResultClass } from '../models/GetWalletValidationAddressResultClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WalletValidationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Returns the result of a wallet validation
   * Here you can check the result of a wallet validation. The result are "notvalidated", "validated","expired"
   * @returns CheckWalletValidationResultClass Returns the CheckWalletValidationResultClass Class
   * @throws ApiError
   */
  public getV2CheckWalletValidation({
    validationuid,
  }: {
    validationuid: string;
  }): CancelablePromise<CheckWalletValidationResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckWalletValidation/{validationuid}',
      path: {
        validationuid: validationuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns an address for wallet validation
   * When you call this API, you will receive an address for a wallet validation. The user can send any ada to this address and the ada (and tokens) will sent back to the sender. With the function CheckWalletValidation you can check the state of the address
   * @returns GetWalletValidationAddressResultClass Returns the GetWalletValidationAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetWalletValidationAddress({
    validationname = '',
  }: {
    validationname?: string;
  }): CancelablePromise<GetWalletValidationAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetWalletValidationAddress/{validationname}',
      path: {
        validationname: validationname,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns an address for wallet validation
   * When you call this API, you will receive an address for a wallet validation. The user can send any ada to this address and the ada (and tokens) will sent back to the sender. With the function CheckWalletValidation you can check the state of the address
   * @returns GetWalletValidationAddressResultClass Returns the GetWalletValidationAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetWalletValidationAddress1(): CancelablePromise<GetWalletValidationAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetWalletValidationAddress',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
}
