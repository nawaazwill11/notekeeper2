import m from 'mithril';

const url = 'https://localhost:8000';

const Group = {
    list: [],
    loadList: function () {
        m.request({
            method: 'GET',
            url: url + '/api/groups',
            withCredentials: false
        })
        .then((data) => {
            Group.list = data.groups;
        })
        .catch((error) => console.log(error));
    }
}

export default Group;