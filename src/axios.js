import Axios from "axios";

Axios.defaults.baseURL="http://10.209.233.167:8888"
//前置拦截
// Axios.interceptors.request.use(config=>{
//     return config;
// })
//
// Axios.interceptors.response.use(response=>{
//     let res = response.data;
//     console.log('++++++++++++++++++++');
//     console.log(res.msg);
//     console.log('++++++++++++++++++++');
//         console.log(response);
//         if (response.status){
//         return response;
//     }else {
//         const h = this.$createElement;
//         this.$message({
//             message: h('p', null, [
//                 h('span', null, '温馨提示： '),
//                 h('i', { style: 'color: teal' }, res.data.msg)
//             ])
//         });
//     }
//
// },
//     error => {
//         if (error.response){
//             console.log(error.response);
//             switch (error.response.data.status) {
//
//             }
//         }
//     }
// )
