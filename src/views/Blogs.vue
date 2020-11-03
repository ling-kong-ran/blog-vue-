<template>


    <div class="block">
        <div class="blogsbox">
            <el-timeline style="width: 70%; ;margin: 0 auto"  >
                <el-timeline-item class="top" v-for="blog in blogs" :timestamp="blog.createTime" placement="top">
                    <router-link :underline="false" :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                        <el-card class="card">
                            <div class="demo-image">
                                    <el-image
                                            v-show="blog.firstPicture"
                                            style="width: 50%; height: auto;padding: 0"
                                            :src="blog.firstPicture"
                                            fit="contain">
                                        <div slot="error" class="image-slot">
                                        </div>
                                    </el-image>

                            </div>
                            <h4>
                                {{blog.title}}
                            </h4>
                            <p>{{blog.description}}</p>
                            这是我的个人博客，记录学习进度和关于编程、写作、思考相关的任何内容...

                        </el-card>
                    </router-link>
                </el-timeline-item>
            </el-timeline>

        </div>

        <el-pagination class="page"
                background
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="pageSize"
                @current-change=getBlogPage
                :page-count="pageCount">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Blogs",
        data(){
            return{
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                //blog:{},
                currentPage:1,
                pageSize:5,//1页有多少个
                pageCount:2,
                blogs:[]
            }
        },
        methods:{
            getBlogPage(currentPage){
                this.$axios.get("/blogs?currentPage="+currentPage).then(res=>{
                    console.log(res.data.data);
                    this.blogs=res.data.data.records;
                    this.pageCount=res.data.data.total;
                    this.currentPage=res.data.data.currentPage;
                    this.pageSize = res.data.data.pageSize;
                })
            },

        },
        created() {
            this.getBlogPage(this.currentPage);
        }

    }
</script>

<style  type="text/css">
    .demo-image{
        padding: 0;
    }
    .bigbox{
        width: auto;
    }

    .block{
        margin-top: 0;
    }
    a{
        text-decoration: none;
    }
    .router-link-active{
        text-decoration: none;
    }
    .el-timeline-item__timestamp.is-top{
        margin-right: 70%;
        width: 100px;
        color: white;
    }
    .card{
        height: auto;
        z-index: -1;
        width: auto;
    }
    .page{
        margin-top: 0;
        z-index: 200;
    }

</style>
