/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationsClassV2 } from './NotificationsClassV2';
import type { PayoutWalletsClassV2 } from './PayoutWalletsClassV2';
import type { PolicyClass } from './PolicyClass';
import type { PriceDiscountClassV2 } from './PriceDiscountClassV2';
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
  policy?: PolicyClass | null;
  metadataTemplate?: string | null;
  addressExpiretime?: number;
  pricelist?: Array<PricelistClassV2> | null;
  additionalPayoutWallets?: Array<PayoutWalletsClassV2> | null;
  saleConditions?: Array<SaleconditionsClassV2> | null;
  discounts?: Array<PriceDiscountClassV2> | null;
  notifications?: Array<NotificationsClassV2> | null;
  enableFiat?: boolean | null;
  enableDecentralPayments?: boolean | null;
  enableCrossSaleOnPaymentgateway?: boolean | null;
  activatePayinAddress?: boolean | null;
  paymentgatewaysalestart?: string | null;
  storageProvider?: string | null;
  metadataStandard?: string | null;
  cip68ReferenceAddress?: string | null;
  cip68ExtraField?: string | null;
  enableCardano?: boolean;
  enableSolana?: boolean;
  solanaSymbol?: string | null;
  solanaCollectionFamily?: string | null;
  payoutWalletaddressSolana?: string | null;
  addCardanoPolicyIdToSolanaMetadata?: boolean | null;
  addSolanaCollectionAddressToCardanoMetadata?: boolean | null;
  solanaCreateVerifiedCollection?: boolean | null;
  solanaCollectionImageUrl?: string | null;
  solanaCollectionImageMimeType?: string | null;
  solanaSellerFeeBasisPoints?: number | null;
};
