import m from 'mithril';

import Group from '../model/Group';
import Navbar from './Navbar';

const GroupView = {
    oninit: function (vnode) { 
        const index = Navbar.navItems.findIndex(({type}) => type === 'group');
        if (index > -1) {
            Navbar.navItems.splice(index, 1);
        }
        Navbar.navItems.push({
            path: '/groups/',
            id: vnode.attrs.id,
        });
        console.log(Navbar.navItems);
    },
    view: function () {
        console.log('viewing');
        return m('.note-container', 'Some notes');
    }
}

export default GroupView;