<script setup lang="ts">
  import { RouterView, useRouter } from "vue-router";
  import Menubar from "primevue/menubar";

  import Dropdown, { type DropdownChangeEvent } from "primevue/dropdown";
  import Button from "primevue/button";
  import InputGroup from "primevue/inputgroup";

  import { useMovieStore } from "./stores/movieStore";
  import { ref } from "vue";
  const movieStore = useMovieStore();
  const router = useRouter();
  const searchValue = ref("");
  let searchTimeout: any = null;
  function search() {
    if (searchValue.value) {
      movieStore.searchByName(searchValue.value);
      router.push("/results");
    }
  }
  function handleEnter(event: KeyboardEvent) {
    if (event.key == "Enter") {
      search();
    }
  }
  window.addEventListener("keyup", handleEnter);

  function handleChange(event: DropdownChangeEvent) {
    if (event.originalEvent.type === "click") {
      search();
    }
  }
</script>

<template>
  <header>
    <Menubar class="w-full">
      <template #start>
        <InputGroup>
          <Dropdown
            editable
            v-model="searchValue"
            :options="Object.keys(movieStore.searchHistory)"
            @change="handleChange"
            placeholder="Movie Title"
            type="text"
            class="w-auto"
          />
          <Button icon="pi pi-search" @click="search" />
        </InputGroup>
      </template>
      <template #end>
        <router-link v-slot="{ href, navigate }" to="/history" custom>
          <a
            class="decoration-none visited:decoration-none c-dark"
            :href="href"
            @click="navigate"
          >
            <span class="ml-2">History</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </header>
  <main class="flex justify-center">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
