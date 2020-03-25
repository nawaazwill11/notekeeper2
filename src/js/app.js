import m from 'mithril';

import Layout from './views/layout';
import groups from './views/GroupList';


m.route(document.body, '/', {
    '/': {
        render: function () {
            return m(Layout, groups())
        }
    },
    '/groups/:group': {
        render: function (vnode) {
            return m(Layout)
        }
    }
});
