/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressType } from '../models/AddressType';
import type { Blockchain } from '../models/Blockchain';
import type { CheckAddressResultClass } from '../models/CheckAddressResultClass';
import type { GetPaymentAddressResultClass } from '../models/GetPaymentAddressResultClass';
import type { ReserveMultipleNftsClassV2 } from '../models/ReserveMultipleNftsClassV2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AddressReservationSaleService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Cancels a address reservation (project uid)
   * When you call this API, the reservation of all nfts dedicated to this address will released to free state. This function can be called, when a user closes his browser or when he hit on a "Cancel Reservation" Button
   * @returns any Cancellation was successful
   * @throws ApiError
   */
  public getV2CancelAddressReservation({
    projectuid,
    paymentaddress,
  }: {
    projectuid: string;
    paymentaddress: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CancelAddressReservation/{projectuid}/{paymentaddress}',
      path: {
        projectuid: projectuid,
        paymentaddress: paymentaddress,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Address not found`,
        406: `Address is not in active state - eg. already paid or already released to free`,
      },
    });
  }
  /**
   * Checks an address for state changes (project uid)
   * You can call this api to check if a user has paid to this particular address or if the address has expired. The reserved/sold NFTs will only filled after the amount was fully paid. This is for security reasons. In the reserved state, only the nft ids and tokenamount are submitted
   *
   * IMPORTANT:
   * This function uses an internal cache. All results will be cached for 10 seconds. You do not need to call this function more than once in 10 seconds, because the results will be the same.
   * @returns CheckAddressResultClass Returns the Apiresultclass with the information about the address incl. the assigned NFTs
   * @throws ApiError
   */
  public getV2CheckAddress({
    projectuid,
    address,
  }: {
    projectuid: string;
    address: string;
  }): CancelablePromise<CheckAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckAddress/{projectuid}/{address}',
      path: {
        projectuid: projectuid,
        address: address,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The address was not found in our database or not assiged to this project`,
      },
    });
  }
  /**
   * Checks an custom property for state changes (project uid)
   * You can call this api to check if a user has paid to a particular address with a custom property or if the address has expired. The reserved/sold NFTs will only filled after the amount was fully paid. This is for security reasons. In the reserved state, only the nft ids and tokenamount are submitted
   *
   * IMPORTANT:
   * This function uses an internal cache. All results will be cached for 10 seconds. You do not need to call this function more than once in 10 seconds, because the results will be the same.
   * @returns CheckAddressResultClass Returns the Apiresultclass with the information about the address incl. the assigned NFTs
   * @throws ApiError
   */
  public getV2CheckAddressWithCustomproperty({
    projectuid,
    customproperty,
  }: {
    projectuid: string;
    customproperty: string;
  }): CancelablePromise<CheckAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CheckAddressWithCustomproperty/{projectuid}/{customproperty}',
      path: {
        projectuid: projectuid,
        customproperty: customproperty,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The custom property was not found in our database or not assiged to this project`,
      },
    });
  }
  /**
   * Returns an address for a random nft sale (project id)
   * When you call this API, you will receive an address where the buyer has to pay the amount of ada you define. The address will be monitored until it expired. The count of nft will be reserved until it expires or the buyer has send the ada to this address.
   * If the buyer has send the amount of ada, the nfts will be minted and send to his senderaddress and the nfts state changes to sold.
   *
   * IMPORTANT:
   * Please notice, that the call is limited to 300 address reservations per minute. You will get the error 429 if you call this routine more than 300 times a minute.
   * Please do not implement this function on your start page. And please prevent the call of this function from bots with a captcha.
   * @returns GetPaymentAddressResultClass Returns the GetPaymentAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetPaymentAddressForRandomNftSale({
    projectuid,
    countnft,
    price,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalpriceintokenpolicyid,
    optionalpriceintokenassetnameinhex,
    optionalpriceintokencount,
    optionalrefundaddress,
    acceptheigheramounts,
    revervationtimeinminutes,
    addresstype,
    blockchain,
  }: {
    projectuid: string;
    countnft: number;
    price: number;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    /**
     * (Optional) You can specify a different receiver of the nft
     */
    optionalreceiveraddress?: string;
    /**
     * (Optional) You can specify an additional price in tokens (policyid)
     */
    optionalpriceintokenpolicyid?: string;
    /**
     * (Optional) You can specify an additional price in tokens (tokenname in hex)
     */
    optionalpriceintokenassetnameinhex?: string;
    /**
     * (Optional) You can specify an additional price in tokens (count)
     */
    optionalpriceintokencount?: number;
    /**
     * (Optional) If there was refund because of minting error or saleconditions you can specify the receiver of the ada/sol
     */
    optionalrefundaddress?: string;
    /**
     * (Optional) The address accepts the correct or a higher amount for minting. If false or null the exact amount must be received
     */
    acceptheigheramounts?: boolean;
    /**
     * (Optional) The time in minutes the address will be reserved
     */
    revervationtimeinminutes?: number;
    /**
     * The Base Addresses are with Stakekeys, the Enterprise Addresses without - only available in the cardano network
     */
    addresstype?: AddressType;
    /**
     * The blockchain where the address should be created
     */
    blockchain?: Blockchain;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForRandomNftSale/{projectuid}/{countnft}/{price}',
      path: {
        projectuid: projectuid,
        countnft: countnft,
        price: price,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalpriceintokenpolicyid: optionalpriceintokenpolicyid,
        optionalpriceintokenassetnameinhex: optionalpriceintokenassetnameinhex,
        optionalpriceintokencount: optionalpriceintokencount,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        revervationtimeinminutes: revervationtimeinminutes,
        addresstype: addresstype,
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `No more nft available`,
        406: `The demanded ada amount is too less. The minimium is 5 ADA - eg 5000000 lovelace`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Returns an address for a random nft sale (price from pricelist) (project id)
   * When you call this API, you will receive an address where the buyer has to pay the amount of ada you define. The address will be monitored until it exipred. The count of nft will be reserved until it expires or the buyer has send the ada to this address.
   * If the buyer has send the amount of ada, the nfts will be minted and send to his senderaddress and the nfts state changes to sold.
   *
   * IMPORTANT:
   * Please notice, that the call is limited to 300 addressreservations per minute. You will get the error 429 if you call this routine more than 300 times a minute.
   * Please do not implement this function on your start page. And please prevent the call of this function from bots with a captcha.
   * @returns GetPaymentAddressResultClass Returns the GetPaymentAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetPaymentAddressForRandomNftSale1({
    projectuid,
    countnft,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    revervationtimeinminutes,
    addresstype,
    blockchain,
  }: {
    projectuid: string;
    countnft: number;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    /**
     * (Optional) You can specify a different receiver of the nft
     */
    optionalreceiveraddress?: string;
    /**
     * (Optional) If there was refund because of minting error or saleconditions you can specify the receiver of the ada/sol
     */
    optionalrefundaddress?: string;
    /**
     * (Optional) The address accepts the correct or a higher amount for minting. If false or null the exact amount must be received
     */
    acceptheigheramounts?: boolean;
    /**
     * (Optional) The time in minutes the address will be reserved
     */
    revervationtimeinminutes?: number;
    /**
     * The Base Addresses are with Stakekeys, the Enterprise Addresses without - only available in the cardano network
     */
    addresstype?: AddressType;
    /**
     * The blockchain where the address should be created
     */
    blockchain?: Blockchain;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForRandomNftSale/{projectuid}/{countnft}',
      path: {
        projectuid: projectuid,
        countnft: countnft,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        revervationtimeinminutes: revervationtimeinminutes,
        addresstype: addresstype,
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `No more nft available`,
        406: `The demanded ada amount is too less. The minimium is 5 ADA - eg 5000000 lovelace`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Returns an address for a specific nft sale (no random distribution) (project and nft id)
   * When you call this API, you will receive an address where the buyer has to pay the amount of ada you define. The address will be monitored until it exipred. The count of nft will be reserved until it expires or the buyer has send the ada to this address.
   * If the buyer has send the amount of ada, the nfts will be minted and send to his senderaddress and the nfts state changes to sold.
   *
   * IMPORTANT:
   * Please notice, that the call is limited to 300 addressreservations per minute. You will get the error 429 if you call this routine more than 300 times a minute.
   * Please do not implement this function on your start page. And please prevent the call of this function from bots with a captcha.
   * @returns GetPaymentAddressResultClass Returns the GetPaymentAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetPaymentAddressForSpecificNftSale({
    nftuid,
    tokencount,
    price,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalpriceintokenpolicyid,
    optionalpriceintokenassetnameinhex,
    optionalpriceintokencount,
    optionalrefundaddress,
    acceptheigheramounts,
    revervationtimeinminutes,
    addresstype,
    blockchain,
  }: {
    nftuid: string;
    tokencount: number;
    price: number;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    /**
     * (Optional) You can specify a different receiver of the nft
     */
    optionalreceiveraddress?: string;
    /**
     * (Optional) You can specify an additional price in tokens (policyid)
     */
    optionalpriceintokenpolicyid?: string;
    /**
     * (Optional) You can specify an additional price in tokens (tokenname in hex)
     */
    optionalpriceintokenassetnameinhex?: string;
    /**
     * (Optional) You can specify an additional price in tokens (count)
     */
    optionalpriceintokencount?: number;
    /**
     * (Optional) If there was refund because of minting error or saleconditions you can specify the receiver of the ada/sol
     */
    optionalrefundaddress?: string;
    /**
     * (Optional) The address accepts the correct or a higher amount for minting. If false or null the exact amount must be received
     */
    acceptheigheramounts?: boolean;
    /**
     * (Optional) The time in minutes the address will be reserved
     */
    revervationtimeinminutes?: number;
    /**
     * The Base Addresses are with Stakekeys, the Enterprise Addresses without - only available in the cardano network
     */
    addresstype?: AddressType;
    /**
     * The blockchain where the address should be created
     */
    blockchain?: Blockchain;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForSpecificNftSale/{nftuid}/{tokencount}/{price}',
      path: {
        nftuid: nftuid,
        tokencount: tokencount,
        price: price,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalpriceintokenpolicyid: optionalpriceintokenpolicyid,
        optionalpriceintokenassetnameinhex: optionalpriceintokenassetnameinhex,
        optionalpriceintokencount: optionalpriceintokencount,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        revervationtimeinminutes: revervationtimeinminutes,
        addresstype: addresstype,
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The id of the nft is not found or not assigned to this project`,
        406: `The demanded ada amount is too less. The minimium is 5 ADA - eg 5000000 lovelace`,
        409: `There is a conflict with the selected nft. See errormessage in the resultset`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Returns an address for a specific nft sale (no random distribution) - price from pricelist or specific nft price (project and nft id)
   * When you call this API, you will receive an address where the buyer has to pay the amount of ada you define. The address will be monitored until it exipred. The count of nft will be reserved until it expires or the buyer has send the ada to this address.
   * If the buyer has send the amount of ada, the nfts will be minted and send to his senderaddress and the nfts state changes to sold.
   *
   * IMPORTANT:
   * Please notice, that the call is limited to 300 addressreservations per minute. You will get the error 429 if you call this routine more than 300 times a minute.
   * Please do not implement this function on your start page. And please prevent the call of this function from bots with a captcha.
   * @returns GetPaymentAddressResultClass Returns the GetPaymentAddressResultClass Class
   * @throws ApiError
   */
  public getV2GetPaymentAddressForSpecificNftSale1({
    nftuid,
    tokencount,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    revervationtimeinminutes,
    addresstype,
    blockchain,
  }: {
    nftuid: string;
    tokencount: number;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    /**
     * (Optional) You can specify a different receiver of the nft
     */
    optionalreceiveraddress?: string;
    /**
     * (Optional) If there was refund because of minting error or saleconditions you can specify the receiver of the ada/sol
     */
    optionalrefundaddress?: string;
    /**
     * (Optional) The address accepts the correct or a higher amount for minting. If false or null the exact amount must be received
     */
    acceptheigheramounts?: boolean;
    /**
     * (Optional) The time in minutes the address will be reserved
     */
    revervationtimeinminutes?: number;
    /**
     * The Base Addresses are with Stakekeys, the Enterprise Addresses without - only available in the cardano network
     */
    addresstype?: AddressType;
    /**
     * The blockchain where the address should be created
     */
    blockchain?: Blockchain;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForSpecificNftSale/{nftuid}/{tokencount}',
      path: {
        nftuid: nftuid,
        tokencount: tokencount,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        revervationtimeinminutes: revervationtimeinminutes,
        addresstype: addresstype,
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The id of the nft is not found or not assigned to this project`,
        406: `The demanded ada amount is too less. The minimium is 5 ADA - eg 5000000 lovelace`,
        409: `There is a conflict with the selected nft. See errormessage in the resultset`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
  /**
   * Returns an address for a multiple specific nfts sale (no random distribution) (project id)
   * When you call this API, you will receive an address where the buyer has to pay the amount of ada you define. The address will be monitored until it exipred. The count of nft will be reserved until it expires or the buyer has send the ada to this address.
   * If the buyer has send the amount of ada, the nfts will be minted and send to his senderaddress and the nfts state changes to sold.
   * @returns GetPaymentAddressResultClass Returns the GetPaymentAddressResultClass Class
   * @throws ApiError
   */
  public postV2GetPaymentAddressForSpecificNftSale({
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    revervationtimeinminutes,
    addresstype,
    blockchain,
    requestBody,
  }: {
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    /**
     * (Optional) You can specify a different receiver of the nft
     */
    optionalreceiveraddress?: string;
    /**
     * (Optional) If there was refund because of minting error or saleconditions you can specify the receiver of the ada/sol
     */
    optionalrefundaddress?: string;
    /**
     * (Optional) The address accepts the correct or a higher amount for minting. If false or null the exact amount must be received
     */
    acceptheigheramounts?: boolean;
    /**
     * (Optional) The time in minutes the address will be reserved
     */
    revervationtimeinminutes?: number;
    /**
     * (Optional) The Base Addresses are with Stakekeys, the Enterprise Addresses without - only available in the cardano network - Default Enterprise
     */
    addresstype?: AddressType;
    /**
     * (Optional) The blockchain where the address should be created - Default Cardano
     */
    blockchain?: Blockchain;
    requestBody?: ReserveMultipleNftsClassV2;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/GetPaymentAddressForSpecificNftSale',
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        revervationtimeinminutes: revervationtimeinminutes,
        addresstype: addresstype,
        blockchain: blockchain,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The id of the nft is not found or not assigned to this project`,
        406: `The demanded ada amount is too less. The minimium is 5 ADA - eg 5000000 lovelace`,
        409: `There is a conflict with the selected nft. See errormessage in the resultset`,
        429: `Too Many Requests`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
