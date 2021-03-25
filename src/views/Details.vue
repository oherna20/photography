<template>
    <div class="mt-8 grid justify-items-center space-y-4">
        <h1 class="text-3xl font-thin text-gray-200">Details of {{ id }}</h1>
        <div class="bg-pink-500 w-64 h-64" />
        <p class="text-gray-200 font-light">Other Details here</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const id = useRoute().params.id
</script>