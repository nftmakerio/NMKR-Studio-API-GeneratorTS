/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { NFT } from '../models/NFT';
import type { NftDetailsClass } from '../models/NftDetailsClass';
import type { UploadMetadataClass } from '../models/UploadMetadataClass';
import type { UploadNftClassV2 } from '../models/UploadNftClassV2';
import type { UploadNftResultClass } from '../models/UploadNftResultClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NftService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Checks if the metadata are valid
   * @param nftuid
   * @param authorization
   * @param requestBody
   * @returns ApiErrorResultClass Returns OK if the metadata are valid
   * @throws ApiError
   */
  public postV2CheckMetadata(
    nftuid: string,
    authorization?: string,
    requestBody?: UploadMetadataClass,
  ): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CheckMetadata/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      headers: {
        authorization: authorization,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The NFT was not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }

  /**
   * Deletes a nft from the database (nft uid)
   * You can delete a nft, if it is not in sold or reserved state
   * @param nftuid
   * @param authorization
   * @returns any Returns the Nft Class
   * @throws ApiError
   */
  public getV2DeleteNft(nftuid: string, authorization?: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteNft/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
        406: `Not Acceptable`,
      },
    });
  }

  /**
   * Returns detail information about one nft specified by Id (nft uid)
   * You will receive all information (fingerprint, ipfshash, etc.) about one nfts with the submitted id
   * @param nftuid
   * @param authorization
   * @returns NftDetailsClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2GetNftDetailsById(nftuid: string, authorization?: string): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNftDetailsById/{nftuid}',
      path: {
        nftuid: nftuid,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }

  /**
   * Returns detail information about one nft specified by its name
   * You will receive all information (fingerprint, ipfshash, etc.) about one nft with the submitted name
   * @param projectuid
   * @param nftname
   * @param authorization
   * @returns NftDetailsClass Returns the Nft Class
   * @throws ApiError
   */
  public getV2GetNftDetailsByTokenname(
    projectuid: string,
    nftname: string,
    authorization?: string,
  ): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNftDetailsByTokenname/{projectuid}/{nftname}',
      path: {
        projectuid: projectuid,
        nftname: nftname,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }

  /**
   * Returns detail information about nfts with a specific state with Pagination support. (project uid)
   * You will receive all information (fingerprint, ipfshash, etc.) about the nfts within a specific state.
   * State "all" lists all available nft in this project. The other states are: "free", "reserved", "sold" and "error"
   * @param projectuid
   * @param state
   * @param count
   * @param page
   * @param authorization
   * @param orderby (Optional) The sort order of the result. Possible values are: id (default),id_desc (descending order), selldate (on sold nfts) and selldate_desc (descending order)
   * @returns NFT Returns a List of the NFT Class
   * @throws ApiError
   */
  public getV2GetNfts(
    projectuid: string,
    state: string,
    count: number,
    page: number,
    authorization?: string,
    orderby: string = 'id',
  ): CancelablePromise<Array<NFT>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNfts/{projectuid}/{state}/{count}/{page}',
      path: {
        projectuid: projectuid,
        state: state,
        count: count,
        page: page,
      },
      headers: {
        authorization: authorization,
      },
      query: {
        orderby: orderby,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
        406: `The projectuid was not found`,
      },
    });
  }

  /**
   * Updates the Metadata for one specific NFT
   * With this API you can update the Metadata Override for one specific NFT
   * If you leave the field blank, the Metadata override will be deleted and the Metadata from the project will be used.
   * @param projectuid
   * @param nftuid
   * @param authorization
   * @param requestBody
   * @returns NftDetailsClass Returns the Nftdetails Class
   * @throws ApiError
   */
  public postV2UpdateMetadata(
    projectuid: string,
    nftuid: string,
    authorization?: string,
    requestBody?: any,
  ): CancelablePromise<NftDetailsClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UpdateMetadata/{projectuid}/{nftuid}',
      path: {
        projectuid: projectuid,
        nftuid: nftuid,
      },
      headers: {
        authorization: authorization,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The NFT was not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }

  /**
   * Upload a File to a project and pin it to IPFS
   * With this API you can upload a file to IPFS and add it to a project. You can upload the file as BASE64 Content or as URL Link or as IPFS Hash.
   * If you submit Metadata, this Metadata will be used instead of the Metadatatemplate from the project. You can either submit Metadata or MetadataPlaceholder, but not both (because it makes no sense).
   * The Metadata field is optional and if you dont use it, it will use the Template from your project. It is poosible to mix both versions in one project. You can have one nft with own metadata and other nfts
   * with the template.
   * @param projectuid
   * @param authorization
   * @param requestBody
   * @returns UploadNftResultClass Returns the UploadNftResult Class
   * @throws ApiError
   */
  public postV2UploadNft(
    projectuid: string,
    authorization?: string,
    requestBody?: UploadNftClassV2,
  ): CancelablePromise<UploadNftResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UploadNft/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      headers: {
        authorization: authorization,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `No Image Content was provided. Send a file either as Base64 or as Link or IPFS Hash`,
        406: `See the errormessage in the resultset for further information`,
        409: `There is a conflict with the provided images. Send a file either as Base64 or as Link or IPFS Hash`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
