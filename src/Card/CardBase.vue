<template>
    <div class="col-10 col-md-5 my-3">
        <div class="card h-100 ">
            <div class="card-title">
               <h3>{{title}}</h3>
            </div>
            <div>
            <img class="img-fluid mx-auto" :src="image" >
            </div>
            <div class="card-desciption">
               <p>{{description}}</p> 
               <a :href="link" target="_blank">> Link Al Progetto</a>
            </div>
            
        </div>      
    </div> 
</template>

<script>
export default {
    props:['image','title','description','link']
}
</script>

<style scoped>
    a{
        text-decoration: none;
        color: black;
    }

    .card{
        padding: 20px;
        border-radius: 20px;
        box-shadow:2px 2px 10px rgba(0, 0, 0, 0.3) ;
    }
</style>