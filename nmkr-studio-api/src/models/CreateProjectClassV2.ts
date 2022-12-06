/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayoutWalletsClassV2 } from './PayoutWalletsClassV2';
import type { PolicyClass } from './PolicyClass';
import type { PricelistClassV2 } from './PricelistClassV2';
import type { SaleconditionsClassV2 } from './SaleconditionsClassV2';

export type CreateProjectClassV2 = {
    projectname?: string | null;
    description?: string | null;
    projecturl?: string | null;
    tokennamePrefix?: string | null;
    twitterHandle?: string | null;
    policyExpires?: boolean;
    policyLocksDateTime?: string | null;
    payoutWalletaddress?: string | null;
    payoutWalletaddressUsdc?: string | null;
    maxNftSupply?: number;
    policy?: PolicyClass;
    metadataTemplate?: string | null;
    addressExpiretime?: number;
    pricelist?: Array<PricelistClassV2> | null;
    additionalPayoutWallets?: Array<PayoutWalletsClassV2> | null;
    saleConditions?: Array<SaleconditionsClassV2> | null;
    enableFiat?: boolean | null;
    enableDecentralPayments?: boolean | null;
    enableCrossSaleOnPaymentgateway?: boolean | null;
    activatePayinAddress?: boolean | null;
    paymentgatewaysalestart?: string | null;
};

