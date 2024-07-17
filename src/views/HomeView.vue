<template>
  <main id="container">
    <WeddingHeader />
    <Grid />
    <PictureOverlay
      v-if="route.params.id"
      :picture-url="`https://d3k3hd4ykp0iit.cloudfront.net/MH-${route.params.id}.avif`"
    />
  </main>
</template>

<script setup>
import WeddingHeader from "../components/WeddingHeader.vue";
import Grid from "../components/Grid.vue";
import PictureOverlay from "../components/PictureOverlay.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
