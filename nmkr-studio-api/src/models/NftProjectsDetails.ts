/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NftProjectsDetails = {
    id?: number;
    projectname?: string | null;
    projecturl?: string | null;
    projectLogo?: string | null;
    state?: string | null;
    free?: number;
    sold?: number;
    reserved?: number;
    total?: number;
    blocked?: number;
    uid?: string | null;
    maxTokenSupply?: number;
    description?: string | null;
    addressReservationTime?: number;
    policyId?: string | null;
    enableCrossSaleOnPaymentGateway?: boolean;
    adaPayoutWalletAddress?: string | null;
    usdcPayoutWalletAddress?: string | null;
    enableFiatPayments?: boolean;
    paymentGatewaySaleStart?: string | null;
    enableDecentralPayments?: boolean;
    policyLocks?: string | null;
    royaltyAddress?: string | null;
    royaltyPercent?: number | null;
    lockslot?: number | null;
    disableManualMintingbutton?: boolean;
    disableRandomSales?: boolean;
    disableSpecificSales?: boolean;
    twitterHandle?: string | null;
};

