<template>
    <div>这是index</div>
</template>

<script>
    export default {
        name: "index",
      methods:{},
      created(){},
      mounted() {
          this.$axios.get('/proxy',{
          })
            .then(res=>{
            console.log(res)
          })
            .catch(err=>{
              console.log(err)
            })
      }
    }
</script>

<style scoped>

</style>
