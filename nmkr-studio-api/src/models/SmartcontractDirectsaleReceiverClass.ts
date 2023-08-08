/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tokens } from './Tokens';

export type SmartcontractDirectsaleReceiverClass = {
  pkh?: string | null;
  address?: string | null;
  amountInLovelace?: number;
  tokens?: Array<Tokens> | null;
  recevierType?: string | null;
};
