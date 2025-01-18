/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blockchain } from '../models/Blockchain';
import type { MintAndSendResultClass } from '../models/MintAndSendResultClass';
import type { ReserveMultipleNftsClassV2 } from '../models/ReserveMultipleNftsClassV2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MintService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Mints random Nfts and sends it to an Address
   * When you call this API, random NFTs will be selected, minted and send to an ada address. You will need ADA in your Account for the transaction and minting costs.
   * @returns MintAndSendResultClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2MintAndSendRandom({
    projectuid,
    countnft,
    receiveraddress,
    blockchain,
  }: {
    projectuid: string;
    countnft: number;
    receiveraddress: string;
    blockchain?: Blockchain;
  }): CancelablePromise<MintAndSendResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/MintAndSendRandom/{projectuid}/{countnft}/{receiveraddress}',
      path: {
        projectuid: projectuid,
        countnft: countnft,
        receiveraddress: receiveraddress,
      },
      query: {
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Too less ADA in your account. Fill up ADA first before try to mint and send`,
        404: `No more nft available`,
        406: `The receiveraddress is not a valid cardano address or a valid ada handle`,
        409: `There are pending transactions on the sender address (your account address). Please wait a second`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Mints a specific Nft and sends it to an Address
   * When you call this API, a specific NFT will be minted and send to an ada address. You will need ADA in your Account for the transaction and minting costs.
   * @returns MintAndSendResultClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2MintAndSendSpecific({
    projectuid,
    nftuid,
    tokencount,
    receiveraddress,
    blockchain,
  }: {
    projectuid: string;
    nftuid: string;
    tokencount: number;
    receiveraddress: string;
    blockchain?: Blockchain;
  }): CancelablePromise<MintAndSendResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/MintAndSendSpecific/{projectuid}/{nftuid}/{tokencount}/{receiveraddress}',
      path: {
        projectuid: projectuid,
        nftuid: nftuid,
        tokencount: tokencount,
        receiveraddress: receiveraddress,
      },
      query: {
        blockchain: blockchain,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Too less ADA in your account. Fill up ADA first before try to mint and send`,
        404: `NFT no more available (already sold)`,
        406: `The receiveraddress is not a valid cardano address or a valid ada handle`,
        409: `There are pending transactions on the sender address (your account address). Please wait a second`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Mints one or more specific Nft and sends it to an Address
   * When you call this API, one or more specific NFTs will be minted and send to an ada address. You will need ADA in your Account for the transaction and minting costs.
   * @returns MintAndSendResultClass Returns the Nft Class
   * @throws ApiError
   */
  public postV2MintAndSendSpecific({
    projectuid,
    receiveraddress,
    blockchain,
    requestBody,
  }: {
    projectuid: string;
    receiveraddress: string;
    blockchain?: Blockchain;
    requestBody?: ReserveMultipleNftsClassV2;
  }): CancelablePromise<MintAndSendResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/MintAndSendSpecific/{projectuid}/{receiveraddress}',
      path: {
        projectuid: projectuid,
        receiveraddress: receiveraddress,
      },
      query: {
        blockchain: blockchain,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Too less ADA in your account. Fill up ADA first before try to mint and send`,
        404: `NFT no more available (already sold)`,
        406: `The receiveraddress is not a valid cardano address or a valid ada handle`,
        409: `There are pending transactions on the sender address (your account address). Please wait a second`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * Mints the royalty token
   * When you call this API, the royalty token for this project will be minted and send to a burning address. You have to specify the address for the royalties and the percentage of royalties. You need mint credits in your account. Only one royalty token can be minted for each project
   * @returns any The royaltytoken was created successfully
   * @throws ApiError
   */
  public getV2MintRoyaltyToken({
    projectuid,
    royaltyaddress,
    percentage,
  }: {
    projectuid: string;
    royaltyaddress: string;
    percentage: number;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/MintRoyaltyToken/{projectuid}/{royaltyaddress}/{percentage}',
      path: {
        projectuid: projectuid,
        royaltyaddress: royaltyaddress,
        percentage: percentage,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Too less ADA in your account. Fill up ADA first before try to mint and send`,
        404: `Not Found`,
        406: `The project already has a royalty token`,
        409: `There are pending transactions on the sender address (your account address). Please wait a second`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
  /**
   * ReMints a specific Nft and sends it to a burn address
   * When you call this API, you can update metadata of an already sold nft. The nft will be minted and send to a burning address
   * @returns any Remint is scheduled
   * @throws ApiError
   */
  public getV2RemintAndBurn({ projectuid, nftuid }: { projectuid: string; nftuid: string }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/RemintAndBurn/{projectuid}/{nftuid}',
      path: {
        projectuid: projectuid,
        nftuid: nftuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Too less ADA in your account. Fill up ADA first before try to mint and send`,
        404: `NFT no more available (already sold)`,
        406: `The receiveraddress is not a valid cardano address or a valid ada handle`,
        409: `There are pending transactions on the sender address (your account address). Please wait a second`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }
}
