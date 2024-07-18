<template>
  <div class="overlay">
    <v-icon
      v-show="!loaded"
      class="spinner"
      name="fa-spinner"
      fill="white"
      scale="3"
      animation="spin"
      speed="slow"
    />
    <div class="tester">
      <router-link class="loaded-link" :to="{ name: 'home' }">
        <v-icon
          v-show="loaded"
          name="bi-x-circle-fill"
          fill="white"
          scale="1.5"
        />
      </router-link>
      <a
        class="left-link"
        @click="navigatePrevious"
        :class="{
          initial: !loadedInitial,
        }"
      >
        <v-icon name="bi-arrow-left-circle-fill" fill="white" />
      </a>
      <a
        class="right-link"
        @click="navigateNext"
        :class="{
          initial: !loadedInitial,
        }"
      >
        <v-icon name="bi-arrow-right-circle-fill" fill="white" />
      </a>
      <img @load="loadHandler" :src="pictureUrl" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { store } from "@/stores/reactive";
import { useRouter } from "vue-router";
const router = useRouter();
const loaded = ref(false);
const loadedInitial = ref(false);
const props = defineProps({
  pictureUrl: String,
});
function navigatePrevious() {
  loaded.value = false;
  router.push({
    name: "picture",
    params: { id: store.findPrevious(router.currentRoute.value.params.id) },
  });
}

function navigateNext() {
  loaded.value = false;
  router.push({
    name: "picture",
    params: { id: store.findNext(router.currentRoute.value.params.id) },
  });
}

function navigateHandler(event) {
  if (event.keyCode === 37) {
    navigatePrevious();
  } else if (event.keyCode === 39) {
    navigateNext();
  }
}

function loadHandler() {
  loadedInitial.value = true;
  loaded.value = true;
}
onMounted(() => {
  window.addEventListener("keydown", navigateHandler);
});
onUnmounted(() => {
  window.removeEventListener("keydown", navigateHandler);
});
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tester {
  position: relative;
}
a.loaded-link {
  position: absolute;
  border: 0;
  top: -2rem;
  right: -1.25rem;
  cursor: pointer;
}

a.left-link {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -3rem;
  scale: 3;
  cursor: pointer;
}

a.left-link.initial {
  left: -8rem;
}

a.right-link {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -3rem;
  scale: 3;
  cursor: pointer;
}

a.right-link.initial {
  right: -8rem;
}

@media (max-width: 850px) {
  a.left-link,
  a.right-link {
    scale: 2;
  }
}

@media (max-width: 600px) {
  a.left-link {
    left: -2rem;
    scale: 1.5;
  }
  a.right-link {
    right: -2rem;
    scale: 1.5;
  }
}

svg {
  transition: scale 0.3s;
  color: white;
}

svg:hover {
  scale: 1.2;
}

img {
  max-height: 92.5vh;
  max-width: 77.5vw;
  image-rendering: -webkit-optimize-contrast;
}

.spinner {
  position: absolute;
  z-index: 1;
  top: 47.5%;
  left: 47.5;
  transform: translate(-47.5%, -47.5%);
}

@media (max-width: 850px) {
  spinner {
    scale: 2;
    top: 45%;
    left: 45%;
    transform: translate(-45%, -45%);
  }
}
</style>
