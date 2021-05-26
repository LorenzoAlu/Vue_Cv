<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 text-center my-5 container-custom">
        <h1>My Work</h1>
        <p>Ecco alcuni dei miei progetti, buona visione! ;)</p>
      </div>
      <div class="row justify-content-center">
        <card-base
          title="Covid Dashboard"
          description="Dashboard realizzata utilizzando Vanilla Javascript e libreria armchard."
          link="https://lorenzoalu.github.io/Covid-Dashboard/"
          :image="require('./../assets/covid.jpg')"
        ></card-base>

        <card-base
          title="Contro Cultura"
          description="Sito stile blog d'informazione, realizzato con laravel 8, MySQL e vanilla js."
          link="https://progetto.prestolorenzoalu.it/"
          :image="require('./../assets/cc.jpg')"
        ></card-base>

        <card-base
          title="Presto.it"
          description="Sito d'annunci clone del più famoso Subito.it, realizzato con Bootstrap 5 e vanilla js."
          link="https://lorenzoalu.github.io/project_clone_presto_subito/"
          :image="require('./../assets/presto.jpg')"
        ></card-base>

        <card-base
          title="Presto.it Laravel"
          description="Sito d'annunci clone del più famoso Subito.it, realizzato con Bootstrap 5 e Laravel 8, il sito implementa GoogleApi, e le librerie Dropzone e Spatie."
          link="https://github.com/LorenzoAlu/lorenzo_presto"
          :image="require('./../assets/presto2.jpg')"
        ></card-base>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center my-5">
        <h3>
          Vuoi vedere altri progetti? Visita il mio profilo
          <a href="https://github.com/LorenzoAlu" target="_blank">GitHub</a>;)
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import CardBase from "../Card/CardBase.vue";
export default {
  components: { CardBase },
  data() {
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
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