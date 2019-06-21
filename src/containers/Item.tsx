import Item from '../components/Item';
import * as actions from '../actions';
import { ItemType } from '../types/ItemType';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({name, count}: ItemType) {
    return {
        name,
        count,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ItemAction>) {
    return {
        onIncrement: () => dispatch(actions.IncreaseCount()),
        onDecrement: () => dispatch(actions.DescreaseCount()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);
