<template>
<div class="detailbox">
    <div class="blogTitle">
        <h2>{{blog.title}}</h2>
    </div>
    <div class="blogImg" v-show="blog.firstPicture">
        <el-image :src="blog.firstPicture"
                  fit="fit"
                   style="width: 100%">
            <div slot="error" class="image-slot">
            </div>
        </el-image>
    </div>
    <div id="content " class="markdown-body" v-highlight v-html="blog.content">
<!--        <div class="content" v-html="blog.content"></div>-->
    </div>
    <div class="updown" >
        <el-button  v-show="btnFlag" @click="backTop" class="up" type="primary" icon="el-icon-top" circle></el-button>
        <el-button circle icon="el-icon-cold-drink" class="down" @click="drawer = true" type="primary" style="margin-left: 16px;">

        </el-button>
    </div>
    <div class="about">
        <el-drawer
                title="我是标题"
                :visible.sync="drawer"
                :with-header="false"
                :modal="false"
                size="50%"
                style="text-align: center ;"
        >
            <el-card shadow="always" style="background-color: pink;width: 90%; margin: 0 auto;">

                <p>
                    欢迎光临博客,如果觉得不错可以推给小伙伴哟,
                    也欢迎投稿
                    <el-link type="success" href="https://mail.qq.com/">
                        3204170464@qq.com
                    </el-link>
                </p>
                <div class="lbox" style="float: left;width: 50%">
                    <el-image
                            :src="wechat"
                            fit="fit"
                            style="width: 90%"
                    >

                    </el-image>
                    <br>
                    <p>
                        联系我
                    </p>

                </div>
                <div class="rbox" style="float: left;width: 50% ;">
                    <el-image
                            fit="fit"
                            :src="admire"
                            style="width: 90%"
                    >

                    </el-image>
                    <br>
                    <p>
                听说你要请我喝奶茶
            </p>
                </div>

            </el-card>

        </el-drawer>
    </div>
    <div>
        <Comment></Comment>
    </div>
</div>

</template>

<script>
    import 'github-markdown-css'
    import Comment from "../components/Comment";


    export default {
        name: "BlogDetail",
        components: {Comment},
        data(){
            return{
                blog:{},
                btnFlag:false,
                drawer:false,
                wechat:require('../assets/wechat.png'),
                admire:require('../assets/pay.png')
            }
        },
        methods: {
            // 点击图片回到顶部方法，加计时器是为了过渡顺滑
            backTop() {
                const that = this
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },


            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
            scrollToTop () {
                const that = this
                that.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (that.scrollTop > 60) {
                    that.btnFlag = true
                }
                else if (that.scrollTop===0){
                }
                else {
                    that.btnFlag = false
                }
            },


        },

        created() {
            const blogId = this.$route.params.blogId
            console.log(blogId);
            if (blogId){
                this.$axios.get('/blog/'+blogId).then(res=>{
                    console.log(res.data.data);

                    var MarkDownIt = require('markdown-it')
                    var md = new MarkDownIt();
                    this.blog=res.data.data;
                    this.blog.content=md.render(res.data.data.content)
                })
            }

        },

        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },

    }
</script>

<style >
    .about{
        width: 400px;
    }

    div.v-modal{
        display: none;
    }
    section.el-drawer__body{
        background-color: pink;
        padding-top: 150px;
    }
    .updown{
        position: fixed;
        width: 45px;
        height: 100px;
        right: 15px;
        bottom: 50px;
        text-align: left;
    }
    .updown .up{
        position: absolute;
        bottom: 0;
        right: -6px;
    }
    .updown .down{
        position: absolute;
        top: 0;
        right: -6px;
    }
    .blogTitle{
        color: aqua;
        text-align: center;
        font-size: large;
    }
    .blogImg{
        width: 100%;
    }
.detailbox{
    background-color: white;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 255, .12), 0 0 6px rgba(0, 0, 255, .04);
    min-height: 800px;
    margin-bottom: 50px;
    padding: 15px 20px;
    line-height: 30px;
}
</style>
