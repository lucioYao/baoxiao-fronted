<template>
    <div id="login">
        <div>
            <div id="login-title" ><li class="fa fa-ge fa-pulse"/> <span> system of heheDA</span></div>
            <div id="loginForm">
                <el-form :model="loginForm" label-width="80px">
                    <el-form-item label="账号">
                        <el-input v-model.trim="loginForm.name" @keyup.enter.native="loginSubmit"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model.trim="loginForm.pwd" @keyup.enter.native="loginSubmit"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import apis from '@/api'

export default {
    data(){
        return {
            loginForm:{
                name:'1',
                pwd:''
            }
        }
    },
    methods:{
        loginSubmit(){
            apis.applyFlow({}).then(data =>{
                console.log("success:")
                console.log(data)
            }).catch(error => {
                console.error("fail:")
                console.log(error)
            });
            this.$notify({
                title: '来自呵呵哒的友情提示：',
                message: '功能还没有完毕！',
                type: 'warning'
             });
        }
    }
}
</script>

<style scoped>
#login {
    display: -webkit-flex; /* Safari */
    display: flex;
    width: 100%;
    height: 100%;
    background:linear-gradient(0deg, #000000, #000000);
    opacity: 1;
    position: fixed;
    justify-content:center;
    align-items:Center;
}
#login-title{
    width: 450px;
    height: 50px;
    color:#e6e6e6;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    text-shadow: 1px -1px 4px #8a258e;
}
#loginForm{
    width: 410px;
    height: 250px;
    margin: 40px 80px 0px 0px;
}

</style>

