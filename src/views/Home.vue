<template>
  <div class="flex justify-center flex-col bg-grey-title-music">
    <div class="max-w-7xl w-full mx-auto relative">
      <div class="w-full flex justify-center">
        <Slite />
        <Content />
      </div>
      <PlayBar />
    </div>
  </div>
</template>

<script>
import Slite from "@/components/Slite.vue";
import Content from "@/components/Content.vue";
import PlayBar from "@/components/PlayBar.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Slite,
    Content,
    PlayBar,
  },
  methods: {},
};
</script>
