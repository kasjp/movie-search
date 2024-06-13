<script setup lang="ts">
  import type { TMovieSearchResult } from "@/core/types/TMovie";
  import Card from "primevue/card";
  defineProps<TMovieSearchResult>();
</script>
<template>
  <Card class="w-auto overflow-hidden cursor-pointer">
    <template #header>
      <img alt="movie header" :src="Poster" class="w-full h-sm object-cover" />
    </template>
    <template #title>{{ Title }} ({{ Year }})</template>
    <template #subtitle>{{
      Type.charAt(0).toUpperCase() + Type.slice(1)
    }}</template>
  </Card>
</template>
