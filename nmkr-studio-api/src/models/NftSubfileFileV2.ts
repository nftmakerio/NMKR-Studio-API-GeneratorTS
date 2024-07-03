/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetadataPlaceholderClass } from './MetadataPlaceholderClass';
import type { NftFileV2 } from './NftFileV2';

export type NftSubfileFileV2 = {
  subfile?: NftFileV2 | null;
  description?: string | null;
  metadataPlaceholder?: Array<MetadataPlaceholderClass> | null;
};
