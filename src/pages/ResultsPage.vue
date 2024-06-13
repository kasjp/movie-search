<script setup lang="ts">
  import MovieCard from "@/components/MovieCard.vue";
  import router from "@/router";
  import { useMovieStore } from "@/stores/movieStore";
  import { computed } from "vue";
  const movieStore = useMovieStore();
  const results = computed(() =>
    router.currentRoute.value.name == "history"
      ? movieStore.movieHistory
      : movieStore.searchResults
  );
</script>
<template>
  <div class="grid grid-cols-3 md:grid-cols-4 gap-6 p-6">
    <MovieCard
      v-for="movie in results"
      :key="movie.imdbID"
      v-bind="movie"
      @click="router.push('/results/' + movie.imdbID)"
    />
  </div>
</template>
