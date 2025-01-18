/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteAllNftsDetail } from './DeleteAllNftsDetail';
export type DeleteAllNftsResultClass = {
  successfullyDeleted?: number;
  readonly notDeleted?: number;
  errorDetails?: Array<DeleteAllNftsDetail> | null;
};
