
import { toastHandler } from '../base/toastManager/toasthandler';
import { ACCESS_TOKEN } from '../constants/api';
import instance from './_instance';
import { toast } from 'react-hot-toast';


// const refreshToken = async (methodRequest, endpointRequest, dataRequest) => {
//     try {
//         const refresh_token = localStorage.getItem('refresh_token');
//         console.log(refresh_token, 'refreshtoken');

//         const res = await axios.post(`${url}/auth/generate-access-token`, {
//             refresh_token
//         });

//         const data = res.data;

//         localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
//         makeHttpRequest(methodRequest, endpointRequest, dataRequest);
//     } catch (error) {
//         localStorage.setItem(ACCESS_TOKEN, '');
//         localStorage.setItem(REFRESH_TOKEN, '');
//         localStorage.setItem(BUSINESS_ID, '');
//         window.location.href = '/';
//     }
// };

export const makeHttpRequest = async (method, endpoint, data) => {
   
    const url = endpoint;

    const config = {
        method: method,
        url: url,
        data: data,
     
        // headers: {
        //     authorization: access_token ? `Bearer ${access_token}` : ''
        // }
    };

    try {
        const response = await instance(config);
console.log(response, "resssopopop")
        // //development
        // if (response.headers['content-type'].includes('/html')) {
        //     // toastHandler('Something went wrong', 'error');
        //     return;
        // }
        // if (response.status === 401) {
        //     localStorage.setItem('access_token', '');
        //     localStorage.setItem('business_id', '');
        //     window.location.href = '/login';
        // }

        if (response?.data?.messages) {
            // toastHandler(response.data.data.message, 'success');

            response?.data?.messages?.forEach(element => {
                toastHandler(element, 'success')
            });
        }

        console.log(response, "success_response")
        return response.data;
    } catch (error) {
   
        if (error?.response?.status === 404) {
            // toastHandler('Error 404', 'error');
        }
        if (error?.response?.status === 401) {
            // toastHandler('Error 404', 'error');
            localStorage.clear()
            window.location.assign("/")
        }
        if (error?.response?.status === 410) {
            error?.response?.data?.messages?.forEach(element => {
                toastHandler(element, 'error')
            });
        }
        if (error && !error.response) {
            // toastHandler(error.message, 'error');
        }
        error.response?.data?.errors?.map((error) => {
            console.log(error);
            // toastHandler(error, 'error');
            return null;
        });

        return null;
    }
};
