/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SaleConditionsTypes } from './SaleConditionsTypes';

export type SaleconditionsClassV2 = {
    condition?: SaleConditionsTypes;
    policyId1?: string | null;
    policyId2?: string | null;
    policyId3?: string | null;
    policyId4?: string | null;
    policyId5?: string | null;
    minOrMaxValue?: number | null;
    description?: string | null;
    isActive?: boolean;
    policyProjectname?: string | null;
    whitelistedAddresses?: Array<string> | null;
    blacklistedAddresses?: Array<string> | null;
    onlyOneSalePerWhitelistAddress?: boolean | null;
};

