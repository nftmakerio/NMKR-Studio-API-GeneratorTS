/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetNmkrPayLinkClass } from '../models/GetNmkrPayLinkClass';
import type { GetNmkrPayLinkResultClass } from '../models/GetNmkrPayLinkResultClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NmkrPayService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Returns a payment link for NMKR Pay
   * @returns GetNmkrPayLinkResultClass Returns the PaymentTransactionResultClass Class
   * @throws ApiError
   */
  public postV2GetNmkrPayLink({
    requestBody,
  }: {
    requestBody?: GetNmkrPayLinkClass;
  }): CancelablePromise<GetNmkrPayLinkResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/GetNmkrPayLink',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Returns the state of a payment link for NMKR Pay
   * @returns GetNmkrPayLinkResultClass Returns the PaymentTransactionResultClass Class
   * @throws ApiError
   */
  public getV2GetNmkrPayStatus({
    paymenttransactionuid,
  }: {
    paymenttransactionuid: string;
  }): CancelablePromise<GetNmkrPayLinkResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNmkrPayStatus/{paymenttransactionuid}',
      path: {
        paymenttransactionuid: paymenttransactionuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
