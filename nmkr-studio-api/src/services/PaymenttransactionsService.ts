/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuyerClass } from '../models/BuyerClass';
import type { CheckAddressResultClass } from '../models/CheckAddressResultClass';
import type { CreatePaymentTransactionClass } from '../models/CreatePaymentTransactionClass';
import type { GetPaymentAddressResultClass } from '../models/GetPaymentAddressResultClass';
import type { MintAndSendReceiverClass } from '../models/MintAndSendReceiverClass';
import type { PaymentMethodTypes } from '../models/PaymentMethodTypes';
import type { PaymentTransactionResultClass } from '../models/PaymentTransactionResultClass';
import type { PricelistClass } from '../models/PricelistClass';
import type { SellerClass } from '../models/SellerClass';
import type { SignDecentralClass } from '../models/SignDecentralClass';
import type { SubmitTransactionClass } from '../models/SubmitTransactionClass';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PaymenttransactionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a payment transaction
     * @returns PaymentTransactionResultClass Returns the PaymentTransactionResultClass Class
     * @throws ApiError
     */
    public postV2CreatePaymentTransaction({
        authorization,
        requestBody,
    }: {
        authorization?: string,
        requestBody?: CreatePaymentTransactionClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/CreatePaymentTransaction',
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `The access was denied. (Wrong or expired APIKEY, wrong projectid etc.)`,
                404: `Not Found`,
                406: `See the errormessage in the resultset for further information`,
                500: `Internal server error - see the errormessage in the resultset`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionGetTransactionState({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/GetTransactionState',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns GetPaymentAddressResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionGetPaymentAddress({
        paymenttransactionuid,
        authorization,
        paymentMethod,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        paymentMethod?: PaymentMethodTypes,
    }): CancelablePromise<GetPaymentAddressResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/GetPaymentAddress',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            query: {
                'paymentMethod': paymentMethod,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionSignDecentralPayment({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: SignDecentralClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/SignDecentralPayment',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                412: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns CheckAddressResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionCheckPaymentAddress({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<CheckAddressResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/CheckPaymentAddress',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionCancelTransaction({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: BuyerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/CancelTransaction',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionCancelTransaction({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/CancelTransaction',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PricelistClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionGetPriceListForProject({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<Array<PricelistClass>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/GetPriceListForProject',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionLockNft({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: SellerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/LockNft',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionLockAda({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: BuyerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/LockAda',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionSubmitTransaction({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: SubmitTransactionClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/SubmitTransaction',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                412: `Client Error`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionBetOnAuction({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: BuyerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/BetOnAuction',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionBuyDirectsale({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: BuyerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/BuyDirectsale',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionGetBuyoutSmartcontractAddress({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/GetBuyoutSmartcontractAddress',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionSellDirectsaleOffer({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: SellerClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/SellDirectsaleOffer',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionEndTransaction({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/EndTransaction',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public getV2ProceedPaymentTransactionReservePaymentgatewayMintAndSendNft({
        paymenttransactionuid,
        authorization,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/ReservePaymentgatewayMintAndSendNft',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                423: `Client Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionMintAndSendPaymentgatewayNft({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: MintAndSendReceiverClass,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/MintAndSendPaymentgatewayNft',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns PaymentTransactionResultClass Success
     * @throws ApiError
     */
    public postV2ProceedPaymentTransactionUpdateCustomProperties({
        paymenttransactionuid,
        authorization,
        requestBody,
    }: {
        paymenttransactionuid: string,
        authorization?: string,
        requestBody?: Record<string, string>,
    }): CancelablePromise<PaymentTransactionResultClass> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/ProceedPaymentTransaction/{paymenttransactionuid}/UpdateCustomProperties',
            path: {
                'paymenttransactionuid': paymenttransactionuid,
            },
            headers: {
                'authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                406: `Not Acceptable`,
                500: `Server Error`,
            },
        });
    }

}
