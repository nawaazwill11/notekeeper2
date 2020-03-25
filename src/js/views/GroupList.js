import m from 'mithril';
import Group from '../model/Group';

// const groups = function () {
//     function log(e) {
//         console.log(e.target.className);
//     }
//     const group_list = [
//         {
//             name: 'Group-1',
//             class: 'group',
//             href: '/group-1',
//             onclick: log
//         },
//         {
//             name: 'Group-2',
//             class: 'group',
//             href: 'group-2',
//             onclick: log
//         }
//     ]
//     return [
//         m('.groups-container', group_list.map((group) => {
//             return m(m.route.Link, {
//                 class: group.class,
//                 href: group.href,
//                 onclick: group.onclick
//             }, group.name);
//         }))
//     ];
// }

const groups = {
    oninit: Group.loadList,
    view: function () {
        return m('.group-container', Group.list.map((group) => {
            return m(m.route.Link, {
                class: 'group-item',
                href: "/groups/" + group.name
            }, group.name)
        }));
    }
}

export default groups;