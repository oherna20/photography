<template>
    <input
    class="container block mx-auto rounded-full mt-8 p-2 text-2xl text-center outline-none focus:rising-4 focus:ring-green-500
    focus:ring-opacity-50"
    type="text"
    placeholder="I'm looking for..."
    v-model="search"
    @change="getPhotos"
    />
</template>

<script setup>
import {search, getPhotos} from './helpers/usePhoto'
</script>