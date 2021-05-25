<template>
   <form action="">
          <div class="mb-3">
            <label for="email" class="form-label">Inserisci La Tua Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
           <label for="object" class="form-label">Inserisci l'oggeto della mail</label>
            <input type="text" class="form-control" id="object" aria-describedby="objectHelp"/>
          </div>
          <div class="mb-3">
           <label for="body" class="form-label">Inserisci Il Messaggio</label>
            <textarea class="form-control" id="body" aria-describedby="bodyHelp"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
</template>

<script>
export default {

}
</script>

<style scoped>
form {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  margin-top: 5rem;
}
</style>