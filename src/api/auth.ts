import instance from "@/utils/request";

const AUTH_API = '/api/v1/auth';

const apiAuth = {
    getCaptcha: () => {
        return instance({
            url: `${AUTH_API}/captcha`,
            method: 'GET',
      });
    }
}

export default apiAuth;