import m from 'mithril';
import Group from '../model/Group';

const groups = {
    oninit: Group.loadList,
    view: function () {
        return m('.group-container', Group.list.map((group) => {
            return m('.group', m(m.route.Link, {
                    class: 'group-item',
                    href: "/groups/" + group.id
                }, group.id)
            )
        }));
    },
}

export default groups;