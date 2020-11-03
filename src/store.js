import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
  },
  mutations: {//set
    SET_TOKEN:(state,token)=>{
      state.token=token;
      localStorage.setItem("token",token);
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo=userInfo;
      sessionStorage.setItem("userInfo",userInfo);
    },
    REMOVE_INFO:(state)=>{
      state.token='';
      state.userInfo={};
      sessionStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    }


  },
  getters:{
    getUser:state => {
      return state.userInfo
    },
    getToken:state => {
      return state.token
    }
  },
  actions: {//get
    GET_TOKEN:()=>{
      return localStorage.getItem("token");
    },
    GET_USERINFO:()=>{
      return JSON.parse(sessionStorage.getItem("userInfo"));
    }
  }
})
