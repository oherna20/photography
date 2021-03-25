<template>
    <Search />
        <div
         class="mt-8 container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-tems-center"
        >
          <img
            v-for="photo in photos"
            :key="photo.id"
            :src="photo.src.small"
      
       />
    
   
        </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { photos } from '../components/helpers/usePhoto'


</script>