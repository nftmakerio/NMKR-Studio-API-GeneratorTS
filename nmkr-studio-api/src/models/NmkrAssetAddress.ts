/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MintingTransactionInformation } from './MintingTransactionInformation';
export type NmkrAssetAddress = {
  policyId?: string | null;
  assetName?: string | null;
  assetNameInHex?: string | null;
  fingerprint?: string | null;
  totalSupply?: number | null;
  multiplier?: number;
  address?: string | null;
  quantity?: number;
  decimals?: number;
  creationTime?: number | null;
  mintingTxHash?: string | null;
  mintingTransactionInformation?: MintingTransactionInformation | null;
  readonly solanaSymbol?: string | null;
  readonly solanaDescription?: string | null;
  readonly solanaTokenStandard?: string | null;
};
