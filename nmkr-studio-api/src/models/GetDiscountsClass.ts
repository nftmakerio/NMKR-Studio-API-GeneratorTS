/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PricelistDiscountTypes } from './PricelistDiscountTypes';

export type GetDiscountsClass = {
    condition?: PricelistDiscountTypes;
    policyId1?: string | null;
    policyId2?: string | null;
    policyId3?: string | null;
    policyId4?: string | null;
    policyId5?: string | null;
    minOrMaxValue?: number | null;
    description?: string | null;
    discountInPercent?: number;
};

