/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVestingAddressClass } from '../models/CreateVestingAddressClass';
import type { CreateVestingAddressResultClass } from '../models/CreateVestingAddressResultClass';
import type { GetVestingAddressClass } from '../models/GetVestingAddressClass';
import type { TxInAddressesClass } from '../models/TxInAddressesClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VestingAddressesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Creates a vesting/staking address. Assets can be locked on a vesting address for a certain period of time.
   * @returns CreateVestingAddressResultClass
   * @throws ApiError
   */
  public postV2CreateVestingAddress({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateVestingAddressClass;
  }): CancelablePromise<CreateVestingAddressResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateVestingAddress/{customerid}',
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
   * Returns all vesting addresses from a customer account
   * @returns TxInAddressesClass Returns the vesting/locking addresses
   * @throws ApiError
   */
  public getV2GetUtxoFromVestingAddress({
    customerid,
    address,
  }: {
    customerid: number;
    address: string;
  }): CancelablePromise<TxInAddressesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetUtxoFromVestingAddress/{customerid}/{address}',
      path: {
        customerid: customerid,
        address: address,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Returns all vesting addresses from a customer account
   * @returns GetVestingAddressClass Returns the vesting/locking addresses
   * @throws ApiError
   */
  public getV2GetVestingAddresses({
    customerid,
  }: {
    customerid: number;
  }): CancelablePromise<Array<GetVestingAddressClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetVestingAddresses/{customerid}',
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
}
