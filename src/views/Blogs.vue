<template>


    <div class="block">

        <div class="blogsbox">
            <el-timeline style="width: 100%; ;margin: 0 auto"  >
                <el-timeline-item class="top" v-for="blog in blogs" :timestamp="blog.createTime!=null?blog.createTime:blog.updateTime" placement="top">
                    <router-link :underline="false" :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                        <el-card class="card">
                            <div class="line">
                                <i class="el-icon-view">{{blog.views}}</i>

                                <h4>
                                    {{blog.title}}
                                </h4>
                            </div>

                            <div class="demo-image">
                                    <el-image
                                            v-show="blog.firstPicture"
                                            style="width: 100%; height: auto;padding: 0"
                                            :src="blog.firstPicture"
                                            >
                                        <div slot="error" class="image-slot">
                                        </div>
                                    </el-image>
                            </div>
                            <p>{{blog.description}}</p>
                            <br>

                        </el-card>
                    </router-link>
                    <div class="editbtn" v-if="isCurrentUser(blog)">
                        <el-button @click="edit(blog)"  type="success" circle>
                            <i class="el-icon-edit"></i>
                        </el-button>
                    </div>


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
    import BlogEdit from "./BlogEdit";

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
                blogs:[],

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
            isCurrentUser(blog){
                if (sessionStorage.getItem('userInfo')!=null){
                    return blog.userId == this.$store.getters.getUser.id;
                }

            },
            edit(blog){
                const blogId = blog.id
                this.$router.push({name:'BlogUpdate',params:{blogId:blogId}})
            }

        },
        created() {
            this.getBlogPage(this.currentPage);
        }

    }
</script>

<style  type="text/css">

    .el-icon-edit:before{
        position: relative;
    }
    .editbtn{
        position: absolute;
        bottom: 4px;
        left: 35px;
    }
    .line i{
        position: absolute;
        left: 50px;
    }
    .demo-image{
        padding: 0;
    }
    .bigbox{
        width: auto;

    }

    .block{
        margin-top: 0;
        text-align: center;
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
