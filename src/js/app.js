import m from 'mithril';

import GroupList from './views/GroupList';
import GroupView from './views/GroupView';
import Layout from './views/Layout';


m.route(document.body, '/', {
    '/': {
        render: function () {
            console.log('/');
            return m(Layout, m(GroupList))
        }
    },
    '/groups/:id': {
        render: function (vnode) {
            console.log('App render');
            return m(Layout, m(GroupView, vnode.attrs))
        }
    }
});
