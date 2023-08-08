/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultStates } from './ResultStates';

export type RejectedErrorResultClass = {
    resultState?: ResultStates;
    errorMessage?: string | null;
    errorCode?: number;
    rejectReason?: string | null;
    rejectParameter?: string | null;
};

