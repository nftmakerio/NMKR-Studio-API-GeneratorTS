/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { CreateSubcustomerApikeyClass } from '../models/CreateSubcustomerApikeyClass';
import type { CreateSubcustomerClass } from '../models/CreateSubcustomerClass';
import type { CreateSubcustomerResultClass } from '../models/CreateSubcustomerResultClass';
import type { GetMintCouponBalanceResultClass } from '../models/GetMintCouponBalanceResultClass';
import type { GetPayoutWalletsResultClass } from '../models/GetPayoutWalletsResultClass';
import type { GetTransactionsClass } from '../models/GetTransactionsClass';
import type { SubcustomerClass } from '../models/SubcustomerClass';
import type { TransactionsExportOptions } from '../models/TransactionsExportOptions';
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
  public getV2AddPayoutWallet({ walletaddress }: { walletaddress: string }): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/AddPayoutWallet/{walletaddress}',
      path: {
        walletaddress: walletaddress,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
        406: `Some data are not correct - eg wrong wallet address`,
      },
    });
  }
  /**
   * Creates a subcustomer
   * @returns CreateSubcustomerResultClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public postV2CreateApikeyForSubcustomer({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateSubcustomerApikeyClass;
  }): CancelablePromise<CreateSubcustomerResultClass | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateApikeyForSubcustomer/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
      },
    });
  }
  /**
   * Creates a subcustomer
   * @returns CreateSubcustomerResultClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public postV2CreateSubcustomer({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateSubcustomerClass;
  }): CancelablePromise<CreateSubcustomerResultClass | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateSubcustomer/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
      },
    });
  }
  /**
   * Returns all Transactions of a customer
   * @returns GetTransactionsClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public getV2GetCustomerTransactions({
    customerid,
    fromdate,
    todate,
    exportOptions,
  }: {
    customerid: number;
    fromdate?: string;
    todate?: string;
    exportOptions?: TransactionsExportOptions;
  }): CancelablePromise<Array<GetTransactionsClass> | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetCustomerTransactions/{customerid}',
      path: {
        customerid: customerid,
      },
      query: {
        fromdate: fromdate,
        todate: todate,
        exportOptions: exportOptions,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
      },
    });
  }
  /**
   * Returns the count of mint coupons in your account
   * @returns GetMintCouponBalanceResultClass Returns the GetMintCouponBalanceResultClass
   * @throws ApiError
   */
  public getV2GetMintCouponBalance(): CancelablePromise<GetMintCouponBalanceResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetMintCouponBalance',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
      },
    });
  }
  /**
   * Returns all payout wallets in your account
   * @returns GetPayoutWalletsResultClass Returns the GetPayoutWalletsResultClass
   * @throws ApiError
   */
  public getV2GetPayoutWallets(): CancelablePromise<Array<GetPayoutWalletsResultClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPayoutWallets',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
      },
    });
  }
  /**
   * Returns a list with all subcustomers
   * @returns SubcustomerClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public getV2GetSubcustomers({
    customerid,
  }: {
    customerid: number;
  }): CancelablePromise<Array<SubcustomerClass> | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetSubcustomers/{customerid}',
      path: {
        customerid: customerid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
      },
    });
  }
}
