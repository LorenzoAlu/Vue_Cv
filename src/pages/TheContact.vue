<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
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

</style>