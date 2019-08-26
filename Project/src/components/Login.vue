<template>
    <div class="box">
      <div class="input_box">
      <el-input class="inputs" v-model="account" placeholder="请输入账号"></el-input>
      <el-input class="inputs" v-model="pwd" placeholder="请输入密码"></el-input>
      <el-button type="primary" class="inputs submit" @click="submit">提交</el-button>
      </div>
    </div>
</template>
<!--
-->
<script>
    export default {
        name: "Login",
      data(){
        return{
          account:'',
          pwd:'',
          data:{}
        }
      },
      methods:{
          submit(){
            // this.data.forEach((item)=>{
            // })
            for(var i=0;i<this.data.length;i++){
            if (this.account==this.data[i].account && this.pwd==this.data[i].pwd) {
              this.$message({
                message: '登录成功',
                type: 'success',
                center:'true',
                duration:'750'
              });
              setTimeout(()=>{this.$router.push({ path:'HelloWorld'  })},500);
            }
            // else {
            //   this.$message.error('账号或密码不正确！');
            // }
          }

      },
    },
      created(){
        this.$axios.post('/account',{
        })
          .then(res=>{
            this.data = res.data
          })
          .catch(err=>{
            console.log(err)
          })
      },
      mounted() {

      }
    }
</script>

<style scoped>
.box{
  /*background: url("../../static/img/tu.jpg") no-repeat;*/
  /*background-size: 100% 100%;*/
  padding-top: 18%;
}
.inputs{
  display: block;
  width: 15%;
  margin: 20px auto;
}
</style>
