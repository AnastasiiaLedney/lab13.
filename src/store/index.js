import { createStore, createLogger } from 'vuex';
import message from "./message";
import auth from "./auth";
import groups from "./groups";

const store = createStore({
    plugins: [createLogger()],
    modules: {
        message,
        auth,
        groups
    },
});

export default store;