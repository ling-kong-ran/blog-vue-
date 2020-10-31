<template>
    <div>
        <el-row>
            <el-col :span="16" :offset="4">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/blogs">
                        <el-link href="#/blogs" :underline="false">博客主页</el-link>
                    </el-menu-item>
                    <el-menu-item index="/login">
                        <el-link href="#/login" :underline="false">登录</el-link>
                    </el-menu-item>
                    <div>

                    </div>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data:function() {
            return {
                activeIndex: '/blogs'
            }
        },
        methods: {

            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(keyPath);
            }

        }

    }
</script>

<style scoped>

</style>
