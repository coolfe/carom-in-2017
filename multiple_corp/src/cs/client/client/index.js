import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.less';
import '~comm/ec-antd/dist/antd.less';
import '~static/styles/iconfont.less';
import 'styles/main.less';

import store from './store';


const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
    // eslint-disable-next-line global-require
    const Routes = require('./routes').default;
    ReactDOM.render(
        <Provider store={store}>
            <Routes history={history} store={store} />
        </Provider>, document.getElementById('root')
    );
};

if (module.hot) {
    module.hot.accept('./routes', () => {
        render();
    });
}

render();
