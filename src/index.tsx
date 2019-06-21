import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Item from './containers/Item';
import { createStore } from 'redux';
import { count } from './reducers/index';
import { ItemType } from './types/ItemType';
import { Provider } from 'react-redux';
import { ItemAction } from './actions/index';

const store = createStore<ItemType,ItemAction,any,any>(count,{
  count:1,
  name: 'dumpling',
});

ReactDOM.render(
  <Provider store={store}>
    <Item />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

