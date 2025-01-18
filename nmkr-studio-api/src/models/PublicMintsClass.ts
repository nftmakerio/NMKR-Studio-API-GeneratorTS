/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Blockchain } from './Blockchain';
import type { PricelistClass } from './PricelistClass';
import type { PublicMintState } from './PublicMintState';
export type PublicMintsClass = {
  projectName?: string | null;
  projectDescription?: string | null;
  projectImage?: string | null;
  projectUrl?: string | null;
  projectCreated?: string;
  createrName?: string | null;
  mintStart?: string;
  mintState?: PublicMintState;
  pricelist?: Array<PricelistClass> | null;
  totalNfts?: number;
  reservedNfts?: number;
  soldNfts?: number;
  blockchains?: Array<Blockchain> | null;
};
