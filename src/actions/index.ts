//src/actions/index.ts

import * as constants from '../constants';

export interface IncreaseCount {
    type:constants.INCREMENT_COUNT;
}

export interface DescreaseCount {
    type:constants.DECREMENT_COUNT;
}

export type ItemAction = IncreaseCount | DescreaseCount;

export function IncreaseCount(): IncreaseCount {
    return {
        type: constants.INCREMENT_COUNT
    }
}

export function DescreaseCount(): DescreaseCount {
    return {
        type: constants.DECREMENT_COUNT
    }
}