/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResultStates } from './ResultStates';

export type ApiErrorResultClass = {
  resultState?: ResultStates;
  errorMessage?: string | null;
  errorCode?: number;
  innerErrorMessage?: string | null;
};
