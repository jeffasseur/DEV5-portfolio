<script setup>
    import { ref, reactive, onMounted } from 'vue'
    import 'animate.css'
    // reactive: For objects and arrays, define your keys
    // ref: For primitive values: String, numbers, ...

    let src = ref('')
    let videos = reactive({ videos: [] })
    let animation = ref('')

    onMounted ( () => {
        // console.log('mounted')
        let api_url = "/tiktok.json"
        fetch(api_url)
        .then(response => response.json())
        .then(data => {
            src.value = data.videos[0].video
            videos.videos = data.videos
        })
    })

    const nextVideo = () => {
        animation.value = 'animate__fadeOut'
        setTimeout(() => {
            src.value = videos.videos[1].video
            animation.value = 'animate__fadeIn'
        }, 1000)
    }
</script>

<template>
    <div class="relative">
        <div class="controls">
            <a @click.prevent="nextVideo" href="#" class="controls__next">🔻</a>
        </div>
        <video :src="src" autoplay muted class="animate__animated" :class="animation"></video>
    </div>
</template>

<style scoped>
    .relative {
        position: relative;
    }
    .controls {
        position: absolute;
        top: 50%;
        right: 16px;
        font-size: 6em;
    }
    video {
        width: 100%;
        height: 100%;
        border-radius: .5em;
    }
</style>
