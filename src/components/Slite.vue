<template>
  <div
    class="max-w-xs bg-dark-red-secundary min-h-screen text-left hidden lg:block"
  >
    <div class="pt-12 px-10 mb-8">
      <img src="@/assets/foxbel-music.png" alt="Fox Music logo" />
    </div>
    <div class="flex flex-col justify-start mb-8">
      <h2 class="font-bold text-22px text-white pl-10 mb-1">Mi librería</h2>
      <ul class="flex flex-col gap-2">
        <li class="">
          <a
            class="btn hover:text-red-principal hover:border-red-principal"
            href="#"
            >Recientes</a
          >
        </li>
        <li class="">
          <a
            class="btn hover:text-red-principal hover:border-red-principal"
            href="#"
          >
            Artistas</a
          >
        </li>
        <li class="">
          <a class="btn hover:text-red-principal hover:font-bold" href="#"
            >Álbums</a
          >
        </li>
        <li class="">
          <a class="btn hover:text-red-principal hover:font-bold" href="#"
            >Canciones</a
          >
        </li>
        <li class="">
          <a class="btn hover:text-red-principal hover:font-bold" href="#"
            >Estaciones</a
          >
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-start">
      <h2 class="font-bold text-22px text-white pl-10 mb-1">Playlist</h2>
      <ul class="flex flex-col gap-2">
        <li class="">
          <a class="btn hover:text-red-principal hover:border-red-principal"
            >Metal</a
          >
        </li>
        <li class="">
          <a
            class="btn hover:text-red-principal hover:border-red-principal"
            href="#"
          >
            Para bailar</a
          >
        </li>
        <li class="">
          <a class="btn hover:text-red-principal hover:font-bold" href="#"
            >Rock 90s</a
          >
        </li>
        <li class="">
          <a class="btn hover:text-red-principal hover:font-bold" href="#"
            >Baladas</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slite",
  data() {
    return {};
  },
};
</script>

<style>
</style>