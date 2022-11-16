<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import VideoPlayer from './components/VideoPlayer.vue'
  import VideoDetails from './components/VideoDetails.vue'
  import Chat from './components/Chat.vue'
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="side">
      <VideoDetails />
      <Chat />
    </div>
  </div>
</template>

<style scoped>
  .app {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 1em;
  }
</style>
