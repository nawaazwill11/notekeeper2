import m from 'mithril';

const url = 'https://localhost:8000';

const Group = {
    loadList: function () {
        m.request({
            method: 'GET',
            url: url + '/api/groups',
            withCredentials: false
        })
        .then((data) => {
            console.log(typeof(data));
            Group.list = data;
        })
        .catch((error) => console.log(error));
    }
}

export default Group;