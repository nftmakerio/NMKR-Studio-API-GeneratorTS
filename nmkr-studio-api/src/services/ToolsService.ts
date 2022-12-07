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
   * @param projectuid
   * @param address
   * @param authorization
   * @returns CheckDiscountsResultClass Returns the CheckDiscountsResultClass Class
   * @throws ApiError
   */
  public getV2CheckIfEglibleForDiscount(
    projectuid: string,
    address: string,
    authorization?: string,
  ): CancelablePromise<CheckDiscountsResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckIfEglibleForDiscount/{projectuid}/{address}',
      path: {
        projectuid: projectuid,
        address: address,
      },
      headers: {
        authorization: authorization,
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
   * @param projectuid
   * @param address
   * @param countnft
   * @param authorization
   * @returns CheckConditionsResultClass Returns the CheckConditionsResultClass Class
   * @throws ApiError
   */
  public getV2CheckIfSaleCondtionsMet(
    projectuid: string,
    address: string,
    countnft: number,
    authorization?: string,
  ): CancelablePromise<CheckConditionsResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckIfSaleCondtionsMet/{projectuid}/{address}/{countnft}',
      path: {
        projectuid: projectuid,
        address: address,
        countnft: countnft,
      },
      headers: {
        authorization: authorization,
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
   * @param address
   * @returns TxInAddressesClass Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public getV2CheckUtxo(address: string): CancelablePromise<TxInAddressesClass> {
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
   * Returns the actual price in EUR and USD for ADA
   * @param authorization
   * @returns AdaRatesClass Returns the AdaRatesClass
   * @throws ApiError
   */
  public getV2GetAdaRates(authorization?: string): CancelablePromise<AdaRatesClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAdaRates',
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Returns all assets that are in a wallet
   * @param address
   * @param authorization
   * @returns AssetsAssociatedWithAccount Returns the AssetsAssociatedWithAccount Class
   * @throws ApiError
   */
  public getV2GetAllAssetsInWallet(
    address: string,
    authorization?: string,
  ): CancelablePromise<AssetsAssociatedWithAccount> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAllAssetsInWallet/{address}',
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
   * Returns the Token Registry Information for a specific token (if available)
   * @param policyid
   * @param tokenname The Name of the Token (not HEX)
   * @param authorization
   * @returns TokenRegistryMetadata Returns TokenRegistryMetadata
   * @throws ApiError
   */
  public getV2GetCardanoTokenRegistryInformation(
    policyid: string,
    tokenname: string,
    authorization?: string,
  ): CancelablePromise<TokenRegistryMetadata> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetCardanoTokenRegistryInformation/{policyid}/{tokenname}',
      path: {
        policyid: policyid,
        tokenname: tokenname,
      },
      headers: {
        authorization: authorization,
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
   * @param policyid
   * @param authorization
   * @param cumulateStakeAddresses
   * @returns NmkrAssetAddress Returns an array of NmkrAssetAddress
   * @throws ApiError
   */
  public getV2GetPolicySnapshot(
    policyid: string,
    authorization?: string,
    cumulateStakeAddresses: boolean = true,
  ): CancelablePromise<Array<NmkrAssetAddress>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPolicySnapshot/{policyid}/{cumulateStakeAddresses}',
      path: {
        policyid: policyid,
        cumulateStakeAddresses: cumulateStakeAddresses,
      },
      headers: {
        authorization: authorization,
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
   * @param policyid
   * @param authorization
   * @returns RoyaltyClass Returns an array of RoyaltyClass
   * @throws ApiError
   */
  public getV2GetRoyaltyInformation(policyid: string, authorization?: string): CancelablePromise<RoyaltyClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetRoyaltyInformation/{policyid}',
      path: {
        policyid: policyid,
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
}
