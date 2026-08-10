/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MidnightPaywindowClass } from '../models/MidnightPaywindowClass';
import type { MidnightPaywindowUpdateClass } from '../models/MidnightPaywindowUpdateClass';
import type { PublicMintsClass } from '../models/PublicMintsClass';
import type { ServerStateClass } from '../models/ServerStateClass';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MiscService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Returns a list of current or upcoming mints
   * @returns PublicMintsClass Returns an array of PublicMintsClass
   * @throws ApiError
   */
  public getV2GetPublicMints(): CancelablePromise<Array<PublicMintsClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetPublicMints',
      errors: {
        429: `Too Many Requests`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * Returns a the State of the Servers
   * @returns ServerStateClass Returns an array of ServerStateClass
   * @throws ApiError
   */
  public getV2GetServerState(): CancelablePromise<Array<ServerStateClass>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/GetServerState',
      errors: {
        429: `Too Many Requests`,
        500: `Internal Server Error`,
      },
    });
  }
  /**
   * @returns MidnightPaywindowClass OK
   * @throws ApiError
   */
  public postV2UpdateMidnightPaywindowDetails({
    reservationid,
    requestBody,
  }: {
    reservationid?: number;
    requestBody?: MidnightPaywindowUpdateClass;
  }): CancelablePromise<MidnightPaywindowClass> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/UpdateMidnightPaywindowDetails',
      query: {
        reservationid: reservationid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        429: `Too Many Requests`,
        500: `Internal Server Error`,
      },
    });
  }
}
