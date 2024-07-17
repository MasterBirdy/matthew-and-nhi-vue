<template>
  <div class="card-container">
    <router-link :to="{ name: 'picture', params: { id: pictureId } }">
      <img :src="iconUrl" />
    </router-link>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isOverlayEnabled = ref(false);
defineProps({
  iconUrl: String,
  pictureId: Number,
});
</script>
<style scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 160px;
  height: 160px;
  border-radius: 20px;
  cursor: pointer;
}

@media (max-width: 500px) {
  .right {
    justify-content: right;
  }

  .left {
    justify-content: left;
  }
}
</style>
