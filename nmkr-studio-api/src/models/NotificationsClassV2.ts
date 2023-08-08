/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentTransactionNotificationTypes } from './PaymentTransactionNotificationTypes';

export type NotificationsClassV2 = {
    notificationType?: PaymentTransactionNotificationTypes;
    address?: string | null;
    isActive?: boolean;
};

