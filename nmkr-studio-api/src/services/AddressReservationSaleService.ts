/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressType } from '../models/AddressType';
import type { CheckAddressResultClass } from '../models/CheckAddressResultClass';
import type { GetPaymentAddressResultClass } from '../models/GetPaymentAddressResultClass';
import type { PaymentMethodTypes } from '../models/PaymentMethodTypes';
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
    lovelace,
    customeripaddress,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalpriceintokenpolicyid,
    optionalpriceintokenassetnameinhex,
    optionalpriceintokencount,
    optionalrefundaddress,
    acceptheigheramounts,
    paymentMethod,
    addresstype,
  }: {
    projectuid: string;
    countnft: number;
    lovelace: number;
    customeripaddress: string;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    optionalreceiveraddress?: string;
    optionalpriceintokenpolicyid?: string;
    optionalpriceintokenassetnameinhex?: string;
    optionalpriceintokencount?: number;
    optionalrefundaddress?: string;
    acceptheigheramounts?: boolean;
    paymentMethod?: PaymentMethodTypes;
    addresstype?: AddressType;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForRandomNftSale/{projectuid}/{countnft}/{lovelace}/{customeripaddress}',
      path: {
        projectuid: projectuid,
        countnft: countnft,
        lovelace: lovelace,
        customeripaddress: customeripaddress,
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
        paymentMethod: paymentMethod,
        addresstype: addresstype,
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
    customeripaddress,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    paymentMethod,
    addresstype,
  }: {
    projectuid: string;
    countnft: number;
    customeripaddress: string;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    optionalreceiveraddress?: string;
    optionalrefundaddress?: string;
    acceptheigheramounts?: boolean;
    paymentMethod?: PaymentMethodTypes;
    addresstype?: AddressType;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForRandomNftSale/{projectuid}/{countnft}/{customeripaddress}',
      path: {
        projectuid: projectuid,
        countnft: countnft,
        customeripaddress: customeripaddress,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        paymentMethod: paymentMethod,
        addresstype: addresstype,
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
    lovelace,
    customeripaddress,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalpriceintokenpolicyid,
    optionalpriceintokenassetnameinhex,
    optionalpriceintokencount,
    optionalrefundaddress,
    acceptheigheramounts,
    paymentMethod,
    addresstype,
  }: {
    nftuid: string;
    tokencount: number;
    lovelace: number;
    customeripaddress: string;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    optionalreceiveraddress?: string;
    optionalpriceintokenpolicyid?: string;
    optionalpriceintokenassetnameinhex?: string;
    optionalpriceintokencount?: number;
    optionalrefundaddress?: string;
    acceptheigheramounts?: boolean;
    paymentMethod?: PaymentMethodTypes;
    addresstype?: AddressType;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForSpecificNftSale/{nftuid}/{tokencount}/{lovelace}/{customeripaddress}',
      path: {
        nftuid: nftuid,
        tokencount: tokencount,
        lovelace: lovelace,
        customeripaddress: customeripaddress,
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
        paymentMethod: paymentMethod,
        addresstype: addresstype,
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
    customeripaddress,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    paymentMethod,
    addresstype,
  }: {
    nftuid: string;
    tokencount: number;
    customeripaddress: string;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    optionalreceiveraddress?: string;
    optionalrefundaddress?: string;
    acceptheigheramounts?: boolean;
    paymentMethod?: PaymentMethodTypes;
    addresstype?: AddressType;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPaymentAddressForSpecificNftSale/{nftuid}/{tokencount}/{customeripaddress}',
      path: {
        nftuid: nftuid,
        tokencount: tokencount,
        customeripaddress: customeripaddress,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        paymentMethod: paymentMethod,
        addresstype: addresstype,
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
    customeripaddress,
    referer,
    customproperty,
    optionalreceiveraddress,
    optionalrefundaddress,
    acceptheigheramounts,
    paymentMethod,
    addresstype,
    requestBody,
  }: {
    customeripaddress: string;
    /**
     * (Optional) A referer code
     */
    referer?: string;
    /**
     * (Optional) A custom property which can be set. Will be returned at webhooks or checkaddress
     */
    customproperty?: string;
    optionalreceiveraddress?: string;
    optionalrefundaddress?: string;
    acceptheigheramounts?: boolean;
    paymentMethod?: PaymentMethodTypes;
    addresstype?: AddressType;
    requestBody?: ReserveMultipleNftsClassV2;
  }): CancelablePromise<GetPaymentAddressResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/GetPaymentAddressForSpecificNftSale/{customeripaddress}',
      path: {
        customeripaddress: customeripaddress,
      },
      query: {
        referer: referer,
        customproperty: customproperty,
        optionalreceiveraddress: optionalreceiveraddress,
        optionalrefundaddress: optionalrefundaddress,
        acceptheigheramounts: acceptheigheramounts,
        paymentMethod: paymentMethod,
        addresstype: addresstype,
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
