import Api from './api';

const api = new Api();
api.$http.interceptors.response.use((res) => {
    // loading close...
    return res;
},
    error => {
        if (error && error.response) {
            // 获取状态码
            console.dir(error)
            const status = error.response.status;
            const errorText = error.response.data.message
            const errorData = {
                status,
                errorText
            }
            return Promise.reject(errorData);
        }
        return Promise.reject(error);
    });

const install = function apiFun(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.defineProperties(Vue.prototype, {
        $http: {
            get() {
                return api;
            },
        },
    });
};

export default {
    install,
};
