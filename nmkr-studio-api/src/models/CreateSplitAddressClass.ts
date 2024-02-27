/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateSplits } from './CreateSplits';

export type CreateSplitAddressClass = {
  comment?: string | null;
  thresholdInAda?: number;
  mainAddress?: string | null;
  splits?: Array<CreateSplits> | null;
  isActive?: boolean;
};
