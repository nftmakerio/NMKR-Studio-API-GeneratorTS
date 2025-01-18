/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAllUploadedFilesResultClass } from '../models/GetAllUploadedFilesResultClass';
import type { UploadToIpfsClass } from '../models/UploadToIpfsClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IpfsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Returns a list with all uploaded files to IPFS. The files/NFTs that are in a project are not returned
   * @returns GetAllUploadedFilesResultClass Returns the GetAllUploadedFilesResult Class
   * @throws ApiError
   */
  public getV2GetAllUploadedFiles({
    customerid,
    maxCount = 100,
    page = 1,
  }: {
    customerid: number;
    maxCount?: number;
    page?: number;
  }): CancelablePromise<Array<GetAllUploadedFilesResultClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetAllUploadedFiles/{customerid}',
      path: {
        customerid: customerid,
      },
      query: {
        maxCount: maxCount,
        page: page,
      },
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
   * Upload a File pin it to IPFS
   * With this API you can upload a file to IPFS. You can upload the file as BASE64 Content or as URL Link.
   * @returns string Returns the UploadToIpfsResult Class
   * @throws ApiError
   */
  public postV2UploadToIpfs({
    customerid,
    requestBody,
  }: {
    customerid: number;
    requestBody?: UploadToIpfsClass;
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UploadToIpfs/{customerid}',
      path: {
        customerid: customerid,
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
