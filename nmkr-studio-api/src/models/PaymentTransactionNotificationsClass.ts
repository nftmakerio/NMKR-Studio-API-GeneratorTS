/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentTransactionNotificationTypes } from './PaymentTransactionNotificationTypes';

export type PaymentTransactionNotificationsClass = {
    notificationType?: PaymentTransactionNotificationTypes;
    notificationEndpoint?: string | null;
    hmacSecret?: string | null;
};

