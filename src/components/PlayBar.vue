<template>
  <div
    id="bar"
    class=""
    :class="{
      'w-full py-4 px-4 sm:px-0 sm:py-0 xl:w-1280px  sm:h-24 bg-bg-musica fixed bottom-0 ': isActive,
      'w-full py-4 px-4 sm:px-0 sm:py-0 sm:h-24 bg-bg-musica absolute bottom-0 left-0': !isActive,
    }"
  >
    <section
      class="flex justify-between gap-4 flex-col sm:flex-row h-full items-center"
    >
      <article class="h-full flex flex-column sm:flex-row">
        <img class="w-24" :src="cancion.album.cover_medium" alt="" />
        <div class="flex flex-col justify-center ml-5">
          <h3 class="text-base text-white font-bold mb-2">
            {{ cancion.title }}
          </h3>
          <p class="text-sm text-white font-normal">
            {{ cancion.artist.name }}
          </p>
        </div>
      </article>
      <div class="flex items-center gap-5">
        <button class="" @click="anteriorCancion(cancion.id)">
          <img src="../assets/anterior.png" alt="anterior" />
        </button>
        <button
          v-if="!isPlaying"
          class="rounded-full w-16 py-2 pr-2 pl-2 focus:outline-none bg-red-300"
        >
          <img src="../assets/play2.png" alt="play" @click="comenzar()" />
        </button>
        <button
          v-else
          class="rounded-full w-16 py-2 pr-2 pl-2 focus:outline-none outline-none bg-red-300"
        >
          <img
            src="../assets/pause.png"
            class="object-cover"
            alt="play "
            @click="pausar()"
          />
        </button>
        <button @click="siguienteCancion(cancion.id)">
          <img src="../assets/siguiente.png" alt="siguiente" />
        </button>
      </div>
      <div class="flex">
        <!-- <b-form-input
          class="text-white"
          id="range-1"
          v-model="volumen"
          type="range"
          min="0"
          max="1"
          step="0.1"
          @click="subirBajar(volumen)"
        ></b-form-input> -->
        <input
          class="text-white"
          id="range-1"
          v-model="volumen"
          type="range"
          min="0"
          max="1"
          step="0.1"
          @click="subirBajar(volumen)"
        />

        <p class="text-white font-semibold mx-5 w-16">{{ volume * 100 }}%</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "PlayBar",
  data() {
    return {
      isActive: false,
      isPlay: this.isPlaying,
      volumen: this.volume,
    };
  },
  props: {},
  watch: {},
  computed: {
    ...mapState(["cancion", "isPlaying", "volume"]),
  },
  methods: {
    ...mapActions([
      "guardarUsuario",
      "play",
      "pause",
      "subirBajar",
      "siguienteCancion",
      "anteriorCancion",
    ]),

    comenzar() {
      this.play(true);
    },
    pausar() {
      this.pause(false);
    },
  },
  mounted() {
    window.document.onscroll = () => {
      let cambio = document.getElementById("bar");
      if (window.scrollY >= 0) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    };
  },
};
</script>
