import m from 'mithril';

const GroupView = {
    oninit: function (vnode) {
        
    },
    current: {},
    view: function () {
        // console.log('groupview view');
        return m('.note-container', 'Some notes');
    }
}

export default GroupView;