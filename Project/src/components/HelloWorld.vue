<template>
  <div>
    <el-table
      :data="data0.filter(data => !search || data.RewardId.toLowerCase().includes(search.toLowerCase()))"
      style="width: 80%;margin: auto">
      <el-table-column
        label="ID"
        prop="RewardId">
      </el-table-column>
      <el-table-column
        label="Name"
        prop="RewardName">
      </el-table-column>
      <el-table-column
        label="Type"
        prop="RewardType">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">★</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      data0:{},
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      this.data0.splice(index,1)
    }
  },
  created() {
    this.$axios.get('/proxy',{})
      .then(res=>{
        console.log(res)
        this.data0 = res.data
      })
      .catch(err=>{
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
