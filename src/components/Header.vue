<template>



    <div class="box">
                <el-menu  :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/blogs">
                        博客主页
                    </el-menu-item>
                    <el-menu-item index="/login" v-show="!isLogin">
                        登录
                    </el-menu-item>
                    <el-menu-item index="/tag">
                        标签
                    </el-menu-item>
                    <el-menu-item index="/type">
                        类型
                    </el-menu-item>
                    <el-menu-item >
                        <el-dropdown ref="login" trigger="click" v-show="isLogin">
                            <span class="el-dropdown-link">
                                <el-avatar :src="user.avatar" ></el-avatar>
                                {{user.nickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu  >
                                <el-popconfirm
                                        @onConfirm="logout"
                                        title="确定退出吗？"
                                >
                                    <el-button  round type="text " slot="reference">退出</el-button>
                                </el-popconfirm>
                                <el-dropdown-item>
                                    <div style="text-align: center">
                                        <el-link href="#/blog/add" :underline="false"  type="success"> 发表</el-link>
                                    </div>
                                </el-dropdown-item>


                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-menu-item>
                    <div>

                    </div>
                </el-menu>

    </div>
</template>

<script>
    export default {
        name:'Header',
        data:function() {
            return {
                activeIndex: '/blogs',
                user:{
                    nickname:'请登录',
                    avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                },
                isLogin:this.$store.getters.getLogin
            }
        },
        methods: {

            handleSelect(key, keyPath) {
                //this.$router.push(keyPath);
            },
            logout(){
                console.log("退出了")
                this.$axios.get('/logout',{
                    headers:{
                        "Authentication":localStorage.getItem('token')
                    }
                }).then(res=>{
                    this.$store.commit('REMOVE_INFO');
                })
                this.isLogin=false;
            }

        },
        created() {
            if (!this.$store.getters.getUser){
                this.user.nickname='未登录'
            }else {
                this.user=this.$store.getters.getUser;
                this.isLogin=true;
            }

        }

    }
</script>

<style scoped>
    .box{
        z-index: 1;
        position: fixed;
        color: aliceblue;
        width: 100%;
    }

</style>
