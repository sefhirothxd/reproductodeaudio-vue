<template>
  <div
    class="xl:w-970px lg:h-full min-h-screen w-full pt-8 sm:pb-28 pb-64 px-10 bg-white"
  >
    <div class="flex justify-between flex-col items-center sm:flex-row">
      <form
        @submit.prevent="busqueda(nombre)"
        class="flex justify-between w-3/5 mb-6 sm:mb-0 h-9 items-center rounded-full px-5 border-2 border-grey-subtitle-music overflow-hidden"
      >
        <input
          type="text"
          class="outline-none w-full"
          v-model="nombre"
          placeholder="Buscar"
        />
        <button type="submit">
          <img src="../assets/icon-buscar.png" alt="" />
        </button>
      </form>
      <div class="flex items-center">
        <img class="mr-3" src="../assets/user.png" alt="usuario" />
        <p>Francisco M.</p>
      </div>
    </div>
    <div class="sm:flex mt-10 hidden h-64" v-if="seleccionado">
      <img
        class="object-cover"
        :src="cancion.album.cover_medium"
        alt="adelen"
      />
      <div
        class="text-white pt-5 pl-4 lg:pt-10 lg:pl-8 relative overflow-hidden bg-color-musica-fondo bg-opacity-40"
      >
        <article class="text-left">
          <section class="mb-5">
            <h1 class="text-22px font-bold text-white">{{ cancion.title }}</h1>
            <div class="flex items-center">
              <p class="text-sm mr-4">{{ cancion.artista.name }}</p>
              <span class="text-seguidores text-10px pt-1"
                >{{ cancion.artista.nb_fan }} seguidores</span
              >
            </div>
          </section>
          <section class="mb-10">
            <p class="text-xs pr-10 leading-5">
              Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
              mayo de 1988), conocida simplemente como Adele, es una cantante,
              compositora y multinstrumentista británica.8​
            </p>
          </section>
          <div class="flex gap-6 pb-10 items-center">
            <button
              v-if="!isPlaying"
              class="bg-red-principal rounded-full text-white py-2 px-6"
              @click="comenzar()"
            >
              Reproducir
            </button>
            <button
              v-else
              class="bg-red-principal rounded-full text-white py-2 px-6"
              @click="pausar()"
            >
              Pausa
            </button>
            <button
              class="bg-transparent border-red-principal border-2 rounded-full text-red-principal py-1 px-8"
            >
              Seguir
            </button>
            <button
              class="text-4xl self-center pb-6 top-0 absolute lg:static right-5 transform rotate-90 lg:rotate-0"
            >
              ...
            </button>
          </div>
        </article>
      </div>
    </div>
    <div class="mt-10">
      <h2 class="text-red-principal text-22px text-left mb-5">Resultados</h2>
      <div
        class="flex flex-wrap gap-4 justify-center overflow-y-scroll max-h-full w-full"
      >
        <div
          class=""
          @click="alerta(item)"
          v-for="(item, index) in canciones"
          :key="index"
        >
          <img
            class="w-40 object-cover"
            :src="item.album.cover_medium"
            :alt="item.album.title"
          />
          <article class="text-left w-40">
            <h3 class="text-sm font-bold">{{ item.title }}</h3>
            <p class="text-xs">{{ item.artist.name }}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      nombre: "",
      seleccionado: false,
      player: new Audio(),
    };
  },
  computed: {
    ...mapState(["isPlaying", "canciones", "cancion"]),
  },
  methods: {
    ...mapActions([
      "guardarCancion",
      "play",
      "pause",
      "buscarCancion",
      "seleccionarCancion",
    ]),
    busqueda(nombre) {
      this.buscarCancion(nombre);
    },
    alerta(item) {
      this.seleccionarCancion(item);
      this.seleccionado = true;
    },
    comenzar() {
      this.play(true);
    },
    pausar() {
      this.pause(false);
    },
  },
};
</script>

<style scoped>
</style>
