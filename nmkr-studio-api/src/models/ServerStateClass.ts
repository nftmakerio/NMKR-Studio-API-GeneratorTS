/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackgroundTaskEnums } from './BackgroundTaskEnums';
export type ServerStateClass = {
  serverId?: number;
  serverName?: string | null;
  serverState?: string | null;
  lastLifeSign?: string;
  actualTask?: BackgroundTaskEnums;
  cardanoNodeVersion?: string | null;
  serverVersion?: string | null;
  cardanoSlot?: string | null;
  cardanoEpoch?: string | null;
  cardanoSyncprogress?: string | null;
  backgroundTasks?: Array<BackgroundTaskEnums> | null;
};
