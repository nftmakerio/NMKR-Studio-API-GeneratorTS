/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AddressReservationSaleService } from './services/AddressReservationSaleService';
import { AuctionsService } from './services/AuctionsService';
import { CustomerService } from './services/CustomerService';
import { IpfsService } from './services/IpfsService';
import { MintService } from './services/MintService';
import { NftService } from './services/NftService';
import { PaymenttransactionsService } from './services/PaymenttransactionsService';
import { ProjectsService } from './services/ProjectsService';
import { SmartcontractsService } from './services/SmartcontractsService';
import { ToolsService } from './services/ToolsService';
import { WalletValidationService } from './services/WalletValidationService';
import { WhitelistsService } from './services/WhitelistsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class NMKRClient {

    public readonly addressReservationSale: AddressReservationSaleService;
    public readonly auctions: AuctionsService;
    public readonly customer: CustomerService;
    public readonly ipfs: IpfsService;
    public readonly mint: MintService;
    public readonly nft: NftService;
    public readonly paymenttransactions: PaymenttransactionsService;
    public readonly projects: ProjectsService;
    public readonly smartcontracts: SmartcontractsService;
    public readonly tools: ToolsService;
    public readonly walletValidation: WalletValidationService;
    public readonly whitelists: WhitelistsService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://studio-api.nmkr.io',
            VERSION: config?.VERSION ?? '2',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.addressReservationSale = new AddressReservationSaleService(this.request);
        this.auctions = new AuctionsService(this.request);
        this.customer = new CustomerService(this.request);
        this.ipfs = new IpfsService(this.request);
        this.mint = new MintService(this.request);
        this.nft = new NftService(this.request);
        this.paymenttransactions = new PaymenttransactionsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.smartcontracts = new SmartcontractsService(this.request);
        this.tools = new ToolsService(this.request);
        this.walletValidation = new WalletValidationService(this.request);
        this.whitelists = new WhitelistsService(this.request);
    }
}

