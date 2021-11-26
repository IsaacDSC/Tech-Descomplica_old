// import { RESPONSE_STATUS, errors } from "../utils"
// export default function(options: any){
//     if (options.status && options.data?.length === 0) {
//         return {
//             status: RESPONSE_STATUS.NO_CONTENT
//         }
//     }

//     if(!options.status){
//         console.error(options);
//         return {
//             status: RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
//             message: options.message.replace(/\s/g, "-").toLowerCase() || errors.genericError,
//         }
//     }
//     return {
//         status: options.status,
//         data: options.data,
//         message: options.message,
//     }
// }