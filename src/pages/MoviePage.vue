<script setup lang="ts">
  import { useMovieStore } from "@/stores/movieStore";
  import { useRoute } from "vue-router";

  const movieStore = useMovieStore();
  const route = useRoute();
  const movie = await movieStore.openMovie(route.path.split("/").pop() || "");
</script>
<template>
  <div class="grid cols-1 md:cols-2 max-w-5xl pt-12 pb-12">
    <div class="p-6 text-center md:text-left flex align-items-center flex-col">
        <span class="block font-bold mb-4 text-10"
          >{{ movie.Title }} ({{ movie.Year }})</span
        >

        <p class="mb-8 text-4">
          {{ movie.Plot }}
        </p>
        <p>
            Directed by {{ movie.Director }}
        </p>
        <p>
            Actors: {{ movie.Actors }}
        </p>

        <p class="flex flex-col gap-2 text-gray mb-0 mt-auto">
          <div v-for="rating in movie.Ratings" :key="rating.Source">
            {{ rating.Source }} : {{ rating.Value }}
          </div>
        </p>
    </div>
    <div class="flex justify-center">
      <img
        :src="movie.Poster"
        alt="Image"
      />
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .md\:cols-2 {
    grid-template-columns: 3fr 1fr;
  }
}
</style>
