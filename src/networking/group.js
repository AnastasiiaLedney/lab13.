import axios from "axios";
import { showErrorMessage } from "@/messaging";
import store from "@/store";

const baseUrl = "https://localhost:3443";

export default {
    async getGroupsList() {
        try {
            let groups = (await axios.get(`${baseUrl}/api/group`)).data;
            return groups;
        } catch (err) {
            showErrorMessage(err)
            return [];
        }
    },

    async deleteGroup(id) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let deletedGroup = (
                await axios.delete(
                    `${baseUrl}/api/group/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            ).data;
            return deletedGroup;
        }
        catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async postGroup(group) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let newGroup = (await axios.post(
                `${baseUrl}/api/group`,
                group,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )).data;
            return newGroup;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async getGroupById(id) {
        try {
            let group = (await axios.get(`${baseUrl}/api/group/${id}`)).data;
            return group;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    },

    async patchGroup(group, id) {
        try {
            const token = store.getters.token;
            if (!token)
                return null;
            let updatedGroup = (
                await axios.patch(
                    `${baseUrl}/api/group/${id}`,
                    group,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            ).data;
            return updatedGroup;
        } catch (err) {
            showErrorMessage(err);
            return null;
        }
    }
}