<template>
    <el-card style="text-align: center;min-height: 400px;padding-top: 250px">
        <span>
            <label for="input">{{flag}}名：
            </label>
            <el-input id="input" type="text" clearable :label="flag" v-model="typeOrTag.name" style="width: 50%">

        </el-input>
            <el-button @click="submit" style="height: 100%;margin-left: 5%">提交</el-button>

        </span>

    </el-card>
</template>

<script>
    export default {
        name: "TagTypeEdit",
        data(){
            return{
                typeOrTag:{},
                flag:''
            }
        },
        methods:{
            submit(){
                let url=''
                if (this.flag=='标签'){
                    url='/tag'
                }
                if (this.flag=='类型'){
                    url='/type'
                }
                this.$axios.put(url,this.typeOrTag,{
                    headers:{
                        "Authentication": localStorage.getItem('token')
                    }
                }).then(res=>{
                    this.$router.push(url);
                })
            }
        },
        created() {
            const typeId=this.$route.params.typeId;
            const tagId=this.$route.params.tagId;
            if (typeId){
                this.$axios.get('/type/'+typeId).then(res=>{
                    this.typeOrTag=res.data.data
                    this.flag='类型'
                })
            }
            if (tagId){
                this.$axios.get('/tag/'+tagId).then(res=>{
                    this.typeOrTag=res.data.data
                    this.flag='标签'
                })
            }


        }
    }
</script>

<style scoped>

</style>
