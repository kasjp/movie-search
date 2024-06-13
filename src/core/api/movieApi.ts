import type { TMovie, TMovieSearchResult } from "../types/TMovie";

export default class MovieApi {
  static async searchByName(
    movieName: string
  ): Promise<{ Search: Array<TMovieSearchResult> }> {
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${movieName}`
    );
    return await resp.json();
  }
  static async getMovieById(movieId: string): Promise<TMovie> {
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${movieId}`
    );
    return await resp.json();
  }
}
