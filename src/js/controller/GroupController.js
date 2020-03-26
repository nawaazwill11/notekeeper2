import m from 'mithril';

import Navbar from '../views/Navbar';
import Layout from '../views/Layout';
import GroupView from '../views/GroupView';


const GroupController = {
    oninit: updateNav,
    view: function (vnode) {
        return m(Layout, {group_id: vnode.attrs.id}, m(GroupView, vnode.attrs))
    }
}

function updateNav() {
    
}

export default GroupController;