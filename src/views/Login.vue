<template>
        <div class="box">
                <el-row class="row" label-position="right" type="flex">
                    <el-col :span="20" :push="2" :xs="{span:20,push:2}">
                        <el-col :span="14" :push="5" :xs="{span:22,push:1}" >
                            <el-card shadow="always" class="card" >
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                                    <el-form-item  label="用户" prop="username" >
                                        <el-input style="width: 50%" clearable  prefix-icon="el-icon-user"  v-model="ruleForm.username"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password">
                                        <el-input style="width: 50%" clearable prefix-icon="el-icon-thumb" show-password v-model="ruleForm.password"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div >
                                    <el-button type="success" round @click="submitForm('ruleForm')">登录</el-button>
                                    <el-button type="primary" round @click="resetForm('ruleForm')">重置</el-button>
                                </div>

                            </el-card>
                        </el-col>

                    </el-col>
                </el-row>
        </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',

                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            };
        },
        created() {
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //alert('submit!');
                        this.$axios.post("/login",this.ruleForm).then(res=>{
                            let userInfo=JSON.stringify(res.data.data)
                            let token=res.headers['authentication'];

                            if (res.data.status){
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                                this.$store.commit('SET_TOKEN',token);
                                this.$store.commit('SET_USERINFO',userInfo);
                                this.$store.commit('SET_LOGIN',true);
                                this.$router.push({name:'Blogs'})
                                this.$router.go(0);
                            }


                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .box  {
        text-align: center;
        color: white;
        width: 100%;
        height: 100%;
        line-height: 200px;

    }
    .card{
        padding-top: 100px;
        padding-bottom: 0;
        background-color: white;
        height: auto;
    }

    .el-form{
        line-height: 20px;
    }
    .demo-ruleForm{
        height: 100%;
    }


    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
