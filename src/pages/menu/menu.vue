<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-add :info='info' ref="one"></v-add>
    <v-list @edit='edit($event)' ></v-list>
  </div>
</template>

<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
  components:{
    vAdd,vList
  },
  data(){
    return{
      info:{
        isShow:false,
        isadd:true,
        istitle:'菜单添加'
      }
    }
  },
  methods:{
    add(){
      this.info.isShow=!this.info.isShow
      this.info.isadd=true
      this.info.istitle='菜单添加'
    },
    edit(e){
      this.$refs.one.look(e)
      this.info={
        isShow:true,
        isadd:false,
        istitle:'菜单修改'
      }
    }
  }
}
</script>

<style>


</style>
