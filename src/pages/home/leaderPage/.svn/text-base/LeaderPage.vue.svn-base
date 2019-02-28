<template>
  <div>
    <div class="tableMenu"style="margin-top: 30px;">
      <LineDouble ref='child4'/>
    </div>
    <div class="tableMenu">
      <BarSingle ref='child5'/>
    </div>
  </div>
</template>

<script>
  import LineDouble from "@/components/echarts/lineDouble"
  import BarSingle from "@/components/echarts/barSingle"
  export default {
    name: "LeaderPage",
    components: {
      LineDouble,
      BarSingle
    },
    created(){
      window.onresize = () =>{
        this.$refs.child4.resize();
        this.$refs.child5.resize();
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>

</style>
