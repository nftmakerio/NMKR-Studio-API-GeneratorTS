/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetadataPlaceholderClass } from './MetadataPlaceholderClass';
import type { NftFileV2 } from './NftFileV2';
import type { NftSubfileFileV2 } from './NftSubfileFileV2';
export type UploadNftClassV2 = {
  tokenname?: string | null;
  displayname?: string | null;
  description?: string | null;
  previewImageNft?: NftFileV2 | null;
  subfiles?: Array<NftSubfileFileV2> | null;
  metadataPlaceholder?: Array<MetadataPlaceholderClass> | null;
  metadataOverride?: string | null;
  metadataOverrideCip68?: string | null;
  priceInLovelace?: number | null;
  isBlocked?: boolean | null;
};
