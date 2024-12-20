import { endpoints } from "../../axios/endpoints";
import { methods } from "../../axios/methods";
import generateThunkAndSlice from "../thunk/thunk";


const { slice: login, request: login_thunk } = generateThunkAndSlice(
    'login',
    endpoints.login,
    methods.POST
);

const { request: logout_thunk } = generateThunkAndSlice(
    'logout',
    endpoints.logout,
    methods.POST
);

const {slice: getProfile, request: getProfileThunk } = generateThunkAndSlice(
    'getprofile',
    endpoints.getProfile,
    methods.GET
);



export {
    login,
    login_thunk,
    logout_thunk,
    getProfile,
    getProfileThunk
}