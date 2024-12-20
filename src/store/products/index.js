import { endpoints } from "../../axios/endpoints";
import { methods } from "../../axios/methods";
import generateThunkAndSlice from "../thunk/thunk";


const { slice: add_product, request: add_product_thunk } = generateThunkAndSlice(
    'add_product',
    endpoints.add_product,
    methods.POST
);

export {
    add_product,
    add_product_thunk
}