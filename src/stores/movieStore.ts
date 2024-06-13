import { defineStore } from "pinia";
import MovieApi from "@/core/api/movieApi";
import type { TMovie, TMovieSearchResult } from "@/core/types/TMovie";
import type { MenuItem } from "primevue/menuitem";
import router from "@/router";
export const useMovieStore = defineStore("movies", {
  state: () => ({
    searchResults: [] as Array<TMovieSearchResult>,
    searchHistory: {} as Record<string, Array<TMovieSearchResult>>,
    movieHistory: [] as Array<TMovie>,
    activeMovie: null as unknown as TMovie,
  }),
  actions: {
    async searchByName(movieName: string) {
      if (!this.searchHistory[movieName]) {
        const resp = await MovieApi.searchByName(movieName);
        this.searchHistory[movieName] = resp.Search;
        this.searchResults = resp.Search;
        return;
      }
      this.searchResults = this.searchHistory[movieName];
    },
    async openMovie(movieId: string) {
      let movie = this.movieHistory.find((_movie) => _movie.imdbID === movieId);
      if (movie) {
        this.activeMovie = movie;
        return movie;
      }
      movie = await MovieApi.getMovieById(movieId);
      this.activeMovie = movie;
      this.movieHistory.push(movie);
      return movie;
    },
  },
  persist: true,
});
