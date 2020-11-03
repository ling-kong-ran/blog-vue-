<template>
    <div class="bigbox">
                <div class="footerbox">
                    <p>
                        欢迎光临博客,如果觉得不错可以推给小伙伴哟,
                        也欢迎投稿
                        <el-link type="success" href="https://mail.qq.com/">
                            3204170464@qq.com
                        </el-link>
                    </p>
                </div>
<!--        <el-carousel indicator-position="outside" class="imgs">-->
<!--            <el-carousel-item v-for="item in imgs" :key="item">-->
<!--                <el-image-->
<!--                        style="width: 100%; height: 100%"-->
<!--                        :src="item"-->
<!--                        fit="fit"></el-image>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->
    </div>
</template>

<script>
    import img1 from '../assets/imgs/1.jpg'
    import img2 from '../assets/imgs/2.jpg'
    import img3 from '../assets/imgs/3.jpg'
    import img4 from '../assets/imgs/4.jpg'
    export default {
        name: "Footer",
        data(){
            return{
                imgs:[img1,img2]
            }
        }
    }
</script>

<style scoped type="text/css">
    .el-row{
        margin-top: 50px;
    }
    .bigbox{
        left: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        position: fixed;
        z-index: 0;
    }
    .footerbox{
        width: 100%;
        height: 100%;
        background-color: aliceblue;
        color: black;
        opacity: 0.7;
        font-family: Arial,Helvetica,Calibri,serif;
        text-align: center;
    }
    .footerbox p{
        font-style: normal ;
        font-weight: bolder;
        font-size: small;
    }


</style>
