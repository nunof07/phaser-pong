import { EntityPool } from '@core/index';
import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { System } from '@core/index';

export interface SystemCollection {
    filter(id: PhaseId): System[];
}