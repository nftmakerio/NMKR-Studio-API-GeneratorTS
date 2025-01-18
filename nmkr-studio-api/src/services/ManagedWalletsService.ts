/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateManagedWalletClass } from '../models/CreateManagedWalletClass';
import type { CreateManagedWalletTransactionClass } from '../models/CreateManagedWalletTransactionClass';
import type { CreateWalletResultClass } from '../models/CreateWalletResultClass';
import type { GetKeyHashClass } from '../models/GetKeyHashClass';
import type { ImportManagedWalletClass } from '../models/ImportManagedWalletClass';
import type { ImportWalletResultClass } from '../models/ImportWalletResultClass';
import type { MakeTransactionResultClass } from '../models/MakeTransactionResultClass';
import type { SendAllAssetsTransactionClass } from '../models/SendAllAssetsTransactionClass';
import type { TxInAddressesClass } from '../models/TxInAddressesClass';
import type { Wallets } from '../models/Wallets';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ManagedWalletsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Creates an Managed Wallet
   * @returns CreateWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public postV2CreateWallet({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateManagedWalletClass;
  }): CancelablePromise<CreateWalletResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateWallet/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Returns the key hash of a Managed Wallet
   * @returns string Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public postV2GetKeyHash({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: GetKeyHashClass;
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/GetKeyHash/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Returns the utxo of a managed Wallet
   * @returns TxInAddressesClass Returns the TxInAddressesClass Class
   * @throws ApiError
   */
  public getV2GetWalletUtxo({ address }: { address: string }): CancelablePromise<TxInAddressesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetWalletUtxo/{address}',
      path: {
        address: address,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Imports an Wallet
   * @returns ImportWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public postV2ImportWallet({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: ImportManagedWalletClass;
  }): CancelablePromise<ImportWalletResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/ImportWallet/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Lists all managed Wallets
   * @returns Wallets Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2ListAllWallets({ customerid }: { customerid: number }): CancelablePromise<Array<Wallets>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListAllWallets/{customerid}',
      path: {
        customerid: customerid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Makes a transaction on a managed Wallet
   * @returns MakeTransactionResultClass Returns the MakeTransactionResult Class
   * @throws ApiError
   */
  public postV2MakeTransaction({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: CreateManagedWalletTransactionClass;
  }): CancelablePromise<MakeTransactionResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/MakeTransaction/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Send all ADA and all Tokens from a managed wallet to a receiver address
   * @returns MakeTransactionResultClass Returns the MakeTransactionResult Class
   * @throws ApiError
   */
  public postV2SendAllAssets({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: SendAllAssetsTransactionClass;
  }): CancelablePromise<MakeTransactionResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/SendAllAssets/{customerid}',
      path: {
        customerid: customerid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
}
