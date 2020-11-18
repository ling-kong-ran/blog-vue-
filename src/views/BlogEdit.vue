<template>
    <div class="editbox">


        <el-form label-position="top" :model="blog" :rules="rules" ref="blog" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="title">
                <div><span class="in"><i class="el-icon-collection"></i>标题:</span>
                    <el-input class="myinput" v-model="blog.title"></el-input>
                </div>
            </el-form-item>
            <el-form-item prop="firstPicture">
                <div><span class="in"><i class="el-icon-picture"></i>首图:</span>
                    <el-input v-model="blog.firstPicture"></el-input>
                </div>
            </el-form-item>
            <el-form-item prop="description">
                <div><span class="in"><i class="el-icon-chat-dot-square"></i>摘要:</span>
                    <el-input type="textarea" v-model="blog.description"></el-input>
                </div>
            </el-form-item>
            <el-form-item prop="content">
                <mavon-editor v-model="blog.content">
                </mavon-editor>
            </el-form-item>
            <el-form-item prop="boolen">
                <div class="mycheckbox">
                    <el-select v-model="blog.flag">
                        <el-option label="原创" value="原创">原创</el-option>
                        <el-option label="转载" value="转载">转载</el-option>
                        <el-option label="翻译" value="翻译">翻译</el-option>
                    </el-select>
                    <span class="padding_left">
                        <el-checkbox checked="checked" v-model="blog.recommend">推荐</el-checkbox>
                        <el-checkbox checked="checked" v-model="blog.appreciation">赞赏</el-checkbox>
                        <el-checkbox checked="checked" v-model="blog.commentAbled">评论</el-checkbox>
                        <el-checkbox checked="checked" v-model="blog.shareStatement">分享</el-checkbox>

                    </span>
                 </div>
            </el-form-item>
            <el-form-item prop="tagType">
                <div class="myselect my_font">
                    <el-select multiple v-model="checkTags" placeholder="标签">
                        <el-option
                                v-for="tag in tags"
                                :label="tag.name"
                                :value="tag.id">
                        </el-option>

                    </el-select>
                    <el-select class="padding_left" v-model="blog.typeId" placeholder="类型">
                        <el-option
                                v-for="type in types"
                                :label="type.name"
                                :value="type.id">
                        </el-option>
                    </el-select>
                </div>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('blog')">立即创建</el-button>
                <el-button @click="resetForm('blog')">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="updown">
            <el-button v-if="btnFlag" @click="backTop" class="up" type="primary" icon="el-icon-top" circle></el-button>
            <el-button v-if="btnFlag_" @click="backDown" class="down" type="primary" icon="el-icon-bottom"
                       circle></el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BlogEdit",
        data() {
            return {
                btnFlag: false,
                btnFlag_: true,

                types: [

                ],

                tags: [

                ],
                checkTags:[],
                blog: {
                    title: '',
                    tags: [],
                    type: {},
                    description: '',
                    flag: '原创',
                    appreciation: false,
                    commentAbled: false,
                    content: '',
                    firstPicture: '',
                    published: false,
                    recommend: false,
                    shareStatement: false,
                    deleted:false
                },
                rules: {
                    title: [
                        {required: true, message: '请输入文章标题', trigger: 'blur'},
                        {min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur'}
                    ],
                    firstPicture: [
                        {required: true, message: '请输入首图地址', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入文章摘要', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入文章内容', trigger: 'blur'}
                    ]
                }
            };
        },
        created() {
            this.getTags();
            this.getTypes();
            const blogId = this.$route.params.blogId
            console.log(this.blog);
            if (blogId) {
                this.$axios.get('/blog/' + blogId).then(res => {
                    console.log(res.data.data);
                    this.blog = res.data.data;

                })
            }

        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods: {

            setTags(){
                let tags=[];
                this.tags.forEach(i=>{
                    this.checkTags.forEach(a=>{
                        if (i.id==a){
                            tags.push(i)
                        }
                    })

                })
                this.blog.tags=tags;
            },
            submitForm(formName) {
                this.setTags();
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        if (this.$route.params.blogId) {
                            this.$axios.put('/blog', this.blog, {
                                headers: {
                                    "Authentication": localStorage.getItem('token')
                                }
                            }).then(res => {
                                this.$router.push({name: "Blogs"})
                            })
                        } else {
                            // this.blog.tags['tags']=this.checkTags;
                            // let tagsId=JSON.stringify(this.blog.tags);
                            // console.log(this.blog.tags);

                            this.$axios.post('/blog', this.blog,{
                                headers: {
                                    "Authentication": localStorage.getItem('token')
                                }
                            }).then(res => {
                                this.$router.push({name: "Blogs"})
                            })
                        }

                    } else {
                        console.log('error submit!!');
                        console.log(this.blog);

                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getTags(){
                this.$axios.get('/tags').then(res=>{
                    this.tags=res.data.data;
                })
            },
            getTypes(){
                this.$axios.get('/types').then(res=>{
                    this.types=res.data.data;
                })
            },



            // 点击图片回到顶部方法，加计时器是为了过渡顺滑
            backTop() {
                const that = this
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                        this.btnFlag_ = true
                    }
                }, 16)

            },
            backDown() {
                const that = this;
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                var scrollHeight = document.documentElement.scrollHeight;
                var height = scrollHeight - clientHeight; //超出窗口上界的值就是底部的scrollTop的值
                let ispeed = Math.floor(that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed + 200

                if (document.documentElement.scrollTop < scrollHeight/1.2) {
                    var c = setTimeout(() => this.backDown(), 16);
                    if (document.documentElement.scrollTop === 0) {//手机端识别不了scrollTop 永远为0所以会死循环
                        that.btnFlag_ = true
                        clearTimeout(c);
                    }
                } else {
                    clearTimeout(c);
                    that.btnFlag_ = false
                }
            },

            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
            scrollToTop() {
                const that = this
                that.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (that.scrollTop > 60) {
                    that.btnFlag = true
                } else if (that.scrollTop === 0) {
                    that.btnFlag_ = false
                } else {
                    that.btnFlag = false
                    that.btnFlag_ = true
                }
            },
        }
    }
</script>

<style>
    .my_font{
        color: black !important;
    }
    .padding_left{
        padding-left: 20px!important;
    }
    .mycheckbox{

    }
    .updown {
        z-index: 3;
        position: fixed;
        width: 45px;
        height: 100px;
        right: 15px;
        bottom: 50px;
        text-align: left;
    }

    .updown .up {
        position: absolute;
        bottom: 0;
        right: -6px;
    }

    .updown .down {
        position: absolute;
        top: 0;
        right: -6px;
    }

    input.el-input__inner {
        padding-left: 60px;
    }

    textarea.el-textarea__inner {
        padding-left: 60px;
        padding-top: 10px;

    }

    .el-form-item__label {
        color: white;
    }

    span.in {
        color: #409EFF;
    }

    .myselect {
        margin-bottom: 20px;
        width: auto;
    }

    .editbox {
        width: 80%;
        min-height: 700px;
        margin: 0 auto;
        line-height: 40px;
        text-align: left;

    }

    .in {
        text-align: left;
        position: relative;
        top: 40px;
        z-index: 2;

    }

</style>
