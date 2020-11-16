<template>
    <div class="typebox">
        <el-card class="father">
            类型
            <el-card class="son" v-for="type in types">
                <div class="l">
                    <span>{{type.name}}</span>
                </div>
                <div class="r" v-if="isAdmin()">
                    <el-button-group style="margin-right: 5%">
                        <el-button @click="edit(type.id)" type="primary" icon="el-icon-edit" circle></el-button>

                        <el-button @click="del(type.id)" type="danger" icon="el-icon-delete" circle></el-button>

                    </el-button-group>
                </div>


            </el-card>

        </el-card>

    </div>
</template>

<script>
    export default {
        name: "type",
        data() {
            return {
                types:[],
                tableData: [{
                    date: '1',
                    name: '学习',
                }, {
                    date: '2',
                    name: '编程',
                }, {
                    date: '3',
                    name: '运动',
                }, {
                    date: '4',
                    name: '写作',
                }
                    , {
                        date: '5',
                        name: '音乐',
                    }
                    , {
                        date: '6',
                        name: '美文',
                    }]
            }
        }
        ,methods:{
            list(){
                this.$axios.get('/types').then(res=>{
                    this.types=res.data.data;
                })
            },
            isAdmin(){
                if (sessionStorage.getItem('userInfo')!=null){
                    return JSON.parse(this.$store.getters.getUser).type;
                }
            },
            edit(id){
                this.$router.push({
                    name:'TypeUpdate',params:{typeId:id}
                })
            },
            del(id){
                this.$axios.delete('/type/'+id,{
                    headers:{
                        "Authentication": localStorage.getItem('token')
                    }
                }).then(res=>{
                    this.list();
                })

            }
        },
        created() {
            this.list()
        }
    }
</script>

<style >


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
    .typebox{
        text-align: center;
        width: 100%;
        min-height: 500px;
    }
</style>
