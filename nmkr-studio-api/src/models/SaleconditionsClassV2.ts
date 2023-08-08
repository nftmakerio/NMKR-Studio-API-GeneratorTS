/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountedWhitelistAddressesClass } from './CountedWhitelistAddressesClass';
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
    blacklistedAddresses?: Array<string> | null;
    countedWhitelistAddresses?: Array<CountedWhitelistAddressesClass> | null;
};

