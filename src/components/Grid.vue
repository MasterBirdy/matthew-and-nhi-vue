<template>
  <div id="grid">
    <Icon
      v-for="(id, index) in store.pictureIds"
      :class="{ left: index % 2 === 1, right: index % 2 === 0 }"
      :icon-url="`https://d3k3hd4ykp0iit.cloudfront.net/MH-${id}-icon.avif`"
      :picture-id="id"
    />
    <!-- <Icon
      class="right"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-1-icon.avif"
      :picture-id="1"
    />
    <Icon
      class="left"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-2-icon.avif"
      :picture-id="2"
    />
    <Icon
      class="right"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-3-icon.avif"
      :picture-id="3"
    />
    <Icon
      class="left"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-4-icon.avif"
      :picture-id="4"
    />
    <Icon
      class="right"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-5-icon.avif"
      :picture-id="5"
    />
    <Icon
      class="left"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-6-icon.avif"
      :picture-id="6"
    />
    <Icon
      class="right"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-7-icon.avif"
      :picture-id="7"
    />
    <Icon
      class="left"
      icon-url="https://d3k3hd4ykp0iit.cloudfront.net/MH-8-icon.avif"
      :picture-id="8"
    /> -->
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import Icon from "./Icon.vue";
// import { usePictureStore } from "@/stores/counter";
import { useDebounceFn } from "@vueuse/core";
import { store } from "@/stores/reactive";
const debouncedFn = useDebounceFn(() => {
  // The number of pixels the document is currently scrolled vertically
  const scrollTop = window.scrollY;
  // The height of the browser window
  const windowHeight = window.innerHeight;
  // The height of the entire document
  const documentHeight = document.documentElement.scrollHeight;
  if (scrollTop + windowHeight >= documentHeight - 100) {
    store.increasePictures();
  }
}, 100);
onMounted(() => {
  window.addEventListener("scroll", debouncedFn);
});
onUnmounted(() => {
  window.removeEventListener("scroll", debouncedFn);
});
//const store = usePictureStore();
</script>
<style scoped>
#grid {
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
}

@media (max-width: 650px) {
  #grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 500px) {
  #grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
}
</style>
