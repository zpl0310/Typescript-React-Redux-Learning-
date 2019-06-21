// src/reducers/index.ts

import { ItemAction } from '../actions';
import { ItemType } from '../types/ItemType';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../constants/index';

export function count(state: ItemType, action: ItemAction): ItemType {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, count: state.count + 1};
        case DECREMENT_COUNT:
            return {...state, count: Math.max(0, state.count - 1) };
    }
    return state;
}