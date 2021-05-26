<template>
<the-navbar @selecCurrentPage="setPage"></the-navbar>
<component :is="selectedTab"></component>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheHome from './pages/TheHome.vue'
import AboutMe from './pages/AboutMe.vue'
import TheWorks from './pages/TheWorks.vue'
import TheContact from './pages/TheContact.vue'

export default {
  components: { TheNavbar , TheHome , TheWorks ,AboutMe , TheContact},
  data(){
    return{
      selectedTab:'the-home'
    }
  },
  methods:{
    setPage(page){
      this.selectedTab=page;
    }
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Roboto&display=swap');

*{
  font-family: 'Roboto', sans-serif;
}

body{
  margin:0px;
  padding:0px;
  background: url('./assets/cubo.jpg') black;
  background-size: cover;
  animation: appared 0.4s ease-in forwards;

}

@keyframes appared {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

:root{
  --main-color:rgb(131, 1, 1);
  --accent-color:rgb(241, 218, 6);
}

h1,h2,h3,h4{
  font-family: 'Montserrat', sans-serif;
}

.container-custom{
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 5rem;
  background-color: white;
}
</style>
