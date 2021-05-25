<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid" >
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse " id="navbarColor01" style="">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom">
          <li class="nav-item" @click="selectPage('the-home')">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  @click="selectPage('about-me')">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  @click="selectPage('the-works')">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"  @click="selectPage('the-contact')">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  emits:['selecCurrentPage'],
    methods:{
      selectPage(page){
        this.$emit('selecCurrentPage',page)
      }
    }
}

</script>

<style scoped>
/* .custom{
  display: flex !important;
  justify-content: space-around !important;
} */
</style>