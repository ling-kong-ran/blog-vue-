<template>
        <div>
                <el-row label-position="right" type="flex">
                    <el-col :span="16" :push="4" :xs="{span:20,push:2}">
                        <el-col :span="12" :push="6" :xs="{span:20,push:2}" >
                            <el-card shadow="always">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
                                    <el-form-item  label="用户" prop="username" >
                                        <el-input style="width: 50%" clearable  prefix-icon="el-icon-user"  v-model="ruleForm.username"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password">
                                        <el-input style="width: 50%"  prefix-icon="el-icon-thumb" show-password v-model="ruleForm.password"></el-input>
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
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //alert('submit!');
                        this.$axios.post("http://localhost:8888/login",this.ruleForm).then(res=>{
                            console.log(res);
                        })
                    } else {
                        //console.log('error submit!!');
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
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-card{
        padding: 40px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
