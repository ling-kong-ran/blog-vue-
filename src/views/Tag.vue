<template>
    <div class="tagbox">
        <el-card class="father">
            标签
            <el-card class="son" v-for="tag in tags">
                <div class="l">
                    <span>{{tag.name}}</span>
                </div>
                <div class="r" v-if="isAdmin()">
                    <el-button-group style="margin-right: 5%">
                        <el-button @click="edit(tag.id)" type="primary" icon="el-icon-edit" circle></el-button>

                        <el-button @click="del(tag.id)" type="danger" icon="el-icon-delete" circle></el-button>

                    </el-button-group>
                </div>


            </el-card>

            </el-card>
    </div>
</template>

<script>
    export default {
        name: "tag",
        data(){
            return{
                tags:[],
            }
        },
        methods:{
            isAdmin(){

                if (sessionStorage.getItem('userInfo')!=null){
                    return JSON.parse(this.$store.getters.getUser).type;
                }

            },
            list(){
                this.$axios.get('/tags').then(res=>{
                    this.tags=res.data.data;
                })
            },
            edit(id){
                this.$router.push({
                    name:'TagUpdate',params:{tagId:id}
                })
            },
            del(id){
                this.$axios.delete('/tag/'+id,{headers:{
                    "Authentication": localStorage.getItem('token')
                }}).then(res=>{
                    this.list();
                })
            }
        },
        created() {
            this.list();
            //console.log(JSON.parse(this.$store.getters.getUser).type);

        }
    }
</script>

<style >
    .father{
    }
    .son{
        text-align: center;
        width: 70%;
        min-height: 100px;
        margin-left: 15%;
        margin-top: 10px;
    }
    .l{
        width: 75%;
        right: 5px;
        margin-top: 20px;
        float: left;
    }
    .l span{
        margin-left: 32%;
        width: 10%;
    }
    .r{
        left: 15px;
        top: 0;
        width: 25%;
        float: right;
    }
    .tagbox{
        text-align: center;
        width: 100%;
        min-height: 500px;
    }

</style>
