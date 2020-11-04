<template>
<div class="detailbox">
    <div class="blogTitle">
        <h5>{{blog.title}}</h5>
    </div>
    <div class="blogImg" v-show="blog.firstPicture">
        <el-image :src="blog.firstPicture"
                  :fit="fit"
                   style="width: 100%">
            <div slot="error" class="image-slot">
            </div>
        </el-image>
    </div>
    <div class="markdown-body">
        <p class="content" v-html="blog.content"></p>
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
            }
        },
        methods:{

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
    }
</script>

<style scoped>
    .blogTitle{
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
