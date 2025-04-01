/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blockchain } from './Blockchain';
import type { CardanoCipTypes } from './CardanoCipTypes';
export type AssetsAssociatedWithAccount = {
  readonly cardanoCipType?: CardanoCipTypes;
  solanaSymbol?: string | null;
  address?: string | null;
  unit?: string | null;
  quantity?: number;
  readonly blockchain?: Blockchain;
  readonly fingerprint?: string | null;
  readonly assetName?: string | null;
  policyIdOrCollection?: string | null;
  assetNameInHex?: string | null;
};
