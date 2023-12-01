/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdaRatesClass } from '../models/AdaRatesClass';
import type { AssetsAssociatedWithAccount } from '../models/AssetsAssociatedWithAccount';
import type { CheckConditionsResultClass } from '../models/CheckConditionsResultClass';
import type { CheckDiscountsResultClass } from '../models/CheckDiscountsResultClass';
import type { NmkrAssetAddress } from '../models/NmkrAssetAddress';
import type { RoyaltyClass } from '../models/RoyaltyClass';
import type { TokenRegistryMetadata } from '../models/TokenRegistryMetadata';
import type { TxInAddressesClass } from '../models/TxInAddressesClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ToolsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Checks if there applies a discount for an address
   * Checks if there applies a discount for an address
   * @returns CheckDiscountsResultClass Returns the CheckDiscountsResultClass Class
   * @throws ApiError
   */
  public getV2CheckIfEglibleForDiscount({
    projectuid,
    address,
  }: {
    projectuid: string;
    address: string;
  }): CancelablePromise<CheckDiscountsResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckIfEglibleForDiscount/{projectuid}/{address}',
      path: {
        projectuid: projectuid,
        address: address,
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
   * Checks, if an address matches the sale condtions
   * Checks, if an address matches the sale condtions of a project
   * @returns CheckConditionsResultClass Returns the CheckConditionsResultClass Class
   * @throws ApiError
   */
  public getV2CheckIfSaleCondtionsMet({
    projectuid,
    address,
    countnft,
  }: {
    projectuid: string;
    address: string;
    countnft: number;
  }): CancelablePromise<CheckConditionsResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckIfSaleCondtionsMet/{projectuid}/{address}/{countnft}',
      path: {
        projectuid: projectuid,
        address: address,
        countnft: countnft,
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
   * Returns the utxo of an address
   * @returns TxInAddressesClass Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public getV2CheckUtxo({ address }: { address: string }): CancelablePromise<TxInAddressesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckUtxo/{address}',
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
   * @returns any Success
   * @throws ApiError
   */
  public getV2GetActiveDirectsaleListings({ stakeaddress }: { stakeaddress: string }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetActiveDirectsaleListings/{stakeaddress}',
      path: {
        stakeaddress: stakeaddress,
      },
    });
  }

  /**
   * Returns the actual price in EUR and USD for ADA
   * @returns AdaRatesClass Returns the AdaRatesClass
   * @throws ApiError
   */
  public getV2GetAdaRates(): CancelablePromise<AdaRatesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAdaRates',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Returns all assets that are in a wallet
   * @returns AssetsAssociatedWithAccount Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public getV2GetAllAssetsInWallet({
    address,
  }: {
    address: string;
  }): CancelablePromise<Array<AssetsAssociatedWithAccount>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAllAssetsInWallet/{address}',
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
   * Returns the quantity of a specific token in a wallet
   * @returns AssetsAssociatedWithAccount Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public getV2GetAmountOfSpecificTokenInWallet({
    address,
    policyid,
    tokenname,
  }: {
    address: string;
    policyid: string;
    tokenname: string;
  }): CancelablePromise<AssetsAssociatedWithAccount> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAmountOfSpecificTokenInWallet/{address}/{policyid}/{tokenname}',
      path: {
        address: address,
        policyid: policyid,
        tokenname: tokenname,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Returns the quantity of a specific token in a wallet
   * @returns AssetsAssociatedWithAccount Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public postV2GetAmountOfSpecificTokenInWallet({
    policyid,
    tokenname,
    requestBody,
  }: {
    policyid: string;
    tokenname: string;
    requestBody?: Array<string>;
  }): CancelablePromise<AssetsAssociatedWithAccount> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/GetAmountOfSpecificTokenInWallet/{policyid}/{tokenname}',
      path: {
        policyid: policyid,
        tokenname: tokenname,
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
   * Returns the Token Registry Information for a specific token (if available)
   * @returns TokenRegistryMetadata Returns TokenRegistryMetadata
   * @throws ApiError
   */
  public getV2GetCardanoTokenRegistryInformation({
    policyid,
    tokenname,
  }: {
    policyid: string;
    /**
     * The Name of the Token (not HEX)
     */
    tokenname: string;
  }): CancelablePromise<TokenRegistryMetadata> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetCardanoTokenRegistryInformation/{policyid}/{tokenname}',
      path: {
        policyid: policyid,
        tokenname: tokenname,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `No Registry Information was not found`,
      },
    });
  }

  /**
   * Returns a snapshot with all addresses and tokens for a specific policyid
   * You will receive all tokens and the holding addresses of a specific policyid
   * @returns NmkrAssetAddress Returns an array of NmkrAssetAddress
   * @throws ApiError
   */
  public getV2GetPolicySnapshot({
    policyid,
    cumulateStakeAddresses = true,
  }: {
    policyid: string;
    cumulateStakeAddresses?: boolean;
  }): CancelablePromise<Array<NmkrAssetAddress>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPolicySnapshot/{policyid}/{cumulateStakeAddresses}',
      path: {
        policyid: policyid,
        cumulateStakeAddresses: cumulateStakeAddresses,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The policyid was not found`,
      },
    });
  }

  /**
   * Returns the royalty information for a specific policyid
   * You will receive the rate in percent and the wallet address for the royalties (if applicable) of a specific policyid
   * @returns RoyaltyClass Returns an array of RoyaltyClass
   * @throws ApiError
   */
  public getV2GetRoyaltyInformation({ policyid }: { policyid: string }): CancelablePromise<RoyaltyClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetRoyaltyInformation/{policyid}',
      path: {
        policyid: policyid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong policyid etc.)`,
        404: `There are no royalty informations for this policyid`,
        406: `The policyid is not valid`,
      },
    });
  }
}
