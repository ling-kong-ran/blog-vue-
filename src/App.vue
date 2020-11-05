<template>
    <div id="app">


        <div class="background">
            <img :src="bg" style="width: 100%;height: 100%;" >
        </div>
        <el-container>
            <Header class="heading"></Header>
            <div class="box5">
                <el-main class="body">
                    <el-row type="flex">
                        <el-col :span="20" :offset="2" :xs="{span:24}">
                            <router-view/>
                        </el-col>
                    </el-row>
                </el-main>
            </div>
            <el-footer>
                <Footer>
                </Footer>
            </el-footer>
        </el-container>
    </div>

</template>


<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";
    //点击鼠标爱心特效
    import  './plugins/js/love'



    export default {
        name: 'App',
        data() {
            return {
                bg:require('./assets/bg.png')
            }
        },
        components: {
            Header,
            Footer
        },
        created() {
        }

    }



</script>

<style>
    .divi{
        position: absolute;
        top: 500px;
    }

    body{
        overflow-x: hidden;
        background: url("./assets/bg.png") repeat top center;
        cursor: url(https://www.datealive.top/wp-content/uploads/2020/05/arr112.png), auto;
    }
    .box5{
        width: 100%;
        height: auto;
        overflow: auto;
        min-height: 1000px;
        position: absolute;
        padding-top: 50px;
        top: 60px;
        left: -4px;

    }
    .box5::-webkit-scrollbar{
        width: 8px!important;
        height: 8px!important;
    }
    .box5::-webkit-scrollbar-thumb{
        border-radius: 4px;
        background-color: #999!important;
    }
    .box5::-webkit-scrollbar-track-piece{
        background: #eee!important;
    }
    body::-webkit-scrollbar{
        width: 8px!important;
        height: 8px!important;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 4px;
        background-color: #999!important;
    }
    body::-webkit-scrollbar-track-piece{
        background: #eee!important;
    }
    *{
        padding: 0;
        margin: 0;
        font-size: medium;
    }
    #app{
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
    .heading{
        opacity: 70%;

    }
    .body{
        margin-top: 10px;
        opacity: 70%;
        width: 100%;
    }


    .background{
        width:100%;
        height:auto;
        z-index:-1;
        position: absolute;

    }

    .el-header{
        color: #333;
        text-align: center;
        line-height: 60px;
        position: fixed;
    }


    .el-main {


        height: auto;

    }
    .el-footer{
        width: auto;
        bottom: 0;
        position: static;
        text-align: center;
    }


    body > .el-container {
        margin-bottom: 40px;
    }


    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
