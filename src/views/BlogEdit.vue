<template>
    <div class="editbox">


        <el-form label-position="top" :model="blog" :rules="rules" ref="blog" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="title" >
                <div ><span class="in"><i class="el-icon-collection"></i>标题:</span><el-input class="myinput" v-model="blog.title"></el-input></div>
            </el-form-item>
            <el-form-item prop="firstPicture">
                <div ><span class="in"><i class="el-icon-picture"></i>首图:</span><el-input   v-model="blog.firstPicture"></el-input></div>
            </el-form-item>
            <el-form-item prop="description">
                <div ><span class="in"><i class="el-icon-chat-dot-square"></i>摘要:</span><el-input   type="textarea" v-model="blog.description"></el-input>
                </div>
            </el-form-item>
            <el-form-item prop="content">
                <mavon-editor  v-model="blog.content">
                </mavon-editor>
            </el-form-item>
            <el-form-item prop="boolen">
                <div class="mycheckbox">
                    <el-checkbox v-model="blog.recommend">推荐</el-checkbox>
                    <el-checkbox v-model="blog.flag">转载声明</el-checkbox>
                    <el-checkbox v-model="blog.appreciation">赞赏</el-checkbox>
                    <el-checkbox v-model="blog.commentAbled" >评论</el-checkbox>
                    <el-checkbox v-model="blog.shareStatement" >分享</el-checkbox>
                </div>
            </el-form-item>
            <el-form-item prop="tagType">
                <div class="myselect">
                    <el-select multiple v-model="blog.tag" placeholder="标签">
                        <el-option
                                v-for="item in tags"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                    <el-select  v-model="blog.type" placeholder="类型">
                        <el-option
                                v-for="item in types"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </div>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('blog')">立即创建</el-button>
                <el-button @click="resetForm('blog')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "BlogEdit",
        data() {
            return {
                types:[
                    {
                        id:1,
                        name:'学习'
                    },
                    {
                        id:2,
                        name:'编程'
                    }
                ],

                tags:[
                    {
                        id:1,
                        name:'JavaScript'
                    },
                    {
                        id:2,
                        name:'Python'
                    },
                    {
                        id:3,
                        name:'SpringBoot'
                    },
                ],
                blog: {
                    title: '',
                    tag:'',
                    type:'',
                    description: '',
                    flag:'转载',
                    appreciation:false,
                    commentAbled:false,
                    content:'',
                    firstPicture:'',
                    published:false,
                    recommend:false,
                    shareStatement:false,
                },
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                    ],
                    firstPicture: [
                        { required: true, message: '请输入首图地址', trigger: 'blur' }
                    ],
                    description: [
                        {  required: true, message: '请输入文章摘要', trigger: 'blur' }
                    ],
                    content:[
                        {  required: true, message: '请输入文章内容', trigger: 'blur' }
                    ]
                }
            };
        },
        created() {
            const blogId = this.$route.params.blogId
            console.log(blogId);
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                       this.$axios.post('/blog',this.blog,{
                           headers:{
                               "Authentication":localStorage.getItem('token')
                           }
                       }).then(res=>{
                          this.$router.push({name:"Blogs"})
                       })
                    } else {
                        console.log('error submit!!');
                        console.log(this.blog);

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

<style >
    input.el-input__inner{
        padding-left: 60px;
    }
    textarea.el-textarea__inner{
        padding-left: 60px;
        padding-top: 10px;

    }
    .el-form-item__label{
        color: white;
    }
    span.in{
        color: #409EFF;
    }
    .myselect{
        margin-bottom: 20px;
        width: auto;
    }
    .editbox{
        width: 80%;
        height: 1000px;
        margin: 0 auto;
        line-height: 40px;
        text-align: left;

    }
    .in{
        text-align: left;
        position: relative;
        top: 40px;
        z-index: 2;

    }

</style>
