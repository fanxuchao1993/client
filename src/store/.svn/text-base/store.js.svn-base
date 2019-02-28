import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        publicParamas:null
    },
    
    getters:{
        // 参数列表state指的是state数据
        getParamas(state){
        	if (!state.publicParamas) {
	            state.publicParamas=JSON.parse(sessionStorage.getItem('publicParamas'));
	        }
            return state.publicParamas;
        }
    },
    // 通常跟api接口打交道
    actions:{
        // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // paramasObj就是调用此方法时要传的参数
        setParamasInfo({commit,state}, paramasObj){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setParamas", paramasObj);
        }
    },
    
    mutations:{
        //state指的是state的数据 paramasObj传递过来的数据
        setParamas(state,paramasObj){
        	sessionStorage.setItem("publicParamas",JSON.stringify(paramasObj));
            state.publicParamas = paramasObj;//将传参设置给state的publicParamas
        }
    }
});

export default store;