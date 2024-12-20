// createText

import { endpoints } from "../../axios/endpoints";
import { methods } from "../../axios/methods";
import generateThunkAndSlice from "../thunk/thunk";


const { slice: createText, request: createText_thunk } = generateThunkAndSlice(
    'createText',
    endpoints.createText,
    methods.POST
);
const { slice: getAll, request: getAll_thunk } = generateThunkAndSlice(
    'getAll',
    endpoints.getAllText,
    methods.GET
);


export {
    createText_thunk,getAll,getAll_thunk
}