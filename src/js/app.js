import m from 'mithril';

import HomeController from './controller/HomeController';
import GroupController from './controller/GroupController';

m.route(document.body, '/', {
    '/': {
        render: function () {
            return m(HomeController);
        }
    },
    '/groups/:id': {
        render: function (vnode) {
            return m(GroupController, vnode.attrs);
        }
    },
});
