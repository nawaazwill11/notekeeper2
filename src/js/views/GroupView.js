import m from 'mithril';

import Group from '../model/Group';
import Navbar from './Navbar';

const GroupView = {
    oninit: function (vnode) {
        
    },
    current: {},
    view: function () {
        console.log('groupview view');
        return m('.note-container', 'Some notes');
    }
}

export default GroupView;