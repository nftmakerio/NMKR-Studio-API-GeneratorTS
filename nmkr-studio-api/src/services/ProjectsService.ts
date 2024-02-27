/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiErrorResultClass } from '../models/ApiErrorResultClass';
import type { CreateBurningEndpointClass } from '../models/CreateBurningEndpointClass';
import type { CreateNewProjectResultClass } from '../models/CreateNewProjectResultClass';
import type { CreateProjectClassV2 } from '../models/CreateProjectClassV2';
import type { GetDiscountsClass } from '../models/GetDiscountsClass';
import type { GetNotificationsClass } from '../models/GetNotificationsClass';
import type { GetRefundsClass } from '../models/GetRefundsClass';
import type { GetSaleconditionsClass } from '../models/GetSaleconditionsClass';
import type { GetTransactionsClass } from '../models/GetTransactionsClass';
import type { IdentityInformationClass } from '../models/IdentityInformationClass';
import type { NftCountsClass } from '../models/NftCountsClass';
import type { NftProjectsDetails } from '../models/NftProjectsDetails';
import type { NotificationsClassV2 } from '../models/NotificationsClassV2';
import type { PriceDiscountClassV2 } from '../models/PriceDiscountClassV2';
import type { PricelistClass } from '../models/PricelistClass';
import type { PricelistClassV2 } from '../models/PricelistClassV2';
import type { ProjectSortOptions } from '../models/ProjectSortOptions';
import type { SaleconditionsClassV2 } from '../models/SaleconditionsClassV2';
import type { TransactionsExportOptions } from '../models/TransactionsExportOptions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creates a burning endpoint for a specific address
   * When you call this endpoint, a Burning Address is created for this project. All NFTs associated with this project (same policyid) that are sent to this endpoint will be deleted (burned). All other NFTs will be sent back.
   * The policy of the project must still be active.If it is already locked, it can no longer be deleted.
   * @returns CreateBurningEndpointClass The burning address was created successfully
   * @throws ApiError
   */
  public getV2CreateBurningAddress({
    projectuid,
    addressactiveinhours,
  }: {
    projectuid: string;
    addressactiveinhours: number;
  }): CancelablePromise<CreateBurningEndpointClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/CreateBurningAddress/{projectuid}/{addressactiveinhours}',
      path: {
        projectuid: projectuid,
        addressactiveinhours: addressactiveinhours,
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
   * @returns CreateNewProjectResultClass Returns the UploadNftResult Class
   * @throws ApiError
   */
  public postV2CreateProject({
    requestBody,
  }: {
    requestBody?: CreateProjectClassV2;
  }): CancelablePromise<CreateNewProjectResultClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/CreateProject',
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
   * @returns ApiErrorResultClass Returns the Apiresultclass with the information about the address incl. the assigned NFTs
   * @throws ApiError
   */
  public getV2DeleteProject({ projectuid }: { projectuid: string }): CancelablePromise<ApiErrorResultClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/DeleteProject/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * @returns NftCountsClass Returns the NftCountsClass
   * @throws ApiError
   */
  public getV2GetCounts({ projectuid }: { projectuid: string }): CancelablePromise<NftCountsClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetCounts/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
      },
    });
  }

  /**
   * Returns the discounts for this project (project uid)
   * If you call this function, you will get all active discounts for this project
   * @returns GetDiscountsClass Returns an array of the GetDiscountsClass
   * @throws ApiError
   */
  public getV2GetDiscounts({ projectuid }: { projectuid: string }): CancelablePromise<Array<GetDiscountsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetDiscounts/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * @returns IdentityInformationClass Returns the Identities (if available)
   * @throws ApiError
   */
  public getV2GetIdentityAccounts({ policyid }: { policyid: string }): CancelablePromise<IdentityInformationClass> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetIdentityAccounts/{policyid}',
      path: {
        policyid: policyid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }

  /**
   * Returns the notifications for this project (project uid)
   * @returns GetNotificationsClass Returns an array of the GetNotificationsClass
   * @throws ApiError
   */
  public getV2GetNotifications({
    projectuid,
  }: {
    projectuid: string;
  }): CancelablePromise<Array<GetNotificationsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetNotifications/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Returns the actual valid pricelist for this project (project uid)
   * You will get the predefined prices for one or more NFTs
   * @returns PricelistClass Returns an array of the PricelistClass
   * @throws ApiError
   */
  public getV2GetPricelist({ projectuid }: { projectuid: string }): CancelablePromise<Array<PricelistClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPricelist/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2GetProjectDetails({ projectuid }: { projectuid: string }): CancelablePromise<NftProjectsDetails> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetProjectDetails/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The nft was not found`,
      },
    });
  }

  /**
   * Returns all Transactions of a project
   * @returns GetTransactionsClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public getV2GetProjectTransactions({
    projectuid,
    fromdate,
    todate,
    exportOptions,
  }: {
    projectuid: string;
    fromdate?: string;
    todate?: string;
    exportOptions?: TransactionsExportOptions;
  }): CancelablePromise<Array<GetTransactionsClass> | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetProjectTransactions/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * Returns all Refunds of a project
   * @returns GetRefundsClass Returns the result as ZIP File
   * @returns any Returns the results as CSV File
   * @throws ApiError
   */
  public getV2GetRefunds({
    projectuid,
    fromdate,
    todate,
    exportOptions,
  }: {
    projectuid: string;
    fromdate?: string;
    todate?: string;
    exportOptions?: TransactionsExportOptions;
  }): CancelablePromise<Array<GetRefundsClass> | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetRefunds/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * Returns the saleconditions for this project (project uid)
   * If you call this funtion, you will get all active saleconditions for this project
   * @returns GetSaleconditionsClass Returns an array of the GetSaleconditionsClass
   * @throws ApiError
   */
  public getV2GetSaleConditions({
    projectuid,
  }: {
    projectuid: string;
  }): CancelablePromise<Array<GetSaleconditionsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetSaleConditions/{projectuid}',
      path: {
        projectuid: projectuid,
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
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2ListProjects({
    optionalSortOrder,
  }: {
    optionalSortOrder?: ProjectSortOptions;
  }): CancelablePromise<Array<NftProjectsDetails>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListProjects',
      query: {
        optionalSortOrder: optionalSortOrder,
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
   * @returns NftProjectsDetails Returns the NftProjectsDetails Class
   * @throws ApiError
   */
  public getV2ListProjects1({
    count,
    page,
    optionalSortOrder,
  }: {
    count: number;
    page: number;
    optionalSortOrder?: ProjectSortOptions;
  }): CancelablePromise<Array<NftProjectsDetails>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/ListProjects/{count}/{page}',
      path: {
        count: count,
        page: page,
      },
      query: {
        optionalSortOrder: optionalSortOrder,
      },
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `The apikey or the projects where not found`,
        406: `The provided informations are not valid for this request`,
      },
    });
  }

  /**
   * Updates the discounts of a project
   * WIth this Controller you can update the discounts of a project. All old entries will be deleted. If you want to clear the discounts, just send an empty array
   * @returns any The discounts was successfully updated
   * @throws ApiError
   */
  public putV2UpdateDiscounts({
    projectuid,
    requestBody,
  }: {
    projectuid: string;
    requestBody?: Array<PriceDiscountClassV2>;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/UpdateDiscounts/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Project not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }

  /**
   * Updates the notifications of a project
   * WIth this Controller you can update the notifications. All old entries will be deleted. If you want to clear the notifications, just send an empty array
   * @returns GetNotificationsClass The notifications was successfully updated
   * @throws ApiError
   */
  public postV2UpdateNotifications({
    projectuid,
    requestBody,
  }: {
    projectuid: string;
    requestBody?: Array<NotificationsClassV2>;
  }): CancelablePromise<Array<GetNotificationsClass>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UpdateNotifications/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Project not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }

  /**
   * Updates a pricelist of a project
   * WIth this Controller you can update a pricelist of a project. All old entries will be deleted. If you want to clear the pricelist, just send an empty array
   * @returns any The pricelist was successfully updated
   * @throws ApiError
   */
  public putV2UpdatePricelist({
    projectuid,
    requestBody,
  }: {
    projectuid: string;
    requestBody?: Array<PricelistClassV2>;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/UpdatePricelist/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Project not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }

  /**
   * Updates the saleconditions of a project
   * WIth this Controller you can update the saleconditions of a project. All old entries will be deleted. If you want to clear the saleconditions, just send an empty array
   * @returns any The saleconditions was successfully updated
   * @throws ApiError
   */
  public putV2UpdateSaleConditions({
    projectuid,
    requestBody,
  }: {
    projectuid: string;
    requestBody?: Array<SaleconditionsClassV2>;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v2/UpdateSaleConditions/{projectuid}',
      path: {
        projectuid: projectuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
        404: `Project not found`,
        406: `See the errormessage in the resultset for further information`,
        500: `Internal server error - see the errormessage in the resultset`,
      },
    });
  }
}
