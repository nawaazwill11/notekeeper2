import m from 'mithril';
import fs from 'fs';

const Group = {
    list: [],
    loadList: function () {
        const groups =  JSON.parse(fs.readFileSync('./db.json'));
        Group.list = groups.groups;
    }
}

export default Group;