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
    <div class="markdown-body">
        <p class="content" v-html="blog.content"></p>
    </div>
    <div class="updown" >
        <el-button  v-show="btnFlag" @click="backTop" class="up" type="primary" icon="el-icon-top" circle></el-button>
        <el-button v-show="btnFlag_" @click="backDown" class="down" type="primary" icon="el-icon-bottom" circle></el-button>
    </div>



</div>
</template>

<script>
    import 'github-markdown-css'

    export default {
        name: "BlogDetail",
        data(){
            return{
                blog:{},
                btnFlag:false,
                btnFlag_:false,
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
                        this.btnFlag_=true
                    }
                }, 16)
            },
            backDown() {
                const that=this;
                var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
                var scrollHeight=document.documentElement.scrollHeight;
                var height=scrollHeight-clientHeight; //超出窗口上界的值就是底部的scrollTop的值
                let ispeed = Math.floor(that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed+200
                if (document.documentElement.scrollTop<scrollHeight/1.1) {
                    var c=setTimeout(()=>this.backDown(),16);
                }else {
                    clearTimeout(c);
                    this.btnFlag_=false
                }
        },

            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
            scrollToTop () {
                const that = this
                that.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (that.scrollTop > 60) {
                    that.btnFlag = true
                }
                else if (that.scrollTop===0){
                    that.btnFlag_=false
                }
                else {
                    that.btnFlag = false
                    that.btnFlag_=true
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

<style scoped>
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
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 255, .12), 0 0 6px rgba(0, 0, 255, .04);
    min-height: 800px;
    margin-bottom: 50px;
    padding: 15px 20px;
    line-height: 30px;
}
</style>
