import { Phase } from '@core/index';
import { PhaseId } from '@core/index';
import { BasePhaseId } from '@base/phase/index';

export abstract class Start implements Phase {
    public static readonly ID = new BasePhaseId(Start.name);

    id(): PhaseId {
        return Start.ID;
    }

    abstract execute(): void;
}