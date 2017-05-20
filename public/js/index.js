import './index.scss';
import 'bootstrap';
import './Todo/styles/todo-app.scss';

import React from 'react';
import { render } from 'react-dom';
import reducer from './Todo/reducer/';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './Todo/container/index';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
