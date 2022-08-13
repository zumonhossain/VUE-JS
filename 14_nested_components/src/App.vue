<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <Navbar></Navbar>

   
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  data(){
    return {
      title: 'Hurray Our vue apps are running',
     
    }
  },
  components:{
    Navbar
   
  },
  methods:{
  
    
  }
}
</script>

<style>
h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>