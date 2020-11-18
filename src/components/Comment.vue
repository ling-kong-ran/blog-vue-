<template>
    <div class="comment_box">
        <h1 style="margin-top: 50px;"> 精彩评论</h1>
        <div class="show_comments margin_top">
            <el-card   v-for="(comment,idx) in comments" class="comment" style="min-height: 100px">


                <div class="commenter" style="width: 100%">
                    <el-row>
                        <el-col :span="4" style="text-align: center">
                            <h2 style="color: deeppink">{{comment.nickname}}</h2>

                        </el-col>
                        <el-col :span="1">
                            <el-avatar v-if="true"
                                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">

                            </el-avatar>
                        </el-col>
                        <el-col :span="4">
                            <p style="color: green">{{comment.createTime}}</p>

                        </el-col>
                    </el-row>



                </div>

                <div class="comment_content" style="padding: 0 25px;">
                    <div class="row">
                        <p>{{comment.content}}</p>
                    </div>
                    <div class="replay_comment" v-if="commented()">
                        <div class="row">
                            <el-col :span="20" style="text-align: center">
                                <el-input  v-model="content[idx]" type="textarea"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-link @click="replay(comment.id,idx)" type="success" :underline="false"
                                         style="margin-top: 15px;margin-left: 10px">
                                    回复
                                </el-link>
                            </el-col>

                        </div>
                    </div>


                </div>
                <el-card v-if="comment.comment_son" v-for="son in comment.comment_son" class="comment_son" style="margin-top: 20px;">
                    <el-row style="min-height: 50px;text-align: center">
                        <el-col :span="4">
                            <h3 style="color: #ad45ad">{{son.nickname}}</h3>
                        </el-col>
                        <el-col :span="1">
                            <el-avatar
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">

                            </el-avatar>
                        </el-col>
                        <el-col :span="4">
                            <p style="color: green">{{son.createTime}}</p>

                        </el-col>
                        <br>


                    </el-row>
                    <el-row>
                        <el-col :span="8">

                            <p style="color: #555555">
                                {{son.content}}
                            </p>

                        </el-col>
                    </el-row>
                </el-card>

            </el-card>
        </div>

        <div class="publish_comment margin_top">
            <el-card style="text-align: left">
                <h1>发表评论</h1>
                <p>头像可以选填,昵称邮箱必填</p>
                <div>
                    <i class="el-icon-coffee-cup input_icon"></i>
                </div>
                <el-form label-position="left" :model="toComment" :rules="rules" ref="comment" label-width="80px"
                         class="demo-ruleForm">
                    <el-input v-model="toComment.content" style="padding-left: 0!important;"
                              placeholder="期待大佬的精彩留言o((>ω< ))o"
                              type="textarea">
                    </el-input>

                    <el-form-item class="margin_top" label="昵称：" prop="nickname">
                        <el-input v-model="toComment.nickname"></el-input>
                    </el-form-item>
                    <el-form-item class="margin_top" label="头像：" prop="img">
                        <el-input v-model="toComment.img">
                            <template slot="prepend">Http://</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="margin_top" label="邮箱：" prop="email">
                        <el-input v-model="toComment.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button type="button" @click="submitForm('comment')">提交评论</button>
                    </el-form-item>

                </el-form>


            </el-card>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Comment",
        data() {
            return {
                content:[],
                comments: [],
                toComment: {
                    blogId: this.$route.params.blogId,
                    nickname: '',
                    avatar: '',
                    content: '',
                    email: '',
                    deleted: false,
                    parentCommentId:''
                },
                //将评论者信息存到客户端中
                commenter:JSON.parse(localStorage.getItem('commenter')),
                rules: {
                    nickname: [
                        {required: true, message: '请输入昵称', trigger: 'blur'},
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }

                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},

                    ],

                }
            }
        },
        methods: {
            publishComment(){
                this.$axios.post('/comment',this.toComment).then(res=>{
                    console.log(res.data);
                    this.getComments();
                });

            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.publishComment();
                        this.setCommenter();
                    } else {
                        alert(this.comment.img)
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            replay(parentId,idx) {
                this.toComment.parentCommentId=parentId;
                this.toComment.avatar=this.commenter.avatar;
                this.toComment.email=this.commenter.email;
                this.toComment.nickname=this.commenter.nickname;
                this.toComment.content=this.content[idx];
                this.publishComment();
                console.log(this.toComment.blogId);
            },
            setCommenter(){
                if (sessionStorage.getItem('userInfo')){
                   this.commenter=JSON.parse(sessionStorage.getItem('userInfo'));
                }else {
                    this.commenter=this.toComment.email?this.toComment:null;
                }
                    localStorage.setItem('commenter',JSON.stringify(this.commenter))

            },
            commented(){
                /*
                判断是否允许发表
                * */
                return this.commenter!=null;
            },
            getComments(){
                this.$axios.get('/comment/'+this.toComment.blogId).then(res=>{
                    this.comments=res.data.data;
                    console.log(this.comments);
                })
            }

        },
        created() {
            this.setCommenter();
            this.getComments();
        }
    }
</script>

<style scoped>
    .row {
        /* 弹性布局 */
        display: flex;
    }

    .col {
        justify-content: space-between;
        padding: 0 10px !important;
    }

    button {
        color: white;
        position: absolute;
        width: 100%;
        right: 4%;
        border-radius: 20px;
        border: 1px solid aqua;
        background-color: #ad45ad;
    }

    .comment_box {
        margin: 0 auto;

    }

    .margin_top {
        margin-top: 10px;
    }

    h1 {
        font-size: 30px;
    }

    .input_icon {
        position: relative;
        top: 37px;
        left: 40px;
        z-index: 1;


    }

</style>
