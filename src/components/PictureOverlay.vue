<template>
  <div class="overlay">
    <div class="tester">
      <router-link class="loaded-link" :to="{ name: 'home' }">
        <v-icon
          v-show="loaded"
          name="bi-x-circle-fill"
          fill="white"
          scale="1.5"
        />
      </router-link>
      <a class="left-link" @click="navigatePrevious">
        <v-icon name="bi-arrow-left-circle-fill" fill="white" />
      </a>
      <a class="right-link" @click="navigateNext">
        <v-icon name="bi-arrow-right-circle-fill" fill="white" />
      </a>
      <img @load="loaded = true" :src="pictureUrl" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { store } from "@/stores/reactive";
import { useRouter } from "vue-router";
const router = useRouter();
const loaded = ref(false);
const props = defineProps({
  pictureUrl: String,
});
function navigatePrevious() {
  router.push({
    name: "picture",
    params: { id: store.findPrevious(router.currentRoute.value.params.id) },
  });
}

function navigateNext() {
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
  z-index: 1;
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
}

a.right-link {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -3rem;
  scale: 3;
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
</style>
