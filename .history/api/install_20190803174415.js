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
<<<<<<< HEAD
    // if(Vue.prototype.$http){
    //     return
    // }
=======
>>>>>>> c11345e2f3f09b22a9a7715e5b5c6388c62a02e2
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
