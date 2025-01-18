/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaleConditionsTypes } from './SaleConditionsTypes';
import type { WhitelistetedCountClass } from './WhitelistetedCountClass';
export type GetSaleconditionsClass = {
  condition?: SaleConditionsTypes;
  policyId1?: string | null;
  policyId2?: string | null;
  policyId3?: string | null;
  policyId4?: string | null;
  policyId5?: string | null;
  policyId6?: string | null;
  policyId7?: string | null;
  policyId8?: string | null;
  policyId9?: string | null;
  policyId10?: string | null;
  policyId11?: string | null;
  policyId12?: string | null;
  policyId13?: string | null;
  policyId14?: string | null;
  policyId15?: string | null;
  minOrMaxValue?: number | null;
  description?: string | null;
  policyProjectname?: string | null;
  whitelistedAddresses?: Array<WhitelistetedCountClass> | null;
  blacklistedAddresses?: Array<string> | null;
  onlyOneSalePerWhitelistAddress?: boolean | null;
  alreadyUsedAddressOrStakeaddress?: Array<WhitelistetedCountClass> | null;
};
