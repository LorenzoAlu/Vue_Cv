<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5">
      <div class="col-10 col-md-6 text-center container-custom">
        <h1>Contatti</h1>
        <p>Desideri contattarmi? Inviami pure una mail o dai un occhiata ai miei social ;)</p>
      </div>
      <div class="col-10">
       <the-form></the-form>
      </div>
    </div>
  </div>

<div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10">
        <the-social></the-social>
      </div>
    </div>
  </div>
</template>

<script>
import TheForm from '../components/TheForm.vue';
import TheSocial from '../components/TheSocial.vue';
export default {
  components: { TheSocial, TheForm },};
</script>

<style scoped>
.container-fluid {
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
</style>