/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { CreateBurningEndpointClass } from '../models/CreateBurningEndpointClass';
import type { CreateNewProjectResultClass } from '../models/CreateNewProjectResultClass';
import type { CreateProjectClassV2 } from '../models/CreateProjectClassV2';
import type { GetDiscountsClass } from '../models/GetDiscountsClass';
import type { GetSaleconditionsClass } from '../models/GetSaleconditionsClass';
import type { IdentityInformationClass } from '../models/IdentityInformationClass';
import type { NftCountsClass } from '../models/NftCountsClass';
import type { NftProjectsDetails } from '../models/NftProjectsDetails';
import type { PricelistClass } from '../models/PricelistClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creates a burning endpoint for a specific address
   * When you call this endpoint, a Burning Address is created for this project. All NFTs associated with this project (same policyid) that are sent to this endpoint will be deleted (burned). All other NFTs will be sent back.
   * The policy of the project must still be active.If it is already locked, it can no longer be deleted.
   * @param projectuid
   * @param addressactiveinhours
   * @param authorization
   * @returns CreateBurningEndpointClass The burning address was created successfully
   * @throws ApiError
   */
  public getV2CreateBurningAddress(
    projectuid: string,
    addressactiveinhours: number,
    authorization?: string,
  ): CancelablePromise<CreateBurningEndpointClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateBurningAddress/{projectuid}/{addressactiveinhours}',
      path: {
        projectuid: projectuid,
        addressactiveinhours: addressactiveinhours,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectuid etc.)`,
        402: `Client Error`,
        404: `Not Found`,
        406: `Some parameters where not correct or the project already has 10 or more burning addresses`,
        409: `Conflict`,
        500: `Internal server error - see the errormessage in the result`,
      },
    });
  }

  /**
   * Creates a new Project
   * WIth this Controller you can create a new project
   * @param authorization
   * @param requestBody
   * @returns CreateNewProjectResultClass Returns the UploadNftResult Class
   * @throws ApiError
   */
  public postV2CreateProject(
    authorization?: string,
    requestBody?: CreateProjectClassV2,
  ): CancelablePromise<CreateNewProjectResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateProject',
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

  /**
   * Deletes a project
   * With this call you can delete a project
   * @param projectuid
   * @param authorization
   * @returns ApiErrorResultClass Returns the Apiresultclass with the information about the address incl. the assigned NFTs
   * @throws ApiError
   */
  public getV2DeleteProject(projectuid: string, authorization?: string): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteProject/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The project was not found in our database or not assiged to your account`,
      },
    });
  }

  /**
   * Returns the count of the sold, reserved and free nfts (project uid)
   * You will get the count of all sold, reserved and free nfts of a particular project
   * @param projectuid
   * @param authorization
   * @returns NftCountsClass Returns the NftCountsClass
   * @throws ApiError
   */
  public getV2GetCounts(projectuid: string, authorization?: string): CancelablePromise<NftCountsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetCounts/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
      },
    });
  }

  /**
   * Returns the discounts for this project (project uid)
   * If you call this function, you will get all active discounts for this project
   * @param projectuid
   * @param authorization
   * @returns GetDiscountsClass Returns an array of the GetDiscountsClass
   * @throws ApiError
   */
  public getV2GetDiscounts(projectuid: string, authorization?: string): CancelablePromise<Array<GetDiscountsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetDiscounts/{projectuid}',
      path: {
        projectuid: projectuid,
      },
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
   * Returns information about the identities (if the identity token was created) of a project
   * You will receive all identities which are connected to this project
   * @param policyid
   * @param authorization
   * @returns IdentityInformationClass Returns the Identities (if available)
   * @throws ApiError
   */
  public getV2GetIdentityAccounts(
    policyid: string,
    authorization?: string,
  ): CancelablePromise<IdentityInformationClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetIdentityAccounts/{policyid}',
      path: {
        policyid: policyid,
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
   * Returns the actual valid pricelist for this project (project uid)
   * You will get the predefined prices for one or more nf
   * @param projectuid
   * @param authorization
   * @returns PricelistClass Returns an array of the PricelistClass
   * @throws ApiError
   */
  public getV2GetPricelist(projectuid: string, authorization?: string): CancelablePromise<Array<PricelistClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPricelist/{projectuid}',
      path: {
        projectuid: projectuid,
      },
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
   * Returns detail information about a project
   * You will receive all information about this project
   * @param projectuid
   * @param authorization
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2GetProjectDetails(projectuid: string, authorization?: string): CancelablePromise<NftProjectsDetails> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetProjectDetails/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * Returns the saleconditions for this project (project uid)
   * If you call this funtion, you will get all active saleconditions for this project
   * @param projectuid
   * @param authorization
   * @returns GetSaleconditionsClass Returns an array of the GetSaleconditionsClass
   * @throws ApiError
   */
  public getV2GetSaleConditions(
    projectuid: string,
    authorization?: string,
  ): CancelablePromise<Array<GetSaleconditionsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetSaleConditions/{projectuid}',
      path: {
        projectuid: projectuid,
      },
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
   * Lists all your projects
   * You will receive a list with all of your projects
   *
   * IMPORTANT:
   * This function uses an internal cache. All results will be cached for 10 seconds. You do not need to call this function more than once in 10 seconds, because the results will be the same.
   * @param authorization
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2ListProjects(authorization?: string): CancelablePromise<Array<NftProjectsDetails>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListProjects',
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The apikey or the projects where not found`,
        406: `The provided informations are not valid for this request`,
      },
    });
  }

  /**
   * Lists all your projects with pagination
   * You will receive a list with all of your projects
   *
   * IMPORTANT:
   * This function uses an internal cache. All results will be cached for 10 seconds. You do not need to call this function more than once in 10 seconds, because the results will be the same.
   * @param count
   * @param page
   * @param authorization
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2ListProjects1(
    count: number,
    page: number,
    authorization?: string,
  ): CancelablePromise<Array<NftProjectsDetails>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListProjects/{count}/{page}',
      path: {
        count: count,
        page: page,
      },
      headers: {
        authorization: authorization,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The apikey or the projects where not found`,
        406: `The provided informations are not valid for this request`,
      },
    });
  }
}
