<template>
  <div class="home">
      456654654654654645654
      <p>id:{{count}}</p>
      <p>transformationId:{{transformationCount}}</p>
      <p style="height:30px;border:1px solid red;" @click="setId"></p>
  </div>
</template>

<script>
import logo from '../assets/image/logo.png'
import '../assets/js/test.js'
export default {
  name: 'Home',
  data () {
    return {
        id:""
    }
  },
  props: {
  },
  components: {
  },
  watch:{
  },
  computed: {
    count () {
      return this.$store.state.id
    },
    transformationCount(){
      return this.$store.getters.transformationId
    }
  },
  created(){
     console.log($);
  },
  mounted() {
    console.log(logo)
  },
  methods: {
    setId(){
      // this.$store.dispatch('setIdAction',{id:20});
      this.$store.commit('setIdMutation',{id:20});
    },
    open4(resdes) {
        this.$message({
              showClose: true,
              message: resdes,
              type: 'error'
            });
    },
    open2(resdes){
         this.$message({
              showClose: true,
              message: resdes,
              type: 'success'
            });
    }
  }
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
