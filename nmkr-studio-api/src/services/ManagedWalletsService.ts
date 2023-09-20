/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateManagedWalletTransactionClass } from '../models/CreateManagedWalletTransactionClass';
import type { CreateWalletResultClass } from '../models/CreateWalletResultClass';
import type { ImportManagedWalletClass } from '../models/ImportManagedWalletClass';
import type { ImportWalletResultClass } from '../models/ImportWalletResultClass';
import type { MakeTransactionResultClass } from '../models/MakeTransactionResultClass';
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
  public getV2CreateWallet({
    customerid,
    walletpassword,
    enterpriseaddress,
    authorization,
    walletname = '',
  }: {
    customerid: number;
    walletpassword: string;
    enterpriseaddress: boolean;
    authorization?: string;
    walletname?: string;
  }): CancelablePromise<CreateWalletResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateWallet/{customerid}/{walletpassword}/{enterpriseaddress}/{walletname}',
      path: {
        customerid: customerid,
        walletpassword: walletpassword,
        enterpriseaddress: enterpriseaddress,
        walletname: walletname,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Creates an Managed Wallet
   * @returns CreateWalletResultClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2CreateWallet1({
    customerid,
    walletpassword,
    enterpriseaddress,
    authorization,
  }: {
    customerid: number;
    walletpassword: string;
    enterpriseaddress: boolean;
    authorization?: string;
  }): CancelablePromise<CreateWalletResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateWallet/{customerid}/{walletpassword}/{enterpriseaddress}',
      path: {
        customerid: customerid,
        walletpassword: walletpassword,
        enterpriseaddress: enterpriseaddress,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns the utxo of an Managed Wallet
   * @returns TxInAddressesClass Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2GetWalletUtxo({
    address,
    authorization,
  }: {
    address: string;
    authorization?: string;
  }): CancelablePromise<TxInAddressesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetWalletUtxo/{address}',
      path: {
        address: address,
      },
      headers: {
        authorization: authorization,
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
    authorization,
    requestBody,
  }: {
    customerid: number;
    authorization?: string;
    requestBody?: ImportManagedWalletClass;
  }): CancelablePromise<ImportWalletResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/ImportWallet/{customerid}',
      path: {
        customerid: customerid,
      },
      headers: {
        authorization: authorization,
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
   * Returns the utxo of an Managed Wallet
   * @returns Wallets Returns the CreateWalletResultClass Class
   * @throws ApiError
   */
  public getV2ListAllWallets({
    customerid,
    authorization,
  }: {
    customerid: number;
    authorization?: string;
  }): CancelablePromise<Array<Wallets>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListAllWallets/{customerid}',
      path: {
        customerid: customerid,
      },
      headers: {
        authorization: authorization,
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
    senderaddress,
    walletpassword,
    authorization,
    requestBody,
  }: {
    customerid: number;
    senderaddress: string;
    walletpassword: string;
    authorization?: string;
    requestBody?: CreateManagedWalletTransactionClass;
  }): CancelablePromise<MakeTransactionResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/MakeTransaction/{customerid}/{senderaddress}/{walletpassword}',
      path: {
        customerid: customerid,
        senderaddress: senderaddress,
        walletpassword: walletpassword,
      },
      headers: {
        authorization: authorization,
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
