/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSplitAddressClass } from '../models/CreateSplitAddressClass';
import type { GetSplitAddressClass } from '../models/GetSplitAddressClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SplitAddressesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Creates a split address
   * @returns GetSplitAddressClass
   * @throws ApiError
   */
  public postV2CreateSplitAddress({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateSplitAddressClass;
  }): CancelablePromise<GetSplitAddressClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateSplitAddress/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Returns all split addresses from a customer account
   * Returns all split addresses from a customer account
   * @returns GetSplitAddressClass Returns the split addresses
   * @throws ApiError
   */
  public getV2GetSplitAddresses({
    customerid,
  }: {
    customerid: number;
  }): CancelablePromise<Array<GetSplitAddressClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetSplitAddresses/{customerid}',
      path: {
        customerid: customerid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Updates a split address
   * @returns GetSplitAddressClass
   * @throws ApiError
   */
  public putV2UpdateSplitAddress({
    customerid,
    address,
    requestBody,
  }: {
    customerid: number;
    address: string;
    requestBody?: CreateSplitAddressClass;
  }): CancelablePromise<GetSplitAddressClass> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/UpdateSplitAddress/{customerid}/{address}',
      path: {
        customerid: customerid,
        address: address,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
