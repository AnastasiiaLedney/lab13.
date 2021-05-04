import networking from "../networking";

export default {
    state: {
        groups: [],
    },
    getters: {
        groups(state) {
            return state.groups;
        }
    },
    mutations: {
        setGroups(state, groups) {
            state.groups = groups;
        },
        addGroup(state, group) {
            state.groups.push(group);
        },
        updateGroup({ groups }, group) {
            const index = groups.findIndex(b => b._id === group._id);
            if (index >= 0)
                groups.splice(index, 1, group);
        },
        removeGroup({ groups }, group) {
            const index = groups.findIndex(b => b._id === group._id);
            if (index >= 0)
                groups.splice(index, 1);
        }
    },
    actions: {
        async loadGroups({ commit }) {
            const groups = await networking.getGroupsList();
            commit("setGroups", groups);
        },
        async addGroup({ commit }, group) {
            let newGroup = await networking.postGroup(group);
            if (!newGroup)
                return null;
            commit("addGroup", newGroup);
            return newGroup;
        },
        async updateGroup({ commit }, group) {
            let updatedGroup = await networking.patchGroup(group, group._id);
            if (!updatedGroup)
                return null;
            commit("updateGroup", updatedGroup);
            return updatedGroup;
        },
        async deleteGroupById({ commit }, id) {
            let deletedGroup = await networking.deleteGroup(id);
            if (!deletedGroup)
                return null;
            commit("removeGroup", deletedGroup);
            return deletedGroup;
        },
    }
}